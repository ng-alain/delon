import {
  Component,
  Input,
  HostBinding,
  ViewChild,
  ElementRef,
  OnDestroy,
  OnChanges,
  SimpleChanges,
  NgZone,
  OnInit,
  TemplateRef,
  SimpleChange,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { toNumber } from '@delon/util';

@Component({
  selector: 'g2-timeline',
  template: `
  <ng-container *ngIf="_title; else _titleTpl"><h4>{{_title}}</h4></ng-container>
  <div #container></div>
  <div #slider></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false,
})
export class G2TimelineComponent implements OnDestroy, OnChanges, OnInit {
  // region: fields

  _title = '';
  _titleTpl: TemplateRef<any>;
  @Input()
  set title(value: string | TemplateRef<any>) {
    if (value instanceof TemplateRef) {
      this._title = null;
      this._titleTpl = value;
    } else this._title = value;
  }

  @Input() data: Array<{ x: Date; y1: number; y2: number; [key: string]: any }>;
  @Input() titleMap: { y1: string; y2: string };
  @Input()
  colorMap: { y1: string; y2: string } = { y1: '#1890FF', y2: '#2FC25B' };

  @Input()
  mask: string = 'HH:mm';
  @Input()
  position: 'top' | 'right' | 'bottom' | 'left' = 'top';
  @Input()
  tickCount: number = 8;
  @Input()
  start: number = 0;
  @Input()
  hasSlider: boolean = true;

  @Input()
  get height() {
    return this._height;
  }
  set height(value: any) {
    this._height = toNumber(value);
  }
  private _height = 400;

  @Input() padding: number[] = [60, 20, 40, 40];

  @Input()
  get borderWidth() {
    return this._borderWidth;
  }
  set borderWidth(value: any) {
    this._borderWidth = toNumber(value);
  }
  private _borderWidth = 2;

  // endregion

  @ViewChild('container') node: ElementRef;
  @ViewChild('slider') sliderNode: ElementRef;

  chart: any;
  initFlag = false;
  slider: any;

  constructor(private cd: ChangeDetectorRef) {
    cd.detach();
  }

  ngOnInit(): void {
    this.initFlag = true;
    this.install();
  }

  install() {
    if (!this.data || (this.data && this.data.length < 1)) return;

    // clean
    this.sliderNode.nativeElement.innerHTML = '';
    this.node.nativeElement.innerHTML = '';

    if (this.tickCount >= this.data.length)
      this.tickCount = this.data.length - 1;

    let end = this.start + this.tickCount;
    if (end >= this.data.length)
      end = this.data.length - 1;

    const ds = new DataSet({
      state: {
        start: this.data[this.start].x,
        end: this.data[end].x,
      },
    });
    const dv = ds.createView().source(this.data);
    dv.source(this.data).transform({
      type: 'filter',
      callback(obj) {
        const time = new Date(obj.x).getTime(); // !注意：时间格式，建议转换为时间戳进行比较
        return time >= ds.state.start && time <= ds.state.end;
      },
    });

    const chart = new G2.Chart({
      container: this.node.nativeElement,
      forceFit: true,
      height: +this.height,
      padding: this.padding,
    });
    chart.axis('x', { title: false });
    chart.axis('y1', {
      title: false,
    });
    chart.axis('y2', false);

    let max;
    if (this.data[0] && this.data[0].y1 && this.data[0].y2) {
      max = Math.max(
        this.data.sort((a, b) => b.y1 - a.y1)[0].y1,
        this.data.sort((a, b) => b.y2 - a.y2)[0].y2,
      );
    }
    chart.source(dv, {
      x: {
        type: 'timeCat',
        tickCount: this.tickCount,
        mask: this.mask,
        range: [0, 1],
      },
      y1: {
        alias: this.titleMap.y1,
        max,
        min: 0,
      },
      y2: {
        alias: this.titleMap.y2,
        max,
        min: 0,
      },
    });

    chart.legend({
      position: this.position,
      custom: true,
      clickable: false,
      items: [
        { value: this.titleMap.y1, fill: this.colorMap.y1 },
        { value: this.titleMap.y2, fill: this.colorMap.y2 },
      ],
    });

    chart
      .line()
      .position('x*y1')
      .color(this.colorMap.y1)
      .size(this.borderWidth);
    chart
      .line()
      .position('x*y2')
      .color(this.colorMap.y2)
      .size(this.borderWidth);
    chart.render();
    setTimeout(() => {
      chart.forceFit();
      chart.repaint();
    }, 60);

    if (this.hasSlider) {
      const sliderPadding = Object.assign([], this.padding);
      sliderPadding[0] = 0;
      const slider = new Slider({
        container: this.sliderNode.nativeElement,
        height: 26,
        padding: sliderPadding,
        scales: {
          x: {
            type: 'time',
            tickCount: 16,
            mask: this.mask,
          },
        },
        backgroundChart: {
          type: 'line',
        },
        start: ds.state.start,
        end: ds.state.end,
        xAxis: 'x',
        yAxis: 'y1',
        data: this.data,
        onChange({ startValue, endValue }) {
          ds.setState('start', startValue);
          ds.setState('end', endValue);
        },
      });
      slider.render();
      setTimeout(() => {
        slider.forceFit();
        slider.repaint();
      }, 60);
      this.slider = slider;
    }

    this.chart = chart;
  }

  uninstall() {
    if (this.chart) this.chart.destroy();
    if (this.slider) this.slider.destroy();
  }

  ngOnChanges(
    changes: { [P in keyof this]?: SimpleChange } & SimpleChanges,
  ): void {
    if (this.initFlag) this.install();
  }

  ngOnDestroy(): void {
    this.uninstall();
  }
}
