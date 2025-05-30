import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { mergeConfig, SFSchema, SFSchemaEnum } from '@delon/form';
import { createTestContext } from '@delon/testing';
import { AlainConfigService } from '@delon/util/config';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { withAutoCompleteWidget } from './index';
import { SFAutoCompleteWidgetSchema } from './schema';
import { AutoCompleteWidget } from './widget';
import { configureSFTestSuite, SFPage, TestFormComponent } from '../../spec/base.spec';

describe('form: widget: autocomplete', () => {
  let fixture: ComponentFixture<TestFormComponent>;
  let dl: DebugElement;
  let context: TestFormComponent;
  let page: SFPage;
  const widget = 'autocomplete';

  configureSFTestSuite({ widgets: [withAutoCompleteWidget()] });

  beforeEach(() => {
    ({ fixture, dl, context } = createTestContext(TestFormComponent));
    page = new SFPage(context.comp);
    page.prop(dl, context, fixture);
  });

  it('#setValue', fakeAsync(() => {
    page
      .newSchema({
        properties: {
          a: { type: 'string', ui: { widget }, enum: ['aaa', 'bbb', 'ccc'] }
        }
      })
      .setValue('/a', 'bbb');
    const widgetInstance = page.getProperty('/a').widget as AutoCompleteWidget;
    const list = widgetInstance['fixData'] as SFSchemaEnum[];
    const item = list.find(w => w.checked === true) as SFSchemaEnum;
    expect(item != null).toBe(true);
    expect(item.value).toBe('bbb');
    page.asyncEnd();
  }));

  it('#change', () => {
    const s: SFSchema = {
      properties: {
        a: {
          type: 'string',
          title: '状态',
          enum: ['aaa', 'bbb', 'ccc'],
          default: 'aaa',
          ui: {
            widget,
            change: jasmine.createSpy()
          } as SFAutoCompleteWidgetSchema
        }
      }
    };
    page.newSchema(s);
    const selectWidget = page.getWidget<AutoCompleteWidget>(`sf-${widget}`);
    selectWidget.updateValue({ nzLabel: 'aaa', nzValue: { value: 'aaa', label: 'aaa' } } as NzSafeAny);
    const item = s.properties!.a.ui as SFAutoCompleteWidgetSchema;
    expect(item.change).toHaveBeenCalled();
  });

  describe('[data source]', () => {
    it('with enum', fakeAsync(() => {
      const data = ['aaa', 'bbb', 'ccc'];
      page
        .newSchema({
          properties: {
            a: { type: 'string', ui: { widget }, enum: data }
          }
        })
        .typeEvent('focusin')
        .checkCount('nz-auto-option', data.length)
        .click('nz-auto-option')
        .checkValue('a', `aaa`)
        .asyncEnd();
    }));
    it('with async data', () => {
      page.newSchema({
        properties: {
          a: {
            type: 'string',
            ui: {
              widget,
              asyncData: () => of([{ label: 'label1', value: '1' }]),
              debounceTime: 1
            }
          }
        }
      });
      const comp = page.getWidget<AutoCompleteWidget>('sf-autocomplete');
      comp.list.subscribe(res => {
        expect(res[0].value).toBe('1');
      });
    });
    it('should be return label in async data', fakeAsync(() => {
      page
        .newSchema({
          properties: {
            a: {
              type: 'string',
              default: '1',
              ui: {
                widget,
                asyncData: () => of([{ label: 'label1', value: '1' }])
              }
            }
          }
        })
        .time(100);
      const selectWidget = page.getWidget<AutoCompleteWidget>(`sf-${widget}`);
      expect(selectWidget.typing).toBe(`label1`);
      page.asyncEnd();
    }));
    xit('with email of format', fakeAsync(() => {
      const config = mergeConfig(TestBed.inject(AlainConfigService));
      const typeValue = 'a';
      page
        .newSchema({
          properties: {
            a: {
              type: 'string',
              format: 'email'
            }
          }
        })
        .dc(100)
        .typeChar(typeValue)
        .checkCount('nz-auto-option', config.uiEmailSuffixes!.length)
        .click('nz-auto-option')
        .checkValue('a', `${typeValue}@${config.uiEmailSuffixes![0]}`)
        .asyncEnd();
    }));
    it('with email and custom suffix of format', fakeAsync(() => {
      const suffixes = ['a.com', 'b.com'];
      const typeValue = 'a';
      page
        .newSchema({
          properties: {
            a: {
              type: 'string',
              format: 'email',
              enum: suffixes,
              default: typeValue
            }
          }
        })
        .typeChar(typeValue)
        .checkCount('nz-auto-option', suffixes.length)
        .click('nz-auto-option')
        .checkValue('a', `${typeValue}@${suffixes[0]}`)
        .asyncEnd();
    }));
    it('should be used value to result', fakeAsync(() => {
      const typeValue = '1';
      page
        .newSchema({
          properties: {
            a: {
              type: 'string',
              ui: {
                widget,
                asyncData: () => of([{ label: 'label1', value: '1' }]),
                debounceTime: 1
              }
            }
          }
        })
        .typeChar(typeValue)
        .click('nz-auto-option')
        .checkValue('a', `1`)
        .asyncEnd();
    }));
    it('should be show default value via schema.default', fakeAsync(() => {
      const email = 'cipchk@qq.com';
      page
        .newSchema({
          properties: {
            a: { type: 'string', ui: { widget }, default: email }
          }
        })
        .time();
      expect((page.getEl('input') as HTMLInputElement).value).toBe(email);
    }));
  });

  describe('[ui]', () => {
    it('should be custom filterOption', fakeAsync(() => {
      const data = ['a1', 'a11', 'a111'];
      page
        .newSchema({
          properties: {
            a: {
              type: 'string',
              ui: {
                widget,
                change: () => {},
                filterOption: (_input: string, option: SFSchemaEnum) => option.label === 'a11'
              },
              enum: data
            }
          }
        })
        .typeChar('a1')
        .checkCount('nz-auto-option', 1)
        .typeChar('a11')
        .checkCount('nz-auto-option', 1)
        .asyncEnd();
    }));
  });
});
