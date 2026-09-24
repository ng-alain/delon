import { signal, type WritableSignal } from '@angular/core';

/** 原始对象 → 代理，保证 `reactive()` 幂等（同键存活期间代理才存活，见 `reactive()` 的注释） */
const CACHE = new WeakMap<object, object>();
/** 代理对象集合，避免代理套代理叠出两套 signal */
const PROXIES = new WeakSet<object>();

/**
 * 浅响应式对象
 *
 * 让「就地赋值」也能被 signal 跟踪：
 *
 * ```ts
 * const ui = reactive({ spanLabel: 5 });
 * const view = computed(() => ui.spanLabel);
 * ui.spanLabel = 8;   // view 会被标记为脏
 * ```
 *
 * ## 规则
 * - **只跟踪顶层 key**。嵌套结构（数组 `push`/`splice`、对象子属性）不会被跟踪，
 *   必须整值替换：`ui.optionalHelp = { ...ui.optionalHelp, text }`。
 * - **字符串 key**：读取时若值不是函数，则建立（惰性的）signal 并纳入依赖图；
 *   函数成员（含原型链上的方法）原样透传、不跟踪。`symbol` key 一律透传。
 * - **写入**：通过代理写入会同步更新 signal 并通知；直接改写原始对象（绕过代理）
 *   不会通知，并会让 signal 变陈旧。
 * - **幂等**：对同一原始对象重复调用返回同一个代理，不会产生两套 signal。
 *
 * ## 生命周期与回收
 * `CACHE` / `PROXIES` 是模块级 `WeakMap` / `WeakSet`：key（原始对象）与代理同时不可达时
 * 条目自动回收，value 反向引用 key 也不影响回收（ephemeron 语义），因此不需要显式清理。
 * 反过来，只要原始对象被外部长期持有，它的代理与已建立的 signal 也会一起常驻 ——
 * 保留量与「谁持有原始对象」绑定，而不是与 `reactive()` 的调用次数绑定。
 * `SFComponent` 每次初始化都传入全新拷贝（`deepCopy(this.schema)`、`ui` 字面量），
 * 因此不会出现长期持有。
 *
 * @internal
 */
export function reactive<T extends object>(target: T): T {
  if (target === null || typeof target !== 'object') {
    return target;
  }
  // 已是代理 → 原样返回（避免代理套代理产生两套 signal）
  if (PROXIES.has(target)) {
    return target;
  }
  const cached = CACHE.get(target);
  if (cached) {
    return cached as T;
  }

  const deps = new Map<string, WritableSignal<unknown>>();
  const sig = (key: string, current: unknown): WritableSignal<unknown> => {
    let s = deps.get(key);
    if (!s) {
      s = signal(current);
      deps.set(key, s);
    }
    return s;
  };
  const raw = target as Record<string, unknown>;

  const proxy = new Proxy(target, {
    get(t, key, receiver) {
      if (typeof key !== 'string') {
        return Reflect.get(t, key, receiver);
      }
      const existing = deps.get(key);
      if (existing) {
        return existing();
      }
      const value = Reflect.get(t, key, receiver);
      // 函数成员（方法/原型链）不纳入依赖图，否则会破坏调用
      if (typeof value === 'function') {
        return value;
      }
      return sig(key, value)();
    },
    set(t, key, value, receiver) {
      if (typeof key !== 'string') {
        return Reflect.set(t, key, value, receiver);
      }
      // 顺序很重要：**先写目标、成功后再通知**
      // 若反过来（先 set signal），遇到 frozen / 不可写 / 不可扩展的目标时会出现
      // 「signal 已变、目标没变」的分叉；对「不可配置且不可写」的属性，
      // 此后每次 `get` 都会因违反 Proxy 不变量而抛 TypeError。
      const previous = raw[key];
      const ok = Reflect.set(t, key, value, receiver);
      if (ok) {
        sig(key, previous).set(value);
      }
      return ok;
    },
    deleteProperty(t, key) {
      if (typeof key !== 'string') {
        return Reflect.deleteProperty(t, key);
      }
      const ok = Reflect.deleteProperty(t, key);
      if (ok) {
        // 通知依赖方「值没了」，而不是悄悄从依赖图里移除
        deps.get(key)?.set(undefined);
      }
      return ok;
    }
  });

  CACHE.set(target, proxy);
  PROXIES.add(proxy);
  return proxy as T;
}
