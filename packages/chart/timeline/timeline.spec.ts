import { Component, ViewChild } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { checkDelay, PageG2 } from '@delon/testing';
import { G2TimelineComponent, G2TimelineData } from './timeline.component';
import { G2TimelineModule } from './timeline.module';

describe('chart: timeline', () => {
  describe('', () => {
    let page: PageG2<TestComponent>;

    beforeEach(() => {
      page = new PageG2<TestComponent>().genModule(G2TimelineModule, TestComponent);
      page.genComp(TestComponent);
    });

    afterEach(() => page.context.comp.ngOnDestroy());

    it('should be working', fakeAsync(() => {
      page.context.position = 'left';
      page.dcFirst();
      expect(page.chart.getOptions().slider).not.toBeUndefined();
      expect(page.getController('legend').option.position).toBe('left');
      page.end();
    }));

    it('should be disabled slider', fakeAsync(() => {
      page.context.slider = false;
      page.dcFirst();
      expect(page.chart.getOptions().slider).toBeUndefined();
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
      [maskSlider]="maskSlider"
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
  @ViewChild('comp', { static: true }) comp: G2TimelineComponent;
  title = 'title';
  titleMap = { y1: '客流量', y2: '支付笔数' };
  colorMap = { y1: '#1890FF', y2: '#2FC25B' };
  mask: string = 'HH:mm';
  maskSlider: string = 'HH:mm';
  position: 'top' | 'right' | 'bottom' | 'left' = 'top';
  borderWidth = 2;
  slider = true;
  data: G2TimelineData[] = new Array(9).fill({}).map((_v, i) => ({
    time: new Date().getTime() + 1000 * 60 * 30 * i,
    y1: Math.floor(Math.random() * 100) + 1000,
    y2: Math.floor(Math.random() * 100) + 10,
  }));
  delay = 0;
}
