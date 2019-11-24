import { NgModule, ModuleWithProviders } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@NgModule({})
export class DelonAuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DelonAuthModule,
      providers: [CookieService],
    };
  }
}
