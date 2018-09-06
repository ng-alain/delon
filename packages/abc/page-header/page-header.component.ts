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
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { isEmpty, InputBoolean } from '@delon/util';
import {
  MenuService,
  ALAIN_I18N_TOKEN,
  AlainI18NService,
  Menu,
  TitleService,
} from '@delon/theme';
import { NaReuseTabService } from '../reuse-tab/reuse-tab.service';

import { PageHeaderConfig } from './page-header.config';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  host: {
    '[class.page-header]': 'true',
  },
  preserveWhitespaces: false,
})
export class PageHeaderComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  private inited = false;
  private i18n$: Subscription;
  @ViewChild('conTpl')
  private conTpl: ElementRef;
  private _menus: Menu[];

  private get menus() {
    if (this._menus) {
      return this._menus;
    }
    this._menus = this.menuSrv.getPathByUrl(this.route.url.split('?')[0]);

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
  homeLink: string;

  @Input()
  homeI18n: string;

  /**
   * 自动生成导航，以当前路由从主菜单中定位
   */
  @Input()
  @InputBoolean()
  autoBreadcrumb = true;

  /**
   * 自动生成标题，以当前路由从主菜单中定位
   */
  @Input()
  @InputBoolean()
  autoTitle = true;

  /**
   * 是否自动将标题同步至 `TitleService`、`ReuseService` 下，仅 `title` 为 `string` 类型时有效
   */
  @Input()
  @InputBoolean()
  syncTitle = false;

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
    cog: PageHeaderConfig,
    private renderer: Renderer2,
    private route: Router,
    private menuSrv: MenuService,
    @Optional()
    @Inject(ALAIN_I18N_TOKEN)
    private i18nSrv: AlainI18NService,
    @Optional()
    @Inject(TitleService)
    private titleSrv: TitleService,
    @Optional()
    @Inject(NaReuseTabService)
    private reuseSrv: NaReuseTabService,
  ) {
    Object.assign(this, cog);
    if (this.i18nSrv)
      this.i18n$ = this.i18nSrv.change.subscribe(() => this.refresh());
  }

  refresh() {
    this.setTitle().genBreadcrumb();
  }

  private genBreadcrumb() {
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
  }
}
