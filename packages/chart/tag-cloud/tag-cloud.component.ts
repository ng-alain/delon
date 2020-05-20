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
import { Chart, registerShape, Util, Types } from '@antv/g2';
import { AlainConfigService, deprecation10, InputNumber } from '@delon/util';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';

export interface G2TagCloudData {
  value?: number;
  name?: string;
  /**
   * @deprecated Use `name` instead
   */
  x?: string;
  /**
   * @deprecated 10.0.0. This is deprecated and going to be removed in 10.0.0.
   */
  category?: any;
  [key: string]: any;
}

@Component({
  selector: 'g2-tag-cloud',
  exportAs: 'g2TagCloud',
  template: ``,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class G2TagCloudComponent implements OnDestroy, OnChanges, OnInit {
  private resize$: Subscription;
  private chart: Chart;

  // #region fields

  @Input() @InputNumber() delay = 100;
  @Input() @InputNumber() width = 0;
  @Input() @InputNumber() height = 200;
  @Input() padding: number | number[] | 'auto' = 0;
  @Input() data: G2TagCloudData[] = [];
  @Input() theme: string | Types.LooseObject;

  // #endregion

  constructor(private el: ElementRef<HTMLDivElement>, private ngZone: NgZone, configSrv: AlainConfigService) {
    configSrv.attachKey(this, 'chart', 'theme');
  }

  private initTagCloud() {
    registerShape('point', 'cloud', {
      draw(cfg, container: NzSafeAny) {
        const data = cfg.data as NzSafeAny;
        const textShape = container.addShape('text', {
          attrs: {
            ...cfg.style,
            fontSize: data.size,
            text: data.text,
            textAlign: 'center',
            fontFamily: data.font,
            fill: cfg.color,
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
    const { el, padding, theme } = this;
    if (this.height === 0) {
      this.height = this.el.nativeElement.clientHeight;
    }
    if (this.width === 0) {
      this.width = this.el.nativeElement.clientWidth;
    }

    const chart = (this.chart = new Chart({
      container: el.nativeElement,
      autoFit: false,
      padding,
      height: this.height,
      width: this.width,
      theme,
    }));
    chart.scale({
      x: { nice: false },
      y: { nice: false },
    });
    chart.legend(false);
    chart.axis(false);
    chart.tooltip({
      showTitle: false,
      showMarkers: false,
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
            fillOpacity: 0.4,
          },
        },
      });
    chart.interaction('element-active');

    this.attachChart();
  }

  private attachChart() {
    const { chart, padding, data } = this;
    if (!chart || !data || data.length <= 0) return;

    // TODO: compatible
    if (data.find(w => !!w.x) != null) {
      deprecation10('g2-tag-cloud', 'x', 'name');
      data.forEach(item => {
        item.name = item.x;
      });
    }
    if (data.find(w => !!w.category) != null) {
      deprecation10('g2-tag-cloud', 'category');
    }

    chart.height = this.height;
    chart.width = this.width;
    chart.padding = padding;

    const dv = new DataSet.View().source(data);
    const range = dv.range('value');
    const min = range[0];
    const max = range[1];

    dv.transform({
      type: 'tag-cloud',
      fields: ['name', 'value'],
      // imageMask,
      font: 'Verdana',
      size: [this.width, this.height], // 宽高设置最好根据 imageMask 做调整
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
      },
    } as NzSafeAny);
    chart.data(dv.rows);
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
