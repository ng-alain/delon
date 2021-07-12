import { Platform } from '@angular/cdk/platform';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { NumberInput, ZoneOutside } from '@delon/util/decorator';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, filter, takeUntil } from 'rxjs/operators';
import { ChartEChartsService } from './echarts.service';
import { ChartECharts, ChartEChartsEvent, ChartEChartsEventType, ChartEChartsOption } from './echarts.types';

@Component({
  selector: 'chart-echarts, [chart-echarts]',
  exportAs: 'chartECharts',
  template: `
    <nz-skeleton *ngIf="!loaded"></nz-skeleton>
    <div #container [style.width]="_width" [style.height]="_height"></div>
  `,
  host: {
    '[style.display]': `'inline-block'`,
    '[style.width]': `_width`,
    '[style.height]': `_height`,
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ChartEChartsComponent implements OnInit, OnDestroy {
  static ngAcceptInputType_width: NumberInput;
  static ngAcceptInputType_height: NumberInput;

  @ViewChild('container', { static: true }) private node: ElementRef;
  private destroy$ = new Subject<void>();
  private _chart: ChartECharts | null = null;
  private _theme?: string | object | null;
  private _initOpt?: {
    renderer?: any;
    devicePixelRatio?: number;
    width?: number;
    height?: number;
    locale?: any;
  };
  private _option: ChartEChartsOption;
  _width = '100%';
  _height = '400px';

  @Input()
  set width(val: NumberInput) {
    this._width = typeof val === 'number' ? val + 'px' : `${val}`;
  }
  @Input() set height(val: NumberInput) {
    this._height = typeof val === 'number' ? val + 'px' : `${val}`;
  }
  @Input()
  set theme(value: string | object | null | undefined) {
    this._theme = value;
    if (this._chart) {
      this.install();
    }
  }
  @Input()
  set initOpt(value: any) {
    this._initOpt = value;
    if (this._chart) {
      this.install();
    }
  }
  @Input()
  set option(value: ChartEChartsOption) {
    this._option = value;
    if (this._chart) {
      this.setOption(value, true);
    }
  }
  @Output() events = new EventEmitter<ChartEChartsEvent>();

  get chart(): ChartECharts | null {
    return this._chart;
  }
  loaded = false;

  constructor(private srv: ChartEChartsService, private cdr: ChangeDetectorRef, private ngZone: NgZone, private platform: Platform) {
    this.srv.notify
      .pipe(
        takeUntil(this.destroy$),
        filter(() => !this.loaded),
      )
      .subscribe(() => this.load());

    this.theme = srv.cog.echartsTheme;
  }

  private emit(type: ChartEChartsEventType, other?: ChartEChartsEvent): void {
    this.events.emit({ type, chart: this.chart!!, ...other });
  }

  @ZoneOutside()
  private load(): void {
    this.ngZone.run(() => {
      this.loaded = true;
      this.cdr.detectChanges();
    });
    this.emit('ready');
    this.install();
  }

  install(): this {
    this.destroy();
    this._chart = (window as any).echarts.init(this.node.nativeElement, this._theme, this._initOpt);
    this.emit('init');
    this.setOption(this._option!);
    return this;
  }

  destroy(): this {
    if (this._chart) {
      this._chart.dispose();
      this.emit('destroy');
    }
    return this;
  }

  setOption(option: ChartEChartsOption, notMerge: boolean = false, lazyUpdate: boolean = false): this {
    if (this._chart) {
      this._chart.setOption(option, notMerge, lazyUpdate);
      this.emit('set-option', { option } as any);
    }
    return this;
  }

  ngOnInit(): void {
    if (!this.platform.isBrowser) {
      return;
    }
    if ((window as any).echarts) {
      this.load();
    } else {
      this.srv.libLoad();
    }

    fromEvent(window, 'resize')
      .pipe(
        takeUntil(this.destroy$),
        filter(() => !!this._chart),
        debounceTime(200),
      )
      .subscribe(() => this._chart!!.resize());
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.destroy();
  }
}
