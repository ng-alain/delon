import { SFUISchemaItem } from '../../schema/ui';

export interface SFTextWidgetSchema extends SFUISchemaItem {
  /**
   * 当值不存在时所指定的文本，默认：`-`
   */
  defaultText?: string;
}
