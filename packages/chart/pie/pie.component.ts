import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  input,
  numberAttribute,
  output,
  signal
} from '@angular/core';

import type { Chart, Event } from '@antv/g2';

import { G2BaseComponent, G2InteractionType } from '@delon/chart/core';
import { NzStringTemplateOutletDirective } from 'ng-zorro-antd/core/outlet';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzDividerComponent } from 'ng-zorro-antd/divider';
import { NzSkeletonComponent } from 'ng-zorro-antd/skeleton';

export interface G2PieData {
  x: NzSafeAny;
  y: number;
  [key: string]: NzSafeAny;
}

export interface G2PieClickItem {
  item: G2PieData;
  ev: Event;
}

export interface G2PieRatio {
  /** 占比文本，默认：`占比` */
  text: string;
  /** 反比文本，默认：`反比` */
  inverse: string;
  /** 正比颜色，默认使用 `color` 值 */
  color: string;
  /** 反比颜色，默认：`#F0F2F5` */
  inverseColor: string;
}

@Component({
  selector: 'g2-pie',
  exportAs: 'g2Pie',
  templateUrl: './pie.component.html',
  host: {
    '[class.g2-pie]': 'true',
    '[class.g2-pie__legend-has]': 'hasLegend()',
    '[class.g2-pie__legend-block]': 'block()',
    '[class.g2-pie__mini]': 'isPercent()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [NzSkeletonComponent, NzStringTemplateOutletDirective, NzDividerComponent]
})
export class G2PieComponent extends G2BaseComponent {
  readonly legendData = signal<NzSafeAny[]>([]);
  readonly block = signal(false);
  /** percent 模式下为迷你图（旧 fixData() 的副作用改为派生量） */
  readonly isPercent = computed(() => this.percent() != null);
  private readonly runTooltip = computed(() => (this.isPercent() ? false : this.tooltip()));
  private readonly percentColor = computed(() => {
    const { text, color, inverseColor } = this.ratio();
    return (value: string) => (value === text ? (color ?? this.color()) : inverseColor);
  });
  /** percent 模式下 data 由 percent / ratio 派生 */
  private readonly runData = computed<G2PieData[]>(() => {
    const percent = this.percent();
    if (percent == null) {
      return this.data();
    }
    const { text, inverse } = this.ratio();
    return [
      { x: text, y: percent },
      { x: inverse, y: 100 - percent }
    ];
  });

  // #region fields

  readonly animate = input(true, { transform: booleanAttribute });
  readonly color = input('rgba(24, 144, 255, 0.85)');
  readonly subTitle = input<string | TemplateRef<void> | null>();
  readonly total = input<string | number | TemplateRef<void> | null>();
  readonly height = input(0, { transform: numberAttribute });
  readonly hasLegend = input(false, { transform: booleanAttribute });
  readonly inner = input(0.75);
  readonly padding = input<number | number[] | 'auto'>([12, 0, 12, 0]);
  readonly percent = input(undefined, { transform: numberAttribute });
  readonly tooltip = input(true, { transform: booleanAttribute });
  readonly lineWidth = input(0, { transform: numberAttribute });
  readonly blockMaxWidth = input(380, { transform: numberAttribute });
  readonly select = input(true, { transform: booleanAttribute });
  readonly valueFormat = input<(y: number) => string>();
  readonly data = input<G2PieData[]>([]);
  readonly colors = input<string[]>();
  readonly interaction = input<G2InteractionType>('none');
  readonly ratio = input<G2PieRatio>({
    text: '占比',
    inverse: '反比',
    color: '',
    inverseColor: '#F0F2F5'
  });
  readonly clickItem = output<G2PieClickItem>();

  // #endregion

  private updateBlock(): void {
    this.block.set(!!this._chart && this.hasLegend() && this.el.nativeElement.clientWidth <= this.blockMaxWidth());
  }

  install(): void {
    const {
      node,
      height,
      padding,
      inner,
      hasLegend,
      interaction,
      theme,
      animate,
      lineWidth,
      isPercent,
      percentColor,
      colors
    } = this;
    const chart: Chart = (this._chart = new this.winG2.Chart({
      container: node().nativeElement,
      autoFit: true,
      height: height(),
      padding: padding(),
      theme: theme()
    }));
    chart.animate(animate());

    if (!this.runTooltip()) {
      chart.tooltip(false);
    } else {
      chart.tooltip({
        showTitle: false,
        showMarkers: false
      });
    }
    if (interaction() !== 'none') {
      chart.interaction(interaction());
    }
    chart.axis(false).legend(false).coordinate('theta', { innerRadius: inner() });
    chart.filter('x', (_val: NzSafeAny, item: NzSafeAny) => item.checked !== false);
    chart
      .interval()
      .adjust('stack')
      .position('y')
      .style({ lineWidth: lineWidth(), stroke: '#fff' })
      .color('x', isPercent() ? percentColor() : colors())
      .tooltip('x*percent', (name: string, p: number) => ({
        name,
        value: `${hasLegend() ? p : (p * 100).toFixed(2)} %`
      }))
      .state({});
    chart.scale({
      x: {
        type: 'cat',
        range: [0, 1]
      }
    });

    chart
      .on(`interval:click`, (ev: Event) => {
        this.clickItem.emit({ item: ev.data?.data, ev });
      })
      .on('afterrender', () => this.updateBlock());

    this.ready.emit(chart);

    this.changeData();

    chart.render();
  }

  changeData(): void {
    const { _chart } = this;
    const data = this.runData();
    if (!_chart || !Array.isArray(data) || data.length <= 0) return;

    // 转化 percent
    const totalSum = data.reduce((cur, item) => cur + item.y, 0);
    for (const item of data) {
      item.percent = totalSum === 0 ? 0 : item.y / totalSum;
    }
    _chart.changeData(data);

    this.genLegend();
  }

  private genLegend(): void {
    const { hasLegend, isPercent, _chart } = this;
    if (!hasLegend() || isPercent()) return;

    this.legendData.set(
      _chart!.geometries[0].dataArray.map((item: NzSafeAny) => {
        const origin = item[0]._origin;
        origin.color = item[0].color;
        origin.checked = true;
        origin.percent = (origin.percent * 100).toFixed(2);
        return origin;
      })
    );
  }

  _click(i: number): void {
    const legendData = this.legendData();
    legendData[i].checked = !legendData[i].checked;
    this._chart!.render(true);
  }
}
