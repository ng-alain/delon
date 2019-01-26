import { Component, ViewChild } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { checkDelay, configureTestSuite, PageG2 } from '@delon/testing';
import { G2SingleBarComponent } from './single-bar.component';
import { G2SingleBarModule } from './single-bar.module';

describe('chart: single-bar', () => {
  describe('', () => {
    let page: PageG2<TestComponent>;

    configureTestSuite(() => {
      page = new PageG2<TestComponent>().genModule(G2SingleBarModule, TestComponent);
    });

    beforeEach(() => page.genComp(TestComponent));

    afterEach(() => page.context.comp.ngOnDestroy());

    it('should be working', fakeAsync(() => {
      page.dcFirst().isDataCount('geoms', 1);
    }));

    it('should be minus value', fakeAsync(() => {
      page.context.min = -100;
      page.context.value = -10;
      page.context.line = true;
      page.dcFirst();
      expect(page.chart.get('geoms')[0].get('data')[0].value).toBe(-10);
    }));
  });

  it('#delay', fakeAsync(() => checkDelay(G2SingleBarModule, TestComponent)));
});

@Component({
  template: `
    <g2-single-bar
      #comp
      [plusColor]="plusColor"
      [minusColor]="minusColor"
      [height]="height"
      [barSize]="barSize"
      [min]="min"
      [max]="max"
      [value]="value"
      [line]="line"
      [format]="format"
      [padding]="padding"
      [textStyle]="textStyle"
      [delay]="delay"
    ></g2-single-bar>
  `,
})
class TestComponent {
  @ViewChild('comp') comp: G2SingleBarComponent;
  value = 10;
  plusColor = '#40a9ff';
  minusColor = '#ff4d4f';
  height = 60;
  barSize = 30;
  min = 0;
  max = 100;
  line = false;
  format: (value: number) => string;
  padding: any = 0;
  textStyle: any = { fontSize: 12, color: '#595959' };
  delay = 0;
}
