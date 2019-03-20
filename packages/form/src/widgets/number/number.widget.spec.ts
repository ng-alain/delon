import { DebugElement } from '@angular/core';
import { fakeAsync, ComponentFixture } from '@angular/core/testing';

import { createTestContext } from '@delon/testing';
import { configureSFTestSuite, SFPage, TestFormComponent } from '../../../spec/base.spec';
import { SFSchema } from '../../../src/schema/index';

describe('form: widget: number', () => {
  let fixture: ComponentFixture<TestFormComponent>;
  let dl: DebugElement;
  let context: TestFormComponent;
  let page: SFPage;
  const widget = 'number';

  configureSFTestSuite();

  beforeEach(() => {
    ({ fixture, dl, context } = createTestContext(TestFormComponent));
    page = new SFPage(context.comp);
    page.prop(dl, context, fixture);
  });

  it('should be default true via schema.default', () => {
    const s: SFSchema = {
      properties: { a: { type: 'number', default: 1 } },
    };
    page.newSchema(s).checkValue('a', 1);
  });

  it('when value is string', () => {
    const s: SFSchema = {
      properties: { a: { type: 'number', default: 1 } },
    };
    const property = page.newSchema(s).getProperty('/a');
    expect(property.value).toBe(1);
    property.setValue('', true);
    expect(property.value).toBe(undefined);
    property.setValue('2', true);
    expect(property.value).toBe(2);
    property.setValue('2.1', true);
    expect(property.value).toBe(2.1);
  });

  describe('#limit', () => {
    it('should be limit via schema.minimum & maximum', fakeAsync(() => {
      const minimum = 10;
      const maximum = 100;
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
    }));
    it('should be exclusive min(max)imum via exclusive', fakeAsync(() => {
      const minimum = 10;
      const maximum = 100;
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
    }));
    it('should be trunc value when schema type is integer', fakeAsync(() => {
      const minimum = 10.8;
      const maximum = 100.8;
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
    }));
  });

  describe('[ui]', () => {
    it('#prefix', fakeAsync(() => {
      const s: SFSchema = {
        properties: { a: { type: 'number', default: 1, ui: { prefix: 'a' } } },
      };
      const property = page.newSchema(s).getProperty('/a');
      page.typeChar(1);
      const ipt = page.getEl('.ant-input-number-input') as HTMLInputElement;
      expect(ipt.value).toBe(`a 1`);
      property.setValue(null, true);
      page.typeChar(null);
      expect(ipt.value).toBe(``);
    }));

    it('#unit', fakeAsync(() => {
      const s: SFSchema = {
        properties: { a: { type: 'number', default: 1, ui: { unit: 'b' } } },
      };
      const property = page.newSchema(s).getProperty('/a');
      const ipt = page.getEl('.ant-input-number-input') as HTMLInputElement;
      page.typeChar(1);
      expect(ipt.value).toBe(`1 b`);
      property.setValue(null, true);
      page.typeChar(null);
      expect(ipt.value).toBe('');

    }));

    it('#formatter & #parser', fakeAsync(() => {
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
    }));
  });
});
