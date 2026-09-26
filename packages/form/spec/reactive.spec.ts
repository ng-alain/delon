import { computed, DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';

import { createTestContext } from '@delon/testing';

import { configureSFTestSuite, SFPage, TestFormComponent } from './base';
import { reactive } from '../src/reactive';
import type { SFSchema } from '../src/schema';

describe('form: reactive', () => {
  configureSFTestSuite();

  let fixture: ComponentFixture<TestFormComponent>;
  let dl: DebugElement;
  let context: TestFormComponent;
  let page: SFPage;

  beforeEach(() => {
    ({ fixture, dl, context } = createTestContext(TestFormComponent));
    page = new SFPage(context.comp);
    page.cleanOverlay().prop(dl, context, fixture);
  });

  describe('unit', () => {
    it('should be idempotent for the same target', () => {
      const raw = { a: 1 };
      const p1 = reactive(raw);
      const p2 = reactive(raw);
      const p3 = reactive(p1);
      expect(p1).toBe(p2);
      expect(p1).toBe(p3);
    });

    it('should track a key that is written before its first read', () => {
      const obj = reactive<Record<string, unknown>>({ a: 1 });
      let runs = 0;
      const view = computed(() => {
        runs++;
        return obj.b;
      });
      expect(view()).toBeUndefined();
      expect(runs).toBe(1);
      // `b` 不在目标对象上——`ui.feedback` / `ui._render` 就是这种形态
      obj.b = 'created';
      expect(view()).toBe('created');
      expect(runs).toBe(2);
    });

    it('should not wrap function members', () => {
      const fn = (): string => 'ok';
      const obj = reactive<Record<string, unknown>>({ fn });
      expect(obj.fn).toBe(fn);
      expect((obj.fn as () => string)()).toBe('ok');
      expect(typeof obj.toString).toBe('function');
    });

    it('should notify dependents when a key is deleted', () => {
      const obj = reactive<Record<string, unknown>>({ a: 1 });
      let runs = 0;
      const view = computed(() => {
        runs++;
        return obj.a;
      });
      expect(view()).toBe(1);
      delete obj.a;
      expect(view()).toBeUndefined();
      expect(runs).toBe(2);
    });

    it('should skip same-value writes (Object.is equality)', () => {
      const obj = reactive<Record<string, unknown>>({ a: 1 });
      let runs = 0;
      const view = computed(() => {
        runs++;
        return obj.a;
      });
      view();
      obj.a = 1;
      expect(view()).toBe(1);
      expect(runs).toBe(1);
    });

    /**
     * 以下三条覆盖 `set` / `deleteProperty` 的「**先写目标、成功后再通知**」顺序：
     * 目标拒绝写入时 signal 不能领先目标，否则对「不可配置且不可写」的属性，
     * 之后每次 `get` 都会因违反 Proxy 不变量而抛 TypeError。
     */
    it('should not diverge when the target rejects the write (frozen)', () => {
      const target = Object.freeze({ a: 1 }) as { a: number };
      const obj = reactive(target);
      expect(obj.a).toBe(1); // 先建立 signal

      try {
        (obj as { a: number }).a = 2;
      } catch {
        // 严格模式下 `set` trap 返回 false 会让赋值抛错，属正确行为
      }
      expect(target.a).toBe(1);
      // signal 不能领先目标，否则这里会抛 Proxy 不变量 TypeError
      expect(obj.a).toBe(1);
    });

    it('should not clear the signal when the target rejects the delete', () => {
      const target: Record<string, number> = { a: 1 };
      Object.defineProperty(target, 'a', { configurable: false, enumerable: true, writable: true });
      const obj = reactive(target);
      expect(obj.a).toBe(1); // 先建立 signal

      try {
        delete (obj as Record<string, number>).a;
      } catch {
        // 同上：`delete` trap 返回 false 时，严格模式下的删除也会抛错
      }
      expect('a' in target).toBe(true);
      expect(obj.a).toBe(1);
    });

    it('should not notify when the write is rejected (non-extensible target)', () => {
      const target = Object.preventExtensions({ a: 1 }) as { a: number; b?: number };
      const obj = reactive(target);
      let runs = 0;
      const view = computed(() => {
        runs++;
        return obj.b;
      });
      expect(view()).toBeUndefined();
      expect(runs).toBe(1);

      try {
        obj.b = 2; // 目标不可扩展 → 写入被拒（严格模式下赋值本身会抛）
      } catch {
        // 同 frozen 用例：目标不可扩展时同样拒绝写入
      }
      expect(view()).toBeUndefined();
      expect(runs).toBe(1);
      expect((target as { b?: number }).b).toBeUndefined();
    });
  });

  describe('integration', () => {
    it('should make `ui.feedback` reactive (via updateFeedback)', () => {
      page.newSchema({ properties: { a: { type: 'string' } } } as SFSchema);
      const prop = page.getProperty('/a');

      let runs = 0;
      const view = computed(() => {
        runs++;
        return prop.ui.feedback;
      });
      expect(view()).toBeUndefined();
      expect(runs).toBe(1);

      context.comp.updateFeedback('/a', 'error');
      expect(view()).toBe('error');
      expect(runs).toBe(2);
    });

    it('should make `ui._required` reactive (via setRequired, key absent initially)', () => {
      page.newSchema({ properties: { a: { type: 'string' } } } as SFSchema);
      const prop = page.getProperty('/a');
      expect('_required' in prop.ui).toBe(false);

      let runs = 0;
      const view = computed(() => {
        runs++;
        return prop.ui._required;
      });
      view();
      const before = runs;

      context.comp.setRequired('/a', true);
      expect(view()).toBe(true);
      expect(runs).toBeGreaterThan(before);
    });

    it('should make `schema.required` reactive (via setRequired)', () => {
      page.newSchema({
        properties: { a: { type: 'string' }, b: { type: 'string' } },
        required: ['b']
      } as SFSchema);
      const root = context.comp.rootProperty!;

      let runs = 0;
      const view = computed(() => {
        runs++;
        return (root.schema.required as string[]).length;
      });
      expect(view()).toBe(1);
      expect(runs).toBe(1);

      context.comp.setRequired('/a', true);
      expect(view()).toBe(2);
      expect(runs).toBe(2);

      context.comp.setRequired('/a', false);
      expect(view()).toBe(1);
      expect(runs).toBe(3);
    });

    it('should make `schema.required` reactive (via visibleIf required)', () => {
      page.newSchema({
        properties: {
          login_type: { type: 'string', enum: ['m', 'p'], default: 'm' },
          code: {
            type: 'string',
            ui: {
              visibleIf: { login_type: (val: string) => (val === 'm' ? { required: true, show: true } : null) }
            }
          }
        },
        required: ['login_type']
      } as SFSchema);
      const root = context.comp.rootProperty!;

      let runs = 0;
      const view = computed(() => {
        runs++;
        return (root.schema.required as string[]).includes('code');
      });
      expect(view()).toBe(true);
      expect(runs).toBe(1);

      page.setValue('/login_type', 'p');
      expect(view()).toBe(false);
      expect(runs).toBe(2);
    });

    it('should make `schema.enum` reactive (documented user pattern)', () => {
      page.newSchema({ properties: { a: { type: 'string', enum: ['1'] } } } as SFSchema);
      const prop = page.getProperty('/a');

      let runs = 0;
      const view = computed(() => {
        runs++;
        return (prop.schema.enum as string[]).length;
      });
      expect(view()).toBe(1);
      expect(runs).toBe(1);

      // 文档推荐用法：就地替换 enum
      prop.schema.enum = ['1', '2', '3'];
      expect(view()).toBe(3);
      expect(runs).toBe(2);
    });

    it('should make `schema.readOnly` reactive (via setDisabled)', () => {
      page.newSchema({ properties: { a: { type: 'string' } } } as SFSchema);
      const prop = page.getProperty('/a');

      let runs = 0;
      const view = computed(() => {
        runs++;
        return prop.schema.readOnly;
      });
      view();
      const before = runs;

      context.comp.setDisabled('/a', true);
      expect(view()).toBe(true);
      expect(runs).toBeGreaterThan(before);
    });

    it('should expose the same reactive ui/schema to the widget', () => {
      page.newSchema({ properties: { a: { type: 'string' } } } as SFSchema);
      const prop = page.getProperty('/a');
      expect(prop.widget.ui).toBe(prop.ui);
      expect(prop.widget.schema).toBe(prop.schema);
    });

    it('should NOT track in-place mutation of a nested array (documented prohibition)', () => {
      page.newSchema({ properties: { a: { type: 'string', enum: ['1'] } } } as SFSchema);
      const prop = page.getProperty('/a');

      let runs = 0;
      const view = computed(() => {
        runs++;
        return (prop.schema.enum as string[]).length;
      });
      view();
      const before = runs;

      (prop.schema.enum as string[]).push('2');
      expect(view()).toBe(1); // 静默陈旧：值已变但依赖未通知
      expect(runs).toBe(before);
    });
  });

  describe('FormProperty state (value / errors / valid / visible)', () => {
    it('should make `value` reactive', () => {
      page.newSchema({ properties: { a: { type: 'string' } } } as SFSchema);
      const prop = page.getProperty('/a');

      let runs = 0;
      const view = computed(() => {
        runs++;
        return prop.value;
      });
      view();
      expect(runs).toBe(1);

      context.comp.setValue('/a', 'x');
      expect(view()).toBe('x');
      expect(runs).toBe(2);
    });

    it('should make `errors` reactive', () => {
      page.newSchema({ properties: { a: { type: 'string' } } } as SFSchema);
      const prop = page.getProperty('/a');

      let runs = 0;
      const view = computed(() => {
        runs++;
        return prop.errors?.length ?? 0;
      });
      expect(view()).toBe(0);

      prop.setErrors({ message: 'boom' });
      expect(view()).toBe(1);
      expect(runs).toBe(2);
    });

    it('should make `valid` reactive', () => {
      page.newSchema({ properties: { a: { type: 'string' } } } as SFSchema);
      const prop = page.getProperty('/a');

      let runs = 0;
      const view = computed(() => {
        runs++;
        return prop.valid;
      });
      expect(view()).toBe(true);
      expect(runs).toBe(1);

      prop.setErrors({ message: 'boom' });
      expect(view()).toBe(false);
      expect(runs).toBe(2);
    });

    it('should make `visible` reactive', () => {
      page.newSchema({ properties: { a: { type: 'string' } } } as SFSchema);
      const prop = page.getProperty('/a');

      let runs = 0;
      const view = computed(() => {
        runs++;
        return prop.visible;
      });
      expect(view()).toBe(true);

      prop.setVisible(false);
      expect(view()).toBe(false);
      expect(runs).toBe(2);
    });
  });

  describe('Widget getter shells (third-party template compat)', () => {
    it('should make `showError` / `error` reactive without changing template syntax', () => {
      page.newSchema({ properties: { a: { type: 'string' } } } as SFSchema);
      const prop = page.getProperty('/a');
      const widget = prop.widget;

      // 与第三方模板写法一致：直接读属性，而不是调用 signal
      let runs = 0;
      const view = computed(() => {
        runs++;
        return { showError: widget.showError, error: widget.error };
      });
      expect(view().showError).toBe(false);
      expect(runs).toBe(1);

      prop.setErrors({ message: 'boom' });
      expect(view().showError).toBe(true);
      expect(view().error).toBe('boom');
      expect(runs).toBeGreaterThan(1);
    });

    it('should make `value` reactive through the shell', () => {
      page.newSchema({ properties: { a: { type: 'string' } } } as SFSchema);
      const widget = page.getProperty('/a').widget;

      let runs = 0;
      const view = computed(() => {
        runs++;
        return widget.value;
      });
      view();
      const before = runs;

      context.comp.setValue('/a', 'x');
      expect(view()).toBe('x');
      expect(runs).toBeGreaterThan(before);
    });

    it('should make `ui` / `schema` reactive through the shell', () => {
      page.newSchema({ properties: { a: { type: 'string', enum: ['1'] } } } as SFSchema);
      const widget = page.getProperty('/a').widget;

      let uiRuns = 0;
      const uiView = computed(() => {
        uiRuns++;
        return widget.ui.feedback;
      });
      let schemaRuns = 0;
      const schemaView = computed(() => {
        schemaRuns++;
        return (widget.schema.enum as string[]).length;
      });

      expect(uiView()).toBeUndefined();
      expect(schemaView()).toBe(1);
      const uiBefore = uiRuns;
      const schemaBefore = schemaRuns;

      context.comp.updateFeedback('/a', 'error');
      widget.schema.enum = ['1', '2', '3'];
      expect(uiView()).toBe('error');
      expect(schemaView()).toBe(3);
      expect(uiRuns).toBeGreaterThan(uiBefore);
      expect(schemaRuns).toBeGreaterThan(schemaBefore);
    });
  });
});
