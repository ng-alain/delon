import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { Chart, Event } from '@antv/g2';
import { G2BaseComponent } from '@delon/chart/core';
import { BooleanInput, InputBoolean, InputNumber, NumberInput } from '@delon/util';

export interface G2RadarData {
  name: string;
  label: string;
  value: number;
  [key: string]: any;
}

export interface G2RadarClickItem {
  item: G2RadarData;
  ev: Event;
}

@Component({
  selector: 'g2-radar',
  exportAs: 'g2Radar',
  templateUrl: './radar.component.html',
  host: {
    '[style.height.px]': 'height',
    '[class.g2-radar]': 'true',
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class G2RadarComponent extends G2BaseComponent {
  static ngAcceptInputType_height: NumberInput;
  static ngAcceptInputType_hasLegend: BooleanInput;
  static ngAcceptInputType_tickCount: NumberInput;

  legendData: any[] = [];

  // #region fields

  @Input() title: string | TemplateRef<void>;
  @Input() @InputNumber() height = 0;
  @Input() padding: number | number[] | 'auto' = [44, 30, 16, 30];
  @Input() @InputBoolean() hasLegend = true;
  @Input() @InputNumber() tickCount = 4;
  @Input() data: G2RadarData[] = [];
  @Input() colors = ['#1890FF', '#FACC14', '#2FC25B', '#8543E0', '#F04864', '#13C2C2', '#fa8c16', '#a0d911'];
  @Output() clickItem = new EventEmitter<G2RadarClickItem>();

  // #endregion

  private getHeight(): number {
    return this.height - (this.hasLegend ? 80 : 22);
  }

  install(): void {
    const { node, padding, theme } = this;

    const chart: Chart = (this._chart = new (window as any).G2.Chart({
      container: node.nativeElement,
      autoFit: true,
      height: this.getHeight(),
      padding,
      theme,
    }));

    chart.coordinate('polar');
    chart.legend(false);
    chart.axis('label', {
      line: null,
      label: {
        offset: 8,
      },
      grid: {
        line: {
          style: {
            stroke: '#e9e9e9',
            lineWidth: 1,
            lineDash: [0, 0],
          },
        },
      },
    });
    chart.axis('value', {
      grid: {
        line: {
          type: 'polygon',
          style: {
            stroke: '#e9e9e9',
            lineWidth: 1,
            lineDash: [0, 0],
          },
        },
      },
    });
    chart.filter('name', (name: string) => {
      const legendItem = this.legendData.find(w => w.name === name);
      return legendItem ? legendItem.checked !== false : true;
    });

    chart.line().position('label*value');

    chart.point().position('label*value').shape('circle').size(3);

    chart.render();

    chart.on(`point:click`, (ev: Event) => {
      this.ngZone.run(() => this.clickItem.emit({ item: ev.data?.data, ev }));
    });

    this.attachChart();
  }

  attachChart(): void {
    const { _chart, padding, data, colors, tickCount } = this;
    if (!_chart || !data || data.length <= 0) return;

    _chart.height = this.getHeight();
    _chart.padding = padding;
    _chart.scale({
      value: {
        min: 0,
        tickCount,
      },
    });

    _chart.geometries.forEach(g => g.color('name', colors));
    _chart.changeData(data);
    _chart.render();

    this.ngZone.run(() => this.genLegend());
  }

  private genLegend(): void {
    const { hasLegend, cdr, _chart } = this;
    if (!hasLegend) return;

    this.legendData = _chart.geometries[0].dataArray.map(item => {
      const origin = item[0]._origin;
      const result = {
        name: origin.name,
        color: item[0].color,
        checked: true,
        value: item.reduce((p, n) => p + n._origin.value, 0),
      };

      return result;
    });

    cdr.detectChanges();
  }

  _click(i: number): void {
    const { legendData, _chart } = this;
    legendData[i].checked = !legendData[i].checked;
    _chart.render();
  }

  onChanges(): void {
    this.legendData.forEach(i => (i.checked = true));
  }
}
