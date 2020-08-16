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
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Chart, Event, Types } from '@antv/g2';
import { G2InteractionType } from '@delon/chart/core';
import { AlainConfigService, BooleanInput, InputBoolean, InputNumber, NumberInput } from '@delon/util';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';

const TITLE_HEIGHT = 41;

export interface G2BarData {
  x: NzSafeAny;
  y: NzSafeAny;
  color?: string;
  [key: string]: NzSafeAny;
}

export interface G2BarClickItem {
  item: G2BarData;
  ev: Event;
}

@Component({
  selector: 'g2-bar',
  exportAs: 'g2Bar',
  templateUrl: './bar.component.html',
  host: {
    '[style.height.px]': 'height',
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class G2BarComponent implements OnInit, OnChanges, OnDestroy {
  static ngAcceptInputType_delay: NumberInput;
  static ngAcceptInputType_height: NumberInput;
  static ngAcceptInputType_autoLabel: BooleanInput;

  private resize$: Subscription;
  private _chart: Chart;
  @ViewChild('container', { static: true }) private node: ElementRef;

  get chart(): Chart {
    return this._chart;
  }

  // #region fields

  @Input() @InputNumber() delay = 0;
  @Input() title: string | TemplateRef<void>;
  @Input() color = 'rgba(24, 144, 255, 0.85)';
  @Input() @InputNumber() height = 0;
  @Input() padding: number | number[] | 'auto' = 'auto';
  @Input() data: G2BarData[] = [];
  @Input() @InputBoolean() autoLabel = true;
  @Input() interaction: G2InteractionType = 'none';
  @Input() theme: string | Types.LooseObject;
  @Output() clickItem = new EventEmitter<G2BarClickItem>();

  // #endregion

  constructor(private ngZone: NgZone, configSrv: AlainConfigService, private platform: Platform) {
    configSrv.attachKey(this, 'chart', 'theme');
  }

  private getHeight(): number {
    return this.title ? this.height - TITLE_HEIGHT : this.height;
  }

  private install(): void {
    const { node, padding, interaction, theme } = this;

    const container = node.nativeElement as HTMLElement;
    const chart = (this._chart = new Chart({
      container,
      autoFit: true,
      height: this.getHeight(),
      padding,
      theme,
    }));
    this.updatelabel();
    chart.axis('y', {
      title: null,
      line: null,
      tickLine: null,
    });
    chart.scale({
      x: {
        type: 'cat',
      },
      y: {
        min: 0,
      },
    });
    chart.tooltip({
      showTitle: false,
    });
    if (interaction !== 'none') {
      chart.interaction(interaction);
    }
    chart.legend(false);
    chart
      .interval()
      .position('x*y')
      .color('x*y', (x, y) => {
        const colorItem = this.data.find(w => w.x === x && w.y === y);
        return colorItem && colorItem.color ? colorItem.color : this.color;
      })
      .tooltip('x*y', (x, y) => ({ name: x, value: y }));

    chart.on(`interval:click`, (ev: Event) => {
      this.ngZone.run(() => this.clickItem.emit({ item: ev.data?.data, ev }));
    });

    this.attachChart();
  }

  private attachChart(): void {
    const { _chart, padding, data } = this;
    if (!_chart || !data || data.length <= 0) return;
    this.installResizeEvent();
    const height = this.getHeight();
    if (_chart.height !== height) {
      _chart.height = height;
    }
    _chart.padding = padding;

    _chart.data(data);
    _chart.render();
  }

  private updatelabel(): void {
    const { node, data, _chart } = this;
    const canvasWidth = node.nativeElement.clientWidth;
    const minWidth = data.length * 30;
    _chart.axis('x', canvasWidth > minWidth).render();
  }

  private installResizeEvent(): void {
    if (!this.autoLabel || this.resize$) return;

    this.resize$ = fromEvent(window, 'resize')
      .pipe(
        filter(() => !!this._chart),
        debounceTime(200),
      )
      .subscribe(() => this.ngZone.runOutsideAngular(() => this.updatelabel()));
  }

  ngOnInit(): void {
    if (!this.platform.isBrowser) {
      return;
    }
    this.ngZone.runOutsideAngular(() => setTimeout(() => this.install(), this.delay));
  }

  ngOnChanges(): void {
    this.ngZone.runOutsideAngular(() => this.attachChart());
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
