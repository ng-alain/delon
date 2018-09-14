import {
  Component,
  Input,
  HostBinding,
  ViewChild,
  ElementRef,
  OnDestroy,
  OnChanges,
  NgZone,
  TemplateRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { toNumber, toBoolean } from '@delon/util';

declare var G2: any;

@Component({
  selector: 'g2-radar',
  templateUrl: './radar.component.html',
  host: { '[class.g2-radar]': 'true' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false,
})
export class G2RadarComponent implements OnDestroy, OnChanges {
  // #region fields

  _title = '';
  _titleTpl: TemplateRef<any>;
  @Input()
  set title(value: string | TemplateRef<any>) {
    if (value instanceof TemplateRef) {
      this._title = null;
      this._titleTpl = value;
    } else this._title = value;
  }

  @HostBinding('style.height.px')
  @Input()
  get height() {
    return this._height;
  }
  set height(value: any) {
    this._height = toNumber(value);
  }
  private _height = 0;

  @Input()
  padding: number[] = [44, 30, 16, 30];

  @Input()
  get hasLegend() {
    return this._hasLegend;
  }
  set hasLegend(value: any) {
    this._hasLegend = toBoolean(value);
  }
  private _hasLegend = true;

  @Input()
  set tickCount(value: any) {
    this._tickCount = toNumber(value);
  }
  private _tickCount = 4;

  @Input()
  data: Array<{
    name: string;
    label: string;
    value: number;
    [key: string]: any;
  }> = [];

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

  @ViewChild('container')
  private node: ElementRef;

  private chart: any;
  legendData: any[] = [];

  constructor(private cd: ChangeDetectorRef, private zone: NgZone) {}

  _click(i: number) {
    this.legendData[i].checked = !this.legendData[i].checked;

    if (this.chart) {
      // const filterItem = this.legendData.filter(l => l.checked).map(l => l.name);
      this.chart.filter(
        'name',
        (val: any) => this.legendData.find(w => w.name === val).checked,
      );
      this.chart.repaint();
    }
  }

  private runInstall() {
    this.zone.runOutsideAngular(() => setTimeout(() => this.install()));
  }

  private install() {
    if (!this.data || (this.data && this.data.length < 1)) return;

    this.uninstall();
    this.node.nativeElement.innerHTML = '';

    const chart = new G2.Chart({
      container: this.node.nativeElement,
      forceFit: true,
      height: +this.height - (this.hasLegend ? 80 : 22),
      padding: this.padding,
    });
    chart.source(this.data, {
      value: {
        min: 0,
        tickCount: this._tickCount,
      },
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

    chart
      .line()
      .position('label*value')
      .color('name', this.colors);
    chart
      .point()
      .position('label*value')
      .color('name', this.colors)
      .shape('circle')
      .size(3);

    chart.render();

    this.chart = chart;

    if (this.hasLegend) {
      this.zone.run(() => {
        this.legendData = chart
          .getAllGeoms()[0]
          ._attrs.dataArray.map((item: any) => {
            const origin = item[0]._origin;
            const result = {
              name: origin.name,
              color: item[0].color,
              checked: true,
              value: item.reduce((p, n) => p + n._origin.value, 0),
            };

            return result;
          });
        this.cd.detectChanges();
      });
    }
  }

  private uninstall() {
    if (this.chart) {
      this.chart.destroy();
      this.chart = null;
    }
  }

  ngOnChanges(): void {
    this.runInstall();
  }

  ngOnDestroy(): void {
    this.uninstall();
  }
}
