import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync } from '@angular/core/testing';
import { createTestContext } from '@delon/testing';
import { of } from 'rxjs';
import { configureSFTestSuite, SFPage, TestFormComponent } from '../../../spec/base.spec';
import { SFSchema } from '../../../src/schema/index';

describe('form: widget: tree-select', () => {
  let fixture: ComponentFixture<TestFormComponent>;
  let page: SFPage;
  let context: TestFormComponent;
  let dl: DebugElement;
  const widget = 'tree-select';

  configureSFTestSuite();

  beforeEach(() => {
    ({ fixture, dl, context } = createTestContext(TestFormComponent));
    page = new SFPage(context.comp);
    page.prop(dl, context, fixture);
  });

  it('should working', fakeAsync(() => {
    const s: SFSchema = {
      properties: {
        a: {
          type: 'string',
          title: '基本',
          enum: [
            { title: '待支付', key: 'WAIT_BUYER_PAY' },
            { title: '已支付', key: 'TRADE_SUCCESS' },
            { title: '交易完成', key: 'TRADE_FINISHED' },
          ],
          default: 'WAIT_BUYER_PAY',
          ui: {
            widget,
          },
        },
      },
    };

    page
      .newSchema(s)
      .typeEvent('click', '.ant-select')
      .typeEvent('click', 'nz-tree-node:nth-child(2) nz-tree-node-title')
      .dc(1)
      .checkValue('a', 'TRADE_SUCCESS')
      .asyncEnd(1000);
  }));

  it('#setValue', fakeAsync(() => {
    const s: SFSchema = {
      properties: {
        a: {
          type: 'string',
          title: '基本',
          enum: [
            { title: '待支付', key: 'WAIT_BUYER_PAY' },
            { title: '已支付', key: 'TRADE_SUCCESS' },
            { title: '交易完成', key: 'TRADE_FINISHED' },
          ],
          default: 'TRADE_SUCCESS',
          ui: {
            widget,
          },
        },
      },
    };
    page.newSchema(s).dc(1);
    expect(page.getEl('.ant-select-selection-item').textContent!.trim()).toContain('已支付');
    page.setValue('/a', 'TRADE_FINISHED').dc(1);
    expect(page.getEl('.ant-select-selection-item').textContent!.trim()).toContain('交易完成');
  }));

  it('#change', fakeAsync(() => {
    const s: SFSchema = {
      properties: {
        a: {
          type: 'string',
          title: '基本',
          enum: [
            { title: '待支付', key: 'WAIT_BUYER_PAY' },
            { title: '已支付', key: 'TRADE_SUCCESS' },
            { title: '交易完成', key: 'TRADE_FINISHED' },
          ],
          default: 'WAIT_BUYER_PAY',
          ui: {
            widget,
            change: jasmine.createSpy(),
          },
        },
      },
    };
    page
      .newSchema(s)
      .typeEvent('click', '.ant-select')
      .typeEvent('click', 'nz-tree-node:nth-child(2) nz-tree-node-title')
      .checkValue('a', 'TRADE_SUCCESS')
      .asyncEnd(1000);
    expect((s.properties!.a.ui as any).change).toHaveBeenCalled();
  }));

  it('#expandChange', fakeAsync(() => {
    const s: SFSchema = {
      properties: {
        a: {
          type: 'string',
          title: '基本',
          enum: [
            { title: '待支付', key: 'WAIT_BUYER_PAY' },
            { title: '已支付', key: 'TRADE_SUCCESS' },
            { title: '交易完成', key: 'TRADE_FINISHED' },
          ],
          default: 'WAIT_BUYER_PAY',
          ui: {
            widget,
            expandChange: jasmine.createSpy().and.returnValue(of([])),
          },
        },
      },
    };
    page
      .newSchema(s)
      .typeEvent('click', '.ant-select')
      .typeEvent('click', '.ant-select-tree-switcher-icon')
      .typeEvent('click', 'nz-tree-node:nth-child(2) nz-tree-node-title')
      .checkValue('a', 'TRADE_SUCCESS')
      .asyncEnd(1000);
    expect((s.properties!.a.ui as any).expandChange).toHaveBeenCalled();
  }));
});
