import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { Chart, Event } from '@antv/g2';
import { G2BaseComponent, G2InteractionType } from '@delon/chart/core';
import { BooleanInput, InputBoolean, InputNumber, NumberInput } from '@delon/util/decorator';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

export interface G2PieData {
  x: any;
  y: number;
  [key: string]: any;
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
    '[class.g2-pie__legend-has]': 'hasLegend',
    '[class.g2-pie__legend-block]': 'block',
    '[class.g2-pie__mini]': 'isPercent',
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class G2PieComponent extends G2BaseComponent {
  static ngAcceptInputType_height: NumberInput;
  static ngAcceptInputType_animate: BooleanInput;
  static ngAcceptInputType_hasLegend: BooleanInput;
  static ngAcceptInputType_percent: NumberInput;
  static ngAcceptInputType_tooltip: BooleanInput;
  static ngAcceptInputType_lineWidth: NumberInput;
  static ngAcceptInputType_blockMaxWidth: NumberInput;
  static ngAcceptInputType_select: BooleanInput;

  private percentColor: (value: string) => string;
  legendData: NzSafeAny[] = [];
  isPercent: boolean;

  // #region fields

  @Input() @InputBoolean() animate = true;
  @Input() color = 'rgba(24, 144, 255, 0.85)';
  @Input() subTitle: string | TemplateRef<void>;
  @Input() total: string | number | TemplateRef<void>;
  @Input() @InputNumber() height = 0;
  @Input() @InputBoolean() hasLegend = false;
  @Input() inner = 0.75;
  @Input() padding: number | number[] | 'auto' = [12, 0, 12, 0];
  @Input() @InputNumber() percent: number;
  @Input() @InputBoolean() tooltip = true;
  @Input() @InputNumber() lineWidth = 0;
  @Input() @InputNumber() blockMaxWidth = 380;
  @Input() @InputBoolean() select = true;
  @Input() valueFormat: (y: number) => string;
  @Input() data: G2PieData[] = [];
  @Input() colors: any[];
  @Input() interaction: G2InteractionType = 'none';
  @Input() ratio: G2PieRatio = {
    text: '占比',
    inverse: '反比',
    color: '',
    inverseColor: '#F0F2F5',
  };
  @Output() clickItem = new EventEmitter<G2PieClickItem>();

  // #endregion

  get block(): boolean {
    return this.hasLegend && this.el.nativeElement.clientWidth <= this.blockMaxWidth;
  }

  private fixData(): void {
    const { percent, color } = this;
    this.isPercent = percent != null;
    if (!this.isPercent) {
      return;
    }

    this.select = false;
    this.tooltip = false;
    const { text, inverse, color: textColor, inverseColor } = this.ratio;
    this.percentColor = (value: string) => (value === text ? textColor || color : inverseColor);
    this.data = [
      {
        x: text,
        y: percent,
      },
      {
        x: inverse,
        y: 100 - percent,
      },
    ];
  }

  install(): void {
    const {
      node,
      height,
      padding,
      tooltip,
      inner,
      hasLegend,
      interaction,
      theme,
      animate,
      lineWidth,
      isPercent,
      percentColor,
      colors,
    } = this;
    const chart: Chart = (this._chart = new (window as any).G2.Chart({
      container: node.nativeElement,
      autoFit: true,
      height,
      padding,
      theme,
    }));
    chart.animate(animate);

    if (!tooltip) {
      chart.tooltip(false);
    } else {
      chart.tooltip({
        showTitle: false,
        showMarkers: false,
      });
    }
    if (interaction !== 'none') {
      chart.interaction(interaction);
    }
    chart.axis(false).legend(false).coordinate('theta', { innerRadius: inner });
    chart.filter('x', (_val: any, item: any) => item.checked !== false);
    chart
      .interval()
      .adjust('stack')
      .position('y')
      .style({ lineWidth, stroke: '#fff' })
      .color('x', isPercent ? percentColor : colors)
      .tooltip('x*percent', (name: string, p: number) => ({
        name,
        value: `${hasLegend ? p : (p * 100).toFixed(2)} %`,
      }))
      .state({});
    chart.scale({
      x: {
        type: 'cat',
        range: [0, 1],
      },
    });

    chart.on(`interval:click`, (ev: Event) => {
      this.ngZone.run(() => this.clickItem.emit({ item: ev.data?.data, ev }));
    });

    this.changeData();
    chart.render();
  }

  changeData(): void {
    const { _chart, data } = this;
    if (!_chart || !Array.isArray(data) || data.length <= 0) return;

    // 转化 percent
    const totalSum = data.reduce((cur, item) => cur + item.y, 0);
    for (const item of data) {
      item.percent = totalSum === 0 ? 0 : item.y / totalSum;
    }
    _chart.changeData(data);
    this.ngZone.run(() => this.genLegend());
  }

  private genLegend(): void {
    const { hasLegend, isPercent, cdr, _chart } = this;
    if (!hasLegend || isPercent) return;

    this.legendData = _chart.geometries[0].dataArray.map((item: any) => {
      const origin = item[0]._origin;
      origin.color = item[0].color;
      origin.checked = true;
      origin.percent = (origin.percent * 100).toFixed(2);
      return origin;
    });

    cdr.detectChanges();
  }

  _click(i: number): void {
    const { legendData, _chart } = this;
    legendData[i].checked = !legendData[i].checked;
    _chart.render(true);
  }

  onChanges(): void {
    this.fixData();
  }
}
