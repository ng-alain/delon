import { NgModule } from '@angular/core';

import zhCN from './languages/zh-CN';

import { DELON_LOCALE_SERVICE_PROVIDER } from './locale.service';
import { DELON_LOCALE } from './locale.tokens';

@NgModule({
  providers: [{ provide: DELON_LOCALE, useValue: zhCN }, DELON_LOCALE_SERVICE_PROVIDER],
})
export class DelonLocaleModule {}
