import { Platform } from '@angular/cdk/platform';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { Chart, Types } from '@antv/g2';
import { G2Service } from '@delon/chart/core';
import { BooleanInput, InputBoolean, InputNumber, NumberInput } from '@delon/util';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'g2-single-bar',
  exportAs: 'g2SingleBar',
  template: ``,
  host: {
    '[style.height.px]': 'height',
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class G2SingleBarComponent implements OnInit, OnChanges, OnDestroy {
  static ngAcceptInputType_delay: NumberInput;
  static ngAcceptInputType_height: NumberInput;
  static ngAcceptInputType_barSize: NumberInput;
  static ngAcceptInputType_min: NumberInput;
  static ngAcceptInputType_max: NumberInput;
  static ngAcceptInputType_value: NumberInput;
  static ngAcceptInputType_line: BooleanInput;

  private destroy$ = new Subject<void>();
  private _install = false;
  private _chart: Chart;

  get chart(): Chart {
    return this._chart;
  }

  // #region fields

  @Input() @InputNumber() delay = 0;
  @Input() plusColor = '#40a9ff';
  @Input() minusColor = '#ff4d4f';
  @Input() @InputNumber() height = 60;
  @Input() @InputNumber() barSize = 30;
  @Input() @InputNumber() min = 0;
  @Input() @InputNumber() max = 100;
  @Input() @InputNumber() value = 0;
  @Input() @InputBoolean() line = false;
  @Input() format: (value: number, item: {}, index: number) => string;
  @Input() padding: number | number[] | 'auto' = 0;
  @Input() textStyle: any = { fontSize: 12, color: '#595959' };
  @Input() theme: string | Types.LooseObject;

  // #endregion

  constructor(private srv: G2Service, private el: ElementRef, private ngZone: NgZone, private platform: Platform) {
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

  private install(): void {
    const { el, height, padding, textStyle, line, format, theme } = this;
    const chart: Chart = (this._chart = new (window as any).G2.Chart({
      container: el.nativeElement,
      autoFit: true,
      height,
      padding,
      theme,
    }));
    chart.legend(false);
    chart.axis(false);
    chart.tooltip(false);
    chart.coordinate().transpose();
    chart
      .interval()
      .position('1*value')
      .label('value', () => ({
        formatter: format,
        style: {
          ...textStyle,
        },
      }));

    if (line) {
      chart.annotation().line({
        start: ['50%', '0%'],
        end: ['50%', '100%'],
        style: {
          stroke: '#e8e8e8',
          lineDash: [0, 0],
        },
      });
    }

    chart.render();

    this.attachChart();
  }

  private attachChart(): void {
    const { _chart, height, padding, value, min, max, plusColor, minusColor, barSize } = this;
    if (!_chart) return;
    _chart.scale({ value: { max, min } });
    _chart.height = height;
    _chart.padding = padding;
    _chart.geometries[0].color('value', (val: number) => (val > 0 ? plusColor : minusColor)).size(barSize);
    _chart.changeData([{ value }]);
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
