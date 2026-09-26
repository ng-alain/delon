import { Pipe, PipeTransform, inject } from '@angular/core';

import { AlainConfigService } from '@delon/util/config';
import { formatDate } from '@delon/util/date-time';
import { NZ_DATE_LOCALE, type DateLocale } from 'ng-zorro-antd/i18n';

@Pipe({ name: '_date' })
export class DatePipe implements PipeTransform {
  private readonly dateLocale = (inject(NZ_DATE_LOCALE, { optional: true }) as DateLocale | null) ?? undefined;
  private cog = inject(AlainConfigService).get('themePipe');

  transform(value: Date | string | number, formatString?: string | null): string {
    const formatStr = formatString ?? this.cog?.dateFormat ?? 'yyyy-MM-dd HH:mm';

    return formatDate(value, formatStr, {
      locale: this.dateLocale,
      customFormat: this.cog?.dateFormatCustom
    });
  }
}
