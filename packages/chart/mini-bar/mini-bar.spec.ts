import { Component, ViewChild } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { PageG2 } from '../../testing/g2';
import { G2MiniBarModule } from './mini-bar.module';
import { G2MiniBarComponent } from './mini-bar.component';

describe('chart: mini-bar', () => {
  let page: PageG2<TestComponent>;

  beforeEach(fakeAsync(() => {
    page = new PageG2<TestComponent>().makeModule(G2MiniBarModule, TestComponent);
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
  <g2-mini-bar #comp color="#cceafe" height="45" [data]="data"></g2-mini-bar>
  `,
})
class TestComponent {
  @ViewChild('comp') comp: G2MiniBarComponent;
  data: any[] = [
    { x: 1, y: 10 },
    { x: 2, y: 20 },
  ];
}