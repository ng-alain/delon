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

import type { Chart, G2Spec } from '@antv/g2';

import { G2BaseComponent, G2Event, G2InteractionType, viewSpec } from '@delon/chart/core';
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
  ev: G2Event;
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
  template: `
    @if (!loaded()) {
      <div style="position: absolute; inset: 0; z-index: 1;">
        <nz-skeleton />
      </div>
    }
    <div class="g2-pie__chart">
      <div #container></div>
      @if (subTitle() || total()) {
        <div class="g2-pie__total">
          @if (subTitle()) {
            <h4 class="g2-pie__total-title">
              <ng-container *nzStringTemplateOutlet="subTitle()">
                <div [innerHTML]="subTitle()"></div>
              </ng-container>
            </h4>
          }
          @if (total()) {
            <div class="g2-pie__total-stat">
              <ng-container *nzStringTemplateOutlet="total()">
                <div [innerHTML]="total()"></div>
              </ng-container>
            </div>
          }
        </div>
      }
    </div>
    @if (hasLegend() && legendData().length > 0) {
      <ul class="g2-pie__legend">
        @for (item of legendData(); track $index) {
          <li (click)="_click($index)" class="g2-pie__legend-item">
            <span
              class="g2-pie__legend-dot"
              [style]="{ 'background-color': !item.checked ? '#aaa' : item.color }"
            ></span>
            <span class="g2-pie__legend-title">{{ item.x }}</span>
            <nz-divider nzType="vertical" />
            <span class="g2-pie__legend-percent">{{ item.percent }}%</span>
            @let vf = valueFormat();
            <span class="g2-pie__legend-value" [innerHTML]="vf ? vf(item.y) : item.y"></span>
          </li>
        }
      </ul>
    }
  `,
  host: {
    class: 'g2-pie',
    '[class.g2-pie__legend-has]': 'hasLegend()',
    '[class.g2-pie__legend-block]': 'block()',
    '[class.g2-pie__mini]': 'isPercent()',
    '[style.height.px]': 'height()',
    '[style.font-size.px]': 'fontSize()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [NzSkeletonComponent, NzStringTemplateOutletDirective, NzDividerComponent]
})
export class G2PieComponent extends G2BaseComponent {
  readonly legendData = signal<NzSafeAny[]>([]);
  readonly block = signal(false);
  /** percent 模式下为迷你图 */
  readonly isPercent = computed(() => this.percent() != null);
  private readonly runTooltip = computed(() => (this.isPercent() ? false : this.tooltip()));
  private readonly percentColor = computed(() => {
    const { text, color, inverseColor } = this.ratio();
    // `ratio.color` 默认为空串 ⇒ 视作未设置，回退组件 color（需用 `||`）
    const textColor = color || this.color();
    return (value: string) => (value === text ? textColor : inverseColor);
  });
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
  readonly fontSize = input(14, { transform: numberAttribute });
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

  protected override containerOf(): HTMLElement {
    return this.node().nativeElement;
  }

  protected buildSpec(): G2Spec {
    const { height, padding, inner, lineWidth, isPercent, percentColor, theme, animate, interaction } = this;
    const legendData = this.legendData();

    // 过滤必须发生在**归一化之后**，否则 tooltip 的 `percent` 会与被过滤掉的行一起丢字段。
    const data = this.normalizedData().filter(d => legendData.find(w => w.x === d.x)?.checked !== false);
    const showTooltip = this.runTooltip();
    return {
      ...viewSpec({
        autoFit: true,
        height: height(),
        theme: theme(),
        padding: padding(),
        animate: animate(),
        interaction: interaction()
      }),
      data,
      // `theta` 是坐标系类型（Transpose + Polar）；`transpose` 是坐标变换，写成 `coordinate.type` 会抛错
      coordinate: { type: 'theta', innerRadius: inner() },
      legend: false,
      axis: false,
      // 视图层 tooltip 只是占位，真正生效的是 mark 级；勿加 `items: false`（会连 mark 级一起关掉）
      tooltip: showTooltip ? { title: false } : false,
      children: [
        {
          type: 'interval',
          transform: [{ type: 'stackY' }],
          encode: {
            // 只编码 y + color：带上 x 通道 stackY 会按 x 分组，饼图被切碎
            y: 'y',
            // `color` 必须是字段名：encode 的函数写法在 color 上不被 G2 读取
            color: 'x'
          },
          ...(isPercent()
            ? { scale: { color: { range: [percentColor()(this.ratio().text), percentColor()(this.ratio().inverse)] } } }
            : this.colors()
              ? { scale: { color: { range: this.colors() } } }
              : {}),
          style: { lineWidth: lineWidth(), stroke: '#fff' },
          // tooltip 必须配置在 mark 级才生效
          tooltip: showTooltip
            ? {
                items: [
                  (d: G2PieData) => ({
                    name: d.x,
                    value: `${(d.percent * 100).toFixed(2)} %`
                  })
                ]
              }
            : false
        }
      ]
    } as G2Spec;
  }

  private colorOf(x: NzSafeAny): string {
    const list = this.colors() ?? this.chartColorRange();
    if (!list || list.length === 0) {
      return this.color();
    }
    const index = this.runData().findIndex(d => d.x === x);
    return list[index % list.length];
  }

  /** 图表实际使用的颜色序列：未显式给 `colors` 时取 G2 解析出的调色板，使图例色点与扇形一致 */
  private chartColorRange(): string[] | undefined {
    if (!this._chart) {
      return undefined;
    }
    const range = (this._chart as NzSafeAny).getScale?.()?.color?.getOptions?.().range;
    return Array.isArray(range) ? (range as string[]) : undefined;
  }

  /** 派生一份带 0–1 `percent` 的数据，不改写输入 */
  private normalizedData(): G2PieData[] {
    const data = this.runData();
    const totalSum = data.reduce((cur, item) => cur + item.y, 0);
    return data.map(item => ({
      ...item,
      percent: totalSum === 0 ? 0 : item.y / totalSum
    }));
  }

  protected override dataOf(): unknown {
    // data-only 变更推给 G2 的 data 必须与 spec 同形（归一化 + 图例过滤）
    return this.buildSpec()['data' as never];
  }

  /** onDataChange() 只在首次渲染之后的变更触发，首帧重建图例必须靠 onRendered() */
  protected override onRendered(): void {
    this.genLegend();
  }

  protected override onDataChange(): void {
    this.genLegend();
  }

  protected override afterCreate(chart: Chart): void {
    chart.on('interval:click', (ev: G2Event) => {
      this.clickItem.emit({ item: ev.data?.data as G2PieData, ev });
    });
    chart.on('afterrender', () => this.updateBlock());
  }

  /** 图例数据由组件输入数据派生，而非渲染后的图形数据 */
  private genLegend(): void {
    const { hasLegend, isPercent } = this;
    if (!hasLegend() || isPercent()) return;

    this.legendData.set(
      this.normalizedData().map(item => ({
        x: item.x,
        y: item.y,
        color: this.colorOf(item.x),
        // 保留勾选态，否则每次重下 spec 都会重置用户选择
        checked: this.legendData().find(w => w.x === item.x)?.checked !== false,
        percent: (item.percent * 100).toFixed(2)
      }))
    );
  }

  _click(i: number): void {
    const legendData = this.legendData();
    const next = legendData.map((item, idx) => (idx === i ? { ...item, checked: item.checked === false } : item));
    this.legendData.set(next);
    void this.repaintSpec();
  }
}
