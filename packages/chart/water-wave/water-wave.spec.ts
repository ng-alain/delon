import { Component, signal, viewChild } from '@angular/core';

import { checkDelay, PageG2 } from '@delon/testing';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { G2WaterWaveComponent } from './water-wave.component';

describe('chart: water-wave', () => {
  let page: PageG2<TestComponent>;

  describe('', () => {
    beforeEach(async () => {
      page = new PageG2<TestComponent>().genComp(TestComponent, true);
      await page.ready();
    });

    it('should be working', async () => {
      page.isCanvas();
      page.isText('.g2-water-wave__desc-title', page.context.title);
      expect(markSpec().type).toBe('liquid');
      expect(markSpec().data).toBe(0.1);
      expect(texts()).toContain('10 %');

      page.context.percent.set(34);
      page.dc();
      await vi.waitFor(() => {
        expect(markSpec().data).toBe(0.34);
        expect(texts()).toContain('34 %');
      });
    });

    it('should pin the key v5 spec fields', () => {
      const authored = (page.comp as NzSafeAny).buildSpec() as NzSafeAny;
      expect(authored.type).toBe('liquid');
      // 配色必须跟随 [color]；其余样式属调校值，只钉类型
      expect(authored.style.fill).toBe('#1890FF');
      expect(authored.style.stroke).toBe('#1890FF');
      expect(authored.style.waveLength).toEqual(expect.any(Number));
      expect(authored.style.outlineBorder).toEqual(expect.any(Number));
      expect(authored.style.outlineDistance).toEqual(expect.any(Number));
      expect(authored.style.contentText).toBe('10 %');
      expect(authored.style.contentFontSize).toEqual(expect.any(Number));
      expect(authored.style.contentFill).toEqual(expect.any(String));
      expect(authored.animate).toBeUndefined();
      expect((page.comp as NzSafeAny).size()).toBe(100);
      expect((page.comp as NzSafeAny).height).toBeUndefined();
      expect(authored.height).toBe(100);
      expect(authored.padding).toBe(8);
      expect(authored.interaction).toEqual({ tooltip: false });
      // 根 mark 归一后：view + 单个子 mark
      expect(spec().type).toBe('view');
      expect(spec().height).toBe(100);
      expect(spec().theme).toBeDefined();
      expect(spec().interaction).toEqual({ tooltip: false });
      expect(spec().children.length).toBe(1);
      expect(spec().children[0].type).toBe('liquid');
      expect(spec().children[0].data).toBe(0.1);
    });

    it('should clamp `[percent]` into [0, 1]', () => {
      const authored = (): NzSafeAny => (page.comp as NzSafeAny).buildSpec() as NzSafeAny;
      page.context.percent.set(150);
      page.dc();
      expect(authored().data).toBe(1);
      page.context.percent.set(-20);
      page.dc();
      expect(authored().data).toBe(0);
    });

    it('should apply `[padding]`（number 为四边同值，数组拆四向）', async () => {
      const authored = (): NzSafeAny => (page.comp as NzSafeAny).buildSpec() as NzSafeAny;
      page.context.padding.set(16);
      page.dc();
      expect(authored().padding).toBe(16);
      page.context.padding.set([1, 2, 3, 4]);
      page.dc();
      expect(authored()).toEqual(
        expect.objectContaining({ paddingTop: 1, paddingRight: 2, paddingBottom: 3, paddingLeft: 4 })
      );
      // 四向键必须真的留在运行时 spec 上
      await vi.waitFor(() => {
        expect(spec().paddingTop).toBe(1);
        expect(spec().paddingRight).toBe(2);
        expect(spec().paddingBottom).toBe(3);
        expect(spec().paddingLeft).toBe(4);
      });
    });

    it('should not show a tooltip on hover', async () => {
      const canvas = page.fixture!.nativeElement.querySelector('canvas') as HTMLCanvasElement;
      const rect = canvas.getBoundingClientRect();
      const base = {
        bubbles: true,
        cancelable: true,
        clientX: rect.left + rect.width / 2,
        clientY: rect.top + rect.height / 2,
        pointerType: 'mouse',
        isPrimary: true,
        pointerId: 1
      };
      vi.useFakeTimers();
      for (const type of ['pointerover', 'pointerenter', 'pointermove', 'mousemove']) {
        canvas.dispatchEvent(new PointerEvent(type, base));
      }
      await vi.advanceTimersByTimeAsync(300);
      const tip = page.fixture!.nativeElement.querySelector('.g2-tooltip') as HTMLElement | null;
      const visible = !!tip && (tip.style.visibility === 'visible' || getComputedStyle(tip).visibility === 'visible');
      expect(visible ? `tooltip: ${tip!.textContent}` : 'none').toBe('none');
      vi.useRealTimers();
    });

    it('should draw the wave, the ring and the built-in center text', () => {
      // 水波 + 白色间隔 + 圆环
      expect(paths().length).toBeGreaterThanOrEqual(3);
      expect(texts()).toContain('10 %');
    });

    it('should render the center text at the boundaries', async () => {
      page.context.percent.set(0);
      page.dc();
      await vi.waitFor(() => {
        expect(markSpec().data).toBe(0);
        expect(texts()).toContain('0 %');
      });

      page.context.percent.set(100);
      page.dc();
      await vi.waitFor(() => {
        expect(markSpec().data).toBe(1);
        expect(texts()).toContain('100 %');
      });
    });
  });

  it('#animate=false', async () => {
    const p = new PageG2<TestNoAnimateComponent>().genComp(TestNoAnimateComponent, true);
    await p.ready();
    expect(((p.comp as NzSafeAny).buildSpec() as NzSafeAny).animate).toBe(false);
    p.expectSpec(s => expect((s as NzSafeAny).children[0].animate).toBe(false));
  });

  it('#delay', async () => checkDelay(TestComponent));

  /** 运行时 `chart.options()` */
  function spec(): NzSafeAny {
    return page.chart.options() as NzSafeAny;
  }

  /** liquid mark 节点 */
  function markSpec(): NzSafeAny {
    return spec().children[0];
  }

  function texts(): string[] {
    return shapes('text').map(e => String(e.attributes?.text));
  }

  function paths(): NzSafeAny[] {
    return shapes('path');
  }

  function shapes(tag: string): NzSafeAny[] {
    const doc = (page.chart as NzSafeAny).getContext().canvas.document as NzSafeAny;
    return doc.getElementsByTagName(tag) as NzSafeAny[];
  }
});

@Component({
  template: `
    <g2-water-wave
      #comp
      [title]="title"
      [color]="color"
      [size]="size()"
      [percent]="percent()"
      [padding]="padding()"
      [delay]="delay()"
    />
  `,
  imports: [G2WaterWaveComponent]
})
class TestComponent {
  readonly comp = viewChild.required<G2WaterWaveComponent>('comp');
  title = 'title';
  color = '#1890FF';
  readonly size = signal(100);
  readonly percent = signal(10);
  readonly padding = signal<number | number[] | 'auto'>(8);
  readonly delay = signal(0);
}

@Component({
  template: `<g2-water-wave #comp [animate]="false" [percent]="10" />`,
  imports: [G2WaterWaveComponent]
})
class TestNoAnimateComponent {
  readonly comp = viewChild.required<G2WaterWaveComponent>('comp');
}
