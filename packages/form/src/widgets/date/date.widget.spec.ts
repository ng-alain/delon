import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';

import { format, formatISO } from 'date-fns';

import { createTestContext } from '@delon/testing';
import { deepCopy } from '@delon/util/other';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { DateWidget } from './date.widget';
import { SFDateWidgetSchema } from './schema';
import { configureSFTestSuite, SFPage, TestFormComponent } from '../../../spec/base';
import { SFSchema } from '../../../src/schema/index';

describe('form: widget: date', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
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
        properties: { a: { type: 'string', ui: { widget } } }
      };
      page.newSchema(s);
      const comp = getComp();
      const time = new Date();
      comp._change(time);
      page.checkValue('/a', format(time, comp['startFormat']));
    });
    describe('default value', () => {
      it('with number type', () => {
        const time = +new Date();
        const s: SFSchema = {
          properties: { a: { type: 'string', ui: { widget }, default: time } }
        };
        page.newSchema(s);
        const comp = getComp();
        expect(formatISO(comp.value)).toBe(formatISO(time));
      });
      it('with number type but is string value', () => {
        const time = +new Date();
        const s: SFSchema = {
          properties: { a: { type: 'string', ui: { widget }, default: time } }
        };
        page.newSchema(s);
        const comp = getComp();
        expect(formatISO(comp.value)).toBe(formatISO(time));
      });
      it('with rang values', () => {
        const time = +new Date();
        const s: SFSchema = {
          properties: { a: { type: 'string', ui: { widget, mode: 'range' }, default: [time, time] } }
        };
        page.newSchema(s);
        const comp = getComp();
        expect(Array.isArray(comp.value)).toBe(true);
        expect(formatISO(comp.value[0])).toBe(formatISO(time));
      });
      it('with Date value should be formatted', async () => {
        const time = new Date(2019, 0, 1, 10, 20, 30);
        page.newSchema({
          properties: { a: { type: 'string', ui: { widget }, default: time } }
        } as SFSchema);
        page.time();
        await page.stabilize();

        // 单值模式下默认值由控件回写成 `startFormat` 格式化后的字符串
        expect(page.getProperty('/a').value).toBe(format(time, getComp()['startFormat']));
        page.asyncEnd();
      });
    });
    it('should be set value', async () => {
      const s: SFSchema = {
        properties: { a: { type: 'string', format: 'date-time', ui: { widget } } }
      };
      page
        .newSchema(s)
        .checkValue('a', null)
        .setValue('a', new Date(2019, 0, 1))
        .dc(1);
      await page.stabilize();
      const ipt = page.getEl('.ant-picker-input input') as HTMLInputElement;
      expect(ipt.value).toContain(`2019-01-01`);
    });
  });

  describe('#mode', () => {
    it('should be default format is [date]', () => {
      const s: SFSchema = {
        properties: { a: { type: 'string', ui: { widget } } }
      };
      page.newSchema(s);
      const comp = getComp();
      expect(comp.mode).toBe('date');
    });

    it('should be spcify mode', () => {
      const s: SFSchema = {
        properties: { a: { type: 'string', ui: { widget, mode: 'range' } } }
      };
      page.newSchema(s);
      const comp = getComp();
      expect(comp.mode).toBe('range');
    });

    describe('when not specify displayFormat', () => {
      it('should display yyyy with year mode ', () => {
        const s: SFSchema = {
          properties: { a: { type: 'string', ui: { widget, mode: 'year' } } }
        };
        page.newSchema(s);
        const comp = getComp();
        expect(comp.displayFormat).toBe('yyyy');
      });
      it('should display yyyy-MM with month mode ', () => {
        const s: SFSchema = {
          properties: { a: { type: 'string', ui: { widget, mode: 'month' } } }
        };
        page.newSchema(s);
        const comp = getComp();
        expect(comp.displayFormat).toBe('yyyy-MM');
      });
      it('should display yyyy-ww with week mode ', () => {
        const s: SFSchema = {
          properties: { a: { type: 'string', ui: { widget, mode: 'week' } } }
        };
        page.newSchema(s);
        const comp = getComp();
        expect(comp.displayFormat).toBe('yyyy-ww');
      });
    });
  });

  describe('#format', () => {
    it('should be default yyyy-MM-dd HH:mm:ss', () => {
      const s: SFSchema = {
        properties: { a: { type: 'string', ui: { widget } } }
      };
      page.newSchema(s);
      const comp = getComp();
      expect(comp['startFormat']).toBe('yyyy-MM-dd HH:mm:ss');
    });
    it('should be spcify format', () => {
      const s: SFSchema = {
        properties: { a: { type: 'string', ui: { widget, format: 'yyyy' } } }
      };
      page.newSchema(s);
      const comp = getComp();
      expect(comp['startFormat']).toBe('yyyy');
    });
    it('should be use timespan when type is number', () => {
      const s: SFSchema = {
        properties: { a: { type: 'number', ui: { widget } } }
      };
      page.newSchema(s);
      const comp = getComp();
      expect(comp['startFormat']).toBe('T');
    });
  });

  describe('range date', () => {
    const s: SFSchema = {
      properties: {
        start: {
          type: 'string',
          ui: { widget: 'date', end: 'end' }
        },
        end: {
          type: 'string',
          ui: { widget: 'date', end: 'end' }
        }
      }
    };
    it('should working', () => {
      page.newSchema(deepCopy(s));
      const comp = getComp();
      expect(comp.mode).toBe('range');
      const time = new Date();
      comp._change([time, time]);
      page
        .checkValue('/start', format(time, comp['startFormat']))
        .checkValue('/end', format(time, comp['startFormat']));
      comp._change(null);
      page.checkValue('/start', null).checkValue('/end', null);
    });
    it('should be default', () => {
      const copyS = deepCopy(s);
      const time = new Date();
      copyS.properties!.start.default = time;
      copyS.properties!.end.default = time;
      page.newSchema(copyS);
      const res = getComp()['displayValue']() as Date[];
      expect(Array.isArray(res)).toBe(true);
      expect(res![0]).toBe(time);
    });
    it('should keep the start default when the end has no value', async () => {
      const time = new Date(2020, 0, 1, 10, 20, 30);
      page.newSchema({
        properties: {
          start: { type: 'string', ui: { widget: 'date', end: 'end' }, default: time },
          end: { type: 'string' }
        }
      } as SFSchema);
      page.time();

      // 范围不完整时不能回写：`_change()` 会把仅剩的一端当成空值清掉，抹掉 `schema.default`
      expect(page.getProperty('/start').value).toBe(time);
      expect(page.getProperty('/end').value).toBeNull();
      // 也不该因为这次清空而多出一次值变更
      expect(context.formChange).not.toHaveBeenCalled();
      page.asyncEnd();
    });
    it('should format both start/end value after the ui.end property is reset', async () => {
      const time = new Date(2019, 0, 1, 10, 20, 30);
      const copyS: SFSchema = {
        properties: {
          start: { type: 'string', ui: { widget: 'date', end: 'end' }, default: time },
          end: { type: 'string', ui: { widget: 'date' }, default: time }
        }
      };
      page.newSchema(copyS);
      page.time();
      await page.stabilize();
      const comp = getComp();
      const expectVal = format(time, comp['startFormat']);
      page.checkValue('/start', expectVal).checkValue('/end', expectVal);

      // `ui.end` 指向的属性会被 `coverProperty` 置为 `hidden`，因此它**没有 widget**：
      // 它自身的 `resetValue` 会把 `schema.default` 原样写回 `_value`，
      // 没有 widget 会再去格式化它 → 范围控件必须在**整轮 reset 之后**回写 end。
      context.comp.reset();
      page.time();
      await page.stabilize();
      page.checkValue('/start', expectVal).checkValue('/end', expectVal);
      page.asyncEnd();
    });
    it('should be removed ui.end when not found end path', () => {
      const copyS = deepCopy(s);
      (copyS.properties!.start.ui as SFDateWidgetSchema).end = 'invalid-end';
      page.newSchema(copyS).checkUI('/start', 'end', null);
    });
    it('should be use start format when end format is null', () => {
      const copyS = deepCopy(s);
      (copyS.properties!.start.ui as SFDateWidgetSchema).format = 'X';
      (copyS.properties!.end.ui as SFDateWidgetSchema).format = '';
      page.newSchema(copyS);
      const comp = getComp();
      expect(comp['endFormat']).toBe('X');
    });
    it('should be custom end format', () => {
      const copyS = deepCopy(s);
      (copyS.properties!.start.ui as SFDateWidgetSchema).format = 'yyyy';
      (copyS.properties!.end.ui as SFDateWidgetSchema).format = 'X';
      page.newSchema(copyS);
      const comp = getComp();
      expect(comp['startFormat']).toBe('yyyy');
      expect(comp['endFormat']).toBe('X');
    });
  });

  describe('ui', () => {
    it('#displayFormat', () => {
      const s: SFSchema = {
        properties: { a: { type: 'string', ui: { widget, displayFormat: 'yyyy' } } }
      };
      page.newSchema(s);
      const comp = getComp();
      comp._openChange(true);
      comp._ok(true);
      expect(comp.displayFormat).toBe('yyyy');
    });
    it('should be trigger onOpenChange', () => {
      const s: SFSchema = {
        properties: { a: { type: 'string', ui: { widget, onOpenChange: vi.fn() } } }
      };
      page.newSchema(s);
      const comp = getComp();
      const ui = s.properties!.a.ui as NzSafeAny;
      expect(ui.onOpenChange).not.toHaveBeenCalled();
      comp._openChange(true);
      expect(ui.onOpenChange).toHaveBeenCalled();
    });
    it('should be trigger onOk', () => {
      const s: SFSchema = {
        properties: { a: { type: 'string', ui: { widget, onOk: vi.fn() } } }
      };
      page.newSchema(s);
      const comp = getComp();
      const ui = s.properties!.a.ui as NzSafeAny;
      expect(ui.onOk).not.toHaveBeenCalled();
      comp._ok(true);
      expect(ui.onOk).toHaveBeenCalled();
    });
  });
});
