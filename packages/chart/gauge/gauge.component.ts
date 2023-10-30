import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

import type { Chart } from '@antv/g2';

import { G2BaseComponent } from '@delon/chart/core';
import { InputNumber, NumberInput } from '@delon/util/decorator';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'g2-gauge',
  exportAs: 'g2Gauge',
  template: `<nz-skeleton *ngIf="!loaded" />`,
  host: {
    '[class.g2-gauge]': 'true'
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class G2GaugeComponent extends G2BaseComponent {
  static ngAcceptInputType_height: NumberInput;
  static ngAcceptInputType_percent: NumberInput;

  // #region fields

  @Input() title?: string;
  @Input() @InputNumber() height?: number;
  @Input() color = '#2f9cff';
  @Input() bgColor?: string; // = '#f0f2f5';
  @Input() format?: (text: string, item: NzSafeAny, index: number) => string;
  @Input() @InputNumber() percent?: number;
  @Input() padding: number | number[] | 'auto' = [10, 10, 30, 10];

  // #endregion

  onlyChangeData = (): boolean => {
    return true;
  };

  install(): void {
    const { el, padding, theme, percent } = this;

    const container = el.nativeElement as HTMLElement;
    const chart: Chart = (this._chart = new this.winG2.Chart({
      container,
      autoFit: true,
      padding,
      theme
    }));

    this.mark = chart.gauge();
    this.mark
      .data({
        value: {
          target: percent,
          total: 100
          // name: 'score',
        }
      })
      .animate('enter', false)
      .animate('update', false)
      .animate('exit', false)
      .legend(false);

    chart.render();
  }

  changeData(): void {
    this.mark?.changeData({
      value: {
        target: this.percent,
        total: 100
        // name: 'score',
      }
    });
  }
}
