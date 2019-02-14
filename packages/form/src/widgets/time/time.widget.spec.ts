import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { createTestContext } from '@delon/testing';
import format from 'date-fns/format';
import { configureSFTestSuite, SFPage, TestFormComponent } from '../../../spec/base.spec';
import { SFSchema } from '../../../src/schema/index';
import { TimeWidget } from './time.widget';

describe('form: widget: time', () => {
  let fixture: ComponentFixture<TestFormComponent>;
  let page: SFPage;
  let context: TestFormComponent;
  let dl: DebugElement;
  const widget = 'time';

  configureSFTestSuite();

  beforeEach(() => {
    ({ fixture, dl, context } = createTestContext(TestFormComponent));
    page = new SFPage(context.comp);
    page.prop(dl, context, fixture);
  });

  function getComp(): TimeWidget {
    return page.getWidget<TimeWidget>('sf-time');
  }

  describe('#default', () => {
    it('should working', () => {
      const s: SFSchema = {
        properties: { a: { type: 'string', ui: { widget } } },
      };
      page.newSchema(s);
      const comp = getComp();
      const time = new Date();
      comp._change(time);
      page.checkValue('/a', format(time, comp.format));
    });

    describe('default value', () => {
      it('with date type', () => {
        const time = new Date();
        const s: SFSchema = {
          properties: { a: { type: 'string', ui: { widget }, default: time } },
        };
        page.newSchema(s);
        const comp = getComp();
        expect(format(comp.value)).toBe(format(time));
      });
      it('with number type', () => {
        const time = +new Date();
        const s: SFSchema = {
          properties: { a: { type: 'string', ui: { widget }, default: time } },
        };
        page.newSchema(s);
        const comp = getComp();
        expect(format(comp.value)).toBe(format(time));
      });
      it('with number type but is string value', () => {
        const time = (+new Date()).toString();
        const s: SFSchema = {
          properties: { a: { type: 'string', ui: { widget }, default: time } },
        };
        page.newSchema(s);
        const comp = getComp();
        expect(format(comp.value)).toBe(format(time));
      });
      it('with HH:mm', () => {
        const time = '11:10';
        page.newSchema({
          properties: { a: { type: 'string', ui: { widget }, default: time } },
        });
        expect(format(getComp().displayValue, 'HH:mm:ss')).toBe('11:10:00');
      });
      it('with null', () => {
        const time = null;
        const s: SFSchema = {
          properties: { a: { type: 'string', ui: { widget }, default: time } },
        };
        page.newSchema(s);
        const comp = getComp();
        expect(format(comp.value, 'YYYY-MM-DD')).toBe('1970-01-01');
      });
    });

    it('should be return empty when value is null', () => {
      page
        .newSchema({
          properties: { a: { type: 'string', ui: { widget } } },
        })
        .setValue('a', null);
      const comp = getComp();
      comp._change(null);
      expect(page.getValue('a').length === 0).toBe(true);
    });

    it('should be return UTC value when utcEpoch is true', () => {
      page
        .newSchema({
          properties: { a: { type: 'number', ui: { widget, utcEpoch: true } } },
        })
        .setValue('a', null);
      const comp = getComp();
      const val = new Date();
      comp._change(val);
      const utcVal = Date.UTC(1970, 0, 1, val.getHours(), val.getMinutes(), val.getSeconds());
      expect(format(page.getValue('a'), 'HH:mm:ss')).toBe(format(utcVal, 'HH:mm:ss'));
    });

    describe('#format', () => {
      it('should be used x when type is number', () => {
        page.newSchema({
          properties: { a: { type: 'number', ui: { widget } } },
        });
        expect(getComp().format).toBe('x');
      });
      it('should be used HH:mm:ss when type is not number', () => {
        page.newSchema({
          properties: { a: { type: 'string', ui: { widget } } },
        });
        expect(getComp().format).toBe('HH:mm:ss');
      });
    });
  });
});
