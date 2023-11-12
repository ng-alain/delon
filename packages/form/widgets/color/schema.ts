import type { TemplateRef } from '@angular/core';

import type { SFUISchemaItem } from '@delon/form';
import type { NzColor, NzColorPickerFormatType, NzColorPickerTriggerType } from 'ng-zorro-antd/color-picker';

export interface SFColorWidgetSchema extends SFUISchemaItem {
  /**
   * Format of color
   */
  format?: NzColorPickerFormatType | null;
  /**
   * Default value of color
   */
  defaultValue?: string | NzColor | null;
  /**
   * ColorPicker trigger mode
   */
  trigger?: NzColorPickerTriggerType | null;
  /**
   * Setting the title of the color picker
   */
  title?: TemplateRef<void> | string;
  /**
   * Triggers for customizing color panels.
   */
  flipFlop?: TemplateRef<void> | string | null;
  /**
   * Show color text
   */
  showText?: boolean;
  /**
   * Allow clearing color selected
   */
  allowClear?: boolean;
  /**
   * Callback when value is changed
   */
  change?: (ev: { color: NzColor; format: string }) => void;
  /**
   * Callback when `format` is changed
   */
  formatChange?: (color: NzColorPickerFormatType) => void;
  /**
   * Color Block
   */
  block?: boolean;
}
