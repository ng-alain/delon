import { Component, ViewChild } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { checkDelay, PageG2 } from '@delon/testing';
import { G2GaugeComponent } from './gauge.component';
import { G2GaugeModule } from './gauge.module';

describe('chart: gauge', () => {
  let page: PageG2<TestComponent>;

  describe('', () => {
    beforeEach(fakeAsync(() => {
      page = new PageG2<TestComponent>().makeModule(G2GaugeModule, TestComponent);
    }));

    afterEach(() => page.context.comp.ngOnDestroy());

    it('should be working', () => {
      page.isText('.g2-gauge__percent', '10%');
      page.context.percent = 30;
      page.dc().isText('.g2-gauge__percent', '30%');
    });
  });

  it('#delay', fakeAsync(() => checkDelay(G2GaugeModule, TestComponent)));
});

@Component({
  template: `
    <g2-gauge #comp [title]="'核销率'" height="164" [percent]="percent" [delay]="delay"></g2-gauge>
  `,
})
class TestComponent {
  @ViewChild('comp') comp: G2GaugeComponent;
  percent = 10;
  delay = 0;
}
