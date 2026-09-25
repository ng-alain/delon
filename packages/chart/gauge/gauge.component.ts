import { ChangeDetectionStrategy, Component, ViewEncapsulation, input, numberAttribute } from '@angular/core';

import type { G2Spec } from '@antv/g2';

import { G2BaseComponent, viewSpec } from '@delon/chart/core';
import { NzSkeletonComponent } from 'ng-zorro-antd/skeleton';

@Component({
  selector: 'g2-gauge',
  exportAs: 'g2Gauge',
  template: `
    @if (!loaded()) {
      <div style="position: absolute; inset: 0; z-index: 1;">
        <nz-skeleton />
      </div>
    }
    <div
      class="g2-gauge__center"
      [style.top.px]="centerTop()"
      style="position: absolute; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; pointer-events: none; white-space: nowrap;"
    >
      @if (title()) {
        <span style="font-size: .8em;" [style.color]="titleColor()">{{ title() }}</span>
      }
      <span style="font-size: 1.4em;" [style.color]="valueColor()">{{ percent() ?? 0 }} %</span>
    </div>
  `,
  host: {
    class: 'g2-gauge',
    '[style.width.px]': 'width()',
    '[style.height.px]': 'height()',
    '[style.font-size.px]': 'fontSize()',
    '[style.position]': '"relative"'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [NzSkeletonComponent]
})
export class G2GaugeComponent extends G2BaseComponent {
  // #region fields

  readonly title = input<string>();
  readonly height = input(undefined, { transform: numberAttribute });
  readonly width = input(undefined, { transform: numberAttribute });
  readonly fontSize = input(14, { transform: numberAttribute });
  /** 值弧颜色 */
  readonly color = input('#2f9cff');
  /** 背景弧颜色 */
  readonly bgColor = input('#f0f2f5');
  readonly format = input<(text: string, item: unknown, index: number) => string>();
  readonly percent = input(undefined, { transform: numberAttribute });
  readonly padding = input<number | number[] | 'auto'>(16);

  // #endregion

  protected buildSpec(): G2Spec {
    const { percent, color, bgColor, title, theme, padding, height, width, format } = this;

    const ret = {
      ...viewSpec({
        theme: theme(),
        padding: padding(),
        height: height(),
        width: width(),
        animate: false
      }),
      legend: false,
      tooltip: false,
      children: [
        {
          type: 'gauge',
          animate: false,

          // 不能用 `percent`：gauge 内部会强制 total = 1，而本组件的 `percent` 是 0–100，故用 `target`/`total`
          data: { value: { target: percent() ?? 0, total: 100, name: title() } },
          scale: { color: { range: [color(), bgColor()] } },
          style: {
            arcShape: 'round',
            arcLineWidth: 2,
            pinR: 4,
            // gauge 自带的中心文本置空，改由模板 HTML 渲染
            textContent: () => ''
          },
          // `labelAlign: 'horizontal'` 固定刻度水平（默认 `parallel` 随弧旋转）
          axis: {
            y: {
              tick: false,
              labelSpacing: -30,
              labelAlign: 'horizontal',
              ...(format() ? { labelFormatter: format() } : {})
            }
          },
          tooltip: false
        }
      ]
    } as G2Spec;
    return ret;
  }

  /** 中心文字块的纵坐标（px），与弧的居中公式同源 */
  protected centerTop(): number {
    const raw = this.padding();
    const h = this.height() ?? 0;
    const p = typeof raw === 'number' ? raw : 0;
    if (h <= 0) {
      return 0;
    }
    const padTop = Math.round((h + p) / 3);
    const radius = (h - padTop - p) / 2;
    return Math.round(padTop + radius);
  }

  protected titleColor(): string {
    return this.theme() === 'dark' ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.45)';
  }

  protected valueColor(): string {
    return this.theme() === 'dark' ? 'rgba(255,255,255,0.85)' : 'rgba(0,0,0,0.85)';
  }

  /** gauge 的"数据"全部由输入派生，重下 spec 比走 changeData 更可靠 */
  protected override isDataOnly(): boolean {
    return false;
  }
}
