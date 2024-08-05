import { Pipe, PipeTransform, inject } from '@angular/core';

import { AlainConfigService } from '@delon/util/config';
import { formatDate } from '@delon/util/date-time';
import { NzI18nService } from 'ng-zorro-antd/i18n';

@Pipe({ name: '_date', standalone: true })
export class DatePipe implements PipeTransform {
  private nzI18n = inject(NzI18nService);
  private cog = inject(AlainConfigService).get('themePipe');

  transform(value: Date | string | number, formatString?: string | null): string {
    const formatStr = formatString ?? this.cog?.dateFormat ?? 'yyyy-MM-dd HH:mm';

    return formatDate(value, formatStr, {
      locale: this.nzI18n.getDateLocale(),
      customFormat: this.cog?.dateFormatCustom
    });
  }
}
