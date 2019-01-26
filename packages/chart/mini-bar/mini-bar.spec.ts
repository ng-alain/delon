import { Component, ViewChild } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { checkDelay, PageG2, PageG2Height } from '@delon/testing';
import { G2MiniBarComponent } from './mini-bar.component';
import { G2MiniBarModule } from './mini-bar.module';

describe('chart: mini-bar', () => {
  let page: PageG2<TestComponent>;
  describe('', () => {
    afterEach(() => page.context.comp.ngOnDestroy());

    describe('', () => {
      beforeEach(fakeAsync(() => {
        page = new PageG2<TestComponent>().makeModule(G2MiniBarModule, TestComponent);
      }));
      it('should be working', () => {
        page
          .isDataCount('geoms', 2)
          .newData([{ x: 1, y: 10 }, { x: 2, y: 20 }, { x: 3, y: 30 }])
          .isDataCount('geoms', 3);
      });
    });

    describe('#tooltipType', () => {
      beforeEach(() => {
        page = new PageG2<TestComponent>().makeModule(G2MiniBarModule, TestComponent, {
          dc: false,
        });
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

  it('#delay', fakeAsync(() => checkDelay(G2MiniBarModule, TestComponent)));
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
    ></g2-mini-bar>
  `,
})
class TestComponent {
  @ViewChild('comp') comp: G2MiniBarComponent;
  data: any[] = [{ x: 1, y: 10 }, { x: 2, y: 20 }];
  height = PageG2Height;
  tooltipType = 'default';
  delay = 0;
}
