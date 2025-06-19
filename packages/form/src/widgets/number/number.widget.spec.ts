import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync } from '@angular/core/testing';

import { createTestContext } from '@delon/testing';

import { SFNumberWidgetSchema } from './schema';
import { configureSFTestSuite, SFPage, TestFormComponent } from '../../../spec/base.spec';
import { SFSchema } from '../../../src/schema/index';

describe('form: widget: number', () => {
  let fixture: ComponentFixture<TestFormComponent>;
  let dl: DebugElement;
  let context: TestFormComponent;
  let page: SFPage;

  configureSFTestSuite();

  beforeEach(() => {
    ({ fixture, dl, context } = createTestContext(TestFormComponent));
    page = new SFPage(context.comp);
    page.prop(dl, context, fixture);
  });

  it('#setValue', fakeAsync(() => {
    page
      .newSchema({ properties: { a: { type: 'number', default: 1 } } })
      .dc(1)
      .checkInput('.ant-input-number-input', '1')
      .setValue('/a', 2, 1)
      .checkInput('.ant-input-number-input', '2');
  }));

  it('should be default true via schema.default', () => {
    const s: SFSchema = { properties: { a: { type: 'number', default: 1 } } };
    page.newSchema(s).checkValue('a', 1);
  });

  it('when value is string', () => {
    const s: SFSchema = { properties: { a: { type: 'number', default: 1 } } };
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
    /**
     * TODO: https://github.com/NG-ZORRO/ng-zorro-antd/pull/8848
     */
    xit('should be limit via schema.minimum & maximum', fakeAsync(() => {
      const minimum = 10;
      const maximum = 100;
      const s: SFSchema = { properties: { a: { type: 'number', minimum, maximum, default: 1 } } };
      page
        .newSchema(s)
        .typeCharOnly(minimum - 1)
        .checkValue('a', minimum)
        .typeCharOnly(maximum + 1)
        .checkValue('a', maximum);
    }));
    /**
     * TODO: https://github.com/NG-ZORRO/ng-zorro-antd/pull/8848
     */
    xit('should be exclusive min(max)imum via exclusive', fakeAsync(() => {
      const minimum = 10;
      const maximum = 100;
      const s: SFSchema = {
        properties: {
          a: { type: 'number', minimum, exclusiveMinimum: true, maximum, exclusiveMaximum: true, default: 1 }
        }
      };
      page
        .newSchema(s)
        .typeCharOnly(minimum - 1)
        .checkValue('a', minimum + 1)
        .typeCharOnly(maximum + 1)
        .checkValue('a', maximum - 1);
    }));
    /**
     * TODO: https://github.com/NG-ZORRO/ng-zorro-antd/pull/8848
     */
    xit('should be trunc value when schema type is integer', fakeAsync(() => {
      const minimum = 10.8;
      const maximum = 100.8;
      const s: SFSchema = { properties: { a: { type: 'integer', minimum, maximum, default: 1 } } };
      page
        .newSchema(s)
        .typeCharOnly(minimum - 1)
        .checkValue('a', 10)
        .typeCharOnly(maximum + 1)
        .checkValue('a', 100);
    }));
  });

  describe('[ui]', () => {
    it('#prefix', fakeAsync(() => {
      const s: SFSchema = { properties: { a: { type: 'number', default: 1, ui: { prefix: 'a' } } } };
      const property = page.newSchema(s).getProperty('/a');
      page.typeChar(1).dc();
      const ipt = page.getEl('.ant-input-number-input') as HTMLInputElement;
      expect(ipt.value).toBe(`a 1`);
      property.setValue(null, true);
      page.typeChar(null).dc();
      expect(ipt.value).toBe(``);
    }));

    it('#unit', fakeAsync(() => {
      const s: SFSchema = { properties: { a: { type: 'number', default: 1, ui: { unit: 'b' } } } };
      const property = page.newSchema(s).getProperty('/a');
      const ipt = page.getEl('.ant-input-number-input') as HTMLInputElement;
      page.typeChar(1);
      expect(ipt.value).toBe(`1 b`);
      property.setValue(null, true);
      page.typeChar(null);
      expect(ipt.value).toBe('');
    }));

    it('#formatter & #parser', fakeAsync(() => {
      const s: SFSchema = { properties: { a: { type: 'number', default: 1 } } };
      const ui = (s.properties!.a.ui = {
        formatter: jasmine.createSpy('formatter'),
        parser: jasmine.createSpy('parser').and.callFake((v: string) => +v)
      });
      page.newSchema(s).typeChar(10).typeEvent('blur');
      expect(ui.formatter).toHaveBeenCalled();
      expect(ui.parser).toHaveBeenCalled();
    }));

    it('#event', fakeAsync(() => {
      const schema: SFSchema = {
        properties: {
          a: {
            type: 'number',
            minimum: 0,
            maximum: 100,
            ui: { change: jasmine.createSpy('change') } as SFNumberWidgetSchema
          }
        }
      };
      page.newSchema(schema);
      const ui = schema.properties!.a.ui as SFNumberWidgetSchema;
      page.typeChar(1, 'input');
      expect(ui.change).toHaveBeenCalled();
    }));

    describe('#widgetWidth', () => {
      it('width number', fakeAsync(() => {
        const s: SFSchema = { properties: { a: { type: 'number', ui: { widgetWidth: 10 } as SFNumberWidgetSchema } } };
        page.newSchema(s);
        const ipt = page.getEl('.ant-input-number') as HTMLDialogElement;
        expect(ipt.style.width).toBe('10px');
      }));
      it('width string', fakeAsync(() => {
        const s: SFSchema = {
          properties: { a: { type: 'number', ui: { widgetWidth: '10%' } as SFNumberWidgetSchema } }
        };
        page.newSchema(s);
        const ipt = page.getEl('.ant-input-number') as HTMLDialogElement;
        expect(ipt.style.width).toBe('10%');
      }));
    });
  });
});
