/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Omit specified keys from an object
 *
 * 忽略 `obj` 指定属性
 *
 * @example
 * omit({ a: 1, b: 2, c: 3 }, 'a') => { b: 2, c: 3 }
 * omit({ a: 1, b: 2, c: 3 }, ['a', 'c']) => { b: 2 }
 * omit({ a: 1, b: 2 }, key => key === 'a') => { a: 1 }
 */
export function omit<T extends object>(obj: T | null | undefined, params?: string | number | null): T;
export function omit<T extends object>(obj: T | null | undefined, params?: Array<string | number> | null): T;
export function omit<T extends object>(
  obj: T | null | undefined,
  fn: (key: string | number, value: any, obj: T) => boolean
): T;
export function omit<T extends object>(
  obj: T | null | undefined,
  params: Array<string | number> | null,
  fn: (key: string | number, value: any, obj: T) => boolean
): T;
export function omit<T extends object>(
  obj: T | null | undefined,
  params: any,
  fn?: (key: string | number, value: any, obj: T) => boolean
): T {
  if (obj == null) return {} as T;
  if (typeof params === 'function') {
    fn = params;
    params = [];
  }
  const isFn = typeof fn === 'function';
  params = Array.isArray(params) ? params : [params];
  const res = Object.fromEntries(
    Object.entries(obj).filter(i => !params || (!params.includes(i[0]) && (!isFn || fn!(i[0], i[1], obj))))
  );
  return res as T;
}
