import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync } from '@angular/core/testing';

import { SFSchema } from '@delon/form';
import { createTestContext } from '@delon/testing';

import { SFColorWidgetSchema, withColorWidget } from './index';
import { configureSFTestSuite, SFPage, TestFormComponent } from '../../spec/base.spec';

describe('form: widget: color', () => {
  let fixture: ComponentFixture<TestFormComponent>;
  let dl: DebugElement;
  let context: TestFormComponent;
  let page: SFPage;

  configureSFTestSuite({ widgets: [withColorWidget()] });

  beforeEach(() => {
    ({ fixture, dl, context } = createTestContext(TestFormComponent));
    page = new SFPage(context.comp);
    page.cleanOverlay().prop(dl, context, fixture);
  });

  it('should be working', fakeAsync(() => {
    const change = jasmine.createSpy();
    const formatChange = jasmine.createSpy();
    const s: SFSchema = {
      properties: {
        a: {
          type: 'string',
          ui: {
            widget: 'color',
            defaultValue: '#f50',
            change,
            formatChange
          } as SFColorWidgetSchema
        }
      }
    };
    page
      .newSchema(s)
      .typeEvent('click', '.ant-color-picker-trigger')
      .typeEvent('click', 'nz-select')
      .typeEvent('click', 'nz-option-container nz-option-item:nth-child(2)');
    expect(page.getValue('/a')).toBe('hsb(20, 100%, 100%)');
    expect(change).toHaveBeenCalled();
    expect(formatChange).toHaveBeenCalled();
  }));
});
