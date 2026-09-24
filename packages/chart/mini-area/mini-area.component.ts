import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  booleanAttribute,
  input,
  numberAttribute,
  output
} from '@angular/core';

import type { Chart, Event } from '@antv/g2';

import { G2BaseComponent, genMiniTooltipOptions } from '@delon/chart/core';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

export interface G2MiniAreaData {
  x: NzSafeAny;
  y: NzSafeAny;
  [key: string]: NzSafeAny;
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
    '[style.height.px]': 'height()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class G2MiniAreaComponent extends G2BaseComponent {
  // #region fields

  readonly color = input('rgba(24, 144, 255, 0.2)');
  readonly borderColor = input('#1890FF');
  readonly borderWidth = input(2, { transform: numberAttribute });
  readonly height = input(56, { transform: numberAttribute });
  readonly fit = input(true, { transform: booleanAttribute });
  readonly line = input(false, { transform: booleanAttribute });
  readonly animate = input(true, { transform: booleanAttribute });
  readonly xAxis = input<NzSafeAny>();
  readonly yAxis = input<NzSafeAny>();
  readonly padding = input<number | number[] | 'auto'>([8, 8, 8, 8]);
  readonly data = input<G2MiniAreaData[]>([]);
  readonly yTooltipSuffix = input('');
  readonly tooltipType = input<'mini' | 'default'>('default');
  readonly clickItem = output<G2MiniAreaClickItem>();

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
    const chart: Chart = (this._chart = new this.winG2.Chart({
      container: el.nativeElement,
      autoFit: fit(),
      height: height(),
      padding: padding(),
      theme: theme()
    }));
    chart.animate(animate());

    if (!xAxis() && !yAxis()) {
      chart.axis(false);
    }

    if (xAxis()) {
      chart.axis('x', xAxis());
    } else {
      chart.axis('x', false);
    }

    if (yAxis()) {
      chart.axis('y', yAxis());
    } else {
      chart.axis('y', false);
    }

    chart.legend(false);
    chart.tooltip(genMiniTooltipOptions(tooltipType()));

    chart
      .area()
      .position('x*y')
      .color(color())
      .tooltip('x*y', (x, y) => ({ name: x, value: y + yTooltipSuffix() }))
      .shape('smooth');

    if (line()) {
      chart.line().position('x*y').shape('smooth').color(borderColor()).size(borderWidth()).tooltip(false);
    }

    chart.on(`plot:click`, (ev: Event) => {
      const records = this._chart!.getSnapRecords({ x: ev.x, y: ev.y });
      this.clickItem.emit({ item: records[0]._origin, ev });
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
