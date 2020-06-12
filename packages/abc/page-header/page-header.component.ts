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
import { Router } from '@angular/router';
import { ReuseTabService } from '@delon/abc/reuse-tab';
import { AlainI18NService, ALAIN_I18N_TOKEN, MenuService, SettingsService, TitleService } from '@delon/theme';
import { AlainConfigService, InputBoolean, InputNumber, isEmpty } from '@delon/util';
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
  private inited = false;
  private unsubscribe$ = new Subject<void>();
  @ViewChild('conTpl', { static: false }) private conTpl: ElementRef;
  @ViewChild('affix', { static: false }) private affix: NzAffixComponent;

  private get menus() {
    return this.menuSrv.getPathByUrl(this.router.url, this.recursiveBreadcrumb);
  }

  _titleVal: string = '';
  paths: PageHeaderPath[] = [];

  // #region fields

  _title: string | null;
  _titleTpl: TemplateRef<void>;
  @Input()
  set title(value: string | TemplateRef<void>) {
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
  @Input() home: string;
  @Input() homeLink: string;
  @Input() homeI18n: string;
  @Input() @InputBoolean() autoBreadcrumb: boolean;
  @Input() @InputBoolean() autoTitle: boolean;
  @Input() @InputBoolean() syncTitle: boolean;
  @Input() @InputBoolean() fixed: boolean;
  @Input() @InputNumber() fixedOffsetTop: number;
  @Input() breadcrumb: TemplateRef<void>;
  @Input() @InputBoolean() recursiveBreadcrumb: boolean;
  @Input() logo: TemplateRef<void>;
  @Input() action: TemplateRef<void>;
  @Input() content: TemplateRef<void>;
  @Input() extra: TemplateRef<void>;
  @Input() tab: TemplateRef<void>;

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
  ) {
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
        takeUntil(this.unsubscribe$),
        filter(w => this.affix && w.type === 'layout' && w.name === 'collapsed'),
      )
      .subscribe(() => this.affix.updatePosition({} as any));

    merge(menuSrv.change.pipe(filter(() => this.inited)), i18nSrv.change)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => this.refresh());
  }

  refresh() {
    this.setTitle().genBreadcrumb();
    this.cdr.detectChanges();
  }

  private genBreadcrumb() {
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
        link: [this.homeLink],
      });
    }
    this.paths = paths;
    return this;
  }

  private setTitle() {
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
      if (this.reuseSrv) {
        this.reuseSrv.title = this._titleVal;
      }
    }

    return this;
  }

  checkContent() {
    if (isEmpty(this.conTpl.nativeElement)) {
      this.renderer.setAttribute(this.conTpl.nativeElement, 'hidden', '');
    } else {
      this.renderer.removeAttribute(this.conTpl.nativeElement, 'hidden');
    }
  }

  ngOnInit() {
    this.refresh();
    this.inited = true;
  }

  ngAfterViewInit(): void {
    this.checkContent();
  }

  ngOnChanges(): void {
    if (this.inited) this.refresh();
  }

  ngOnDestroy(): void {
    const { unsubscribe$ } = this;
    unsubscribe$.next();
    unsubscribe$.complete();
  }
}
