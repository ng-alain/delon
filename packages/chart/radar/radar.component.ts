import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewEncapsulation,
  booleanAttribute,
  input,
  numberAttribute,
  output,
  signal
} from '@angular/core';

import type { Chart, G2Spec } from '@antv/g2';

import { G2BaseComponent, G2Event, viewSpec } from '@delon/chart/core';
import { NzStringTemplateOutletDirective } from 'ng-zorro-antd/core/outlet';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzColDirective, NzRowDirective } from 'ng-zorro-antd/grid';
import { NzSkeletonComponent } from 'ng-zorro-antd/skeleton';

export interface G2RadarData {
  name: string;
  label: string;
  value: number;
  [key: string]: NzSafeAny;
}

export interface G2RadarClickItem {
  item: G2RadarData;
  ev: G2Event;
}

@Component({
  selector: 'g2-radar',
  exportAs: 'g2Radar',
  template: `
    @if (!loaded()) {
      <nz-skeleton />
    }
    <ng-container *nzStringTemplateOutlet="title()">
      <h4>{{ title() }}</h4>
    </ng-container>
    <div #container></div>
    @if (hasLegend()) {
      <div nz-row class="g2-radar__legend">
        @for (i of legendData(); track $index) {
          <div nz-col [nzSpan]="24 / $count" (click)="_click($index)" class="g2-radar__legend-item">
            <i class="g2-radar__legend-dot" [style]="{ 'background-color': !i.checked ? '#aaa' : i.color }"></i>
            {{ i.name }}
            <h6 class="g2-radar__legend-title">{{ i.value }}</h6>
          </div>
        }
      </div>
    }
  `,
  host: {
    '[style.height.px]': 'height()',
    '[class.g2-radar]': 'true'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [NzSkeletonComponent, NzStringTemplateOutletDirective, NzRowDirective, NzColDirective]
})
export class G2RadarComponent extends G2BaseComponent {
  readonly legendData = signal<NzSafeAny[]>([]);

  // #region fields

  readonly title = input<string | TemplateRef<void> | null>();
  readonly height = input(0, { transform: numberAttribute });
  readonly padding = input<number | number[] | 'auto'>([44, 30, 16, 30]);
  readonly hasLegend = input(true, { transform: booleanAttribute });
  readonly tickCount = input(4, { transform: numberAttribute });
  readonly data = input<G2RadarData[]>([]);
  readonly colors = input(['#1890FF', '#FACC14', '#2FC25B', '#8543E0', '#F04864', '#13C2C2', '#fa8c16', '#a0d911']);
  readonly clickItem = output<G2RadarClickItem>();

  // #endregion

  private getHeight(): number {
    return this.height() - (this.hasLegend() ? 80 : 22);
  }

  protected override containerOf(): HTMLElement {
    return this.node().nativeElement;
  }

  /** 必须同时供首次渲染与 data-only 变更使用，否则 marks 会拿到未过滤的原始数据 */
  private filteredData(): G2RadarData[] {
    const checkedNames = this.legendData()
      .filter(w => w.checked !== false)
      .map(w => w.name);
    return this.data().filter(d => checkedNames.length === 0 || checkedNames.includes(d.name));
  }

  protected buildSpec(): G2Spec {
    const { colors, padding, theme, tickCount } = this;
    return {
      ...viewSpec({ theme: theme(), padding: padding(), height: this.getHeight(), autoFit: true }),
      data: this.filteredData(),
      coordinate: { type: 'polar' },
      legend: false,
      axis: {
        // `line: false` 隐藏轴线，可见的线由 grid 提供
        x: { grid: true, gridStroke: '#e9e9e9', gridLineWidth: 1, labelSpacing: 8, line: false },
        y: {
          zIndex: 1,
          title: false,
          direction: 'center',
          grid: true,
          gridStroke: '#e9e9e9',
          gridLineWidth: 1
        }
      },
      scale: {
        x: { padding: 0.5, align: 0 },
        // v5 忽略 `min`/`max`，下界必须用 `domainMin`
        y: { zero: true, domainMin: 0, tickCount: tickCount() }
      },
      children: [
        { type: 'line', encode: { x: 'label', y: 'value', color: 'name' }, scale: { color: { range: colors() } } },
        {
          type: 'point',
          encode: { x: 'label', y: 'value', color: 'name', shape: 'circle', size: 3 },
          scale: { color: { range: colors() } }
        }
      ]
    } as G2Spec;
  }

  protected override dataOf(): unknown {
    return this.filteredData();
  }

  /** 首帧渲染不触发 `onDataChange()`，故在此重建自绘图例 */
  protected override onRendered(): void {
    this.genLegend();
  }

  protected override onDataChange(): void {
    this.genLegend();
  }

  protected override afterCreate(chart: Chart): void {
    chart.on('point:click', (ev: G2Event) => {
      this.clickItem.emit({ item: ev.data?.data as G2RadarData, ev });
    });
  }

  private genLegend(): void {
    if (!this.hasLegend()) return;
    const colors = this.colors();
    const grouped = new Map<string, { value: number; color: string }>();
    this.data().forEach(item => {
      const prev = grouped.get(item.name);
      grouped.set(item.name, {
        value: (prev?.value ?? 0) + item.value,
        color: colors[grouped.size % colors.length]
      });
    });
    this.legendData.set(
      [...grouped.entries()].map(([name, v]) => ({
        name,
        color: v.color,
        checked: this.legendData().find(w => w.name === name)?.checked !== false,
        value: v.value
      }))
    );
  }

  _click(i: number): void {
    const next = this.legendData().map((item, idx) =>
      idx === i ? { ...item, checked: item.checked === false } : item
    );
    this.legendData.set(next);
    void this.repaintSpec();
  }

  protected override onInputChanges(): void {
    this.legendData().forEach(i => (i.checked = true));
  }
}
