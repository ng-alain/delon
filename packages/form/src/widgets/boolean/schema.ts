import { SFUISchemaItem } from '../../schema/ui';

export interface SFBooleanWidgetSchema extends SFUISchemaItem {
  /**
   * Size of the `nz-switch`
   */
  size?: 'default' | 'small';

  /**
   * Content to be shown when the state is checked
   */
  checkedChildren?: string;

  /**
   * Content to be shown when the state is unchecked
   */
  unCheckedChildren?: string;
}
