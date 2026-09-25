import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  OnDestroy,
  ViewEncapsulation,
  afterNextRender,
  inject,
  input,
  output,
  signal,
  viewChild
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { fromEvent, debounceTime, filter } from 'rxjs';

import { watchInputs } from '@delon/chart/core';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzSkeletonComponent } from 'ng-zorro-antd/skeleton';

import { ChartEChartsService } from './echarts.service';
import {
  ChartECharts,
  ChartEChartsEvent,
  ChartEChartsEventType,
  ChartEChartsOn,
  ChartEChartsOption
} from './echarts.types';

/** 数字补 px；null/undefined 产出空串 */
function toCssSize(value: number | string | null | undefined): string {
  if (value == null) {
    return '';
  }
  return typeof value === 'number' ? `${value}px` : `${value}`;
}

@Component({
  selector: 'chart-echarts, [chart-echarts]',
  exportAs: 'chartECharts',
  template: `
    @if (!loaded()) {
      <nz-skeleton />
    }
    <div #container [style.width]="width()" [style.height]="height()"></div>
  `,
  host: {
    '[style.display]': `'inline-block'`,
    '[style.width]': `width()`,
    '[style.height]': `height()`
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [NzSkeletonComponent]
})
export class ChartEChartsComponent implements OnDestroy {
  private readonly srv = inject(ChartEChartsService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly node = viewChild.required<ElementRef<HTMLElement>>('container');

  readonly width = input<number | string | null, number | string | null | undefined>('100%', {
    transform: toCssSize
  });
  readonly height = input<number | string | null, number | string | null | undefined>('400px', {
    transform: toCssSize
  });
  readonly theme = input<string | Record<string, unknown> | null | undefined>(this.srv.cog.echartsTheme);
  readonly initOpt = input<NzSafeAny>();
  readonly option = input<ChartEChartsOption>();
  /** 事件绑定 */
  readonly on = input<ChartEChartsOn[]>([]);
  readonly events = output<ChartEChartsEvent>();

  private _chart: ChartECharts | null = null;
  private readonly _loaded = signal(false);
  readonly loaded = this._loaded.asReadonly();
  private prev?: { theme: unknown; initOpt: unknown; option: unknown };

  get chart(): ChartECharts | null {
    return this._chart;
  }

  constructor() {
    watchInputs(this, () => this.dispatch());

    this.srv.notify
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        filter(() => !this._loaded())
      )
      .subscribe(() => this.load());

    afterNextRender(() => {
      fromEvent(window, 'resize')
        .pipe(
          takeUntilDestroyed(this.destroyRef),
          filter(() => !!this._chart),
          debounceTime(200)
        )
        .subscribe(() => this._chart!.resize());

      if ((window as NzSafeAny).echarts) {
        this.load();
      } else {
        this.srv.libLoad();
      }
    });
  }

  /** theme / initOpt 变更则重建，option 变更则增量更新 */
  private dispatch(): void {
    const theme = this.theme();
    const initOpt = this.initOpt();
    const option = this.option();
    const prev = this.prev;
    this.prev = { theme, initOpt, option };

    if (!this._chart || !prev) {
      return;
    }
    if (theme !== prev.theme || initOpt !== prev.initOpt) {
      this.install();
    } else if (option !== prev.option) {
      this.setOption(option!, true);
    }
  }

  private emit(type: ChartEChartsEventType, other?: ChartEChartsEvent): void {
    this.events.emit({ type, chart: this.chart!, ...other });
  }

  private load(): void {
    if (this._loaded()) {
      return;
    }
    this._loaded.set(true);
    this.emit('ready');
    this.install();
  }

  install(): this {
    this.destroy();
    const chart = (this._chart = (window as NzSafeAny).echarts.init(
      this.node().nativeElement,
      this.theme(),
      this.initOpt()
    )) as ChartECharts;
    this.emit('init');
    this.setOption(this.option()!);
    this.on().forEach(item => {
      if (item.query != null) {
        chart.on(item.eventName, item.query, event => item.handler({ event, chart }));
      } else {
        chart.on(item.eventName, event => item.handler({ event, chart }));
      }
    });
    // 以安装时的输入为变更比较基线：缺此步会吞掉安装后的首次输入变更
    this.prev = { theme: this.theme(), initOpt: this.initOpt(), option: this.option() };
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

  ngOnDestroy(): void {
    this.on().forEach(item => this._chart?.off(item.eventName));
    this.destroy();
  }
}
