import { Component, ViewChild } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { checkDelay, PageG2 } from '@delon/testing';
import { G2PieComponent } from './pie.component';
import { G2PieModule } from './pie.module';

describe('chart: pie', () => {
  let page: PageG2<TestMiniComponent | TestFullComponent>;

  describe('[mini]', () => {
    beforeEach(() => {
      page = new PageG2<TestMiniComponent>().makeModule(G2PieModule, TestMiniComponent, {
        dc: false,
      });
      page.context.percent = 10;
    });

    afterEach(() => page.context.comp.ngOnDestroy());

    it('should be working', fakeAsync(() => {
      page
        .dcFirst()
        .isText('.g2-pie__total-title', page.context.subTitle)
        .isText('.g2-pie__total-stat', page.context.total)
        .isDataCount('geoms', 2);
    }));

    it('should be using default color', fakeAsync(() => {
      page.context.color = null;
      const geom = page.dcFirst().chart.get('geoms')[0];
      const color = geom.get('attrOptions').color.callback('占比');
      expect(color).toBe(`rgba(24, 144, 255, 0.85)`);
    }));
  });

  describe('[full]', () => {
    beforeEach(fakeAsync(() => {
      page = new PageG2<TestFullComponent>().makeModule(G2PieModule, TestFullComponent, {
        dc: false,
      });
      page.context.data = [{ x: '1', y: 50 }, { x: '2', y: 20 }, { x: '3', y: 30 }];
      page.dcFirst();
    }));

    afterEach(() => page.context.comp.ngOnDestroy());

    it('should be working', () => {
      page.isExists('.g2-pie__legend').isDataCount('geoms', 3);
    });

    it('should be hide item via click it', () => {
      expect(page.context.comp.legendData[0].checked).toBe(true);
      page.getEl('.g2-pie__legend-item').click();
      page.dc();
      expect(page.context.comp.legendData[0].checked).toBe(false);
    });

    it('should be auto legend block when container width less than 380', fakeAsync(() => {
      const el = (page.dl.nativeElement as HTMLElement).querySelector('g2-pie') as HTMLElement;
      let type = 1;
      spyOnProperty(el, 'clientWidth').and.callFake(() => {
        return type === 1 ? 381 : 379;
      });
      window.dispatchEvent(new Event('resize'));
      page.end();
      expect(el.classList.contains('g2-pie__legend-block')).toBe(false);
      type = 2;
      window.dispatchEvent(new Event('resize'));
      page.end();
      expect(el.classList.contains('g2-pie__legend-block')).toBe(true);
    }));
  });

  describe('#tooltip', () => {
    beforeEach(() => {
      page = new PageG2<TestMiniComponent>().makeModule(G2PieModule, TestFullComponent, {
        dc: false,
      });
      page.context.inner = 0.1;
      page.context.data = [{ x: '1', y: 100 }];
    });
    it('should be working', fakeAsync(() => {
      page.context.hasLegend = false;
      page.dcFirst();
      page.checkTooltip('100.00', { x: 50, y: 50 });
    }));
    // 由于 hasLegend 会优先处理为百分比格式，因此无需要在 tooltip 中重新转换
    it('should be original value when has has legend', fakeAsync(() => {
      page.context.hasLegend = true;
      page.dcFirst();
      page.checkTooltip('100.00', { x: 50, y: 50 });
    }));
  });

  it('#delay', fakeAsync(() => checkDelay(G2PieModule, TestFullComponent)));
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
    ></g2-pie>
  `,
})
class TestMiniComponent {
  @ViewChild('comp') comp: G2PieComponent;
  data: any[];
  color: string | null = 'rgba(24, 144, 255, 0.85)';
  subTitle = 'subTitle';
  total = 'total';
  height = 100;
  hasLegend = false;
  inner = 0.75;
  padding: number[] = [12, 0, 12, 0];
  percent: number;
  tooltip = true;
  lineWidth = 0;
  select = true;
  colors: any[];
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
    ></g2-pie>
  `,
})
class TestFullComponent {
  @ViewChild('comp') comp: G2PieComponent;
  data: any[] = [];
  color = 'rgba(24, 144, 255, 0.85)';
  subTitle = 'subTitle';
  total = 'total';
  height = 200;
  hasLegend = true;
  inner = 0.75;
  padding: number[] = [12, 0, 12, 0];
  percent: number;
  tooltip = true;
  lineWidth = 0;
  select = true;
  colors: any[];
  delay = 0;
}
