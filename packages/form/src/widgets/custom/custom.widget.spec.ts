import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { builder, SFPage, TestFormComponent } from '../../../spec/base.spec';
import { SFSchema } from '../../../src/schema/index';

describe('form: widget: custom', () => {
  let fixture: ComponentFixture<TestFormComponent>;
  let dl: DebugElement;
  let context: TestFormComponent;
  let page: SFPage;
  const schema: SFSchema = {
    properties: { a: { type: 'string', ui: { widget: 'custom' } } },
  };

  function detectChanges(path = '/a') {
    context.comp.rootProperty.searchProperty(path).widget.detectChanges();
    fixture.detectChanges();
    return page;
  }

  it('should be auto fix path when not start with /', () => {
    ({ fixture, dl, context, page } = builder({
      detectChanges: false,
      template: `<sf [schema]="schema" #comp><ng-template sf-template="a">custom:<div class="custom-el">{{ id }}</div></ng-template></sf>`,
    }));
    page.newSchema(schema);
    detectChanges().checkCount('.custom-el', 1);
  });

  it('should be warn when duplicate definition', () => {
    spyOn(console, 'warn');
    ({ fixture, dl, context, page } = builder({
      detectChanges: false,
      template: `<sf [schema]="schema" #comp>
      <ng-template sf-template="a">custom:<div class="custom-el">{{ id }}</div></ng-template>
      <ng-template sf-template="a">custom:<div class="custom-el">{{ id }}</div></ng-template>
      </sf>`,
    }));
    page.newSchema(schema);
    expect(console.warn).toHaveBeenCalled();
  });

  it('should be re-attach custom template when refresh schema', () => {
    ({ fixture, dl, context, page } = builder({
      detectChanges: false,
      template: `<sf [schema]="schema" [formData]="formData" #comp>
      <ng-template sf-template="/a">custom:<div class="custom-el">{{ id }}</div></ng-template>
      </sf>`,
    }));
    page.newSchema({
      properties: {},
    });
    page.checkCount('.custom-el', 0);
    page.newSchema(schema);
    page.checkCount('.custom-el', 1);
  });
});
