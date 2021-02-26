import { Component, DebugElement, EventEmitter, TemplateRef, ViewChild } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormBuilder, FormControlName, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { createTestContext } from '@delon/testing';
import { REP_MAX } from '@delon/theme';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { SEContainerComponent } from './se-container.component';
import { SEComponent } from './se.component';
import { SEModule } from './se.module';
import { SEErrorRefresh } from './se.types';

const prefixCls = `.se__`;
const ANT_FORM_HAS_ERROR_CLS = `.ant-form-item-has-error`;

describe('abc: edit', () => {
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;
  let page: PageObject;

  const moduleAction = () => {
    TestBed.configureTestingModule({
      imports: [SEModule, FormsModule, NzRadioModule, NoopAnimationsModule],
      declarations: [TestComponent],
    });
  };

  function genModule(template?: string): void {
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

  function createComp(): void {
    ({ fixture, dl, context } = createTestContext(TestComponent));
    fixture.detectChanges();
    page = new PageObject();
  }

  describe('', () => {
    beforeEach(moduleAction);

    describe('', () => {
      beforeEach(createComp);

      describe('#firstVisual', () => {
        let ngModel: NgModel;
        beforeEach(() => {
          ({ fixture, dl, context } = createTestContext(TestComponent));
          context.required = true;
          context.label = 'fv';
          context.val = '';
          context.parent_size = 'default';
          ngModel = dl.query(By.directive(NgModel)).injector.get<NgModel>(NgModel);
          spyOnProperty(ngModel, 'invalid').and.returnValue(true);
        });
        it('with true', fakeAsync(() => {
          context.parent_firstVisual = true;
          fixture.detectChanges();
          tick();
          fixture.detectChanges();
          page = new PageObject();
          page.expect(ANT_FORM_HAS_ERROR_CLS, 1);
        }));
        it('with false', fakeAsync(() => {
          context.parent_firstVisual = false;
          fixture.detectChanges();
          tick();
          fixture.detectChanges();
          page = new PageObject();
          page.expect(ANT_FORM_HAS_ERROR_CLS, 0);
        }));
      });
      describe('#ingoreDirty', () => {
        let changes: EventEmitter<string>;
        beforeEach(() => {
          ({ fixture, dl, context } = createTestContext(TestComponent));
          page = new PageObject();
          context.required = true;
          context.parent_firstVisual = false;
          context.val = '';
          const ngModel = dl.query(By.directive(NgModel)).injector.get<NgModel>(NgModel);
          spyOnProperty(ngModel, 'invalid').and.returnValue(true);
          changes = ngModel.statusChanges as EventEmitter<string>;
          spyOnProperty(ngModel, 'dirty').and.returnValue(false);
        });
        it('with true', fakeAsync(() => {
          context.parent_ingoreDirty = true;
          fixture.detectChanges();
          changes.emit('INVALID');
          fixture.detectChanges();
          page.expect(ANT_FORM_HAS_ERROR_CLS, 1);
        }));
        it('with false', fakeAsync(() => {
          context.parent_ingoreDirty = false;
          fixture.detectChanges();
          changes.emit('INVALID');
          fixture.detectChanges();
          page.expect(ANT_FORM_HAS_ERROR_CLS, 0);
        }));
      });
      describe('[property]', () => {
        describe('#wrap', () => {
          it('#title', () => {
            context.parent_title = `parent_title`;
            fixture.detectChanges();
            expect(page.getEl(prefixCls + 'title').textContent).toContain(`parent_title`);
          });
          describe('#gutter', () => {
            it('shoule gutter number working', () => {
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
            it('shoule gutter string working', () => {
              const gutter = '24';
              const halfGutter = Number(gutter) / 2;
              context.parent_gutter = gutter;
              fixture.detectChanges();
              expect(page.getEl('.ant-row').style.marginLeft).toBe(`-${halfGutter}px`);
              expect(page.getEl('.ant-row').style.marginRight).toBe(`-${halfGutter}px`);
              const itemCls = prefixCls + 'item';
              expect(page.getEl(itemCls).style.paddingLeft).toBe(`${halfGutter}px`);
              expect(page.getEl(itemCls).style.paddingRight).toBe(`${halfGutter}px`);
            });
          });
          describe('#labelWidth', () => {
            it('should working', () => {
              context.parent_layout = 'horizontal';
              context.labelWidth = 20;
              context.label = 'aa';
              fixture.detectChanges();
              expect(page.getEl('.ant-form-item-label').style.width).toBe(`${context.labelWidth}px`);
            });
            it('should be inherit parent labelWidth value', () => {
              context.parent_layout = 'horizontal';
              context.parent_labelWidth = 20;
              context.label = 'aa';
              fixture.detectChanges();
              expect(page.getEl('.ant-form-item-label').style.width).toBe(`${context.parent_labelWidth}px`);
            });
            it('should be ingore width when layout not horizontal', () => {
              context.parent_layout = 'inline';
              context.parent_labelWidth = 20;
              context.label = 'aa';
              fixture.detectChanges();
              expect(page.getEl('.ant-form-item-label').style.width).toBe(``);
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
          describe('#errors', () => {
            let ngModel: NgModel;
            let changes: EventEmitter<string>;
            beforeEach(() => {
              ngModel = dl.query(By.directive(NgModel)).injector.get<NgModel>(NgModel);
              spyOnProperty(ngModel, 'dirty').and.returnValue(true);
              spyOnProperty(ngModel, 'errors').and.returnValue({ required: true });
              changes = ngModel.statusChanges as EventEmitter<string>;
              changes.emit('INVALID');
              fixture.detectChanges();
            });

            it('should be working', () => {
              page.expectText('.ant-form-item-explain', context.error as string);
              const NEW_ERROR = 'new request';
              context.parent_errors = [{ name: 'val', error: NEW_ERROR }];
              fixture.detectChanges();
              changes.emit('INVALID');
              fixture.detectChanges();
              page.expectText('.ant-form-item-explain', NEW_ERROR);
            });
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
          spyOnProperty(ngModel, 'errors').and.returnValue({ required: true });
          const changes = ngModel.statusChanges as EventEmitter<string>;
          // mock statusChanges
          changes.emit('VALID');
          page.expect(ANT_FORM_HAS_ERROR_CLS, 0);
          // mock statusChanges
          changes.emit('INVALID');
          fixture.detectChanges();
          page.expect(ANT_FORM_HAS_ERROR_CLS);
        });
        it('should be mulit error', () => {
          context.error = { required: 'A', other: 'O' };
          fixture.detectChanges();
          ngModel = dl.query(By.directive(NgModel)).injector.get<NgModel>(NgModel);
          spyOnProperty(ngModel, 'dirty').and.returnValue(true);
          spyOnProperty(ngModel, 'errors').and.returnValue({ other: true });
          const changes = ngModel.statusChanges as EventEmitter<string>;
          // mock statusChanges
          changes.emit('INVALID');
          fixture.detectChanges();
          expect(page.getEl(ANT_FORM_HAS_ERROR_CLS).textContent!.trim()).toBe('O');
        });
        it('should be only control vision when error is null', () => {
          context.error = '';
          fixture.detectChanges();
          ngModel = dl.query(By.directive(NgModel)).injector.get<NgModel>(NgModel);
          spyOnProperty(ngModel, 'dirty').and.returnValue(true);
          spyOnProperty(ngModel, 'errors').and.returnValue({ required: true });
          const changes = ngModel.statusChanges as EventEmitter<string>;
          // mock statusChanges
          changes.emit('VALID');
          page.expect(ANT_FORM_HAS_ERROR_CLS, 0).expect('.ant-form-item-with-help', 0);
          // mock statusChanges
          changes.emit('INVALID');
          fixture.detectChanges();
          page.expect(ANT_FORM_HAS_ERROR_CLS).expect('.ant-form-item-with-help', 0);
        });
      });
    });
  });

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
    it('should be auto set required when control include required', () => {
      genModule(`
      <form nz-form se-container>
        <se label="l">
          <input type="text" [(ngModel)]="val" name="val" required>
        </se>
      </form>`);
      page.expect('.ant-form-item-required', 1);
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
      fixture2.detectChanges();
      page.expect(ANT_FORM_HAS_ERROR_CLS, 0);
      // mock statusChanges
      changes.emit('INVALID');
      fixture2.detectChanges();
      page.expect(ANT_FORM_HAS_ERROR_CLS);
    });
    describe('should be ingore error visual when is disabled', () => {
      it('in ngModel', () => {
        genModule();
        context.disabled = true;
        fixture.detectChanges();
        ngModel = dl.query(By.directive(NgModel)).injector.get<NgModel>(NgModel);
        const changes = ngModel.statusChanges as EventEmitter<string>;
        changes.emit('INVALID');
        fixture.detectChanges();
        page.expect(ANT_FORM_HAS_ERROR_CLS, 0);
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
        fixture2.detectChanges();
        page.expect(ANT_FORM_HAS_ERROR_CLS, 0);
        // mock statusChanges
        changes.emit('INVALID');
        fixture2.detectChanges();
        page.expect(ANT_FORM_HAS_ERROR_CLS, 0);
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
      genModule(`
      <form nz-form se-container>
        <se label="a">
          <select id="expected" name="val"></select>
        </se>
      </form>
      `);
      expect(page.getEl('#expected').id).toBe('expected');
    });
    it(`should be ingored set id when control has id value`, () => {
      const id = 'aaaa';
      genModule(`
      <form nz-form se-container>
        <se label="a">
          <input type="text" id="${id}" [(ngModel)]="val" name="val">
        </se>
      </form>
      `);
      expect(page.getEl('label').getAttribute('for')).toBe(id);
    });
    it(`should be ingored set id when control invalid controlAccessor`, () => {
      genModule(`
      <form nz-form se-container>
        <se label="a">
          <nz-radio-group [(ngModel)]="val" name="val">
            <label nz-radio nzValue=""></label>
          </nz-radio-group>
        </se>
      </form>
      `);
      expect(page.getEl('nz-radio-group').getAttribute('for')).toBeNull();
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
    expect(cls: string, count: number = 1): this {
      expect(this.getEls(cls).length).toBe(count);
      return this;
    }
    expectText(cls: string, text: string): this {
      expect(this.getEl(cls).textContent?.trim()).toBe(text);
      return this;
    }
    cd(time: number = 0): this {
      fixture.detectChanges();
      tick(time);
      fixture.detectChanges();
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
      [ingoreDirty]="parent_ingoreDirty"
      [line]="parent_line"
      [size]="parent_size"
      [nzLayout]="parent_layout"
      [labelWidth]="parent_labelWidth"
      [gutter]="parent_gutter"
      [errors]="parent_errors"
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
  @ViewChild('seComp', { static: true })
  seComp: SEContainerComponent;
  @ViewChild('viewComp', { static: true })
  viewComp: SEComponent;

  parent_gutter: string | number | null = 32;
  parent_colInCon: number | null;
  parent_col: number | null = 3;
  parent_labelWidth: number | null = null;
  parent_layout: 'horizontal' | 'vertical' | 'inline' = 'horizontal';
  parent_size: 'default' | 'compact' = 'default';
  parent_firstVisual = true;
  parent_ingoreDirty = false;
  parent_line = false;
  parent_title = 'title';
  parent_errors: SEErrorRefresh[] = [];

  optional: string;
  optionalHelp: string;
  error: string | TemplateRef<void> | { [key: string]: string | TemplateRef<void> } = 'required';
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
