import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

import type { Chart, Event } from '@antv/g2';

import { G2BaseComponent, genMiniTooltipOptions } from '@delon/chart/core';
import { InputNumber, NumberInput } from '@delon/util/decorator';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

export interface G2MiniBarData {
  x: NzSafeAny;
  y: NzSafeAny;
  color?: string | null;
  [key: string]: NzSafeAny;
}

export interface G2MiniBarClickItem {
  item: G2MiniBarData;
  ev: Event;
}

@Component({
  selector: 'g2-mini-bar',
  exportAs: 'g2MiniBar',
  template: ``,
  host: {
    '[style.height.px]': 'height'
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: true
})
export class G2MiniBarComponent extends G2BaseComponent {
  static ngAcceptInputType_height: NumberInput;
  static ngAcceptInputType_borderWidth: NumberInput;

  // #region fields

  @Input() color = '#1890FF';
  @Input() @InputNumber() height = 0;
  @Input() @InputNumber() borderWidth = 5;
  @Input() padding: number | number[] | 'auto' = [8, 8, 8, 8];
  @Input() data: G2MiniBarData[] = [];
  @Input() yTooltipSuffix = '';
  @Input() tooltipType: 'mini' | 'default' = 'default';
  @Output() readonly clickItem = new EventEmitter<G2MiniBarClickItem>();

  // #endregion

  install(): void {
    const { el, height, padding, yTooltipSuffix, tooltipType, theme, color, borderWidth } = this;
    const chart: Chart = (this._chart = new this.winG2.Chart({
      container: el.nativeElement,
      autoFit: true,
      height,
      padding,
      theme
    }));
    chart.scale({
      x: {
        type: 'cat'
      },
      y: {
        min: 0
      }
    });
    chart.legend(false);
    chart.axis(false);
    chart.tooltip(genMiniTooltipOptions(tooltipType, { showCrosshairs: false }));
    chart
      .interval()
      .position('x*y')
      .color('x*y', (x, y) => {
        const colorItem = this.data.find(w => w.x === x && w.y === y);
        return colorItem && colorItem.color ? colorItem.color : color;
      })
      .size(borderWidth)
      .tooltip('x*y', (x: NzSafeAny, y: NzSafeAny) => ({ name: x, value: y + yTooltipSuffix }));

    chart.on(`interval:click`, (ev: Event) => {
      this.ngZone.run(() => this.clickItem.emit({ item: ev.data?.data, ev }));
    });

    this.ready.next(chart);

    this.changeData();
    chart.render();
  }

  changeData(): void {
    const { _chart, data } = this;
    if (!_chart || !Array.isArray(data) || data.length <= 0) return;
    _chart.changeData(data);
  }
}
