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
  ViewChild,
} from '@angular/core';
import { toBoolean, toNumber } from '@delon/util';

declare var G2: any;

@Component({
  selector: 'g2-mini-area',
  template: `<div #container></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class G2MiniAreaComponent implements OnDestroy, OnChanges {
  // #region fields

  @Input()
  color = 'rgba(24, 144, 255, 0.2)';
  @Input()
  borderColor = '#1890FF';
  @Input()
  set borderWidth(value: any) {
    this._borderWidth = toNumber(value);
  }
  private _borderWidth = 2;

  @HostBinding('style.height.px')
  @Input()
  get height() {
    return this._height;
  }
  set height(value: any) {
    this._height = toNumber(value);
  }
  private _height;

  @Input()
  set fit(value: any) {
    this._fit = toBoolean(value);
  }
  private _fit = true;

  @Input()
  set line(value: any) {
    this._line = toBoolean(value);
  }
  private _line = false;

  @Input()
  get animate() {
    return this._animate;
  }
  set animate(value: any) {
    this._animate = toBoolean(value);
  }
  private _animate = true;

  @Input()
  xAxis: any;
  @Input()
  yAxis: any;
  @Input()
  padding: number[] = [8, 8, 8, 8];
  @Input()
  data: Array<{ x: number; y: number; [key: string]: any }>;
  @Input()
  yTooltipSuffix = '';

  // #endregion

  @ViewChild('container')
  private node: ElementRef;

  private chart: any;

  constructor(private zone: NgZone) { }

  private install() {
    if (!this.data || (this.data && this.data.length < 1)) return;

    this.node.nativeElement.innerHTML = '';

    const chart = new G2.Chart({
      container: this.node.nativeElement,
      forceFit: this._fit,
      height: +this.height,
      animate: this.animate,
      padding: this.padding,
      legend: null,
    });

    if (!this.xAxis && !this.yAxis) {
      chart.axis(false);
    }

    if (this.xAxis) {
      chart.axis('x', this.xAxis);
    } else {
      chart.axis('x', false);
    }

    if (this.yAxis) {
      chart.axis('y', this.yAxis);
    } else {
      chart.axis('y', false);
    }

    const dataConfig = {
      x: {
        type: 'cat',
        range: [0, 1],
        xAxis: this.xAxis,
      },
      y: {
        min: 0,
        yAxis: this.yAxis,
      },
    };

    chart.tooltip({
      'showTitle': false,
      'hideMarkders': false,
      'g2-tooltip': { padding: 4 },
      'g2-tooltip-list-item': { margin: `0px 4px` },
    });

    const view = chart.view();
    view.source(this.data, dataConfig);

    view
      .area()
      .position('x*y')
      .color(this.color)
      .tooltip('x*y', (x, y) => {
        return {
          name: x,
          value: y + this.yTooltipSuffix,
        };
      })
      .shape('smooth')
      .style({ fillOpacity: 1 });

    if (this._line) {
      const view2 = chart.view();
      view2.source(this.data, dataConfig);
      view2
        .line()
        .position('x*y')
        .color(this.borderColor)
        .size(this._borderWidth)
        .shape('smooth');
      view2.tooltip(false);
    }
    chart.render();
    this.chart = chart;
  }

  ngOnChanges(): void {
    this.zone.runOutsideAngular(() => setTimeout(() => this.install()));
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
      this.chart = null;
    }
  }
}
