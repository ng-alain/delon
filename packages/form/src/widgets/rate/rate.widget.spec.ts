import { DebugElement } from '@angular/core';
import { fakeAsync, ComponentFixture } from '@angular/core/testing';
import { createTestContext } from '@delon/testing';

import { configureSFTestSuite, SFPage, TestFormComponent } from '../../../spec/base.spec';

describe('form: widget: rate', () => {
  let fixture: ComponentFixture<TestFormComponent>;
  let dl: DebugElement;
  let context: TestFormComponent;
  let page: SFPage;
  const widget = 'rate';

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
            type: 'number',
            title: '评级',
            default: 2,
            ui: {
              widget,
            },
          },
        },
      })
      .time()
      .checkCount('.ant-rate-star-full', 2);
  }));

  it('should be show text', fakeAsync(() => {
    page
      .newSchema({
        properties: {
          a: {
            type: 'number',
            title: '评级',
            default: 2,
            ui: {
              widget,
              text: '{{value}} A',
            },
          },
        },
      })
      .checkElText('.ant-rate-text', '2 A');
  }));
});
