import { Pipe, PipeTransform } from '@angular/core';
import { commasNumber } from '@delon/util/format/number';

@Pipe({ name: 'commasNumber' })
export class CommasNumberPipe implements PipeTransform {
  /**
   * Format a number with commas as thousands separators
   *
   * 用逗号将数字格式化为千位分隔符
   */
  transform(value: number | string, separator: string = ','): string {
    return commasNumber(value, separator);
  }
}
