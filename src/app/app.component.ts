import { Component, HostBinding, OnDestroy, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TitleService, ALAIN_I18N_TOKEN } from '@delon/theme';
import { NzIconService } from 'ng-zorro-antd';

// #region ng-zorro-antd icons

import {
  SearchOutline,
  // site used
  EditOutline,
  CopyOutline,
  FormOutline,
  HeartOutline,
  VerticalRightOutline,
  VerticalLeftOutline,
  StarOutline,
  StarFill,
  InboxOutline,
  DashboardOutline,
  GithubOutline,
  EllipsisOutline,
  DingdingOutline,
} from '@ant-design/icons-angular/icons';
const ICONS = [
  SearchOutline,
  // site used
  FormOutline,
  EditOutline,
  CopyOutline,
  HeartOutline,
  VerticalRightOutline,
  VerticalLeftOutline,
  StarOutline,
  StarFill,
  InboxOutline,
  DashboardOutline,
  GithubOutline,
  EllipsisOutline,
  DingdingOutline,
];

// #endregion

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
  private prevUrl = '';

  constructor(
    @Inject(ALAIN_I18N_TOKEN) private i18n: I18NService,
    private meta: MetaService,
    private title: TitleService,
    private router: Router,
    private mobileSrv: MobileService,
    private _iconService: NzIconService,
  ) {
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
        if (
          url.includes('/dev') ||
          url.includes('/404') ||
          this.prevUrl === url
        )
          return;
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
            newUrl = evt.urlAfterRedirects.replace(
              `/${redirectLang}#`,
              `/${urlLang}#`,
            );
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

    this._iconService.addIcon(...ICONS);
  }

  ngOnDestroy(): void {
    enquire.unregister(this.query);
  }
}
