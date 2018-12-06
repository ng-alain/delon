// tslint:disable:no-any
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { InputNumber } from '@delon/util';

declare var G2: any;

@Component({
  selector: 'g2-gauge',
  template: ``,
  host: {
    '[class.g2-gauge]': 'true',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class G2GaugeComponent implements OnInit, OnDestroy, OnChanges {
  private chart: any;

  // #region fields

  @Input() @InputNumber() delay = 0;
  @Input() title: string;
  @Input() @InputNumber() height;
  @Input() color = '#2F9CFF';
  @Input() bgColor = '#F0F2F5';
  @Input() format: (text: string, item: {}, index: number) => string;
  @Input() @InputNumber() percent: number;
  @Input() padding: Array<number | string> = [10, 10, 30, 10];

  // #endregion

  constructor(private el: ElementRef) { }

  private createData() {
    return [{ name: this.title, value: this.percent }];
  }

  private draw() {
    const { chart, bgColor, color, title } = this;
    if (!chart) return;
    const guide = chart.guide();
    guide.clear();
    const data = this.createData();
    // 绘制仪表盘背景
    guide.arc({
      zIndex: 0,
      top: false,
      start: [0, 0.95],
      end: [100, 0.95],
      style: {
        // 底灰色
        stroke: bgColor,
        lineWidth: 12,
      },
    });
    // 绘制指标
    guide.arc({
      zIndex: 1,
      start: [0, 0.95],
      end: [data[0].value, 0.95],
      style: {
        stroke: color,
        lineWidth: 12,
      },
    });
    // 绘制数字
    guide.html({
      position: ['50%', '95%'],
      html: `<div class="g2-gauge__desc">
        <div class="g2-gauge__title">${title}</div>
        <div class="g2-gauge__percent">${data[0].value}%</div>
      </div>`,
    });
    this.chart.changeData(data);
  }

  private install() {
    const Shape = G2.Shape;
    // 自定义Shape 部分
    Shape.registerShape('point', 'pointer', {
      drawShape(cfg, group) {
        let point = cfg.points[0]; // 获取第一个标记点
        point = this.parsePoint(point);
        const center = this.parsePoint({
          // 获取极坐标系下画布中心点
          x: 0,
          y: 0,
        });
        // 绘制指针
        group.addShape('line', {
          attrs: {
            x1: center.x,
            y1: center.y,
            x2: point.x,
            y2: point.y,
            stroke: cfg.color,
            lineWidth: 2,
            lineCap: 'round',
          },
        });

        // const { origin } = cfg;
        // group.addShape('text', {
        //   attrs: {
        //     x: center.x,
        //     y: center.y + 80,
        //     text: `${origin._origin.value}%`,
        //     textAlign: 'center',
        //     fontSize: 24,
        //     fill: 'rgba(0, 0, 0, 0.85)',
        //   },
        // });
        return group.addShape('circle', {
          attrs: {
            x: center.x,
            y: center.y,
            r: 9.75,
            stroke: cfg.color,
            lineWidth: 2,
            fill: '#fff',
          },
        });
      },
    });

    const { el, height, padding, format, color } = this;

    const chart = this.chart = new G2.Chart({
      container: el.nativeElement,
      forceFit: true,
      height,
      padding,
    });
    chart.source(this.createData());

    chart.coord('polar', {
      startAngle: Math.PI * -1.2,
      endAngle: Math.PI * 0.2,
    });
    chart.scale('value', {
      min: 0,
      max: 100,
      nice: true,
      tickCount: 6,
    });

    chart.axis('1', false);
    // 刻度值
    chart.axis('value', {
      zIndex: 2,
      line: null,
      label: {
        offset: -12,
        formatter: format,
      },
      tickLine: null,
      grid: null,
    });
    chart.legend(false);
    chart
      .point({
        generatePoints: true,
      })
      .position('value*1')
      .shape('pointer')
      .color(color)
      .active(false);

    this.draw();
  }

  ngOnInit(): void {
    setTimeout(() => this.install(), this.delay);
  }

  ngOnChanges(): void {
    this.draw();
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
  }
}
