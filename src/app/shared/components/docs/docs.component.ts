import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { environment } from '../../../../environments/environment';
import { I18NService } from '../../../core/i18n/service';
import { MetaService } from '../../../core/meta.service';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
})
export class DocsComponent implements OnInit, OnDestroy {
  private _item: any;
  demoStr: string;
  demoContent: SafeHtml;

  @Input()
  codes: any[];

  @Input()
  set item(value: any) {
    const ret: any = {
      demo: value.demo,
      urls: value.urls, // [this.i18n.lang] || value.urls[this.i18n.defaultLang],
      con:
        value.content[this.i18n.lang] || value.content[this.i18n.defaultLang],
    };

    // region: demo toc
    if (ret.demo && this.codes && this.codes.length) {
      this.genDemoTitle();
      const toc = ret.con.toc as any[];
      const apiPos = toc.findIndex(w => w.title === 'API');
      toc.splice(
        apiPos === -1 ? 0 : apiPos,
        0,
        ...[
          {
            h: 2,
            href: `#${this.demoStr}`,
            title: this.demoStr,
          },
        ].concat(
          this.codes.map((item: any) => {
            return {
              h: 3,
              href: '#' + item.id,
              title: this.i18n.get(item.meta.title),
            };
          }),
        ),
      );
    }
    // endregion

    if (ret.con.content)
      ret.con.content = this.sanitizer.bypassSecurityTrustHtml(ret.con.content);
    if (ret.con.api)
      ret.con.api = this.sanitizer.bypassSecurityTrustHtml(ret.con.api);

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
    private sanitizer: DomSanitizer,
  ) {}

  goTo(e: Event, item: any) {
    let targetEl: any;
    try {
      targetEl = document.querySelector(item.href);
    } catch (e) {
      console.warn(`查找目标元素异常：${item.href}`, e);
    }

    if (targetEl) {
      targetEl.scrollIntoView();
      if (environment.production) location.hash = item.href;
    } else {
      console.warn(`无法获取目标元素：${item.href}`);
    }
    e.preventDefault();
    e.stopPropagation();
    return false;
  }

  private genDemoTitle() {
    this.demoStr = this.i18n.fanyi('app.component.examples');
    this.demoContent = this.sanitizer.bypassSecurityTrustHtml(`
            ${this.demoStr}
            <a onclick="window.location.hash='${
              this.demoStr
            }'" class="anchor">#</a>
        `);
  }

  private init() {
    this.genDemoTitle();
    setTimeout(() => {
      const elements = document.querySelectorAll(
        '[class*="language-"], [class*="lang-"]',
      );
      for (let i = 0, element; (element = elements[i++]); ) {
        hljs.highlightBlock(element);
      }
    }, 250);
  }

  i18NChange$: any;
  ngOnInit(): void {
    this.i18NChange$ = this.i18n.change.subscribe(() => {
      this.init();
    });
    this.init();
  }

  ngOnDestroy(): void {
    if (this.i18NChange$) this.i18NChange$.unsubscribe();
  }
}
