import {
  ChangeDetectionStrategy,
  Component,
  Input,
  SimpleChanges,
  ViewEncapsulation,
  booleanAttribute,
  numberAttribute
} from '@angular/core';

import type { Chart } from '@antv/g2';

import { G2BaseComponent } from '@delon/chart/core';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'g2-single-bar',
  exportAs: 'g2SingleBar',
  template: ``,
  host: {
    '[style.height.px]': 'height'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class G2SingleBarComponent extends G2BaseComponent {
  // #region fields

  @Input() plusColor = '#40a9ff';
  @Input() minusColor = '#ff4d4f';
  @Input({ transform: numberAttribute }) height = 60;
  @Input({ transform: numberAttribute }) barSize = 30;
  @Input({ transform: numberAttribute }) min = 0;
  @Input({ transform: numberAttribute }) max = 100;
  @Input({ transform: numberAttribute }) value = 0;
  @Input({ transform: booleanAttribute }) line = false;
  @Input() format?: (value: number, item: NzSafeAny, index: number) => string;
  @Input() padding: number | number[] | 'auto' = 0;
  @Input() textStyle: Record<string, NzSafeAny> = { fontSize: 12, color: '#595959' };

  // #endregion

  install(): void {
    const { el, height, padding, textStyle, line, format, theme, min, max, plusColor, minusColor, barSize } = this;
    const chart: Chart = (this._chart = new this.winG2.Chart({
      container: el.nativeElement,
      autoFit: true,
      height,
      padding,
      theme
    }));
    chart.legend(false);
    chart.axis(false);
    chart.scale({ value: { max, min } });
    chart.tooltip(false);
    chart.coordinate().transpose();
    chart
      .interval()
      .position('1*value')
      .color('value', (val: number) => (val > 0 ? plusColor : minusColor))
      .size(barSize)
      .label('value', () => ({
        formatter: format,
        style: {
          ...textStyle
        }
      }));

    if (line) {
      chart.annotation().line({
        start: ['50%', '0%'],
        end: ['50%', '100%'],
        style: {
          stroke: '#e8e8e8',
          lineDash: [0, 0]
        }
      });
    }

    this.ready.next(chart);

    this.changeData();

    chart.render();
  }

  onlyChangeData = (changes: SimpleChanges): boolean => {
    return Object.keys(changes).length === 1 && !!changes.value;
  };

  changeData(): void {
    const { _chart, value } = this;
    if (!_chart) return;
    _chart.changeData([{ value }]);
  }
}
