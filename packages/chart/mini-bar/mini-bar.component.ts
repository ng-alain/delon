import { ChangeDetectionStrategy, Component, ViewEncapsulation, input, numberAttribute, output } from '@angular/core';

import type { Chart, G2Spec } from '@antv/g2';

import { G2BaseComponent, G2Event, genMiniTooltipOptions, viewSpec } from '@delon/chart/core';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

export interface G2MiniBarData {
  x: NzSafeAny;
  y: NzSafeAny;
  color?: string | null;
  [key: string]: NzSafeAny;
}

export interface G2MiniBarClickItem {
  item: G2MiniBarData;
  ev: G2Event;
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

  protected buildSpec(): G2Spec {
    const { color, data, borderWidth, yTooltipSuffix, tooltipType, theme, padding, height } = this;
    return {
      ...viewSpec({ theme: theme(), padding: padding(), height: height() }),
      ...genMiniTooltipOptions(tooltipType(), { crosshairs: false }),
      data: data(),
      scale: { x: { type: 'band' }, y: { zero: true } },
      legend: false,
      axis: false,
      children: [
        {
          type: 'interval',
          encode: {
            x: 'x',
            y: 'y',
            size: borderWidth(),
            color: {
              type: 'transform',
              value: (d: G2MiniBarData) => d.color || color()
            }
          },
          tooltip: {
            items: [(d: G2MiniBarData) => ({ name: d.x, value: d.y + yTooltipSuffix() })]
          }
        }
      ]
    } as G2Spec;
  }

  protected override afterCreate(chart: Chart): void {
    chart.on('interval:click', (ev: G2Event) => {
      this.clickItem.emit({ item: ev.data?.data as G2MiniBarData, ev });
    });
  }
}
