import { deepGet } from '@delon/util/other';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

/**
 * String formatting
 *
 * 字符串格式化
 * ```
 * format('this is ${name}', { name: 'asdf' })
 * // output: this is asdf
 * format('this is ${user.name}', { user: { name: 'asdf' } }, true)
 * // output: this is asdf
 * ```
 */
export function format(str: string | null | undefined, obj: NzSafeAny | null | undefined, needDeepGet: boolean = false): string {
  return (str || '').replace(/\${([^}]+)}/g, (_work: string, key: string) =>
    needDeepGet ? deepGet(obj, key.split('.'), '') : (obj || {})[key] || '',
  );
}

/**
 * Format mask
 *
 * 格式化掩码
 * ```ts
 * formatMask('123', '(###)') => (123)
 * ```
 */
export function formatMask(value: string, mask: string): string {
  if (!value) {
    return '';
  }

  const splitValue = value.split('');
  return mask
    .split('')
    .reduce((res, cur) => {
      if (cur === '#') {
        if (splitValue.length > 0) {
          res.push(splitValue.shift()!);
        }
      } else {
        res.push(cur);
      }
      return res;
    }, [] as string[])
    .join('');
}
