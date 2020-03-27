import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync } from '@angular/core/testing';
import { createTestContext } from '@delon/testing';
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

  it('#setValue', fakeAsync(() => {
    page.newSchema({
      properties: {
        a: { type: 'string', ui: { widget }, enum: ['item1', 'item2'] },
      },
    });
    page.setValue('/a', 'item1').dc(1);
    expect(page.getEl('.ant-select-selection-item').textContent!.trim()).toBe('item1');
    page.setValue('/a', 'item2').dc(1);
    expect(page.getEl('.ant-select-selection-item').textContent!.trim()).toBe('item2');
  }));

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
    page.newSchema(s).typeEvent('click', 'nz-select').checkCount('.ant-select-disabled', 1).asyncEnd();
  }));

  xit('#events', fakeAsync(() => {
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
    page.newSchema(s).typeEvent('click', 'nz-select-top-control').dc(1000);
    const el = document.querySelector('.ant-select-dropdown-menu-item:not(.ant-select-dropdown-menu-item-selected)') as HTMLElement;
    el.click();
    page.dc().checkValue('/a', 'TRADE_SUCCESS').asyncEnd();
    const item = s.properties!.a.ui as any;
    expect(item.change).toHaveBeenCalled();
    expect(item.openChange).toHaveBeenCalled();
    getWidget().scrollToBottom();
    expect(item.scrollToBottom).toHaveBeenCalled();
    getWidget().searchChange('a');
    expect(item.onSearch).toHaveBeenCalled();
  }));

  it('should be clean value by click icon', fakeAsync(() => {
    const s: SFSchema = {
      properties: {
        a: {
          type: 'number',
          title: '状态',
          enum: [1, 2],
          default: 1,
          ui: {
            widget,
            allowClear: true,
          },
        },
      },
    };
    page.newSchema(s).checkValue('/a', 1).time().typeEvent('click', '.ant-select-close-icon').time().checkValue('/a', undefined).asyncEnd();
  }));
});
