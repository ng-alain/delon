// tslint:disable:no-any
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Input,
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
  private resize$: Subscription = null;
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

  private install() {
    const container = this.node.nativeElement as HTMLElement;
    const chart = this.chart = new G2.Chart({
      container,
      forceFit: true,
      legend: null,
      height: this.getHeight(),
      padding: this.padding,
    });

    this.updatelabel();
    chart.axis('y', {
      title: false,
      line: false,
      tickLine: false,
    });

    chart.source(this.data, {
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
      .color(this.color)
      .tooltip('x*y', (x, y) => ({
        name: x,
        value: y,
      }));
    chart.render();
  }

  private getHeight() {
    return this.title ? this.height - TITLE_HEIGHT : this.height;
  }

  private attachChart() {
    const { chart, padding, data } = this;
    if (!chart) return;
    this.installResizeEvent();
    chart
      .changeHeight(this.getHeight())
      .changeData(data);
    // color
    chart.get('geoms')[0].color(this.color);

    chart.set('padding', padding);
    chart.repaint();
  }

  private updatelabel() {
    const canvasWidth = this.node.nativeElement.clientWidth;
    const minWidth = this.data.length * 30;
    this.chart.axis('x', canvasWidth > minWidth);
  }

  private installResizeEvent() {
    if (!this.autoLabel || this.resize$) return;

    this.resize$ = fromEvent(window, 'resize')
      .pipe(
        filter(() => this.chart),
        debounceTime(200),
      )
      .subscribe(() => this.updatelabel());
  }

  ngOnInit() {
    setTimeout(() => this.install(), this.delay);
  }

  ngOnChanges(): void {
    this.attachChart();
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
