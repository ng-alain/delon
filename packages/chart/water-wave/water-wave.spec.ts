import { Component, signal, viewChild } from '@angular/core';
import { discardPeriodicTasks, fakeAsync, tick } from '@angular/core/testing';

import { PageG2 } from '@delon/testing';

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
      page.context.percent.set(30);
      page.dc().isText('.g2-water-wave__desc-percent', '30%');
    }));

    it('should be scale scaling when height is gt; container width', fakeAsync(() => {
      const styleSpy = spyOn(page.comp.renderer, 'setStyle');
      page.context.animate.set(false);
      page.context.height.set(100);
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

  // `G2WaterWaveComponent` 没有 `chart` 成员，因此公共 `checkDelay`（断言 `page.chart == null`）
  // 对本组件恒真、不具证明力；这里改为直接间谍公共 `render()`：
  // 延迟窗口内销毁 fixture 后，bootstrap 里的 `destroyed` 守卫必须阻止 `render()` 被调用。
  it('#delay', fakeAsync(() => {
    const page = new PageG2<TestComponent>().genComp(TestComponent, false);
    page.context.delay.set(100);
    page.dc();
    const spy = spyOn(page.comp, 'render');
    page.fixture!.destroy();
    tick(201);
    discardPeriodicTasks();
    expect(spy).not.toHaveBeenCalled();
  }));
});

@Component({
  template: `
    <g2-water-wave
      #comp
      [title]="title"
      [color]="color"
      [height]="height()"
      [percent]="percent()"
      [delay]="delay()"
      [animate]="animate()"
    />
  `,
  imports: [G2WaterWaveComponent]
})
class TestComponent {
  readonly comp = viewChild.required<G2WaterWaveComponent>('comp');
  title = 'title';
  color = '#1890FF';
  readonly height = signal(100);
  readonly percent = signal(10);
  readonly delay = signal(0);
  readonly animate = signal(true);
}
