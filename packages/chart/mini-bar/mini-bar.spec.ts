import { Component, signal, viewChild } from '@angular/core';

import { checkDelay, PageG2, PageG2Height } from '@delon/testing';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { G2MiniBarComponent } from './mini-bar.component';

/** 取 interval mark 的实测填充色：颜色比例尺解析错误只有读真实图形才看得出来 */
function intervalFills(chart: NzSafeAny): string[] {
  const doc = chart.getContext().canvas.document as NzSafeAny;
  return Array.from(
    new Set(
      (doc.getElementsByTagName('rect') as NzSafeAny[])
        .filter(r => r.markType === 'interval')
        .map(r => r.attributes?.fill as string)
    )
  );
}

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
      .checkSpec('scale', { x: { type: 'band' }, y: { zero: true }, color: { type: 'identity' } });
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
    const changeData = vi.spyOn(page.chart, 'changeData');
    await vi.waitFor(() => {
      expect(changeData).toHaveBeenCalledTimes(1);
      expect((vi.mocked(changeData).mock.lastCall![0] as unknown[]).length).toBe(3);
      page.isDataCount(3);
    });
  });

  describe('#color', () => {
    it('color input should be painted as a literal color (identity scale)', async () => {
      const page = new PageG2<TestComponent>().genComp(TestComponent, true);
      page.newData([{ x: `1月`, y: 10 }]);
      await page.ready();
      const scale = (page.chart as NzSafeAny).getScaleByChannel('color');
      // identity 比例尺原样透传，字面颜色不会被主题分类色板替换成 `#5B8FF9`
      expect(scale.map('#cceafe')).toBe('#cceafe');
      expect(intervalFills(page.chart)).toEqual(['#cceafe']);
    });

    it('per-item color should win over color input', async () => {
      const page = new PageG2<TestComponent>().genComp(TestComponent, true);
      page.newData([
        { x: `1月`, y: 10, color: '#0f0' },
        { x: `2月`, y: 20 }
      ]);
      await page.ready();
      expect(intervalFills(page.chart).sort()).toEqual(['#0f0', '#cceafe']);
    });
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
