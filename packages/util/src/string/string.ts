import { deepGet } from '../other/other';

/**
 * 字符串格式化
 * ```
 * format('this is ${name}', { name: 'asdf' })
 * // output: this is asdf
 * format('this is ${user.name}', { user: { name: 'asdf' } }, true)
 * // output: this is asdf
 * ```
 */
export function format(str: string, obj: {}, needDeepGet = false): string {
  return (str || '').replace(
    /\${([^}]+)}/g,
    (work: string, key: string) =>
      needDeepGet
        ? deepGet(obj, key.split('.'), '')
        : (obj || {})[key] || '',
  );
}

/**
 * 转化成RMB元字符串
 * @param digits 当数字类型时，允许指定小数点后数字的个数，默认2位小数
 */
export function yuan(value: any, digits: number = 2): string {
  if (typeof value === 'number') value = value.toFixed(digits);
  return `&yen ${value}`;
}
