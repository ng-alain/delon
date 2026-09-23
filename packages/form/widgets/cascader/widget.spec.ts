import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { createTestContext } from '@delon/testing';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { withCascaderWidget } from './index';
import { CascaderWidget } from './widget';
import { configureSFTestSuite, SFPage, TestFormComponent } from '../../spec/base.spec';

describe('form: widget: cascader', () => {
  let fixture: ComponentFixture<TestFormComponent>;
  let dl: DebugElement;
  let context: TestFormComponent;
  let page: SFPage;
  const widget = 'cascader';

  configureSFTestSuite({ widgets: [withCascaderWidget()] });

  beforeEach(() => {
    ({ fixture, dl, context } = createTestContext(TestFormComponent));
    page = new SFPage(context.comp);
    page.prop(dl, context, fixture);
  });

  it('#setValue', fakeAsync(() => {
    const data = [
      {
        value: 110000,
        label: '北京',
        parent: 0
      },
      {
        value: 120000,
        label: '上海',
        parent: 0
      }
    ];
    page
      .newSchema({
        properties: {
          a: {
            type: 'number',
            ui: { widget, triggerAction: ['hover'] },
            enum: data,
            default: [120000]
          }
        }
      })
      .dc(1);
    expect(page.getEl('.ant-select-selection-item').textContent!.trim()).toBe('上海');
    page.setValue('/a', 110000).dc(1);
    expect(page.getEl('.ant-select-selection-item').textContent!.trim()).toBe('北京');
  }));

  describe('[data source]', () => {
    it('with enum', fakeAsync(() => {
      const data = [
        {
          value: 110000,
          label: '北京',
          parent: 0
        }
      ];
      page.newSchema({
        properties: {
          a: {
            type: 'number',
            ui: { widget, triggerAction: ['hover'] },
            enum: data,
            default: [110000]
          }
        }
      });
      const comp = page.getWidget<CascaderWidget>('sf-cascader');
      expect(comp['data']().length).toBe(1);
      expect(comp['data']()[0].checked).toBe(true);
      page.asyncEnd();
    }));
    it('with async', fakeAsync(() => {
      let received: NzSafeAny;
      page.newSchema({
        properties: {
          a: {
            type: 'number',
            title: 'RealTime',
            ui: {
              widget: 'cascader',
              asyncData: jasmine.createSpy().and.callFake((node: NzSafeAny) => {
                // 用户契约就是在回调里就地写 node.children
                received = node;
                node.children = [{ value: 110100, label: '北京市' }];
                return Promise.resolve();
              })
            },
            default: [110000]
          }
        }
      });

      page.typeEvent('click', 'nz-cascader').time().checkCalled('a', 'asyncData').asyncEnd();

      // ① 用户写的子节点落在传给它的那个对象上（ng-zorro 传的就是原始选项对象）
      //    注意 ng-zorro 会给选项追加 `selected` 等内部字段，所以只断言关键字段
      expect(received.children.length).toBe(1);
      expect(received.children[0].label).toBe('北京市');
      // ② DOM 级断言：ng-zorro 自己用 option.children 建好了第一列，widget 不做任何后处理
      const items = dl.queryAll(By.css('.ant-cascader-menu-item')).map(d => (d.nativeElement.textContent ?? '').trim());
      expect(items).toContain('北京市');
    }));
  });

  describe('[events]', () => {
    it('with defind', fakeAsync(() => {
      page.newSchema({
        properties: {
          a: {
            type: 'number',
            enum: [],
            ui: {
              widget,
              openChange: jasmine.createSpy(),
              change: jasmine.createSpy(),
              selectionChange: jasmine.createSpy(),
              select: jasmine.createSpy(),
              clear: jasmine.createSpy()
            }
          }
        }
      });
      const comp = page.getWidget<CascaderWidget>('sf-cascader');
      const ui = page.getProperty('a').ui;
      comp._openChange(null!);
      expect(ui.openChange).toHaveBeenCalled();
      comp._change(null!);
      expect(ui.change).toHaveBeenCalled();
      comp._selectionChange(null!);
      expect(ui.selectionChange).toHaveBeenCalled();
      comp._clear();
      expect(ui.clear).toHaveBeenCalled();
      page.asyncEnd();
    }));
  });
});
