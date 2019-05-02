import { Component, ViewChild } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { checkDelay, configureTestSuite, PageG2 } from '@delon/testing';
import { G2TimelineComponent, G2TimelineData } from './timeline.component';
import { G2TimelineModule } from './timeline.module';

describe('chart: timeline', () => {
  describe('', () => {
    let page: PageG2<TestComponent>;

    configureTestSuite(() => {
      page = new PageG2<TestComponent>().genModule(G2TimelineModule, TestComponent);
    });

    beforeEach(() => page.genComp(TestComponent));

    afterEach(() => page.context.comp.ngOnDestroy());

    it('should be working', fakeAsync(() => {
      page.context.position = 'left';
      page.dcFirst();
      spyOn(page.comp._slider, 'destroy');
      expect(page.chart.get('legendController').options.position).toBe('left');
      page.end();
    }));

    it('should be change slider', fakeAsync(() => {
      page.dcFirst();
      const slider = page.comp._slider;
      spyOn(slider, 'destroy');
      slider.onChange({ startValue: 1, endValue: 2 });
      const state = page.chart.get('dataView').dataSet.state;
      expect(state.start).toBe(1);
      expect(state.end).toBe(2);
      page.end();
    }));

    it('should be disabled slider', fakeAsync(() => {
      page.context.slider = false;
      page.dcFirst();
      expect(page.getEls('canvas').length).toBe(1);
      page.end();
    }));
  });

  it('#delay', fakeAsync(() => checkDelay(G2TimelineModule, TestComponent)));
});

@Component({
  template: `
    <g2-timeline
      #comp
      [title]="title"
      [titleMap]="titleMap"
      [colorMap]="colorMap"
      [mask]="mask"
      [position]="position"
      [borderWidth]="borderWidth"
      [data]="data"
      [slider]="slider"
      [delay]="delay"
    >
    </g2-timeline>
  `,
})
class TestComponent {
  @ViewChild('comp') comp: G2TimelineComponent;
  title = 'title';
  titleMap = { y1: '客流量', y2: '支付笔数' };
  colorMap = { y1: '#1890FF', y2: '#2FC25B' };
  mask: string = 'HH:mm';
  position: 'top' | 'right' | 'bottom' | 'left' = 'top';
  borderWidth = 2;
  slider = true;
  data: G2TimelineData[] = new Array(9).fill({}).map((_v, i) => ({
    x: new Date().getTime() + 1000 * 60 * 30 * i,
    y1: Math.floor(Math.random() * 100) + 1000,
    y2: Math.floor(Math.random() * 100) + 10,
  }));
  delay = 0;
}
