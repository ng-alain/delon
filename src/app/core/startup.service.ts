import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Injector } from '@angular/core';
import { TitleService } from '@delon/theme';
import { LazyService } from '@delon/util';
import { NzIconService } from 'ng-zorro-antd/icon';
import { ICONS } from '../../style-icons';

@Injectable()
export class StartupService {
  constructor(
    private injector: Injector,
    iconSrv: NzIconService,
    @Inject(DOCUMENT) private doc: any,
    private lazy: LazyService,
    private platform: Platform,
  ) {
    iconSrv.addIcon(...ICONS);
  }

  load(): Promise<void> {
    const slowEl = this.doc.querySelector('#_slow');
    return new Promise(resolve => {
      if (slowEl) {
        slowEl.remove();
      }
      this.injector.get(TitleService).suffix = 'Ng Alain';
      if (this.platform.isBrowser) {
        setTimeout(() => this.lazyLoad(), 100);
      }
      resolve();
    });
  }

  lazyLoad(): void {
    const win = this.doc.defaultView as any;
    win.hj =
      win.hj ||
      // tslint:disable-next-line: only-arrow-functions typedef
      function () {
        (win.hj.q = win.hj.q || []).push(arguments);
      };
    win._hjSettings = {
      hjid: 920546,
      hjsv: 6,
    };
    Promise.all([
      this.lazy.loadScript(`https://www.googletagmanager.com/gtag/js?id=UA-120202005-1`),
      this.lazy.loadScript(`https://static.hotjar.com/c/hotjar-${win._hjSettings.hjid}.js?sv=${win._hjSettings.hjsv}`),
    ]).then(() => {
      const dataLayer: any[] = win.dataLayer || [];
      dataLayer.push(['js', new Date()]);
      dataLayer.push(['config', 'UA-120202005-1']);
    });
  }
}
