import { ChangeDetectionStrategy, Component, ViewEncapsulation, input, numberAttribute, output } from '@angular/core';

import type { Chart, Event } from '@antv/g2';

import { G2BaseComponent, genMiniTooltipOptions } from '@delon/chart/core';
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
    '[style.height.px]': 'height()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class G2MiniBarComponent extends G2BaseComponent {
  // #region fields

  readonly color = input('#1890FF');
  readonly height = input(0, { transform: numberAttribute });
  readonly borderWidth = input(5, { transform: numberAttribute });
  readonly padding = input<number | number[] | 'auto'>([8, 8, 8, 8]);
  readonly data = input<G2MiniBarData[]>([]);
  readonly yTooltipSuffix = input('');
  readonly tooltipType = input<'mini' | 'default'>('default');
  readonly clickItem = output<G2MiniBarClickItem>();

  // #endregion

  install(): void {
    const { el, height, padding, yTooltipSuffix, tooltipType, theme, color, borderWidth } = this;
    const chart: Chart = (this._chart = new this.winG2.Chart({
      container: el.nativeElement,
      autoFit: true,
      height: height(),
      padding: padding(),
      theme: theme()
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
    chart.tooltip(genMiniTooltipOptions(tooltipType(), { showCrosshairs: false }));
    chart
      .interval()
      .position('x*y')
      .color('x*y', (x, y) => {
        const colorItem = this.data().find(w => w.x === x && w.y === y);
        return colorItem && colorItem.color ? colorItem.color : color();
      })
      .size(borderWidth())
      .tooltip('x*y', (x: NzSafeAny, y: NzSafeAny) => ({ name: x, value: y + yTooltipSuffix() }));

    chart.on(`interval:click`, (ev: Event) => {
      this.clickItem.emit({ item: ev.data?.data, ev });
    });

    this.ready.emit(chart);

    this.changeData();
    chart.render();
  }

  changeData(): void {
    const { _chart, data } = this;
    if (!_chart || !Array.isArray(data()) || data().length <= 0) return;
    _chart.changeData(data());
  }
}
