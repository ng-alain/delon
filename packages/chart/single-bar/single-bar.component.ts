import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  ViewEncapsulation,
  booleanAttribute,
  input,
  numberAttribute
} from '@angular/core';

import type { Chart } from '@antv/g2';

import { G2BaseComponent } from '@delon/chart/core';
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

  install(): void {
    const { el, height, padding, textStyle, line, format, theme, min, max, plusColor, minusColor, barSize } = this;
    const chart: Chart = (this._chart = new this.winG2.Chart({
      container: el.nativeElement,
      autoFit: true,
      height: height(),
      padding: padding(),
      theme: theme()
    }));
    chart.legend(false);
    chart.axis(false);
    chart.scale({ value: { max: max(), min: min() } });
    chart.tooltip(false);
    chart.coordinate().transpose();
    chart
      .interval()
      .position('1*value')
      .color('value', (val: number) => (val > 0 ? plusColor() : minusColor()))
      .size(barSize())
      .label('value', () => ({
        formatter: format(),
        style: {
          ...textStyle()
        }
      }));

    if (line()) {
      chart.annotation().line({
        start: ['50%', '0%'],
        end: ['50%', '100%'],
        style: {
          stroke: '#e8e8e8',
          lineDash: [0, 0]
        }
      });
    }

    this.ready.emit(chart);

    this.changeData();

    chart.render();
  }

  /** 等价旧 onlyChangeData：仅 value 变更时平滑更新 */
  protected override isDataOnly(changed: ReadonlyArray<Signal<unknown>>): boolean {
    // `Object.is` 按引用比较（对信号对象与 `===` 等价），避免 `no-uncalled-signals` 误报
    return changed.length === 1 && Object.is(changed[0], this.value);
  }

  changeData(): void {
    const { _chart, value } = this;
    if (!_chart) return;
    _chart.changeData([{ value: value() }]);
  }
}
