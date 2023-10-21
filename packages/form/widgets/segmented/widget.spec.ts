import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync } from '@angular/core/testing';

import { SFSchema } from '@delon/form';
import { createTestContext } from '@delon/testing';

import { SegmentedWidgetModule, SFSegmentedWidgetSchema } from './index';
import { configureSFTestSuite, SFPage, TestFormComponent } from '../../spec/base.spec';

describe('form: widget: segmented', () => {
  let fixture: ComponentFixture<TestFormComponent>;
  let dl: DebugElement;
  let context: TestFormComponent;
  let page: SFPage;

  configureSFTestSuite({ imports: [SegmentedWidgetModule] });

  beforeEach(() => {
    ({ fixture, dl, context } = createTestContext(TestFormComponent));
    page = new SFPage(context.comp);
    page.cleanOverlay().prop(dl, context, fixture);
  });

  it('should be working', fakeAsync(() => {
    const valueChange = jasmine.createSpy();
    const s: SFSchema = {
      properties: {
        a: {
          type: 'string',
          enum: ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly'],
          ui: {
            widget: 'segmented',
            valueChange
          } as SFSegmentedWidgetSchema
        }
      }
    };
    page.newSchema(s).typeEvent('click', '.ant-segmented-item:nth-child(2) .ant-segmented-item-label');
    expect(page.getValue('/a')).toBe(1);
    expect(valueChange).toHaveBeenCalled();
  }));
});
