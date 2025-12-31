import { Directionality } from '@angular/cdk/bidi';
import { CdkObserveContent } from '@angular/cdk/observers';
import { Platform } from '@angular/cdk/platform';
import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Renderer2,
  TemplateRef,
  ViewEncapsulation,
  afterNextRender,
  booleanAttribute,
  computed,
  effect,
  inject,
  input,
  numberAttribute,
  signal,
  viewChild
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { merge, filter, Observable } from 'rxjs';

import { ReuseTabService } from '@delon/abc/reuse-tab';
import { ALAIN_I18N_TOKEN, DelonLocaleService, Menu, MenuService, SettingsService, TitleService } from '@delon/theme';
import { isEmpty } from '@delon/util/browser';
import { AlainConfigService } from '@delon/util/config';
import { NzAffixComponent } from 'ng-zorro-antd/affix';
import { NzBreadCrumbComponent, NzBreadCrumbItemComponent } from 'ng-zorro-antd/breadcrumb';
import { NzStringTemplateOutletDirective } from 'ng-zorro-antd/core/outlet';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzSkeletonComponent } from 'ng-zorro-antd/skeleton';

interface PageHeaderPath {
  title?: string;
  link?: string[];
}

@Component({
  selector: 'page-header',
  exportAs: 'pageHeader',
  template: `
    @if (isBrowser && fixed()) {
      <nz-affix #affix [nzOffsetTop]="fixedOffsetTop()">
        <ng-template [ngTemplateOutlet]="phTpl" />
      </nz-affix>
    } @else {
      <ng-template [ngTemplateOutlet]="phTpl" />
    }
    <ng-template #phTpl>
      <div class="page-header" [class.page-header-rtl]="dir() === 'rtl'">
        <div [class.page-header__wide]="wide()">
          <nz-skeleton
            [nzLoading]="loading()"
            [nzTitle]="false"
            [nzActive]="true"
            [nzParagraph]="{ rows: 3 }"
            [nzAvatar]="{ size: 'large', shape: 'circle' }"
            class="d-block"
          >
            @if (breadcrumb()) {
              <ng-template [ngTemplateOutlet]="breadcrumb()" />
            } @else {
              @let list = paths();
              @if (list && list.length > 0) {
                <nz-breadcrumb>
                  @for (i of list; track $index) {
                    <nz-breadcrumb-item>
                      @if (i.link) {
                        <a [routerLink]="i.link">{{ i.title }}</a>
                      } @else {
                        {{ i.title }}
                      }
                    </nz-breadcrumb-item>
                  }
                </nz-breadcrumb>
              }
            }
            <div class="page-header__detail">
              @if (logo()) {
                <div class="page-header__logo">
                  <ng-template [ngTemplateOutlet]="logo()" />
                </div>
              }
              <div class="page-header__main">
                <div class="page-header__row">
                  @if (title() || titleText()) {
                    <h1 class="page-header__title">
                      @if (titleIsTpl()) {
                        <ng-template [ngTemplateOutlet]="$any(title())" />
                      } @else {
                        {{ titleText() }}
                        @let sub = titleSub();
                        @if (sub) {
                          <small>
                            <ng-container *nzStringTemplateOutlet="sub">{{ sub }}</ng-container>
                          </small>
                        }
                      }
                    </h1>
                  }
                  @if (action()) {
                    <div class="page-header__action">
                      <ng-template [ngTemplateOutlet]="action()" />
                    </div>
                  }
                </div>
                <div class="page-header__row">
                  <div class="page-header__desc" (cdkObserveContent)="checkContent()" #conTpl>
                    <ng-content />
                    <ng-template [ngTemplateOutlet]="content()" />
                  </div>
                  @if (extra()) {
                    <div class="page-header__extra">
                      <ng-template [ngTemplateOutlet]="extra()" />
                    </div>
                  }
                </div>
              </div>
            </div>
            <ng-template [ngTemplateOutlet]="tab()" />
          </nz-skeleton>
        </div>
      </div>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [
    NzAffixComponent,
    NgTemplateOutlet,
    NzSkeletonComponent,
    NzBreadCrumbComponent,
    NzBreadCrumbItemComponent,
    RouterLink,
    NzStringTemplateOutletDirective,
    CdkObserveContent
  ]
})
export class PageHeaderComponent {
  private readonly renderer = inject(Renderer2);
  private readonly router = inject(Router);
  private readonly menuSrv = inject(MenuService);
  private readonly i18nSrv = inject(ALAIN_I18N_TOKEN);
  private readonly titleSrv = inject(TitleService);
  private readonly reuseSrv = inject(ReuseTabService, { optional: true });
  private readonly settings = inject(SettingsService);
  private readonly cogSrv = inject(AlainConfigService);

  private readonly conTpl = viewChild.required<ElementRef<HTMLElement>>('conTpl');
  private readonly affix = viewChild(NzAffixComponent);
  protected readonly isBrowser = inject(Platform).isBrowser;
  protected readonly dir = inject(Directionality).valueSignal;

  private get menus(): Menu[] {
    return this.menuSrv.getPathByUrl(this.router.url, this.recursiveBreadcrumb());
  }

  protected paths = signal<PageHeaderPath[]>([]);
  protected titleIsTpl = computed(() => this.title() instanceof TemplateRef);
  protected titleText = signal<string | undefined | null>(null);
  readonly titleSub = input<string | TemplateRef<void> | null>();

  // #region fields

  readonly title = input<string | TemplateRef<void> | null>();
  readonly loading = input(false, { transform: booleanAttribute });
  readonly wide = input(false, { transform: booleanAttribute });
  readonly home = input<string>();
  readonly homeLink = input('/');
  readonly homeI18n = input<string>();
  readonly autoBreadcrumb = input(true, { transform: booleanAttribute });
  readonly autoTitle = input(true, { transform: booleanAttribute });
  readonly syncTitle = input(true, { transform: booleanAttribute });
  readonly fixed = input(false, { transform: booleanAttribute });
  readonly fixedOffsetTop = input(64, { transform: numberAttribute });
  readonly breadcrumb = input<TemplateRef<NzSafeAny> | null>(null);
  readonly recursiveBreadcrumb = input(false, { transform: booleanAttribute });
  readonly logo = input<TemplateRef<void> | null>(null);
  readonly action = input<TemplateRef<void> | null>(null);
  readonly content = input<TemplateRef<void> | null>(null);
  readonly extra = input<TemplateRef<void> | null>(null);
  readonly tab = input<TemplateRef<void> | null>(null);

  // #endregion

  private locale = inject(DelonLocaleService).getData('pageHeader');

  constructor() {
    this.cogSrv.attach(this, 'pageHeader', {
      home: this.locale.home
    });
    this.settings.notify
      .pipe(
        takeUntilDestroyed(),
        filter(w => this.affix() != null && w.type === 'layout' && w.name === 'collapsed')
      )
      .subscribe(() => this.affix()?.updatePosition({} as NzSafeAny));

    const obsList: Array<Observable<NzSafeAny>> = [this.router.events.pipe(filter(ev => ev instanceof NavigationEnd))];
    if (this.menuSrv != null) obsList.push(this.menuSrv.change);
    obsList.push(this.i18nSrv.change);
    merge(...obsList)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.refresh());

    effect(() => this.refresh());

    afterNextRender(() => this.checkContent());
  }

  refresh(): void {
    let title: string | undefined | null;
    if (this.title() == null && this.autoTitle() && this.menus.length > 0) {
      const item = this.menus[this.menus.length - 1];
      title = item.text;
      if (item.i18n) {
        title = this.i18nSrv.fanyi(item.i18n);
      }
    } else {
      title = this.titleIsTpl() ? '' : (this.title() as string);
    }
    this.titleText.set(title);
    // sync title to title & reuse service
    if (title && this.syncTitle()) {
      this.titleSrv.setTitle(title);
      if (this.reuseSrv) {
        this.reuseSrv.title = title;
      }
    }
    // build breadcrumb
    this.genBreadcrumb();
  }

  private genBreadcrumb(): void {
    if (this.breadcrumb() || !this.autoBreadcrumb() || this.menus.length <= 0) {
      this.paths.set([]);
      return;
    }
    const paths: PageHeaderPath[] = [];
    this.menus.forEach(item => {
      if (typeof item.hideInBreadcrumb !== 'undefined' && item.hideInBreadcrumb) return;
      let title = item.text;
      if (item.i18n) title = this.i18nSrv.fanyi(item.i18n);
      paths.push({ title, link: (item.link && [item.link]) as string[] });
    });
    // add home
    const home = this.home();
    if (home) {
      const homeI18n = this.homeI18n();
      paths.splice(0, 0, {
        title: (homeI18n && this.i18nSrv.fanyi(homeI18n)) ?? home,
        link: [this.homeLink()!]
      });
    }
    this.paths.set(paths);
  }

  protected checkContent(): void {
    const el = this.conTpl().nativeElement;
    if (isEmpty(el)) {
      this.renderer.setAttribute(el, 'hidden', '');
    } else {
      this.renderer.removeAttribute(el, 'hidden');
    }
  }
}
