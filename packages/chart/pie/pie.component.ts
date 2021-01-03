import { Platform } from '@angular/cdk/platform';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Chart, Event, Types } from '@antv/g2';
import { G2InteractionType, G2Service } from '@delon/chart/core';
import { BooleanInput, InputBoolean, InputNumber, NumberInput } from '@delon/util';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

export interface G2PieData {
  x: any;
  y: number;
  [key: string]: any;
}

export interface G2PieClickItem {
  item: G2PieData;
  ev: Event;
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
export class G2PieComponent implements OnInit, OnDestroy, OnChanges {
  static ngAcceptInputType_delay: NumberInput;
  static ngAcceptInputType_height: NumberInput;
  static ngAcceptInputType_animate: BooleanInput;
  static ngAcceptInputType_hasLegend: BooleanInput;
  static ngAcceptInputType_percent: NumberInput;
  static ngAcceptInputType_tooltip: BooleanInput;
  static ngAcceptInputType_lineWidth: NumberInput;
  static ngAcceptInputType_blockMaxWidth: NumberInput;
  static ngAcceptInputType_select: BooleanInput;

  @ViewChild('container', { static: true }) private node: ElementRef;
  private destroy$ = new Subject<void>();
  private _install = false;
  private _chart: Chart;
  private percentColor: (value: string) => string;
  legendData: NzSafeAny[] = [];
  isPercent: boolean;

  // #region fields

  @Input() @InputNumber() delay = 0;
  @Input() @InputBoolean() animate = true;
  @Input() color = 'rgba(24, 144, 255, 0.85)';
  @Input() subTitle: string | TemplateRef<void>;
  @Input() total: string | TemplateRef<void>;
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
  @Input() theme: string | Types.LooseObject;
  @Output() clickItem = new EventEmitter<G2PieClickItem>();

  // #endregion

  get block(): boolean {
    return this.hasLegend && this.el.nativeElement.clientWidth <= this.blockMaxWidth;
  }

  get chart(): Chart {
    return this._chart;
  }

  constructor(
    private srv: G2Service,
    private el: ElementRef<HTMLElement>,
    private ngZone: NgZone,
    private cdr: ChangeDetectorRef,
    private platform: Platform,
  ) {
    this.theme = srv.cog.theme!;
    this.srv.notify
      .pipe(
        takeUntil(this.destroy$),
        filter(() => !this._install),
      )
      .subscribe(() => this.load());
  }

  private load(): void {
    this._install = true;
    this.ngZone.runOutsideAngular(() => setTimeout(() => this.install(), this.delay));
  }

  private fixData(): void {
    const { percent, color } = this;
    this.isPercent = percent != null;
    if (this.isPercent) {
      this.select = false;
      this.tooltip = false;
      this.percentColor = (value: string) => (value === '占比' ? color || 'rgba(24, 144, 255, 0.85)' : '#F0F2F5');
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

  private install(): void {
    const { node, height, padding, tooltip, inner, hasLegend, interaction, theme } = this;
    const chart: Chart = (this._chart = new (window as any).G2.Chart({
      container: node.nativeElement,
      autoFit: true,
      height,
      padding,
      theme,
    }));

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
      .tooltip('x*percent', (name: string, p: number) => ({
        name,
        value: `${hasLegend ? p : (p * 100).toFixed(2)} %`,
      }))
      .state({});

    chart.on(`interval:click`, (ev: Event) => {
      this.ngZone.run(() => this.clickItem.emit({ item: ev.data?.data, ev }));
    });

    this.attachChart();
  }

  private attachChart(): void {
    const { _chart, height, padding, animate, data, lineWidth, isPercent, percentColor, colors } = this;
    if (!_chart) return;

    _chart.height = height;
    _chart.padding = padding;
    _chart.animate(animate);
    _chart.geometries[0].style({ lineWidth, stroke: '#fff' }).color('x', isPercent ? percentColor : colors);
    _chart.scale({
      x: {
        type: 'cat',
        range: [0, 1],
      },
    });
    // 转化 percent
    const totalSum = data.reduce((cur, item) => cur + item.y, 0);
    for (const item of data) {
      item.percent = totalSum === 0 ? 0 : item.y / totalSum;
    }
    _chart.changeData(data);
    _chart.render();

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
    _chart.render();
  }

  ngOnInit(): void {
    if (!this.platform.isBrowser) {
      return;
    }
    if ((window as any).G2.Chart) {
      this.load();
    } else {
      this.srv.libLoad();
    }
  }

  ngOnChanges(): void {
    this.fixData();
    this.ngZone.runOutsideAngular(() => this.attachChart());
  }

  ngOnDestroy(): void {
    if (this._chart) {
      this.ngZone.runOutsideAngular(() => this._chart.destroy());
    }
    this.destroy$.next();
    this.destroy$.complete();
  }
}
