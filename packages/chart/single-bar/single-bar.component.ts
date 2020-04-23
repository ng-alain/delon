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
import { Chart } from '@antv/g2';
import { LooseObject } from '@antv/g2/lib/interface';
import { AlainConfigService } from '@delon/theme';
import { InputBoolean, InputNumber } from '@delon/util';

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
  private chart: Chart;

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
  @Input() theme: string | LooseObject;

  // #endregion

  constructor(private el: ElementRef, private ngZone: NgZone, configSrv: AlainConfigService) {
    configSrv.attachKey(this, 'chart', 'theme');
  }

  private install() {
    const { el, height, padding, textStyle, line, format, theme } = this;
    const chart = (this.chart = new Chart({
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

  private attachChart() {
    const { chart, height, padding, value, min, max, plusColor, minusColor, barSize } = this;
    if (!chart) return;
    chart.scale({ value: { max, min } });
    chart.height = height;
    chart.padding = padding;
    chart.geometries[0].color('value', (val: number) => (val > 0 ? plusColor : minusColor)).size(barSize);
    chart.changeData([{ value }]);
  }

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => setTimeout(() => this.install(), this.delay));
  }

  ngOnChanges(): void {
    this.ngZone.runOutsideAngular(() => this.attachChart());
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.ngZone.runOutsideAngular(() => this.chart.destroy());
    }
  }
}
