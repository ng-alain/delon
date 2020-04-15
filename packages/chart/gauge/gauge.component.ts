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
import { Chart, registerShape } from '@antv/g2';
import { InputNumber } from '@delon/util';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'g2-gauge',
  exportAs: 'g2Gauge',
  template: ``,
  host: {
    '[class.g2-gauge]': 'true',
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class G2GaugeComponent implements OnInit, OnDestroy, OnChanges {
  private chart: Chart;

  // #region fields

  @Input() @InputNumber() delay = 0;
  @Input() title: string;
  @Input() @InputNumber() height: number;
  @Input() color = '#2f9cff';
  @Input() bgColor = '#f0f2f5';
  @Input() format: (text: string, item: {}, index: number) => string;
  @Input() @InputNumber() percent: number;
  @Input() padding: number | number[] | 'auto' = [10, 10, 30, 10];

  // #endregion

  constructor(private el: ElementRef, private ngZone: NgZone) {}

  private install() {
    // 自定义Shape 部分
    registerShape('point', 'pointer', {
      draw(cfg, container) {
        const group = container.addGroup({});
        // 获取极坐标系下画布中心点
        const center = (this as NzSafeAny).parsePoint({ x: 0, y: 0 });
        // 绘制指针
        group.addShape('line', {
          attrs: {
            x1: center.x,
            y1: center.y,
            x2: cfg.x,
            y2: cfg.y,
            stroke: cfg.color,
            lineWidth: 2.5,
            lineCap: 'round',
          },
        });
        group.addShape('circle', {
          attrs: {
            x: center.x,
            y: center.y,
            r: 5.75,
            stroke: cfg.color,
            lineWidth: 2,
            fill: '#fff',
          },
        });
        return group;
      },
    });

    const { el, height, padding, format } = this;

    const chart = (this.chart = new Chart({
      container: el.nativeElement,
      autoFit: true,
      height,
      padding,
    }));
    chart.legend(false);
    chart.animate(false);
    chart.tooltip(false);
    chart.coordinate('polar', {
      startAngle: (-9 / 8) * Math.PI,
      endAngle: (1 / 8) * Math.PI,
      radius: 0.75,
    });
    chart.scale('value', {
      min: 0,
      max: 100,
      nice: true,
      tickCount: 6,
    });
    chart.axis('1', false);
    chart.axis('value', {
      line: null,
      label: {
        offset: -12,
        formatter: format,
      },
      tickLine: null,
      grid: null,
    });
    chart.point().position('value*1').shape('pointer');

    this.attachChart();
  }

  private attachChart() {
    const { chart, percent, color, bgColor, title } = this;
    if (!chart) return;

    const data = [{ name: title, value: percent }];
    const val = data[0].value;
    chart.annotation().clear(true);
    chart.geometries[0].color(color);
    // 绘制仪表盘背景
    chart.annotation().arc({
      top: false,
      start: [0, 0.95],
      end: [100, 0.95],
      style: {
        stroke: bgColor,
        lineWidth: 12,
        lineDash: null,
      },
    });
    chart.annotation().arc({
      start: [0, 0.95],
      end: [data[0].value, 0.95],
      style: {
        stroke: color,
        lineWidth: 12,
        lineDash: null,
      },
    });

    // 绘制指标数字
    chart.annotation().text({
      position: ['50%', '85%'],
      content: title,
      style: {
        fontSize: 12,
        fill: 'rgba(0, 0, 0, 0.43)',
        textAlign: 'center',
      },
    });
    chart.annotation().text({
      position: ['50%', '90%'],
      content: `${val} %`,
      style: {
        fontSize: 24,
        fill: 'rgba(0, 0, 0, 0.85)',
        textAlign: 'center',
      },
      offsetY: 15,
    });

    chart.changeData(data);
  }

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => setTimeout(() => this.install(), this.delay));
  }

  ngOnChanges(): void {
    this.ngZone.runOutsideAngular(() => this.attachChart());
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.ngZone.runOutsideAngular(() => this.chart.destroy());
    }
  }
}
