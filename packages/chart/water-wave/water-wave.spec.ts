import { Component, ViewChild } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';

import { checkDelay, PageG2 } from '@delon/testing';

import { G2WaterWaveComponent } from './water-wave.component';

describe('chart: water-wave', () => {
  describe('defualt', () => {
    let page: PageG2<TestComponent>;

    beforeEach(fakeAsync(() => {
      page = new PageG2<TestComponent>().genComp(TestComponent, true);
      page.genComp(TestComponent);
    }));

    it('should be working', fakeAsync(() => {
      page.dcFirst().isCanvas().isText('.g2-water-wave__desc-title', page.context.title);
      page.context.percent = 30;
      page.dc().isText('.g2-water-wave__desc-percent', '30%');
    }));

    it('should be scale scaling when height is gt; container width', fakeAsync(() => {
      const styleSpy = spyOn(page.comp.renderer, 'setStyle');
      page.context.animate = false;
      page.context.height = 100;
      spyOnProperty(page.comp.el.parentNode, 'offsetWidth').and.returnValue(50);
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

  it('#delay', fakeAsync(() => checkDelay(TestComponent)));
});

@Component({
  template: `
    <g2-water-wave
      #comp
      [title]="title"
      [color]="color"
      [height]="height"
      [percent]="percent"
      [delay]="delay"
      [animate]="animate"
    />
  `,
  imports: [G2WaterWaveComponent]
})
class TestComponent {
  @ViewChild('comp', { static: true }) comp!: G2WaterWaveComponent;
  title = 'title';
  color = '#1890FF';
  height = 100;
  percent = 10;
  delay = 0;
  animate = true;
}
