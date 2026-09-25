import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  ViewEncapsulation,
  booleanAttribute,
  input,
  numberAttribute
} from '@angular/core';

import type { G2Spec } from '@antv/g2';

import { G2BaseComponent, viewSpec } from '@delon/chart/core';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'g2-single-bar',
  exportAs: 'g2SingleBar',
  template: ``,
  host: {
    '[style.height.px]': 'height()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class G2SingleBarComponent extends G2BaseComponent {
  // #region fields

  readonly plusColor = input('#40a9ff');
  readonly minusColor = input('#ff4d4f');
  readonly height = input(60, { transform: numberAttribute });
  readonly barSize = input(30, { transform: numberAttribute });
  readonly min = input(0, { transform: numberAttribute });
  readonly max = input(100, { transform: numberAttribute });
  readonly value = input(0, { transform: numberAttribute });
  readonly line = input(false, { transform: booleanAttribute });
  readonly format = input<(value: number, item: NzSafeAny, index: number) => string>();
  readonly padding = input<number | number[] | 'auto'>(0);
  readonly textStyle = input<Record<string, NzSafeAny>>({ fontSize: 12, color: '#595959' });

  // #endregion

  protected buildSpec(): G2Spec {
    const { value, min, max, plusColor, minusColor, barSize, format, textStyle, line, theme, padding, height } = this;
    const children: Array<Record<string, NzSafeAny>> = [
      {
        type: 'interval',
        data: [{ value: value() }],
        encode: {
          x: { type: 'constant', value: '1' },
          y: 'value',
          color: {
            type: 'transform',
            value: (d: { value: number }) => (d.value > 0 ? plusColor() : minusColor())
          }
        },
        // 条厚必须用像素级的 minWidth/maxWidth 夹取：encode.size 是数据空间长度，转置后会被绘图区宽高比压缩
        style: { minWidth: barSize(), maxWidth: barSize() },
        labels: [{ text: 'value', formatter: format(), style: { ...textStyle() } }],
        // G2 从不读取 min/max，固定上下界必须用 domain
        scale: { y: { domain: [min(), max()] } },
        legend: false,
        axis: false,
        tooltip: false
      }
    ];
    if (line()) {
      // lineY 的 data 是数值数组：取值域中点即分隔线位置
      children.push({
        type: 'lineY',
        data: [(min() + max()) / 2],
        style: { stroke: '#e8e8e8', lineWidth: 1 }
      });
    }
    return {
      ...viewSpec({ theme: theme(), padding: padding(), height: height() }),
      // transpose 是坐标变换，必须挂在 coordinate.transform 上，且不能只挂 interval mark（否则兄弟 lineY 不会被转置）
      coordinate: { transform: [{ type: 'transpose' }] },
      children
    } as G2Spec;
  }

  protected override dataOf(): unknown {
    return [{ value: this.value() }];
  }

  protected override isDataOnly(changed: ReadonlyArray<Signal<unknown>>): boolean {
    // lineY 是非数据兄弟 mark，走 data-only 会让 changeData 把它的定位 data 覆盖掉
    if (this.line()) {
      return false;
    }
    // 用 Object.is 比较信号引用，避免 no-uncalled-signals 误报
    return changed.length === 1 && Object.is(changed[0], this.value);
  }
}
