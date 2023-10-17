import { TemplateRef } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { Observable } from 'rxjs';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';

export type OnboardingOpType = 'next' | 'prev' | 'skip' | 'done';

export interface OnboardingConfig {
  /**
   * Storage identification Key, The default is `localStorage` local storage, allowing the use of `ONBOARDING_STORE_TOKEN` to change the storage method
   */
  key?: string;
  /**
   * Current version
   */
  keyVersion?: unknown;
  /**
   * Onboarding items
   */
  items?: OnboardingItem[];
  /**
   * Whether to show mask or not, Default: `true`
   */
  mask?: boolean;
  /**
   * Clicking on the mask (area outside the onboarding) to close the onboarding or not, Default: `true`
   */
  maskClosable?: boolean;
  /**
   * Whether to show total, Default: `true`
   */
  showTotal?: boolean;
}

export interface OnboardingItem {
  /**
   * The CSS selector, which identifies the html element you want to describe
   */
  selectors: string;
  /**
   * Positioning of the selector element, relative to the contents of the children, Default: `bottomLeft`
   */
  position?:
    | 'top'
    | 'left'
    | 'right'
    | 'bottom'
    | 'topLeft'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomRight'
    | 'leftTop'
    | 'leftBottom'
    | 'rightTop'
    | 'rightBottom';
  /**
   * Class name of the panel
   */
  className?: string;
  /**
   * Light style
   */
  lightStyle?: string;
  /**
   * Width of the panel
   */
  width?: number;
  /**
   * Title text of the panel
   */
  title?: string | TemplateRef<void>;
  /**
   * Content text of the panel
   */
  content?: string | SafeHtml | TemplateRef<void>;
  /**
   * Skip button of the panel
   * - `null` Don't show
   */
  skip?: string | TemplateRef<void> | null;
  /**
   * Prev button of the panel
   * - `null` Don't show
   */
  prev?: string | TemplateRef<void> | null;
  /**
   * Next button of the panel
   * - `null` Don't show
   */
  next?: string | TemplateRef<void> | null;
  /**
   * Done button of the panel
   * - `null` Don't show
   */
  done?: string | TemplateRef<void> | null;
  /**
   * Target router url
   */
  url?: string;
  /**
   * Callback before entering, triggered when call `next` operates
   * - `number` indicate delay
   */
  before?: Observable<NzSafeAny> | number;
  /**
   * Callback after entering, triggered when call `prev` operates
   * - `number` indicate delay
   */
  after?: Observable<NzSafeAny> | number;
}
