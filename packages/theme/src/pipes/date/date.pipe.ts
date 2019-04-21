import { Pipe, PipeTransform } from '@angular/core';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import format from 'date-fns/format';

@Pipe({ name: '_date' })
export class DatePipe implements PipeTransform {
  transform(value: Date | string | number, formatString: string = 'YYYY-MM-DD HH:mm'): string {
    if (value) {
      if (formatString === 'fn') {
        return distanceInWordsToNow(value, {
          locale: (window as any).__locale__,
        });
      }
      if (typeof value === 'string' && !isNaN(+value)) {
        value = +value;
      }
      return format(value, formatString);
    } else {
      return '';
    }
  }
}
