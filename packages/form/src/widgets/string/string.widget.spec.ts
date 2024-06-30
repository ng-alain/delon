import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { of } from 'rxjs';

import { createTestContext } from '@delon/testing';

import { configureSFTestSuite, SFPage, TestFormComponent } from '../../../spec/base.spec';
import { SFSchema } from '../../schema';
import { SFStringWidgetSchema } from './schema';

describe('form: widget: string', () => {
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

  it('should be render input group when include addon', () => {
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
      .checkCount('nz-input-group', 1);
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

  it('#event', fakeAsync(() => {
    const schema: SFSchema = {
      properties: {
        a: {
          type: 'string',
          ui: {
            change: jasmine.createSpy('change'),
            focus: jasmine.createSpy('focus'),
            blur: jasmine.createSpy('blur'),
            enter: jasmine.createSpy('enter')
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
  }));

  describe('Debounce', () => {
    it('should be working', fakeAsync(() => {
      const schema: SFSchema = {
        properties: {
          a: {
            type: 'string',
            default: 'a',
            ui: {
              changeDebounceTime: 1,
              changeMap: val => of(val),
              change: jasmine.createSpy('change')
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
      expect((ui.change as jasmine.Spy<jasmine.Func>).calls.first().args[0]).toBe('a');
    }));

    it(`should be changeMap can't be set`, fakeAsync(() => {
      const schema: SFSchema = {
        properties: {
          a: {
            type: 'string',
            default: 'a',
            ui: {
              changeDebounceTime: 1,
              change: jasmine.createSpy('change')
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
      expect((ui.change as jasmine.Spy<jasmine.Func>).calls.first().args[0]).toBe('a');
    }));
  });

  it('[autofocus]', fakeAsync(() => {
    const schema: SFSchema = {
      properties: {
        a: {
          type: 'string',
          ui: {
            autofocus: true,
            focus: jasmine.createSpy('focus')
          } as SFStringWidgetSchema
        }
      }
    };
    page.newSchema(schema);
    const el = page.getEl('.ant-input') as HTMLInputElement;
    spyOn(el, 'focus');
    tick(21);
    fixture.detectChanges();
    expect(el.focus).toHaveBeenCalled();
  }));
});
