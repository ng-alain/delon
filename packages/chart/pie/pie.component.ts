// tslint:disable:no-any
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { toBoolean, toNumber, updateHostClass, InputBoolean, InputNumber } from '@delon/util';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

declare var G2: any;
declare var DataSet: any;

@Component({
  selector: 'g2-pie',
  templateUrl: './pie.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class G2PieComponent implements OnDestroy, OnChanges, AfterViewInit {
  private scroll$: Subscription = null;
  @ViewChild('container')
  private node: ElementRef;

  private chart: any;
  private initFlag = false;
  legendData: any[] = [];

  // #region fields

  @Input() @InputBoolean() animate = true;

  @Input()
  color = 'rgba(24, 144, 255, 0.85)';
  @Input()
  subTitle: string;
  @Input()
  total: string;

  @Input() @InputNumber() height = 0;

  @Input() @InputBoolean() hasLegend = false;

  @Input() @InputBoolean() legendBlock = false;

  @Input()
  inner = 0.75;
  @Input()
  padding: number[] = [12, 0, 12, 0];

  @Input() @InputNumber() percent: number;

  @Input() @InputBoolean() tooltip = true;

  @Input() @InputNumber() lineWidth = 0;

  @Input() @InputBoolean() select = true;

  @Input()
  data: Array<{ x: number | string; y: number; [key: string]: any }>;
  @Input()
  // tslint:disable-next-line:ban-types
  valueFormat: Function;
  @Input()
  colors: any[];

  // #endregion

  constructor(
    private el: ElementRef,
    private rend: Renderer2,
    private cdr: ChangeDetectorRef,
    private zone: NgZone,
  ) { }

  private setCls() {
    updateHostClass(
      this.el.nativeElement,
      this.rend,
      {
        'g2-pie': true,
        'g2-pie__legend-has': this.hasLegend,
        'g2-pie__legend-block': this.legendBlock,
        'g2-pie__mini': typeof this.percent !== 'undefined',
      },
      true,
    );
  }

  private runInstall() {
    this.zone.runOutsideAngular(() => setTimeout(() => this.install()));
  }

  private install() {
    this.legendBlock = this.el.nativeElement.clientWidth <= 380;
    this.setCls();

    let formatColor;
    const isPercent = typeof this.percent !== 'undefined';
    if (isPercent) {
      this.select = false;
      this.tooltip = false;
      formatColor = value =>
        value === '占比' ? this.color || 'rgba(24, 144, 255, 0.85)' : '#F0F2F5';

      this.data = [
        {
          x: '占比',
          y: this.percent,
        },
        {
          x: '反比',
          y: 100 - this.percent,
        },
      ];
    }

    if (!this.data || (this.data && this.data.length < 1)) return;

    if (this.chart) this.chart.destroy();
    this.node.nativeElement.innerHTML = '';

    const chart = new G2.Chart({
      container: this.node.nativeElement,
      forceFit: true,
      height: this.height,
      padding: this.padding,
      animate: this.animate,
    });

    if (!this.tooltip) {
      chart.tooltip(false);
    } else {
      chart.tooltip({
        showTitle: false,
        itemTpl:
          '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value} %</li>',
      });
    }

    chart.axis(false);
    chart.legend(false);

    const dv = new DataSet.DataView();
    dv.source(this.data).transform({
      type: 'percent',
      field: 'y',
      dimension: 'x',
      as: 'percent',
    });
    chart.source(dv, {
      x: {
        type: 'cat',
        range: [0, 1],
      },
      y: {
        min: 0,
      },
    });

    chart.coord('theta', { innerRadius: this.inner });

    chart
      .intervalStack()
      .position('y')
      .style({ lineWidth: this.lineWidth, stroke: '#fff' })
      .tooltip('x*percent', (item, percent) => {
        return {
          name: item,
          value: this.hasLegend ? percent : (percent * 100).toFixed(2),
        };
      })
      .color('x', isPercent ? formatColor : this.colors)
      .select(this.select);

    chart.render();

    this.chart = chart;
    if (this.hasLegend) {
      this.zone.run(() => {
        this.legendData = chart
          .getAllGeoms()[0]
          ._attrs.dataArray.map((item: any) => {
            const origin = item[0]._origin;
            origin.color = item[0].color;
            origin.checked = true;
            origin.percent = (origin.percent * 100).toFixed(2);
            return origin;
          });
        this.cdr.detectChanges();
      });
    }
  }

  private installResizeEvent() {
    if (this.scroll$ || !this.hasLegend) return;

    this.scroll$ = fromEvent(window, 'resize')
      .pipe(debounceTime(200))
      .subscribe(() => this.runInstall());
  }

  _click(i: number) {
    this.legendData[i].checked = !this.legendData[i].checked;

    if (this.chart) {
      this.chart.filter('x', (val: any, item: any) => item.checked);
      this.chart.repaint();
    }
  }

  ngAfterViewInit(): void {
    this.initFlag = true;
    this.runInstall();
  }

  ngOnChanges(): void {
    this.installResizeEvent();
    if (this.initFlag) this.runInstall();
  }

  ngOnDestroy(): void {
    if (this.scroll$) this.scroll$.unsubscribe();
    if (this.chart) {
      this.chart.destroy();
      this.chart = null;
    }
  }
}
