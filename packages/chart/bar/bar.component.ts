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
  private inited = false;
  // tslint:disable-next-line:no-any
  private chart: any;

  // #region fields
  @Input() title: string | TemplateRef<void>;
  @Input() color = 'rgba(24, 144, 255, 0.85)';
  @HostBinding('style.height.px') @Input() @InputNumber() height = 0;
  @Input() padding: number[];
  @Input() data: G2BarData[];
  @Input() @InputBoolean() autoLabel = true;
  // #endregion

  @ViewChild('container') private node: ElementRef;

  private install() {
    this.uninstall();
    const container = this.node.nativeElement as HTMLElement;
    container.innerHTML = '';

    if (!this.data || (this.data && this.data.length < 1)) return;

    const chart = this.chart = new G2.Chart({
      container,
      forceFit: true,
      height: this.title ? this.height - TITLE_HEIGHT : this.height,
      legend: null,
      padding: this.padding || 'auto',
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

  private uninstall() {
    if (this.chart) {
      this.chart.destroy();
    }
    this.chart = null;
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
    this.installResizeEvent();
    this.install();
    this.inited = true;
  }

  ngOnChanges(): void {
    if (this.inited) {
      this.installResizeEvent();
      this.install();
    }
  }

  ngOnDestroy(): void {
    if (this.resize$) this.resize$.unsubscribe();
    this.uninstall();
  }
}
