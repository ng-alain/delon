import { ChangeDetectionStrategy, Component, Input, SimpleChanges, ViewEncapsulation } from '@angular/core';

import type { Chart } from '@antv/g2';

import { G2BaseComponent } from '@delon/chart/core';
import { BooleanInput, InputBoolean, InputNumber, NumberInput } from '@delon/util/decorator';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'g2-single-bar',
  exportAs: 'g2SingleBar',
  template: ``,
  host: {
    '[style.height.px]': 'height'
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class G2SingleBarComponent extends G2BaseComponent {
  static ngAcceptInputType_height: NumberInput;
  static ngAcceptInputType_barSize: NumberInput;
  static ngAcceptInputType_min: NumberInput;
  static ngAcceptInputType_max: NumberInput;
  static ngAcceptInputType_value: NumberInput;
  static ngAcceptInputType_line: BooleanInput;

  // #region fields

  @Input() plusColor = '#40a9ff';
  @Input() minusColor = '#ff4d4f';
  @Input() @InputNumber() height = 60;
  @Input() @InputNumber() barSize = 30;
  @Input() @InputNumber() min = 0;
  @Input() @InputNumber() max = 100;
  @Input() @InputNumber() value = 0;
  @Input() @InputBoolean() line = false;
  @Input() format: (value: number, item: NzSafeAny, index: number) => string;
  @Input() padding: number | number[] | 'auto' = 0;
  @Input() textStyle: { [key: string]: NzSafeAny } = { fontSize: 12, color: '#595959' };

  // #endregion

  install(): void {
    const { el, height, padding, textStyle, line, format, theme, min, max, plusColor, minusColor, barSize } = this;
    const chart: Chart = (this._chart = new (window as NzSafeAny).G2.Chart({
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
