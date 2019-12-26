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
  type?: LoadingType;
  text?: string;
  icon?: LoadingIcon;
  custom?: LoadingCustom;
  delay?: number;
}
