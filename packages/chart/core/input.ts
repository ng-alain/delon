// 内部模块：仅供 @delon/chart 内部（chart-echarts、water-wave 等入口点）使用，不是稳定的公开 API。
// ⚠️ 不要给本文件的声明加 JSDoc 的 at-internal 标记，也不要改用按声明生效的 stripInternal 配置：
// packages/tsconfig.lib.json 的 "stripInternal": true 会把被标注的声明从 types/core.d.ts 中删除，
// 而其他入口点需要跨入口点导入本模块的 resolveInputs / watchInputs，声明缺失会让库构建以 TS2305 失败。
// （详见 public_api.ts 的说明：该标记即便只在注释里被提及也会生效，已实测。）
import { Signal, Type, effect, reflectComponentType, untracked } from '@angular/core';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';

export interface G2Input {
  name: string;
  signal: Signal<unknown>;
}

/**
 * 读取组件（含继承链）上声明的 signal input。
 *
 * `reflectComponentType` 是 Angular 公共 API，`inputs[].isSignal` 直接来自框架元数据
 * （`InputFlags.SignalBased`），因此清单与旧 `SimpleChanges` 的覆盖范围完全一致：
 * 框架声明了哪些输入就 diff 哪些输入，子类新增 `input()` 自动生效，无需登记。
 *
 * **副作用**：读 `host[propName]`，因此必须在子类字段初始化完成之后调用
 * （见 `watchInputs` 的懒解析注释）。
 */
export function resolveInputs(host: object): readonly G2Input[] {
  const type = host.constructor as Type<unknown>;
  const mirror = reflectComponentType(type);
  if (!mirror) {
    throw new Error(`[chart] "${type.name}" extends G2BaseComponent but is not a @Component.`);
  }
  return mirror.inputs
    .filter(i => i.isSignal)
    .map(({ propName }) => ({ name: propName, signal: (host as NzSafeAny)[propName] as Signal<unknown> }));
}

/**
 * 监听本组件全部 signal input 的变更；首次执行只建立基线、不回调。
 *
 * 必须在注入上下文中调用（内部创建 effect）。副作用已用 `untracked` 隔离，
 * 避免 `install()` 读取 `viewChild` 查询等信号时污染依赖图。
 *
 * 懒解析：`resolveInputs` 读的是 `host[propName]`，而子类的 `input()` 字段在 `super()`
 * 之后才初始化；放进字段初始化器会拿到 `undefined`。effect 首次执行发生在 CD 期间，
 * 此时子类构造已完成，因此安全。
 */
export function watchInputs(
  host: object,
  handler: (changed: ReadonlyArray<Signal<unknown>>, inputs: readonly G2Input[]) => void
): void {
  let inputs: readonly G2Input[] | null = null;
  let prev: readonly unknown[] | null = null;

  effect(() => {
    inputs ??= resolveInputs(host);

    const next: unknown[] = [];
    const changed: Array<Signal<unknown>> = [];
    inputs.forEach(({ signal }, index) => {
      const value = signal();
      next[index] = value;
      if (prev && !Object.is(value, prev[index])) {
        changed.push(signal);
      }
    });

    const isFirst = prev === null;
    prev = next;
    if (isFirst || changed.length === 0) {
      return;
    }
    untracked(() => handler(changed, inputs!));
  });
}
