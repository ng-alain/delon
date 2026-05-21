import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  Injector,
  input
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';

import { ALAIN_I18N_TOKEN, HTMLPipe, I18nPipe } from '@delon/theme';
import { copy } from '@delon/util/browser';
import { deepCopy } from '@delon/util/other';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';

import { DemoDataItem, MetaItem, MetaItemContent, MetaService } from '@core';

import { EditButtonComponent } from '../edit-button/edit-button.component';
import { RouteTransferDirective } from '../route-transfer/route-transfer.directive';

declare const hljs: any;

@Component({
  selector: 'app-docs',
  template: `
    @let con = data().con;
    @if (isBrowser && con.toc && con.toc.length) {
      <nz-affix class="toc-affix" nzOffsetTop="16">
        <nz-anchor nzShowInkInFixed nzAffix="false" (nzClick)="goLink($event)">
          @for (t of con.toc; track $index) {
            <nz-link [nzHref]="'#' + t.id" [nzTitle]="t.title">
              @if (t.children && t.children.length > 0) {
                @for (t2 of t.children; track $index) {
                  <nz-link [nzHref]="'#' + t2.id" [nzTitle]="t2.title" />
                }
              }
            </nz-link>
          }
        </nz-anchor>
      </nz-affix>
    }
    @let c = meta.cfg();
    @if (c) {
      @if (!c.i18n || con.meta.i18n === 'need-update') {
        <nz-alert [nzType]="'warning'" [nzCloseable]="'true'" nzBanner [nzMessage]="message" class="my-md">
          <ng-template #message>
            {{
              con.meta.i18n === 'need-update'
                ? 'This article need re-translated, hope that your can PR to translated it.'
                : 'This article has not been translated, hope that your can PR to translated it.'
            }}
            <a href="//github.com/ng-alain/ng-alain/issues/74" target="_blank"> Help us!</a>
          </ng-template>
        </nz-alert>
      }
      <div class="markdown">
        <h1 class="flex-center">
          <strong>{{ title() }}</strong>
          @if (con.module) {
            <div class="ml-sm">
              <span
                class="copy-import-module"
                (click)="copyModule()"
                nz-tooltip
                [nzTooltipTitle]="('app.content.copy-import-module' | i18n) + con.module"
              >
                IMPORT MODULE
              </span>
            </div>
          }
          <edit-button [item]="item()" />
        </h1>
      </div>
      @if (con.content) {
        <div class="markdown" [innerHTML]="con.content | html" routeTransfer></div>
      }
      @if (data().demo) {
        <h2 [attr.id]="demoStr()" style="margin: 32px 0 24px 0" [innerHTML]="demoContent() | html" routeTransfer></h2>
        <ng-content />
      }
      @if (con.api) {
        <div class="markdown api-container" [innerHTML]="con.api | html" routeTransfer></div>
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    I18nPipe,
    RouteTransferDirective,
    NzAffixModule,
    NzAnchorModule,
    NzAlertModule,
    NzTooltipModule,
    EditButtonComponent,
    HTMLPipe
  ]
})
export class DocsComponent {
  protected readonly meta = inject(MetaService);
  private readonly i18n = inject(ALAIN_I18N_TOKEN);
  private readonly msg = inject(NzMessageService);
  private readonly router = inject(Router);
  private readonly doc = inject(DOCUMENT);
  protected readonly isBrowser = inject(Platform).isBrowser;
  private readonly i18nChange = toSignal(this.i18n.change);
  private readonly injector = inject(Injector);

  readonly codes = input.required<DemoDataItem[]>();
  readonly item = input.required<MetaItem>();

  protected readonly title = computed(() => {
    this.i18nChange();
    const c = this.meta.cfg();
    return c ? (this.i18n.currentLang === 'zh-CN' ? (c.subtitle ?? c.title) : c.title) : '';
  });
  protected readonly demoStr = computed(() => {
    this.i18nChange();
    return this.i18n.fanyi('app.component.examples');
  });
  protected readonly demoContent = computed(() => {
    const demoText = this.demoStr();
    return `<a class="lake-link"><i data-anchor="${demoText}"></i></a>${demoText}`;
  });
  protected readonly data = computed(() => {
    this.i18nChange();

    const item = deepCopy(this.item());
    const ret: { demo: boolean; urls: Record<string, string>; con: MetaItemContent } = {
      demo: item.demo,
      urls: item.urls,
      con: item.content[this.i18n.currentLang] ?? item.content[this.i18n.defaultLang]
    };

    const codes = this.codes();
    if (ret.demo && codes && codes.length) {
      ret.con.toc = codes
        .map(a => {
          return {
            h: 3,
            id: a.id,
            title: this.i18n.get(a.meta.title)
          };
        })
        .concat({ id: 'API', title: 'API', h: 2 });
    }

    if (ret.con.meta.module) {
      ret.con.module = ret.con.meta.module;
    }

    return ret;
  });

  constructor() {
    effect(() => {
      const data = this.data();
      if (!this.isBrowser) {
        return;
      }

      afterNextRender(
        () => {
          const toc = this.router.parseUrl(this.router.url).fragment;
          if (toc) {
            const tocEl = this.doc.querySelector(`#${toc}`);
            tocEl?.scrollIntoView();
          }

          const hasCode = !!data.con.content || !!data.con.api;
          if (hasCode) {
            const elements = this.doc.querySelectorAll('[class*="language-"], [class*="lang-"]');
            elements.forEach(element => {
              hljs.highlightBlock(element);
            });
          }
        },
        { injector: this.injector }
      );
    });
  }

  goLink(link: string): void {
    if (!this.isBrowser) {
      return;
    }
    const view = this.doc.defaultView;
    if (view) {
      view.location.hash = link;
    }
  }

  copyModule(): void {
    const module = this.data().con.module;
    if (!module) return;
    copy(module);
    this.msg.success(this.i18n.fanyi('app.demo.copied'));
  }
}
