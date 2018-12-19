import { Component, ViewChild } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { PageG2 } from '@delon/testing';
import { G2WaterWaveComponent } from './water-wave.component';
import { G2WaterWaveModule } from './water-wave.module';

describe('chart: water-wave', () => {
  let page: PageG2<TestComponent>;
  beforeEach(fakeAsync(() => {
    page = new PageG2<TestComponent>().makeModule(G2WaterWaveModule, TestComponent);
  }));
  afterEach(() => page.context.comp.ngOnDestroy());

  it('should be working', () => {
    page
      .isCanvas()
      .isText('.g2-water-wave__desc-title', page.context.title);
    page.context.percent = 30;
    page.dc().isText('.g2-water-wave__desc-percent', '30%');
  });
});

@Component({
  template: `
  <g2-water-wave #comp
    [title]="title"
    [color]="color"
    [height]="height"
    [percent]="percent"
  >
  </g2-water-wave>
  `,
})
class TestComponent {
  @ViewChild('comp') comp: G2WaterWaveComponent;
  title = 'title';
  color = '#1890FF';
  height = 100;
  percent = 10;
}
