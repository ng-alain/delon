import { DebugElement } from '@angular/core';
import { fakeAsync, ComponentFixture } from '@angular/core/testing';
import { createTestContext } from '@delon/testing';
import { of } from 'rxjs';

import { configureSFTestSuite, SFPage, TestFormComponent } from '../../../spec/base.spec';
import { SFSchema, SFSchemaEnum } from '../../../src/schema/index';
import { AutoCompleteWidget, EMAILSUFFIX } from './autocomplete.widget';

describe('form: widget: autocomplete', () => {
  let fixture: ComponentFixture<TestFormComponent>;
  let dl: DebugElement;
  let context: TestFormComponent;
  let page: SFPage;
  const widget = 'autocomplete';

  configureSFTestSuite();

  beforeEach(() => {
    ({ fixture, dl, context } = createTestContext(TestFormComponent));
    page = new SFPage(context.comp);
    page.prop(dl, context, fixture);
  });

  describe('[data source]', () => {
    it('with enum', fakeAsync(() => {
      const data = ['aaa', 'bbb', 'ccc'];
      page
        .newSchema({
          properties: {
            a: { type: 'string', ui: { widget }, enum: data },
          },
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
              debounceTime: 1,
            },
          },
        },
      });
      const comp = page.getWidget<AutoCompleteWidget>('sf-autocomplete');
      comp.list.subscribe(res => {
        expect(res[0].value).toBe('1');
      });
    });
    it('with email of format', fakeAsync(() => {
      const typeValue = 'a';
      page
        .newSchema({
          properties: {
            a: {
              type: 'string',
              format: 'email',
            },
          },
        })
        .time(100)
        .typeChar(typeValue)
        .checkCount('nz-auto-option', EMAILSUFFIX.length)
        .click('nz-auto-option')
        .checkValue('a', `${typeValue}@${EMAILSUFFIX[0]}`)
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
                debounceTime: 1,
              },
            },
          },
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
            a: { type: 'string', ui: { widget }, default: email },
          },
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
                filterOption: (input: string, option: SFSchemaEnum) => option.label === 'a11',
              },
              enum: data,
            },
          },
        })
        .typeChar('a1')
        .checkCount('nz-auto-option', 1)
        .typeChar('a11')
        .checkCount('nz-auto-option', 1)
        .asyncEnd();
    }));
  });
});
