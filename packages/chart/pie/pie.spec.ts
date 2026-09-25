import { Component, signal, viewChild } from '@angular/core';

import { checkDelay, PageG2 } from '@delon/testing';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { G2PieComponent, G2PieRatio } from './pie.component';

const FULL_DATA: NzSafeAny[] = [
  { x: '1', y: 50 },
  { x: '2', y: 20 },
  { x: '3', y: 30 }
];

/** 按元素属性读取 `markType`（G2 写成属性而非样式属性） */
function elementsOfType(chart: NzSafeAny, markType: string): NzSafeAny[] {
  const doc = chart.getContext().canvas.document as NzSafeAny;
  const found: NzSafeAny[] = [];
  const walk = (node: NzSafeAny | null): void => {
    if (!node) return;
    if (node.markType === markType) found.push(node);
    (node.childNodes ?? []).forEach((child: NzSafeAny) => walk(child));
  };
  walk(doc.documentElement);
  return found;
}

describe('chart: pie', () => {
  describe('[mini]', () => {
    let page: PageG2<TestMiniComponent>;

    beforeEach(() => {
      page = new PageG2<TestMiniComponent>().genComp(TestMiniComponent, false);
      page.context.percent.set(10);
    });

    it('should be working', async () => {
      page.dcFirst();
      await page.ready();
      page
        .isText('.g2-pie__total-title', page.context.subTitle())
        .isText('.g2-pie__total-stat', page.context.total())
        .isDataCount(2);
    });

    it('should be using default color', async () => {
      // ratio.color 是空串（非 nullish），占比段颜色回退到组件 color
      page.dcFirst();
      await page.ready();
      page.expectSpec(spec => {
        // color 是字段名，颜色由 scale.color.range 决定
        const child = (spec as NzSafeAny).children[0];
        expect(child.encode.color).toBe('x');
        expect(child.scale.color.range).toEqual(['rgba(24, 144, 255, 0.85)', '#F0F2F5']);
      });
      page.context.ratio.set({ text: '占比', inverse: '反比', color: '#f50', inverseColor: '#F0F2F5' });
      page.dc();
      // 变更会重下 spec，需真实等待 chart.render() settle
      await new Promise(resolve => setTimeout(resolve, 700));
      page.expectSpec(spec => {
        const child = (spec as NzSafeAny).children[0];
        expect(child.encode.color).toBe('x');
        expect(child.scale.color.range).toEqual(['#f50', '#F0F2F5']);
      });
    });

    it('should disable tooltip in percent mode', async () => {
      // tooltip 必须落在 mark 级才生效
      page.dcFirst();
      await page.ready();
      page.expectSpec(spec => {
        const ns = spec as NzSafeAny;
        expect(ns.tooltip).toBe(false);
        expect(ns.children[0].tooltip).toBe(false);
      });
      const items = elementsOfType(page.chart, 'interval').flatMap(el => el.__data__?.items ?? []);
      expect(items.filter(Boolean)).toEqual([]);
    });
  });

  describe('[full]', () => {
    let page: PageG2<TestFullComponent>;

    beforeEach(async () => {
      page = new PageG2<TestFullComponent>().genComp(TestFullComponent, false);
      page.context.data.set(FULL_DATA);
      page.dcFirst();
      await page.ready();
    });

    it('should be working', () => {
      page.isExists('.g2-pie__legend').isDataCount(3);
      expect(elementsOfType(page.chart, 'interval').length).toBe(3);
    });

    it('should pin the key v5 spec fields ', () => {
      page.expectSpec(spec => {
        const ns = spec as NzSafeAny;
        const child = ns.children[0];
        expect(ns.coordinate).toEqual({ type: 'theta', innerRadius: 0.75 });
        expect(ns.legend).toBe(false);
        expect(ns.axis).toBe(false);
        expect(ns.tooltip).toEqual({ title: false });
        expect(child.type).toBe('interval');
        expect(child.transform).toEqual([{ type: 'stackY' }]);
        expect(child.encode.y).toBe('y');
        expect(child.style).toEqual({ lineWidth: 0, stroke: '#fff' });
        // color 是字段名；未给 colors 时不设 range，由主题调色板分配
        expect(child.encode.color).toBe('x');
        expect(child.scale).toBeUndefined();
        expect(child.tooltip.title).toBeUndefined();
        expect(child.tooltip.items[0]({ x: 'a', percent: 1, y: 1 })).toEqual({ name: 'a', value: '100.00 %' });

        const scales = (page.chart as NzSafeAny).getScale();
        // axis/legend 为 false 时各通道的 guide 为 null
        expect(scales.x.getOptions().guide).toBeNull();
        expect(scales.y.getOptions().guide).toBeNull();
        expect(scales.color.getOptions().guide).toBeNull();
        // theta = Transpose + Polar；innerRadius 必须真的传进 polar 变换
        const coordinate = (page.chart as NzSafeAny).getCoordinate() as NzSafeAny;
        const transformations = (coordinate.getOptions().transformations as string[][]).map(t => t[0]);
        expect(transformations).toEqual([
          'transpose',
          'translate',
          'reflect.x',
          'translate',
          'translate',
          'reflect.y',
          'translate',
          'polar',
          'cartesian'
        ]);
        expect(coordinate.getOptions().transformations.find((t: string[]) => t[0] === 'polar')).toContain(0.75);
      });
      const rendered = elementsOfType(page.chart, 'interval')
        .map(el => el.__data__?.items?.[0])
        .filter(Boolean);
      expect(rendered.length).toBe(3);
      expect(rendered.find((d: NzSafeAny) => d.name === '1')?.value).toBe('50.00 %');
    });

    it('should be hide item via click it', () => {
      expect(page.context.comp().legendData()[0].checked).toBe(true);
      page.getEl('.g2-pie__legend-item').click();
      page.dc();
      expect(page.context.comp().legendData()[0].checked).toBe(false);
    });

    it('should filter out unchecked legend items', async () => {
      expect(page.context.comp().legendData().length).toBe(3);
      expect(elementsOfType(page.chart, 'interval').length).toBe(3);
      page.context.comp()._click(0);
      // 点击会重下 spec，需真实等待 chart.render() settle
      await new Promise(resolve => setTimeout(resolve, 700));
      page.isDataCount(2);
      expect(elementsOfType(page.chart, 'interval').length).toBe(2);
      page.expectSpec(spec => {
        expect(((spec as NzSafeAny).data as NzSafeAny[]).map(d => d.x)).toEqual(['2', '3']);
      });
    });

    it('data change should take the data-only path and rebuild legend ', async () => {
      await page.ready();
      page.isDataCount(3);
      expect(
        page.context
          .comp()
          .legendData()
          .map(w => w.x)
      ).toEqual(['1', '2', '3']);
      // 必须 spy 才能证明走的是 data-only 分支；callThrough 让 options() 真正更新
      const changeData = spyOn(page.chart, 'changeData').and.callThrough();
      page.newData([
        { x: 'a', y: 10 },
        { x: 'b', y: 30 }
      ]);
      page.dc();
      // 真实等待 changeData() settle；700ms 留 CI 余量
      await new Promise(resolve => setTimeout(resolve, 700));
      expect(changeData).toHaveBeenCalledTimes(1);
      expect((changeData.calls.mostRecent().args[0] as unknown[]).length).toBe(2);
      page.isDataCount(2);
      const legend = page.context.comp().legendData();
      expect(legend.map(w => w.x)).toEqual(['a', 'b']);
      expect(legend.map(w => w.percent)).toEqual(['25.00', '75.00']);
      expect(legend.map(w => w.y)).toEqual([10, 30]);
      expect(legend.every(w => w.checked === true)).toBe(true);
      expect(elementsOfType(page.chart, 'interval').length).toBe(2);
    });
  });

  describe('#tooltip', () => {
    let page: PageG2<TestFullComponent>;

    beforeEach(() => {
      page = new PageG2<TestFullComponent>().genComp(TestFullComponent, false);
      page.context.inner.set(0.1);
      page.context.data.set([{ x: '1', y: 100 }]);
    });

    it('should be working', async () => {
      page.context.hasLegend.set(false);
      page.dcFirst();
      await page.ready();
      page.expectSpec(spec => {
        const items = (spec as NzSafeAny).children[0].tooltip.items as Array<(d: NzSafeAny) => NzSafeAny>;
        expect(items[0]({ x: 'a', percent: 1, y: 1 })).toEqual({ name: 'a', value: '100.00 %' });
      });
    });

    it('should be original value when has has legend', async () => {
      page.context.hasLegend.set(true);
      page.dcFirst();
      await page.ready();
      page.expectSpec(spec => {
        const items = (spec as NzSafeAny).children[0].tooltip.items as Array<(d: NzSafeAny) => NzSafeAny>;
        expect(items[0]({ x: 'a', percent: 1, y: 1 })).toEqual({ name: 'a', value: '100.00 %' });
      });
    });
  });

  it('#delay', async () => checkDelay(TestFullComponent));
});

