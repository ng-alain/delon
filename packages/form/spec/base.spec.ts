import { Component, DebugElement, ViewChild } from '@angular/core';
import {
  discardPeriodicTasks,
  tick,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AlainThemeModule } from '@delon/theme';
import { deepCopy, deepGet } from '@delon/util';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { configureTestSuite, dispatchFakeEvent, typeInElement } from '@delon/testing';
import { ErrorData } from '../src/errors';
import { SFButton } from '../src/interface';
import { DelonFormModule } from '../src/module';
import { SFSchema } from '../src/schema';
import { SFUISchema } from '../src/schema/ui';
import { SFComponent } from '../src/sf.component';

export const SCHEMA = {
  user: {
    properties: {
      name: {
        type: 'string',
      },
      pwd: {
        type: 'string',
      },
    },
    required: ['name', 'pwd'],
  } as SFSchema,
};

let fixture: ComponentFixture<TestFormComponent>;
let dl: DebugElement;
let context: TestFormComponent;
export function builder(options?: {
  detectChanges?: boolean;
  template?: string;
  ingoreAntd?: boolean;
  imports?: any[];
}) {
  options = { detectChanges: true, ...options };
  TestBed.configureTestingModule({
    imports: [
      NoopAnimationsModule, AlainThemeModule.forRoot(), DelonFormModule.forRoot(),
    ].concat(options.imports || []),
    declarations: [TestFormComponent],
  });
  if (options.template) {
    TestBed.overrideTemplate(TestFormComponent, options.template);
  }
  fixture = TestBed.createComponent(TestFormComponent);
  dl = fixture.debugElement;
  context = fixture.componentInstance;
  spyOn(context, 'formChange');
  spyOn(context, 'formSubmit');
  spyOn(context, 'formReset');
  spyOn(context, 'formError');
  if (options.detectChanges !== false) {
    fixture.detectChanges();
  }
  const page = new SFPage(context.comp);
  return {
    fixture,
    dl,
    context,
    page,
  };
}

export function configureSFTestSuite() {
  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, AlainThemeModule.forRoot(), DelonFormModule.forRoot(), HttpClientTestingModule],
      declarations: [TestFormComponent],
    });
  });
}

export class SFPage {
  constructor(private comp: SFComponent) { }

  prop(_dl: DebugElement, _context: TestFormComponent, _fixture: ComponentFixture<TestFormComponent>) {
    dl = _dl;
    context = _context;
    fixture = _fixture;
    spyOn(context, 'formChange');
    spyOn(context, 'formSubmit');
    spyOn(context, 'formReset');
    spyOn(context, 'formError');
  }

  getDl(cls: string): DebugElement {
    return dl.query(By.css(cls));
  }

  getEl(cls: string): HTMLElement {
    const el = this.getDl(cls);
    expect(el).not.toBeNull();
    return el.nativeElement as HTMLElement;
  }

  getWidget<T>(cls: string): T {
    return this.getDl(cls).componentInstance as T;
  }

  private fixPath(path: string) {
    return path.startsWith('/') ? path : '/' + path;
  }

  getValue(path: string): any {
    path = this.fixPath(path);
    return this.comp.getValue(path);
  }

  setValue(path: string, value: any): this {
    path = this.fixPath(path);
    this.comp.setValue(path, value);
    return this;
  }

  submit(result = true): this {
    this.getEl('.ant-btn-primary').click();
    if (result) expect(context.formSubmit).toHaveBeenCalled();
    else expect(context.formSubmit).not.toHaveBeenCalled();
    return this;
  }

  reset(result = true): this {
    this.getEl('.ant-btn-default').click();
    if (result) expect(context.formReset).toHaveBeenCalled();
    else expect(context.formReset).not.toHaveBeenCalled();
    return this;
  }

  isValid(result = true): this {
    this.submit(result);
    expect(this.comp.valid).toBe(result);
    return this;
  }

  add(): this {
    this.getEl('.add button').click();
    return this;
  }
  /** 下标从 `1` 开始 */
  remove(index = 1): this {
    this.getEl(
      `.sf-array-container [data-index="${index - 1}"] .remove`,
    ).click();
    return this;
  }

  newSchema(schema: SFSchema, ui?: SFUISchema, formData?: any): this {
    context.schema = schema;
    if (typeof ui !== 'undefined') context.ui = ui;
    if (typeof formData !== 'undefined') context.formData = formData;
    fixture.detectChanges();
    return this;
  }

