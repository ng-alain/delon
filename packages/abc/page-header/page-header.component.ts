import {
  Component,
  Input,
  TemplateRef,
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
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { NzAffixComponent } from 'ng-zorro-antd';
import { Subscription, Observable, merge } from 'rxjs';
import { filter } from 'rxjs/operators';

import { isEmpty, InputBoolean, InputNumber } from '@delon/util';
import {
  MenuService,
  ALAIN_I18N_TOKEN,
  AlainI18NService,
  Menu,
  TitleService,
  SettingsService,
} from '@delon/theme';
import { ReuseTabService } from '@delon/abc/reuse-tab';

import { PageHeaderConfig } from './page-header.config';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  preserveWhitespaces: false,
})
export class PageHeaderComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  private inited = false;
  private ref$: Subscription;
  private set$: Subscription;
  @ViewChild('conTpl')
  private conTpl: ElementRef;
  @ViewChild('affix')
  private affix: NzAffixComponent;
  private _menus: Menu[];

  private get menus() {
    if (this._menus) {
      return this._menus;
    }
    this._menus = this.menuSrv.getPathByUrl(
      this.router.url.split('?')[0],
      this.recursiveBreadcrumb,
    );

    return this._menus;
  }

  _titleVal: string;

  // #region fields

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
    this._titleVal = this._title;
  }

  @Input()
  @InputBoolean()
  loading = false;

  @Input()
  @InputBoolean()
  wide = false;

  @Input()
  home: string;

  @Input()
  homeLink: string;

  @Input()
  homeI18n: string;

  /**
   * 自动生成导航，以当前路由从主菜单中定位
   */
  @Input()
  @InputBoolean()
  autoBreadcrumb: boolean;

  /**
   * 自动生成标题，以当前路由从主菜单中定位
   */
  @Input()
  @InputBoolean()
  autoTitle: boolean;

  /**
   * 是否自动将标题同步至 `TitleService`、`ReuseService` 下，仅 `title` 为 `string` 类型时有效
   */
  @Input()
  @InputBoolean()
  syncTitle: boolean;

  @Input()
  @InputBoolean()
  fixed: boolean;

  @Input()
  @InputNumber()
  fixedOffsetTop: number;

  paths: any[] = [];

  @Input()
  breadcrumb: TemplateRef<any>;

  @Input()
  @InputBoolean()
  recursiveBreadcrumb: boolean;

  @Input()
  logo: TemplateRef<any>;

  @Input()
  action: TemplateRef<any>;

  @Input()
  content: TemplateRef<any>;

  @Input()
  extra: TemplateRef<any>;

  @Input()
  tab: TemplateRef<any>;

  // #endregion

  constructor(
    cog: PageHeaderConfig,
    settings: SettingsService,
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
    this.set$ = settings.notify
      .pipe(
        filter(
          w => this.affix && w.type === 'layout' && w.name === 'collapsed',
        ),
      )
      .subscribe(() => this.affix.updatePosition({}));

    const data$: Observable<any>[] = [
      this.router.events.pipe(
        filter((event: RouterEvent) => event instanceof NavigationEnd),
      ),
    ];
    if (this.i18nSrv) {
      data$.push(this.i18nSrv.change);
    }
    this.ref$ = merge(...data$).subscribe(() => {
      this._menus = null;
      this.refresh();
    });
  }

  refresh() {
    this.setTitle().genBreadcrumb();
  }

  private genBreadcrumb() {
    if (this.breadcrumb || !this.autoBreadcrumb || this.menus.length <= 0) {
      this.paths = [];
      return;
    }
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
          (this.homeI18n &&
            this.i18nSrv &&
            this.i18nSrv.fanyi(this.homeI18n)) ||
          this.home,
        link: [this.homeLink],
      });
    }
    this.paths = paths;
    return this;
  }

  private setTitle() {
    if (
      typeof this._title === 'undefined' &&
      typeof this._titleTpl === 'undefined' &&
      this.autoTitle &&
      this.menus.length > 0
    ) {
      const item = this.menus[this.menus.length - 1];
      let title = item.text;
      if (item.i18n && this.i18nSrv) title = this.i18nSrv.fanyi(item.i18n);
      this._titleVal = title;
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
    this.set$.unsubscribe();
    this.ref$.unsubscribe();
  }
}
