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
import DataSet from '@antv/data-set';
import { Chart } from '@antv/g2';
import { InputBoolean, InputNumber } from '@delon/util';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

export class G2TimelineData {
  /** 非 `Date` 格式，自动使用 `new Date` 转换，因此，支持时间格式字符串、数字型时间戳 */
  x: Date | string | number;
  /** 指标1数据 */
  y1: number;
  /** 指标2数据 */
  y2: number;
  [key: string]: any;
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
  @Input() data: G2TimelineData[] = [];
  @Input() titleMap: { y1: string; y2: string };
  @Input() colorMap: { y1: string; y2: string } = { y1: '#1890FF', y2: '#2FC25B' };
  @Input() mask: string = 'HH:mm';
  @Input() position: 'top' | 'right' | 'bottom' | 'left' = 'top';
  @Input() @InputNumber() height = 450;
  @Input() padding: number[] = [60, 20, 64, 40];
  @Input() @InputNumber() borderWidth = 2;
  @Input() @InputBoolean() slider = true;

  // #endregion

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => setTimeout(() => this.install(), this.delay));
  }

  private install() {
    const { node, height, padding, mask, slider } = this;
    const chart = (this.chart = new Chart({
      container: node.nativeElement,
      autoFit: true,
      height,
      padding,
    }));
    chart.axis('x', { title: null });
    chart.axis('y1', { title: null });
    chart.axis('y2', false);

    chart.line().position('x*y1');
    chart.line().position('x*y2');

    const sliderPadding = { ...[], ...padding };
    sliderPadding[0] = 0;
    if (slider) {
      chart.option('slider', {
        height: 26,
        start: 0.1,
        end: 0.8,
        trendCfg: {
          isArea: false,
        },
        mask,
      });
    }

    this.attachChart();
  }

  private attachChart() {
    const { chart, height, padding, data, mask, titleMap, position, colorMap, borderWidth } = this;
    if (!chart || !data || data.length <= 0) return;

    chart.legend({
      position,
      custom: true,
      // clickable: false,
      items: [
        { name: titleMap.y1, value: titleMap.y1, marker: { style: { fill: colorMap.y1 } } },
        { name: titleMap.y1, value: titleMap.y2, marker: { style: { fill: colorMap.y2 } } },
      ],
    });

    // border
    chart.geometries.forEach((v, idx: number) => {
      v.color((colorMap as NzSafeAny)[`y${idx + 1}`]).size(borderWidth);
    });
    chart.height = height;
    chart.padding = padding;

    data
      .filter(v => !(v.x instanceof Number))
      .forEach(v => {
        v.x = +new Date(v.x);
      });
    data.sort((a, b) => +a.x - +b.x);
    const max = Math.max([...data].sort((a, b) => b.y1 - a.y1)[0].y1, [...data].sort((a, b) => b.y2 - a.y2)[0].y2);
    const ds = new DataSet({
      state: {
        start: data[0].x,
        end: data[data.length - 1].x,
      },
    });
    const dv = ds.createView('origin').source(data);
    dv.transform({
      type: 'filter',
      callback: (val: G2TimelineData) => {
        const time = +val.x;
        return time >= ds.state.start && time <= ds.state.end;
      },
    });
    chart.scale({
      x: {
        type: 'timeCat',
        mask,
        range: [0, 1],
      },
      y1: {
        alias: titleMap.y1,
        max,
        min: 0,
      },
      y2: {
        alias: titleMap.y2,
        max,
        min: 0,
      },
    });
    chart.changeData(dv.rows);
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
