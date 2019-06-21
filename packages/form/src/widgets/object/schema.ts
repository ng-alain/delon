import { SFUISchemaItem } from '../../schema/ui';

export interface SFObjectWidgetSchema extends SFUISchemaItem {
  /**
   * 是否显示标题，默认：`false`
   */
  showTitle?: boolean;
}
