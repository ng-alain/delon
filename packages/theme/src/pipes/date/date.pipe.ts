import { Pipe, PipeTransform } from '@angular/core';
import format from 'date-fns/format';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import parse from 'date-fns/parse';
import { NzI18nService } from 'ng-zorro-antd/i18n';

@Pipe({ name: '_date' })
export class DatePipe implements PipeTransform {
  constructor(private nzI18n: NzI18nService) {}

  transform(value: Date | string | number, formatString: string = 'yyyy-MM-dd HH:mm'): string {
    const options = { locale: this.nzI18n.getDateLocale() };
    value = typeof value === 'string' ? (!isNaN(+value) ? +value : parse(value, formatString, new Date(), options)) : value;
    if (!value) return '';
    return formatString === 'fn' ? formatDistanceToNow(value, options) : format(value, formatString, options);
  }
}
