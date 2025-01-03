import type { Observable } from 'rxjs';

import type { SFUISchemaItem, SFValue } from '@delon/form';
import type { NzSegmentedOptions } from 'ng-zorro-antd/segmented';

export interface SFSegmentedWidgetSchema extends SFUISchemaItem {
  /**
   * 异步数据源
   */
  asyncData?: () => Observable<NzSegmentedOptions>;
  /**
   * Option to fit width to its parent's width
   */
  block?: boolean;
  /**
   * Emits when index of the currently selected option changes
   */
  valueChange?: (data: { index: string | number; item: SFValue }) => void;
}
