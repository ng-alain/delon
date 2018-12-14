import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';

import {
  builder,
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

  beforeEach(() =>
    ({ fixture, dl, context, page } = builder({ detectChanges: false })));

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
