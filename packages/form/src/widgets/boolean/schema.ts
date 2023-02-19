import { TemplateRef } from '@angular/core';

import { NzSizeDSType } from 'ng-zorro-antd/core/types';

import { SFUISchemaItem } from '../../schema/ui';

export interface SFBooleanWidgetSchema extends SFUISchemaItem {
  /**
   * Size of the `nz-switch`
   */
  size?: NzSizeDSType;

  /**
   * Content to be shown when the state is checked
   */
  checkedChildren?: string | TemplateRef<void>;

  /**
   * Content to be shown when the state is unchecked
   */
  unCheckedChildren?: string | TemplateRef<void>;

  /**
   * Loading state of switch
   */
  loading?: boolean;
}
