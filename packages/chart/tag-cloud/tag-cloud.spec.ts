import { Component, ViewChild } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { checkDelay, configureTestSuite, PageG2 } from '@delon/testing';
import { G2TagCloudComponent, G2TagCloudData } from './tag-cloud.component';
import { G2TagCloudModule } from './tag-cloud.module';

describe('chart: tag-cloud', () => {
  describe('', () => {
    let page: PageG2<TestComponent>;

    configureTestSuite(() => {
      page = new PageG2<TestComponent>().genModule(G2TagCloudModule, TestComponent);
    });

    beforeEach(() => page.genComp(TestComponent));

    afterEach(() => page.context.comp.ngOnDestroy());

    it('should be repaint when window resize', fakeAsync(() => {
      page.dcFirst();
      spyOn(page.chart, 'repaint');
      window.dispatchEvent(new Event('resize'));
      page.end();
      expect(page.chart.repaint).toHaveBeenCalled();
    }));

    it('shuld be not rotate when random is 2', fakeAsync(() => {
      spyOn(Math, 'random').and.returnValue(0.6);
      page.dcFirst();
      expect(page.chart.get('data')[0].rotate).toBe(0);
    }));

    it('shuld be font-size is 0 when value is empty', fakeAsync(() => {
      page.context.data = [{ x: 'China', category: 'asia' }];
      page.dcFirst();
      expect(page.chart.get('data')[0].size).toBe(0);
    }));
  });

  it('#delay', fakeAsync(() => checkDelay(G2TagCloudModule, TestComponent)));
});

@Component({
  template: `
    <g2-tag-cloud #comp [data]="data" [delay]="delay"></g2-tag-cloud>
  `,
})
class TestComponent {
  @ViewChild('comp') comp: G2TagCloudComponent;
  data: G2TagCloudData[] = [{ x: 'China', value: 1383220000, category: 'asia' }];
  delay = 0;
}
