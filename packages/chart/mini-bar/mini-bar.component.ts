import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { Chart, Event } from '@antv/g2';
import { G2BaseComponent, genMiniTooltipOptions } from '@delon/chart/core';
import { InputNumber, NumberInput } from '@delon/util/decorator';

export interface G2MiniBarData {
  x: any;
  y: any;
  [key: string]: any;
}

export interface G2MiniBarClickItem {
  item: G2MiniBarData;
  ev: Event;
}

@Component({
  selector: 'g2-mini-bar',
  exportAs: 'g2MiniBar',
  template: ``,
  host: {
    '[style.height.px]': 'height',
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class G2MiniBarComponent extends G2BaseComponent {
  static ngAcceptInputType_height: NumberInput;
  static ngAcceptInputType_borderWidth: NumberInput;

  // #region fields

  @Input() color = '#1890FF';
  @Input() @InputNumber() height = 0;
  @Input() @InputNumber() borderWidth = 5;
  @Input() padding: number | number[] | 'auto' = [8, 8, 8, 8];
  @Input() data: G2MiniBarData[] = [];
  @Input() yTooltipSuffix = '';
  @Input() tooltipType: 'mini' | 'default' = 'default';
  @Output() clickItem = new EventEmitter<G2MiniBarClickItem>();

  // #endregion

  install(): void {
    const { el, height, padding, yTooltipSuffix, tooltipType, theme, color, borderWidth } = this;
    const chart: Chart = (this._chart = new (window as any).G2.Chart({
      container: el.nativeElement,
      autoFit: true,
      height,
      padding,
      theme,
    }));
    chart.scale({
      x: {
        type: 'cat',
      },
      y: {
        min: 0,
      },
    });
    chart.legend(false);
    chart.axis(false);
    chart.tooltip(genMiniTooltipOptions(tooltipType, { showCrosshairs: false }));
    chart
      .interval()
      .position('x*y')
      .color(color)
      .size(borderWidth)
      .tooltip('x*y', (x: any, y: any) => ({ name: x, value: y + yTooltipSuffix }));

    chart.on(`interval:click`, (ev: Event) => {
      this.ngZone.run(() => this.clickItem.emit({ item: ev.data?.data, ev }));
    });

    this.changeData();
    chart.render();
  }

  changeData(): void {
    const { _chart, data } = this;
    if (!_chart || !Array.isArray(data) || data.length <= 0) return;
    _chart.changeData(data);
  }
}
