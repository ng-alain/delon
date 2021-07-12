import { Pipe, PipeTransform } from '@angular/core';

import { NzSafeAny } from 'ng-zorro-antd/core/types';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  /**
   * Filter array
   *
   * 过滤数组
   */
  transform<T>(array: readonly T[], matcher: (item: T, ...args: NzSafeAny[]) => boolean, ...args: NzSafeAny[]): T[] {
    return array.filter(i => matcher(i, ...args));
  }
}
