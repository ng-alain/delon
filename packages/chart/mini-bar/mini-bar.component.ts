// tslint:disable:no-any
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { InputNumber } from '@delon/util';

declare var G2: any;

export interface G2MiniBarData {
  x: any;
  y: any;
  [key: string]: any;
}

@Component({
  selector: 'g2-mini-bar',
  template: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class G2MiniBarComponent implements OnInit, OnChanges, OnDestroy {
  private chart: any;

  // #region fields

  @Input() @InputNumber() delay = 0;
  @Input() color = '#1890FF';
  @HostBinding('style.height.px') @Input() @InputNumber() height = 0;
  @Input() @InputNumber() borderWidth = 5;
  @Input() padding: Array<string | number> = [8, 8, 8, 8];
  @Input() data: G2MiniBarData[] = [];
  @Input() yTooltipSuffix = '';

  // #endregion

  constructor(private el: ElementRef) { }

  private install() {
    const { el, height, padding, data, color, borderWidth, yTooltipSuffix } = this;
    const chart = this.chart = new G2.Chart({
      container: el.nativeElement,
      forceFit: true,
      height,
      padding,
      legend: null,
    });

    chart.axis(false);

    chart.source(data, {
      x: {
        type: 'cat',
      },
      y: {
        min: 0,
      },
    });

    chart.tooltip({
      'showTitle': false,
      'hideMarkders': false,
      'crosshairs': false,
      'g2-tooltip': { padding: 4 },
      'g2-tooltip-list-item': { margin: `0px 4px` },
    });
    chart
      .interval()
      .position('x*y')
      .size(borderWidth)
      .color(color)
      .tooltip('x*y', (x, y) => {
        return {
          name: x,
          value: y + yTooltipSuffix,
        };
      });

    chart.render();

    this.chart = chart;
  }

  private attachChart() {
    const { chart, height, padding, data, color, borderWidth } = this;
    if (!chart) return;
    chart.changeData(data).get('geoms')[0].size(borderWidth).color(color);
    chart.set('height', height);
    chart.set('padding', padding);
    chart.repaint();
  }

  ngOnInit() {
    setTimeout(() => this.install(), this.delay);
  }

  ngOnChanges(): void {
    this.attachChart();
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
  }
}
