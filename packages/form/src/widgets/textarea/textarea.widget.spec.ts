import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync } from '@angular/core/testing';
import { createTestContext } from '@delon/testing';
import { configureSFTestSuite, SFPage, TestFormComponent } from '../../../spec/base.spec';
import { SFSchema } from '../../../src/schema/index';
import { SFTextareaWidgetSchema } from './schema';

describe('form: widget: textarea', () => {
  let fixture: ComponentFixture<TestFormComponent>;
  let dl: DebugElement;
  let context: TestFormComponent;
  let page: SFPage;
  const widget = 'textarea';

  configureSFTestSuite();

  beforeEach(() => {
    ({ fixture, dl, context } = createTestContext(TestFormComponent));
    page = new SFPage(context.comp);
    page.prop(dl, context, fixture);
  });

  it('should working', () => {
    const s: SFSchema = {
      properties: { a: { type: 'string', ui: { widget, autosize: true } } },
    };
    page.newSchema(s).checkCount('textarea', 1);
  });

  it('#event', fakeAsync(() => {
    const schema: SFSchema = {
      properties: {
        a: {
          type: 'string',
          ui: {
            widget,
            autosize: true,
            change: jasmine.createSpy('change'),
            focus: jasmine.createSpy('focus'),
            blur: jasmine.createSpy('blur'),
          } as SFTextareaWidgetSchema,
        },
      },
    };
    page.newSchema(schema);
    const ui = schema.properties!.a.ui as SFTextareaWidgetSchema;
    // change
    page.typeChar('a', 'textarea');
    expect(ui.change).toHaveBeenCalled();
    // focus
    page.typeEvent('focus', 'textarea');
    expect(ui.focus).toHaveBeenCalled();
    // blur
    page.typeEvent('blur', 'textarea');
    expect(ui.blur).toHaveBeenCalled();
  }));
});
