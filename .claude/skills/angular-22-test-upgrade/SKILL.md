---
name: angular-22-test-upgrade
description: '将测试包装组件的普通属性改为 signal（signal 化）以适配 Angular 22 变更检测。Use when: 测试里 fixture.componentInstance.xxx = value 赋值后 fixture.detectChanges() 不刷新、pipe/component 测试断言拿到旧值、需要把测试组件属性改成 signal、TestBed 强制 OnPush/zoneless 兼容。TestBed 的全局 provider（含 DI 缺失类错误的修法）见 packages/test-providers.ts。'
---

# 测试组件属性 signal 化（Angular 22）

Angular v21+ 的 TestBed 强制 OnPush/zoneless 兼容：首次 `detectChanges()` 全量渲染后，普通属性赋值再 `detectChanges()` 不会刷新 DOM（`markForCheck()` 也无效）；只有 signal 变化才会被后续 `detectChanges()` 拾取。**把测试包装组件的可变属性 signal 化即可修复。**

## 适用场景

- `beforeEach` 先调 `fixture.detectChanges()`，之后 `fixture.componentInstance.xxx = value` 再 `detectChanges()`，断言仍拿到初始值（如 `Expected 'init' to contain 'changed'`，非 NG0100）

## 步骤

1. 导入 `signal`：
   ```ts
   import { Component, signal } from '@angular/core';
   ```

2. 普通属性改为 signal（保留初始值）：
   ```ts
   readonly value = signal(true);
   readonly yes = signal<string | undefined>(undefined);
   ```

3. 模板读取加 `()`：
   ```html
   <div id="result" [innerHTML]="value() | yn: yes() : no()"></div>
   ```

4. 测试体赋值改用 `.set()`：
   ```ts
   fixture.componentInstance.value.set(item.value);
   fixture.detectChanges();
   ```

5. 若用了 `TestBed.overrideTemplate(...)`，其中引用的属性也要写成 `value()` 形式，否则 pipe 收到的是 signal 对象而非值。

6. 运行验证并检查编译（**必须 headless，勿弹浏览器**）：
   ```sh
   npx ng test delon --watch=false --include='packages/theme/src/pipes/**/*.spec.ts'
   ```

## 运行测试：一律 headless（不弹浏览器）

- 本项目统一用 `@angular/build:unit-test` 驱动 ChromiumHeadless，单文件/整包验证都是无头执行：
  ```sh
  npx ng test delon --watch=false --include='packages/theme/src/pipes/**/*.spec.ts'
  pnpm run test   # 整包脚本本身已是 headless（ChromiumHeadless）
  ```
- 无需再传浏览器参数：默认即 headless，不会弹出真实浏览器窗口。

## 常见变体

- **双向绑定**（`[(x)]="sig"`）：signal 名不加 `()`，Angular 17.1+ 会自动 `sig.set($event)`；嵌套对象如 `[(ngModel)]="i().start"` 也可用（写回 `i().start`）。
- **对象嵌套更新**：Angular 22 已移除 `signal.mutate()`（只剩 set/update/asReadonly），必须用展开：
  ```ts
  context.page.update(p => ({ ...p, total: true }));
  ```
- **共享辅助类**（如 `@delon/testing` 的 `PageG2`）里直接 `context.data = ...` 的地方，需改成 signal 感知：
  ```ts
  if (typeof ctx.data === 'function' && typeof ctx.data.set === 'function') ctx.data.set(data);
  else ctx.data = data;
  ```
- **非空断言**：signal 读回 `string | undefined` 传 `toBe()` 会报 TS2345（`Expected<T>` 不含 undefined），断言处加 `!`：`expect(el.innerText).toBe(context.title()!)`。
- **断言里读属性值**：原来 `toBe(context.title)` 现在要 `context.title()`。

## 注意

- 多次连续 `.set()` + `detectChanges()` 也能正确刷新，可用于 true/false 等多状态用例，真正覆盖每个分支。
- 已应用示例：`packages/theme/src/pipes/yn/yn.pipe.spec.ts`、`packages/theme/src/pipes/safe/html.pipe.spec.ts`、`url.pipe.spec.ts`。
