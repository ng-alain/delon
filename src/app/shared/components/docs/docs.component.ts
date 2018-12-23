import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { deepCopy } from '@delon/util';

import { environment } from '../../../../environments/environment';
import { I18NService } from '../../../core/i18n/service';
import { MetaService } from '../../../core/meta.service';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
})
export class DocsComponent implements OnInit, OnDestroy {
  private i18NChange$: Subscription;
  demoStr: string;
  demoContent: SafeHtml;
  data: any = {};

  @Input()
  codes: any[];

  @Input()
  item: any;

  constructor(
    public meta: MetaService,
    @Inject(ALAIN_I18N_TOKEN) private i18n: I18NService,
    private router: Router,
    private sanitizer: DomSanitizer,
  ) {
    this.i18NChange$ = this.i18n.change
      .pipe(filter(() => !!this.item))
      .subscribe(() => {
        this.init();
      });
  }

  private genData() {
    const item = deepCopy(this.item);
    const ret: any = {
      demo: item.demo,
      urls: item.urls,
      con: item.content[this.i18n.lang] || item.content[this.i18n.defaultLang],
    };

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
            id: `${this.demoStr}`,
            title: this.demoStr,
          },
        ].concat(
          this.codes.map((a: any) => {
            return {
              h: 3,
              id: a.id,
              title: this.i18n.get(a.meta.title),
            };
          }),
        ),
      );
    }

    if (ret.con.content)
      ret.con.content = this.sanitizer.bypassSecurityTrustHtml(ret.con.content);
    if (ret.con.api)
      ret.con.api = this.sanitizer.bypassSecurityTrustHtml(ret.con.api);

    this.data = ret;

    // goTo
    setTimeout(() => {
      const toc = this.router.parseUrl(this.router.url).fragment || '';
      if (toc) document.querySelector(`#${toc}`).scrollIntoView();
    }, 200);
  }

  goTo(e: Event, item: any) {
    let targetEl: any;
    const href = '#' + item.id;
    try {
      targetEl = document.querySelector(href);
    } catch (e) {
      console.warn(`查找目标元素异常：${href}`, e);
    }

    if (targetEl) {
      targetEl.scrollIntoView();
      location.hash = href;
    } else {
      console.warn(`无法获取目标元素：${item.id}`);
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
    this.genData();
    this.genDemoTitle();
    setTimeout(() => {
      const elements = document.querySelectorAll(
        '[class*="language-"], [class*="lang-"]',
      );
      // tslint:disable-next-line:no-conditional-assignment
      for (let i = 0, element; (element = elements[i++]);) {
        hljs.highlightBlock(element);
      }
    }, 250);
  }

  ngOnInit(): void {
    this.init();
  }

  ngOnDestroy(): void {
    this.i18NChange$.unsubscribe();
  }
}
