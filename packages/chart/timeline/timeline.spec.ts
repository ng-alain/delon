import { Component, signal, viewChild } from '@angular/core';

import { checkDelay, PageG2 } from '@delon/testing';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { G2TimelineComponent, G2TimelineData, G2TimelineMap } from './timeline.component';

describe('chart: timeline', () => {
  describe('', () => {
    let page: PageG2<TestComponent>;

    beforeEach(async () => {
      page = new PageG2<TestComponent>().genComp(TestComponent, true);
      await page.ready();
    });

    const componentOf = (type: string): NzSafeAny =>
      ((page.chart as NzSafeAny).getView().components as NzSafeAny[]).find(c => c.type === type);

    const sliderEls = (): NzSafeAny[] => {
      const doc = (page.chart as NzSafeAny).getContext().canvas.document as NzSafeAny;
      return (doc.getElementsByClassName?.('slider') ?? []) as NzSafeAny[];
    };

    const lineMarkState = (): NzSafeAny => {
      const view = (page.chart as NzSafeAny).getView();
      return [...(view.markState as Map<NzSafeAny, NzSafeAny>).entries()].find(
        ([m]: [NzSafeAny, NzSafeAny]) => m.type === 'line'
      )?.[0];
    };

    it('should be working', async () => {
      page.context.position.set('left');
      page.dc();
      await page.ready();
      page.expectSpec(s => {
        const ns = s as NzSafeAny;
        expect(ns.slider).not.toBeUndefined();
        expect(ns.legend.color.position).toBe('left');
      });
      // `getView()` 读的是上一次 render 完成后的描述符，必须等渲染 settle
      await new Promise(resolve => setTimeout(resolve, 700));
      expect(componentOf('legendCategory').position).toBe('left');
    });

    it('should be disabled slider', async () => {
      page.context.slider.set(false);
      page.dc();
      await page.ready();
      page.expectSpec(s => expect((s as NzSafeAny).slider).toBe(false));
      await new Promise(resolve => setTimeout(resolve, 700));
      expect(componentOf('sliderX')).toBeUndefined();
      expect(sliderEls().length).toBe(0);
    });

    it('should be change title count', async () => {
      page.context.titleMap.set({ y1: '客流量', y2: '支付笔数', y3: 'Y3' });
      page.context.colorMap.set({ y1: '#1890FF', y2: '#2FC25B', y3: '#f50' });
      page.context.data.set([
        { time: new Date(2024, 0, 1).getTime(), y1: 1, y2: 2, y3: 3 },
        { time: new Date(2024, 0, 2).getTime(), y1: 10, y2: 20, y3: 30 }
      ]);
      page.context.maxAxis.set(3);
      page.dc();
      await page.ready();
      page.expectSpec(s => {
        const ns = s as NzSafeAny;
        expect(ns.children.length).toBe(1);
        expect(ns.children[0].type).toBe('line');
        expect(ns.scale.color.domain).toEqual(['客流量', '支付笔数', 'Y3']);
        expect(ns.scale.color.domain.length).toBe(page.context.maxAxis());
        expect(ns.data.length).toBe(6);
      });
    });

    it('should pin the key v5 spec fields ', async () => {
      await new Promise(resolve => setTimeout(resolve, 700));
      page.expectSpec(spec => {
        const ns = spec as NzSafeAny;
        expect(ns.legend.color.position).toBe('top');
        expect(ns.slider.x.values).toEqual([0, 1]);
        expect(ns.slider.x.labelFormatter).toEqual(jasmine.any(Function));
        expect(ns.children.length).toBe(1);
        expect(ns.scale.color.domain).toEqual(['客流量', '支付笔数']);
        expect(ns.scale.color.range).toEqual(['#1890FF', '#2FC25B']);
        expect(ns.axis).toEqual({ x: { title: false, size: 20 }, y: { title: false } });
        expect(ns.data.length).toBe(18);
        expect(Object.keys(ns.data[0]).sort()).toEqual(['series', 'time', 'value']);
        expect(ns.interaction).toEqual({ tooltip: { crosshairs: true }, legendFilter: true });
        expect(ns.tooltip.title).toBe(false);
      });
      const slider = componentOf('sliderX');
      expect(slider.values).toEqual([0, 1]);
      expect(slider.labelFormatter).toEqual(jasmine.any(Function));
      expect(sliderEls().length).toBe(1);
      expect(componentOf('legendCategory').position).toBe('top');
      const yDomain = (page.chart as NzSafeAny).getScale().y.getOptions().domain;
      expect(yDomain[0]).toBe(0);
      expect(yDomain[1]).toBeGreaterThan(0);
      expect(lineMarkState().data.length).toBe(18);
      expect(lineMarkState().data[0].value).toBeDefined();
    });

    it('data-only change must push the folded long table to the marks ', async () => {
      page.expectSpec(s => expect((s as NzSafeAny).data.length).toBe(18));
      const changeData = spyOn(page.chart, 'changeData').and.callThrough();
      const rows: G2TimelineData[] = [
        { time: new Date(2024, 0, 1).getTime(), y1: 10, y2: 20 },
        { time: new Date(2024, 0, 2).getTime(), y1: 30, y2: 40 },
        { time: new Date(2024, 0, 3).getTime(), y1: 50, y2: 60 }
      ];
      page.newData(rows);
      page.dc();
      await new Promise(resolve => setTimeout(resolve, 700));
      expect(changeData).toHaveBeenCalledTimes(1);
      const arg = changeData.calls.mostRecent().args[0] as NzSafeAny[];
      expect(arg.length).toBe(6);
      expect(Object.keys(arg[0]).sort()).toEqual(['series', 'time', 'value']);
      expect(arg.map(d => d['series']).filter((v, i, a) => a.indexOf(v) === i).length).toBe(2);
      expect(page.context.data().length).toBe(3);
      expect(lineMarkState().data.length).toBe(6);
      expect(lineMarkState().data[0].value).toBeDefined();
      expect((page.chart as NzSafeAny).getScale().color.getOptions().domain).toEqual(['客流量', '支付笔数']);
    });
  });

  it('#delay', async () => checkDelay(TestComponent));
});

@Component({
  template: `
    <g2-timeline
      #comp
      [title]="title"
      [titleMap]="titleMap()"
      [colorMap]="colorMap()"
      [mask]="mask"
      [maskSlider]="maskSlider"
      [maxAxis]="maxAxis()"
      [position]="position()"
      [borderWidth]="borderWidth"
      [data]="data()"
      [slider]="slider()"
      [delay]="delay()"
    />
  `,
  imports: [G2TimelineComponent]
})
class TestComponent {
  readonly comp = viewChild.required<G2TimelineComponent>('comp');
  title = 'title';
  readonly titleMap = signal<G2TimelineMap>({ y1: '客流量', y2: '支付笔数' });
  readonly colorMap = signal<G2TimelineMap>({ y1: '#1890FF', y2: '#2FC25B' });
  mask: string = 'HH:mm';
  maskSlider: string = 'HH:mm';
  readonly maxAxis = signal(2);
  readonly position = signal<'top' | 'right' | 'bottom' | 'left'>('top');
  borderWidth = 2;
  readonly slider = signal(true);
  readonly data = signal<G2TimelineData[]>(
    new Array(9).fill({}).map((_v, i) => ({
      time: new Date().getTime() + 1000 * 60 * 30 * i,
      y1: Math.floor(Math.random() * 100) + 1000,
      y2: Math.floor(Math.random() * 100) + 10
    }))
  );
  readonly delay = signal(0);
}
