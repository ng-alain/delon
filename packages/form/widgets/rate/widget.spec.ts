import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';

import { createTestContext } from '@delon/testing';

import { withRateWidget } from './index';
import { configureSFTestSuite, SFPage, TestFormComponent } from '../../spec/base';

describe('form: widget: rate', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  let fixture: ComponentFixture<TestFormComponent>;
  let dl: DebugElement;
  let context: TestFormComponent;
  let page: SFPage;
  const widget = 'rate';

  configureSFTestSuite({ widgets: [withRateWidget()] });

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
            type: 'number',
            title: '评级',
            default: 2,
            ui: {
              widget
            }
          }
        }
      })
      .time();
    await page.stabilize();
    page.checkCount('.ant-rate-star-full', 2);
  });

  it('should be show text', async () => {
    page
      .newSchema({
        properties: {
          a: {
            type: 'number',
            title: '评级',
            default: 2,
            ui: {
              widget,
              text: '{{value}} A'
            }
          }
        }
      })
      .checkElText('.ant-rate-text', '2 A');
  });
});
