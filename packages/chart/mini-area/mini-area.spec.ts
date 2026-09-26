import { Component, signal, viewChild } from '@angular/core';

import { checkDelay, PageG2, PageG2Height } from '@delon/testing';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { G2MiniAreaComponent } from './mini-area.component';

describe('chart: mini-area', () => {
  let page: PageG2<TestComponent>;

  describe('', () => {
    beforeEach(async () => {
      page = new PageG2<TestComponent>().genComp(TestComponent, true);
      await page.ready();
    });

    it('should be working', async () => {
      page.isDataCount(2);
      page.newData([
        { x: 1, y: 10 },
        { x: 2, y: 20 },
        { x: 3, y: 30 }
      ]);
      page.dc();
      await vi.waitFor(() => page.isDataCount(3));
    });

    it('should pin the key v5 spec fields ', async () => {
      await vi.waitFor(() =>
        page.expectSpec(spec => {
          const ns = spec as NzSafeAny;
          expect(ns.children.length).toBe(1);
          expect(ns.children[0].type).toBe('area');

          expect(ns.axis).toEqual({ x: false, y: false });
          expect(ns.legend).toBe(false);
          const items = ns.children[0].tooltip.items as Array<(d: NzSafeAny) => NzSafeAny>;
          expect(items[0]({ x: '1月', y: 10 })).toEqual({ name: '1月', value: '10' });
          const doc = (page.chart as NzSafeAny).getContext().canvas.document as NzSafeAny;
          expect(doc.getElementsByTagName('text').length).toBe(0);
          expect(doc.getElementsByTagName('text').length).toBe(0);
        })
      );
    });

    describe('#Axis', () => {
      it('shoule be close axis', async () => {
        page.context.yAxis.set(null);
        page.context.xAxis.set(null);
        page.dc();
        await page.ready();
        page.expectSpec(spec => {
          const axis = (spec as NzSafeAny).axis;
          expect(axis.x).toBe(false);
          expect(axis.y).toBe(false);
        });
      });
      it('shoule be close x-axis', async () => {
        page.context.xAxis.set({
          line: {
            stroke: '#ff8800'
          }
        });
        page.dc();
        await page.ready();
        page.expectSpec(spec => {
          const axis = (spec as NzSafeAny).axis;
          expect(axis.x).not.toBe(false);
          expect(axis.y).toBe(false);
        });
      });
      it('shoule be close y-axis', async () => {
        page.context.yAxis.set({
          line: {
            stroke: '#ff8800'
          }
        });
        page.dc();
        await page.ready();
        page.expectSpec(spec => {
          const axis = (spec as NzSafeAny).axis;
          expect(axis.x).toBe(false);
          expect(axis.y).not.toBe(false);
        });
      });
    });

    it('#line', async () => {
      page.context.line.set(true);
      page.dc();
      await page.ready();
      page.expectSpec(spec => {
        const ns = spec as NzSafeAny;
        expect(ns.children.length).toBe(2);
        expect(ns.children[1].type).toBe('line');
        expect(ns.children[1].encode.color).toEqual({ type: 'constant', value: '#1890FF' });
        expect(ns.children[1].style.lineWidth).toBe(2);
        expect(ns.children[1].tooltip).toBe(false);
      });
      const doc = (page.chart as NzSafeAny).getContext().canvas.document as NzSafeAny;
      await vi.waitFor(() => {
        const markTypes = (doc.getElementsByTagName('path') as NzSafeAny[]).map(e => e.markType);
        expect(markTypes).toEqual(['area', 'line']);
      });
    });

    it('axis config must be read by v5 ', async () => {
      const texts = (): string[] =>
        ((page.chart as NzSafeAny).getContext().canvas.document as NzSafeAny)
          .getElementsByTagName('text')
          .map((e: NzSafeAny) => String(e.attributes?.text));
      page.context.xAxis.set({ labelFormatter: (v: NzSafeAny) => `L${v}` });
      page.dc();
      await vi.waitFor(() => {
        page.expectSpec(spec => {
          const axis = (spec as NzSafeAny).axis;
          expect(axis.x).toEqual({ labelFormatter: expect.any(Function) });
          expect(axis.y).toBe(false);
        });
        expect(texts()).toContain('L1');
        expect(texts()).toContain('L2');
        expect(texts()).not.toContain('Y0');
      });

      page.context.yAxis.set({ labelFormatter: (v: NzSafeAny) => `Y${v}` });
      page.dc();
      await vi.waitFor(() => {
        expect(texts()).toContain('L1');
        expect(texts()).toContain('Y0');
      });
    });

    describe('#tooltipType', () => {
      it('with default', () => {
        page.expectSpec(spec => {
          const ns = spec as NzSafeAny;
          expect(ns.tooltip.title).toBe(false);
          const items = ns.children[0].tooltip.items as Array<(d: NzSafeAny) => NzSafeAny>;
          expect(items[0]({ x: '1月', y: 10 })).toEqual({ name: '1月', value: '10' });
        });
      });

      it('with mini', async () => {
        page.context.tooltipType.set('mini');
        page.dc();
        await page.ready();
        page.expectSpec(spec => {
          const ns = spec as NzSafeAny;
          expect(ns.tooltip.items).toEqual([{ channel: 'y', name: '' }]);
          expect(ns.interaction.tooltip.position).toBe('top');
        });
      });
    });

    it('data change without line should take the data-only changeData path ', async () => {
      page.isDataCount(2);
      const changeData = vi.spyOn(page.chart, 'changeData');
      page.newData([
        { x: 1, y: 10 },
        { x: 2, y: 20 },
        { x: 3, y: 30 }
      ]);
      page.dc();
      await vi.waitFor(() => {
        expect(changeData).toHaveBeenCalledTimes(1);
        expect((vi.mocked(changeData).mock.lastCall![0] as unknown[]).length).toBe(3);
        page.isDataCount(3);
      });
    });

    it('data change with line=true must repaint so the sibling line mark is not clobbered ', async () => {
      page.context.line.set(true);
      page.dc();
      await vi.waitFor(() =>
        page.expectSpec(spec => {
          const ns = spec as NzSafeAny;
          expect(ns.children.length).toBe(2);
          expect(ns.children[1].type).toBe('line');
          expect(ns.children[1].data).toBeUndefined();
        })
      );
      const changeData = vi.spyOn(page.chart, 'changeData');
      const render = vi.spyOn(page.chart, 'render');
      page.newData([
        { x: 1, y: 10 },
        { x: 2, y: 20 },
        { x: 3, y: 30 }
      ]);
      page.dc();
      const ctx = (page.chart as NzSafeAny).getContext();
      const doc = ctx.canvas.document as NzSafeAny;
      await vi.waitFor(() => {
        expect(render).toHaveBeenCalled();
        page.expectSpec(spec => {
          const ns = spec as NzSafeAny;
          expect(ns.data.length).toBe(3);
          expect(ns.children.length).toBe(2);
          expect(ns.children[1].type).toBe('line');
          expect(ns.children[1].data).toBeUndefined();
        });
        expect((doc.getElementsByTagName('path') as NzSafeAny[]).map(e => e.markType)).toEqual(['area', 'line']);
      });
      // line() 为真 ⇒ isDataOnly() 必须为 false，否则 changeData() 会把 data 写进兄弟 mark
      expect(changeData).toHaveBeenCalledTimes(0);
      const view = (ctx.views as NzSafeAny[])[0];
      const lineState = [...(view.markState as Map<NzSafeAny, NzSafeAny>).entries()].find(
        ([m]: [NzSafeAny, NzSafeAny]) => m.type === 'line'
      ) as [NzSafeAny, NzSafeAny];
      expect(lineState[0].data.length).toBe(3);
    });
  });

  it('#delay', async () => checkDelay(TestComponent));
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
  readonly comp = viewChild.required<G2MiniAreaComponent>('comp');
  // 会被用例变更的宿主字段必须是 signal；height 只静态传入、从不变更
  readonly line = signal(false);
  height = PageG2Height;
  readonly xAxis = signal<NzSafeAny>(undefined);
  readonly yAxis = signal<NzSafeAny>(undefined);
  readonly data = signal<NzSafeAny[]>([
    { x: 1, y: 10 },
    { x: 2, y: 20 }
  ]);
  readonly tooltipType = signal<'mini' | 'default'>('default');
  readonly delay = signal(0);
}
