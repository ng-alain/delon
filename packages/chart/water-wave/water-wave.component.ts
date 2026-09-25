import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewEncapsulation,
  booleanAttribute,
  input,
  numberAttribute
} from '@angular/core';

import type { G2Spec } from '@antv/g2';

import { G2BaseComponent, viewSpec } from '@delon/chart/core';
import { NzStringTemplateOutletDirective } from 'ng-zorro-antd/core/outlet';
import { NzSkeletonComponent } from 'ng-zorro-antd/skeleton';

@Component({
  selector: 'g2-water-wave',
  exportAs: 'g2WaterWave',
  template: `
    <div class="g2-water-wave__chart" [style.width.px]="size()" [style.height.px]="size()">
      @if (!loaded()) {
        <div style="position: absolute; inset: 0; z-index: 1;">
          <nz-skeleton />
        </div>
      }
      <div #container class="g2-water-wave__container"></div>
    </div>
    <div class="g2-water-wave__desc" [style.width.px]="size()">
      @if (title()) {
        <span class="g2-water-wave__desc-title">
          <ng-container *nzStringTemplateOutlet="title()">{{ title() }}</ng-container>
        </span>
      }
    </div>
  `,
  host: { class: 'g2-water-wave' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [NzStringTemplateOutletDirective, NzSkeletonComponent]
})
export class G2WaterWaveComponent extends G2BaseComponent {
  // #region fields

  readonly title = input<string | TemplateRef<void> | null>(null);
  readonly color = input('#1890FF');
  /** 边长（px） */
  readonly size = input(160, { transform: numberAttribute });
  readonly percent = input<number>();
  readonly padding = input<number | number[] | 'auto'>(8);
  /** 只控制进场动画；水波流动由 G2 内置、始终运行 */
  readonly animate = input(true, { transform: booleanAttribute });

  // #endregion

  protected override containerOf(): HTMLElement {
    return this.node().nativeElement;
  }

  protected buildSpec(): G2Spec {
    const { percent, color, size, theme, animate, padding } = this;
    // 输入是 0–100，liquid 的 data 是 0–1
    const display = Math.min(Math.max(percent() ?? 0, 0), 100);
    return {
      ...viewSpec({ theme: theme(), height: size(), animate: animate(), padding: padding() }),
      type: 'liquid',
      data: display / 100,
      interaction: { tooltip: false },
      style: {
        fill: color(),
        stroke: color(),
        outlineBorder: 2,
        outlineDistance: 3,
        waveLength: 128,
        // 上游按 data 反推文本，data 为 0 时会算成 `NaN %`
        contentText: `${display} %`,
        contentFill: theme() === 'dark' ? 'rgba(255,255,255,0.85)' : 'rgba(0,0,0,0.85)',
        contentFontSize: 24
      }
    } as G2Spec;
  }

  protected override isDataOnly(): boolean {
    return false;
  }

  /** 手动重绘（兼容 v4） */
  render(): void {
    if (this._chart) {
      void this.repaintSpec();
    }
  }
}
