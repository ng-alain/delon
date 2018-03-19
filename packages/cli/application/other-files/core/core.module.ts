import { NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from './module-import-guard';
<% if (delonI18n) { %>
import { I18NService } from './i18n/i18n.service';<% } %>

@NgModule({
    providers: [<% if (delonI18n) { %>
        I18NService<% } %>
    ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
