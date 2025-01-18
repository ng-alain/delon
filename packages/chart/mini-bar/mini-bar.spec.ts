import { Component, ViewChild } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';

import { checkDelay, PageG2, PageG2Height } from '@delon/testing';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { G2MiniBarComponent } from './mini-bar.component';

describe('chart: mini-bar', () => {
  let page: PageG2<TestComponent>;
  describe('', () => {
    describe('', () => {
      beforeEach(fakeAsync(() => {
        page = new PageG2<TestComponent>().genComp(TestComponent, true);
      }));
      it('should be working', () => {
        page
          .isDataCount('geometries', 2)
          .newData([
            { x: 1, y: 10 },
            { x: 2, y: 20 },
            { x: 3, y: 30 }
          ])
          .isDataCount('geometries', 3);
      });
    });

    describe('#tooltipType', () => {
      beforeEach(() => {
        page = new PageG2<TestComponent>().genComp(TestComponent, false);
      });
      it('with default', fakeAsync(() => {
        page.context.tooltipType = 'default';
        page.dcFirst().checkTooltip('10');
      }));
      it('with mini', fakeAsync(() => {
        page.context.tooltipType = 'mini';
        page.dcFirst().checkTooltip(null);
      }));
    });
  });

  it('#delay', fakeAsync(() => checkDelay(TestComponent)));
});

@Component({
  template: `
    <g2-mini-bar
      style="display: block;"
      #comp
      color="#cceafe"
      [height]="height"
      [tooltipType]="tooltipType"
      [data]="data"
      [delay]="delay"
    />
  `,
  imports: [G2MiniBarComponent]
})
class TestComponent {
  @ViewChild('comp', { static: true }) comp!: G2MiniBarComponent;
  data: NzSafeAny[] = [
    { x: 1, y: 10 },
    { x: 2, y: 20 }
  ];
  height = PageG2Height;
  tooltipType = 'default';
  delay = 0;
}
