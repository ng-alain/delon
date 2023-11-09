import type { TemplateRef } from '@angular/core';
import type { Observable } from 'rxjs';

import type { SFUISchemaItem, SFValue } from '@delon/form';
import type { NzSegmentedOption, NzSegmentedOptions } from 'ng-zorro-antd/segmented';

export interface SFSegmentedWidgetSchema extends SFUISchemaItem {
  /**
   * 异步数据源
   */
  asyncData?: () => Observable<NzSegmentedOptions>;
  /**
   * Option to fit width to its parent's width
   */
  block?: boolean;
  labelTemplate?: TemplateRef<{ $implicit: NzSegmentedOption; index: number }> | null;
  /**
   * Emits when index of the currently selected option changes
   */
  valueChange?: (data: { index: number; item: SFValue }) => void;
}
