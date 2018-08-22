import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  OnDestroy,
  OnChanges,
  NgZone,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  AfterViewInit,
  Renderer2,
} from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { toNumber, toBoolean, updateHostClass } from '@delon/util';

@Component({
  selector: 'g2-pie',
  template: `
  <div class="chart">
    <div #container></div>
    <div *ngIf="subTitle || total" class="total">
      <h4 *ngIf="subTitle" class="pie-sub-title" [innerHTML]="subTitle"></h4>
      <div *ngIf="total" class="pie-stat" [innerHTML]="total"></div>
    </div>
  </div>
  <ul *ngIf="hasLegend && legendData?.length" class="legend">
    <li *ngFor="let item of legendData; let index = index" (click)="_click(index)">
      <span class="dot" [ngStyle]="{'background-color': !item.checked ? '#aaa' : item.color}"></span>
      <span class="legend-title">{{item.x}}</span>
      <nz-divider nzType="vertical"></nz-divider>
      <span class="percent">{{item.percent}}%</span>
      <span class="value" [innerHTML]="valueFormat ? valueFormat(item.y) : item.y"></span>
    </li>
  </ul>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false,
})
export class G2PieComponent implements OnDestroy, OnChanges, AfterViewInit {
  private scroll$: Subscription = null;
  @ViewChild('container')
  private node: ElementRef;

  private chart: any;
  private initFlag = false;
  legendData: any[] = [];

  // #region fields

  @Input()
  set animate(value: any) {
    this._animate = toBoolean(value);
  }
  private _animate = true;

  @Input()
  color = 'rgba(24, 144, 255, 0.85)';
  @Input()
  subTitle: string;
  @Input()
  total: string;

  @Input()
  get height() {
    return this._height;
  }
  set height(value: any) {
    this._height = toNumber(value);
  }
  private _height = 0;

  @Input()
  get hasLegend() {
    return this._hasLegend;
  }
  set hasLegend(value: any) {
    this._hasLegend = toBoolean(value);
  }
  private _hasLegend = false;

  @Input()
  set legendBlock(value: any) {
    this._legendBlock = toBoolean(value);
  }
  private _legendBlock = false;

  @Input()
  inner = 0.75;
  @Input()
  padding: number[] = [12, 0, 12, 0];

  @Input()
  get percent() {
    return this._percent;
  }
  set percent(value: any) {
    this._percent = toNumber(value);
  }
  private _percent: number;

  @Input()
  get tooltip() {
    return this._tooltip;
  }
  set tooltip(value: any) {
    this._tooltip = toBoolean(value);
  }
  private _tooltip = true;

  @Input()
  get lineWidth() {
    return this._lineWidth;
  }
  set lineWidth(value: any) {
    this._lineWidth = toNumber(value);
  }
  private _lineWidth = 0;

  @Input()
  get select() {
    return this._select;
  }
  set select(value: any) {
    this._select = toBoolean(value);
  }
  private _select = true;

  @Input()
  data: Array<{ x: number | string; y: number; [key: string]: any }>;
  @Input()
  valueFormat: Function;
  @Input()
  colors: any[];

  // #endregion

  constructor(
    private el: ElementRef,
    private rend: Renderer2,
    private cd: ChangeDetectorRef,
    private zone: NgZone,
  ) {}

  private setCls() {
    updateHostClass(
      this.el.nativeElement,
      this.rend,
      {
        'ad-pie': true,
        'has-legend': this.hasLegend,
        'legend-block': this._legendBlock,
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
      animate: this._animate,
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
        this.cd.detectChanges();
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
