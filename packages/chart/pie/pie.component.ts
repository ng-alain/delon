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
  Renderer2,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { updateHostClass, InputBoolean, InputNumber } from '@delon/util';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

declare var G2: any;
declare var DataSet: any;

export interface G2PieData {
  x: any;
  y: number;
  [key: string]: any;
}

@Component({
  selector: 'g2-pie',
  templateUrl: './pie.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class G2PieComponent implements OnInit, OnDestroy, OnChanges {
  private resize$: Subscription;
  @ViewChild('container') private node: ElementRef;
  private chart: any;
  private isPercent: boolean;
  private percentColor: any;
  legendData: any[] = [];

  // #region fields

  @Input() @InputNumber() delay = 0;
  @Input() @InputBoolean() animate = true;
  @Input() color = 'rgba(24, 144, 255, 0.85)';
  @Input() subTitle: string | TemplateRef<void>;
  @Input() total: string | TemplateRef<void>;
  @Input() @InputNumber() height = 0;
  @Input() @InputBoolean() hasLegend = false;
  @Input() inner = 0.75;
  @Input() padding: number[] = [12, 0, 12, 0];
  @Input() @InputNumber() percent: number;
  @Input() @InputBoolean() tooltip = true;
  @Input() @InputNumber() lineWidth = 0;
  @Input() @InputBoolean() select = true;
  @Input() valueFormat: (y: number) => string;
  @Input() data: G2PieData[] = [];
  @Input() colors: any[];

  // #endregion

  constructor(
    private el: ElementRef,
    private rend: Renderer2,
    private ngZone: NgZone,
    private cdr: ChangeDetectorRef,
  ) {}

  private setCls() {
    const { el, rend, hasLegend, isPercent } = this;
    const ne = el.nativeElement as HTMLElement;
    updateHostClass(
      ne,
      rend,
      {
        'g2-pie': true,
        'g2-pie__legend-has': hasLegend,
        'g2-pie__legend-block': hasLegend && ne.clientWidth <= 380,
        'g2-pie__mini': isPercent,
      },
      true,
    );
  }

  private fixData() {
    const { percent, color } = this;
    this.isPercent = percent != null;
    if (this.isPercent) {
      this.select = false;
      this.tooltip = false;
      this.percentColor = value =>
        value === '占比' ? color || 'rgba(24, 144, 255, 0.85)' : '#F0F2F5';
      this.data = [
        {
          x: '占比',
          y: percent,
        },
        {
          x: '反比',
          y: 100 - percent,
        },
      ];
    }
  }

  private install() {
    this.setCls();

    const { node, height, padding, animate, tooltip, inner, hasLegend } = this;
    const chart = (this.chart = new G2.Chart({
      container: node.nativeElement,
      forceFit: true,
      height,
      padding,
      animate,
    }));

    if (!tooltip) {
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

    chart.coord('theta', { innerRadius: inner });

    chart.filter('x', (val: any, item: any) => item.checked !== false);

    chart
      .intervalStack()
      .position('y')
      .tooltip('x*percent', (name, p) => ({
        name,
        // 由于 hasLegend 会优先处理为百分比格式，因此无需要在 tooltip 中重新转换
        value: hasLegend ? p : (p * 100).toFixed(2),
      }))
      .select(this.select);

    chart.render();

    this.attachChart();
  }

  private attachChart() {
    const {
      chart,
      height,
      padding,
      animate,
      data,
      lineWidth,
      isPercent,
      percentColor,
      colors,
    } = this;
    if (!chart) return;

    chart.set('height', height);
    chart.set('padding', padding);
    chart.set('animate', animate);

    chart
      .get('geoms')[0]
      .style({ lineWidth, stroke: '#fff' })
      .color('x', isPercent ? percentColor : colors);

    const dv = new DataSet.DataView();
    dv.source(data).transform({
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
    });
    chart.repaint();

    this.ngZone.run(() => this.genLegend());
  }

  private genLegend() {
    const { hasLegend, isPercent, cdr, chart } = this;
    if (!hasLegend || isPercent) return;

    this.legendData = chart
      .get('geoms')[0]
      .get('dataArray')
      .map((item: any) => {
        const origin = item[0]._origin;
        origin.color = item[0].color;
        origin.checked = true;
        origin.percent = (origin.percent * 100).toFixed(2);
        return origin;
      });

    cdr.detectChanges();
  }

  _click(i: number) {
    const { legendData, chart } = this;
    legendData[i].checked = !legendData[i].checked;
    chart.repaint();
  }

  private installResizeEvent() {
    if (this.resize$ || !this.hasLegend) return;

    this.resize$ = fromEvent(window, 'resize')
      .pipe(debounceTime(200))
      .subscribe(() => this.setCls());
  }

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => setTimeout(() => this.install(), this.delay));
  }

  ngOnChanges(): void {
    this.fixData();
    this.setCls();
    this.ngZone.runOutsideAngular(() => this.attachChart());
    this.installResizeEvent();
  }

  ngOnDestroy(): void {
    if (this.resize$) {
      this.resize$.unsubscribe();
    }
    if (this.chart) {
      this.ngZone.runOutsideAngular(() => this.chart.destroy());
    }
  }
}
