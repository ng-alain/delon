import { Pipe, PipeTransform } from '@angular/core';
import format from 'date-fns/format';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

/**
 * @see https://ng-alain.com/docs/service-pipe#%E6%97%A5%E6%9C%9F-_date
 */
@Pipe({ name: '_date' })
export class DatePipe implements PipeTransform {
  transform(
    value: Date | string | number,
    formatString: string = 'YYYY-MM-DD HH:mm',
  ): string {
    if (value) {
      if (formatString === 'fn') {
        return distanceInWordsToNow(value, {
          locale: (window as any).__locale__,
        });
      }
      return format(value, formatString);
    } else {
      return '';
    }
  }
}
