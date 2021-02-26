import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  /**
   * Filter array
   *
   * 过滤数组
   */
  transform<T>(array: ReadonlyArray<T>, matcher: (item: T, ...args: any[]) => boolean, ...args: any[]): T[] {
    return array.filter(i => matcher(i, ...args));
  }
}
