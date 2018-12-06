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
import { InputBoolean, InputNumber } from '@delon/util';

declare var G2: any;

export interface G2MiniAreaData {
  x: any;
  y: any;
  [key: string]: any;
}

@Component({
  selector: 'g2-mini-area',
  template: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class G2MiniAreaComponent implements OnInit, OnChanges, OnDestroy {
  private chart: any;

  // #region fields

  @Input() @InputNumber() delay = 0;
  @Input() color = 'rgba(24, 144, 255, 0.2)';
  @Input() borderColor = '#1890FF';
  @Input() @InputNumber() borderWidth = 2;
  @HostBinding('style.height.px') @Input() @InputNumber() height;
  @Input() @InputBoolean() fit = true;
  @Input() @InputBoolean() line = false;
  @Input() @InputBoolean() animate = true;
  @Input() xAxis: any;
  @Input() yAxis: any;
  @Input() padding: number[] = [8, 8, 8, 8];
  @Input() data: G2MiniAreaData[] = [];
  @Input() yTooltipSuffix = '';

  // #endregion

  constructor(private el: ElementRef) { }

  private install() {
    const { el, fit, height, animate, padding, xAxis, yAxis, yTooltipSuffix, data, color, line, borderColor, borderWidth } = this;
    const chart = new G2.Chart({
      container: el.nativeElement,
      forceFit: fit,
      height,
      animate,
      padding,
      legend: null,
    });

    if (!xAxis && !yAxis) {
      chart.axis(false);
    }

    if (xAxis) {
      chart.axis('x', xAxis);
    } else {
      chart.axis('x', false);
    }

    if (yAxis) {
      chart.axis('y', yAxis);
    } else {
      chart.axis('y', false);
    }

    const dataConfig = {
      x: {
        type: 'cat',
        range: [0, 1],
        xAxis,
      },
      y: {
        min: 0,
        yAxis,
      },
    };

    chart.tooltip({
      'showTitle': false,
      'hideMarkders': false,
      'g2-tooltip': { padding: 4 },
      'g2-tooltip-list-item': { margin: `0px 4px` },
    });

    const view = chart.view();
    view.source(data, dataConfig);

    view
      .area()
      .position('x*y')
      .color(color)
      .tooltip('x*y', (x, y) => {
        return {
          name: x,
          value: y + yTooltipSuffix,
        };
      })
      .shape('smooth')
      .style({ fillOpacity: 1 });

    if (line) {
      const view2 = chart.view();
      view2.source(data, dataConfig);
      view2
        .line()
        .position('x*y')
        .color(borderColor)
        .size(borderWidth)
        .shape('smooth');
      view2.tooltip(false);
    }
    chart.render();
    this.chart = chart;
  }

  private attachChart() {
    const { chart, padding, data, color, borderColor, borderWidth } = this;
    if (!chart) return;

    const views = chart.get('views');
    views.forEach(v => {
      v.changeData(data);
    });
    views[0].get('geoms')[0].color(color);
    // line
    if (views.length > 1) {
      views[1].get('geoms')[0].color(borderColor).size(borderWidth);
    }

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
