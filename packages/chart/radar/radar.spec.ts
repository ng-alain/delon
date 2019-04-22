import { Component, ViewChild } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { checkDelay, configureTestSuite, PageG2 } from '@delon/testing';
import { G2RadarComponent, G2RadarData } from './radar.component';
import { G2RadarModule } from './radar.module';

describe('chart: radar', () => {
  describe('defualt', () => {
    let page: PageG2<TestComponent>;

    configureTestSuite(() => {
      page = new PageG2<TestComponent>().genModule(G2RadarModule, TestComponent);
    });

    beforeEach(fakeAsync(() => page.genComp(TestComponent, true)));

    afterEach(() => page.context.comp.ngOnDestroy());

    it('should be working', () => {
      page.isCanvas().isExists('.g2-radar__legend');
      page.context.hasLegend = false;
      page.dc().isExists('.g2-radar__legend', false);
    });

    it('should be hide item via click it', () => {
      expect(page.context.comp.legendData[0].checked).toBe(true);
      page.getEl('.g2-radar__legend-item').click();
      page.dc();
      expect(page.context.comp.legendData[0].checked).toBe(false);
    });
  });

  it('#delay', fakeAsync(() => checkDelay(G2RadarModule, TestComponent)));
});

@Component({
  template: `
    <g2-radar #comp [hasLegend]="hasLegend" [title]="title" [tickCount]="tickCount" [data]="data" [delay]="delay">
    </g2-radar>
  `,
})
class TestComponent {
  @ViewChild('comp') comp: G2RadarComponent;
  title = 'title';
  hasLegend = true;
  tickCount = 4;
  data: G2RadarData[] = [
    {
      name: 'n',
      label: 'l',
      value: 10,
    },
  ];
  delay = 0;
}
