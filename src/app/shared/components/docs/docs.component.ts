/* eslint-disable @typescript-eslint/no-explicit-any */
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';

import { ALAIN_I18N_TOKEN, I18nPipe } from '@delon/theme';
import { copy } from '@delon/util/browser';
import { deepCopy } from '@delon/util/other';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

import { MetaService } from '@core';

import { EditButtonComponent } from '../edit-button/edit-button.component';
import { RouteTransferDirective } from '../route-transfer/route-transfer.directive';

declare var hljs: any;

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  standalone: true,
  imports: [
    I18nPipe,
    RouteTransferDirective,
    NzAffixModule,
    NzAnchorModule,
    NzAlertModule,
    NzToolTipModule,
    EditButtonComponent
  ]
})
export class DocsComponent implements OnInit, OnDestroy {
  readonly meta = inject(MetaService);
  private readonly i18n = inject(ALAIN_I18N_TOKEN);
  private readonly msg = inject(NzMessageService);
  private readonly router = inject(Router);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly doc = inject(DOCUMENT);

  private i18NChange$: Subscription;
  demoStr!: string;
  demoContent!: SafeHtml;
  data: any = {};
  isBrowser = inject(Platform).isBrowser;

  @Input() codes!: any[];
  @Input() item: any;

  constructor() {
    this.i18NChange$ = this.i18n.change
      .pipe(
        takeUntilDestroyed(),
        filter(() => !!this.item)
      )
      .subscribe(() => {
        this.init();
      });
  }

  private genData(): void {
    const item = deepCopy(this.item);
    const ret: any = {
      demo: item.demo,
      urls: item.urls,
      con: item.content[this.i18n.currentLang] || item.content[this.i18n.defaultLang]
    };

    if (ret.demo && this.codes && this.codes.length) {
      this.genDemoTitle();
      ret.con.toc = this.codes
        .map((a: any) => {
          return {
            h: 3,
            id: a.id,
            title: this.i18n.get(a.meta.title)
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

  private genDemoTitle(): void {
    this.demoStr = this.i18n.fanyi('app.component.examples');
    this.demoContent = this.sanitizer.bypassSecurityTrustHtml(
      `<a class="lake-link"><i data-anchor="${this.demoStr}"></i></a>${this.demoStr}`
    );
  }

  private init(): void {
    this.genData();
    this.genDemoTitle();
    if (!this.isBrowser) {
      return;
    }
    setTimeout(() => {
      const elements = this.doc.querySelectorAll('[class*="language-"], [class*="lang-"]');
      for (let i = 0, element; (element = elements[i++]); ) {
        hljs.highlightBlock(element);
      }
    }, 250);
  }

  copyModule(): void {
    copy(this.data.con.module).then(() => {
      this.msg.success(this.i18n.fanyi('app.demo.copied'));
    });
  }

  ngOnInit(): void {
    this.init();
  }

  ngOnDestroy(): void {
    this.i18NChange$.unsubscribe();
  }
}
