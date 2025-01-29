import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { EnvironmentProviders, Injectable, Injector, Provider, inject, provideAppInitializer } from '@angular/core';

import { TitleService } from '@delon/theme';
import { LazyService } from '@delon/util/other';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzIconService } from 'ng-zorro-antd/icon';

import { ICONS } from '../../style-icons';

export function provideStartup(): Array<Provider | EnvironmentProviders> {
  return [
    StartupService,
    provideAppInitializer(() => {
      const initializerFn = (
        (startupService: StartupService) => () =>
          startupService.load()
      )(inject(StartupService));
      return initializerFn();
    })
  ];
}

@Injectable()
export class StartupService {
  private readonly injector = inject(Injector);
  private readonly doc = inject(DOCUMENT);
  private readonly platform = inject(Platform);
  private readonly lazy = inject(LazyService);
  constructor(iconSrv: NzIconService) {
    iconSrv.addIcon(...ICONS);
  }

  load(): Promise<void> {
    const slowEl = this.doc.querySelector('#_slow');
    return new Promise(resolve => {
      if (slowEl) {
        slowEl.remove();
      }
      this.injector.get(TitleService).suffix = 'NG-ALAIN';
      if (this.platform.isBrowser) {
        setTimeout(() => this.lazyLoad(), 100);
      }
      resolve();
    });
  }

  lazyLoad(): void {
    const win = this.doc.defaultView as NzSafeAny;
    win.hj =
      win.hj ||
      function () {
        // eslint-disable-next-line prefer-rest-params
        (win.hj.q = win.hj.q || []).push(arguments);
      };
    win._hjSettings = {
      hjid: 920546,
      hjsv: 6
    };
    Promise.all([
      this.lazy.loadScript(`./assets/highlight.pack.js`),
      this.lazy.loadScript(`https://www.googletagmanager.com/gtag/js?id=UA-120202005-1`)
      // this.lazy.loadScript(`https://static.hotjar.com/c/hotjar-${win._hjSettings.hjid}.js?sv=${win._hjSettings.hjsv}`)
    ]).then(() => {
      const dataLayer: NzSafeAny[] = win.dataLayer || [];
      dataLayer.push(['js', new Date()]);
      dataLayer.push(['config', 'UA-120202005-1']);
    });
  }
}
