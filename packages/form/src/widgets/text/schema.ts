import { SFUISchemaItem } from '../../schema/ui';

export interface SFTextWidgetSchema extends SFUISchemaItem {
  /**
   * 当值不存在时所指定的文本，默认：`-`
   *
   * Default text of this item, Default: `-`
   */
  defaultText?: string;

  /**
   * 是否支持HTML，默认：`true`
   *
   * Whether to support HTML, default: `true`
   */
  html?: boolean;
}
