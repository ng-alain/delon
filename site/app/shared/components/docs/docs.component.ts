import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { I18NService } from '../../../i18n/service';
import { MetaService } from '../../../core/meta.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-docs',
    templateUrl: './docs.component.html'
})
export class DocsComponent implements OnInit, OnDestroy {

    private _item: any;

    @Input() codes: any[];

    @Input()
    set item(value: any) {
        const ret: any = {
            demo: value.demo,
            urls: value.urls, // [this.i18n.lang] || value.urls[this.i18n.defaultLang],
            con: value.content[this.i18n.lang] || value.content[this.i18n.defaultLang]
        };

        // region: demo toc
        if (ret.demo && this.codes && this.codes.length) {
            ret.con.toc = this.codes.map((item: any) => {
                return {
                    h: 3,
                    href: '#' + item.id,
                    title: this.i18n.get(item.meta.title)
                };
            });
        }
        // endregion

        if (ret.con.content) ret.con.content = this.sanitizer.bypassSecurityTrustHtml(ret.con.content);
        if (ret.con.api) ret.con.api = this.sanitizer.bypassSecurityTrustHtml(ret.con.api);

        this._item = ret;

        // goTo
        setTimeout(() => {
            const toc = this.router.parseUrl(this.router.url).fragment || '';
            if (toc) document.querySelector(`#${toc}`).scrollIntoView();
        }, 200);
    }
    get item(): any {
        return this._item;
    }

    constructor(
        public i18n: I18NService,
        public meta: MetaService,
        private router: Router,
        private sanitizer: DomSanitizer
    ) {
    }

    goTo(item: any) {
        document.querySelector(item.href).scrollIntoView();
        location.hash = item.href;
        return false;
    }

    private initHLJS() {
        setTimeout(() => {
            const elements = document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code');
            for (let i = 0, element; element = elements[i++];) {
                hljs.highlightBlock(element);
            }
        }, 250);
    }

    i18NChange$: any;
    ngOnInit(): void {
        this.i18NChange$ = this.i18n.change.subscribe(() => {
            this.initHLJS();
        });
        this.initHLJS();
    }

    ngOnDestroy(): void {
        if (this.i18NChange$) this.i18NChange$.unsubscribe();
    }
}
