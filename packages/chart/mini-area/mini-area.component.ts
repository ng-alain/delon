import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

import type { Chart, Event } from '@antv/g2';

import { G2BaseComponent, genMiniTooltipOptions } from '@delon/chart/core';
import { BooleanInput, InputBoolean, InputNumber, NumberInput } from '@delon/util/decorator';

export interface G2MiniAreaData {
  x: any;
  y: any;
  [key: string]: any;
}

export interface G2MiniAreaClickItem {
  item: G2MiniAreaData;
  ev: Event;
}

@Component({
  selector: 'g2-mini-area',
  exportAs: 'g2MiniArea',
  template: ``,
  host: {
    '[style.height.px]': 'height'
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class G2MiniAreaComponent extends G2BaseComponent {
  static ngAcceptInputType_borderWidth: NumberInput;
  static ngAcceptInputType_height: NumberInput;
  static ngAcceptInputType_fit: BooleanInput;
  static ngAcceptInputType_line: BooleanInput;
  static ngAcceptInputType_animate: BooleanInput;

  // #region fields

  @Input() color = 'rgba(24, 144, 255, 0.2)';
  @Input() borderColor = '#1890FF';
  @Input() @InputNumber() borderWidth = 2;
  @Input() @InputNumber() height = 56;
  @Input() @InputBoolean() fit = true;
  @Input() @InputBoolean() line = false;
  @Input() @InputBoolean() animate = true;
  @Input() xAxis: any;
  @Input() yAxis: any;
  @Input() padding: number | number[] | 'auto' = [8, 8, 8, 8];
  @Input() data: G2MiniAreaData[] = [];
  @Input() yTooltipSuffix = '';
  @Input() tooltipType: 'mini' | 'default' = 'default';
  @Output() readonly clickItem = new EventEmitter<G2MiniAreaClickItem>();

  // #endregion

  install(): void {
    const {
      el,
      fit,
      height,
      padding,
      xAxis,
      yAxis,
      yTooltipSuffix,
      tooltipType,
      line,
      theme,
      animate,
      color,
      borderColor,
      borderWidth
    } = this;
    const chart: Chart = (this._chart = new (window as any).G2.Chart({
      container: el.nativeElement,
      autoFit: fit,
      height,
      padding,
      theme
    }));
    chart.animate(animate);

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
    chart.tooltip(genMiniTooltipOptions(tooltipType));

    chart
      .area()
      .position('x*y')
      .color(color)
      .tooltip('x*y', (x, y) => ({ name: x, value: y + yTooltipSuffix }))
      .shape('smooth');

    if (line) {
      chart.line().position('x*y').shape('smooth').color(borderColor).size(borderWidth).tooltip(false);
    }

    chart.on(`plot:click`, (ev: Event) => {
      const records = this._chart.getSnapRecords({ x: ev.x, y: ev.y });
      this.ngZone.run(() => this.clickItem.emit({ item: records[0]._origin, ev }));
    });

    this.changeData();
    chart.render();
  }

  changeData(): void {
    const { _chart, data } = this;
    if (!_chart || !Array.isArray(data) || data.length <= 0) return;

    _chart.changeData(data);
  }
}
