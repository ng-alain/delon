import { Platform } from '@angular/cdk/platform';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation,
  inject
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { fromEvent, debounceTime, filter } from 'rxjs';

import { NumberInput, ZoneOutside } from '@delon/util/decorator';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { ChartEChartsService } from './echarts.service';
import {
  ChartECharts,
  ChartEChartsEvent,
  ChartEChartsEventType,
  ChartEChartsOn,
  ChartEChartsOption
} from './echarts.types';

@Component({
  selector: 'chart-echarts, [chart-echarts]',
  exportAs: 'chartECharts',
  template: `
    <nz-skeleton *ngIf="!loaded" />
    <div #container [style.width]="_width" [style.height]="_height"></div>
  `,
  host: {
    '[style.display]': `'inline-block'`,
    '[style.width]': `_width`,
    '[style.height]': `_height`
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ChartEChartsComponent implements OnInit, OnDestroy {
  static ngAcceptInputType_width: NumberInput;
  static ngAcceptInputType_height: NumberInput;

  @ViewChild('container', { static: true }) private node!: ElementRef;
  private destroy$ = inject(DestroyRef);
  private _chart: ChartECharts | null = null;
  private _theme?: string | Record<string, unknown> | null;
  private _initOpt?: {
    renderer?: NzSafeAny;
    devicePixelRatio?: number;
    width?: number;
    height?: number;
    locale?: NzSafeAny;
  };
  private _option!: ChartEChartsOption;
  _width = '100%';
  _height = '400px';

  @Input()
  set width(val: NumberInput) {
    this._width = typeof val === 'number' ? `${val}px` : `${val}`;
  }
  @Input() set height(val: NumberInput) {
    this._height = typeof val === 'number' ? `${val}px` : `${val}`;
  }
  @Input()
  set theme(value: string | Record<string, unknown> | null | undefined) {
    this._theme = value;
    if (this._chart) {
      this.install();
    }
  }
  @Input()
  set initOpt(value: NzSafeAny) {
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
  @Input() on: ChartEChartsOn[] = [];
  @Output() readonly events = new EventEmitter<ChartEChartsEvent>();

  get chart(): ChartECharts | null {
    return this._chart;
  }
  loaded = false;

  constructor(
    private srv: ChartEChartsService,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone,
    private platform: Platform
  ) {
    this.srv.notify
      .pipe(
        takeUntilDestroyed(),
        filter(() => !this.loaded)
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
    const chart = (this._chart = (window as NzSafeAny).echarts.init(
      this.node.nativeElement,
      this._theme,
      this._initOpt
    )) as ChartECharts;
    this.emit('init');
    this.setOption(this._option);
    // on
    this.on.forEach(item => {
      if (item.query != null) {
        chart.on(item.eventName, item.query, event => item.handler({ event, chart }));
      } else {
        chart.on(item.eventName, event => item.handler({ event, chart }));
      }
    });
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
      this.emit('set-option', { option } as NzSafeAny);
    }
    return this;
  }

  ngOnInit(): void {
    if (!this.platform.isBrowser) {
      return;
    }
    if ((window as NzSafeAny).echarts) {
      this.load();
    } else {
      this.srv.libLoad();
    }

    fromEvent(window, 'resize')
      .pipe(
        takeUntilDestroyed(this.destroy$),
        filter(() => !!this._chart),
        debounceTime(200)
      )
      .subscribe(() => this._chart!!.resize());
  }

  ngOnDestroy(): void {
    this.on.forEach(item => this._chart?.off(item.eventName));
    this.destroy();
  }
}
