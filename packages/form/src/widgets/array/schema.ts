import { FormProperty } from '../../model/form.property';
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

  /** 添加回调，`property` 表示添加后的表单属性 */
  add: (property: FormProperty) => void;

  /** 移除回调 */
  remove: (index: number) => void;
}
