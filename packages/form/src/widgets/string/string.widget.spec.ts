import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { of } from 'rxjs';

import type { Mock } from 'vitest';

import { createTestContext } from '@delon/testing';

import { SFStringWidgetSchema } from './schema';
import { configureSFTestSuite, SFPage, TestFormComponent } from '../../../spec/base';
import { SFSchema } from '../../schema';

describe('form: widget: string', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  let fixture: ComponentFixture<TestFormComponent>;
  let dl: DebugElement;
  let context: TestFormComponent;
  let page: SFPage;

  configureSFTestSuite();

  beforeEach(() => {
    ({ fixture, dl, context } = createTestContext(TestFormComponent));
    page = new SFPage(context.comp);
    page.cleanOverlay().prop(dl, context, fixture);
  });

  it('should be render input wrapper when include addon', () => {
    page
      .newSchema({
        properties: {
          a: {
            type: 'string',
            ui: {
              prefix: 'P'
            }
          }
        }
      })
      .checkCount('nz-input-wrapper', 1);
  });

  it('should be render input wrapper when allowClear is true', () => {
    page
      .newSchema({
        properties: {
          a: {
            type: 'string',
            ui: {
              allowClear: true
            }
          }
        }
      })
      .checkCount('nz-input-wrapper', 1);
  });

  it('should be default color #000000 when format is color and default is null', () => {
    page.newSchema({
      properties: {
        a: {
          type: 'string',
          format: 'color'
        }
      }
    });
    const ipt = page.getEl('.ant-input') as HTMLInputElement;
    expect(ipt.value).toBe('#000000');
  });

  it('#event', async () => {
    const schema: SFSchema = {
      properties: {
        a: {
          type: 'string',
          ui: {
            change: vi.fn().mockName('change'),
            focus: vi.fn().mockName('focus'),
            blur: vi.fn().mockName('blur'),
            enter: vi.fn().mockName('enter')
          } as SFStringWidgetSchema
        }
      }
    };
    page.newSchema(schema);
    const ui = schema.properties!.a.ui as SFStringWidgetSchema;
    // change
    page.typeChar('a');
    expect(ui.change).toHaveBeenCalled();
    // focus
    page.typeEvent('focus');
    expect((schema.properties!.a.ui as SFStringWidgetSchema).focus).toHaveBeenCalled();
    // blur
    page.typeEvent('blur');
    expect((schema.properties!.a.ui as SFStringWidgetSchema).blur).toHaveBeenCalled();
    // enter
    const ev = new KeyboardEvent('keyup', { code: 'Enter', key: 'Enter' });
    page.typeEvent(ev);
    expect((schema.properties!.a.ui as SFStringWidgetSchema).enter).toHaveBeenCalled();
  });

  describe('Debounce', () => {
    it('should be working', async () => {
      const schema: SFSchema = {
        properties: {
          a: {
            type: 'string',
            default: 'a',
            ui: {
              changeDebounceTime: 1,
              changeMap: val => of(val),
              change: vi.fn().mockName('change')
            } as SFStringWidgetSchema
          }
        }
      };
      page.newSchema(schema);
      const ui = schema.properties!.a.ui as SFStringWidgetSchema;
      // change
      page.typeChar('a');
      page.dc(100);
      expect(ui.change).toHaveBeenCalled();
      expect(vi.mocked(ui.change as Mock).mock.calls[0]![0]).toBe('a');
    });

    it(`should be changeMap can't be set`, async () => {
      const schema: SFSchema = {
        properties: {
          a: {
            type: 'string',
            default: 'a',
            ui: {
              changeDebounceTime: 1,
              change: vi.fn().mockName('change')
            } as SFStringWidgetSchema
          }
        }
      };
      page.newSchema(schema);
      const ui = schema.properties!.a.ui as SFStringWidgetSchema;
      // change
      page.typeChar('a');
      page.dc(100);
      expect(ui.change).toHaveBeenCalled();
      expect(vi.mocked(ui.change as Mock).mock.calls[0]![0]).toBe('a');
    });
  });

  it('[autofocus]', async () => {
    const schema: SFSchema = {
      properties: {
        a: {
          type: 'string',
          ui: {
            autofocus: true,
            focus: vi.fn().mockName('focus')
          } as SFStringWidgetSchema
        }
      }
    };
    page.newSchema(schema);
    const el = page.getEl('.ant-input') as HTMLInputElement;
    vi.spyOn(el, 'focus').mockReturnValue(undefined);
    await vi.advanceTimersByTimeAsync(21);
    fixture.detectChanges();
    expect(el.focus).toHaveBeenCalled();
  });
});
