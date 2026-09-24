import { computed, DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { createTestContext } from '@delon/testing';

import { configureSFTestSuite, SFPage, TestFormComponent } from './base.spec';
import type { FormProperty, PropertyGroup } from '../src/model/form.property';
import type { SFSchema } from '../src/schema';
import type { SFUISchemaItem } from '../src/schema/ui';
import { SFComponent } from '../src/sf.component';
import type { Widget } from '../src/widget';
import { StringWidget } from '../src/widgets/string/string.widget';

/**
 * 「零手动标脏」验证工具
 *
 * 把组件里所有手动脏检查入口中和掉（根组件 cdr、每个 widget 的私有 cdr），随后触发
 * 变更并只跑一次普通 CD。若 DOM 仍然更新，说明该变更**纯粹通过 signal 依赖图**传播，
 * 而不是靠 markForCheck / detectChanges。
 *
 * 之所以有效：`fixture.detectChanges()` 尊重 OnPush 的 dirty 标记，未被标脏的视图不会
 * 刷新；Default CD 的视图每遍都会被检查，就检不出漏依赖。
 *
 * `Widget.ngAfterViewInit` 里那处必需的手动 CD 也会被一并中和：它只负责 `[ngModel]`
 * 的初值写入，发生在本工具的安装之前，不影响这里断言的 signal 路径。
 */
function neutralizeManualDirtyCheck(sf: SFComponent): string[] {
  const patched: string[] = [];
  const stub = (owner: unknown, key: string, label: string): void => {
    if (!owner) return;
    (owner as Record<string, unknown>)[key] = (): void => {};
    patched.push(label);
  };

  const rootCdr = (sf as unknown as { cdr: unknown }).cdr;
  // 防御性代码：`SFComponent` 目前不注入 `ChangeDetectorRef`。若将来有人加回来，
  // 这里会把它一并中和，下面那条 `length === 0` 的断言随即失败。
  if (rootCdr) {
    stub(rootCdr, 'detectChanges', 'SFComponent.cdr.detectChanges');
    stub(rootCdr, 'markForCheck', 'SFComponent.cdr.markForCheck');
  }

  const widgets: Array<Widget<FormProperty, SFUISchemaItem>> = [];
  const root = sf.rootProperty;
  if (root) {
    if (root.widget) widgets.push(root.widget);
    (root as PropertyGroup).forEachChildRecursive(p => {
      if (p.widget) widgets.push(p.widget);
    });
  }
  widgets.forEach(w => {
    // widget 内部只有私有 cdr 这一处强制 CD（位于 `Widget.ngAfterViewInit`）
    const cdr = (w as unknown as { cdr: unknown }).cdr;
    stub(cdr, 'detectChanges', 'widget.cdr.detectChanges');
    stub(cdr, 'markForCheck', 'widget.cdr.markForCheck');
  });

  return patched;
}

describe('form: signal-driven change detection', () => {
  configureSFTestSuite();

  let fixture: ComponentFixture<TestFormComponent>;
  let dl: DebugElement;
  let context: TestFormComponent;
  let page: SFPage;
  let sf: SFComponent;

  beforeEach(() => {
    ({ fixture, dl, context } = createTestContext(TestFormComponent));
    page = new SFPage(context.comp);
    page.cleanOverlay().prop(dl, context, fixture);
    sf = context.comp;
  });

  /** 只跑一次普通 CD；不做任何强制标脏 */
  const flush = (): void => fixture.detectChanges();

  it('should neutralize every manual dirty-check entry point', () => {
    page.newSchema({ properties: { a: { type: 'string' }, b: { type: 'number' } } } as SFSchema);
    const patched = neutralizeManualDirtyCheck(sf);
    // `SFComponent` 不注入 `ChangeDetectorRef`
    expect((sf as unknown as { cdr?: unknown }).cdr).toBeUndefined();
    expect(patched.filter(p => p === 'SFComponent.cdr.detectChanges').length).toBe(0);
    // widget 只保留 `Widget.ngAfterViewInit` 里那一处强制 CD
    expect(patched.filter(p => p === 'widget.cdr.detectChanges').length).toBeGreaterThanOrEqual(1);
  });

  describe('signal-backed paths refresh with ZERO manual dirty checking', () => {
    it('updateFeedback -> ui.feedback (Proxy) -> sf-item-wrap class', () => {
      page.newSchema({ properties: { a: { type: 'string' } } } as SFSchema);
      neutralizeManualDirtyCheck(sf);

      const item = dl.query(By.css('nz-form-item')).nativeElement as HTMLElement;
      expect(item.classList.contains('ant-form-item-has-feedback')).toBe(false);

      sf.updateFeedback('/a', 'warning');
      flush();

      expect(item.classList.contains('ant-form-item-has-warning')).toBe(true);
      expect(item.classList.contains('ant-form-item-has-feedback')).toBe(true);
    });

    it('setDisabled -> schema.readOnly (Proxy) -> input.disabled', () => {
      page.newSchema({ properties: { a: { type: 'string' } } } as SFSchema);
      neutralizeManualDirtyCheck(sf);

      const input = dl.query(By.css('input')).nativeElement as HTMLInputElement;
      expect(input.disabled).toBe(false);

      sf.setDisabled('/a', true);
      flush();

      expect(input.disabled).toBe(true);
    });

    it('setRequired -> ui._required (Proxy) -> label class', () => {
      page.newSchema({ properties: { a: { type: 'string' } } } as SFSchema);
      neutralizeManualDirtyCheck(sf);

      const label = dl.query(By.css('label')).nativeElement as HTMLElement;
      expect(label.classList.contains('ant-form-item-required')).toBe(false);

      sf.setRequired('/a', true);
      flush();

      expect(label.classList.contains('ant-form-item-required')).toBe(true);
    });

    it('setErrors -> widget.showError (signal) -> OnPush child refreshes', () => {
      page.newSchema({ properties: { a: { type: 'string' } } } as SFSchema);
      neutralizeManualDirtyCheck(sf);

      const item = dl.query(By.css('nz-form-item')).nativeElement as HTMLElement;
      expect(item.classList.contains('ant-form-item-with-help')).toBe(false);

      page.getProperty('/a').setErrors({ message: 'boom' });
      flush();

      // showError 经 signal 传到 OnPush 的 sf-item-wrap 并刷新
      expect(item.classList.contains('ant-form-item-with-help')).toBe(true);
      expect(dl.query(By.css('.ant-form-item-explain-error')).nativeElement.textContent).toContain('boom');
    });

    it('radio widget data (signal-ized, from reset) refreshes with ZERO manual CD', () => {
      page.newSchema({
        properties: { a: { type: 'string', enum: ['1', '2'], ui: { widget: 'radio' } } }
      } as SFSchema);
      neutralizeManualDirtyCheck(sf);

      const labels = (): number => dl.queryAll(By.css('nz-radio-group label')).length;
      expect(labels()).toBe(2);

      // 文档推荐用法：就地替换 enum + setValue（会走 widget.reset -> getData -> data）
      page.getProperty('/a').schema.enum = ['1', '2', '3'];
      sf.setValue('/a', '1');
      flush();

      expect(labels()).toBe(3);
    });

    it('array add refreshes with ZERO manual CD (properties signal-ized)', () => {
      page.newSchema({
        properties: {
          list: { type: 'array', items: { type: 'object', properties: { v: { type: 'string' } } } }
        }
      } as SFSchema);
      neutralizeManualDirtyCheck(sf);

      const rows = (): number => dl.queryAll(By.css('.sf__array-container .sf__array-item')).length;
      expect(rows()).toBe(0);

      // 直接调属性 API（page.add() 内部会自己 dc()，会掩盖问题）
      (page.getProperty('/list') as unknown as { add: (v: object) => void }).add({});
      flush();

      expect(rows()).toBe(1);
    });

    it('text widget local field (signal-ized) refreshes with ZERO manual CD', () => {
      page.newSchema({ properties: { a: { type: 'string', ui: { widget: 'text' } } } } as SFSchema);
      neutralizeManualDirtyCheck(sf);

      const span = dl.query(By.css('sf-text .ant-form-item-control-input-content span')).nativeElement as HTMLElement;
      expect(span.textContent).toBe('-');

      sf.setValue('/a', 'abc');
      flush();

      // 局部字段由 signal 驱动，即使手动 CD 全部被中和也能刷新
      expect(span.textContent).toBe('abc');
    });
  });

  describe('negative control — the instrument has teeth', () => {
    it('a plain field on an OnPush widget must NOT refresh', () => {
      page.newSchema({ properties: { a: { type: 'string' } } } as SFSchema);
      neutralizeManualDirtyCheck(sf);

      const widget = page.getWidget<StringWidget>('sf-string');
      expect(dl.query(By.css('nz-input-wrapper'))).toBeNull();

      widget.type = 'addon'; // 普通字段，无 signal 支撑
      flush();

      expect(dl.query(By.css('nz-input-wrapper'))).toBeNull();
    });
  });

  describe('detectChanges() root.widget fix (regression net)', () => {
    it('text widget local field refreshes while manual CD is left in place', () => {
      page.newSchema({ properties: { a: { type: 'string', ui: { widget: 'text' } } } } as SFSchema);

      const span = dl.query(By.css('sf-text .ant-form-item-control-input-content span')).nativeElement as HTMLElement;
      expect(span.textContent).toBe('-');

      sf.setValue('/a', 'abc');
      flush();

      // 本例不中和手动 CD：`detectChanges()` 会标自己（含祖先链），
      // 因此 sf-item 是 OnPush 也能刷新
      expect(span.textContent).toBe('abc');
    });
  });

  describe('local state without signal backing', () => {
    it('a plain local field never enters the dependency graph', () => {
      page.newSchema({ properties: { a: { type: 'string' } } } as SFSchema);
      const widget = page.getWidget<StringWidget>('sf-string');

      let runs = 0;
      const view = computed(() => {
        runs++;
        return widget.type;
      });
      const initial = view();
      expect(runs).toBe(1);

      widget.type = 'addon';
      expect(runs).toBe(1); // 依赖未建立
      expect(view()).toBe(initial); // computed 缓存 -> 仍是旧值
    });
  });
});
