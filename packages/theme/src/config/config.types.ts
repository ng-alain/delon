import { InjectionToken } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { AlainDateRangePickerConfig } from './date-picker/date-picker.type';
import { AlainSTConfig } from './st/st.type';

export interface AlainConfig {
  dataRange?: AlainDateRangePickerConfig;
  errorCollect?: AlainErrorCollectConfig;
  image?: AlainImageConfig;
  loading?: AlainLoadingConfig;
  lodop?: AlainLodopConfig;
  pageHeader?: AlainPageHeaderConfig;
  qr?: AlainQRConfig;
  se?: AlainSEConfig;
  sg?: AlainSGConfig;
  sv?: AlainSVConfig;
  st?: AlainSTConfig;
  xlsx?: AlainXlsxConfig;
  zip?: AlainZipConfig;
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

export interface AlainQRConfig {
  /** 背景，默认：`white` */
  background?: string;
  /** 背景透明级别，范围：`0-1` 之间，默认：`1` */
  backgroundAlpha?: number;
  /** 前景，默认：`black` */
  foreground?: string;
  /** 前景透明级别，范围：`0-1` 之间，默认：`1` */
  foregroundAlpha?: number;
  /** 误差校正级别，默认：`L` */
  level?: 'L' | 'M' | 'Q' | 'H';
  /** 二维码输出图片MIME类型，默认：`image/png` */
  mime?: string;
  /** 内边距（单位：px），默认：`10` */
  padding?: number;
  /** 大小（单位：px），默认：`220` */
  size?: number;
}

export interface AlainSEConfig {
  /**
   * 大小，默认：`default`
   * - `compact` 紧凑型，强制忽略 `error`、`extra` 展示
   */
  size?: 'default' | 'compact';
  /**
   * 布局类型，等同 `nzLayout`，默认：`horizontal`
   * - `inline` 时强制大小为 `compact`
   */
  nzLayout?: 'horizontal' | 'vertical' | 'inline';
  /**
   * 间距，当 `nzLayout:horizontal` 时有效，默认：`32`
   */
  gutter?: number;
  /**
   * 列数，默认：`2`
   */
  col?: number;
  /**
   * 标签文本宽度，单位：`px`，默认：`150`
   */
  labelWidth?: number;
  /**
   * 是否立即呈现错误视觉，默认：`false`
   */
  firstVisual?: boolean;
}

export interface AlainSGConfig {
  /**
   * 间距，默认：`32`
   */
  gutter?: number;
  /**
   * 列数，默认：`2`
   */
  col?: number;
}

export class AlainSVConfig {
  /** 大小，默认：`large` */
  size?: 'small' | 'large';
  /** 间距，默认：`32` */
  gutter?: number;
  /** 布局，默认：`horizontal` */
  layout?: 'horizontal' | 'vertical';
  /** 列数，默认：`3` */
  col?: number;
  /** 是否显示默认值，当内容为空值时显示 `-`，默认：`true` */
  default?: boolean;
  /** `label` 固定宽度，若 `null` 或 `undefined` 表示非固定，默认：`null` */
  labelWidth?: number;
}

export interface AlainXlsxConfig {
  /**
   * Xlsx library path, default: `//cdn.bootcss.com/xlsx/0.15.6/xlsx.full.min.js`
   */
  url?: string;
  /**
   * Defines which Xlsx optional modules should get loaded, e.g:
   *
   * `[ '//cdn.bootcss.com/xlsx/0.15.6/cpexcel.js' ]`
   */
  modules?: string[];
}

export interface AlainZipConfig {
  /**
   * Zip library path, Default: `//cdn.bootcss.com/jszip/3.3.0/jszip.min.js`
   */
  url?: string;
  /**
   * Defines which zip optional utils should get loaded
   */
  utils?: string[];
}

export interface AlainChartConfig {
  theme?: string | { [key: string]: NzSafeAny };
}

export type AlainConfigKey = keyof AlainConfig;

export const ALAIN_CONFIG = new InjectionToken<AlainConfig>('alain-config');
