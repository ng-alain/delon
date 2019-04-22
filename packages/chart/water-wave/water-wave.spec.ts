import { Component, ViewChild } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { checkDelay, configureTestSuite, PageG2 } from '@delon/testing';
import { G2WaterWaveComponent } from './water-wave.component';
import { G2WaterWaveModule } from './water-wave.module';

describe('chart: water-wave', () => {
  describe('defualt', () => {
    let page: PageG2<TestComponent>;

    configureTestSuite(() => {
      page = new PageG2<TestComponent>().genModule(G2WaterWaveModule, TestComponent);
    });

    beforeEach(() => page.genComp(TestComponent));

    afterEach(() => page.context.comp.ngOnDestroy());

    it('should be working', fakeAsync(() => {
      page
        .dcFirst()
        .isCanvas()
        .isText('.g2-water-wave__desc-title', page.context.title);
      page.context.percent = 30;
      page.dc().isText('.g2-water-wave__desc-percent', '30%');
    }));

    it('should be scale scaling when height is gt; container width', fakeAsync(() => {
      const styleSpy = spyOn(page.comp.renderer, 'setStyle');
      page.context.height = 100;
      spyOnProperty(page.comp.el.nativeElement.parentNode, 'offsetWidth').and.returnValue(50);
      page.dcFirst();
      expect(styleSpy.calls.mostRecent().args[2]).toBe('scale(0.5)');
    }));

    it('should be update radio when window resize', fakeAsync(() => {
      page.dcFirst();
      spyOn(page.comp.renderer, 'setStyle');
      window.dispatchEvent(new Event('resize'));
      page.end();
      expect(page.comp.renderer.setStyle).toHaveBeenCalled();
    }));
  });

  it('#delay', fakeAsync(() => checkDelay(G2WaterWaveModule, TestComponent)));
});

@Component({
  template: `
    <g2-water-wave #comp [title]="title" [color]="color" [height]="height" [percent]="percent" [delay]="delay">
    </g2-water-wave>
  `,
})
class TestComponent {
  @ViewChild('comp') comp: G2WaterWaveComponent;
  title = 'title';
  color = '#1890FF';
  height = 100;
  percent = 10;
  delay = 0;
}
