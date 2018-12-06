import { Component, ViewChild } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { PageG2 } from '../../testing/g2';
import { G2TagCloudModule } from './tag-cloud.module';
import { G2TagCloudComponent, G2TagCloudData } from './tag-cloud.component';

xdescribe('chart: tag-cloud (killed karma)', () => {
  let page: PageG2<TestComponent>;
  beforeEach(fakeAsync(() => {
    page = new PageG2<TestComponent>().makeModule(G2TagCloudModule, TestComponent);
  }));

  it('should be working', () => {
    page.isCanvas();
    page.context.data = [
      { name: 'n1', value: 10 },
      { name: 'n2', value: 20 },
    ];
    page.dc().isDataCount('geoms', 2);
  });

});

@Component({
  template: `
  <g2-tag-cloud #comp
    [data]="data"
  >
  </g2-tag-cloud>
  `,
})
class TestComponent {
  @ViewChild('comp') comp: G2TagCloudComponent;
  data: G2TagCloudData[] = [
    {
      name: 'n',
      label: 'l',
      value: 10
    }
  ];
}
