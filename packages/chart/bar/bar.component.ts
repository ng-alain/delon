import {
  Component,
  Input,
  HostBinding,
  ViewChild,
  ElementRef,
  OnDestroy,
  OnChanges,
  NgZone,
  TemplateRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { toBoolean, toNumber } from '@delon/util';

declare var G2: any;

@Component({
  selector: 'g2-bar',
  templateUrl: './bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false,
})
export class G2BarComponent implements OnDestroy, OnChanges {
  private autoHideXLabels = false;
  private resize$: Subscription = null;
  private chart: any;

  // #region fields
  _title = '';
  _titleTpl: TemplateRef<any>;
  @Input()
  set title(value: string | TemplateRef<any>) {
    if (value instanceof TemplateRef) {
      this._title = null;
      this._titleTpl = value;
    } else {
      this._title = value;
    }
    this.cd.detectChanges();
  }

  @Input()
  color = 'rgba(24, 144, 255, 0.85)';

  @HostBinding('style.height.px')
  @Input()
  get height() {
    return this._height;
  }
  set height(value: any) {
    this._height = toNumber(value);
  }
  private _height = 0;

  @Input()
  padding: number[];
  @Input()
  data: Array<{ x: any; y: any; [key: string]: any }>;

  @Input()
  set autoLabel(value: any) {
    this._autoLabel = toBoolean(value);
  }
  private _autoLabel = true;

  // #endregion

  @ViewChild('container')
  private node: ElementRef;

  constructor(
    private el: ElementRef,
    private cd: ChangeDetectorRef,
    private zone: NgZone,
  ) {}

  private runInstall() {
    this.zone.runOutsideAngular(() => setTimeout(() => this.install()));
  }

  private install() {
    const canvasWidth = this.el.nativeElement.clientWidth;
    const minWidth = this.data.length * 30;

    if (canvasWidth <= minWidth) {
      if (!this.autoHideXLabels) {
        this.autoHideXLabels = true;
      }
    } else if (this.autoHideXLabels) {
      this.autoHideXLabels = false;
    }

    if (!this.data || (this.data && this.data.length < 1)) return;
    this.node.nativeElement.innerHTML = '';

    const chart = new G2.Chart({
      container: this.node.nativeElement,
      forceFit: true,
      height: this._title || this._titleTpl ? this.height - 41 : this.height,
      legend: null,
      padding: this.padding || 'auto',
    });

    chart.axis('x', !this.autoHideXLabels);
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
      .tooltip('x*y', (x, y) => {
        return {
          name: x,
          value: y,
        };
      });
    chart.render();
    this.chart = chart;
  }

  private installResizeEvent() {
    if (!this._autoLabel || this.resize$) return;

    this.resize$ = fromEvent(window, 'resize')
      .pipe(debounceTime(200))
      .subscribe(() => this.runInstall());
  }

  ngOnChanges(): void {
    this.installResizeEvent();
    this.runInstall();
  }

  ngOnDestroy(): void {
    if (this.resize$) this.resize$.unsubscribe();
    if (this.chart) {
      this.chart.destroy();
      this.chart = null;
    }
  }
}
