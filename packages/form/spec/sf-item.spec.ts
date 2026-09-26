import type { DebugElement } from '@angular/core';
import type { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { createTestContext } from '@delon/testing';

import { configureSFTestSuite, SFPage, TestFormComponent } from './base';
import type { SFSchema } from '../src/schema';

/**
 * `sf-item` 动态创建 widget
 *
 * `ui.widget` / `schema.type` 是创建 effect 的依赖，运行时改写它们会让 effect 重跑；
 * 重跑前必须销毁上一个 widget，否则容器里会同时留下两个控件（旧的那个还会继续响应错误推送）。
 */
describe('form: sf-item', () => {
  configureSFTestSuite();

  let fixture: ComponentFixture<TestFormComponent>;
  let dl: DebugElement;
  let context: TestFormComponent;
  let page: SFPage;

  beforeEach(() => {
    ({ fixture, dl, context } = createTestContext(TestFormComponent));
    page = new SFPage(context.comp);
    page.cleanOverlay().prop(dl, context, fixture);
  });

  it('should destroy the previous widget when `ui.widget` changes', () => {
    page.newSchema({ properties: { a: { type: 'string' } } } as SFSchema);
    page.dc();
    expect(dl.queryAll(By.css('sf-string')).length).toBe(1);

    page.getProperty('/a').ui.widget = 'textarea';
    page.dc();

    expect(dl.queryAll(By.css('sf-string')).length).toBe(0);
    expect(dl.queryAll(By.css('sf-textarea')).length).toBe(1);
  });

  it('should show the error once after the widget is recreated', () => {
    page.newSchema({ properties: { a: { type: 'string' } } } as SFSchema);
    page.dc();
    const oldWidget = page.getProperty('/a').widget;

    page.getProperty('/a').ui.widget = 'textarea';
    page.dc();
    page.getProperty('/a').setErrors({ message: 'boom' });
    page.dc();

    expect(dl.queryAll(By.css('.ant-form-item-explain-error')).length).toBe(1);
    // 旧 widget 已销毁，不应再收到错误推送
    expect(oldWidget.showError).toBe(false);
  });
});
