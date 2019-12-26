import { SafeHtml } from '@angular/platform-browser';

export type LoadingType = 'text' | 'icon' | 'spin' | 'custom';

export interface LoadingIcon {
  type?: string;
  theme?: 'fill' | 'outline' | 'twotone';
  spin?: boolean;
}

export interface LoadingCustom {
  html?: string | SafeHtml;
  style?: object;
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
