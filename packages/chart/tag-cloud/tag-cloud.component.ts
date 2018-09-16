import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  OnDestroy,
  OnChanges,
  NgZone,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { toNumber } from '@delon/util';

declare var G2: any;
declare var DataSet: any;

@Component({
  selector: 'g2-tag-cloud',
  template: `<div #container [ngStyle]="{'height.px': height}"></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class G2TagCloudComponent implements OnDestroy, OnChanges, OnInit {
  // #region fields

  @Input()
  get height() {
    return this._height;
  }
  set height(value: any) {
    this._height = toNumber(value);
    this.cd.detectChanges();
  }
  private _height = 0;

  @Input()
  padding = 0;

  @Input()
  data: { name: string; value: number; category?: any; [key: string]: any }[];

  // #endregion

  @ViewChild('container')
  private node: ElementRef;

  private chart: any;
  private initFlag = false;

  constructor(
    private el: ElementRef,
    private cd: ChangeDetectorRef,
    private zone: NgZone,
  ) {}

  private initTagCloud() {
    // 给point注册一个词云的shape
    G2.Shape.registerShape('point', 'cloud', {
      drawShape(cfg, container) {
        const attrs = Object.assign(
          {},
          {
            fillOpacity: cfg.opacity,
            fontSize: cfg.origin._origin.size,
            rotate: cfg.origin._origin.rotate,
            text: cfg.origin._origin.text,
            textAlign: 'center',
            fontFamily: cfg.origin._origin.font,
            fill: cfg.color,
            textBaseline: 'Alphabetic',
          },
          cfg.style,
        );
        return container.addShape('text', {
          attrs: Object.assign(attrs, {
            x: cfg.x,
            y: cfg.y,
          }),
        });
      },
    });
  }

  private renderChart() {
    if (!this.data || (this.data && this.data.length < 1)) return;

    this.uninstall();
    this.node.nativeElement.innerHTML = '';
    const dv = new DataSet.View().source(this.data);
    const range = dv.range('value');
    const min = range[0];
    const max = range[1];
    const height = +this.height;
    const width = +this.el.nativeElement.offsetWidth;

    dv.transform({
      type: 'tag-cloud',
      fields: ['x', 'value'],
      size: [width, height],
      padding: this.padding,
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
    const chart = new G2.Chart({
      container: this.node.nativeElement,
      width: width,
      height: height,
      padding: this.padding,
      forceFit: true,
    });
    chart.source(dv, {
      x: { nice: false },
      y: { nice: false },
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

    this.chart = chart;
  }

  private runInstall() {
    this.zone.runOutsideAngular(() => setTimeout(() => this.renderChart()));
  }

  private uninstall() {
    if (this.chart) {
      this.chart.destroy();
      this.chart = null;
    }
  }

  ngOnInit(): void {
    this.initFlag = true;
    this.zone.runOutsideAngular(() =>
      setTimeout(() => {
        this.initTagCloud();
        this.runInstall();
      }),
    );
  }

  ngOnChanges(): void {
    if (this.initFlag) {
      this.runInstall();
    }
  }

  ngOnDestroy(): void {
    this.uninstall();
  }
}
