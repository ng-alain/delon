import { Component, ViewChild } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { PageG2 } from '../../testing/g2';
import { G2MiniAreaModule } from './mini-area.module';
import { G2MiniAreaComponent } from './mini-area.component';

describe('chart: mini-area', () => {
  let page: PageG2<TestComponent>;

  beforeEach(fakeAsync(() => {
    page = new PageG2<TestComponent>().makeModule(G2MiniAreaModule, TestComponent);
  }));

  afterEach(() => page.context.comp.ngOnDestroy());

  it('should be working', () => {
    page
      .isDataCount('views', 2)
      .newData([
        { x: 1, y: 10 },
        { x: 2, y: 20 },
        { x: 3, y: 30 },
      ])
      .isDataCount('views', 3);
  });

});

@Component({
  template: `
  <g2-mini-area #comp line color="#cceafe" height="45" [data]="data"></g2-mini-area>
  `,
})
class TestComponent {
  @ViewChild('comp') comp: G2MiniAreaComponent;
  data: any[] = [
    { x: 1, y: 10 },
    { x: 2, y: 20 },
  ];
}