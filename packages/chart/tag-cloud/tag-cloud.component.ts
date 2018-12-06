// tslint:disable:no-any
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { InputNumber } from '@delon/util';

declare var G2: any;
declare var DataSet: any;

export interface G2TagCloudData {
  name: string;
  value: number;
  category?: any;
  [key: string]: any;
}

@Component({
  selector: 'g2-tag-cloud',
  template: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class G2TagCloudComponent implements OnDestroy, OnChanges, OnInit {

  private chart: any;

  // #region fields

  @Input() @InputNumber() delay = 0;
  @HostBinding('style.height.px') @Input() @InputNumber() height = 100;
  @Input() padding = 0;
  @Input() data: G2TagCloudData[] = [];

  // #endregion

  constructor(private el: ElementRef) { }

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
    const container = el.nativeElement as HTMLElement;
    const width = container.offsetWidth;

    const chart = this.chart = new G2.Chart({
      container: el.nativeElement,
      forceFit: true,
      padding,
      width,
      height,
    });
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
    const { chart, el, height, padding, data } = this;
    if (!chart) return ;

    const container = el.nativeElement as HTMLElement;
    const width = container.offsetWidth;

    chart.set('height', height);
    chart.set('width', width);
    chart.set('padding', padding);

    const dv = new DataSet.View().source(data);
    const range = dv.range('value');
    const min = range[0];
    const max = range[1];

    dv.transform({
      type: 'tag-cloud',
      fields: ['x', 'value'],
      size: [width, height],
      padding,
      timeInterval: 5000, // max execute time
      rotate() {
        let random = ~~(Math.random() * 4) % 4;
        if (random === 2) {
          random = 0;
        }
        return random * 90; // 0, 90, 270
      },
      fontSize(d) {
        if (d.value) {
          return ((d.value - min) / (max - min)) * (80 - 24) + 24;
        }
        return 0;
      },
    });
    chart.source(dv, {
      x: { nice: false },
      y: { nice: false },
    });

    chart.repaint();
  }

  ngOnInit(): void {
    this.initTagCloud();
    setTimeout(() => this.install(), this.delay);
  }

  ngOnChanges(): void {
    this.attachChart();
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
  }
}
