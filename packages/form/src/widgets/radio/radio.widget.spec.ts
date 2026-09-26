import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';

import { createTestContext } from '@delon/testing';

import { configureSFTestSuite, SFPage, TestFormComponent } from '../../../spec/base';

describe('form: widget: radio', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  let fixture: ComponentFixture<TestFormComponent>;
  let dl: DebugElement;
  let context: TestFormComponent;
  let page: SFPage;
  const widget = 'radio';

  configureSFTestSuite();

  beforeEach(() => {
    ({ fixture, dl, context } = createTestContext(TestFormComponent));
    page = new SFPage(context.comp);
    page.prop(dl, context, fixture);
  });

  it('should be working', async () => {
    page
      .newSchema({
        properties: {
          a: {
            type: 'string',
            title: 'Sex',
            enum: ['男', '女', '未知'],
            ui: {
              widget,
              styleType: 'button',
              change: vi.fn()
            },
            default: '未知'
          }
        }
      })
      .typeEvent('click', '.ant-radio-button-wrapper')
      .checkCalled('a', 'change')
      .asyncEnd();
  });

  it('#setValue', async () => {
    page.newSchema({
      properties: {
        a: { type: 'string', ui: { widget }, enum: ['item1', 'item2'] }
      }
    });
    page.setValue('/a', 'item1').dc(1);
    await page.stabilize();
    expect(page.getEl('.ant-radio-checked').nextSibling!.textContent).toBe('item1');
    page.setValue('/a', 'item2').dc(1);
    await page.stabilize();
    expect(page.getEl('.ant-radio-checked').nextSibling!.textContent).toBe('item2');
  });
});
