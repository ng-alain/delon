import { NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from './module-import-guard';

import { TitleService } from './title.service';
import { MetaService } from './meta.service';

@NgModule({
    imports: [
    ],
    providers: [
        TitleService,
        MetaService
    ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
