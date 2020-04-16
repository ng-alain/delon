import { Pipe, PipeTransform } from '@angular/core';
import format from 'date-fns/format';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import parse from 'date-fns/parse';

@Pipe({ name: '_date' })
export class DatePipe implements PipeTransform {
  transform(value: Date | string | number, formatString: string = 'yyyy-MM-dd HH:mm'): string {
    const options = { locale: (window as any).__locale__ };
    value = typeof value === 'string' ? (!isNaN(+value) ? +value : parse(value, formatString, new Date(), options)) : value;
    if (!value) return '';
    return formatString === 'fn' ? formatDistanceToNow(value, options) : format(value, formatString, options);
  }
}
