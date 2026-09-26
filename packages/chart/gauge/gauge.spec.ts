import { Component, signal, viewChild } from '@angular/core';

import { checkDelay, PageG2 } from '@delon/testing';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { G2GaugeComponent } from './gauge.component';

describe('chart: gauge', () => {
  let page: PageG2<TestComponent>;

  describe('', () => {
    beforeEach(async () => {
      page = new PageG2<TestComponent>().genComp(TestComponent, true);
      await page.ready();
    });

    const markSpec = (): NzSafeAny => (page.chart.options() as NzSafeAny).children[0];

    it('should be working', async () => {
      expect(markSpec().data.value.target).toBe(10);
      page.context.percent.set(30);
      page.dc();
      await page.ready();
      expect(markSpec().data.value.target).toBe(30);
    });

    it('should pin the key v5 spec fields ', async () => {
      await vi.waitFor(() => {
        expect(texts()).toContain('0%');
        expect(texts()).toContain('100%');
      });
      const authored = (page.comp as NzSafeAny).buildSpec() as NzSafeAny;
      expect(authored.type).toBe('view');
      expect(authored.children.length).toBe(1);
      const mark = authored.children[0];
      expect(mark.type).toBe('gauge');
      expect(mark.data.value).toEqual({ target: 10, total: 100, name: '核销率' });
      expect(mark.scale.color.range).toEqual(['#2f9cff', '#f0f2f5']);
      expect(mark.scale.y).toBeUndefined();
      expect(mark.axis.y.labelSpacing).toBe(-30);
      expect(mark.axis.y.labelAlign).toBe('horizontal');
      expect(mark.axis.y.labelFormatter).toEqual(expect.any(Function));
      expect(authored.legend).toBe(false);
      expect(authored.tooltip).toBe(false);
      expect(mark.style.textContent).toEqual(expect.any(Function));
      expect(mark.style.pinR).toBe(4);
      page.expectSpec(spec => {
        const ns = spec as NzSafeAny;
        expect(ns.type).toBe('view');
        expect(ns.children.length).toBe(1);
        expect(ns.children[0].type).toBe('gauge');
        expect(ns.children[0].data.value.target).toBe(10);
        expect(ns.children[0].scale.color.range).toEqual(['#2f9cff', '#f0f2f5']);
        expect(ns.children[0].axis.y.labelFormatter).toEqual(expect.any(Function));
      });
      const yScale = (page.chart as NzSafeAny).getScale().y.getOptions();
      expect(yScale.domain).toEqual([0, 100]);
      const labels = texts();
      expect(labels).toContain('0%');
      expect(labels).toContain('100%');
      expect(labels.some(t => t.includes('10 %'))).toBe(false);
      const center = page.fixture!.nativeElement.querySelector('.g2-gauge__center') as NzSafeAny;
      expect(center == null ? '' : center.textContent.replace(/\s+/g, '')).toBe('核销率10%');
    });

    it('data change must repaint the spec and take effect ', async () => {
      const changeData = vi.spyOn(page.chart, 'changeData');
      const render = vi.spyOn(page.chart, 'render');
      page.context.percent.set(30);
      page.dc();
      await vi.waitFor(() => {
        expect(render).toHaveBeenCalled();
        expect(markSpec().data.value.target).toBe(30);
        const center = page.fixture!.nativeElement.querySelector('.g2-gauge__center') as NzSafeAny;
        expect(center == null ? '' : center.textContent.replace(/\s+/g, '')).toBe('核销率30%');
      });
      expect(changeData).toHaveBeenCalledTimes(0);
      expect((page.chart as NzSafeAny).getScale().y.getOptions().domain).toEqual([0, 100]);
    });
  });

  it('#delay', async () => checkDelay(TestComponent));

  function texts(): string[] {
    const doc = (page.chart as NzSafeAny).getContext().canvas.document as NzSafeAny;
    return (doc.getElementsByTagName('text') as NzSafeAny[]).map(e => String(e.attributes?.text));
  }
});

@Component({
  template: `
    <g2-gauge #comp title="核销率" height="164" [format]="format" [percent]="percent()" [delay]="delay()" />
  `,
  imports: [G2GaugeComponent]
})
class TestComponent {
  readonly comp = viewChild.required<G2GaugeComponent>('comp');
  readonly percent = signal(10);
  readonly delay = signal(0);
  readonly format = (text: string): string => `${text}%`;
}
