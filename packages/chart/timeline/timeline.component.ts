// tslint:disable:no-any
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { InputBoolean, InputNumber } from '@delon/util';

declare var G2: any;
declare var DataSet: any;
declare var Slider: any;

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
  templateUrl: './timeline.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class G2TimelineComponent implements OnInit, OnDestroy, OnChanges {

  @ViewChild('container') private node: ElementRef;
  @ViewChild('sliderContainer') private sliderNode: ElementRef;
  private chart: any;
  private _slider: any;

  // #region fields

  @Input() @InputNumber() delay = 0;
  @Input() title: string | TemplateRef<void>;
  @Input() data: G2TimelineData[] = [];
  @Input() titleMap: { y1: string; y2: string };
  @Input() colorMap: { y1: string; y2: string } = { y1: '#1890FF', y2: '#2FC25B' };
  @Input() mask: string = 'HH:mm';
  @Input() position: 'top' | 'right' | 'bottom' | 'left' = 'top';
  @Input() @InputNumber() height = 400;
  @Input() padding: number[] = [60, 20, 40, 40];
  @Input() @InputNumber() borderWidth = 2;
  @Input() @InputNumber() tickCount = 8;
  @Input() @InputBoolean() slider = true;

  // #endregion

  ngOnInit(): void {
    setTimeout(() => this.install(), this.delay);
  }

  private install() {
    const { node, sliderNode, height, padding, mask, tickCount, slider } = this;
    const chart = this.chart = new G2.Chart({
      container: node.nativeElement,
      forceFit: true,
      height,
      padding,
    });
    chart.axis('x', { title: false });
    chart.axis('y1', { title: false });
    chart.axis('y2', false);

    chart.line().position('x*y1');
    chart.line().position('x*y2');

    chart.render();

    const sliderPadding = { ...[], ...padding };
    sliderPadding[0] = 0;
    if (slider) {
      const _slider = this._slider = new Slider({
        container: sliderNode.nativeElement,
        width: 'auto',
        height: 26,
        padding: sliderPadding,
        scales: {
          x: {
            type: 'time',
            tickCount,
            mask,
          },
        },
        backgroundChart: {
          type: 'line',
        },
        xAxis: 'x',
        yAxis: 'y1',
        data: [],
      });

      _slider.render();
    }

    this.attachChart();
  }

  private attachChart() {
    const { chart, _slider, slider, height, padding, data, mask, titleMap, position, colorMap, borderWidth, tickCount } = this;
    if (!chart) return;

    chart.legend({
      position,
      custom: true,
      clickable: false,
      items: [
        { value: titleMap.y1, fill: colorMap.y1 },
        { value: titleMap.y2, fill: colorMap.y2 },
      ],
    });

    // border
    chart.get('geoms').forEach((v, idx) => {
      v.color(colorMap[`y${idx + 1}`]).size(borderWidth);
    });

    data.filter(v => !(v.x instanceof Number)).forEach(v => {
      v.x = +new Date(v.x);
    });
    data.sort((a, b) => +a.x - +b.x);

    chart.set('height', height);
    chart.set('padding', padding);

    const begin = Math.ceil(data.length > tickCount ? (data.length - tickCount) / 2 : 0);

    const ds = new DataSet({
      state: {
        start: data[begin - 1].x,
        end: data[begin - 1 + tickCount].x,
      },
    });
    const dv = ds.createView().source(data);
    dv.source(data).transform({
      type: 'filter',
      callback: (val: G2TimelineData) => {
        const time = +val.x; // !注意：时间格式，建议转换为时间戳进行比较
        return time >= ds.state.start && time <= ds.state.end;
      },
    });
    let max;
    if (data[0] && data[0].y1 && data[0].y2) {
      max = Math.max(
        data.sort((a, b) => b.y1 - a.y1)[0].y1,
        data.sort((a, b) => b.y2 - a.y2)[0].y2,
      );
    }
    chart.source(dv, {
      x: {
        type: 'timeCat',
        tickCount,
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
    chart.repaint();

    if (slider) {
      _slider.start = ds.state.start;
      _slider.end = ds.state.end;
      _slider.onChange = ({ startValue, endValue }) => {
        // TODO: https://github.com/antvis/g2-plugin-slider/pull/19
        _slider.start = startValue;
        _slider.end = endValue;
        ds.setState('start', startValue);
        ds.setState('end', endValue);
      };
      _slider.changeData(data);
    }
  }

  ngOnChanges(): void {
    this.attachChart();
  }

  ngOnDestroy(): void {
    if (this.chart) this.chart.destroy();
    if (this._slider) this._slider.destroy();
  }
}
