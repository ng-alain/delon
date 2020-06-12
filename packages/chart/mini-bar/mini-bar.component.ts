import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Chart, Event, Types } from '@antv/g2';
import { AlainConfigService, InputNumber } from '@delon/util';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

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
export class G2MiniBarComponent implements OnInit, OnChanges, OnDestroy {
  private chart: Chart;

  // #region fields

  @Input() @InputNumber() delay = 0;
  @Input() color = '#1890FF';
  @Input() @InputNumber() height = 0;
  @Input() @InputNumber() borderWidth = 5;
  @Input() padding: number | number[] | 'auto' = [8, 8, 8, 8];
  @Input() data: G2MiniBarData[] = [];
  @Input() yTooltipSuffix = '';
  @Input() tooltipType: 'mini' | 'default' = 'default';
  @Input() theme: string | Types.LooseObject;
  @Output() clickItem = new EventEmitter<G2MiniBarClickItem>();

  // #endregion

  constructor(private el: ElementRef, private ngZone: NgZone, configSrv: AlainConfigService) {
    configSrv.attachKey(this, 'chart', 'theme');
  }

  private install() {
    const { el, height, padding, yTooltipSuffix, tooltipType, theme } = this;
    const chart = (this.chart = new Chart({
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
    const tooltipOption: Types.TooltipOption = {
      showTitle: false,
      showMarkers: true,
      showCrosshairs: false,
      enterable: true,
      domStyles: {
        'g2-tooltip': { padding: '0px' },
        'g2-tooltip-title': { display: 'none' },
        'g2-tooltip-list-item': { margin: '4px' },
      },
    };
    if (tooltipType === 'mini') {
      tooltipOption.position = 'top';
      tooltipOption.domStyles!['g2-tooltip'] = { padding: '0px', backgroundColor: 'transparent', boxShadow: 'none' };
      tooltipOption.itemTpl = `<li>{value}</li>`;
      tooltipOption.offset = 0;
    }
    chart.tooltip(tooltipOption);
    chart
      .interval()
      .position('x*y')
      .tooltip('x*y', (x: NzSafeAny, y: NzSafeAny) => ({ name: x, value: y + yTooltipSuffix }));

    chart.on(`interval:click`, (ev: Event) => {
      this.ngZone.run(() => this.clickItem.emit({ item: ev.data?.data, ev }));
    });

    chart.render();

    this.attachChart();
  }

  private attachChart() {
    const { chart, height, padding, data, color, borderWidth } = this;
    if (!chart || !data || data.length <= 0) return;
    chart.geometries[0].size(borderWidth).color(color);
    chart.height = height;
    chart.padding = padding;
    chart.changeData(data);
  }

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => setTimeout(() => this.install(), this.delay));
  }

  ngOnChanges(): void {
    this.ngZone.runOutsideAngular(() => this.attachChart());
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.ngZone.runOutsideAngular(() => this.chart.destroy());
    }
  }
}
