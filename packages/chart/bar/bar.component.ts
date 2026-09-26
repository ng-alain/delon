import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewEncapsulation,
  booleanAttribute,
  input,
  numberAttribute,
  output
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime, fromEvent } from 'rxjs';

import type { Chart, G2Spec } from '@antv/g2';

import { G2BaseComponent, G2Event, G2InteractionType, viewSpec } from '@delon/chart/core';
import { NzStringTemplateOutletDirective } from 'ng-zorro-antd/core/outlet';
import { NzSkeletonComponent } from 'ng-zorro-antd/skeleton';

/** 标题（模板中的 h4）占用的高度：有标题时需从总高度扣除 */
const TITLE_HEIGHT = 41;

export interface G2BarData {
  x: unknown;
  y: unknown;
  color?: string | null;
  [key: string]: unknown;
}

export interface G2BarClickItem {
  item: G2BarData;
  ev: G2Event;
}

@Component({
  selector: 'g2-bar',
  exportAs: 'g2Bar',
  template: `
    <ng-container *nzStringTemplateOutlet="title()">
      <h4 style="margin-bottom: 20px;">{{ title() }}</h4>
    </ng-container>
    @if (!loaded()) {
      <!-- 骨架屏绝对定位，避免参与布局把图表容器压矮 -->
      <div style="position: absolute; inset: 0; z-index: 1;">
        <nz-skeleton />
      </div>
    }
    <div #container></div>
  `,
  host: {
    '[style.height.px]': 'height()',
    '[style.position]': '"relative"'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [NzStringTemplateOutletDirective, NzSkeletonComponent]
})
export class G2BarComponent extends G2BaseComponent {
  // #region fields

  readonly title = input<string | TemplateRef<void>>();
  readonly color = input('rgba(24, 144, 255, 0.85)');
  readonly height = input(0, { transform: numberAttribute });
  readonly padding = input<number | number[] | 'auto'>('auto');
  readonly data = input<G2BarData[]>([]);
  readonly autoLabel = input(true, { transform: booleanAttribute });
  readonly interaction = input<G2InteractionType>('none');
  readonly clickItem = output<G2BarClickItem>();

  // #endregion

  /** 有标题时扣除标题高度，使标题 + 绘图区等于 height */
  private getHeight(): number {
    return this.title() ? this.height() - TITLE_HEIGHT : this.height();
  }

  protected override containerOf(): HTMLElement {
    return this.node().nativeElement;
  }

  protected buildSpec(): G2Spec {
    const { data, color, interaction, theme, padding } = this;
    const list = data();
    const canvasWidth = this.node().nativeElement.clientWidth;
    return {
      ...viewSpec({ theme: theme(), padding: padding(), height: this.getHeight(), interaction: interaction() }),
      data: list,
      axis: {
        // x 轴仅在每行数据可用宽度 ≥ 30px 时显示；显示时必须显式 title: false，否则会渲染字段名标题
        x: canvasWidth > list.length * 30 ? { title: false } : false,
        y: { title: false, line: false, tick: false }
      },
      scale: {
        x: { type: 'band' },
        y: { zero: true },
        // color 承载的是字面颜色值，必须用 identity 原样透传；否则 G2 会把它当作分类数据走 ordinal 主题色板
        color: { type: 'identity' }
      },
      legend: false,
      tooltip: { title: false },
      children: [
        {
          type: 'interval',
          encode: {
            x: 'x',
            y: 'y',
            color: {
              type: 'transform',
              value: (d: G2BarData) => d.color || color()
            }
          },
          tooltip: {
            // 视图级 tooltip 对 children 无效，title: false 必须写在 mark 级才生效
            title: false,
            items: [(d: G2BarData) => ({ name: d.x, value: d.y })]
          }
        }
      ]
    } as G2Spec;
  }

  protected override afterCreate(chart: Chart): void {
    chart.on('interval:click', (ev: G2Event) => {
      this.clickItem.emit({ item: ev.data?.data as G2BarData, ev });
    });
    this.installResizeEvent();
  }

  private resizeInstalled = false;

  private installResizeEvent(): void {
    // 只在开启 autoLabel 且尚未订阅时装一次；debounce 避免拖拽窗口反复重下 spec
    if (!this.autoLabel() || this.resizeInstalled) {
      return;
    }
    this.resizeInstalled = true;
    fromEvent(window, 'resize')
      .pipe(takeUntilDestroyed(this.destroyRef), debounceTime(200))
      .subscribe(() => void this.repaintSpec());
  }
}
