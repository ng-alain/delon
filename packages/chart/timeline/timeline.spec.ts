import { Component, ViewChild } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { PageG2 } from '@delon/testing';
import { G2TimelineComponent, G2TimelineData } from './timeline.component';
import { G2TimelineModule } from './timeline.module';

describe('chart: timeline', () => {
  let page: PageG2<TestComponent>;
  beforeEach(fakeAsync(() => {
    page = new PageG2<TestComponent>().makeModule(G2TimelineModule, TestComponent);
  }));
  afterEach(() => page.context.comp.ngOnDestroy());

  it('should be working', () => {
    page.isCanvas().isExists('h4');
    page.context.position = 'left';
    page.dc();
    expect(page.chart.get('legendController').options.position).toBe('left');
  });

  it('should be disabled slider', () => {
    page.context.slider = false;
    page.dc();
    expect(page.getEls('canvas').length).toBe(1);
  });
});

@Component({
  template: `
  <g2-timeline #comp
    [title]="title"
    [titleMap]="titleMap"
    [colorMap]="colorMap"
    [mask]="mask"
    [position]="position"
    [borderWidth]="borderWidth"
    [data]="data"
    [slider]="slider"
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
  data: G2TimelineData[] = new Array(9).fill({}).map((v, i) => ({
    x: (new Date().getTime()) + (1000 * 60 * 30 * i),
    y1: Math.floor(Math.random() * 100) + 1000,
    y2: Math.floor(Math.random() * 100) + 10,
  }));
}
