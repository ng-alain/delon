import { Component, signal, viewChild } from '@angular/core';

import { ChartEvent } from '@antv/g2';

import { checkDelay, PageG2 } from '@delon/testing';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { G2SingleBarComponent } from './single-bar.component';

/** 取 interval mark 的实测矩形；transpose 后屏幕高即条厚，markType 只能按元素属性读 */
function barBounds(chart: NzSafeAny): { width: number; height: number } {
  const doc = chart.getContext().canvas.document as NzSafeAny;
  const bar = (doc.getElementsByTagName('rect') as NzSafeAny[]).find(r => r.markType === 'interval');
  expect(bar).toBeDefined();
  const bounds = (bar as NzSafeAny).getRenderBounds();
  return { width: bounds.max[0] - bounds.min[0], height: bounds.max[1] - bounds.min[1] };
}

describe('chart: single-bar', () => {
  let page: PageG2<TestComponent>;

  describe('', () => {
    beforeEach(async () => {
      page = new PageG2<TestComponent>().genComp(TestComponent, true);
      await page.ready();
    });

    it('should be working', () => {
      // data 挂在 mark 上而非 spec 顶层，不能用夹具的 isDataCount
      page.expectSpec(spec => {
        const ns = spec as NzSafeAny;
        expect(ns.children.length).toBe(1);
        expect(ns.children[0].data.length).toBe(1);
      });
    });

    it('should pin the key v5 spec fields ', () => {
      page.expectSpec(spec => {
        const ns = spec as NzSafeAny;
        const child = ns.children[0];
        expect(ns.coordinate).toEqual({ transform: [{ type: 'transpose' }] });
        const transformations = ((page.chart as NzSafeAny).getCoordinate() as NzSafeAny).getOptions()
          .transformations as string[][];
        expect(transformations.map(t => t[0])).toEqual([
          'transpose',
          'translate',
          'reflect.x',
          'translate',
          'cartesian'
        ]);
        expect(child.scale).toEqual({ y: { domain: [0, 100] } });
        const yScale = (page.chart as NzSafeAny).getScale().y as NzSafeAny;
        expect(yScale.getOptions().domain).toEqual([0, 100]);
        expect(child.legend).toBe(false);
        expect(child.axis).toBe(false);
        expect(child.tooltip).toBe(false);
        expect(child.data).toEqual([{ value: 10 }]);
        expect(child.encode.y).toBe('value');
        expect(child.encode.size).toBeUndefined();
        expect(child.style).toEqual({ minWidth: 30, maxWidth: 30 });
        expect(Math.round(barBounds(page.chart as NzSafeAny).height)).toBe(30);
      });
    });

    it('should be minus value', async () => {
      page.context.min.set(-100);
      page.context.value.set(-10);
      page.context.line.set(true);
      page.dc();
      await vi.waitFor(() => {
        const spec = page.chart.options() as NzSafeAny;
        expect(spec.children[0].data[0].value).toBe(-10);
        expect(((page.chart as NzSafeAny).getScale().y as NzSafeAny).getOptions().domain).toEqual([-100, 100]);
        expect(spec.children.length).toBe(2);
        expect(spec.children[1].type).toBe('lineY');
        expect(spec.children[1].data).toEqual([0]);
      });
    });

    it('value change should take the data-only changeData path', async () => {
      const changeData = vi.spyOn(page.chart, 'changeData');
      page.context.value.set(-10);
      page.dc();
      await vi.waitFor(() => {
        expect(changeData).toHaveBeenCalledTimes(1);
        expect(vi.mocked(changeData).mock.lastCall![0]).toEqual([{ value: -10 }]);
        page.expectSpec(spec => {
          const ns = spec as NzSafeAny;
          expect(ns.children[0].data[0].value).toBe(-10);
          expect((((page.chart as NzSafeAny).getScale() as NzSafeAny).y as NzSafeAny).getOptions().domain).toEqual([
            0, 100
          ]);
        });
      });
    });

    it('bar thickness should equal barSize() px (C1 probe)', async () => {
      const first = barBounds(page.chart as NzSafeAny);
      expect(Math.round(first.height)).toBe(30);
      expect(first.width).toBeGreaterThan(first.height);
      // 必须等 `afterrender`（G2 在动画 finished 之后才 emit）再读，否则读到的是动画中间帧的几何量
      const rendered = new Promise<void>(resolve => {
        page.chart.on(ChartEvent.AFTER_RENDER, () => resolve());
      });
      page.context.barSize.set(10);
      page.dc();
      await rendered;
      const second = barBounds(page.chart as NzSafeAny);
      expect(Math.round(second.height)).toBe(10);
      expect(second.width).toBeGreaterThan(second.height);
    });

    it('value change with line=true must repaint so lineY keeps its data ', async () => {
      page.context.line.set(true);
      page.dc();
      await vi.waitFor(() => {
        const first = page.chart.options() as NzSafeAny;
        expect(first.children.length).toBe(2);
        expect(first.children[1].type).toBe('lineY');
        expect(first.children[1].data).toEqual([50]);
      });
      const changeData = vi.spyOn(page.chart, 'changeData');
      const render = vi.spyOn(page.chart, 'render');
      page.context.value.set(-10);
      page.dc();
      await vi.waitFor(() => {
        expect(render).toHaveBeenCalled();
        const spec = page.chart.options() as NzSafeAny;
        expect(spec.children[0].data[0].value).toBe(-10);
        expect(spec.children[1].data).toEqual([50]);
      });
      // 存在兄弟 mark ⇒ isDataOnly() 必须为 false，否则 changeData() 会把 lineY 的定位 data 覆盖掉
      expect(changeData).toHaveBeenCalledTimes(0);
    });
  });

  it('#delay', async () => checkDelay(TestComponent));
});

@Component({
  template: `
    <g2-single-bar
      #comp
      [plusColor]="plusColor()"
      [minusColor]="minusColor()"
      [height]="height()"
      [barSize]="barSize()"
      [min]="min()"
      [max]="max()"
      [value]="value()"
      [line]="line()"
      [format]="format()"
      [padding]="padding()"
      [textStyle]="textStyle()"
      [delay]="delay()"
    />
  `,
  imports: [G2SingleBarComponent]
})
class TestComponent {
  readonly comp = viewChild.required<G2SingleBarComponent>('comp');
  // 会被用例变更的宿主字段必须是 signal，普通字段在首次 CD 之后不会被重新写入输入
  readonly plusColor = signal('#40a9ff');
  readonly minusColor = signal('#ff4d4f');
  readonly height = signal(60);
  readonly barSize = signal(30);
  readonly min = signal(0);
  readonly max = signal(100);
  readonly value = signal(10);
  readonly line = signal(false);
  readonly format = signal<((value: number) => string) | undefined>(undefined);
  readonly padding = signal<NzSafeAny>(0);
  readonly textStyle = signal<NzSafeAny>({ fontSize: 12, color: '#595959' });
  readonly delay = signal(0);
}
