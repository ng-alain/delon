import { Component, DebugElement, EventEmitter, ViewChild } from '@angular/core';
import { fakeAsync, inject, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  FormsModule,
  FormBuilder,
  FormControlName,
  FormGroup,
  NgModel,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { configureTestSuite, createTestContext } from '@delon/testing';
import { REP_MAX } from '@delon/theme';
import * as UTIL from '@delon/util';

import { SEContainerComponent } from './edit-container.component';
import { SEComponent } from './edit.component';
import { SEConfig } from './edit.config';
import { SEModule } from './edit.module';

const prefixCls = `.se__`;

describe('abc: edit', () => {
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;
  let page: PageObject;

  const moduleAction = () => {
    TestBed.configureTestingModule({
      imports: [SEModule, FormsModule, NoopAnimationsModule],
      declarations: [TestComponent],
    });
  };

  function createComp() {
    ({ fixture, dl, context } = createTestContext(TestComponent));
    fixture.detectChanges();
    page = new PageObject();
  }

  describe('', () => {
    configureTestSuite(moduleAction);

    it('General Configuration', inject([SEConfig], (cog: SEConfig) => {
      cog.size = 'compact';
      ({ fixture, dl, context } = createTestContext(TestComponent));
      expect(context.seComp.size).toBe('compact');
      expect(context.seComp.nzLayout).toBe('horizontal');
      expect(context.seComp.gutter).toBe(32);
    }));

    describe('', () => {
      beforeEach(createComp);
      describe('[property]', () => {
        describe('#wrap', () => {
          it('#title', () => {
            context.parent_title = `parent_title`;
            fixture.detectChanges();
            expect(page.getEl(prefixCls + 'title').textContent).toContain(`parent_title`);
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
          describe('#labelWidth', () => {
            it('should working', () => {
              context.labelWidth = 20;
              context.label = 'aa';
              fixture.detectChanges();
              expect(page.getEl(prefixCls + 'label').style.width).toBe(`${context.labelWidth}px`);
            });
            it('should be inherit parent labelWidth value', () => {
              context.parent_labelWidth = 20;
              context.label = 'aa';
              fixture.detectChanges();
              expect(page.getEl(prefixCls + 'label').style.width).toBe(`${context.parent_labelWidth}px`);
            });
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
              context.col = REP_MAX;
              fixture.detectChanges();
              page.expect('.ant-col-xs-24');
              page.expect('.ant-col-sm-12');
            });
            it('should be inherit parent col value', () => {
              context.parent_colInCon = null;
              context.parent_col = 2;
              context.col = null;
              fixture.detectChanges();
              page.expect('.ant-col-xs-24');
              page.expect('.ant-col-sm-12');
              page.expect('.ant-col-md-8', 0);
            });
            it('should be inherit parent col value via container', () => {
              context.parent_colInCon = 4;
              context.parent_col = null;
              context.col = null;
              fixture.detectChanges();
              page.expect('.ant-col-xs-24');
              page.expect('.ant-col-sm-12');
              page.expect('.ant-col-md-8');
              page.expect('.ant-col-lg-6');
            });
          });
          it('#label', () => {
            context.label = 'test-label';
            fixture.detectChanges();
            expect(page.getEl(prefixCls + 'label').textContent).toContain('test-label');
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
          ngModel = dl.query(By.directive(NgModel)).injector.get<NgModel>(NgModel);
          spyOnProperty(ngModel, 'dirty').and.returnValue(true);
          const changes = ngModel.statusChanges as EventEmitter<string>;
          // mock statusChanges
          changes.emit('VALID');
          page.expect('se-error', 0);
          // mock statusChanges
          changes.emit('INVALID');
          page.expect('se-error');
        });
      });
    });

    describe('#firstVisual', () => {
      beforeEach(() => {
        ({ fixture, dl, context } = createTestContext(TestComponent));
        context.required = true;
        context.label = 'a';
      });
      it('with true', fakeAsync(() => {
        context.parent_firstVisual = true;
        fixture.detectChanges();
        tick();
        page = new PageObject();
        page.expect('.has-error', 1);
      }));
      it('with false', fakeAsync(() => {
        context.parent_firstVisual = false;
        fixture.detectChanges();
        tick();
        page = new PageObject();
        page.expect('.has-error', 0);
      }));
    });
  });

  function genModule(template?: string) {
    moduleAction();
    if (template) {
      TestBed.overrideTemplate(TestComponent, template);
    }
    fixture = TestBed.createComponent(TestComponent);
    dl = fixture.debugElement;
    context = fixture.componentInstance;
    fixture.detectChanges();
    page = new PageObject();
  }

  describe('[validate]', () => {
    let ngModel: NgModel;
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
        imports: [SEModule, FormsModule, ReactiveFormsModule, NoopAnimationsModule],
        declarations: [TestReactiveComponent],
      });
      const fixture2 = TestBed.createComponent(TestReactiveComponent);
      dl = fixture2.debugElement;
      fixture2.detectChanges();
      page = new PageObject();
      const formControlName = dl.query(By.directive(FormControlName)).injector.get<FormControlName>(FormControlName);
      const changes = formControlName.statusChanges as EventEmitter<string>;
      spyOnProperty(formControlName, 'dirty').and.returnValue(true);
      // mock statusChanges
      changes.emit('VALID');
      page.expect('se-error', 0);
      // mock statusChanges
      changes.emit('INVALID');
      page.expect('se-error');
    });
    describe('should be ingore error visual when is disabled', () => {
      it('in ngModel', () => {
        genModule();
        context.disabled = true;
        fixture.detectChanges();
        ngModel = dl.query(By.directive(NgModel)).injector.get<NgModel>(NgModel);
        const changes = ngModel.statusChanges as EventEmitter<string>;
        changes.emit('INVALID');
        page.expect('se-error', 0);
      });
      it('in reactive form', () => {
        TestBed.configureTestingModule({
          imports: [SEModule, FormsModule, ReactiveFormsModule, NoopAnimationsModule],
          declarations: [TestReactiveComponent],
        });
        const fixture2 = TestBed.createComponent(TestReactiveComponent);
        dl = fixture2.debugElement;
        fixture2.detectChanges();
        page = new PageObject();
        const allControls = dl.queryAll(By.directive(FormControlName));
        const formControlName = allControls[1].injector.get<FormControlName>(FormControlName);
        const changes = formControlName.statusChanges as EventEmitter<string>;
        // mock statusChanges
        changes.emit('VALID');
        page.expect('se-error', 0);
        // mock statusChanges
        changes.emit('INVALID');
        page.expect('se-error', 0);
      });
    });
  });

  describe('[logic]', () => {
    it('should be custom title in se-container', () => {
      genModule(
        `<se-container [title]="title">
          <ng-template #title>
            <a id="tip">tip</a>
          </ng-template>
        </se-container>`,
      );
      page.expect('#tip');
    });
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
        genModule(`<se></se>`);
      }).toThrowError();
    });
    it(`should be must include 'se-container' component in se-title`, () => {
      expect(() => {
        genModule(`<se-title></se-title>`);
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
    it(`should be keeping placeholder when content is empty`, () => {
      genModule(`
      <form nz-form se-container>
        <se label="a"></se>
      </form>
      `);
      page.expect('.se__item-empty', 1);
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
    <form
      nz-form
      [se-container]="parent_colInCon"
      #seComp="seContainer"
      [col]="parent_col"
      [title]="parent_title"
      [firstVisual]="parent_firstVisual"
      [line]="parent_line"
      [size]="parent_size"
      [nzLayout]="parent_layout"
      [labelWidth]="parent_labelWidth"
      [gutter]="parent_gutter"
    >
      <se-title>title</se-title>
      <se
        #viewComp
        [optional]="optional"
        [optionalHelp]="optionalHelp"
        [error]="error"
        [extra]="extra"
        [controlClass]="controlClass"
        [label]="label"
        [col]="col"
        [required]="required"
        [line]="line"
        [labelWidth]="labelWidth"
      >
        <input type="text" [(ngModel)]="val" name="val" required [disabled]="disabled" />
      </se>
    </form>
  `,
})
class TestComponent {
  @ViewChild('seComp')
  seComp: SEContainerComponent;
  @ViewChild('viewComp')
  viewComp: SEComponent;

  parent_gutter: number | null = 32;
  parent_colInCon: number | null;
  parent_col: number | null = 3;
  parent_labelWidth: number | null = null;
  parent_layout: 'horizontal' | 'vertical' | 'inline' = 'horizontal';
  parent_size: 'default' | 'compact' = 'default';
  parent_firstVisual = true;
  parent_line = false;
  parent_title = 'title';

  optional: string;
  optionalHelp: string;
  error: string = 'required';
  extra: string;
  label: string;
  required: boolean | null;
  line: boolean | null;
  col: number | null;
  controlClass = '';
  labelWidth: number | null = null;

  val = '';
  showModel = true;
  disabled = false;
}

@Component({
  template: `
    <form nz-form [formGroup]="validateForm" (ngSubmit)="submitForm()" se-container gutter="32">
      <se label="App Key" error="Please input your username!">
        <input formControlName="userName" nz-input placeholder="Username" />
      </se>
      <se label="dis" id="dis">
        <input formControlName="dis" nz-input />
      </se>
    </form>
  `,
})
class TestReactiveComponent {
  validateForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.validateForm = fb.group({
      userName: [null, [Validators.required]],
      dis: { value: '', disabled: true },
    });
  }
}
