import { NzButtonType } from 'ng-zorro-antd/button';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { SFHorizontalLayoutSchema, SFRenderSchema } from './schema/ui';

export type SFValue = NzSafeAny;

export type SFLayout = 'horizontal' | 'vertical' | 'inline';

export type SFMode = 'default' | 'search' | 'edit';

export interface SFFormValueChange {
  path: string | null;
  pathValue: SFValue;
  value: SFValue;
}

export interface SFValueChange {
  /**
   * Always return complete data
   */
  value: SFValue;
  /**
   * Current triggered path
   */
  path: string | null;
  /**
   * Current path value
   */
  pathValue: SFValue;
}

export interface SFUpdateValueAndValidity {
  /**
   * 是否包含上级字段，默认：`false`
   */
  onlySelf?: boolean;
  /**
   * 是否触发值变更通知，默认：`true`
   */
  emitValueEvent?: boolean;
  /**
   * 是否触发校验，默认：`true`
   */
  emitValidator?: boolean;
  /**
   * 当前更新路径
   */
  updatePath?: string;
  /**
   * 当前更新路径对应值
   */
  updateValue?: SFValue | null;
}

export interface SFButton {
  /** 提交按钮文本，默认：`提交` */
  submit?: string;
  /** 提交按钮类型，默认：`primary` */
  submit_type?: NzButtonType;
  /** 提交按钮图标 */
  submit_icon?: SFButtonIcon;
  /** 重置按钮文本，`null `或 `undefined` 表示不需要该按钮，默认：`重置` */
  reset?: string;
  /** 重置按钮类型，默认：`default` */
  reset_type?: NzButtonType;
  /** 重置按钮图标 */
  reset_icon?: SFButtonIcon;
  /** 按钮样式，主要用于指定按钮 `grid`、`class` 属性 */
  render?: SFRenderButton;
  /** 搜索按钮文本，默认：`搜索` */
  search?: string;
  /** 编辑按钮文本，默认：`保存` */
  edit?: string;
}

export interface SFButtonIcon {
  /** 等同 `nz-icon` 的 `nzType` 值 */
  type?: string;
  /** 图标主题风格，默认：`outline` */
  theme?: 'outline' | 'twotone' | 'fill';
  /** 仅适用双色图标，设置双色图标的主要颜色，仅对当前 icon 生效 */
  twoToneColor?: string;
  /** 指定来自 IconFont 的图标类型 */
  iconfont?: string;
}

export interface SFRenderButton extends SFHorizontalLayoutSchema, SFRenderSchema {}

export interface SFIcon {
  type?: string;

  theme?: 'fill' | 'outline' | 'twotone';

  twotoneColor?: string;

  rotate?: number;

  spin?: boolean;

  iconfont?: string;
}
