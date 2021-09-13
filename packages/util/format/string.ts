import { deepGet } from '@delon/util/other';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

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
export function format(
  str: string | null | undefined,
  obj: NzSafeAny | null | undefined,
  needDeepGet: boolean = false
): string {
  return (str || '').replace(/\${([^}]+)}/g, (_work: string, key: string) =>
    needDeepGet ? deepGet(obj, key.split('.'), '') : (obj || {})[key] || ''
  );
}

export interface FormatMaskOption {
  mask: string;
  tokens?: { [key: string]: FormatMaskToken };
}

export interface FormatMaskToken {
  pattern: RegExp;
  default?: NzSafeAny;
  transform?: (char: string) => string;
}

/**
 * Format mask
 *
 * 格式化掩码
 *
 * | 字符 | 描述 |
 * | --- | --- |
 * | `0` | 任意数字，若该位置字符不符合，则默认为 `0` 填充 |
 * | `9` | 任意数字 |
 * | `#` | 任意字符 |
 * | `U` | 转换大写 |
 * | `L` | 转换小写 |
 * | `*` | 转换为 `*` 字符 |
 *
 * ```ts
 * formatMask('123', '(###)') => (123)
 * formatMask('15900000000', '999****9999') => 159****0000
 * ```
 */
export function formatMask(value: string, option: string | FormatMaskOption): string {
  if (!value) {
    return '';
  }
  const opt: FormatMaskOption = {
    ...(typeof option === 'string' ? { mask: option } : option)
  };
  const tokens: { [key: string]: FormatMaskToken } = {
    '0': { pattern: /\d/, default: '0' },
    '9': { pattern: /\d/ },
    '#': { pattern: /[a-zA-Z0-9]/ },
    U: {
      pattern: /[a-zA-Z]/,
      transform: char => char.toLocaleUpperCase()
    },
    L: {
      pattern: /[a-zA-Z]/,
      transform: char => char.toLocaleLowerCase()
    },
    '*': {
      pattern: /.*/,
      transform: _ => `*`
    },
    ...opt.tokens
  };

  const splitValue = value.split('');
  return opt.mask
    .split('')
    .reduce((res, cur) => {
      const token = tokens[cur];
      if (!token) {
        res.push(cur);
        return res;
      }

      const value = splitValue.shift() ?? '';
      if (!token.pattern.test(value)) {
        if (token.default) res.push(token.default);
        return res;
      }

      if (typeof token.transform === 'function') {
        res.push(token.transform(value));
      } else {
        res.push(value);
      }
      return res;
    }, [] as string[])
    .join('');
}
