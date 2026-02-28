/* eslint-disable @angular-eslint/prefer-inject */
import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, Inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

import { ALAIN_I18N_TOKEN, DrawerHelper, TitleService, VERSION as VERSION_ALAIN, stepPreloader } from '@delon/theme';
import { VERSION as VERSION_ZORRO } from 'ng-zorro-antd/version';

import { I18NService, MetaService, MOBILE } from '@core';

@Component({
  selector: 'app-root',
  template: `<router-outlet />`,
  imports: [RouterOutlet],
  host: {
    '[class.mobile]': `mobile()`,
    '[attr.ng-alain-version]': `alainVersion`,
    '[attr.ng-zorro-version]': `zorroVersion`
  }
})
export class App {
  protected readonly alainVersion = VERSION_ALAIN.full;
  protected readonly zorroVersion = VERSION_ZORRO.full;
  protected mobile = MOBILE;
  private prevUrl = '';

  constructor(
    @Inject(ALAIN_I18N_TOKEN) i18n: I18NService,
    meta: MetaService,
    title: TitleService,
    router: Router,
    breakpointObserver: BreakpointObserver,
    dh: DrawerHelper
  ) {
    breakpointObserver.observe('only screen and (max-width: 1200px)').subscribe(res => {
      MOBILE.set(res.matches);
    });

    const done = stepPreloader();

    router.events.subscribe(evt => {
      if (!(evt instanceof NavigationEnd)) return;

      done();

      dh.closeAll();

      const url = evt.url.split('#')[0].split('?')[0];
      if (url.includes('/dev') || url.includes('/404') || this.prevUrl === url) return;

      this.prevUrl = url;

      let urlLang = url.split('/').pop() || i18n.zone;
      if (urlLang && ['zh', 'en'].indexOf(urlLang) === -1) {
        urlLang = i18n.zone;
      }
      const redirectArr = evt.urlAfterRedirects.split('#')[0].split('?')[0].split('/');
      const redirectLang = redirectArr.pop();
      if (urlLang !== redirectLang) {
        let newUrl = '';
        if (~evt.urlAfterRedirects.indexOf('#')) {
          newUrl = evt.urlAfterRedirects.replace(`/${redirectLang}#`, `/${urlLang}#`);
        } else {
          newUrl = redirectArr.concat(urlLang).join('/');
        }
        router.navigateByUrl(newUrl, { replaceUrl: true });
        return;
      }

      if (urlLang) {
        meta.refMenu(url);
      }

      if (meta.set(url)) {
        router.navigateByUrl('/404');
        return;
      }
      const item = meta.getPathByUrl(url);
      title.setTitle(item ? item.title || item.subtitle : '');
    });

    i18n.change.subscribe(() => meta.clearMenu());
  }
}
