import { Component, ViewChild } from '@angular/core';
import { fakeAsync, tick } from '@angular/core/testing';
import { checkDelay, PageG2 } from '@delon/testing';
import { G2TagCloudComponent, G2TagCloudData } from './tag-cloud.component';
import { G2TagCloudModule } from './tag-cloud.module';

describe('chart: tag-cloud', () => {
  describe('', () => {
    let page: PageG2<TestComponent>;

    beforeEach(() => {
      page = new PageG2<TestComponent>().genModule(G2TagCloudModule, TestComponent);
      page.genComp(TestComponent);
    });

    afterEach(() => page.context.comp.ngOnDestroy());

    it('should be repaint when window resize', fakeAsync(() => {
      page.dcFirst();
      spyOn(page.chart, 'changeData');
      window.dispatchEvent(new Event('resize'));
      tick(201);
      expect(page.chart.changeData).toHaveBeenCalled();
    }));

    it('shuld be not rotate when random is 2', fakeAsync(() => {
      spyOn(Math, 'random').and.returnValue(0.6);
      page.dcFirst();
      expect(page.chart.getData()[0].rotate).toBe(0);
    }));

    it('shuld be font-size is 0 when value is empty', fakeAsync(() => {
      page.context.data = [{ x: 'China', category: 'asia' }];
      page.dcFirst();
      expect(page.chart.getData()[0].size).toBe(0);
    }));
  });

  it('#delay', fakeAsync(() => checkDelay(G2TagCloudModule, TestComponent)));
});

@Component({
  template: ` <g2-tag-cloud #comp height="200" width="200" [data]="data" [delay]="delay"></g2-tag-cloud> `,
})
class TestComponent {
  @ViewChild('comp', { static: true }) comp: G2TagCloudComponent;
  data: G2TagCloudData[] = [
    { name: 'China1', value: 1 },
    { name: 'China2', value: 2 },
    { name: 'China3', value: 3 },
    { name: 'China4', value: 4 },
    { name: 'China5', value: 5 },
    { name: 'China6', value: 6 },
  ];
  delay = 0;
}
