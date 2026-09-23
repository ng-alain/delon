import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

import { SFSchema } from '@delon/form';
import { createTestContext } from '@delon/testing';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { withTreeSelectWidget } from './index';
import type { TreeSelectWidget } from './widget';
import { configureSFTestSuite, SFPage, TestFormComponent } from '../../spec/base.spec';

describe('form: widget: tree-select', () => {
  let fixture: ComponentFixture<TestFormComponent>;
  let page: SFPage;
  let context: TestFormComponent;
  let dl: DebugElement;
  const widget = 'tree-select';

  configureSFTestSuite({ widgets: [withTreeSelectWidget()] });

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
            { title: '交易完成', key: 'TRADE_FINISHED' }
          ],
          default: 'WAIT_BUYER_PAY',
          ui: {
            widget
          }
        }
      }
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
            { title: '交易完成', key: 'TRADE_FINISHED' }
          ],
          default: 'TRADE_SUCCESS',
          ui: {
            widget
          }
        }
      }
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
            { title: '交易完成', key: 'TRADE_FINISHED' }
          ],
          default: 'WAIT_BUYER_PAY',
          ui: {
            widget,
            change: jasmine.createSpy()
          }
        }
      }
    };
    page
      .newSchema(s)
      .typeEvent('click', '.ant-select')
      .typeEvent('click', 'nz-tree-node:nth-child(2) nz-tree-node-title')
      .checkValue('a', 'TRADE_SUCCESS')
      .asyncEnd(1000);
    expect((s.properties!.a.ui as NzSafeAny).change).toHaveBeenCalled();
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
            { title: '交易完成', key: 'TRADE_FINISHED' }
          ],
          default: 'WAIT_BUYER_PAY',
          ui: {
            widget,
            expandChange: jasmine.createSpy().and.returnValue(of([]))
          }
        }
      }
    };
    page
      .newSchema(s)
      .typeEvent('click', '.ant-select')
      .typeEvent('click', '.ant-select-tree-switcher-icon')
      .typeEvent('click', 'nz-tree-node:nth-child(2) nz-tree-node-title')
      .checkValue('a', 'TRADE_SUCCESS')
      .asyncEnd(1000);
    expect((s.properties!.a.ui as NzSafeAny).expandChange).toHaveBeenCalled();
  }));

  it('#expandChange should render async children into the DOM', fakeAsync(() => {
    page.newSchema({
      properties: {
        a: {
          type: 'string',
          enum: [{ title: 'A', key: 'A' }],
          ui: {
            widget,
            expandChange: () =>
              of([
                { title: 'Child1', key: 'C1' },
                { title: 'Child2', key: 'C2' }
              ])
          }
        }
      }
    });
    page.typeEvent('click', '.ant-select').typeEvent('click', '.ant-select-tree-switcher-icon').asyncEnd(1000);

    // DOM 级断言：异步子节点必须真的渲染出来
    const titles = dl.queryAll(By.css('nz-tree-node-title')).map(d => (d.nativeElement.textContent ?? '').trim());
    expect(titles).toContain('Child1');
    expect(titles).toContain('Child2');

    // `addChildren()` 还会把子节点写回 `origin`（= data 里的对象），所以数据层也是同步的
    const w = page.getWidget<NzSafeAny>('sf-tree-select');
    expect(w['data']()[0].children.length).toBe(2);
  }));

  it('#openChange', () => {
    const s: SFSchema = {
      properties: {
        a: {
          type: 'string',
          enum: [{ title: '待支付', key: 'WAIT_BUYER_PAY' }],
          ui: {
            widget,
            openChange: jasmine.createSpy()
          }
        }
      }
    };
    page.newSchema(s);
    const comp = page.getWidget<TreeSelectWidget>('sf-tree-select');
    const ui = page.getProperty('a').ui as { openChange: jasmine.Spy };
    comp.openChange(true);
    expect(ui.openChange).toHaveBeenCalledWith(true);
  });
});
