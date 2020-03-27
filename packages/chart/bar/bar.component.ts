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
import { Chart } from '@antv/g2';
import { InteractionType } from '@delon/chart/core/types';
import { InputBoolean, InputNumber } from '@delon/util';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';

const TITLE_HEIGHT = 41;

export interface G2BarData {
  x: any;
  y: any;
  color?: string;
  [key: string]: any;
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
  private resize$: Subscription;
  private chart: Chart;
  @ViewChild('container', { static: true }) private node: ElementRef;

  // #region fields

  @Input() @InputNumber() delay = 0;
  @Input() title: string | TemplateRef<void>;
  @Input() color = 'rgba(24, 144, 255, 0.85)';
  @Input() @InputNumber() height = 0;
  @Input() padding: number | number[] | 'auto' = 'auto';
  @Input() data: G2BarData[] = [];
  @Input() @InputBoolean() autoLabel = true;
  @Input() interaction: InteractionType = 'none';

  // #endregion

  constructor(private ngZone: NgZone) {}

  private getHeight() {
    return this.title ? this.height - TITLE_HEIGHT : this.height;
  }

  private install() {
    const { node, padding, interaction } = this;

    const container = node.nativeElement as HTMLElement;
    const chart = (this.chart = new Chart({
      container,
      autoFit: true,
      height: this.getHeight(),
      padding,
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
      .tooltip('x*y', (x: NzSafeAny, y: NzSafeAny) => ({ name: x, value: y }));

    this.attachChart();
  }

  private attachChart() {
    const { chart, padding, data } = this;
    if (!chart || !data || data.length <= 0) return;
    this.installResizeEvent();
    const height = this.getHeight();
    if (chart.height !== height) {
      chart.height = height;
    }
    chart.padding = padding;

    chart.data(data);
    chart.render();
  }

  private updatelabel() {
    const { node, data, chart } = this;
    const canvasWidth = node.nativeElement.clientWidth;
    const minWidth = data.length * 30;
    chart.axis('x', canvasWidth > minWidth).render();
  }

  private installResizeEvent() {
    if (!this.autoLabel || this.resize$) return;

    this.resize$ = fromEvent(window, 'resize')
      .pipe(
        filter(() => !!this.chart),
        debounceTime(200),
      )
      .subscribe(() => this.ngZone.runOutsideAngular(() => this.updatelabel()));
  }

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => setTimeout(() => this.install(), this.delay));
  }

  ngOnChanges(): void {
    this.ngZone.runOutsideAngular(() => this.attachChart());
  }

  ngOnDestroy(): void {
    if (this.resize$) {
      this.resize$.unsubscribe();
    }
    if (this.chart) {
      this.ngZone.runOutsideAngular(() => this.chart.destroy());
    }
  }
}
