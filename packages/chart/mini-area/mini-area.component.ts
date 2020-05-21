import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { Chart, Types } from '@antv/g2';
import { AlainConfigService, InputBoolean, InputNumber } from '@delon/util';

export interface G2MiniAreaData {
  x: any;
  y: any;
  [key: string]: any;
}

@Component({
  selector: 'g2-mini-area',
  exportAs: 'g2MiniArea',
  template: ``,
  host: {
    '[style.height.px]': 'height',
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class G2MiniAreaComponent implements OnInit, OnChanges, OnDestroy {
  private chart: Chart;

  // #region fields

  @Input() @InputNumber() delay = 0;
  @Input() color = 'rgba(24, 144, 255, 0.2)';
  @Input() borderColor = '#1890FF';
  @Input() @InputNumber() borderWidth = 2;
  @Input() @InputNumber() height = 56;
  @Input() @InputBoolean() fit = true;
  @Input() @InputBoolean() line = false;
  @Input() @InputBoolean() animate = true;
  @Input() xAxis: any;
  @Input() yAxis: any;
  @Input() padding: number | number[] | 'auto' = [8, 8, 8, 8];
  @Input() data: G2MiniAreaData[] = [];
  @Input() yTooltipSuffix = '';
  @Input() tooltipType: 'mini' | 'default' = 'default';
  @Input() theme: string | Types.LooseObject;

  // #endregion

  constructor(private el: ElementRef, private ngZone: NgZone, configSrv: AlainConfigService) {
    configSrv.attachKey(this, 'chart', 'theme');
  }

  private install() {
    const { el, fit, height, padding, xAxis, yAxis, yTooltipSuffix, tooltipType, line, theme } = this;
    const chart = (this.chart = new Chart({
      container: el.nativeElement,
      autoFit: fit,
      height,
      padding,
      theme,
    }));

    if (!xAxis && !yAxis) {
      chart.axis(false);
    }

    if (xAxis) {
      chart.axis('x', xAxis);
    } else {
      chart.axis('x', false);
    }

    if (yAxis) {
      chart.axis('y', yAxis);
    } else {
      chart.axis('y', false);
    }

    chart.legend(false);
    const tooltipOption: Types.TooltipOption = {
      showTitle: false,
      showMarkers: true,
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
      .area()
      .position('x*y')
      .tooltip('x*y', (x, y) => ({ name: x, value: y + yTooltipSuffix }))
      .shape('smooth');

    if (line) {
      chart.line().position('x*y').shape('smooth').tooltip(false);
    }

    chart.render();

    this.attachChart();
  }

  private attachChart() {
    const { chart, line, fit, height, animate, padding, data, color, borderColor, borderWidth } = this;
    if (!chart || !data || data.length <= 0) {
      return;
    }

    const geoms = chart.geometries;
    geoms.forEach(g => g.color(color));
    if (line) {
      geoms[1].color(borderColor).size(borderWidth);
    }

    chart.autoFit = fit;
    chart.height = height;
    chart.animate(animate);
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