  /** 强制指定 `a` 节点 */
  chainSchema(schema: SFSchema, overObject: SFSchema): this {
    context.schema = {
      ...deepCopy(schema),
      properties: { a: overObject },
    };
    fixture.detectChanges();
    return this;
  }

  checkSchema(path: string, propertyName: string, value: any): this {
    path = this.fixPath(path);
    const property = this.comp.rootProperty.searchProperty(path);
    expect(property != null).toBe(true);
    const item = property.schema;
    const res = deepGet(item, propertyName.split('.'), undefined);
    expect(res).toBe(value);
    return this;
  }

  checkUI(path: string, propertyName: string, value: any): this {
    path = this.fixPath(path);
    const property = this.comp.rootProperty.searchProperty(path);
    expect(property != null).toBe(true);
    const item = property.ui;
    const res = deepGet(item, propertyName.split('.'), undefined);
    expect(res).toBe(value);
    return this;
  }

  checkValue(path: string, value: any, propertyName?: string): this {
    path = this.fixPath(path);
    const property = this.comp.rootProperty.searchProperty(path);
    expect(property != null).toBe(true);
    if (typeof propertyName !== 'undefined') {
      const res = deepGet(property, propertyName.split('.'), undefined);
      expect(res).toBe(value);
    } else {
      expect(property.value).toBe(value);
    }
    return this;
  }

  checkElText(cls: string, value: any): this {
    const node = this.getEl(cls);
    if (value == null) {
      expect(node).toBeNull();
    } else {
      expect(node.textContent.trim()).toBe(value);
    }
    return this;
  }

  checkCls(cls: string, value: string): this {
    const el = this.getEl(cls);
    expect(el).not.toBe(null);
    expect(el.classList).toContain(value);
    return this;
  }

  checkStyle(cls: string, key: string, value: string): this {
    const el = this.getEl(cls);
    expect(el).not.toBe(null);
    expect(el.style[key]).toBe(value);
    return this;
  }

  checkAttr(cls: string, key: string, value: any, required = true): this {
    const el = this.getEl(cls);
    expect(el).not.toBe(null);
    const attr = el.attributes.getNamedItem(key);
    if (required) expect(attr.textContent).toBe(value);
    else expect(attr).toBe(value);
    return this;
  }

  checkCount(cls: string, count: number): this {
    const len = dl.queryAll(By.css(cls)).length;
    expect(len).toBe(count);
    return this;
  }

  click(cls: string): this {
    const el = this.getEl(cls);
    expect(el).not.toBeNull();
    el.click();
    fixture.detectChanges();
    return this;
  }

  typeChar(value: any, cls = 'input'): this {
    const node = this.getEl(cls) as HTMLInputElement;
    typeInElement(value, node);
    tick();
    fixture.detectChanges();
    return this;
  }

  typeEvent(eventName: string, cls = 'input'): this {
    const node = this.getEl(cls) as HTMLInputElement;
    dispatchFakeEvent(node, eventName);
    tick();
    fixture.detectChanges();
    return this;
  }

  time(time = 0) {
    tick(time);
    return this;
  }

  asyncEnd(time = 0) {
    this.time(time);
    discardPeriodicTasks();
    return this;
  }
}

@Component({
  template: `
    <sf [layout]="layout" #comp
        [schema]="schema"
        [ui]="ui"
        [formData]="formData"
        [button]="button"
        [liveValidate]="liveValidate"
        [autocomplete]="autocomplete"
        [firstVisual]="firstVisual"
        (formChange)="formChange($event)"
        (formSubmit)="formSubmit($event)"
        (formReset)="formReset($event)"
        (formError)="formError($event)"></sf>
    `,
})
export class TestFormComponent {
  @ViewChild('comp') comp: SFComponent;
  mode: 'default' | 'search' | 'edit' = 'default';
  layout = 'horizontal';
  schema: SFSchema = SCHEMA.user;
  ui: SFUISchema = {};
  formData: any;
  button: SFButton | 'none' = {};
  liveValidate = true;
  autocomplete: 'on' | 'off';
  firstVisual = true;

  formChange(value: {}) { }
  formSubmit(value: {}) { }
  formReset(value: {}) { }
  formError(value: ErrorData[]) { }
}
