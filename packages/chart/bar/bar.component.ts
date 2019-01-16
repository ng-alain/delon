// tslint:disable:no-any
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { InputBoolean, InputNumber } from '@delon/util';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';

declare var G2: any;
const TITLE_HEIGHT = 41;

export interface G2BarData {
  x: any;
  y: any;
  [key: string]: any;
}

@Component({
  selector: 'g2-bar',
  templateUrl: './bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class G2BarComponent implements OnInit, OnChanges, OnDestroy {
  private resize$: Subscription;
  // tslint:disable-next-line:no-any
  private chart: any;
  @ViewChild('container') private node: ElementRef;

  // #region fields

  @Input() @InputNumber() delay = 0;
  @Input() title: string | TemplateRef<void>;
  @Input() color = 'rgba(24, 144, 255, 0.85)';
  @HostBinding('style.height.px') @Input() @InputNumber() height = 0;
  @Input() padding: Array<number | string> | string = 'auto';
  @Input() data: G2BarData[] = [];
  @Input() @InputBoolean() autoLabel = true;

  // #endregion

  constructor(private ngZone: NgZone) {}

  private getHeight() {
    return this.title ? this.height - TITLE_HEIGHT : this.height;
  }

  private install() {
    const { node, padding } = this;

    const container = node.nativeElement as HTMLElement;
    const chart = this.chart = new G2.Chart({
      container,
      forceFit: true,
      legend: null,
      height: this.getHeight(),
      padding,
    });
    this.updatelabel();
    chart.axis('y', {
      title: false,
      line: false,
      tickLine: false,
    });
    chart.source([], {
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
    chart
      .interval()
      .position('x*y')
      .tooltip('x*y', (x, y) => ({ name: x, value: y }));

    chart.render();

    this.attachChart();
  }

  private attachChart() {
    const { chart, padding, data, color } = this;
    if (!chart || !data || data.length <= 0) return ;
    this.installResizeEvent();
    const height = this.getHeight();
    if (chart.get('height') !== height) {
      chart.changeHeight(height);
    }
    // color
    chart.get('geoms')[0].color(color);
    chart.set('padding', padding);

    chart.changeData(data);
  }

  private updatelabel() {
    const { node, data, chart } = this;
    const canvasWidth = node.nativeElement.clientWidth;
    const minWidth = data.length * 30;
    chart.axis('x', canvasWidth > minWidth).repaint();
  }

  private installResizeEvent() {
    if (!this.autoLabel || this.resize$) return;

    this.resize$ = fromEvent(window, 'resize')
      .pipe(
        filter(() => this.chart),
        debounceTime(200),
      )
      .subscribe(() =>  this.ngZone.runOutsideAngular(() => this.updatelabel()));
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
      this.chart.destroy();
    }
  }
}
