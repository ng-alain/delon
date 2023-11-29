import { Pipe, PipeTransform, inject } from '@angular/core';

import { AlainConfigService } from '@delon/util/config';
import { formatDate } from '@delon/util/date-time';
import { NzI18nService } from 'ng-zorro-antd/i18n';

@Pipe({ name: '_date', standalone: true })
export class DatePipe implements PipeTransform {
  private nzI18n = inject(NzI18nService);
  private defFormat = inject(AlainConfigService).get('themePipe')?.dateFormat ?? 'yyyy-MM-dd HH:mm';

  transform(value: Date | string | number, formatString?: string | null): string {
    return formatDate(value, formatString ?? this.defFormat, this.nzI18n.getDateLocale());
  }
}
