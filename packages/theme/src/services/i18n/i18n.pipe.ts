import { PipeTransform, Pipe, Inject } from '@angular/core';
import { ALAIN_I18N_TOKEN, AlainI18NService } from './i18n';

@Pipe({ name: 'i18n' })
export class I18nPipe implements PipeTransform {
  constructor(@Inject(ALAIN_I18N_TOKEN) private i18n: AlainI18NService) {}

  transform(key: string, interpolateParams?: Object, isSafe?: boolean): string {
    return this.i18n.fanyi(key, interpolateParams, isSafe);
  }
}
