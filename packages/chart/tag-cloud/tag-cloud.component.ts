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
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';

declare var G2: any;
declare var DataSet: any;

export interface G2TagCloudData {
  x?: string;
  value?: number;
  category?: any;
  [key: string]: any;
}

@Component({
  selector: 'g2-tag-cloud',
  template: ``,
  host: {
    '[style.height.px]': 'height',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class G2TagCloudComponent implements OnDestroy, OnChanges, OnInit {
  private resize$: Subscription;
  private chart: any;

  // #region fields

  @Input() @InputNumber() delay = 0;
  @Input() @InputNumber() height = 100;
  @Input() padding = 0;
  @Input() data: G2TagCloudData[] = [];

  // #endregion

  constructor(private el: ElementRef, private ngZone: NgZone) {}

  private initTagCloud() {
    // 给point注册一个词云的shape
    G2.Shape.registerShape('point', 'cloud', {
      drawShape(cfg, container) {
        const attrs = {
          fillOpacity: cfg.opacity,
          fontSize: cfg.origin._origin.size,
          rotate: cfg.origin._origin.rotate,
          text: cfg.origin._origin.text,
          textAlign: 'center',
          fontFamily: cfg.origin._origin.font,
          fill: cfg.color,
          textBaseline: 'Alphabetic',
          ...cfg.style,
        };
        return container.addShape('text', {
          attrs: { ...attrs, x: cfg.x, y: cfg.y },
        });
      },
    });
  }

  private install() {
    const { el, padding, height } = this;

    const chart = (this.chart = new G2.Chart({
      container: el.nativeElement,
      padding,
      height,
    }));
    chart.legend(false);
    chart.axis(false);
    chart.tooltip({
      showTitle: false,
    });
    chart.coord().reflect();
    chart
      .point()
      .position('x*y')
      .color('category')
      .shape('cloud')
      .tooltip('value*category');

    chart.render();

    this.attachChart();
  }

  private attachChart() {
    const { chart, height, padding, data } = this;
    if (!chart || !data || data.length <= 0) return;

    chart.set('height', height);
    chart.set('padding', padding);
    chart.forceFit();

    const dv = new DataSet.View().source(data);
    const range = dv.range('value');
    const min = range[0];
    const max = range[1];

    dv.transform({
      type: 'tag-cloud',
      fields: ['x', 'value'],
      size: [chart.get('width'), chart.get('height')],
      padding,
      timeInterval: 5000, // max execute time
      rotate: () => {
        let random = ~~(Math.random() * 4) % 4;
        if (random === 2) {
          random = 0;
        }
        return random * 90; // 0, 90, 270
      },
      fontSize: d => (d.value ? ((d.value - min) / (max - min)) * (80 - 24) + 24 : 0),
    });
    chart.source(dv, {
      x: { nice: false },
      y: { nice: false },
    });

    chart.repaint();
  }

  private _attachChart() {
    this.ngZone.runOutsideAngular(() => this.attachChart());
  }

  private installResizeEvent() {
    this.resize$ = fromEvent(window, 'resize')
      .pipe(
        filter(() => this.chart),
        debounceTime(200),
      )
      .subscribe(() => this._attachChart());
  }

  ngOnInit(): void {
    this.initTagCloud();
    this.installResizeEvent();
    this.ngZone.runOutsideAngular(() => setTimeout(() => this.install(), this.delay));
  }

  ngOnChanges(): void {
    this._attachChart();
  }

  ngOnDestroy(): void {
    this.resize$.unsubscribe();
    if (this.chart) {
      this.ngZone.runOutsideAngular(() => this.chart.destroy());
    }
  }
}
