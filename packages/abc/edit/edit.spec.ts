import { Component, DebugElement, ViewChild, EventEmitter } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule, NgModel } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { REP_MAX_COL } from '../core/responsive';
import { NaEditModule } from './edit.module';
import { NaEditComponent } from './edit.component';
import * as UTIL from '@delon/util';

const prefixCls = `.na-edit__`;

describe('abc: edit', () => {
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;
  let page: PageObject;

  function genModule(template?: string) {
    TestBed.configureTestingModule({
      imports: [NaEditModule.forRoot(), FormsModule, NoopAnimationsModule],
      declarations: [TestComponent],
    });
    if (template) {
      TestBed.overrideTemplate(TestComponent, template);
    }
    fixture = TestBed.createComponent(TestComponent);
    dl = fixture.debugElement;
    context = fixture.componentInstance;
    fixture.detectChanges();
    page = new PageObject();
  }

  describe('[property]', () => {
    beforeEach(() => genModule());
    describe('#wrap', () => {
      it('#gutter', () => {
        const gutter = 24;
        const halfGutter = gutter / 2;
        context.parent_gutter = gutter;
        fixture.detectChanges();
        expect(page.getEl('.ant-row').style.marginLeft).toBe(
          `-${halfGutter}px`,
        );
        expect(page.getEl('.ant-row').style.marginRight).toBe(
          `-${halfGutter}px`,
        );
        const itemCls = prefixCls + 'item';
        expect(page.getEl(itemCls).style.paddingLeft).toBe(`${halfGutter}px`);
        expect(page.getEl(itemCls).style.paddingRight).toBe(`${halfGutter}px`);
      });
      it('#labelWidth', () => {
        context.parent_labelWidth = 20;
        context.label = 'aa';
        fixture.detectChanges();
        expect(page.getEl(prefixCls + 'label').style.width).toBe(
          `${context.parent_labelWidth}px`,
        );
      });
      it('#layout', () => {
        context.parent_layout = 'horizontal';
        fixture.detectChanges();
        page.expect(prefixCls + 'horizontal');
        context.parent_layout = 'vertical';
        fixture.detectChanges();
        page.expect(prefixCls + 'vertical');
        context.parent_layout = 'inline';
        fixture.detectChanges();
        page.expect(prefixCls + 'inline');
        page.expect(prefixCls + 'compact');
      });
      it('#size', () => {
        context.parent_size = 'default';
        fixture.detectChanges();
        page.expect(prefixCls + 'default');
        context.parent_size = 'compact';
        fixture.detectChanges();
        page.expect(prefixCls + 'compact');
      });
      it('should be ingroed less than 0', () => {
        context.parent_col = 0;
        fixture.detectChanges();
        page.expect('.ant-col-xs-24');
        page.expect('.ant-col-sm-12');
      });
    });
    describe('#item', () => {
      describe('#col', () => {
        it('should working', () => {
          context.col = 1;
          fixture.detectChanges();
          page.expect('.ant-col-xs-24');
          page.expect('.ant-col-sm-12', 0);
          context.col = REP_MAX_COL;
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
        expect(page.getEl(prefixCls + 'label').textContent).toContain(
          'test-label',
        );
      });
      it('should be only horizontal will increase the responsive', () => {
        context.parent_layout = 'inline';
        context.label = 'aa';
        fixture.detectChanges();
        page.expect(prefixCls + 'inline');
        page.expect('.ant-col-xs-24', 0);
      });
    });
  });

  describe('[validate]', () => {
    let ngModel: NgModel;
    it('should be show error', () => {
      genModule();
      ngModel = dl.query(By.directive(NgModel)).injector.get(NgModel);
      const changes = ngModel.statusChanges as EventEmitter<any>;
      // mock valid
      changes.emit('VALID');
      page.expect('na-edit-error', 0);
      // mock invalid
      changes.emit('INVALID');
      page.expect('na-edit-error');
    });
    it('should be only once bind ngModel of status change', () => {
      genModule(`
      <form nz-form na-edit-wrap>
        <na-edit #viewComp id="1">
          <input id="ipt" type="text" *ngIf="showModel" [(ngModel)]="val" name="val" required>
        </na-edit>
      </form>`);
      page.expect('#ipt');
      context.showModel = false;
      fixture.detectChanges();
      page.expect('#ipt', 0);
      context.showModel = true;
      fixture.detectChanges();
      page.expect('#ipt');
    });
  });

  describe('[logic]', () => {
    it('should be custom label', () => {
      genModule(
        `<na-edit-wrap>
          <na-edit [label]="label">
            <ng-template #label>
              <a id="tip">tip</a>
            </ng-template>
            Custom label
          </na-edit>
        </na-edit-wrap>`,
      );
      page.expect('#tip');
    });
    it(`should be must include 'na-edit-wrap' component in na-edit`, () => {
      expect(() => {
        genModule(`
        <na-edit></na-edit>
        `);
      }).toThrowError();
    });
    it(`should be must include 'na-edit-wrap' component in na-edit-title`, () => {
      expect(() => {
        genModule(`
        <na-edit-title></na-edit-title>
        `);
      }).toThrowError();
    });
    it(`should be custom id value`, () => {
      const id = 'aaaa';
      genModule(`
      <form nz-form na-edit-wrap>
        <na-edit id="${id}" label="a">
          <input type="text" [(ngModel)]="val" name="val">
        </na-edit>
      </form>
      `);
      expect(page.getEl('label').getAttribute('for')).toBe(id);
    });
    it(`should be ingored auto id when not found invalid ngModel`, () => {
      spyOn(UTIL, 'deepGet').and.returnValue(null);
      genModule(`
      <form nz-form na-edit-wrap>
        <na-edit label="a">
          <select id="expected" [(ngModel)]="val" name="val"></select>
        </na-edit>
      </form>
      `);
      expect(page.getEl('#expected').id).toBe('expected');
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
  <form nz-form [na-edit-wrap]="parent_col"
    [size]="parent_size" [nzLayout]="parent_layout" [labelWidth]="parent_labelWidth" [gutter]="parent_gutter">

    <na-edit-title>title</na-edit-title>
    <na-edit #viewComp
      [optional]="optional" [optionalHelp]="optionalHelp"
      [error]="error" [extra]="extra" [controlClass]="controlClass"
      [label]="label" [col]="col" [required]="required">
      <input type="text" [(ngModel)]="val" name="val" required>
    </na-edit>

  </form>`,
})
class TestComponent {
  @ViewChild('viewComp')
  viewComp: NaEditComponent;

  parent_gutter: number = 32;
  parent_col: number = 3;
  parent_labelWidth: number = null;
  parent_layout: 'horizontal' | 'vertical' | 'inline' = 'horizontal';
  parent_size: 'default' | 'compact' = 'default';

  optional: string;
  optionalHelp: string;
  error: string = 'required';
  extra: string;
  label: string;
  required: boolean;
  col: number;
  controlClass = '';

  val = '';
  showModel = true;
}
