import { Pipe, PipeTransform } from '@angular/core';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';

/**
 * Filter array
 *
 * 过滤数组
 */
// eslint-disable-next-line @angular-eslint/no-pipe-impure
@Pipe({ name: 'filter', standalone: true, pure: false })
export class FilterPipe implements PipeTransform {
  transform<T>(array: readonly T[], matcher: (item: T, ...args: NzSafeAny[]) => boolean, ...args: NzSafeAny[]): T[] {
    return array.filter(i => matcher(i, ...args));
  }
}
