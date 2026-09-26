import { Component, signal, viewChild } from '@angular/core';

import { checkDelay, PageG2 } from '@delon/testing';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { G2RadarComponent, G2RadarData } from './radar.component';

describe('chart: radar', () => {
  describe('defualt', () => {
    let page: PageG2<TestComponent>;

    beforeEach(async () => {
      page = new PageG2<TestComponent>().genComp(TestComponent, true);
      await page.ready();
    });

    it('should be working', () => {
      page.isCanvas().isExists('.g2-radar__legend');
      page.context.hasLegend.set(false);
      page.dc().isExists('.g2-radar__legend', false);
    });

    it('should be hide item via click it', () => {
      expect(page.context.comp().legendData()[0].checked).toBe(true);
      page.getEl('.g2-radar__legend-item').click();
      page.dc();
      expect(page.context.comp().legendData()[0].checked).toBe(false);
    });

    it('should pin the key v5 spec fields ', async () => {
      await vi.waitFor(() => {
        page.expectSpec(spec => {
          const ns = spec as NzSafeAny;
          expect(ns.coordinate.type).toBe('polar');
          expect(ns.axis.x.line).toBe(false);
          expect(ns.legend).toBe(false);
          expect(ns.children.length).toBe(2);
          expect(ns.children.map((c: NzSafeAny) => c.type)).toEqual(['line', 'point']);
          expect(ns.data.length).toBe(1);
        });
        const coordinate = (page.chart as NzSafeAny).getCoordinate();
        expect((coordinate.getOptions().transformations as string[][]).map(t => t[0])).toContain('polar');
        const doc = (page.chart as NzSafeAny).getContext().canvas.document as NzSafeAny;
        const axisLines = (doc.getElementsByTagName('line') as NzSafeAny[]).filter(e =>
          String(e.className).includes('axis-line')
        );
        expect(axisLines.length).toBe(1);
        expect(axisLines[0].attributes.opacity).toBe(0);
        const gridLines = (doc.getElementsByTagName('path') as NzSafeAny[]).filter(e =>
          String(e.className).includes('grid-line')
        );
        expect(gridLines.length).toBeGreaterThan(0);
        const axisX = ((page.chart as NzSafeAny).getView().components as NzSafeAny[]).find(c => c.type === 'axisArc');
        expect(axisX).toBeDefined();
        expect(axisX.line).toBe(false);
        expect(axisX.labelSpacing).toBe(8);
      });
    });

    it('data change must push the projected rows to marks and rebuild the legend ', async () => {
      page.isDataCount(1);
      expect(page.fixture!.componentInstance.legendData().map(i => i.name)).toEqual(['n']);
      const changeData = vi.spyOn(page.chart, 'changeData');
      page.newData([
        { name: 'n', label: 'l', value: 10 },
        { name: 'm', label: 'l', value: 20 }
      ]);
      page.dc();
      await vi.waitFor(() => {
        expect(changeData).toHaveBeenCalledTimes(1);
        // 图例里还没有新序列 'm'，投影只有 1 行（返回原始输入会是 2 行）
        expect((vi.mocked(changeData).mock.lastCall![0] as unknown[]).length).toBe(1);
        page.isDataCount(1);
        expect((page.chart as NzSafeAny).getScale().color.getOptions().domain).toEqual(['n']);
      });
      await vi.waitFor(() => expect(page.fixture!.componentInstance.legendData().map(i => i.name)).toEqual(['n', 'm']));
      const legendData = page.fixture!.componentInstance.legendData();
      expect(legendData.map(i => i.value)).toEqual([10, 20]);
      expect(legendData.every(i => i.checked !== false)).toBe(true);
    });
  });

  it('#delay', async () => checkDelay(TestComponent));
});

@Component({
  template: `
    <g2-radar
      #comp
      [hasLegend]="hasLegend()"
      [title]="title"
      [tickCount]="tickCount"
      [data]="data()"
      [delay]="delay()"
    />
  `,
  imports: [G2RadarComponent]
})
class TestComponent {
  readonly comp = viewChild.required<G2RadarComponent>('comp');
  title = 'title';
  readonly hasLegend = signal(true);
  tickCount = 4;
  readonly data = signal<G2RadarData[]>([
    {
      name: 'n',
      label: 'l',
      value: 10
    }
  ]);
  readonly delay = signal(0);
  legendData(): NzSafeAny[] {
    return this.comp().legendData();
  }
}
