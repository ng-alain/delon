import { Component, signal, Type, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlainThemeModule } from '@delon/theme';
import { provideNzNoAnimation } from 'ng-zorro-antd/core/animation';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { SFPage } from '../../../spec/base';
import { DelonFormModule } from '../../../src/module';
import { SFSchema } from '../../../src/schema/index';
import { SFComponent } from '../../../src/sf.component';

/** 自定义模板的宿主必须是实体组件，AOT 只能按宿主类型检查插值 */
abstract class CustomHostBase {
  readonly schema = signal<SFSchema | undefined>(undefined);
  /** 自定义模板的上下文实际是 widget，AOT 只能按宿主类型检查模板插值 */
  readonly id = '';

  formChange(_value: Record<string, unknown>): void {}
  formValueChange(_value: Record<string, unknown>): void {}
  formSubmit(_value: Record<string, unknown>): void {}
  formReset(_value: Record<string, unknown>): void {}
  formError(_value: NzSafeAny[]): void {}
}

@Component({
  template: `
    <sf [schema]="schema()" #comp>
      <ng-template sf-template="a">
        custom:<div class="custom-el">{{ id }}</div>
      </ng-template>
    </sf>
  `,
  imports: [DelonFormModule]
})
class PathHostComponent extends CustomHostBase {
  @ViewChild('comp', { static: true }) comp!: SFComponent;
}

@Component({
  template: `
    <sf [schema]="schema()" #comp>
      <ng-template sf-template="a">
        custom:<div class="custom-el">{{ id }}</div>
      </ng-template>
      <ng-template sf-template="a">
        custom:<div class="custom-el">{{ id }}</div>
      </ng-template>
    </sf>
  `,
  imports: [DelonFormModule]
})
class DuplicateHostComponent extends CustomHostBase {
  @ViewChild('comp', { static: true }) comp!: SFComponent;
}

@Component({
  template: `
    <sf [schema]="schema()" #comp>
      <ng-template sf-template="/a">
        custom:<div class="custom-el">{{ id }}</div>
      </ng-template>
    </sf>
  `,
  imports: [DelonFormModule]
})
class ReAttachHostComponent extends CustomHostBase {
  @ViewChild('comp', { static: true }) comp!: SFComponent;
}

describe('form: widget: custom', () => {
  let fixture: ComponentFixture<CustomHostBase>;
  let page: SFPage;
  const schema: SFSchema = {
    properties: { a: { type: 'string', ui: { widget: 'custom' } } }
  };

  function setup<T>(host: Type<T>): void {
    TestBed.configureTestingModule({
      providers: [provideNzNoAnimation()],
      imports: [AlainThemeModule, DelonFormModule.forRoot(), host]
    });
    fixture = TestBed.createComponent(host) as unknown as ComponentFixture<CustomHostBase>;
    const dl = fixture.debugElement;
    page = new SFPage((fixture.componentInstance as NzSafeAny).comp as SFComponent);
    page.prop(dl, fixture.componentInstance as NzSafeAny, fixture as NzSafeAny);
  }

  it('should be auto fix path when not start with /', () => {
    setup(PathHostComponent);
    page.newSchema(schema);
    page.checkCount('.custom-el', 1);
  });

  it('should be warn when duplicate definition', () => {
    vi.spyOn(console, 'warn').mockReturnValue(undefined);
    setup(DuplicateHostComponent);
    page.newSchema(schema);
    expect(console.warn).toHaveBeenCalled();
  });

  it('should be re-attach custom template when refresh schema', () => {
    setup(ReAttachHostComponent);
    page.newSchema({
      properties: {}
    });
    page.checkCount('.custom-el', 0);
    page.newSchema(schema);
    page.checkCount('.custom-el', 1);
  });
});
