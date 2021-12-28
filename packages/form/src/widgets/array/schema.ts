import { NzButtonType } from 'ng-zorro-antd/button';

import { FormProperty } from '../../model/form.property';
import { SFUISchemaItem } from '../../schema/ui';

export interface SFArrayWidgetSchema extends SFUISchemaItem {
  /**
   * Add button title, default: `添加`
   *
   * 指定添加按钮文本，默认：`添加`
   */
  addTitle?: string;

  /**
   * Add button type, equals to `nzType`, default: `dashed`
   *
   * 指定添加按钮风格，等同按钮 `nzType`，默认：`dashed`
   */
  addType?: NzButtonType;

  /**
   * Whether includes remove button, default: `true`
   *
   * 指定是否显示移除按钮，默认：`true`
   */
  removable?: boolean;

  /**
   * Remove button title, default: `移除`
   *
   * 指定移除按钮文本，默认：`移除`
   */
  removeTitle?: string;

  /**
   * Add required style to current item
   *
   * 当前项是否为必填，仅影响样式
   */
  required?: boolean;

  /**
   * Add callback，`property` indicates form property after add
   *
   * 添加回调，`property` 表示添加后的表单属性
   */
  add: (property: FormProperty) => void;

  /**
   * Remove callback
   *
   * 移除回调
   */
  remove: (index: number) => void;
}
