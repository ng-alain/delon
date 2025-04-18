import { Component, ViewChild } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';

import { checkDelay, PageG2 } from '@delon/testing';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { G2PieComponent } from './pie.component';

describe('chart: pie', () => {
  let page: PageG2<TestMiniComponent | TestFullComponent>;

  describe('[mini]', () => {
    beforeEach(() => {
      page = new PageG2<TestMiniComponent>().genComp(TestMiniComponent, false);
      page.context.percent = 10;
    });

    it('should be working', fakeAsync(() => {
      page
        .dcFirst()
        .isText('.g2-pie__total-title', page.context.subTitle)
        .isText('.g2-pie__total-stat', page.context.total)
        .isDataCount('geometries', 2);
    }));

    it('should be using default color', fakeAsync(() => {
      page.context.color = null;
      // const geom = page.dcFirst().chart.geometries[0];
      // const color = geom.get('attrOptions').color.callback('占比');
      // expect(color).toBe(`rgba(24, 144, 255, 0.85)`);
    }));
  });

  describe('[full]', () => {
    beforeEach(fakeAsync(() => {
      page = new PageG2<TestFullComponent>().genComp(TestFullComponent, false);
      page.context.data = [
        { x: '1', y: 50 },
        { x: '2', y: 20 },
        { x: '3', y: 30 }
      ];
      page.dcFirst();
    }));

    it('should be working', () => {
      page.isExists('.g2-pie__legend').isDataCount('geometries', 3);
    });

    it('should be hide item via click it', () => {
      expect(page.context.comp.legendData[0].checked).toBe(true);
      page.getEl('.g2-pie__legend-item').click();
      page.dc();
      expect(page.context.comp.legendData[0].checked).toBe(false);
    });
  });

  describe('#tooltip', () => {
    beforeEach(() => {
      page = new PageG2<TestMiniComponent>().genComp(TestFullComponent, false);
      page.context.inner = 0.1;
      page.context.data = [{ x: '1', y: 100 }];
    });
    xit('should be working', fakeAsync(() => {
      page.context.hasLegend = false;
      page.dcFirst();
      page.checkTooltip('100.00');
    }));
    // 由于 hasLegend 会优先处理为百分比格式，因此无需要在 tooltip 中重新转换
    xit('should be original value when has has legend', fakeAsync(() => {
      page.context.hasLegend = true;
      page.dcFirst();
      page.checkTooltip('100.00');
    }));
  });

  it('#delay', fakeAsync(() => checkDelay(TestFullComponent)));
});

@Component({
  template: `
    <g2-pie
      #comp
      style="display: block;"
      [color]="color"
      [subTitle]="subTitle"
      [total]="total"
      [height]="height"
      [inner]="inner"
      [padding]="padding"
      [percent]="percent"
      [lineWidth]="lineWidth"
      [select]="select"
      [colors]="colors"
    />
  `,
  imports: [G2PieComponent]
})
class TestMiniComponent {
  @ViewChild('comp', { static: true }) comp!: G2PieComponent;
  data?: NzSafeAny[];
  color: string | null = 'rgba(24, 144, 255, 0.85)';
  subTitle = 'subTitle';
  total = 'total';
  height = 100;
  hasLegend = false;
  inner = 0.75;
  padding: number[] = [12, 0, 12, 0];
  percent?: number;
  tooltip = true;
  lineWidth = 0;
  select = true;
  colors?: string[];
}

@Component({
  template: `
    <g2-pie
      #comp
      style="display: block; width: 200px;"
      [data]="data"
      [color]="color"
      [subTitle]="subTitle"
      [total]="total"
      [height]="height"
      [hasLegend]="hasLegend"
      [inner]="inner"
      [padding]="padding"
      [tooltip]="tooltip"
      [lineWidth]="lineWidth"
      [select]="select"
      [colors]="colors"
      [delay]="delay"
    />
  `,
  imports: [G2PieComponent]
})
class TestFullComponent {
  @ViewChild('comp', { static: true }) comp!: G2PieComponent;
  data: NzSafeAny[] = [];
  color = 'rgba(24, 144, 255, 0.85)';
  subTitle = 'subTitle';
  total = 'total';
  height = 200;
  hasLegend = true;
  inner = 0.75;
  padding: number[] = [12, 0, 12, 0];
  percent?: number;
  tooltip = true;
  lineWidth = 0;
  select = true;
  colors?: string[];
  delay = 0;
}
