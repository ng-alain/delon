import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { NzAutocompleteComponent } from 'ng-zorro-antd';
import { deepCopy } from '@delon/util';

import {
  builder,
  TestFormComponent,
  SFPage,
  SCHEMA,
} from '../../../spec/base.spec';
import { SFSchema, SFSchemaEnum } from '../../../src/schema/index';
import { SFUISchemaItem, SFUISchema } from '../../../src/schema/ui';
import { AutoCompleteWidget, EMAILSUFFIX } from './autocomplete.widget';

describe('form: widget: autocomplete', () => {
  let fixture: ComponentFixture<TestFormComponent>;
  let dl: DebugElement;
  let context: TestFormComponent;
  let page: SFPage;
  const widget = 'autocomplete';

  beforeEach(() =>
    ({ fixture, dl, context, page } = builder({ detectChanges: false })));

  describe('[data source]', () => {
    it(
      'with enum',
      fakeAsync(() => {
        const data = ['aaa', 'bbb', 'ccc'];
        const s: SFSchema = {
          properties: {
            a: { type: 'string', ui: { widget }, enum: data },
          },
        };
        const typeValue = 'a';
        page
          .newSchema(s)
          .typeEvent('focusin')
          .checkCount('nz-auto-option', data.length)
          .click('nz-auto-option')
          .checkValue('a', `aaa`)
          .asyncEnd(500);
      }),
    );
    it('with async data', () => {
      const s: SFSchema = {
        properties: {
          a: {
            type: 'string',
            ui: { widget, asyncData: () => of(['asdf']), debounceTime: 1 },
          },
        },
      };
      page.newSchema(s);
      const comp = page.getWidget<AutoCompleteWidget>('sf-autocomplete');
      comp.list.subscribe(res => expect(res[0].label).toBe('asdf'));
    });
    it(
      'with email of format',
      fakeAsync(() => {
        const s: SFSchema = {
          properties: {
            a: {
              type: 'string',
              format: 'email',
            },
          },
        };
        const typeValue = 'a';
        page
          .newSchema(s)
          .typeChar(typeValue)
          .checkCount('nz-auto-option', EMAILSUFFIX.length)
          .click('nz-auto-option')
          .checkValue('a', `${typeValue}@${EMAILSUFFIX[0]}`)
          .asyncEnd(150);
        // TIP: 一个非常不要脸的校验数据正确性的代码
        // 当测试用例需要依赖第三方组件时，如何更好的校验这是一个问题？
        // const autoComp = page.getWidget<NzAutocompleteComponent>('nz-autocomplete');
        // expect(autoComp.options.length).toBeGreaterThan(0);
        // expect(autoComp.options.first.nzValue).toBe('asdf@qq.com');
      }),
    );
  });

  describe('[ui]', () => {
    it(
      'should be custom filterOption',
      fakeAsync(() => {
        const data = ['a1', 'a11', 'a111'];
        const s: SFSchema = {
          properties: {
            a: {
              type: 'string',
              ui: {
                widget,
                filterOption: (input: string, option: SFSchemaEnum) =>
                  option.label === 'a11',
              },
              enum: data,
            },
          },
        };
        const typeValue = 'a';
        page
          .newSchema(s)
          .typeChar('a1')
          .checkCount('nz-auto-option', 1)
          .typeChar('a11')
          .checkCount('nz-auto-option', 1)
          .asyncEnd(500);
      }),
    );
  });
});
