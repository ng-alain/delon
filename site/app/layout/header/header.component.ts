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
        this.list = this.meta.data.types.filter(w => w.list.length > 0).map((item: any) => {
            return {
                type: item.name,
                list: item.list.map(i => {
                    const ret: any = {
                        name: i.name,
                        meta: this.i18n.get(i.meta)
                    };
                    ret.meta.title = this.i18n.get(ret.meta.title);
                    return ret;
                })
            };
        });
        this.searching = false;
    }

    genTitle(itemMeta: any) {
        return itemMeta ? `${itemMeta.title}${itemMeta.subtitle ? '-' + itemMeta.subtitle : ''}` : ``;
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
