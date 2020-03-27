import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync } from '@angular/core/testing';
import { createTestContext } from '@delon/testing';
import { configureSFTestSuite, SFPage, TestFormComponent } from '../../../spec/base.spec';

describe('form: widget: boolean', () => {
  let fixture: ComponentFixture<TestFormComponent>;
  let dl: DebugElement;
  let context: TestFormComponent;
  let page: SFPage;
  const clickCls = '.ant-switch';

  configureSFTestSuite();

  beforeEach(() => {
    ({ fixture, dl, context } = createTestContext(TestFormComponent));
    page = new SFPage(context.comp);
    page.prop(dl, context, fixture);
  });

  it('#setValue', fakeAsync(() => {
    page
      .newSchema({
        properties: { a: { type: 'boolean', default: true } },
      })
      .dc(1)
      .checkCount('.ant-switch-checked', 1)
      .setValue('/a', false)
      .dc(1)
      .checkCount('.ant-switch-checked', 0);
  }));

  it('should be default true via schema.default', () => {
    page
      .newSchema({
        properties: { a: { type: 'boolean', default: true } },
      })
      .checkValue('a', true);
  });

  describe('[ui]', () => {
    it('should be custom (un)checked children', () => {
      page
        .newSchema({
          properties: {
            a: {
              type: 'boolean',
              ui: { checkedChildren: 'Y', unCheckedChildren: 'N' },
            },
          },
        })
        .click(clickCls)
        .checkElText('.ant-switch-inner', 'Y')
        .click(clickCls)
        .checkElText('.ant-switch-inner', 'N');
    });
  });
});
