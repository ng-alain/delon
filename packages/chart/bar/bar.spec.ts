import { Component, signal, TemplateRef, viewChild } from '@angular/core';

import { checkDelay, PageG2, PageG2DataCount, PageG2Height } from '@delon/testing';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { G2BarComponent, G2BarData } from './bar.component';

describe('chart: bar', () => {
  let page: PageG2<TestComponent>;

  describe('', () => {
    beforeEach(async () => {
      page = new PageG2<TestComponent>().genComp(TestComponent, true);
      await page.ready();
    });

    it('should be working', () => {
      page.newData([{ x: `1月`, y: 10 }]).isExists('nz-skeleton', false);
      page.expectSpec(s => expect((s as NzSafeAny).children.length).toBe(1));
    });

    it('should pin the key v5 spec fields ', () => {
      page.expectSpec(spec => {
        const ns = spec;
        expect(ns.legend).toBe(false);
        expect(ns.tooltip.title).toBe(false);
        expect(ns.scale).toEqual({ x: { type: 'band' }, y: { zero: true } });
        expect(ns.axis.y).toEqual({ title: false, line: false, tick: false });
        // 夹具宽度大于 2 行 * 30px 阈值，故 axis.x 显示

        expect(ns.axis.x).toEqual({ title: false });
      });

      const texts = (): string[] =>
        ((page.chart as NzSafeAny).getContext().canvas.document as NzSafeAny)
          .getElementsByTagName('text')
          .map((e: NzSafeAny) => String(e.attributes?.text));
      expect(texts()).not.toContain('x');
      expect(texts()).toContain('1月');
    });

    describe('#title', () => {
      it('with empty title', () => {
        page.context.title.set('');
        page.context.height.set(100);
        page.dc();
        page.expectSpec(s => expect(s.height).toBe(59));
      });
      it('with string', () => {
        page.context.height.set(100);
        page
          .dc()
          .isText('h4', page.context.comp().title() as string)
          // 41 is TITLE_HEIGHT value
          .expectSpec(s => expect(s.height).toBe(100 - 41));
      });
      it('with template', () => {
        page.context.title.set(page.context.titleTpl());
        page.dc().isExists('#titleTpl');
      });
    });

    it('#color', async () => {
      const color = '#f50';
      page.context.color.set(color);
      page.dc();
      await page.ready();
      page.expectSpec(spec => {
        const encode = (spec as NzSafeAny).children[0].encode;
        expect(encode.color.value({ x: 1, y: 1 })).toBe(color);
      });
    });

    it('#padding', async () => {
      const padding = [15];
      page.context.padding.set(padding);
      page.dc();
      // padding = [15] 只设 top，基类拆成 paddingTop 等扁平键
      await page.ready();
      page.expectSpec(s => expect(s.paddingTop).toBe(15));
    });

    it('should be update label when window resize and autoLabel is true', async () => {
      await page.ready();
      const render = vi.spyOn(page.chart, 'render');
      vi.useFakeTimers();
      window.dispatchEvent(new Event('resize'));
      await vi.advanceTimersByTimeAsync(250);
      expect(render).toHaveBeenCalled();
      vi.useRealTimers();
      // 销毁 fixture 解除 window 级 resize 订阅
      page.fixture!.destroy();
    });

    it('tooltip', () => {
      page.expectSpec(spec => {
        const items = (spec as NzSafeAny).children[0].tooltip.items as Array<(d: NzSafeAny) => NzSafeAny>;
        // value 是 d.y，无后缀（数字）
        expect(items[0]({ x: '1月', y: 10 })).toEqual({ name: '1月', value: 10 });
      });
    });

    it('data length change should re-render with new rows', async () => {
      page.isDataCount(PageG2DataCount);
      // 必须 spy 才能证明走的是 data-only 分支；callThrough 让 options() 真正更新
      const changeData = vi.spyOn(page.chart, 'changeData');
      page.newData([
        { x: `1月`, y: 10 },
        { x: `2月`, y: 20 },
        { x: `3月`, y: 30 }
      ]);
      page.dc();
      await vi.waitFor(() => {
        expect(changeData).toHaveBeenCalledTimes(1);
        expect((vi.mocked(changeData).mock.lastCall![0] as unknown[]).length).toBe(3);
        page.isDataCount(3);
      });
    });
  });

  it('#delay', async () => checkDelay(TestComponent));
});

@Component({
  template: `
    <g2-bar
      style="display: block;"
      #comp
      [delay]="delay()"
      [height]="height()"
      [title]="title()"
      [color]="color()"
      [padding]="padding()"
      [data]="data()"
      [autoLabel]="autoLabel()"
      (clickItem)="clickItem($event)"
    />
    <ng-template #titleTpl><p id="titleTpl">titleTpl</p></ng-template>
  `,
  imports: [G2BarComponent]
})
class TestComponent {
  readonly comp = viewChild.required<G2BarComponent>('comp');
  // 字段初始化时生成数据，保证首帧即有数据
  readonly data = signal<G2BarData[]>(
    Array.from({ length: PageG2DataCount }, (_, i) => ({
      x: `${i + 1}月`,
      y: i === 0 ? 10 : Math.floor(Math.random() * 1000) + 200
    }))
  );
  readonly delay = signal(0);
  readonly titleTpl = viewChild.required<TemplateRef<void>>('titleTpl');
  readonly title = signal<string | TemplateRef<void>>('title');
  readonly height = signal(PageG2Height);
  readonly padding = signal<number | number[] | 'auto'>('auto');
  // autoLabel 必须在首帧前为 true，否则不会订阅 resize
  readonly autoLabel = signal(true);
  readonly color = signal('rgba(24, 144, 255, 0.85)');
  clickItem(_ev: NzSafeAny): void {}
}
