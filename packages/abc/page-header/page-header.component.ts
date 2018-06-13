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
} from '@angular/core';
import { Router } from '@angular/router';
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

@Component({
  selector: 'page-header',
  template: `
  <ng-container *ngIf="!breadcrumb; else breadcrumb">
    <nz-breadcrumb *ngIf="paths && paths.length > 0">
      <nz-breadcrumb-item *ngFor="let i of paths">
        <ng-container *ngIf="i.link"><a [routerLink]="i.link">{{i.title}}</a></ng-container>
        <ng-container *ngIf="!i.link">{{i.title}}</ng-container>
      </nz-breadcrumb-item>
    </nz-breadcrumb>
  </ng-container>
  <div class="detail">
    <div *ngIf="logo" class="logo"><ng-template [ngTemplateOutlet]="logo"></ng-template></div>
    <div class="main">
      <div class="row">
        <h1 *ngIf="title" class="title">{{title}}</h1>
        <div *ngIf="action" class="action"><ng-template [ngTemplateOutlet]="action"></ng-template></div>
      </div>
      <div class="row">
        <div class="desc" (cdkObserveContent)="checkContent()" #conTpl><ng-content></ng-content><ng-template [ngTemplateOutlet]="content"></ng-template></div>
        <div *ngIf="extra" class="extra"><ng-template [ngTemplateOutlet]="extra"></ng-template></div>
      </div>
    </div>
  </div>
  <ng-template [ngTemplateOutlet]="tab"></ng-template>
  `,
  host: {
    '[class.content__title]': 'true',
    '[class.ad-ph]': 'true',
  },
  preserveWhitespaces: false,
})
export class PageHeaderComponent implements OnInit, OnChanges, AfterViewInit {
  private inited = false;
  @ViewChild('conTpl') private conTpl: ElementRef;
  private _menus: Menu[];

  private get menus() {
    if (this._menus) {
      return this._menus;
    }
    this._menus = this.menuSrv.getPathByUrl(this.route.url);

    return this._menus;
  }

  // region fields

  @Input() title: string;

  @Input() home: string;

  @Input() home_link: string;

  @Input() home_i18n: string;

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
   * 是否自动将标准信息同步至 `TitleService`、`ReuseService` 下
   */
  @Input()
  get titleSync() {
    return this._titleSync;
  }
  set titleSync(value: any) {
    this._titleSync = toBoolean(value);
  }
  private _titleSync = false;

  paths: any[] = [];

  @ContentChild('breadcrumb') breadcrumb: TemplateRef<any>;

  @ContentChild('logo') logo: TemplateRef<any>;

  @ContentChild('action') action: TemplateRef<any>;

  @ContentChild('content') content: TemplateRef<any>;

  @ContentChild('extra') extra: TemplateRef<any>;

  @ContentChild('tab') tab: TemplateRef<any>;

  // endregion

  constructor(
    cog: AdPageHeaderConfig,
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
    @Inject(ReuseTabService)
    private reuseSrv: ReuseTabService,
  ) {
    Object.assign(this, cog);
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
      typeof this.title === 'undefined' &&
      this.autoTitle &&
      this.menus.length > 0
    ) {
      const item = this.menus[this.menus.length - 1];
      let title = item.text;
      if (item.i18n && this.i18nSrv) title = this.i18nSrv.fanyi(item.i18n);
      this.title = title;
    }

    if (this.titleSync) {
      if (this.titleSrv) {
        this.titleSrv.setTitle(this.title);
      }
      if (this.reuseSrv) {
        this.reuseSrv.title = this.title;
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
}
