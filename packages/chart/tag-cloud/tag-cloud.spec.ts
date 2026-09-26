import { Component, signal, viewChild } from '@angular/core';

import { checkDelay, PageG2 } from '@delon/testing';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { G2TagCloudComponent, G2TagCloudData } from './tag-cloud.component';

describe('chart: tag-cloud', () => {
  describe('', () => {
    let page: PageG2<TestComponent>;

    beforeEach(async () => {
      // wordCloud 布局用随机起点与随机旋转，同一盒子里偶发挤掉一个词
      vi.spyOn(Math, 'random').mockReturnValue(0);
      page = new PageG2<TestComponent>().genComp(TestComponent, true);
      await page.ready();
    });

    /** buildSpec() 的根即 mark，v5 会把它规范化为 view + children[0] */
    const markSpec = (): NzSafeAny => {
      const o = page.chart.options() as NzSafeAny;
      return Array.isArray(o.children) && o.children.length ? o.children[0] : o;
    };

    /** 渲染出的词条（过滤掉内置 wordCloud 变换追加的两个不可见边界文本） */
    const words = (): Array<{ text: string; fontSize: number }> => {
      const doc = (page.chart as NzSafeAny).getContext().canvas.document as NzSafeAny;
      return (doc.getElementsByTagName('text') as NzSafeAny[])
        .map(e => ({ text: String(e.attributes?.text), fontSize: Number(e.attributes?.fontSize) }))
        .filter(d => d.text !== '');
    };

    it('should be repaint when window resize', async () => {
      const render = vi.spyOn(page.chart, 'render');
      vi.useFakeTimers();
      window.dispatchEvent(new Event('resize'));
      await vi.advanceTimersByTimeAsync(250);
      expect(render).toHaveBeenCalled();
      vi.useRealTimers();
      // window 级 resize 订阅必须显式销毁，避免在 `destroyAfterEach: false` 下跨 spec 累积
      page.fixture!.destroy();
    });

    it('should pin the key v5 spec fields ', async () => {
      await vi.waitFor(() => expect(words().length).toBe(6));
      const authored = (page.comp as NzSafeAny).buildSpec() as NzSafeAny;
      expect(authored.type).toBe('wordCloud');
      expect(authored.children).toBeUndefined();
      expect(authored.data.length).toBe(6);
      expect(authored.encode).toEqual({ text: 'name', value: 'value', color: 'name' });
      expect(authored.layout).toEqual({ font: 'Verdana', fontSize: [8, 32], padding: 0, timeInterval: 5000 });
      expect(authored.legend).toBe(false);
      expect(authored.axis).toBe(false);
      expect(authored.tooltip).toEqual({ title: false });
      expect(authored.interaction).toEqual({ elementHighlight: true });
      page.expectSpec(spec => {
        const ns = spec as NzSafeAny;
        expect(ns.type).toBe('view');
        expect(ns.children.length).toBe(1);
        expect(ns.children[0].type).toBe('wordCloud');
        expect(ns.interaction).toEqual({ elementHighlight: true });
        expect(ns.children[0].layout.fontSize).toEqual([8, 32]);
      });
      const rendered = words();
      expect(rendered.map(d => d.text).sort()).toEqual(['China1', 'China2', 'China3', 'China4', 'China5', 'China6']);
      expect(rendered.map(d => d.fontSize).sort((a, b) => a - b)).toEqual([8, 12, 17, 22, 27, 32]);
    });

    it('data-only change keeps feeding the wordCloud mark ', async () => {
      expect(markSpec().data.length).toBe(6);
      const changeData = vi.spyOn(page.chart, 'changeData');
      page.newData([
        { name: 'A', value: 1 },
        { name: 'B', value: 2 },
        { name: 'C', value: 3 }
      ]);
      page.dc();
      await vi.waitFor(() => {
        expect(changeData).toHaveBeenCalledTimes(1);
        expect((vi.mocked(changeData).mock.lastCall![0] as unknown[]).length).toBe(3);
        expect(markSpec().data.length).toBe(3);
        const rendered = words();
        expect(rendered.map(d => d.text).sort()).toEqual(['A', 'B', 'C']);
        expect(rendered.map(d => d.fontSize).sort((a, b) => a - b)).toEqual([8, 20, 32]);
      });
      expect(Object.keys(page.context.data()[0]).sort()).toEqual(['name', 'value']);
    });
  });

  it('#delay', async () => checkDelay(TestComponent));
});

@Component({
  template: ` <g2-tag-cloud #comp height="200" width="200" [data]="data()" [delay]="delay()" /> `,
  imports: [G2TagCloudComponent]
})
class TestComponent {
  readonly comp = viewChild.required<G2TagCloudComponent>('comp');
  readonly data = signal<G2TagCloudData[]>([
    { name: 'China1', value: 1 },
    { name: 'China2', value: 2 },
    { name: 'China3', value: 3 },
    { name: 'China4', value: 4 },
    { name: 'China5', value: 5 },
    { name: 'China6', value: 6 }
  ]);
  readonly delay = signal(0);
}
