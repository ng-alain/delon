import { Component, DebugElement, ViewChild } from '@angular/core';
import { inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { configureTestSuite, createTestContext } from '@delon/testing';
import { REP_MAX } from '@delon/theme';

import { SVContainerComponent } from './view-container.component';
import { SVComponent } from './view.component';
import { SVConfig } from './view.config';
import { SVModule } from './view.module';

const prefixCls = `.sv__`;

describe('abc: view', () => {
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;
  let page: PageObject;

  const moduleAction = () => {
    TestBed.configureTestingModule({
      imports: [SVModule],
      declarations: [TestComponent],
    });
  };

  function genModule(template?: string) {
    moduleAction();
    if (template) {
      TestBed.overrideTemplate(TestComponent, template);
    }
    ({ fixture, dl, context } = createTestContext(TestComponent));
    fixture.detectChanges();
    page = new PageObject();
  }

  describe('', () => {
    configureTestSuite(moduleAction);

    it('General Configuration', inject([SVConfig], (cog: SVConfig) => {
      cog.gutter = 24;
      ({ fixture, dl, context } = createTestContext(TestComponent));
      expect(context.svComp.col).toBe(3);
      expect(context.svComp.gutter).toBe(24);
    }));

    describe('[property]', () => {
      beforeEach(() => {
        ({ fixture, dl, context } = createTestContext(TestComponent));
        fixture.detectChanges();
        page = new PageObject();
      });
      describe('#wrap', () => {
        it('#title', () => {
          context.parent_title = `parent_title`;
          fixture.detectChanges();
          expect(page.getEl(prefixCls + 'title').textContent).toContain(`parent_title`);
        });
        it('#size', () => {
          context.parent_size = 'large';
          fixture.detectChanges();
          page.expect(prefixCls + 'large');
          context.parent_size = 'small';
          fixture.detectChanges();
          page.expect(prefixCls + 'small');
        });
        it('#layout', () => {
          context.parent_layout = 'horizontal';
          fixture.detectChanges();
          page.expect(prefixCls + 'horizontal');
          context.parent_layout = 'vertical';
          fixture.detectChanges();
          page.expect(prefixCls + 'vertical');
        });
        it('#gutter', () => {
          const gutter = 24;
          const halfGutter = gutter / 2;
          context.parent_gutter = gutter;
          fixture.detectChanges();
          expect(page.getEl('.ant-row').style.marginLeft).toBe(`-${halfGutter}px`);
          expect(page.getEl('.ant-row').style.marginRight).toBe(`-${halfGutter}px`);
          const itemCls = prefixCls + 'item';
          expect(page.getEl(itemCls).style.paddingLeft).toBe(`${halfGutter}px`);
          expect(page.getEl(itemCls).style.paddingRight).toBe(`${halfGutter}px`);
        });
        it('#labelWidth', () => {
          context.parent_labelWidth = 20;
          context.label = 'aa';
          fixture.detectChanges();
          page.expect(prefixCls + 'item-fixed');
          expect(page.getEl(prefixCls + 'label').style.width).toBe(`${context.parent_labelWidth}px`);
        });
      });
      describe('#item', () => {
        describe('#col', () => {
          it('should working', () => {
            context.col = 1;
            fixture.detectChanges();
            page.expect('.ant-col-xs-24');
            page.expect('.ant-col-sm-12', 0);
            context.col = REP_MAX;
            fixture.detectChanges();
            page.expect('.ant-col-xs-24');
            page.expect('.ant-col-sm-12');
          });
          it('should be inherit parent col value', () => {
            context.parent_col = 2;
            context.col = null;
            fixture.detectChanges();
            page.expect('.ant-col-xs-24');
            page.expect('.ant-col-sm-12');
            page.expect('.ant-col-md-8', 0);
          });
        });
        it('#label', () => {
          context.label = 'test-label';
          fixture.detectChanges();
          expect(page.getEl(prefixCls + 'label').textContent).toContain('test-label');
        });
        it('#optional', () => {
          context.optional = 'test-optional';
          fixture.detectChanges();
          expect(page.getEl(prefixCls + 'label-optional').textContent).toContain('test-optional');
        });
        it('#optionalHelp', () => {
          context.optionalHelp = 'test-optional';
          fixture.detectChanges();
          expect(page.getEl('nz-tooltip') != null).toBe(true);
        });
        describe('#default', () => {
          beforeEach(() => {
            context.content = '';
            context.parent_default = false;
            // make surce clean because of genModule has generated
            page.getEl(prefixCls + 'detail').classList.remove(prefixCls + 'default');
          });
          it('with true', () => {
            context.default = true;
            fixture.detectChanges();
            // mock
            context.viewComp.checkContent();
            page.expect(prefixCls + 'default', 1);
          });
          it('with false', () => {
            context.default = false;
            fixture.detectChanges();
            // mock
            context.viewComp.checkContent();
            page.expect(prefixCls + 'default', 0);
          });
          it('shoule be from defualt to text', () => {
            context.default = true;
            fixture.detectChanges();
            context.viewComp.checkContent();
            page.expect(prefixCls + 'default', 1);
            context.content = 'asdf';
            fixture.detectChanges();
            context.viewComp.checkContent();
            page.expect(prefixCls + 'default', 0);
          });
        });
        describe('#unit', () => {
          it('should be working', () => {
            context.unit = '个';
            fixture.detectChanges();
            page.expect(prefixCls + 'unit', 1);
          });
        });
        it('#type', () => {
          context.type = 'danger';
          fixture.detectChanges();
          page.expect(prefixCls + 'type-danger');
        });
      });
    });
  });

  describe('[logic]', () => {
    it('should be custom title in sv-container', () => {
      genModule(
        `<sv-container [title]="title">
          <ng-template #title>
            <a id="tip">tip</a>
          </ng-template>
        </sv-container>`,
      );
      page.expect('#tip');
    });
    it('should be custom label', () => {
      genModule(
        `<sv-container>
          <sv [label]="label">
            <ng-template #label>
              <a id="tip">tip</a>
            </ng-template>
            Custom label
          </sv>
        </sv-container>`,
      );
      page.expect('#tip');
    });
    it(`should be must include 'sv-container' component in sv`, () => {
      expect(() => {
        genModule(`
        <sv></sv>
        `);
      }).toThrowError();
    });
    it(`should be must include 'sv-container' component in sv-title`, () => {
      expect(() => {
        genModule(`
        <sv-title></sv-title>
        `);
      }).toThrowError();
    });
  });

  class PageObject {
    getEl(cls: string): HTMLElement {
      return dl.query(By.css(cls)).nativeElement;
    }
    getEls(cls: string): DebugElement[] {
      return dl.queryAll(By.css(cls));
    }
    expect(cls: string, count = 1): this {
      expect(this.getEls(cls).length).toBe(count);
      return this;
    }
  }
});

@Component({
  template: `
    <sv-container
      #svComp
      [title]="parent_title"
      [size]="parent_size"
      [layout]="parent_layout"
      [labelWidth]="parent_labelWidth"
      [gutter]="parent_gutter"
      [col]="parent_col"
      [default]="parent_default"
    >
      <sv-title>title</sv-title>
      <sv
        #viewComp
        [label]="label"
        [col]="col"
        [type]="type"
        [default]="default"
        [unit]="unit"
        [optional]="optional"
        [optionalHelp]="optionalHelp"
      >
        {{ content }}
      </sv>
    </sv-container>
  `,
})
class TestComponent {
  @ViewChild('svComp')
  svComp: SVContainerComponent;
  @ViewChild('viewComp')
  viewComp: SVComponent;
  parent_size: 'small' | 'large' = 'large';
  parent_layout: 'horizontal' | 'vertical' = 'horizontal';
  parent_labelWidth: number | null = null;
  parent_gutter: number = 32;
  parent_col: number = 3;
  parent_default: boolean = true;
  parent_title = 'title';

  label: string;
  optional: string;
  optionalHelp: string;
  content = '1';
  col: number | null;
  default: boolean;
  unit: string;
  type: 'primary' | 'success' | 'danger' | 'warning';
}
