import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ElementRef, HostBinding, Inject, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { I18NService, MetaService, MobileService } from '@core';

import { VERSION as VERSION_ZORRO } from 'ng-zorro-antd/version';

import { ALAIN_I18N_TOKEN, TitleService, VERSION as VERSION_ALAIN } from '@delon/theme';

@Component({
  selector: 'app-root',
  template: ` <router-outlet></router-outlet>`
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
    breakpointObserver: BreakpointObserver
  ) {
    renderer.setAttribute(el.nativeElement, 'ng-alain-version', VERSION_ALAIN.full);
    renderer.setAttribute(el.nativeElement, 'ng-zorro-version', VERSION_ZORRO.full);

    breakpointObserver.observe(this.query).subscribe(res => {
      this.isMobile = res.matches;
      mobileSrv.next(this.isMobile);
    });

    router.events.subscribe(evt => {
      if (!(evt instanceof NavigationEnd)) return;

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
        const lang = i18n.getFullLang(urlLang);

        // update i18n
        if (i18n.currentLang !== lang) {
          i18n.use(lang as any);
          meta.clearMenu();
        }
        meta.refMenu(url);
      }

      if (meta.set(url)) {
        router.navigateByUrl('/404');
        return;
      }
      const item = meta.getPathByUrl(url);
      title.setTitle(item ? item.title || item.subtitle : '');
    });
  }
}
