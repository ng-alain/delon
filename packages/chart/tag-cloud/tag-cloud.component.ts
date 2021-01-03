import { Platform } from '@angular/cdk/platform';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Chart, Event, registerShape, Types, Util } from '@antv/g2';
import { AlainConfigService, InputNumber, NumberInput } from '@delon/util';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import tagCloud from './tag-cloud.data';

export interface G2TagCloudData {
  value?: number;
  name?: string;
  [key: string]: any;
}

export interface G2TagCloudClickItem {
  item: G2TagCloudData;
  ev: Event;
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
  static ngAcceptInputType_delay: NumberInput;
  static ngAcceptInputType_height: NumberInput;
  static ngAcceptInputType_width: NumberInput;

  private resize$: Subscription;
  private _chart: Chart;
  private _h: number = 0;
  private _w: number = 0;

  get chart(): Chart {
    return this._chart;
  }

  // #region fields

  @Input() @InputNumber() delay = 100;
  @Input() @InputNumber() width = 0;
  @Input() @InputNumber() height = 200;
  @Input() padding: number | number[] | 'auto' = 0;
  @Input() data: G2TagCloudData[] = [];
  @Input() theme: string | Types.LooseObject;
  @Output() clickItem = new EventEmitter<G2TagCloudClickItem>();

  // #endregion

  constructor(private el: ElementRef<HTMLDivElement>, private ngZone: NgZone, configSrv: AlainConfigService, private platform: Platform) {
    configSrv.attachKey(this, 'chart', 'theme');
  }

  private fixWH(): void {
    const { height, width, el } = this;
    this._h = height <= 0 ? el.nativeElement.clientHeight : height;
    this._w = width <= 0 ? el.nativeElement.clientWidth : width;
  }

  private initTagCloud(): void {
    registerShape('point', 'cloud', {
      // tslint:disable-next-line: typedef
      draw(cfg, container) {
        const data = cfg.data as NzSafeAny;
        const textShape = container.addShape({
          type: 'text',
          name: 'tag-cloud-text',
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
          } as NzSafeAny,
        });
        if (data.rotate) {
          Util.rotate(textShape, (data.rotate * Math.PI) / 180);
        }
        return textShape;
      },
    });
  }

  private install(): void {
    const { el, padding, theme } = this;

    this.fixWH();
    const chart = (this._chart = new Chart({
      container: el.nativeElement,
      autoFit: false,
      height: this._h,
      width: this._w,
      padding,
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

    chart.on('tag-cloud-text:click', (ev: Event) => {
      this.ngZone.run(() => this.clickItem.emit({ item: ev.data?.data, ev }));
    });

    this.attachChart();
  }

  private transform(): any {
    const statisticData = this.data.map(i => i.value!);
    const min = Math.min(...statisticData);
    const max = Math.max(...statisticData);
    const options = {
      fields: ['name', 'value'],
      // imageMask,
      font: 'Verdana',
      padding: 1,
      size: [this._w, this._h], // 宽高设置最好根据 imageMask 做调整
      timeInterval: 5000, // max execute time
      rotate: () => {
        let random = ~~(Math.random() * 4) % 4;
        if (random === 2) {
          random = 0;
        }
        return random * 90; // 0, 90, 270
      },
      fontSize: (d: G2TagCloudData) => {
        return ((d.value! - min) / (max - min)) * (32 - 8) + 8;
      },
    };
    const layout = tagCloud();
    ['font', 'fontSize', 'fontWeight', 'padding', 'rotate', 'size', 'spiral', 'timeInterval'].forEach(key => {
      // @ts-ignore
      if (options[key]) {
        // @ts-ignore
        layout[key](options[key]);
      }
    });
    const words = this.data.map(i => ({ ...i, text: i.name }));
    layout.words(words);
    const result = layout.start();
    const tags: any[] = result._tags;
    const bounds = result._bounds || [
      { x: 0, y: 0 },
      { x: options.size[0], y: options.size[1] },
    ];
    tags.forEach(tag => {
      tag.x += options.size[0] / 2;
      tag.y += options.size[1] / 2;
    });
    const [w, h] = options.size;
    const hasImage = result.hasImage;
    tags.push({
      text: '',
      value: 0,
      x: hasImage ? 0 : bounds[0].x,
      y: hasImage ? 0 : bounds[0].y,
      opacity: 0,
    });
    tags.push({
      text: '',
      value: 0,
      x: hasImage ? w : bounds[1].x,
      y: hasImage ? h : bounds[1].y,
      opacity: 0,
    });
    return tags;
  }

  private attachChart(): void {
    const { _chart, padding, data } = this;
    if (!_chart || !data || data.length <= 0) return;

    this.fixWH();
    _chart.changeSize(this._w, this._h);
    _chart.padding = padding;

    const rows = this.transform();
    _chart.data(rows);
    _chart.render();
  }

  private _attachChart(): void {
    this.ngZone.runOutsideAngular(() => this.attachChart());
  }

  private installResizeEvent(): void {
    this.resize$ = fromEvent(window, 'resize')
      .pipe(
        filter(() => !!this._chart),
        debounceTime(200),
      )
      .subscribe(() => this._attachChart());
  }

  ngOnInit(): void {
    if (!this.platform.isBrowser) {
      return;
    }
    this.initTagCloud();
    this.installResizeEvent();
    this.ngZone.runOutsideAngular(() => setTimeout(() => this.install(), this.delay));
  }

  ngOnChanges(): void {
    this._attachChart();
  }

  ngOnDestroy(): void {
    if (this.resize$) {
      this.resize$.unsubscribe();
    }
    if (this._chart) {
      this.ngZone.runOutsideAngular(() => this._chart.destroy());
    }
  }
}
