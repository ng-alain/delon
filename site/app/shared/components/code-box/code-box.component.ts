import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { I18NService } from './../../../i18n/service';
import { configJs, indexHtml, mainTS, angularLoad } from './templates';

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
        this.genPlnkr();
    }

    private initHLJS() {
        setTimeout(() => {
            const elements = document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code');
            for (let i = 0, element; element = elements[i++];) {
                hljs.highlightBlock(element);
            }
        }, 250);
    }

    plnkr: any;
    private genPlnkr() {
        if (this.plnkr) {
            this.plnkr.title = this.i18n.get(this.item.meta.title);
            return ;
        }

        const className = /export class ([^ ]*)/g.exec(this.item.code)[1];
        const componentName = /selector: '([^']+)/g.exec(this.item.code)[1];
        this.plnkr = {
            title: this.i18n.get(this.item.meta.title),
            files: [
                { name: `index.html`, content: indexHtml.replace(/##component##/g, `<${componentName}>loading...</${componentName}>`) },
                { name: `systemjs.config.js`, content: configJs },
                { name: `systemjs-angular-loader.js`, content: angularLoad },
                {
                    name: `main.ts`, content: mainTS.replace(/##name##/g, className)
                                                    .replace(/##import##/g, `import { ${className} } from './app/demo';`)
                },
                { name: 'app/demo.ts', content: this.item.code }
            ]
        };
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
