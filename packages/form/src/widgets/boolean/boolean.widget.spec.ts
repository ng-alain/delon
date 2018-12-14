import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';

import { createTestContext } from '@delon/testing';
import {
  configureSFTestSuite,
  SFPage,
  TestFormComponent,
} from '../../../spec/base.spec';
import { SFSchema } from '../../../src/schema/index';

describe('form: widget: boolean', () => {
  let fixture: ComponentFixture<TestFormComponent>;
  let dl: DebugElement;
  let context: TestFormComponent;
  let page: SFPage;
  const widget = 'boolean';
  const clickCls = '.ant-switch';

  configureSFTestSuite();

  beforeEach(() => {
    ({ fixture, dl, context } = createTestContext(TestFormComponent));
    page = new SFPage(context.comp);
    page.prop(dl, context, fixture);
  });

  it('should be default true via schema.default', () => {
    const s: SFSchema = {
      properties: { a: { type: 'string', ui: { widget }, default: true } },
    };
    page.newSchema(s).checkValue('a', true);
  });

  describe('[ui]', () => {
    it('should be custom (un)checked children', () => {
      const s: SFSchema = {
        properties: {
          a: {
            type: 'string',
            ui: { widget, checkedChildren: 'Y', unCheckedChildren: 'N' },
          },
        },
      };
      page
        .newSchema(s)
        .click(clickCls)
        .checkElText('.ant-switch-inner', 'Y')
        .click(clickCls)
        .checkElText('.ant-switch-inner', 'N');
    });
  });
});
