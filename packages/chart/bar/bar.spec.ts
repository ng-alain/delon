import { Component, OnInit, signal, TemplateRef, ViewChild } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';

import { checkDelay, PageG2, PageG2DataCount, PageG2Height } from '@delon/testing';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { G2BarComponent, G2BarData } from './bar.component';

describe('chart: bar', () => {
  let page: PageG2<TestComponent>;

  describe('', () => {
    beforeEach(fakeAsync(() => {
      page = new PageG2<TestComponent>().genComp(TestComponent, true);
    }));

    it('should be working', () => {
      page.newData([{ x: `1月`, y: 10 }]).isYScalesCount(1);
    });

    describe('#title', () => {
      it('with null', () => {
        page.context.title.set(null);
        page.context.height.set(100);
        page.dc();
        page.checkOptions('height', 59);
      });
      it('with string', () => {
        page.context.height.set(100);
        page
          .dc()
          .isText('h4', page.context.comp.title as string)
          // 41 is TITLE_HEIGHT value
          .checkOptions('height', 100 - 41);
      });
      it('with template', () => {
        page.context.title.set(page.context.titleTpl);
        page.dc().isExists('#titleTpl');
      });
    });

    it('#color', () => {
      const color = '#f50';
      page.context.color.set(color);
      page.dc();
      expect((page.chart.geometries[0] as NzSafeAny).attributeOption.color.callback(1, 1)).toBe(color);
    });

    it('#padding', () => {
      const padding = [15];
      page.context.padding.set(padding);
      page.dc();
      page.checkOptions('padding', padding);
    });

    it('should be update label when window resize and autoLabel is true', fakeAsync(() => {
      page.context.autoLabel.set(true);
      page.dc();
      spyOn(page.chart, 'render');
      window.dispatchEvent(new Event('resize'));
      page.end();
      expect(page.chart.render).toHaveBeenCalled();
    }));

    it('tooltip', () => page.checkTooltip('1月'));
  });

  it('#delay', fakeAsync(() => checkDelay(TestComponent)));
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
class TestComponent implements OnInit {
  @ViewChild('comp', { static: true }) comp!: G2BarComponent;
  readonly data = signal<G2BarData[]>([]);
  readonly delay = signal(0);
  @ViewChild('titleTpl', { static: true }) titleTpl!: TemplateRef<void>;
  readonly title = signal<string | TemplateRef<void> | null>('title');
  readonly height = signal(PageG2Height);
  readonly padding = signal<number[] | undefined>(undefined);
  readonly autoLabel = signal(false);
  readonly color = signal('rgba(24, 144, 255, 0.85)');
  clickItem(): void {}
  ngOnInit(): void {
    for (let i = 0; i < PageG2DataCount; i += 1) {
      this.data.update(d => [
        ...d,
        {
          x: `${i + 1}月`,
          y: i === 0 ? 10 : Math.floor(Math.random() * 1000) + 200
        }
      ]);
    }
  }
}
