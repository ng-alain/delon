import { TemplateRef } from '@angular/core';

export type OnboardingOpType = 'next' | 'prev' | 'skip' | 'done';

export interface OnboardingData {
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
   * Whether to animate, Default: `false`
   */
  animation?: boolean;
  /**
   * Whether to show total, Default: `true`
   */
  showTotal?: boolean;
}

export interface OnboardingItem {
  /**
   * The CSS selector, which identifies the html element you want to describe
   */
  selector: string;
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
   * Width of the panel
   */
  width?: number;
  /**
   * Headline text of the panel
   */
  headline?: string | TemplateRef<void>;
  /**
   * Detail text of the panel
   */
  detail?: string | TemplateRef<void>;
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
}
