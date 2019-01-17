// tslint:disable:no-any
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { InputBoolean, InputNumber } from '@delon/util';

declare var G2: any;

@Component({
  selector: 'g2-single-bar',
  template: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class G2SingleBarComponent implements OnInit, OnChanges, OnDestroy {
  private chart: any;

  // #region fields

  @Input() @InputNumber() delay = 0;
  @Input() plusColor = '#40a9ff';
  @Input() minusColor = '#ff4d4f';
  @HostBinding('style.height.px') @Input() @InputNumber() height = 60;
  @Input() @InputNumber() barSize = 30;
  @Input() @InputNumber() min = 0;
  @Input() @InputNumber() max = 100;
  @Input() @InputNumber() value = 0;
  @Input() @InputBoolean() line = false;
  @Input() format: (value: number, item: {}, index: number) => string;
  @Input() padding: any = 0;
  @Input() textStyle: any = { fontSize: 12, color: '#595959' };

  // #endregion

  constructor(private el: ElementRef, private ngZone: NgZone) { }

  private install() {
    const { el, height, padding, textStyle, line, format } = this;
    const chart = this.chart = new G2.Chart({
      container: el.nativeElement,
      forceFit: true,
      height,
      padding,
    });
    chart.legend(false);
    chart.axis(false);
    chart.tooltip({ type: 'mini' });
    chart.coord()
         .transpose();
    chart
      .interval()
      .position('1*value')
      .opacity(1)
      .label('value', val => ({
        formatter: format,
        offset: val > 0 ? 10 : -10,
        textStyle: {
          ...textStyle,
          textAlign: val > 0 ? 'start' : 'end',
        },
      }));

    if (line) {
      chart.guide().line({
        start: ['50%', '0%'],
        end: ['50%', '100%'],
        lineStyle: {
          stroke: '#e8e8e8',
          lineDash: [0, 0],
        },
      });
    }

    chart.render();

    this.attachChart();
  }

  private attachChart() {
    const { chart, height, padding, value, min, max, plusColor, minusColor, barSize } = this;
    if (!chart) return;
    chart.source([{ value }], { value: { max, min } });
    chart.set('height', height);
    chart.set('padding', padding);
    chart
      .get('geoms')[0]
      .color('value', val => val > 0 ? plusColor : minusColor)
      .size(barSize);
    chart.repaint();
  }

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => setTimeout(() => this.install(), this.delay));
  }

  ngOnChanges(): void {
    this.ngZone.runOutsideAngular(() => this.attachChart());
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
  }
}
