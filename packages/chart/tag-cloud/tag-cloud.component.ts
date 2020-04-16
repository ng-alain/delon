import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import DataSet from '@antv/data-set';
import { Chart, registerShape, Util } from '@antv/g2';
import { InputNumber } from '@delon/util';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';

export interface G2TagCloudData {
  x?: string;
  value?: number;
  category?: any;
  [key: string]: any;
}

@Component({
  selector: 'g2-tag-cloud',
  exportAs: 'g2TagCloud',
  template: ``,
  host: {
    '[style.height.px]': 'height',
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class G2TagCloudComponent implements OnDestroy, OnChanges, OnInit {
  private resize$: Subscription;
  private chart: Chart;

  // #region fields

  @Input() @InputNumber() delay = 0;
  @Input() @InputNumber() height = 100;
  @Input() padding: number | number[] | 'auto' = 0;
  @Input() data: G2TagCloudData[] = [];

  // #endregion

  constructor(private el: ElementRef, private ngZone: NgZone) {}

  private initTagCloud() {
    // 给point注册一个词云的shape
    registerShape('point', 'cloud', {
      draw(cfg, container: NzSafeAny) {
        const data = cfg.data as NzSafeAny;
        const textShape = container.addShape('text', {
          attrs: {
            ...cfg.defaultStyle,
            ...cfg.style,
            fontSize: data.size,
            text: data.text,
            textAlign: 'center',
            fontFamily: data.font,
            fill: cfg.color, // || cfg.defaultStyle!.stroke,
            textBaseline: 'Alphabetic',
            x: cfg.x,
            y: cfg.y,
          },
        });
        if (data.rotate) {
          Util.rotate(textShape, (data.rotate * Math.PI) / 180);
        }
        return textShape;
      },
    });
  }

  private install() {
    const { el, padding, height } = this;

    const chart = (this.chart = new Chart({
      container: el.nativeElement,
      padding,
      height,
    }));
    chart.legend(false);
    chart.axis(false);
    chart.tooltip({
      showTitle: false,
      showMarkers: false,
    });
    chart.coordinate().reflect('x');
    chart.point().position('x*y').color('category').shape('cloud').tooltip('value*category');
    chart.interaction('element-active');

    this.attachChart();
  }

  private attachChart() {
    const { chart, height, padding, data } = this;
    if (!chart || !data || data.length <= 0) return;

    chart.height = height;
    chart.padding = padding;
    chart.forceFit();

    const dv = new DataSet.View().source(data);
    const range = dv.range('value');
    const min = range[0];
    const max = range[1];

    dv.transform({
      type: 'tag-cloud',
      fields: ['x', 'value'],
      size: [chart.width, chart.height],
      padding: typeof padding === 'number' ? padding : undefined,
      timeInterval: 5000, // max execute time
      rotate: () => {
        let random = ~~(Math.random() * 4) % 4;
        if (random === 2) {
          random = 0;
        }
        return random * 90; // 0, 90, 270
      },
      fontSize(d: NzSafeAny) {
        if (d.value) {
          return ((d.value - min) / (max - min)) * (80 - 24) + 24;
        }
        return 0;
      },
    } as NzSafeAny);

    chart.scale({
      x: { nice: false },
      y: { nice: false },
    });

    chart.changeData(dv.rows);
    chart.render();
  }

  private _attachChart() {
    this.ngZone.runOutsideAngular(() => this.attachChart());
  }

  private installResizeEvent() {
    this.resize$ = fromEvent(window, 'resize')
      .pipe(
        filter(() => !!this.chart),
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
