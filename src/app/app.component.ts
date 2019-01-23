import { Component, ElementRef, HostBinding, Inject, OnDestroy, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ALAIN_I18N_TOKEN, TitleService, VERSION as VERSION_ALAIN } from '@delon/theme';
import { VERSION as VERSION_ZORRO } from 'ng-zorro-antd';
import { filter } from 'rxjs/operators';

import { I18NService } from './core/i18n/service';
import { MetaService } from './core/meta.service';
import { MobileService } from './core/mobile.service';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnDestroy {
  @HostBinding('class.mobile')
  isMobile = false;

  private query = 'only screen and (max-width: 767px)';
  private prevUrl = '';

  constructor(
    el: ElementRef,
    renderer: Renderer2,
    @Inject(ALAIN_I18N_TOKEN) private i18n: I18NService,
    private meta: MetaService,
    private title: TitleService,
    private router: Router,
    private mobileSrv: MobileService,
  ) {
    renderer.setAttribute(el.nativeElement, 'ng-alain-version', VERSION_ALAIN.full);
    renderer.setAttribute(el.nativeElement, 'ng-zorro-version', VERSION_ZORRO.full);

    enquire.register(this.query, {
      match: () => {
        this.mobileSrv.next(true);
        this.isMobile = true;
      },
      unmatch: () => {
        this.mobileSrv.next(false);
        this.isMobile = false;
      },
    });

    this.router.events
      .pipe(filter(evt => evt instanceof NavigationEnd))
      .subscribe((evt: NavigationEnd) => {
        const url = evt.url.split('#')[0].split('?')[0];
        if (url.includes('/dev') || url.includes('/404') || this.prevUrl === url) return;
        this.prevUrl = url;

        let urlLang = url.split('/').pop() || this.i18n.zone;
        if (urlLang && ['zh', 'en'].indexOf(urlLang) === -1) {
          urlLang = this.i18n.zone;
        }
        const redirectArr = evt.urlAfterRedirects
          .split('#')[0]
          .split('?')[0]
          .split('/');
        const redirectLang = redirectArr.pop();
        if (urlLang !== redirectLang) {
          let newUrl = '';
          if (~evt.urlAfterRedirects.indexOf('#')) {
            newUrl = evt.urlAfterRedirects.replace(`/${redirectLang}#`, `/${urlLang}#`);
          } else {
            newUrl = redirectArr.concat(urlLang).join('/');
          }
          this.router.navigateByUrl(newUrl, { replaceUrl: true });
          return;
        }

        if (urlLang) {
          const lang = this.i18n.getFullLang(urlLang);

          // update i18n
          if (this.i18n.lang !== lang) {
            this.i18n.use(lang as any);
            this.meta.clearMenu();
          }
          this.meta.refMenu(url);
        }

        if (this.meta.set(url)) {
          this.router.navigateByUrl('/404');
          return;
        }
        const item = this.meta.getPathByUrl(url);
        this.title.setTitle(item ? item.title || item.subtitle : '');
        // scroll to top
        document.body.scrollIntoView();
      });
  }

  ngOnDestroy(): void {
    enquire.unregister(this.query);
  }
}
