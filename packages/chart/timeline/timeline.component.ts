import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Chart, Types } from '@antv/g2';
import { G2Time } from '@delon/chart/core/types';
import { AlainConfigService, deprecation10, InputBoolean, InputNumber, toDate } from '@delon/util';
import format from 'date-fns/format';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

export interface G2TimelineData {
  /**
   * 时间值
   * @deprecated Use `time` instead
   */
  x?: G2Time;
  /**
   * 时间值
   */
  time?: G2Time;
  /** 指标1数据 */
  y1: number;
  /** 指标2数据 */
  y2: number;
  /** 指标3数据 */
  y3?: number;
  /** 指标4数据 */
  y4?: number;
  /** 指标5数据 */
  y5?: number;
  [key: string]: any;
}

export interface G2TimelineMap {
  /** 指标1 */
  y1: string;
  /** 指标 */
  y2: string;
  /** 指标3 */
  y3?: string;
  /** 指标4 */
  y4?: string;
  /** 指标5 */
  y5?: string;

  [key: string]: string | undefined;
}

@Component({
  selector: 'g2-timeline',
  exportAs: 'g2Timeline',
  templateUrl: './timeline.component.html',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class G2TimelineComponent implements OnInit, OnDestroy, OnChanges {
  @ViewChild('container', { static: false }) private node: ElementRef;
  private chart: Chart;

  // #region fields

  @Input() @InputNumber() delay = 0;
  @Input() title: string | TemplateRef<void>;
  @Input() @InputNumber() maxAxis = 2;
  @Input() data: G2TimelineData[] = [];
  @Input() titleMap: G2TimelineMap;
  @Input() colorMap: G2TimelineMap = { y1: '#5B8FF9', y2: '#5AD8A6', y3: '#5D7092', y4: '#F6BD16', y5: '#E86452' };
  @Input() mask: string = 'HH:mm';
  @Input() position: 'top' | 'right' | 'bottom' | 'left' = 'top';
  @Input() @InputNumber() height = 450;
  @Input() padding: number[] = [40, 8, 64, 40];
  @Input() @InputNumber() borderWidth = 2;
  @Input() @InputBoolean() slider = true;
  @Input() theme: string | Types.LooseObject;

  // #endregion

  constructor(private ngZone: NgZone, configSrv: AlainConfigService) {
    configSrv.attachKey(this, 'chart', 'theme');
  }

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => setTimeout(() => this.install(), this.delay));
  }

  private install() {
    const { node, height, padding, slider, maxAxis, theme, mask } = this;
    const chart = (this.chart = new Chart({
      container: node.nativeElement,
      autoFit: true,
      height,
      padding,
      theme,
    }));
    chart.axis('time', { title: null });
    chart.axis('y1', { title: null });
    for (let i = 2; i <= maxAxis; i++) {
      chart.axis(`y${i}`, false);
    }

    chart.line().position('time*y1');
    for (let i = 2; i <= maxAxis; i++) {
      chart.line().position(`time*y${i}`);
    }

    chart.tooltip({
      showCrosshairs: true,
      shared: true,
    });

    const sliderPadding = { ...[], ...padding };
    sliderPadding[0] = 0;
    if (slider) {
      chart.option('slider', {
        height: 26,
        start: 0,
        end: 1,
        trendCfg: {
          isArea: false,
        },
        minLimit: 2,
        formatter: (val: Date) => format(val, mask),
      });
    }

    this.attachChart();
  }

  private attachChart() {
    const { chart, height, padding, mask, titleMap, position, colorMap, borderWidth, maxAxis } = this;
    let data = [...this.data];
    if (!chart || !data || data.length <= 0) return;

    const arrAxis = [...Array(maxAxis)].map((_, index) => index + 1);

    chart.legend({
      position,
      custom: true,
      items: arrAxis.map(id => {
        const key = `y${id}`;
        return { name: titleMap[key], value: titleMap[key], marker: { style: { fill: colorMap[key] } } } as Types.LegendItem;
      }),
    });

    // border
    chart.geometries.forEach((v, idx: number) => {
      v.color((colorMap as NzSafeAny)[`y${idx + 1}`]).size(borderWidth);
    });
    chart.height = height;
    chart.padding = padding;

    // TODO: compatible
    if (data.find(w => !!w.x) != null) {
      deprecation10('g2-timeline', 'x', 'time');
      data.forEach(item => {
        item.time = new Date(item.x!);
      });
    }
    // 转换成日期类型
    data = data
      .map(item => {
        item.time = toDate(item.time!);
        item._time = +item.time;
        return item;
      })
      .sort((a, b) => a._time - b._time);

    const max = Math.max(...arrAxis.map(id => [...data].sort((a, b) => b[`y${id}`] - a[`y${id}`])[0][`y${id}`]));
    const scaleOptions: Record<string, Types.ScaleOption> = {};
    arrAxis.forEach(id => {
      const key = `y${id}`;
      scaleOptions[key] = {
        alias: titleMap[key],
        max,
        min: 0,
      };
    });
    chart.scale({
      time: {
        type: 'time',
        mask,
        range: [0, 1],
      },
      ...scaleOptions,
    });

    const initialRange = {
      start: data[0]._time,
      end: data[data.length - 1]._time,
    };
    const filterData = data.filter(val => val._time >= initialRange.start && val._time <= initialRange.end);
    chart.changeData(filterData);
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
