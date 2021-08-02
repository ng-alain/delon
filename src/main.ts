import { enableProdMode, ViewEncapsulation } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { NzSafeAny } from 'ng-zorro-antd/core/types';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    defaultEncapsulation: ViewEncapsulation.None,
    preserveWhitespaces: false
  })
  .then(res => {
    if ((window as NzSafeAny).appBootstrap) {
      (window as NzSafeAny).appBootstrap();
    }
    return res;
  })
  .catch(err => console.error(err));
