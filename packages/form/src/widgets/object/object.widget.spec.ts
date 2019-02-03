import { DebugElement } from '@angular/core';
import { fakeAsync, ComponentFixture } from '@angular/core/testing';

import { createTestContext } from '@delon/testing';
import { configureSFTestSuite, SFPage, TestFormComponent } from '../../../spec/base.spec';
import { SFSchema } from '../../../src/schema/index';
import { ObjectProperty } from '../../model/object.property';

describe('form: widget: object', () => {
  let fixture: ComponentFixture<TestFormComponent>;
  let dl: DebugElement;
  let context: TestFormComponent;
  let page: SFPage;
  const widget = 'object';

  configureSFTestSuite();

  beforeEach(() => {
    ({ fixture, dl, context } = createTestContext(TestFormComponent));
    page = new SFPage(context.comp);
    page.prop(dl, context, fixture);
  });

  it('should working', fakeAsync(() => {
    page
      .newSchema({
        properties: {
          a: {
            type: 'object',
            properties: {
              b: { type: 'string' },
            },
          },
        },
      })
      .setValue('/a', { b: 1, c: 0 })
      .time();
    const ipt = page.getEl('.ant-input') as HTMLInputElement;
    expect(ipt.value).toBe('1');
  }));
});
