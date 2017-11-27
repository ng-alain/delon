import { NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { AlainThemeModule } from '@delon/theme';
import { TitleService } from './title.service';
import { MetaService } from './meta.service';

@NgModule({
    imports: [
        AlainThemeModule.forRoot()
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
