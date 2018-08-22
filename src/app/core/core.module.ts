import { NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from './module-import-guard';

import { MetaService } from './meta.service';
import { MobileService } from './mobile.service';
import { I18NService } from './i18n/service';
import { CodeService } from './code.service';

@NgModule({
  providers: [I18NService, MetaService, MobileService, CodeService],
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule,
  ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
