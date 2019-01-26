import { ComponentFixture } from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { createTestContext } from '@delon/testing';
import { configureSFTestSuite, SFPage, TestFormComponent } from '../../../spec/base.spec';
import { SFSchema } from '../../../src/schema/index';
import { CheckboxWidget } from './checkbox.widget';

describe('form: widget: checkbox', () => {
  let fixture: ComponentFixture<TestFormComponent>;
  let dl: DebugElement;
  let context: TestFormComponent;
  let page: SFPage;
  const widget = 'checkbox';
  const labelCls = '.ant-form-item-label';
  const chekcWrapCls = '.ant-checkbox-wrapper';

  configureSFTestSuite();

  beforeEach(() => {
    ({ fixture, dl, context } = createTestContext(TestFormComponent));
    page = new SFPage(context.comp);
    page.prop(dl, context, fixture);
  });

  it('#visibleIf', () => {
    const s: SFSchema = {
      properties: {
        a: { type: 'string', ui: { widget } },
        b: { type: 'string', ui: { widget, visibleIf: { a: [true] } } },
      },
    };
    page
      .newSchema(s)
      .checkCount(chekcWrapCls, 1)
      .click(chekcWrapCls)
      .checkCount(chekcWrapCls, 2);
  });

  it('should be ingore title when not array data', () => {
    const title = 'test';
    const s: SFSchema = {
      properties: { a: { type: 'string', title, ui: { widget } } },
    };
    page
      .newSchema(s)
      .checkElText(labelCls, '')
      .checkElText(chekcWrapCls, title);
  });

  it('should be show title when is array data', done => {
    const title = 'test';
    const s: SFSchema = {
      properties: {
        a: { type: 'string', title, ui: { widget }, enum: ['item1', 'item2'] },
      },
    };
    page.newSchema(s);
    fixture.whenStable().then(() => {
      page.checkElText(labelCls, title);
      page.checkElText(chekcWrapCls, 'item1');
      done();
    });
  });

  describe('#checkAll', () => {
    it('should be working', () => {
      const s: SFSchema = {
        properties: {
          a: {
            type: 'string',
            title: 'Mulit',
            enum: ['Apple', 'Pear', 'Orange'],
            ui: {
              widget: 'checkbox',
              span: 8, // 指定每一项 8 个单元的布局
              checkAll: true,
            },
            default: ['Apple'],
          },
        },
      };
      page.newSchema(s);
      const comp = page.getWidget<CheckboxWidget>('sf-checkbox');
      const checkAllBtn = page.getEl('.sf__checkbox-list .ant-checkbox-wrapper');
      checkAllBtn.click();
      expect(comp.allChecked).toBe(true);
      checkAllBtn.click();
      expect(comp.allChecked).toBe(false);
    });
  });
});
