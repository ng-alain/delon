import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { I18NService } from '../../../i18n/service';
import { MetaService } from '../../../core/meta.service';

@Component({
    selector: 'app-docs',
    templateUrl: './docs.component.html',
    styleUrls: [ './docs.component.less' ]
})
export class DocsComponent implements OnInit, OnDestroy {

    private _item: any;

    @Input()
    set item(value: any) {
        if (Array.isArray(value.toc)) {
            const toc = [ ...value.toc ];
            value.toc = {};
            for (const lang of this.i18n.langs) {
                value.toc[lang] = toc;
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
        // tslint:disable-next-line:forin
        // for (const lang in value.source) {
        //     value.source[lang] = `${this.meta.github}/edit/master/${value.source[lang]}`;
        // }
        // endregion

        // region: demo
        // if (!value.demos || !Array.isArray(value.demos))
        //     value.demos = [];
        // endregion

        this._item = value;
    }
    get item(): any {
        return this._item;
    }

    constructor(public i18n: I18NService, public meta: MetaService) {}

    get(i: any) {
        return i ? i[this.i18n.lang] || i[this.i18n.defaultLang] : '';
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
