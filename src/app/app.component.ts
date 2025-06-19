/* eslint-disable @angular-eslint/prefer-inject */
import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ElementRef, HostBinding, Inject, Renderer2 } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

import { ALAIN_I18N_TOKEN, DrawerHelper, TitleService, VERSION as VERSION_ALAIN, stepPreloader } from '@delon/theme';
import { VERSION as VERSION_ZORRO } from 'ng-zorro-antd/version';

import { I18NService, MetaService, MobileService } from '@core';

@Component({
  selector: 'app-root',
  template: `<router-outlet />`,
  imports: [RouterOutlet]
})
export class AppComponent {
  @HostBinding('class.mobile')
  isMobile = false;

  private query = 'only screen and (max-width: 1200px)';
  private prevUrl = '';

  constructor(
    el: ElementRef,
    renderer: Renderer2,
    @Inject(ALAIN_I18N_TOKEN) i18n: I18NService,
    meta: MetaService,
    title: TitleService,
    router: Router,
    mobileSrv: MobileService,
    breakpointObserver: BreakpointObserver,
    dh: DrawerHelper
  ) {
    renderer.setAttribute(el.nativeElement, 'ng-alain-version', VERSION_ALAIN.full);
    renderer.setAttribute(el.nativeElement, 'ng-zorro-version', VERSION_ZORRO.full);

    breakpointObserver.observe(this.query).subscribe(res => {
      this.isMobile = res.matches;
      mobileSrv.next(this.isMobile);
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
