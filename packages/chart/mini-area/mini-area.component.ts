import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  ViewEncapsulation,
  booleanAttribute,
  input,
  numberAttribute,
  output
} from '@angular/core';

import type { Chart, G2Spec } from '@antv/g2';

import { G2BaseComponent, G2Event, genMiniTooltipOptions, viewSpec } from '@delon/chart/core';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

export interface G2MiniAreaData {
  x: NzSafeAny;
  y: NzSafeAny;
  [key: string]: NzSafeAny;
}

export interface G2MiniAreaClickItem {
  item: G2MiniAreaData;
  ev: G2Event;
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

  protected override chartOptions(): NzSafeAny {
    return { container: this.el.nativeElement, autoFit: this.fit() };
  }

  protected buildSpec(): G2Spec {
    const {
      data,
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
    const children: Array<Record<string, NzSafeAny>> = [
      {
        type: 'area',
        encode: { x: 'x', y: 'y', shape: 'smooth', color: { type: 'constant', value: color() } },
        tooltip: { title: false, items: [(d: G2MiniAreaData) => ({ name: d.x, value: d.y + yTooltipSuffix() })] }
      }
    ];
    if (line()) {
      children.push({
        type: 'line',
        encode: { x: 'x', y: 'y', shape: 'smooth', color: { type: 'constant', value: borderColor() } },
        style: { lineWidth: borderWidth() },
        tooltip: false
      });
    }
    const axis: Record<string, NzSafeAny> = {};
    if (!xAxis() && !yAxis()) {
      axis['x'] = false;
      axis['y'] = false;
    } else {
      axis['x'] = xAxis() ?? false;
      axis['y'] = yAxis() ?? false;
    }
    return {
      ...viewSpec({ theme: theme(), padding: padding(), height: height(), animate: animate(), autoFit: fit() }),
      ...genMiniTooltipOptions(tooltipType()),
      data: data(),
      legend: false,
      axis,
      children
    } as G2Spec;
  }

  protected override afterCreate(chart: Chart): void {
    chart.on('plot:click', (ev: G2Event) => {
      const records = chart.getDataByXY({ x: ev.x!, y: ev.y! });
      this.clickItem.emit({ item: records[0] as G2MiniAreaData, ev });
    });
  }

  protected override isDataOnly(changed: ReadonlyArray<Signal<unknown>>): boolean {
    // line 是非数据兄弟 mark，走 data-only 会让 changeData 把数据写死到它上面
    if (this.line()) {
      return false;
    }
    // 用 Object.is 比较信号引用，避免 no-uncalled-signals 误报
    return changed.length > 0 && changed.every(s => Object.is(s, this.data));
  }
}
