import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import format from 'date-fns/format';

import { createTestContext } from '@delon/testing';
import { configureSFTestSuite, SFPage, TestFormComponent } from '../../../spec/base.spec';
import { SFSchema } from '../../../src/schema/index';
import { DateWidget } from './date.widget';

describe('form: widget: date', () => {
  let fixture: ComponentFixture<TestFormComponent>;
  let page: SFPage;
  let context: TestFormComponent;
  let dl: DebugElement;
  const widget = 'date';

  configureSFTestSuite();

  beforeEach(() => {
    ({ fixture, dl, context } = createTestContext(TestFormComponent));
    page = new SFPage(context.comp);
    page.prop(dl, context, fixture);
  });

  function getComp(): DateWidget {
    return page.getWidget<DateWidget>('sf-date');
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
    });
    it('should be set value', () => {
      const s: SFSchema = {
        properties: { a: { type: 'string', format: 'date-time', ui: { widget } } },
      };
      page.newSchema(s)
          .checkValue('a', null)
          .setValue('a', new Date());
      expect(page.getValue('a') instanceof Date).toBe(true);
    });
  });

  describe('#mode', () => {
    it('should be default format is [date]', () => {
      const s: SFSchema = {
        properties: { a: { type: 'string', ui: { widget } } },
      };
      page.newSchema(s);
      const comp = getComp();
      expect(comp.mode).toBe('date');
    });

    it('should be spcify mode', () => {
      const s: SFSchema = {
        properties: { a: { type: 'string', ui: { widget, mode: 'range' } } },
      };
      page.newSchema(s);
      const comp = getComp();
      expect(comp.mode).toBe('range');
    });

    describe('when not specify displayFormat', () => {
      it('should display yyyy-MM with month mode ', () => {
        const s: SFSchema = {
          properties: { a: { type: 'string', ui: { widget, mode: 'month' } } },
        };
        page.newSchema(s);
        const comp = getComp();
        expect(comp.displayFormat).toBe('yyyy-MM');
      });
      it('should display yyyy-ww with week mode ', () => {
        const s: SFSchema = {
          properties: { a: { type: 'string', ui: { widget, mode: 'week' } } },
        };
        page.newSchema(s);
        const comp = getComp();
        expect(comp.displayFormat).toBe('yyyy-ww');
      });
    });
  });

  describe('#format', () => {
    it('should be default YYYY-MM-DD HH:mm:ss', () => {
      const s: SFSchema = {
        properties: { a: { type: 'string', ui: { widget } } },
      };
      page.newSchema(s);
      const comp = getComp();
      expect(comp.format).toBe('YYYY-MM-DD HH:mm:ss');
    });
    it('should be spcify format', () => {
      const s: SFSchema = {
        properties: { a: { type: 'string', ui: { widget, format: 'yyyy' } } },
      };
      page.newSchema(s);
      const comp = getComp();
      expect(comp.format).toBe('yyyy');
    });
    it('should be use timespan when type is number', () => {
      const s: SFSchema = {
        properties: { a: { type: 'number', ui: { widget } } },
      };
      page.newSchema(s);
      const comp = getComp();
      expect(comp.format).toBe('x');
    });
  });

  describe('range date', () => {
    const s: SFSchema = {
      properties: {
        start: {
          type: 'string',
          ui: { widget: 'date', end: 'end' },
        },
        end: {
          type: 'string',
          ui: { widget: 'date', end: 'end' },
        },
      },
    };
    it('should working', () => {
      page.newSchema(s);
      const comp = getComp();
      expect(comp.mode).toBe('range');
      const time = new Date();
      comp._change([ time, time ]);
      page.checkValue('/start', format(time, comp.format))
          .checkValue('/end', format(time, comp.format));
      comp._change(null);
      page.checkValue('/start', '')
          .checkValue('/end', '');
    });
    it('should be default', () => {
      const copyS = { ...s };
      const time = new Date();
      copyS.properties.start.default = time;
      copyS.properties.end.default = time;
      page.newSchema(s);
      const res = getComp().displayValue;
      expect(Array.isArray(res)).toBe(true);
      expect(res[0]).toBe(time);
    });
  });

  describe('ui', () => {
    it('should be trigger onOpenChange', () => {
      const s: SFSchema = {
        properties: { a: { type: 'string', ui: { widget, onOpenChange: jasmine.createSpy() } } },
      };
      page.newSchema(s);
      const comp = getComp();
      const ui = s.properties.a.ui as any;
      expect(ui.onOpenChange).not.toHaveBeenCalled();
      comp._openChange(true);
      expect(ui.onOpenChange).toHaveBeenCalled();
    });
    it('should be trigger onOk', () => {
      const s: SFSchema = {
        properties: { a: { type: 'string', ui: { widget, onOk: jasmine.createSpy() } } },
      };
      page.newSchema(s);
      const comp = getComp();
      const ui = s.properties.a.ui as any;
      expect(ui.onOk).not.toHaveBeenCalled();
      comp._ok(true);
      expect(ui.onOk).toHaveBeenCalled();
    });
  });
});
