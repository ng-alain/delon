import { Component, ViewChild } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { checkDelay, PageG2 } from '@delon/testing';
import { G2TagCloudComponent, G2TagCloudData } from './tag-cloud.component';
import { G2TagCloudModule } from './tag-cloud.module';

xdescribe('chart: tag-cloud', () => {
  describe('', () => {
    let page: PageG2<TestComponent>;

    beforeEach(() => {
      page = new PageG2<TestComponent>().genModule(G2TagCloudModule, TestComponent);
      page.genComp(TestComponent);
    });

    afterEach(() => page.context.comp.ngOnDestroy());

    it('should be repaint when window resize', done => {
      page.dc();
      spyOn(page.chart, 'render');
      window.dispatchEvent(new Event('resize'));
      setTimeout(() => {
        expect(page.chart.render).toHaveBeenCalled();
        done();
      }, 201);
    });

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

  xit('#delay', fakeAsync(() => checkDelay(G2TagCloudModule, TestComponent)));
});

@Component({
  template: ` <g2-tag-cloud #comp [data]="data" [delay]="delay"></g2-tag-cloud> `,
})
class TestComponent {
  @ViewChild('comp', { static: true }) comp: G2TagCloudComponent;
  data: G2TagCloudData[] = [{ x: 'China', value: 1383220000, category: 'asia' }];
  delay = 0;
}
