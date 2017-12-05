import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '@delon/theme';

import { I18NService } from '../../i18n/service';
import { MetaService } from '../../core/meta.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: [ './header.component.less' ]
})
export class HeaderComponent implements OnInit {
    constructor(
        public i18n: I18NService,
        private meta: MetaService,
        private settings: SettingsService,
        private router: Router
    ) {}

    searching = false;
    item: any;
    list: any[] = [];
    timer: any;

    change(key: string) {
        clearTimeout(this.timer);
        if (!key) return;

        this.searching = true;
        this.timer = setTimeout(() => this.search(key), 200);
    }

    search(key: string) {
        const ret: any[] = [];
        this.meta.data.types.forEach((item: any) => {
            const typeRet: any[] = item.list.filter((entry: any) => {
                let find = false;
                for (let i = 0; i < this.i18n.langs.length; i++) {
                    const meta = entry.meta[this.i18n.langs[i]];
                    if (meta && ~meta.title.indexOf(key)) {
                        find = true;
                        break;
                    }
                }
                return find;
            });
            if (typeRet.length === 0) return;
            ret.push({
                type: item.name,
                list: typeRet
            });
        });
        this.list = ret;
        this.searching = false;
    }

    genTitle(item: any) {
        const meta = item.meta[this.i18n.lang] || item.meta[this.i18n.defaultLang];
        return meta ? `${meta.title}${meta.subtitle ? '-' + meta.subtitle : ''}` : ``;
    }

    select(url: string) {
        if (!url) return;
        this.router.navigateByUrl(url);
    }

    ngOnInit(): void {

    }

    toggleMenu() {
        this.settings.layout.collapsed = !this.settings.layout.collapsed;
    }
}
