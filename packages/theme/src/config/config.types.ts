import { InjectionToken } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { AlainDateRangePickerConfig } from './types/date-picker.type';
import { SafeHtml } from '@angular/platform-browser';

export interface AlainConfig {
  dataRange?: AlainDateRangePickerConfig;
  errorCollect?: AlainErrorCollectConfig;
  image?: AlainImageConfig;
  loading?: AlainLoadingConfig;
  lodop?: AlainLodopConfig;
  pageHeader?: AlainPageHeaderConfig;
  chart?: AlainChartConfig;
}

export interface AlainErrorCollectConfig {
  /**
   * 监听频率，默认：`500`
   */
  freq?: number;
  /**
   * 顶部偏移值，默认：`145`
   */
  offsetTop?: number;
}

export interface AlainImageConfig {
  /**
   * 默认大小，默认值：`64`，单位：px
   */
  size?: number;

  /**
   * 错误图片，默认：`./assets/img/logo.svg`
   */
  error?: string;
}

export interface AlainLoadingConfig {
  /**
   * 类型，默认：`spin`
   */
  type?: 'text' | 'icon' | 'spin' | 'custom';
  /**
   * 显示文本，默认：`加载中...`
   */
  text?: string;
  icon?: {
    /** `nz-icon.nzType`，默认：`loading` */
    type?: string;
    /** `nz-icon.nzTheme`，默认：`outline` */
    theme?: 'fill' | 'outline' | 'twotone';
    /** `nz-icon.nzSpin`，默认：`true` */
    spin?: boolean;
  };
  custom?: {
    html?: string | SafeHtml;
    style?: object;
  };
  /**
   * 延迟，默认：`0`
   */
  delay?: number;
}

export interface AlainLodopConfig {
  /**
   * 注册信息：主注册号
   */
  license?: string;
  /**
   * 注册信息：附加注册号A
   */
  licenseA?: string;
  /**
   * 注册信息：附加注册号B
   */
  licenseB?: string;
  /**
   * 注册信息：注册单位名称
   */
  companyName?: string;
  /**
   * Lodop 远程脚本URL地址，**注意**务必使用 `name` 属性指定变量值
   *
   * - http://localhost:18000/CLodopfuncs.js
   * - https://localhost:8443/CLodopfuncs.js [默认]
   */
  url?: string;
  /**
   * Lodop 变量名，默认：`CLODOP`
   */
  name?: string;
  /**
   * 检查次数，默认 `100`，当检查超过时视为异常，这是因为 Lodop 需要连接 WebSocket
   */
  checkMaxCount?: number;
}

export interface AlainPageHeaderConfig {
  /**
   * 首页文本，若指定空表示不显示，默认：`首页`
   */
  home?: string;
  /**
   * 首页链接，默认：`/`
   */
  homeLink?: string;
  /**
   * 首页链接国际化参数
   */
  homeI18n?: string;
  /**
   * 自动生成导航，以当前路由从主菜单中定位，默认：`true`
   */
  autoBreadcrumb?: boolean;
  /**
   * 自动向上递归查找，默认：`false`
   *  - 菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项
   */
  recursiveBreadcrumb?: boolean;
  /**
   * 自动生成标题，以当前路由从主菜单中定位，默认：`true`
   */
  autoTitle?: boolean;
  /**
   * 是否自动将标准信息同步至 `TitleService`、`ReuseService` 下，默认：`true`
   */
  syncTitle?: boolean;
  /**
   * 是否固定模式，默认：`false`
   */
  fixed?: boolean;
  /**
   * 固定偏移值，默认：`64`
   */
  fixedOffsetTop?: number;
}

export interface AlainChartConfig {
  theme?: string | { [key: string]: NzSafeAny };
}

export type AlainConfigKey = keyof AlainConfig;

export const ALAIN_CONFIG = new InjectionToken<AlainConfig>('alain-config');
