import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { I18NService } from './../../../i18n/service';

@Component({
    selector: 'code-box',
    templateUrl: './code-box.component.html',
    host: {
        '[class.code-box]': 'true',
        '[class.expand]': 'expand'
    }
})
export class CodeBoxComponent implements OnInit, OnDestroy {
    private _item: any;
    @Input()
    set item(value: any) {
        if (typeof value.meta.title === 'string') {
            const defTitle = '' + value.meta.title;
            value.meta.title = {};
            for (const lang of this.i18n.langs) {
                value.meta.title[lang] = defTitle;
            }
        }
        value.code = value.code.trim();
        value.meta.browser = +value.meta.browser > 0 ? +value.meta.browser : null;
        this._item = value;
    }
    get item() { return this._item; }

    @Input() expand: boolean = false;

    constructor(public i18n: I18NService) {}

    handle() {
        this.expand = !this.expand;
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
