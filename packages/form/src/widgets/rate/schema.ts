import { SFUISchemaItem } from '../../schema/ui';

export interface SFRateWidgetSchema extends SFUISchemaItem {
  /**
   * 是否允许再次点击后清除，默认：`true`
   */
  allowClear?: boolean;

  /**
   * 自动获取焦点，默认：`false`
   */
  autoFocus?: boolean;

  /**
   * 提醒文本模板，`{{value}}` 表示当前值（注意无任何空格）
   */
  text?: string;

  /**
   * 自定义每项的提示信息
   */
  tooltips?: string[];
}
