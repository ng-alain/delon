import {
  Component,
  Input,
  TemplateRef,
  ContentChild,
  OnInit,
  OnChanges,
  Inject,
  Optional,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Renderer2,
  OnDestroy,
} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { toBoolean, isEmpty } from '@delon/util';
import {
  MenuService,
  ALAIN_I18N_TOKEN,
  AlainI18NService,
  Menu,
  TitleService,
} from '@delon/theme';
import { ReuseTabService } from '../reuse-tab/reuse-tab.service';

import { AdPageHeaderConfig } from './page-header.config';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  host: {
    '[class.content__title]': 'true',
    '[class.ad-ph]': 'true',
  },
  preserveWhitespaces: false,
})
export class PageHeaderComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  private inited = false;
  private i18n$: Subscription;
  private router$: Subscription;
  @ViewChild('conTpl')
  private conTpl: ElementRef;
  private _menus: Menu[];

  private get menus() {
    if (this._menus) {
      return this._menus;
    }
    this._menus = this.menuSrv.getPathByUrl(this.router.url.split('?')[0]);

    return this._menus;
  }

  // region fields

  _title: string;
  _titleTpl: TemplateRef<any>;
  @Input()
  set title(value: string | TemplateRef<any>) {
    if (value instanceof TemplateRef) {
      this._title = null;
      this._titleTpl = value;
    } else {
      this._title = value;
    }
  }

  @Input()
  home: string;

  @Input()
  home_link: string;

  @Input()
  home_i18n: string;

  /**
   * 自动生成导航，以当前路由从主菜单中定位
   */
  @Input()
  get autoBreadcrumb() {
    return this._autoBreadcrumb;
  }
  set autoBreadcrumb(value: any) {
    this._autoBreadcrumb = toBoolean(value);
  }
  private _autoBreadcrumb = true;

  /**
   * 自动生成标题，以当前路由从主菜单中定位
   */
  @Input()
  get autoTitle() {
    return this._autoTitle;
  }
  set autoTitle(value: any) {
    this._autoTitle = toBoolean(value);
  }
  private _autoTitle = true;

  /**
   * 是否自动将标题同步至 `TitleService`、`ReuseService` 下，仅 `title` 为 `string` 类型时有效
   */
  @Input()
  get syncTitle() {
    return this._syncTitle;
  }
  set syncTitle(value: any) {
    this._syncTitle = toBoolean(value);
  }
  private _syncTitle = false;

  paths: any[] = [];

  @ContentChild('breadcrumb')
  breadcrumb: TemplateRef<any>;

  @ContentChild('logo')
  logo: TemplateRef<any>;

  @ContentChild('action')
  action: TemplateRef<any>;

  @ContentChild('content')
  content: TemplateRef<any>;

  @ContentChild('extra')
  extra: TemplateRef<any>;

  @ContentChild('tab')
  tab: TemplateRef<any>;

  // endregion

  constructor(
    cog: AdPageHeaderConfig,
    private renderer: Renderer2,
    private router: Router,
    private menuSrv: MenuService,
    @Optional()
    @Inject(ALAIN_I18N_TOKEN)
    private i18nSrv: AlainI18NService,
    @Optional()
    @Inject(TitleService)
    private titleSrv: TitleService,
    @Optional()
    @Inject(ReuseTabService)
    private reuseSrv: ReuseTabService,
  ) {
    Object.assign(this, cog);
    if (this.i18nSrv)
      this.i18n$ = this.i18nSrv.change.subscribe(() => this.refresh());

    this.router$ = router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        this._menus = null;
        this.refresh();
      });
  }

  refresh() {
    this.setTitle().genBreadcrumb();
  }

  genBreadcrumb() {
    if (this.breadcrumb || !this.autoBreadcrumb || this.menus.length <= 0)
      return;
    const paths: any[] = [];
    this.menus.forEach(item => {
      if (typeof item.hideInBreadcrumb !== 'undefined' && item.hideInBreadcrumb)
        return;
      let title = item.text;
      if (item.i18n && this.i18nSrv) title = this.i18nSrv.fanyi(item.i18n);
      paths.push({ title, link: item.link && [item.link] });
    });
    // add home
    if (this.home) {
      paths.splice(0, 0, {
        title:
          (this.home_i18n &&
            this.i18nSrv &&
            this.i18nSrv.fanyi(this.home_i18n)) ||
          this.home,
        link: [this.home_link],
      });
    }
    this.paths = paths;
    return this;
  }

  setTitle() {
    if (
      typeof this._title === 'undefined' &&
      typeof this._titleTpl === 'undefined' &&
      this.autoTitle &&
      this.menus.length > 0
    ) {
      const item = this.menus[this.menus.length - 1];
      let title = item.text;
      if (item.i18n && this.i18nSrv) title = this.i18nSrv.fanyi(item.i18n);
      this._title = title;
    }

    if (this._title && this.syncTitle) {
      if (this.titleSrv) {
        this.titleSrv.setTitle(this._title);
      }
      if (this.reuseSrv) {
        this.reuseSrv.title = this._title;
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
    if (this.i18n$) this.i18n$.unsubscribe();
    this.router$.unsubscribe();
  }
}