@Component({
  template: `
    <g2-pie
      #comp
      style="display: block;"
      [color]="color()"
      [subTitle]="subTitle()"
      [total]="total()"
      [height]="height()"
      [inner]="inner()"
      [padding]="padding()"
      [percent]="percent()"
      [lineWidth]="lineWidth()"
      [select]="select()"
      [colors]="colors()"
      [ratio]="ratio()"
    />
  `,
  imports: [G2PieComponent]
})
class TestMiniComponent {
  readonly comp = viewChild.required<G2PieComponent>('comp');
  // 宿主字段必须是 signal，否则 detectChanges 后变更写不进子组件 input()
  readonly color = signal('rgba(24, 144, 255, 0.85)');
  readonly subTitle = signal<string>('subTitle');
  readonly total = signal<string>('total');
  readonly height = signal(100);
  readonly inner = signal(0.75);
  readonly padding = signal<number[]>([12, 0, 12, 0]);
  readonly percent = signal<number | undefined>(undefined);
  readonly lineWidth = signal(0);
  readonly select = signal(true);
  readonly colors = signal<string[] | undefined>(undefined);
  readonly ratio = signal<G2PieRatio>({ text: '占比', inverse: '反比', color: '', inverseColor: '#F0F2F5' });
}

@Component({
  template: `
    <g2-pie
      #comp
      style="display: block; width: 200px;"
      [data]="data()"
      [color]="color()"
      [subTitle]="subTitle()"
      [total]="total()"
      [height]="height()"
      [hasLegend]="hasLegend()"
      [inner]="inner()"
      [padding]="padding()"
      [tooltip]="tooltip()"
      [lineWidth]="lineWidth()"
      [select]="select()"
      [colors]="colors()"
      [delay]="delay()"
    />
  `,
  imports: [G2PieComponent]
})
class TestFullComponent {
  readonly comp = viewChild.required<G2PieComponent>('comp');
  readonly data = signal<NzSafeAny[]>([]);
  readonly color = signal('rgba(24, 144, 255, 0.85)');
  readonly subTitle = signal<string>('subTitle');
  readonly total = signal<string>('total');
  readonly height = signal(200);
  readonly hasLegend = signal(true);
  readonly inner = signal(0.75);
  readonly padding = signal<number[]>([12, 0, 12, 0]);
  readonly tooltip = signal(true);
  readonly lineWidth = signal(0);
  readonly select = signal(true);
  readonly colors = signal<string[] | undefined>(undefined);
  readonly delay = signal(0);
}
