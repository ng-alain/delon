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
  private view: any;
  private viewLine: any;

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
  @Input() tooltipType: 'mini' | 'default' = 'default';

  // #endregion

  constructor(private el: ElementRef) { }

  private install() {
    const { el, fit, height, padding, xAxis, yAxis, yTooltipSuffix, tooltipType, line } = this;
    const chart = this.chart = new G2.Chart({
      container: el.nativeElement,
      forceFit: fit,
      height,
      padding,
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

    chart.legend(false);
    chart.tooltip({
      'type': tooltipType === 'mini' ? 'mini' : null,
      'showTitle': false,
      'hideMarkders': false,
      'g2-tooltip': { padding: 4 },
      'g2-tooltip-list-item': { margin: `0px 4px` },
    });

    chart
      .area()
      .position('x*y')
      .tooltip('x*y', (x, y) => ({ name: x, value: y + yTooltipSuffix }))
      .shape('smooth')
      .opacity(1);

    if (line) {
      chart.line().position('x*y').shape('smooth').opacity(1).tooltip(false);
    }

    chart.render();

    this.attachChart();
  }

  private attachChart() {
    const { chart, line, fit, height, animate, padding, data, color, borderColor, borderWidth } = this;
    if (!chart) return;

    const geoms = chart.get('geoms');
    geoms.forEach(g => g.color(color));
    if (line) {
      geoms[1].color(borderColor).size(borderWidth);
    }

    chart.set('forceFit', fit);
    chart.set('height', height);
    chart.set('animate', animate);
    chart.set('padding', padding);

    chart.changeData(data);
  }

  ngOnInit() {
    setTimeout(() => this.install(), this.delay);
  }

  ngOnChanges(): void {
    this.attachChart();
  }

  ngOnDestroy(): void {
    const { chart, view, viewLine } = this;
    if (!chart) return;

    view.destroy();
    if (viewLine) {
      viewLine.destroy();
    }
    chart.destroy();
  }
}
