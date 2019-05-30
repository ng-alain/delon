import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { checkDelay, PageG2, PageG2DataCount, PageG2Height } from '@delon/testing';
import { G2BarComponent } from './bar.component';
import { G2BarModule } from './bar.module';

describe('chart: bar', () => {
  let page: PageG2<TestComponent>;

  describe('', () => {
    beforeEach(fakeAsync(() => {
      page = new PageG2<TestComponent>().makeModule(G2BarModule, TestComponent);
    }));

    afterEach(() => page.context.comp.ngOnDestroy());

    it('should be working', () => {
      page.newData([{ x: `1月`, y: 10 }]).isYScalesCount(1);
    });

    describe('#title', () => {
      it('with null', () => {
        page.context.title = null;
        page.context.height = 100;
        page.dc().checkOptions('height', 100);
      });
      it('with string', () => {
        page.context.height = 100;
        page
          .dc()
          .isText('h4', page.context.comp.title as string)
          // 41 is TITLE_HEIGHT value
          .checkOptions('height', 100 - 41);
      });
      it('with template', () => {
        page.context.title = page.context.titleTpl;
        page.dc().isExists('#titleTpl');
      });
    });

    it('#color', () => {
      const color = '#f50';
      page.context.color = color;
      page.dc();
      page.checkAttrOptions('geoms', 'color', color);
    });

    it('#padding', () => {
      const padding = [15];
      page.context.padding = padding;
      page.dc();
      page.checkOptions('padding', padding);
    });

    it('should be update label when window resize and autoLabel is true', fakeAsync(() => {
      page.context.autoLabel = true;
      page.dc();
      spyOn(page.chart, 'repaint');
      window.dispatchEvent(new Event('resize'));
      page.end();
      expect(page.chart.repaint).toHaveBeenCalled();
    }));

    it('tooltip', () => page.checkTooltip('1月', { x: 50, y: 50 }));
  });

  it('#delay', fakeAsync(() => checkDelay(G2BarModule, TestComponent)));
});

@Component({
  template: `
    <g2-bar
      style="display: block;"
      #comp
      [delay]="delay"
      [height]="height"
      [title]="title"
      [color]="color"
      [padding]="padding"
      [data]="data"
      [autoLabel]="autoLabel"
    ></g2-bar>
    <ng-template #titleTpl><p id="titleTpl">titleTpl</p></ng-template>
  `,
})
class TestComponent implements OnInit {
  @ViewChild('comp') comp: G2BarComponent;
  data: any[] = [];
  delay = 0;
  @ViewChild('titleTpl') titleTpl: TemplateRef<void>;
  title: string | TemplateRef<void> | null = 'title';
  height = PageG2Height;
  padding: number[];
  autoLabel = false;
  color = 'rgba(24, 144, 255, 0.85)';
  ngOnInit(): void {
    for (let i = 0; i < PageG2DataCount; i += 1) {
      this.data.push({
        x: `${i + 1}月`,
        y: Math.floor(Math.random() * 1000) + 200,
      });
    }
  }
}
