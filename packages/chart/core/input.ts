// 保持非 @internal：stripInternal 会剥掉跨入口点 import 所需的类型声明
import { Signal, Type, effect, reflectComponentType, untracked } from '@angular/core';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';

/** 一个 signal input 的登记项：输入名 + 读取它的 signal。
 *
 * @internal
 */
export interface G2Input {
  name: string;
  signal: Signal<unknown>;
}

/** 读取组件（含继承链）上声明的 signal input；读 `host[propName]`，须待子类字段初始化完成。
 *
 * @internal
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

/** 监听本组件全部 signal input 的变更；须在注入上下文中调用，首次执行只建立基线、不回调。
 *
 * @internal
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
