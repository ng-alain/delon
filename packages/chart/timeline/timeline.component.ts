import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewEncapsulation,
  booleanAttribute,
  input,
  numberAttribute,
  output
} from '@angular/core';

import type { Chart, G2Spec } from '@antv/g2';
import { format } from 'date-fns';

import { G2BaseComponent, G2Event, G2Time, genMiniTooltipOptions, viewSpec } from '@delon/chart/core';
import { toDate } from '@delon/util/date-time';
import { NzStringTemplateOutletDirective } from 'ng-zorro-antd/core/outlet';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzSkeletonComponent } from 'ng-zorro-antd/skeleton';

/** 按 `maxAxis` 传递对应数量的 `y1`…`yN` */
export interface G2TimelineData {
  time?: G2Time;
  y1: number;
  y2?: number;
  y3?: number;
  y4?: number;
  y5?: number;
  [key: string]: NzSafeAny;
}

export interface G2TimelineMap {
  y1: string;
  y2?: string;
  y3?: string;
  y4?: string;
  y5?: string;

  [key: string]: string | undefined;
}

export interface G2TimelineClickItem {
  item: G2TimelineData;
  ev: G2Event;
}

@Component({
  selector: 'g2-timeline',
  exportAs: 'g2Timeline',
  template: `
    <ng-container *nzStringTemplateOutlet="title()">
      <h4>{{ title() }}</h4>
    </ng-container>
    @if (!loaded()) {
      <div style="position: absolute; inset: 0; z-index: 1;">
        <nz-skeleton />
      </div>
    }
    <div #container></div>
  `,
  host: {
    '[style.position]': '"relative"'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [NzStringTemplateOutletDirective, NzSkeletonComponent]
})
export class G2TimelineComponent extends G2BaseComponent {
  // #region fields

  readonly title = input<string | TemplateRef<void> | null>();
  readonly maxAxis = input(2, { transform: numberAttribute });
  readonly data = input<G2TimelineData[]>([]);
  readonly titleMap = input<G2TimelineMap | null>();
  readonly colorMap = input<G2TimelineMap>({
    y1: '#5B8FF9',
    y2: '#5AD8A6',
    y3: '#5D7092',
    y4: '#F6BD16',
    y5: '#E86452'
  });
  readonly mask = input<string>('HH:mm');
  readonly maskSlider = input<string>('HH:mm');
  readonly position = input<'top' | 'right' | 'bottom' | 'left'>('top');
  readonly height = input(450, { transform: numberAttribute });
  readonly padding = input<number[]>([40, 8, 64, 40]);
  readonly borderWidth = input(2, { transform: numberAttribute });
  readonly slider = input(true, { transform: booleanAttribute });
  readonly clickItem = output<G2TimelineClickItem>();

  // #endregion

  protected override containerOf(): HTMLElement {
    return this.node().nativeElement;
  }

  /** 必须同时供首次渲染与 data-only 变更使用，否则 marks 会拿到未折叠的原始数据 */
  private foldedData(): {
    axes: string[];
    seriesNames: string[];
    list: G2TimelineData[];
    folded: Array<Record<string, NzSafeAny>>;
  } {
    const { data, maxAxis, titleMap } = this;
    const axes = [...Array(maxAxis())].map((_, index) => `y${index + 1}`);
    const list = data()
      .map(item => {
        const time = toDate(item.time!);
        return { ...item, time, _time: +time };
      })
      .sort((a, b) => a._time - b._time);
    const seriesNames = axes.map(key => titleMap()?.[key] ?? key);
    const folded: Array<Record<string, NzSafeAny>> = [];
    list.forEach(row => {
      axes.forEach((key, index) => {
        folded.push({ time: row.time, series: seriesNames[index], value: (row as NzSafeAny)[key] });
      });
    });
    return { axes, seriesNames, list, folded };
  }

  protected buildSpec(): G2Spec {
    const { padding, slider, theme, mask, position, colorMap, borderWidth, height } = this;
    const { axes, seriesNames, list, folded } = this.foldedData();
    // 空数据时 `Math.max()` 为 `-Infinity`，故 domain 退化为 `[0, 1]`
    const max = list.length === 0 ? 0 : Math.max(...axes.map(key => Math.max(...list.map(d => d[key] as number))));
    const scale: Record<string, NzSafeAny> = {
      x: { type: 'time', mask: mask(), range: [0, 1] },
      // v5 忽略 `min`/`max`，上下界必须用 `domain`
      y: { domain: [0, max || 1] }
    };
    const axis: Record<string, NzSafeAny> = {
      // 必须显式给 `size`：轴默认占位偏大，会留下空白带并把 slider 挤出 canvas
      x: { title: false, size: 20 },
      y: { title: false }
    };
    scale['color'] = {
      domain: seriesNames,
      range: axes.map(key => (colorMap() as NzSafeAny)[key])
    };
    const children = [
      {
        type: 'line',
        encode: { x: 'time', y: 'value', color: 'series' },
        style: { lineWidth: borderWidth() }
      }
    ];
    const tooltipOptions = genMiniTooltipOptions('default', { crosshairs: true });
    return {
      ...viewSpec({ theme: theme(), padding: padding(), height: height() }),
      ...tooltipOptions,
      data: folded,
      scale,
      axis,
      legend: { color: { position: position() } },
      slider: slider()
        ? {
            x: {
              values: [0, 1],
              labelFormatter: (val: number) => format(val, this.maskSlider())
            }
          }
        : false,
      // 必须与 tooltip 的 `interaction` 合并，否则会覆盖掉 `crosshairs: true`
      interaction: { ...tooltipOptions['interaction'], legendFilter: true },
      children
    } as G2Spec;
  }

  protected override dataOf(): unknown {
    return this.foldedData().folded;
  }

  protected override afterCreate(chart: Chart): void {
    chart.on('plot:click', (ev: G2Event) => {
      const records = chart.getDataByXY({ x: ev.x!, y: ev.y! });
      this.clickItem.emit({ item: records[0] as G2TimelineData, ev });
    });
  }

  // 不覆盖 `isDataOnly()`：legend/slider/scale/axis 是 spec 级配置，只有 `data` 变更能走 data-only 快路径
}
