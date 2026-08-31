import { Component, signal, ViewChild } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';

import { checkDelay, PageG2, PageG2Height } from '@delon/testing';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { G2MiniAreaComponent } from './mini-area.component';

describe('chart: mini-area', () => {
  describe('', () => {
    let page: PageG2<TestComponent>;

    beforeEach(fakeAsync(() => {
      page = new PageG2<TestComponent>().genComp(TestComponent, true);
      page.genComp(TestComponent);
    }));

    it('should be working', fakeAsync(() => {
      page
        .dcFirst()
        .isDataCount('geometries', 2)
        .newData([
          { x: 1, y: 10 },
          { x: 2, y: 20 },
          { x: 3, y: 30 }
        ])
        .isDataCount('geometries', 3);
    }));

    describe('#Axis', () => {
      it('shoule be close axis', fakeAsync(() => {
        page.context.yAxis.set(null);
        page.context.xAxis.set(null);
        page.dcFirst();
        const opt = page.getController('axis').option;
        expect(opt.x).toBe(false);
        expect(opt.y).toBe(false);
      }));
      it('shoule be close x-axis', fakeAsync(() => {
        page.context.xAxis.set({
          line: {
            stroke: '#ff8800'
          }
        });
        page.dcFirst();
        const opt = page.getController('axis').option;
        expect(opt.x).not.toBe(false);
        expect(opt.y).toBe(false);
      }));
      it('shoule be close y-axis', fakeAsync(() => {
        page.context.yAxis.set({
          line: {
            stroke: '#ff8800'
          }
        });
        page.dcFirst();
        const opt = page.getController('axis').option;
        expect(opt.x).toBe(false);
        expect(opt.y).not.toBe(false);
      }));
    });

    it('#line', fakeAsync(() => {
      page.context.line.set(true);
      page.dcFirst();
      expect(page.chart.geometries.length).toBe(2);
    }));

    describe('#tooltipType', () => {
      it('with default', fakeAsync(() => page.dcFirst().checkTooltip('10')));

      it('with mini', fakeAsync(() => {
        page.context.tooltipType.set('mini');
        page.dcFirst().checkTooltip(null);
      }));
    });
  });

  it('#delay', fakeAsync(() => checkDelay(TestComponent)));
});

@Component({
  template: `
    <g2-mini-area
      style="display: block;"
      #comp
      [line]="line()"
      color="#cceafe"
      [height]="height"
      [data]="data()"
      [delay]="delay()"
      [tooltipType]="tooltipType()"
      [xAxis]="xAxis()"
      [yAxis]="yAxis()"
    />
  `,
  imports: [G2MiniAreaComponent]
})
class TestComponent {
  @ViewChild('comp', { static: true }) comp!: G2MiniAreaComponent;
  readonly line = signal(false);
  height = PageG2Height;
  readonly xAxis = signal<NzSafeAny>(undefined);
  readonly yAxis = signal<NzSafeAny>(undefined);
  readonly data = signal<NzSafeAny[]>([
    { x: 1, y: 10 },
    { x: 2, y: 20 }
  ]);
  readonly tooltipType = signal('default');
  readonly delay = signal(0);
}
