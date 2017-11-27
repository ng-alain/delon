import { Component, ViewEncapsulation, HostBinding, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { TitleService } from './core/title.service';
import { MetaService } from './core/meta.service';
import { I18NService } from './i18n/service';

@Component({
    selector: 'app-root',
    template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {
    @HostBinding('class.layout-fixed') isHome = false;

    constructor(
        private i18n: I18NService,
        private meta: MetaService,
        private title: TitleService,
        private router: Router) {}

    ngOnInit() {
        this.router.events.pipe(
            filter(evt => evt instanceof NavigationEnd),
            map(() => this.router.url)
        ).subscribe(url => {
            // update i18n
            const urlLang = this.router.parseUrl(url).queryParams['lang'];
            if (typeof urlLang !== 'undefined') {
                const lang = urlLang || this.i18n.defaultLang;
                if (this.i18n.lang !== lang) {
                    this.i18n.use(<any>lang);
                    this.meta.clearMenu();
                }
            }
            this.meta.refMenu(url);

            if (this.meta.set(url)) {
                this.router.navigateByUrl('/404');
                return;
            }
            this.title.setTitleByUrl(url);
            // scroll to top
            document.body.scrollIntoView();
        });
    }
}
