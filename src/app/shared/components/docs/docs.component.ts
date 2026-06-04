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

import type { ModuleDocDemoItem, ModuleDocToc, ModuleResDoc } from '@script-type';

import { ALAIN_I18N_TOKEN, HTMLPipe, I18nPipe } from '@delon/theme';
import { copy } from '@delon/util/browser';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';

import { EditButtonComponent } from '../edit-button/edit-button.component';
import { RouteTransferDirective } from '../route-transfer/route-transfer.directive';

declare const hljs: any;

@Component({
  selector: 'app-docs',
  template: `
    @let tocList = tocs();
    @if (tocList && tocList.length) {
      <nz-affix class="toc-affix" nzOffsetTop="16">
        <nz-anchor nzShowInkInFixed nzAffix="false" (nzClick)="goLink($event)">
          @for (t of tocList; track $index) {
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
    @let cc = content();
    @if (cc) {
      @if (cc.meta.i18n === 'need-update') {
        <nz-alert [nzType]="'warning'" [nzCloseable]="'true'" nzBanner [nzMessage]="message" class="my-md">
          <ng-template #message>
            {{
              cc.meta.i18n === 'need-update'
                ? 'This article need re-translated, hope that your can PR to translated it.'
                : 'This article has not been translated, hope that your can PR to translated it.'
            }}
            <a href="//github.com/ng-alain/ng-alain/issues/74" target="_blank"> Help us!</a>
          </ng-template>
        </nz-alert>
      }
      <div class="markdown">
        <h1 class="flex-center">
          <strong>{{ cc.meta.title }}</strong>
          @if (cc.meta.module) {
            <div class="ml-sm">
              <span
                class="copy-import-module"
                (click)="copyModule()"
                nz-tooltip
                [nzTooltipTitle]="('app.content.copy-import-module' | i18n) + cc.meta.module"
              >
                IMPORT MODULE
              </span>
            </div>
          }
          <edit-button [path]="cc.meta.path ?? ''" />
        </h1>
      </div>
      @if (cc.text) {
        <div class="markdown" [innerHTML]="cc.text | html" routeTransfer></div>
      }
      @if (codes().length > 0) {
        <h2 [attr.id]="demoStr()" style="margin: 32px 0 24px 0" [innerHTML]="demoContent() | html" routeTransfer></h2>
        <ng-content />
      }
      @if (cc.api) {
        <div class="markdown api-container" [innerHTML]="cc.api | html" routeTransfer></div>
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
  private readonly i18n = inject(ALAIN_I18N_TOKEN);
  private readonly msg = inject(NzMessageService);
  private readonly router = inject(Router);
  private readonly doc = inject(DOCUMENT);
  private readonly isBrowser = inject(Platform).isBrowser;
  private readonly i18nChange = toSignal(this.i18n.change);
  private readonly injector = inject(Injector);

  readonly codes = input.required<ModuleDocDemoItem[]>();
  readonly item = input.required<ModuleResDoc>();

  protected readonly content = computed(() => {
    const item = this.item();
    const res = item.content[this.i18n.currentLang] ?? item.content[this.i18n.defaultLang];
    return res;
  });
  protected readonly demoStr = computed(() => {
    this.i18nChange();
    return this.i18n.fanyi('app.component.examples');
  });
  protected readonly demoContent = computed(() => {
    const demoText = this.demoStr();
    return `<a class="lake-link"><i data-anchor="${demoText}"></i></a>${demoText}`;
  });
  protected readonly tocs = computed<ModuleDocToc[]>(() => {
    const content = this.content();
    const ret = content?.toc ?? [];
    const codes = this.codes();
    if (codes && codes.length) {
      const codeToc: ModuleDocToc = { id: this.demoStr(), title: this.demoStr(), children: [] };
      codes.forEach(i => {
        const title = this.i18n.get(i.title);
        if (title) {
          codeToc.children!.push({
            id: i.id,
            title
          });
        }
      });
      ret.splice(0, 0, codeToc);
    }
    return ret;
  });

  constructor() {
    effect(() => {
      this.content();
      if (this.isBrowser) {
        afterNextRender(() => this.scrollAndHighlight(), { injector: this.injector });
      }
    });
  }

  private scrollAndHighlight(): void {
    const toc = this.router.parseUrl(this.router.url).fragment;
    if (toc) {
      const tocEl = this.doc.querySelector(`#${toc}`);
      tocEl?.scrollIntoView({ block: 'start', inline: 'start' });
    }

    const elements = this.doc.querySelectorAll('[class*="language-"], [class*="lang-"]');
    elements.forEach(element => {
      hljs.highlightBlock(element);
    });
  }

  protected goLink(link: string): void {
    if (!this.isBrowser) {
      return;
    }
    const view = this.doc.defaultView;
    if (view) {
      view.location.hash = link;
    }
  }

  protected copyModule(): void {
    const module = `this.data().con.module`;
    if (!module) return;
    copy(module);
    this.msg.success(this.i18n.fanyi('app.demo.copied'));
  }
}
