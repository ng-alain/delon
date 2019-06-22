import { SFUISchemaItem } from '../../schema/ui';

export interface SFArrayWidgetSchema extends SFUISchemaItem {
  /** 指定添加按钮文本，默认：添加 */
  addTitle?: string;

  /** 指定添加按钮风格，等同按钮 `nzType`，默认：dashed */
  addType?: string;

  /** 指定是否显示移除按钮 */
  removable?: boolean;

  /** 指定移除按钮文本，默认：移除 */
  removeTitle?: string;

  /** 指定是否显示排序按钮 */
  // orderable?: boolean;
}
