import type { DebugElement } from '@angular/core';
import type { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { createTestContext } from '@delon/testing';

import { configureSFTestSuite, SCHEMA, SFPage, TestFormComponent } from './base';
import type { ArrayProperty } from '../src/model/array.property';
import type { FormProperty, PropertyGroup } from '../src/model/form.property';
import type { SFSchema } from '../src/schema';

/**
 * 错误聚合
 *
 * 覆盖两件必须成立的事：
 * 1. 被删数组项上报过的错误要从聚合里去掉，否则表单永远是错的；
 * 2. 剩余项的错误要完整聚合到根（含多层嵌套），否则字段仍标红而表单却算有效。
 *
 * 聚合以**子属性实例**为 key，`remove()` 重编号 `path` 不影响它。
 * 注意 `PropertyGroup.getProperty()` 只解析到叶子，`/list/0` 这类中间节点取不到，断言里直接走实例。
 */
describe('form: error aggregation', () => {
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

  const shallowSchema = {
    properties: {
      list: { type: 'array', items: { type: 'object', properties: { name: { type: 'string' } } } }
    }
  } as SFSchema;

  const deepSchema = {
    properties: {
      list: {
        type: 'array',
        items: {
          type: 'object',
          properties: { sub: { type: 'object', properties: { name: { type: 'string' } } } }
        }
      }
    }
  } as SFSchema;

  const list = (): ArrayProperty => page.getProperty('/list') as unknown as ArrayProperty;
  // 注意 `PropertyGroup.getProperty()` 只解析到叶子，`/list/0` 这类中间节点取不到，故直接走实例
  const itemAt = (index: number): PropertyGroup => (list().properties as PropertyGroup[])[index];
  const subOf = (index: number): FormProperty => (itemAt(index).properties as Record<string, FormProperty>)['sub'];
  const messages = (property: FormProperty | undefined): string[] =>
    (property?.errors ?? []).map(e => (e.message ?? e.keyword) as string);
  const rootMessages = (): string[] => messages(context.comp.rootProperty!);

  const buildShallow = (count: number): void => {
    page.newSchema(shallowSchema);
    for (let i = 0; i < count; i++) {
      list().add({ name: `item-${i}` });
    }
  };

  const buildDeep = (): void => {
    page.newSchema(deepSchema);
    list().add({ sub: { name: 'a' } });
    list().add({ sub: { name: 'b' } });
    page.dc();
  };

  describe('array remove', () => {
    it('should drop the errors of the removed item (no phantom error)', () => {
      buildShallow(2);
      page.getProperty('/list/1/name').setErrors({ message: 'boom' });
      expect(rootMessages()).toEqual(['boom']);

      list().remove(1);

      expect(itemAt(1)).toBeUndefined();
      expect(rootMessages()).toEqual([]);
      expect(context.comp.valid).toBe(true);
    });

    it('should keep the errors of the remaining items when a sibling is removed', () => {
      buildDeep();
      page.getProperty('/list/1/sub/name').setErrors({ message: 'deep-boom' });
      expect(rootMessages()).toEqual(['deep-boom']);

      list().remove(0);

      // 每一层都必须继续聚合
      expect(messages(page.getProperty('/list/0/sub/name'))).toEqual(['deep-boom']);
      expect(messages(subOf(0))).toEqual(['deep-boom']);
      expect(messages(itemAt(0))).toEqual(['deep-boom']);
      expect(messages(list())).toEqual(['deep-boom']);
      expect(rootMessages()).toEqual(['deep-boom']);
      expect(context.comp.valid).toBe(false);
    });

    it('should drop the errors of the removed item itself (deeply nested)', () => {
      buildDeep();
      page.getProperty('/list/1/sub/name').setErrors({ message: 'deep-boom' });

      list().remove(1);

      expect(rootMessages()).toEqual([]);
      expect(context.comp.valid).toBe(true);
    });

    it('should keep the form invalid while the error is still shown in the DOM', () => {
      buildDeep();
      page.getProperty('/list/1/sub/name').setErrors({ message: 'deep-boom' });
      page.dc();
      // 走真实删除路径（`ArrayWidget.removeItem`）：删完它还会让数组自校验一次，
      // 子树里由手写 `setErrors` 写入的错误不能被那一次冲掉
      page.remove(1);

      expect(dl.queryAll(By.css('.ant-form-item-explain-error')).length).toBe(1);
      expect(messages(page.getProperty('/list/0/sub/name'))).toEqual(['deep-boom']);
      // `onSubmit()` 在 liveValidate 下依据的就是它（见 `SFComponent.onSubmit`）
      expect(context.comp.valid).toBe(false);
    });

    it('should keep nested array errors when an outer item is removed', () => {
      page.newSchema({
        properties: {
          outer: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                inner: { type: 'array', items: { type: 'object', properties: { name: { type: 'string' } } } }
              }
            }
          }
        }
      } as SFSchema);
      const outer = page.getProperty('/outer') as unknown as ArrayProperty;
      outer.add({ inner: [{ name: 'a' }] });
      outer.add({ inner: [{ name: 'b' }] });
      page.dc();
      page.getProperty('/outer/1/inner/0/name').setErrors({ message: 'deep-inner' });

      // 删外层项会把内层整棵子树的 path 一起改写
      outer.remove(0);

      expect(messages(page.getProperty('/outer/0/inner/0/name'))).toEqual(['deep-inner']);
      expect(rootMessages()).toEqual(['deep-inner']);
      expect(context.comp.valid).toBe(false);
    });

    it('should aggregate the errors reported by every child', () => {
      buildShallow(3);
      page.getProperty('/list/0/name').setErrors({ message: 'e0' });
      page.getProperty('/list/1/name').setErrors({ message: 'e1' });
      page.getProperty('/list/2/name').setErrors({ message: 'e2' });

      expect(rootMessages()).toEqual(['e0', 'e1', 'e2']);
      expect(messages(itemAt(0))).toEqual(['e0']);

      // 某一项重新上报错误时，其他项的错误不能被覆盖
      page.getProperty('/list/1/name').setErrors({ message: 'e1b' });
      expect(rootMessages()).toEqual(['e0', 'e1b', 'e2']);

      // 某一项清空错误后，其他项的错误也不能被连带清掉
      page.getProperty('/list/1/name').setErrors();
      expect(rootMessages()).toEqual(['e0', 'e2']);
    });
  });

  describe('own validation vs children reports', () => {
    it('should report one entry per field when the root validates itself too', () => {
      page.newSchema(SCHEMA.user);
      // `onlyRoot: false` 会先让根按整表 schema 校验一次，再让每个子节点各自上报；
      // 两个必填字段在两边是同一批错误，聚合之后必须仍是两条
      context.comp.validator({ emitError: false, onlyRoot: false });

      expect(rootMessages()).toEqual(['必填项', '必填项']);
      expect(context.comp.valid).toBe(false);
    });

    it('should refresh the root errors when a field becomes valid', () => {
      page.newSchema(SCHEMA.user);
      page.setValue('/name', 'cipchk');
      expect(rootMessages()).toEqual(['必填项']);
      expect(context.comp.valid).toBe(false);

      page.setValue('/pwd', '1111');
      expect(rootMessages()).toEqual([]);
      expect(context.comp.valid).toBe(true);
    });

    it('should not be stuck invalid after editing with liveValidate is false', () => {
      page.newSchema(SCHEMA.user);
      context.liveValidate.set(false);
      fixture.detectChanges();
      // 递归校验会让每个子节点都上报一次错误，随后编辑时不再校验，上报就成了过期数据
      context.comp.validator({ emitError: false, onlyRoot: false });
      expect(context.comp.valid).toBe(false);

      page.setValue('/name', 'cipchk');
      page.setValue('/pwd', '1111');

      // `liveValidate: false` 只在提交时重算，所以断言的是提交校验的结果
      expect(context.comp.validator()).toBe(true);
    });
  });
});
