import {
  Component,
  DebugElement,
  ViewChild,
  EventEmitter,
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule, NgModel, FormControlName, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import * as UTIL from '@delon/util';

import { REP_MAX_COL } from '../core/responsive';
import { NaSEModule } from './edit.module';
import { SEItemComponent } from './edit.component';

const prefixCls = `.se__`;

describe('abc: edit', () => {
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;
  let page: PageObject;

  function genModule(template?: string) {
    TestBed.configureTestingModule({
      imports: [NaSEModule.forRoot(), FormsModule, NoopAnimationsModule],
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
      describe('#firstVisual', () => {
        let ngModel: NgModel;
        let changes: EventEmitter<any>;
        beforeEach(() => {
          ngModel = dl.query(By.directive(NgModel)).injector.get(NgModel);
          changes = ngModel.statusChanges as EventEmitter<any>;
        });
        it('with true', () => {
          context.label = 'a';
          context.parent_firstVisual = true;
          fixture.detectChanges();
          // mock statusChanges
          changes.emit('INVALID');
          page.expect('.has-error', 1);
        });
        it('with false', () => {
          context.label = 'a';
          context.parent_firstVisual = false;
          fixture.detectChanges();
          // mock statusChanges
          changes.emit('INVALID');
          page.expect('.has-error', 0);
        });
      });
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
      it('#line', () => {
        context.parent_line = true;
        context.line = null;
        fixture.detectChanges();
        page.expect(prefixCls + 'line');
      });
    });
  });

  describe('[validate]', () => {
    let ngModel: NgModel;
    it('should be show error', () => {
      genModule();
      ngModel = dl.query(By.directive(NgModel)).injector.get(NgModel);
      const changes = ngModel.statusChanges as EventEmitter<any>;
      // mock statusChanges
      changes.emit('VALID');
      page.expect('se-error', 0);
      // mock statusChanges
      changes.emit('INVALID');
      page.expect('se-error');
    });
    it('should be only once bind ngModel of status change', () => {
      genModule(`
      <form nz-form se-container>
        <se #viewComp id="1">
          <input id="ipt" type="text" *ngIf="showModel" [(ngModel)]="val" name="val" required>
        </se>
      </form>`);
      page.expect('#ipt');
      context.showModel = false;
      fixture.detectChanges();
      page.expect('#ipt', 0);
      context.showModel = true;
      fixture.detectChanges();
      page.expect('#ipt');
    });
    it('should be reactive form', () => {
      TestBed.configureTestingModule({
        imports: [NaSEModule.forRoot(), FormsModule, ReactiveFormsModule, NoopAnimationsModule],
        declarations: [TestReactiveComponent],
      });
      const fixture2 = TestBed.createComponent(TestReactiveComponent);
      dl = fixture2.debugElement;
      fixture2.detectChanges();
      page = new PageObject();
      const formControlName = dl.query(By.directive(FormControlName)).injector.get(FormControlName);
      const changes = formControlName.statusChanges as EventEmitter<any>;
      // mock statusChanges
      changes.emit('VALID');
      page.expect('se-error', 0);
      // mock statusChanges
      changes.emit('INVALID');
      page.expect('se-error');
    });
  });

  describe('[logic]', () => {
    it('should be custom label', () => {
      genModule(
        `<se-container>
          <se [label]="label">
            <ng-template #label>
              <a id="tip">tip</a>
            </ng-template>
            Custom label
          </se>
        </se-container>`,
      );
      page.expect('#tip');
    });
    it(`should be must include 'se-container' component in se`, () => {
      expect(() => {
        genModule(`
        <se></se>
        `);
      }).toThrowError();
    });
    it(`should be must include 'se-container' component in se-title`, () => {
      expect(() => {
        genModule(`
        <se-title></se-title>
        `);
      }).toThrowError();
    });
    it(`should be custom id value`, () => {
      const id = 'aaaa';
      genModule(`
      <form nz-form se-container>
        <se id="${id}" label="a">
          <input type="text" [(ngModel)]="val" name="val">
        </se>
      </form>
      `);
      expect(page.getEl('label').getAttribute('for')).toBe(id);
    });
    it(`should be ingored auto id when not found invalid ngModel`, () => {
      spyOn(UTIL, 'deepGet').and.returnValue(null);
      genModule(`
      <form nz-form se-container>
        <se label="a">
          <select id="expected" [(ngModel)]="val" name="val"></select>
        </se>
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
  <form nz-form [se-container]="parent_col"
    [firstVisual]="parent_firstVisual" [line]="parent_line"
    [size]="parent_size" [nzLayout]="parent_layout" [labelWidth]="parent_labelWidth" [gutter]="parent_gutter">

    <se-title>title</se-title>
    <se #viewComp
      [optional]="optional" [optionalHelp]="optionalHelp"
      [error]="error" [extra]="extra" [controlClass]="controlClass"
      [label]="label" [col]="col" [required]="required" [line]="line">
      <input type="text" [(ngModel)]="val" name="val" required>
    </se>

  </form>`,
})
class TestComponent {
  @ViewChild('viewComp')
  viewComp: SEItemComponent;

  parent_gutter: number = 32;
  parent_col: number = 3;
  parent_labelWidth: number = null;
  parent_layout: 'horizontal' | 'vertical' | 'inline' = 'horizontal';
  parent_size: 'default' | 'compact' = 'default';
  parent_firstVisual = true;
  parent_line = false;

  optional: string;
  optionalHelp: string;
  error: string = 'required';
  extra: string;
  label: string;
  required: boolean;
  line: boolean;
  col: number;
  controlClass = '';

  val = '';
  showModel = true;
}

@Component({
  template: `
  <form nz-form [formGroup]="validateForm" (ngSubmit)="submitForm()" se-container gutter="32">
    <se label="App Key" error="Please input your username!">
      <input formControlName="userName" nz-input placeholder="Username">
    </se>
  </form>`,
})
class TestReactiveComponent {
  validateForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.validateForm = fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
    });
  }
}
