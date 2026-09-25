import { Component, signal, viewChild } from '@angular/core';

import { checkDelay, PageG2, PageG2Height } from '@delon/testing';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { G2MiniBarComponent } from './mini-bar.component';

describe('chart: mini-bar', () => {
  it('should be working', async () => {
    const page = new PageG2<TestComponent>().genComp(TestComponent, true);
    page.newData([
      { x: `1月`, y: 10 },
      { x: `2月`, y: 20 }
    ]);
    await page.ready();
    page
      .isDataCount(2)
      .isExists('canvas', true)
      .checkSpec('scale', { x: { type: 'band' }, y: { zero: true } });
  });

  it('data length change should re-render with new rows', async () => {
    const page = new PageG2<TestComponent>().genComp(TestComponent, true);
    page.newData([
      { x: `1月`, y: 10 },
      { x: `2月`, y: 20 }
    ]);
    await page.ready();
    page.isDataCount(2);
    page.newData([
      { x: `1月`, y: 10 },
      { x: `2月`, y: 20 },
      { x: `3月`, y: 30 }
    ]);
    page.dc();
    const changeData = spyOn(page.chart, 'changeData').and.callThrough();
    await new Promise(resolve => setTimeout(resolve, 700));
    expect(changeData).toHaveBeenCalledTimes(1);
    expect((changeData.calls.mostRecent().args[0] as unknown[]).length).toBe(3);
    page.isDataCount(3);
  });

  describe('#tooltipType', () => {
    it('tooltip spec should carry mini options', async () => {
      const page = new PageG2<TestComponent>().genComp(TestComponent, true);
      page.newData([{ x: `1月`, y: 10 }]);
      await page.ready();
      page.expectSpec(spec => {
        const ns = spec as NzSafeAny;
        expect(ns.tooltip.title).toBe(false);
        const items = ns.children[0].tooltip.items as Array<(d: NzSafeAny) => NzSafeAny>;
        expect(items[0]({ x: '1月', y: 10 })).toEqual({ name: '1月', value: '10' });
      });
    });

    it('tooltipType mini should switch tooltip items and interaction', async () => {
      const page = new PageG2<TestComponent>().genComp(TestComponent, true);
      page.context.tooltipType.set('mini');
      page.newData([{ x: `1月`, y: 10 }]);
      await page.ready();
      page.expectSpec(spec => {
        const ns = spec as NzSafeAny;
        expect(ns.tooltip.items).toEqual([{ channel: 'y', name: '' }]);
        expect(ns.interaction.tooltip.position).toBe('top');
      });
    });
  });

  it('#delay', async () => checkDelay(TestComponent));
});

@Component({
  template: `
    <g2-mini-bar
      style="display: block;"
      #comp
      color="#cceafe"
      [height]="height"
      [tooltipType]="tooltipType()"
      [data]="data()"
      [delay]="delay()"
    />
  `,
  imports: [G2MiniBarComponent]
})
class TestComponent {
  readonly comp = viewChild.required<G2MiniBarComponent>('comp');
  readonly data = signal<NzSafeAny[]>([
    { x: 1, y: 10 },
    { x: 2, y: 20 }
  ]);
  height = PageG2Height;
  readonly tooltipType = signal<'mini' | 'default'>('default');
  readonly delay = signal(0);
}
