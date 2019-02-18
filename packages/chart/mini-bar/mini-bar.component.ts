import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  NgZone,
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
  host: {
    '[style.height.px]': 'height',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class G2MiniBarComponent implements OnInit, OnChanges, OnDestroy {
  private chart: any;

  // #region fields

  @Input() @InputNumber() delay = 0;
  @Input() color = '#1890FF';
  @Input() @InputNumber() height = 0;
  @Input() @InputNumber() borderWidth = 5;
  @Input() padding: Array<string | number> = [8, 8, 8, 8];
  @Input() data: G2MiniBarData[] = [];
  @Input() yTooltipSuffix = '';
  @Input() tooltipType: 'mini' | 'default' = 'default';

  // #endregion

  constructor(private el: ElementRef, private ngZone: NgZone) {}

  private install() {
    const { el, height, padding, yTooltipSuffix, tooltipType } = this;
    const chart = (this.chart = new G2.Chart({
      container: el.nativeElement,
      forceFit: true,
      height,
      padding,
    }));
    chart.source([], {
      x: {
        type: 'cat',
      },
      y: {
        min: 0,
      },
    });
    chart.legend(false);
    chart.axis(false);
    chart.tooltip({
      type: tooltipType === 'mini' ? 'mini' : null,
      showTitle: false,
      hideMarkders: false,
      crosshairs: false,
      'g2-tooltip': { padding: 4 },
      'g2-tooltip-list-item': { margin: `0px 4px` },
    });
    chart
      .interval()
      .position('x*y')
      .tooltip('x*y', (x, y) => ({ name: x, value: y + yTooltipSuffix }));

    chart.render();

    this.attachChart();
  }

  private attachChart() {
    const { chart, height, padding, data, color, borderWidth } = this;
    if (!chart || !data || data.length <= 0) return;
    chart
      .get('geoms')[0]
      .size(borderWidth)
      .color(color);
    chart.set('height', height);
    chart.set('padding', padding);
    chart.changeData(data);
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
