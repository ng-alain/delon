
export const HMR_CONTENT = {
  HMR_DOT_TS: `import { NgModuleRef, ApplicationRef } from '@angular/core';
import { createNewHosts } from '@angularclass/hmr';
import { NzModalService } from 'ng-zorro-antd';

export const hmrBootstrap = (
  module: any,
  bootstrap: () => Promise<NgModuleRef<any>>,
) => {
  let ngModule: NgModuleRef<any>;
  module.hot.accept();
  bootstrap().then(mod => (ngModule = mod));
  module.hot.dispose(() => {
    const appRef: ApplicationRef = ngModule.injector.get(ApplicationRef);
    const modalService = ngModule.injector.get(NzModalService, null) as NzModalService;
    if (modalService) modalService.closeAll();
    const elements = appRef.components.map(c => c.location.nativeElement);
    const makeVisible = createNewHosts(elements);
    ngModule.destroy();
    makeVisible();
  });
};`,
  HMR_MAIN_DOT_TS: `import { enableProdMode, ViewEncapsulation } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { preloaderFinished } from '@delon/theme';
preloaderFinished();

import { hmrBootstrap } from './hmr';

if (environment.production) {
  enableProdMode();
}

const bootstrap = () => {
  return platformBrowserDynamic().bootstrapModule(AppModule, {
    defaultEncapsulation: ViewEncapsulation.Emulated,
    preserveWhitespaces: false,
  }).then((res) => {
    if ((<any>window).appBootstrap) {
      (<any>window).appBootstrap();
    }
    return res;
  });
};

if (environment.hmr) {
  if (module[ 'hot' ]) {
    hmrBootstrap(module, bootstrap);
  } else {
    console.error('HMR is not enabled for webpack-dev-server!');
    console.log('Are you using the --hmr flag for ng serve?');
  }
} else {
  bootstrap();
}`,
  NO_HMR_MAIN_DOT_TS: `import { enableProdMode, ViewEncapsulation } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { preloaderFinished } from '@delon/theme';
preloaderFinished();

if (environment.production) {
  enableProdMode();
}

const bootstrap = () => {
  return platformBrowserDynamic().bootstrapModule(AppModule, {
    defaultEncapsulation: ViewEncapsulation.Emulated,
    preserveWhitespaces: false,
  });
};

bootstrap().then(() => {
  if ((<any>window).appBootstrap) {
    (<any>window).appBootstrap();
  }
});`,
};
