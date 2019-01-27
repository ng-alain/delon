import { DebugElement } from '@angular/core';
import { fakeAsync, ComponentFixture } from '@angular/core/testing';
import { createTestContext } from '@delon/testing';
import { NzSelectComponent } from 'ng-zorro-antd';

import { configureSFTestSuite, SFPage, TestFormComponent } from '../../../spec/base.spec';
import { SFSchema } from '../../../src/schema/index';
import { SelectWidget } from './select.widget';

describe('form: widget: select', () => {
  let fixture: ComponentFixture<TestFormComponent>;
  let dl: DebugElement;
  let context: TestFormComponent;
  let page: SFPage;
  const widget = 'select';

  configureSFTestSuite();

  beforeEach(() => {
    ({ fixture, dl, context } = createTestContext(TestFormComponent));
    page = new SFPage(context.comp);
    page.cleanOverlay().prop(dl, context, fixture);
  });

  function getWidget() {
    return page.getWidget<SelectWidget>('sf-' + widget);
  }

  function getSelect() {
    return page.getWidget<NzSelectComponent>('nz-select');
  }

  it('should be disabled when readOnly is true', fakeAsync(() => {
    const s: SFSchema = {
      properties: {
        a: {
          type: 'string',
          title: '状态',
          enum: [
            { label: '待支付', value: 'WAIT_BUYER_PAY' },
            { label: '已支付', value: 'TRADE_SUCCESS' },
            { label: '交易完成', value: 'TRADE_FINISHED' },
          ],
          default: 'WAIT_BUYER_PAY',
          ui: {
            widget,
          },
          readOnly: true,
        },
      },
    };
    page
      .newSchema(s)
      .typeEvent('click', 'nz-select')
      .checkCount('.ant-select-disabled', 1)
      .asyncEnd();
  }));

  describe('#events', () => {
    it('should be working', fakeAsync(() => {
      const s: SFSchema = {
        properties: {
          a: {
            type: 'string',
            title: '状态',
            enum: [
              { label: '待支付', value: 'WAIT_BUYER_PAY' },
              { label: '已支付', value: 'TRADE_SUCCESS' },
              { label: '交易完成', value: 'TRADE_FINISHED' },
            ],
            default: 'WAIT_BUYER_PAY',
            ui: {
              widget,
              change: jasmine.createSpy(),
              openChange: jasmine.createSpy(),
              onSearch: jasmine.createSpy().and.returnValue(Promise.resolve()),
              scrollToBottom: jasmine.createSpy(),
            },
          },
        },
      };
      page.newSchema(s).typeEvent('click', 'nz-select');
      const el = document.querySelector(
        '.ant-select-dropdown-menu-item:not(.ant-select-dropdown-menu-item-selected)',
      ) as HTMLElement;
      el.click();
      page
        .dc()
        .checkValue('/a', 'TRADE_SUCCESS')
        .asyncEnd();
      const item = s.properties.a.ui as any;
      expect(item.change).toHaveBeenCalled();
      expect(item.openChange).toHaveBeenCalled();
      getWidget().scrollToBottom();
      expect(item.scrollToBottom).toHaveBeenCalled();
      getWidget().searchChange('a');
      expect(item.onSearch).toHaveBeenCalled();
    }));
  });
});
