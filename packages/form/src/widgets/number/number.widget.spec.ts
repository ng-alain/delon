import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { deepCopy } from '@delon/util';

import {
  builder,
  TestFormComponent,
  SFPage,
  SCHEMA,
} from '../../../spec/base.spec';
import { SFSchema, SFSchemaEnum } from '../../../src/schema/index';
import { SFUISchemaItem, SFUISchema } from '../../../src/schema/ui';

describe('form: widget: number', () => {
  let fixture: ComponentFixture<TestFormComponent>;
  let dl: DebugElement;
  let context: TestFormComponent;
  let page: SFPage;
  const widget = 'number';

  beforeEach(() =>
    ({ fixture, dl, context, page } = builder({ detectChanges: false })));

  it('should be default true via schema.default', () => {
    const s: SFSchema = {
      properties: { a: { type: 'number', default: 1 } },
    };
    page.newSchema(s).checkValue('a', 1);
  });
  describe('#limit', () => {
    it(
      'should be limit via schema.minimum & maximum',
      fakeAsync(() => {
        const minimum = 10,
          maximum = 100;
        const s: SFSchema = {
          properties: { a: { type: 'number', minimum, maximum, default: 1 } },
        };
        page
          .newSchema(s)
          .typeChar(minimum - 1)
          .typeEvent('blur')
          .checkValue('a', minimum)
          .typeChar(maximum + 1)
          .typeEvent('blur')
          .checkValue('a', maximum);
      }),
    );
    it(
      'should be exclusive min(max)imum via exclusive',
      fakeAsync(() => {
        const minimum = 10,
          maximum = 100;
        const s: SFSchema = {
          properties: {
            a: {
              type: 'number',
              minimum,
              exclusiveMinimum: true,
              maximum,
              exclusiveMaximum: true,
              default: 1,
            },
          },
        };
        page
          .newSchema(s)
          .typeChar(minimum - 1)
          .typeEvent('blur')
          .checkValue('a', minimum + 1)
          .typeChar(maximum + 1)
          .typeEvent('blur')
          .checkValue('a', maximum - 1);
      }),
    );
    it(
      'should be trunc value when schema type is integer',
      fakeAsync(() => {
        const minimum = 10.8,
          maximum = 100.8;
        const s: SFSchema = {
          properties: { a: { type: 'integer', minimum, maximum, default: 1 } },
        };
        page
          .newSchema(s)
          .typeChar(minimum - 1)
          .typeEvent('blur')
          .checkValue('a', 10)
          .typeChar(maximum + 1)
          .typeEvent('blur')
          .checkValue('a', 100);
      }),
    );
  });
  describe('[ui]', () => {
    it(
      '#formatter & #parser',
      fakeAsync(() => {
        const s: SFSchema = {
          properties: { a: { type: 'number', default: 1 } },
        };
        const ui = (s.properties.a.ui = {
          formatter: jasmine.createSpy('formatter'),
          parser: jasmine.createSpy('parser'),
        });
        page
          .newSchema(s)
          .typeChar(10)
          .typeEvent('blur');
          expect(ui.formatter).toHaveBeenCalled();
          expect(ui.parser).toHaveBeenCalled();
      }),
    );
  });
});
