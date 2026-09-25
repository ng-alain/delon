import { ChangeDetectionStrategy, Component, ViewEncapsulation, input, numberAttribute, output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime, filter, fromEvent } from 'rxjs';

import type { Chart, G2Spec } from '@antv/g2';

import { G2BaseComponent, G2Event, viewSpec } from '@delon/chart/core';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzSkeletonComponent } from 'ng-zorro-antd/skeleton';

export interface G2TagCloudData {
  value?: number;
  name?: string;
  [key: string]: NzSafeAny;
}

export interface G2TagCloudClickItem {
  item: G2TagCloudData;
  ev: G2Event;
}

@Component({
  selector: 'g2-tag-cloud',
  exportAs: 'g2TagCloud',
  template: `
    @if (!loaded()) {
      <div style="position: absolute; inset: 0; z-index: 1;">
        <nz-skeleton />
      </div>
    }
  `,
  host: {
    '[style.position]': '"relative"'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [NzSkeletonComponent]
})
export class G2TagCloudComponent extends G2BaseComponent {
  // #region fields

  readonly width = input(0, { transform: numberAttribute });
  readonly height = input(200, { transform: numberAttribute });
  readonly padding = input<number | number[] | 'auto'>(0);
  readonly data = input<G2TagCloudData[]>([]);
  readonly clickItem = output<G2TagCloudClickItem>();

  // #endregion

  protected override chartOptions(): NzSafeAny {
    const node = this.el.nativeElement;
    const width = this.width() === 0 ? node.clientWidth : this.width();
    const height = this.height() === 0 ? node.clientHeight : this.height();
    // wordCloud 的布局尺寸取自渲染上下文，故必须显式给出画布尺寸并关闭 autoFit
    return { container: node, autoFit: false, width, height };
  }

  protected buildSpec(): G2Spec {
    const { data, padding, theme } = this;
    return {
      ...viewSpec({ theme: theme(), padding: padding() }),
      type: 'wordCloud',
      data: data(),
      encode: { text: 'name', value: 'value', color: 'name' },
      layout: {
        font: 'Verdana',
        fontSize: [8, 32],
        padding: 0,
        timeInterval: 5000
      },
      legend: false,
      axis: false,
      tooltip: { title: false },
      // 悬停高亮必须显式开启，漏掉不会报错、只会静默失去高亮
      interaction: { elementHighlight: true }
    } as G2Spec;
  }

  protected override afterCreate(chart: Chart): void {
    chart.on('element:click', (ev: G2Event) => {
      this.clickItem.emit({ item: ev.data?.data as G2TagCloudData, ev });
    });
    this.installResizeEvent();
  }

  private installResizeEvent(): void {
    fromEvent(window, 'resize')
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        filter(() => !!this._chart),
        debounceTime(200)
      )
      .subscribe(() => void this.repaintSpec());
  }
}
