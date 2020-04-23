import { InjectionToken } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { AlainDateRangePickerConfig } from './types/date-picker.type';
import { SafeHtml } from '@angular/platform-browser';

export interface AlainConfig {
  dataRange?: AlainDateRangePickerConfig;
  errorCollect?: AlainErrorCollectConfig;
  image?: AlainImageConfig;
  loading?: AlainLoadingConfig;
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

export interface AlainChartConfig {
  theme?: string | { [key: string]: NzSafeAny };
}

export type AlainConfigKey = keyof AlainConfig;

export const ALAIN_CONFIG = new InjectionToken<AlainConfig>('alain-config');
