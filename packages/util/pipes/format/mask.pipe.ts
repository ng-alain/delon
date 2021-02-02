import { Pipe, PipeTransform } from '@angular/core';
import { formatMask } from '@delon/util/format';

@Pipe({ name: 'mask' })
export class FormatMaskPipe implements PipeTransform {
  /**
   * Format mask
   *
   * 格式化掩码
   * ```ts
   * formatMask('123', '(###)') => (123)
   * ```
   */
  transform(value: string, mask: string): string {
    return formatMask(value, mask);
  }
}
