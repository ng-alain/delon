import { Component, signal, viewChild } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';

import { checkDelay, PageG2 } from '@delon/testing';

import { G2GaugeComponent } from './gauge.component';

describe('chart: gauge', () => {
  let page: PageG2<TestComponent>;

  describe('', () => {
    beforeEach(fakeAsync(() => {
      page = new PageG2<TestComponent>().genComp(TestComponent, true);
    }));

    it('should be working', () => {
      expect(page.chart.geometries[0].data[0].value).toBe(10);
      page.context.percent.set(30);
      page.dc();
      expect(page.chart.geometries[0].data[0].value).toBe(30);
    });
  });

  it('#delay', fakeAsync(() => checkDelay(TestComponent)));
});

@Component({
  template: ` <g2-gauge #comp title="核销率" height="164" [percent]="percent()" [delay]="delay()" />`,
  imports: [G2GaugeComponent]
})
class TestComponent {
  readonly comp = viewChild.required<G2GaugeComponent>('comp');
  readonly percent = signal(10);
  readonly delay = signal(0);
}
