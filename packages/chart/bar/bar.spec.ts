import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { PageG2 } from '@delon/testing';
import { G2BarComponent } from './bar.component';
import { G2BarModule } from './bar.module';

const COUNT = 2;

describe('chart: bar', () => {
  let page: PageG2<TestComponent>;

  beforeEach(fakeAsync(() => {
    page = new PageG2<TestComponent>().makeModule(G2BarModule, TestComponent);
  }));

  afterEach(() => page.context.comp.ngOnDestroy());

  it('should be working', () => {
    page
      .newData([{ x: `1月`, y: 10 }])
      .isYScalesCount(1);
  });

  describe('#title', () => {
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

});

@Component({
  template: `
    <g2-bar #comp
        [height]="height"
        [title]="title"
        [color]="color"
        [padding]="padding"
        [data]="data"
        [autoLabel]="autoLabel"></g2-bar>
    <ng-template #titleTpl><p id="titleTpl">titleTpl</p></ng-template>
    `,
})
class TestComponent implements OnInit {
  @ViewChild('comp') comp: G2BarComponent;
  // tslint:disable-next-line:no-any
  data: any[] = [];
  ngOnInit(): void {
    for (let i = 0; i < COUNT; i += 1) {
      this.data.push({
        x: `${i + 1}月`,
        y: Math.floor(Math.random() * 1000) + 200,
      });
    }
  }
  @ViewChild('titleTpl') titleTpl: TemplateRef<void>;
  title: string | TemplateRef<void> = 'title';
  height = 0;
  padding: number[];
  autoLabel = true;
  color = 'rgba(24, 144, 255, 0.85)';
}
