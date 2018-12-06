// tslint:disable:no-any
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { InputBoolean, InputNumber } from '@delon/util';

declare var G2: any;

export interface G2RadarData {
  name: string;
  label: string;
  value: number;
  [key: string]: any;
}

@Component({
  selector: 'g2-radar',
  templateUrl: './radar.component.html',
  host: { '[class.g2-radar]': 'true' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class G2RadarComponent implements OnInit, OnDestroy, OnChanges {
  @ViewChild('container') private node: ElementRef;
  private chart: any;
  legendData: any[] = [];

  // #region fields

  @Input() @InputNumber() delay = 0;
  @Input() title: string | TemplateRef<void>;
  @HostBinding('style.height.px') @Input() @InputNumber() height = 0;
  @Input() padding: number[] = [44, 30, 16, 30];
  @Input() @InputBoolean() hasLegend = true;
  @Input() @InputNumber() tickCount = 4;
  @Input() data: G2RadarData[] = [];
  @Input() colors = [
    '#1890FF',
    '#FACC14',
    '#2FC25B',
    '#8543E0',
    '#F04864',
    '#13C2C2',
    '#fa8c16',
    '#a0d911',
  ];

  // #endregion

  constructor(private cdr: ChangeDetectorRef) { }

  _click(i: number) {
    const { legendData, chart } = this;
    legendData[i].checked = !legendData[i].checked;
    chart.repaint();
  }

  private install() {
    const { node, height, hasLegend, padding, colors } = this;

    const chart = this.chart = new G2.Chart({
      container: node.nativeElement,
      forceFit: true,
      height: height - (hasLegend ? 80 : 22),
      padding,
    });

    chart.coord('polar');
    chart.legend(false);

    chart.axis('label', {
      line: null,
      labelOffset: 8,
      labels: {
        label: {
          fill: 'rgba(0, 0, 0, .65)',
        },
      },
      grid: {
        line: {
          stroke: '#e9e9e9',
          lineWidth: 1,
          lineDash: [0, 0],
        },
      },
    });

    chart.axis('value', {
      grid: {
        type: 'polygon',
        line: {
          stroke: '#e9e9e9',
          lineWidth: 1,
          lineDash: [0, 0],
        },
      },
      labels: {
        label: {
          fill: 'rgba(0, 0, 0, .65)',
        },
      },
    });

    chart.filter(
      'name',
      (name: string) => {
        const legendItem = this.legendData.find(w => w.name === name);
        return legendItem ? legendItem.checked !== false : true;
      },
    );

    chart
      .line()
      .position('label*value')
      .color('name', colors);

    chart
      .point()
      .position('label*value')
      .color('name', colors)
      .shape('circle')
      .size(3);

    chart.render();

    this.attachChart();
  }

  private attachChart() {
    const { chart, height, hasLegend, padding, data, colors, tickCount } = this;
    if (!chart) return ;

    chart.set('height', height - (hasLegend ? 80 : 22));
    chart.set('padding', padding);

    chart.source(data, {
      value: {
        min: 0,
        tickCount,
      },
    });

    chart.get('geoms').forEach(g => {
      g.color('name', colors);
    });

    chart.repaint();

    this.genLegend();
  }

  private genLegend() {
    const { hasLegend, cdr, chart } = this;
    if (!hasLegend) return;

    this.legendData = chart.get('geoms')[0].get('dataArray').map((item: any) => {
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

  ngOnInit(): void {
    setTimeout(() => this.install(), this.delay);
  }

  ngOnChanges(): void {
    this.legendData.forEach(i => i.checked = true);
    this.attachChart();
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
  }
}
