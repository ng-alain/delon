import { Pipe, PipeTransform } from '@angular/core';

import { formatMask, FormatMaskOption } from '@delon/util/format';

@Pipe({ name: 'mask' })
export class FormatMaskPipe implements PipeTransform {
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
  transform(value: string, mask: string | FormatMaskOption): string {
    return formatMask(value, mask);
  }
}
