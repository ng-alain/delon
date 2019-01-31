import { DebugElement } from '@angular/core';
import { fakeAsync, ComponentFixture } from '@angular/core/testing';

import { createTestContext } from '@delon/testing';
import {
  configureSFTestSuite,
  SFPage,
  TestFormComponent,
} from '../../../spec/base.spec';
import { SFSchema } from '../../../src/schema/index';

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

});
