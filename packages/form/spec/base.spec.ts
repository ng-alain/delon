import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component, DebugElement, ViewChild } from '@angular/core';
import { ComponentFixture, discardPeriodicTasks, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { NzSafeAny } from 'ng-zorro-antd/core/types';

import { cleanCdkOverlayHtml, dispatchFakeEvent, typeInElement } from '@delon/testing';
import { AlainThemeModule } from '@delon/theme';
import { deepCopy, deepGet } from '@delon/util/other';

import { SF_SEQ } from '../src/const';
import { SFButton } from '../src/interface';
import { FormProperty } from '../src/model/form.property';
import { DelonFormModule } from '../src/module';
import { SFSchema } from '../src/schema';
import { SFUISchema } from '../src/schema/ui';
import { SFComponent } from '../src/sf.component';

export const SCHEMA = {
  user: {
    properties: {
      name: {
        type: 'string'
      },
      pwd: {
        type: 'string'
      }
    },
    required: ['name', 'pwd']
  } as SFSchema
};

let fixture: ComponentFixture<TestFormComponent>;
let dl: DebugElement;
let context: TestFormComponent;
export function builder(options?: {
  detectChanges?: boolean;
  template?: string;
  ingoreAntd?: boolean;
  imports?: NzSafeAny[];
}): {
  fixture: ComponentFixture<TestFormComponent>;
  dl: DebugElement;
  context: TestFormComponent;
  page: SFPage;
} {
  options = { detectChanges: true, ...options };
  TestBed.configureTestingModule({
    imports: [NoopAnimationsModule, AlainThemeModule.forRoot(), DelonFormModule.forRoot()].concat(
      options.imports || []
    ),
    declarations: [TestFormComponent]
  });
  if (options.template) {
    TestBed.overrideTemplate(TestFormComponent, options.template);
  }
  fixture = TestBed.createComponent(TestFormComponent);
  dl = fixture.debugElement;
  context = fixture.componentInstance;
  spyOn(context, 'formChange');
  spyOn(context, 'formValueChange');
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
    page
  };
}

export function configureSFTestSuite(): void {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, AlainThemeModule.forRoot(), DelonFormModule.forRoot(), HttpClientTestingModule],
      declarations: [TestFormComponent]
    });
  });
}

export class SFPage {
  constructor(private comp: SFComponent) {}

  prop(_dl: DebugElement, _context: TestFormComponent, _fixture: ComponentFixture<TestFormComponent>): void {
    dl = _dl;
    context = _context;
    fixture = _fixture;
    spyOn(context, 'formValueChange');
    spyOn(context, 'formChange');
    spyOn(context, 'formSubmit');
    spyOn(context, 'formReset');
    spyOn(context, 'formError');
    this.cleanOverlay();
  }

