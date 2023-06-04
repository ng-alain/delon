import extend from 'extend';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';

/**
 * Gets the value at `path` of `object`, like `_.get` in lodash.
 *
 * 类似 `_.get`，根据 `path` 获取安全值
 */
export function deepGet(obj: NzSafeAny, path: string | string[] | null | undefined, defaultValue?: unknown): NzSafeAny {
  if (!obj || path == null || path.length === 0) return defaultValue;
  if (!Array.isArray(path)) {
    path = ~path.indexOf('.') ? path.split('.') : [path];
  }
  if (path.length === 1) {
    const checkObj = obj[path[0]];
    return typeof checkObj === 'undefined' ? defaultValue : checkObj;
  }
  const res = path.reduce((o, k) => (o || {})[k], obj);
  return typeof res === 'undefined' ? defaultValue : res;
}

/**
 * Base on [extend](https://github.com/justmoon/node-extend) deep copy.
 *
 * 基于 [extend](https://github.com/justmoon/node-extend) 的深度拷贝
 *
 * NOTE: Don't a lot of recursion, maybe performance issues
 */
export function deepCopy<T extends { [key: string]: NzSafeAny } = NzSafeAny>(obj: T | null | undefined): T {
  const result = extend(true, {}, { _: obj });
  return result._ as T;
}

/**
 * Deep merge object.
 *
 * 深度合并对象
 *
 * @param original 原始对象
 * @param arrayProcessMethod 数组处理方式
 *  - `true` 表示替换新值，不管新值为哪种类型
 *  - `false` 表示会合并整个数组（将旧数据与新数据合并成新数组）
 * @param objects 要合并的对象
 */
export function deepMergeKey(original: unknown, arrayProcessMethod: boolean, ...objects: NzSafeAny[]): NzSafeAny {
  if (Array.isArray(original) || typeof original !== 'object') return original;

  const isObject = (v: unknown): boolean => typeof v === 'object';

  const merge = (target: NzSafeAny, obj: NzSafeAny): NzSafeAny => {
    Object.keys(obj)
      .filter(key => key !== '__proto__' && Object.prototype.hasOwnProperty.call(obj, key))
      .forEach(key => {
        const fromValue = obj[key];
        const toValue = target[key];
        if (Array.isArray(toValue)) {
          target[key] = arrayProcessMethod ? fromValue : [...toValue, ...fromValue];
        } else if (typeof fromValue === 'function') {
          target[key] = fromValue;
        } else if (fromValue != null && isObject(fromValue) && toValue != null && isObject(toValue)) {
          target[key] = merge(toValue, fromValue);
        } else {
          target[key] = deepCopy(fromValue);
        }
      });
    return target;
  };

  objects.filter(v => v != null && isObject(v)).forEach(v => merge(original, v));

  return original;
}

/**
 * Deep merge object.
 *
 * 深度合并对象
 */
export function deepMerge(original: unknown, ...objects: unknown[]): NzSafeAny {
  return deepMergeKey(original, false, ...objects);
}
