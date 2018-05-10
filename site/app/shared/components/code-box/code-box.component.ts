import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { copy } from '@delon/util';

import { I18NService } from './../../../core/i18n/service';
import { CodeService } from '../../../core/code.service';

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
        const ret: any = {
            meta: value.meta,
            code: value.code.trim(),
            title: this.i18n.get(value.meta.title),
            summary: this.i18n.get(value.summary),
            browser: +value.meta.browser > 0 ? +value.meta.browser : null,
            bg: value.meta.bg,
            urls: value.urls
        };
        this._item = ret;
    }
    get item() { return this._item; }

    @Input() expand: boolean = false;

    constructor(public i18n: I18NService, private msg: NzMessageService, private codeSrv: CodeService) {}

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

    openOnStackBlitz() {
        this.codeSrv.openOnStackBlitz(
            this.item.code,
            this.i18n.get(this.item.meta.title),
            this.i18n.get(this.item.summary)
        );
    }

    onCopy(value: string) {
        copy(value).then(() => this.msg.success(this.i18n.fanyi('app.demo.copied')));
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