  cleanOverlay(): this {
    cleanCdkOverlayHtml();
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

  private fixPath(path: string): string {
    return path.startsWith(SF_SEQ) ? path : SF_SEQ + path;
  }

  getValue(path: string): NzSafeAny {
    path = this.fixPath(path);
    return this.comp.getValue(path);
  }

  setValue(path: string, value: NzSafeAny, dc: number = 0): this {
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

  submit(result: boolean = true): this {
    this.getEl('[data-type="submit"]').click();
    if (result) {
      expect(context.formSubmit).toHaveBeenCalled();
    } else {
      expect(context.formSubmit).not.toHaveBeenCalled();
    }
    return this;
  }

  reset(result: boolean = true): this {
    this.getEl('[data-type="reset"]').click();
    if (result) {
      expect(context.formReset).toHaveBeenCalled();
    } else {
      expect(context.formReset).not.toHaveBeenCalled();
    }
    return this;
  }

  isValid(result: boolean = true): this {
    this.submit(result);
    expect(this.comp.valid).toBe(result);
    return this;
  }

  add(): this {
    this.getEl('.sf__array-add button').click();
    return this.dc();
  }
  /** 下标从 `1` 开始 */
  remove(index: number = 1): this {
    this.getEl(`.sf__array-container [data-index="${index - 1}"] .sf__array-remove`).click();
    return this.dc();
  }

  newSchema(schema: SFSchema, ui?: SFUISchema, formData?: NzSafeAny): this {
    context.schema = schema;
    if (typeof ui !== 'undefined') context.ui = ui;
    if (typeof formData !== 'undefined') context.formData = formData;
    return this.dc();
  }

  /** 强制指定 `a` 节点 */
  chainSchema(schema: SFSchema, overObject: SFSchema): this {
    context.schema = {
      ...deepCopy(schema),
      properties: { a: overObject }
    };
    return this.dc();
  }

  checkSchema(path: string, propertyName: string, value: NzSafeAny): this {
    path = this.fixPath(path);
    const property = this.comp.rootProperty!.searchProperty(path);
    expect(property != null).toBe(true);
    const item = property!.schema;
    const res = deepGet(item, propertyName.split('.'), undefined);
    expect(res).toBe(value);
    return this;
  }

  checkUI(path: string, propertyName: string, value: NzSafeAny): this {
    path = this.fixPath(path);
    const property = this.comp.rootProperty!.searchProperty(path);
    expect(property != null).toBe(true);
    const item = property!.ui;
    const res = deepGet(item, propertyName.split('.'), undefined);
    expect(res).toBe(value);
    return this;
  }

  checkValue(path: string, value: NzSafeAny, propertyName?: string): this {
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

  checkCalled(path: string, propertyName: string, result: boolean = true): this {
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

  checkElText(cls: string, value: NzSafeAny, viaDocument: boolean = false): this {
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
    expect((el.style as NzSafeAny)[key]).toBe(value);
    return this;
  }

  checkAttr(cls: string, key: string, value: NzSafeAny, required: boolean = true): this {
    const el = this.getEl(cls);
    const attr = el.attributes.getNamedItem(key);
    if (required) expect(attr!.textContent).toBe(value);
    else expect(attr).toBe(value);
    return this;
  }

  checkCount(cls: string, count: number, viaDocument: boolean = false): this {
    const len = viaDocument ? document.querySelectorAll(cls).length : dl.queryAll(By.css(cls)).length;
    expect(len).toBe(count);
    return this;
  }

  checkInput(cls: string, value: NzSafeAny, viaDocument: boolean = false): this {
    const ipt = (viaDocument ? document.querySelector(cls) : dl.query(By.css(cls)).nativeElement) as HTMLInputElement;
    expect(ipt.value).toBe(value);
    return this;
  }

  checkError(text: string): this {
    const el = this.getEl('.ant-form-item-explain');
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

  typeChar(value: NzSafeAny, cls: string = 'input'): this {
    const node = this.getEl(cls) as HTMLInputElement;
    typeInElement(value, node);
    tick();
    return this.dc();
  }

  typeEvent(eventName: string | Event, cls: string = 'input'): this {
    const node = document.querySelector(cls) as HTMLInputElement;
    if (node == null) {
      expect(true).toBe(false, `won't found '${cls}' class element`);
      return this;
    }
    dispatchFakeEvent(node, eventName);
    fixture.detectChanges();
    return this.time(1000).dc();
  }

  time(time: number = 0): this {
    tick(time);
    return this;
  }

  dc(time: number = 0): this {
    fixture.detectChanges();
    if (time > 0) {
      this.time(time);
      fixture.detectChanges();
    }
    return this;
  }

  asyncEnd(time: number = 500): this {
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
      [cleanValue]="cleanValue"
      (formChange)="formChange($event)"
      (formValueChange)="formValueChange($event)"
      (formSubmit)="formSubmit($event)"
      (formReset)="formReset($event)"
      (formError)="formError($event)"
    ></sf>
  `
})
export class TestFormComponent {
  @ViewChild('comp', { static: true }) comp: SFComponent;
  mode: 'default' | 'search' | 'edit' = 'default';
  layout = 'horizontal';
  schema: SFSchema | null = SCHEMA.user;
  ui: SFUISchema | null = {};
  formData: NzSafeAny;
  button: SFButton | 'none' | null | undefined = {};
  liveValidate = true;
  autocomplete: 'on' | 'off';
  firstVisual = true;
  onlyVisual = false;
  disabled = false;
  loading = false;
  noColon = false;
  cleanValue = false;

  formChange(): void {}
  formValueChange(): void {}
  formSubmit(): void {}
  formReset(): void {}
  formError(): void {}
}
