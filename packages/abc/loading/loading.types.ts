import { SafeHtml } from '@angular/platform-browser';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';

export type LoadingType = 'text' | 'icon' | 'spin' | 'custom';

export interface LoadingIcon {
  type?: string;
  theme?: 'fill' | 'outline' | 'twotone';
  spin?: boolean;
}

export interface LoadingCustom {
  html?: string | SafeHtml;
  style?: { [key: string]: NzSafeAny };
  [key: string]: NzSafeAny;
}

export interface LoadingShowOptions {
  /**
   * Display type of loading indicator
   */
  type?: LoadingType;
  /**
   * Customized description content
   */
  text?: string;
  /**
   * Custom icon
   */
  icon?: LoadingIcon;
  /**
   * Custom loading indicator
   */
  custom?: LoadingCustom;
  /**
   * Specifies a delay in milliseconds for loading state (prevent flush), unit: milliseconds
   */
  delay?: number;
}
