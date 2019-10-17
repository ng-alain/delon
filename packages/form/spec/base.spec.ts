import { Component, DebugElement, ViewChild } from '@angular/core';
import { discardPeriodicTasks, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AlainThemeModule } from '@delon/theme';
import { deepCopy, deepGet } from '@delon/util';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { configureTestSuite, dispatchFakeEvent, typeInElement } from '@delon/testing';
import { SFButton } from '../src/interface';
import { FormProperty } from '../src/model/form.property';
import { DelonFormModule } from '../src/module';
import { SFSchema } from '../src/schema';
import { SFUISchema } from '../src/schema/ui';
import { SFComponent } from '../src/sf.component';
import { SF_SEQ } from '../src/const';

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
export function builder(options?: { detectChanges?: boolean; template?: string; ingoreAntd?: boolean; imports?: any[] }) {
  options = { detectChanges: true, ...options };
  TestBed.configureTestingModule({
    imports: [NoopAnimationsModule, AlainThemeModule.forRoot(), DelonFormModule.forRoot()].concat(options.imports || []),
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
  constructor(private comp: SFComponent) {}

  prop(_dl: DebugElement, _context: TestFormComponent, _fixture: ComponentFixture<TestFormComponent>) {
    dl = _dl;
    context = _context;
    fixture = _fixture;
    spyOn(context, 'formChange');
    spyOn(context, 'formSubmit');
    spyOn(context, 'formReset');
    spyOn(context, 'formError');
    this.cleanOverlay();
  }

  cleanOverlay() {
    const els = document.querySelectorAll('.cdk-overlay-container');
    if (els && els.length > 0) {
      els.forEach(el => (el.innerHTML = ''));
    }
    return this;
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
    return path.startsWith(SF_SEQ) ? path : SF_SEQ + path;
  }

  getValue(path: string): any {
    path = this.fixPath(path);
    return this.comp.getValue(path);
  }

  setValue(path: string, value: any, dc = 0): this {
    path = this.fixPath(path);
    this.comp.setValue(path, value);
    if (dc > 0) {
      this.dc(dc);
    }
    return this;
  }

  getProperty(path: string): FormProperty {
    path = this.fixPath(path);
    return this.comp.getProperty(path)!;
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
    this.getEl('.sf__array-add button').click();
    return this;
  }
  /** 下标从 `1` 开始 */
  remove(index = 1): this {
    this.getEl(`.sf__array-container [data-index="${index - 1}"] .sf__array-remove`).click();
    return this;
  }

  newSchema(schema: SFSchema, ui?: SFUISchema, formData?: any): this {
    context.schema = schema;
    if (typeof ui !== 'undefined') context.ui = ui;
    if (typeof formData !== 'undefined') context.formData = formData;
    return this.dc();
  }

  /** 强制指定 `a` 节点 */
  chainSchema(schema: SFSchema, overObject: SFSchema): this {
    context.schema = {
      ...deepCopy(schema),
      properties: { a: overObject },
    };
    return this.dc();
  }

  checkSchema(path: string, propertyName: string, value: any): this {
    path = this.fixPath(path);
    const property = this.comp.rootProperty!.searchProperty(path);
    expect(property != null).toBe(true);
    const item = property!.schema;
    const res = deepGet(item, propertyName.split('.'), undefined);
    expect(res).toBe(value);
    return this;
  }

  checkUI(path: string, propertyName: string, value: any): this {
    path = this.fixPath(path);
    const property = this.comp.rootProperty!.searchProperty(path);
    expect(property != null).toBe(true);
    const item = property!.ui;
    const res = deepGet(item, propertyName.split('.'), undefined);
    expect(res).toBe(value);
    return this;
  }

  checkValue(path: string, value: any, propertyName?: string): this {
    path = this.fixPath(path);
    const property = this.comp.rootProperty!.searchProperty(path);
    expect(property != null).toBe(true);
    if (typeof propertyName !== 'undefined') {
      const res = deepGet(property, propertyName.split('.'), undefined);
      expect(res).toBe(value);
    } else {
      expect(property!.value).toBe(value);
    }
    return this;
  }

  checkCalled(path: string, propertyName: string, result = true): this {
    path = this.fixPath(path);
    const property = this.comp.rootProperty!.searchProperty(path);
    expect(property != null).toBe(true);
    const item = property!.ui;
    const res = deepGet(item, propertyName.split('.'), undefined);
    if (result) {
      expect(res).toHaveBeenCalled();
    } else {
      expect(res).not.toHaveBeenCalled();
    }
    return this;
  }

  checkElText(cls: string, value: any, viaDocument = false): this {
    const node = viaDocument ? document.querySelector(cls) : this.getEl(cls);
    if (value == null) {
      expect(node).toBeNull();
    } else {
      expect(node!.textContent!.trim()).toBe(value);
    }
    return this;
  }

  checkCls(cls: string, value: string): this {
    const el = this.getEl(cls);
    expect(el.classList).toContain(value);
    return this;
  }

  checkStyle(cls: string, key: string, value: string): this {
    const el = this.getEl(cls);
    expect(el.style[key]).toBe(value);
    return this;
  }

  checkAttr(cls: string, key: string, value: any, required = true): this {
    const el = this.getEl(cls);
    const attr = el.attributes.getNamedItem(key);
    if (required) expect(attr!.textContent).toBe(value);
    else expect(attr).toBe(value);
    return this;
  }

  checkCount(cls: string, count: number, viaDocument = false): this {
    const len = viaDocument ? document.querySelectorAll(cls).length : dl.queryAll(By.css(cls)).length;
    expect(len).toBe(count);
    return this;
  }

  checkInput(cls: string, value: any, viaDocument = false): this {
    const ipt = (viaDocument ? document.querySelector(cls) : dl.query(By.css(cls)).nativeElement) as HTMLInputElement;
    expect(ipt.value).toBe(value);
    return this;
  }

  checkError(text: string): this {
    const el = this.getEl('.ant-form-explain');
    if (text == null) {
      expect(el == null).toBe(true);
      return this;
    }
    expect(el.textContent!.trim().includes(text)).toBe(true);
    return this;
  }

  click(cls: string): this {
    const el = this.getEl(cls);
    expect(el).not.toBeNull();
    el.click();
    return this.dc();
  }

  typeChar(value: any, cls = 'input'): this {
    const node = this.getEl(cls) as HTMLInputElement;
    typeInElement(value, node);
    tick();
    return this.dc();
  }

  typeEvent(eventName: string, cls = 'input'): this {
    const node = document.querySelector(cls) as HTMLInputElement;
    if (node == null) {
      expect(true).toBe(false, `won't found '${cls}' class element`);
      return this;
    }
    dispatchFakeEvent(node, eventName);
    return this.time().dc();
  }

  time(time = 0) {
    tick(time);
    return this;
  }

  dc(time = 0) {
    fixture.detectChanges();
    if (time > 0) {
      this.time(time);
      fixture.detectChanges();
    }
    return this;
  }

  asyncEnd(time = 500) {
    this.time(time);
    discardPeriodicTasks();
    return this;
  }
}

@Component({
  template: `
    <sf
      [layout]="layout"
      #comp
      [schema]="schema"
      [ui]="ui"
      [formData]="formData"
      [button]="button"
      [liveValidate]="liveValidate"
      [autocomplete]="autocomplete"
      [firstVisual]="firstVisual"
      [onlyVisual]="onlyVisual"
      [disabled]="disabled"
      [loading]="loading"
      [noColon]="noColon"
      (formChange)="formChange($event)"
      (formSubmit)="formSubmit($event)"
      (formReset)="formReset($event)"
      (formError)="formError($event)"
    ></sf>
  `,
})
export class TestFormComponent {
  @ViewChild('comp', { static: true }) comp: SFComponent;
  mode: 'default' | 'search' | 'edit' = 'default';
  layout = 'horizontal';
  schema: SFSchema | null = SCHEMA.user;
  ui: SFUISchema | null = {};
  formData: any;
  button: SFButton | 'none' | null | undefined = {};
  liveValidate = true;
  autocomplete: 'on' | 'off';
  firstVisual = true;
  onlyVisual = false;
  disabled = false;
  loading = false;
  noColon = false;

  formChange() {}
  formSubmit() {}
  formReset() {}
  formError() {}
}
