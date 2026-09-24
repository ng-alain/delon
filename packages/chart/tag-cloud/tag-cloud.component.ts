import { ChangeDetectionStrategy, Component, ViewEncapsulation, input, numberAttribute, output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime, filter, fromEvent } from 'rxjs';

import type { Chart, Event } from '@antv/g2';

import { G2BaseComponent } from '@delon/chart/core';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzSkeletonComponent } from 'ng-zorro-antd/skeleton';

export interface G2TagCloudData {
  value?: number;
  name?: string;
  [key: string]: NzSafeAny;
}

export interface G2TagCloudClickItem {
  item: G2TagCloudData;
  ev: Event;
}

@Component({
  selector: 'g2-tag-cloud',
  exportAs: 'g2TagCloud',
  template: `@if (!loaded()) {
    <nz-skeleton />
  }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [NzSkeletonComponent]
})
export class G2TagCloudComponent extends G2BaseComponent {
  private _width = 0;
  private _height = 0;

  // #region fields

  readonly width = input(0, { transform: numberAttribute });
  readonly height = input(200, { transform: numberAttribute });
  readonly padding = input<number | number[] | 'auto'>(0);
  readonly data = input<G2TagCloudData[]>([]);
  readonly clickItem = output<G2TagCloudClickItem>();

  // #endregion

  private initTagCloud(): void {
    const winG2 = this.winG2;
    winG2.registerShape('point', 'cloud', {
      draw(cfg: NzSafeAny, container: NzSafeAny) {
        const data = cfg.data as NzSafeAny;
        const textShape = container.addShape({
          type: 'text',
          name: 'tag-cloud-text',
          attrs: {
            ...cfg.style,
            fontSize: data.size,
            text: data.text,
            textAlign: 'center',
            fontFamily: data.font,
            fill: cfg.color,
            textBaseline: 'Alphabetic',
            x: cfg.x,
            y: cfg.y
          } as NzSafeAny
        });
        if (data.rotate) {
          winG2.Util.rotate(textShape, (data.rotate * Math.PI) / 180);
        }
        return textShape;
      }
    });
  }

  install(): void {
    this.initTagCloud();

    const { el, padding, theme } = this;
    const node = this.el.nativeElement;
    this._width = this.width() === 0 ? node.clientWidth : this.width();
    this._height = this.height() === 0 ? node.clientHeight : this.height();

    const chart: Chart = (this._chart = new this.winG2.Chart({
      container: el.nativeElement,
      autoFit: false,
      padding: padding(),
      height: this._height,
      width: this._width,
      theme: theme()
    }));
    chart.scale({
      x: { nice: false },
      y: { nice: false }
    });
    chart.legend(false);
    chart.axis(false);
    chart.tooltip({
      showTitle: false,
      showMarkers: false
    });
    (chart.coordinate() as NzSafeAny).reflect();
    chart
      .point()
      .position('x*y')
      .color('text')
      .shape('cloud')
      .state({
        active: {
          style: {
            fillOpacity: 0.4
          }
        }
      });
    chart.interaction('element-active');

    chart.on('tag-cloud-text:click', (ev: Event) => {
      this.clickItem.emit({ item: ev.data?.data, ev });
    });

    this.ready.emit(chart);

    this.changeData();
    chart.render();
  }

  changeData(): void {
    const { _chart, data } = this;
    const list = data();
    if (!_chart || !Array.isArray(list) || list.length <= 0) return;

    const dv = new (window as NzSafeAny).DataSet.View().source(list);
    const range = dv.range('value');
    const min = range[0];
    const max = range[1];

    dv.transform({
      type: 'tag-cloud',
      fields: ['name', 'value'],
      // imageMask,
      font: 'Verdana',
      size: [this._width, this._height], // 宽高设置最好根据 imageMask 做调整
      padding: 0,
      timeInterval: 5000, // max execute time
      rotate() {
        let random = ~~(Math.random() * 4) % 4;
        if (random === 2) {
          random = 0;
        }
        return random * 90; // 0, 90, 270
      },
      fontSize(d: NzSafeAny) {
        return ((d.value - min) / (max - min)) * (32 - 8) + 8;
      }
    } as NzSafeAny);

    _chart.changeData(dv.rows);
  }

  private installResizeEvent(): void {
    fromEvent(window, 'resize')
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        filter(() => !!this._chart),
        debounceTime(200)
      )
      .subscribe(() => this.changeData());
  }

  onInit(): void {
    this.installResizeEvent();
  }
}
