import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Chart } from '@antv/g2';
import { LooseObject } from '@antv/g2/lib/interface';
import { AlainConfigService } from '@delon/config';
import { InputBoolean, InputNumber } from '@delon/util';

export interface G2RadarData {
  name: string;
  label: string;
  value: number;
  [key: string]: any;
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
export class G2RadarComponent implements OnInit, OnDestroy, OnChanges {
  @ViewChild('container', { static: true }) private node: ElementRef;
  private chart: Chart;
  legendData: any[] = [];

  // #region fields

  @Input() @InputNumber() delay = 0;
  @Input() title: string | TemplateRef<void>;
  @Input() @InputNumber() height = 0;
  @Input() padding: number | number[] | 'auto' = [44, 30, 16, 30];
  @Input() @InputBoolean() hasLegend = true;
  @Input() @InputNumber() tickCount = 4;
  @Input() data: G2RadarData[] = [];
  @Input() colors = ['#1890FF', '#FACC14', '#2FC25B', '#8543E0', '#F04864', '#13C2C2', '#fa8c16', '#a0d911'];
  @Input() theme: string | LooseObject;

  // #endregion

  constructor(private cdr: ChangeDetectorRef, private ngZone: NgZone, configSrv: AlainConfigService) {
    configSrv.attachKey(this, 'chart', 'theme');
  }

  private getHeight() {
    return this.height - (this.hasLegend ? 80 : 22);
  }

  private install() {
    const { node, padding, theme } = this;

    const chart = (this.chart = new Chart({
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
        style: {
          fill: 'rgba(0, 0, 0, .65)',
        },
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
      label: {
        style: {
          fill: 'rgba(0, 0, 0, .65)',
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

    this.attachChart();
  }

  private attachChart() {
    const { chart, padding, data, colors, tickCount } = this;
    if (!chart || !data || data.length <= 0) return;

    chart.height = this.getHeight();
    chart.padding = padding;
    chart.scale({
      value: {
        min: 0,
        tickCount,
      },
    });

    chart.geometries.forEach(g => g.color('name', colors));
    chart.changeData(data);

    this.ngZone.run(() => this.genLegend());
  }

  private genLegend() {
    const { hasLegend, cdr, chart } = this;
    if (!hasLegend) return;

    this.legendData = chart.geometries[0].dataArray.map(item => {
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

  _click(i: number) {
    const { legendData, chart } = this;
    legendData[i].checked = !legendData[i].checked;
    chart.render();
  }

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => setTimeout(() => this.install(), this.delay));
  }

  ngOnChanges(): void {
    this.legendData.forEach(i => (i.checked = true));
    this.ngZone.runOutsideAngular(() => this.attachChart());
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.ngZone.runOutsideAngular(() => this.chart.destroy());
    }
  }
}
