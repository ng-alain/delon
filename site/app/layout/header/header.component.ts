import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd';
import { copy } from '@delon/abc';

import { I18NService } from '../../i18n/service';
import { MetaService } from '../../core/meta.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
    constructor(
        public i18n: I18NService,
        private meta: MetaService,
        private settings: SettingsService,
        private router: Router,
        private msg: NzMessageService
    ) {
    }

    searching = false;
    item: any;
    list: any[] = [];

    genData() {
        const ret: any[] = [];
        this.meta.data.types.forEach((item: any) => {
            const typeRet: any[] = item.list;
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
        this.genData();
    }

    toggleMenu() {
        this.settings.layout.collapsed = !this.settings.layout.collapsed;
    }

    onCopy(value: string) {
        copy(value).then(() => this.msg.success(this.i18n.fanyi('app.demo.copied')));
    }
}
