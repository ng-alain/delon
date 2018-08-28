import { Component, HostBinding, OnDestroy, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { TitleService, ALAIN_I18N_TOKEN } from '@delon/theme';
import { environment } from '../environments/environment';

import { MetaService } from './core/meta.service';
import { MobileService } from './core/mobile.service';
import { I18NService } from './core/i18n/service';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent implements OnDestroy {
  @HostBinding('class.mobile')
  isMobile = false;

  private query = 'only screen and (max-width: 991.99px)';

  constructor(
    @Inject(ALAIN_I18N_TOKEN) private i18n: I18NService,
    private meta: MetaService,
    private title: TitleService,
    private router: Router,
    private mobileSrv: MobileService,
  ) {
    // egg
    if (environment.production) {
      console.log(
        `恩……如果你觉得 ng-alain 不错，可以考虑自愿为本站打赏或捐助。`,
      );
      console.log(
        `%c`,
        `padding-left:500px;padding-bottom:300px;line-height:120px;background:url('https://ng-alain.com/assets/donate.png') no-repeat;`,
      );
    }

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
      .pipe(
        filter(evt => evt instanceof NavigationEnd),
        map(() => this.router.url),
      )
      .subscribe(url => {
        const urlLang = url
          .split('#')[0]
          .split('?')[0]
          .split('/')
          .pop();
        if (!!urlLang && ~['zh', 'en'].indexOf(urlLang)) {
          const lang = this.i18n.getFullLang(urlLang);

          // update i18n
          if (this.i18n.lang !== lang) {
            this.i18n.use(<any>lang);
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
