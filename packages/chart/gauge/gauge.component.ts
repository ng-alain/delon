import { Platform } from '@angular/cdk/platform';
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
import { Chart, Types } from '@antv/g2';
import { G2Service } from '@delon/chart/core';
import { InputNumber, NumberInput } from '@delon/util';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

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
  static ngAcceptInputType_delay: NumberInput;
  static ngAcceptInputType_height: NumberInput;
  static ngAcceptInputType_percent: NumberInput;

  private destroy$ = new Subject<void>();
  private _chart: Chart;
  private _install = false;

  get chart(): Chart {
    return this._chart;
  }

  // #region fields

  @Input() @InputNumber() delay = 0;
  @Input() title: string;
  @Input() @InputNumber() height: number;
  @Input() color = '#2f9cff';
  @Input() bgColor: string; // = '#f0f2f5';
  @Input() format: (text: string, item: {}, index: number) => string;
  @Input() @InputNumber() percent: number;
  @Input() padding: number | number[] | 'auto' = [10, 10, 30, 10];
  @Input() theme: string | Types.LooseObject;

  // #endregion

  constructor(private srv: G2Service, private el: ElementRef, private ngZone: NgZone, private platform: Platform) {
    this.theme = srv.cog.theme!;
    this.srv.notify
      .pipe(
        takeUntil(this.destroy$),
        filter(() => !this._install),
      )
      .subscribe(() => this.load());
  }

  private load(): void {
    this._install = true;
    this.ngZone.runOutsideAngular(() => setTimeout(() => this.install(), this.delay));
  }

  private install(): void {
    // 自定义Shape 部分
    (window as any).G2.registerShape('point', 'pointer', {
      // tslint:disable-next-line: typedef
      draw(cfg: any, container: any) {
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

    const { el, height, padding, format, theme } = this;

    const chart: Chart = (this._chart = new (window as any).G2.Chart({
      container: el.nativeElement,
      autoFit: true,
      height,
      padding,
      theme,
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
        offset: -14,
        formatter: format,
      },
      tickLine: null,
      grid: null,
    });
    chart.point().position('value*1').shape('pointer');

    this.attachChart();
  }

  private attachChart(): void {
    const { _chart, percent, color, bgColor, title } = this;
    if (!_chart) return;

    const data = [{ name: title, value: percent }];
    const val = data[0].value;
    _chart.annotation().clear(true);
    _chart.geometries[0].color(color);
    // 绘制仪表盘背景
    _chart.annotation().arc({
      top: false,
      start: [0, 0.95],
      end: [100, 0.95],
      style: {
        stroke: bgColor,
        lineWidth: 12,
        lineDash: null,
      },
    });
    _chart.annotation().arc({
      start: [0, 0.95],
      end: [data[0].value, 0.95],
      style: {
        stroke: color,
        lineWidth: 12,
        lineDash: null,
      },
    });

    _chart.annotation().text({
      position: ['50%', '85%'],
      content: title,
      style: {
        fontSize: 12,
        fill: 'rgba(0, 0, 0, 0.43)',
        textAlign: 'center',
      },
    });
    _chart.annotation().text({
      position: ['50%', '90%'],
      content: `${val} %`,
      style: {
        fontSize: 20,
        fill: 'rgba(0, 0, 0, 0.85)',
        textAlign: 'center',
      },
      offsetY: 15,
    });

    _chart.changeData(data);
    _chart.render();
  }

  ngOnInit(): void {
    if (!this.platform.isBrowser) {
      return;
    }
    if ((window as any).G2.Chart) {
      this.load();
    } else {
      this.srv.libLoad();
    }
  }

  ngOnChanges(): void {
    this.ngZone.runOutsideAngular(() => this.attachChart());
  }

  ngOnDestroy(): void {
    if (this._chart) {
      this.ngZone.runOutsideAngular(() => this._chart.destroy());
    }
    this.destroy$.next();
    this.destroy$.complete();
  }
}
