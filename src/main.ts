import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode, ViewEncapsulation } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

import './app/core/preloader';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).then(() => {
    if ((<any>window).appBootstrap) {
      (<any>window).appBootstrap();
    }
});
