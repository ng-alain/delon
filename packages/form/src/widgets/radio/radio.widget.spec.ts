import { DebugElement } from '@angular/core';
import { fakeAsync, ComponentFixture } from '@angular/core/testing';
import { createTestContext } from '@delon/testing';

import { configureSFTestSuite, SFPage, TestFormComponent } from '../../../spec/base.spec';

describe('form: widget: radio', () => {
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

  it('should be working', fakeAsync(() => {
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
              change: jasmine.createSpy(),
            },
            default: '未知',
          },
        },
      })
      .typeEvent('click', '.ant-radio-button-wrapper')
      .checkCalled('a', 'change')
      .asyncEnd();
  }));
});
