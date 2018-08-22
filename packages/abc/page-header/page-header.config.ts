import { Injectable } from '@angular/core';

@Injectable()
export class NaPageHeaderConfig {
  /**
   * 首页文本，若指定空表示不显示
   */
  home?: string = '首页';
  /**
   * 首页链接
   */
  homeLink?: string = '/';
  /**
   * 首页链接国际化参数
   */
  homeI18n?: string;
  /**
   * 自动生成导航，以当前路由从主菜单中定位
   */
  autoBreadcrumb?: boolean = true;
  /**
   * 自动生成标题，以当前路由从主菜单中定位
   */
  autoTitle?: boolean = true;
  /**
   * 是否自动将标准信息同步至 `TitleService`、`ReuseService` 下
   */
  syncTitle?: boolean = false;
}
