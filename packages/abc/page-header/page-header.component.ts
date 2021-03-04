import { Direction, Directionality } from '@angular/cdk/bidi';
import { Platform } from '@angular/cdk/platform';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ReuseTabService } from '@delon/abc/reuse-tab';
import { AlainI18NService, ALAIN_I18N_TOKEN, Menu, MenuService, SettingsService, TitleService } from '@delon/theme';
import { isEmpty } from '@delon/util/browser';
import { AlainConfigService } from '@delon/util/config';
import { BooleanInput, InputBoolean, InputNumber, NumberInput } from '@delon/util/decorator';
import { NzAffixComponent } from 'ng-zorro-antd/affix';
import { merge, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

interface PageHeaderPath {
  title?: string;
  link?: string[];
}

@Component({
  selector: 'page-header',
  exportAs: 'pageHeader',
  templateUrl: './page-header.component.html',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class PageHeaderComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  static ngAcceptInputType_loading: BooleanInput;
  static ngAcceptInputType_wide: BooleanInput;
  static ngAcceptInputType_autoBreadcrumb: BooleanInput;
  static ngAcceptInputType_autoTitle: BooleanInput;
  static ngAcceptInputType_syncTitle: BooleanInput;
  static ngAcceptInputType_fixed: BooleanInput;
  static ngAcceptInputType_fixedOffsetTop: NumberInput;
  static ngAcceptInputType_recursiveBreadcrumb: BooleanInput;

  private destroy$ = new Subject<void>();
  @ViewChild('conTpl', { static: false }) private conTpl: ElementRef;
  @ViewChild('affix', { static: false }) private affix: NzAffixComponent;
  inited = false;
  isBrowser = true;
  dir: Direction = 'ltr';

  private get menus(): Menu[] {
    return this.menuSrv.getPathByUrl(this.router.url, this.recursiveBreadcrumb);
  }

  _titleVal: string | null = '';
  paths: PageHeaderPath[] = [];

  // #region fields

  _title: string | null;
  _titleTpl: TemplateRef<any>;
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

  @Input() @InputBoolean() loading = false;
  @Input() @InputBoolean() wide = false;
  @Input() home?: string;
  @Input() homeLink?: string;
  @Input() homeI18n?: string;
  @Input() @InputBoolean() autoBreadcrumb: boolean;
  @Input() @InputBoolean() autoTitle: boolean;
  @Input() @InputBoolean() syncTitle: boolean;
  @Input() @InputBoolean() fixed: boolean;
  @Input() @InputNumber() fixedOffsetTop: number;
  @Input() breadcrumb?: TemplateRef<any> | null = null;
  @Input() @InputBoolean() recursiveBreadcrumb: boolean;
  @Input() logo?: TemplateRef<void> | null = null;
  @Input() action?: TemplateRef<void> | null = null;
  @Input() content?: TemplateRef<void> | null = null;
  @Input() extra?: TemplateRef<void> | null = null;
  @Input() tab?: TemplateRef<void> | null = null;

  // #endregion

  constructor(
    settings: SettingsService,
    private renderer: Renderer2,
    private router: Router,
    private menuSrv: MenuService,
    @Optional() @Inject(ALAIN_I18N_TOKEN) private i18nSrv: AlainI18NService,
    @Optional() @Inject(TitleService) private titleSrv: TitleService,
    @Optional() @Inject(ReuseTabService) private reuseSrv: ReuseTabService,
    private cdr: ChangeDetectorRef,
    configSrv: AlainConfigService,
    platform: Platform,
    @Optional() private directionality: Directionality,
  ) {
    this.isBrowser = platform.isBrowser;
    configSrv.attach(this, 'pageHeader', {
      home: '首页',
      homeLink: '/',
      autoBreadcrumb: true,
      recursiveBreadcrumb: false,
      autoTitle: true,
      syncTitle: true,
      fixed: false,
      fixedOffsetTop: 64,
    });
    settings.notify
      .pipe(
        takeUntil(this.destroy$),
        filter(w => this.affix && w.type === 'layout' && w.name === 'collapsed'),
      )
      .subscribe(() => this.affix.updatePosition({} as any));

    merge(menuSrv.change.pipe(filter(() => this.inited)), router.events.pipe(filter(ev => ev instanceof NavigationEnd)), i18nSrv.change)
      .pipe(takeUntil(this.destroy$))
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
      if (item.i18n && this.i18nSrv) title = this.i18nSrv.fanyi(item.i18n);
      paths.push({ title, link: (item.link && [item.link]) as string[] });
    });
    // add home
    if (this.home) {
      paths.splice(0, 0, {
        title: (this.homeI18n && this.i18nSrv && this.i18nSrv.fanyi(this.homeI18n)) || this.home,
        link: [this.homeLink!],
      });
    }
    this.paths = paths;
  }

  private setTitle(): this {
    if (this._title == null && this._titleTpl == null && this.autoTitle && this.menus.length > 0) {
      const item = this.menus[this.menus.length - 1];
      let title = item.text;
      if (item.i18n && this.i18nSrv) {
        title = this.i18nSrv.fanyi(item.i18n);
      }
      this._titleVal = title!;
    }

    if (this._titleVal && this.syncTitle) {
      if (this.titleSrv) {
        this.titleSrv.setTitle(this._titleVal);
      }
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
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction: Direction) => {
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

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
