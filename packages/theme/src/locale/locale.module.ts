import { NgModule } from '@angular/core';

import zhCN from './languages/zh-CN';

import { DELON_LOCALE } from './locale.tokens';
import { DELON_LOCALE_SERVICE_PROVIDER } from './locale.service';

@NgModule({
  providers: [
    { provide: DELON_LOCALE, useValue: zhCN },
    DELON_LOCALE_SERVICE_PROVIDER,
  ],
})
export class DelonLocaleModule {}
