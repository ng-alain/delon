import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync } from '@angular/core/testing';

import { createTestContext } from '@delon/testing';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

import { configureSFTestSuite, SFPage, TestFormComponent } from '../../../spec/base.spec';
import { SFSchema } from '../../schema';
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

  it('#setValue', fakeAsync(() => {
    page.newSchema({
      properties: {
        a: { type: 'string', ui: { widget }, enum: ['item1', 'item2'] }
      }
    });
    page.setValue('/a', 'item1').dc(1);
    expect(page.getEl('.ant-checkbox-checked').nextSibling!.textContent).toBe('item1');
    page.setValue('/a', 'item2').dc(1);
    expect(page.getEl('.ant-checkbox-checked').nextSibling!.textContent).toBe('item2');
  }));

  it('#visibleIf', () => {
    page
      .newSchema({
        properties: {
          a: { type: 'string', ui: { widget } },
          b: { type: 'string', ui: { widget, visibleIf: { a: [true] } } }
        }
      })
      .checkCount(chekcWrapCls, 1)
      .click(chekcWrapCls)
      .checkCount(chekcWrapCls, 2);
  });

  it('should be ingore title when not array data', () => {
    const title = 'test';
    page
      .newSchema({
        properties: { a: { type: 'string', title, ui: { widget } } }
      })
      .checkElText(labelCls, '')
      .checkElText(chekcWrapCls, title);
  });

  it('should be show title when is array data', fakeAsync(() => {
    const title = 'test';
    page
      .newSchema({
        properties: {
          a: { type: 'string', title, ui: { widget }, enum: ['item1', 'item2'] }
        }
      })
      .time(1000)
      .checkElText(labelCls, title)
      .checkElText(chekcWrapCls, 'item1')
      .asyncEnd();
  }));

  describe('#checkAll', () => {
    it('should be working', () => {
      page.newSchema({
        properties: {
          a: {
            type: 'string',
            title: 'Mulit',
            enum: ['Apple', 'Pear', 'Orange'],
            ui: {
              widget: 'checkbox',
              span: 8, // 指定每一项 8 个单元的布局
              checkAll: true
            },
            default: ['Apple']
          }
        }
      });
      const comp = page.getWidget<CheckboxWidget>('sf-checkbox');
      const checkAllBtn = page.getEl('.sf__checkbox-list .ant-checkbox');
      checkAllBtn.click();
      expect(comp.allChecked).toBe(true);
      checkAllBtn.click();
      expect(comp.allChecked).toBe(false);
    });
    it('should be indeterminate when defaut inlcudes value', () => {
      page
        .newSchema({
          properties: {
            a: {
              type: 'string',
              title: 'Mulit',
              enum: ['Apple', 'Pear', 'Orange'],
              ui: {
                widget: 'checkbox',
                checkAll: true
              },
              default: ['Apple']
            }
          }
        })
        .checkCount('.sf__checkbox-all .ant-checkbox-indeterminate', 1);
    });
  });

  it('should be use nz-checkbox-wrapper when spcify grid_span value', fakeAsync(() => {
    const s: SFSchema = {
      properties: {
        a: {
          type: 'string',
          ui: { widget, span: 8, change: jasmine.createSpy() },
          enum: ['item1', 'item2']
        }
      }
    };
    page.newSchema(s).time(1000).checkCount('nz-checkbox-wrapper', 1).click('.ant-col-8 label').asyncEnd();
    expect(page.getValue('a').length).toBe(1);
    expect((s.properties!.a.ui as NzSafeAny).change).toHaveBeenCalled();
  }));
});
