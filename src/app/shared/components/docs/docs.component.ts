import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { I18NService, MetaService } from '@core';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { deepCopy } from '@delon/util';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

declare var hljs: any;

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
})
export class DocsComponent implements OnInit, OnDestroy {
  private i18NChange$: Subscription;
  demoStr: string;
  demoContent: SafeHtml;
  data: any = {};
  isBrowser = true;

  @Input() codes: any[];

  @Input() item: any;

  constructor(
    public meta: MetaService,
    @Inject(ALAIN_I18N_TOKEN) private i18n: I18NService,
    private router: Router,
    private sanitizer: DomSanitizer,
    @Inject(DOCUMENT) private doc: any,
    platform: Platform,
  ) {
    this.isBrowser = platform.isBrowser;
    this.i18NChange$ = this.i18n.change.pipe(filter(() => !!this.item)).subscribe(() => {
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
      ret.con.toc = this.codes
        .map((a: any) => {
          return {
            h: 3,
            id: a.id,
            title: this.i18n.get(a.meta.title),
          };
        })
        .concat({ id: 'API', title: 'API', h: 2 });
    }

    if (ret.con.content) ret.con.content = this.sanitizer.bypassSecurityTrustHtml(ret.con.content);
    if (ret.con.api) ret.con.api = this.sanitizer.bypassSecurityTrustHtml(ret.con.api);
    if (ret.con.meta.module) {
      ret.con.module = ret.con.meta.module;
    }

    this.data = ret;

    // goTo
    setTimeout(() => {
      const toc = this.router.parseUrl(this.router.url).fragment || '';
      if (toc) {
        const tocEl = this.doc.querySelector(`#${toc}`)!;
        if (tocEl) {
          tocEl.scrollIntoView();
        }
      }
    }, 200);
  }

  goLink(link: string): void {
    if (window) {
      window.location.hash = link;
    }
  }

  private genDemoTitle() {
    this.demoStr = this.i18n.fanyi('app.component.examples');
    this.demoContent = this.sanitizer.bypassSecurityTrustHtml(`
            ${this.demoStr}
            <a onclick="window.location.hash='${this.demoStr}'" class="anchor">#</a>
        `);
  }

  private init() {
    this.genData();
    this.genDemoTitle();
    if (!this.isBrowser) {
      return;
    }
    setTimeout(() => {
      const elements = this.doc.querySelectorAll('[class*="language-"], [class*="lang-"]');
      // tslint:disable-next-line:no-conditional-assignment
      for (let i = 0, element; (element = elements[i++]); ) {
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
