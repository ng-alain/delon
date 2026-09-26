import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';

import { SFSchema } from '@delon/form';
import { createTestContext } from '@delon/testing';

import { SFColorWidgetSchema, withColorWidget } from './index';
import type { ColorWidget } from './widget';
import { configureSFTestSuite, SFPage, TestFormComponent } from '../../spec/base';

describe('form: widget: color', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
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

  it('should be working', async () => {
    const change = vi.fn();
    const formatChange = vi.fn();
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
    page.newSchema(s).typeEvent('click', '.ant-color-picker-trigger');
    await page.stabilize();
    page.typeEvent('click', 'nz-select');
    await page.stabilize();
    page.typeEvent('click', 'nz-option-container nz-option-item:nth-child(2)');
    expect(page.getValue('/a')).toBe('hsb(20, 100%, 100%)');
    expect(change).toHaveBeenCalled();
    expect(formatChange).toHaveBeenCalled();
  });

  it('should be clear value when trigger onClear', async () => {
    const onClear = vi.fn();
    const s: SFSchema = {
      properties: {
        a: {
          type: 'string',
          default: '#f50',
          ui: {
            widget: 'color',
            allowClear: true,
            onClear
          } as SFColorWidgetSchema
        }
      }
    };
    page.newSchema(s);
    page.getWidget<ColorWidget>('sf-color')._clear();
    page.dc(1);
    expect(onClear).toHaveBeenCalled();
  });
});
