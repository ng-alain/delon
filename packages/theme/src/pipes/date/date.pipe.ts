import { Pipe, PipeTransform } from '@angular/core';

import { formatDate } from '@delon/util/date-time';
import { NzI18nService } from 'ng-zorro-antd/i18n';

@Pipe({ name: '_date', standalone: true })
export class DatePipe implements PipeTransform {
  constructor(private nzI18n: NzI18nService) {}

  transform(value: Date | string | number, formatString: string = 'yyyy-MM-dd HH:mm'): string {
    return formatDate(value, formatString, this.nzI18n.getDateLocale());
  }
}
