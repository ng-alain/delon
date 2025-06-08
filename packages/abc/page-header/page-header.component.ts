import { Direction, Directionality } from '@angular/cdk/bidi';
import { CdkObserveContent } from '@angular/cdk/observers';
import { Platform } from '@angular/cdk/platform';
import { NgTemplateOutlet } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  inject,
  numberAttribute
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { merge, filter, Observable } from 'rxjs';

import { ReuseTabService } from '@delon/abc/reuse-tab';
import { ALAIN_I18N_TOKEN, Menu, MenuService, SettingsService, TitleService } from '@delon/theme';
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
  templateUrl: './page-header.component.html',
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
export class PageHeaderComponent implements OnInit, OnChanges, AfterViewInit {
  private readonly renderer = inject(Renderer2);
  private readonly router = inject(Router);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly menuSrv = inject(MenuService);
  private readonly i18nSrv = inject(ALAIN_I18N_TOKEN);
  private readonly titleSrv = inject(TitleService);
  private readonly reuseSrv = inject(ReuseTabService, { optional: true });
  private readonly directionality = inject(Directionality);
  private readonly destroy$ = inject(DestroyRef);

  @ViewChild('conTpl', { static: false }) private conTpl!: ElementRef;
  @ViewChild('affix', { static: false }) private affix!: NzAffixComponent;
  inited = false;
  isBrowser = true;
  dir?: Direction = 'ltr';

  private get menus(): Menu[] {
    return this.menuSrv.getPathByUrl(this.router.url, this.recursiveBreadcrumb);
  }

  _titleVal: string | null = '';
  paths: PageHeaderPath[] = [];

  // #region fields

  _title: string | null = null;
  _titleTpl: TemplateRef<NzSafeAny> | null = null;
  @Input()
  set title(value: string | TemplateRef<void> | null) {
    if (value instanceof TemplateRef) {
      this._title = null;
      this._titleTpl = value;
      this._titleVal = '';
    } else {
      this._title = value;
      this._titleVal = this._title;
    }
  }
  @Input() titleSub?: string | TemplateRef<void> | null;

  @Input({ transform: booleanAttribute }) loading = false;
  @Input({ transform: booleanAttribute }) wide = false;
  @Input() home?: string;
  @Input() homeLink?: string;
  @Input() homeI18n?: string;
  @Input({ transform: booleanAttribute }) autoBreadcrumb!: boolean;
  @Input({ transform: booleanAttribute }) autoTitle!: boolean;
  @Input({ transform: booleanAttribute }) syncTitle!: boolean;
  @Input({ transform: booleanAttribute }) fixed!: boolean;
  @Input({ transform: numberAttribute }) fixedOffsetTop!: number;
  @Input() breadcrumb?: TemplateRef<NzSafeAny> | null = null;
  @Input({ transform: booleanAttribute }) recursiveBreadcrumb!: boolean;
  @Input() logo?: TemplateRef<void> | null = null;
  @Input() action?: TemplateRef<void> | null = null;
  @Input() content?: TemplateRef<void> | null = null;
  @Input() extra?: TemplateRef<void> | null = null;
  @Input() tab?: TemplateRef<void> | null = null;

  // #endregion

  constructor(settings: SettingsService, configSrv: AlainConfigService, platform: Platform) {
    this.isBrowser = platform.isBrowser;
    configSrv.attach(this, 'pageHeader', {
      home: '首页',
      homeLink: '/',
      autoBreadcrumb: true,
      recursiveBreadcrumb: false,
      autoTitle: true,
      syncTitle: true,
      fixed: false,
      fixedOffsetTop: 64
    });
    settings.notify
      .pipe(
        takeUntilDestroyed(),
        filter(w => this.affix && w.type === 'layout' && w.name === 'collapsed')
      )
      .subscribe(() => this.affix.updatePosition({} as NzSafeAny));

    const obsList: Array<Observable<NzSafeAny>> = [this.router.events.pipe(filter(ev => ev instanceof NavigationEnd))];
    if (this.menuSrv != null) obsList.push(this.menuSrv.change);
    obsList.push(this.i18nSrv.change);
    merge(...obsList)
      .pipe(
        takeUntilDestroyed(),
        filter(() => this.inited)
      )
      .subscribe(() => this.refresh());
  }

  refresh(): void {
    this.setTitle().genBreadcrumb();
    this.cdr.detectChanges();
  }

  private genBreadcrumb(): void {
    if (this.breadcrumb || !this.autoBreadcrumb || this.menus.length <= 0) {
      this.paths = [];
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
    if (this.home) {
      paths.splice(0, 0, {
        title: (this.homeI18n && this.i18nSrv.fanyi(this.homeI18n)) || this.home,
        link: [this.homeLink!]
      });
    }
    this.paths = paths;
  }

  private setTitle(): this {
    if (this._title == null && this._titleTpl == null && this.autoTitle && this.menus.length > 0) {
      const item = this.menus[this.menus.length - 1];
      let title = item.text;
      if (item.i18n) {
        title = this.i18nSrv.fanyi(item.i18n);
      }
      this._titleVal = title!;
    }

    if (this._titleVal && this.syncTitle) {
      this.titleSrv.setTitle(this._titleVal);
      if (!this.inited && this.reuseSrv) {
        this.reuseSrv.title = this._titleVal;
      }
    }

    return this;
  }

  checkContent(): void {
    if (isEmpty(this.conTpl.nativeElement)) {
      this.renderer.setAttribute(this.conTpl.nativeElement, 'hidden', '');
    } else {
      this.renderer.removeAttribute(this.conTpl.nativeElement, 'hidden');
    }
  }

  ngOnInit(): void {
    this.dir = this.directionality.value;
    this.directionality.change.pipe(takeUntilDestroyed(this.destroy$)).subscribe(direction => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.refresh();
    this.inited = true;
  }

  ngAfterViewInit(): void {
    this.checkContent();
  }

  ngOnChanges(): void {
    if (this.inited) {
      this.refresh();
    }
  }
}
