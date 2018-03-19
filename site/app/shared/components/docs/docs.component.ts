import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { I18NService } from '../../../i18n/service';
import { MetaService } from '../../../core/meta.service';

@Component({
    selector: 'app-docs',
    templateUrl: './docs.component.html'
})
export class DocsComponent implements OnInit, OnDestroy {

    private _item: any;

    @Input() codes: any[];

    @Input()
    set item(value: any) {
        if (Array.isArray(value.toc)) {
            const toc = [ ...value.toc ];
            value.toc = {};
            for (const lang of this.i18n.langs) {
                value.toc[lang] = [ ...toc ];
            }
        }

        // region: source
        if (typeof value.source === 'string') {
            const source = '' + value.source;
            value.source = {};
            for (const lang of this.i18n.langs) {
                value.source[lang] = source;
            }
        }
        // endregion

        // region: demo toc
        if (value.demo && this.codes && this.codes.length) {
            // tslint:disable-next-line:forin
            for (const lang in value.toc) {
                const demoTocs: any[] = this.codes.map((item: any) => {
                    return {
                        h: 3,
                        href: '#' + item.id,
                        title: this.i18n.get(item.meta.title)
                    };
                });
                value.toc[lang] = demoTocs;
                // const demoTitle = this.i18n.fanyi('app.component.examples');
                // value.toc[lang].splice(0, 0, {
                //     h: 2,
                //     href: '#' + demoTitle,
                //     title: demoTitle
                // }, ...demoTocs);
            }
        }
        // endregion

        this._item = value;

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
        protected sanitizer: DomSanitizer
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

    safeHtml(html: string) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
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
