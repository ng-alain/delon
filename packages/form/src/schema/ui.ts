import { TemplateRef } from '@angular/core';

import type { ACLCanType } from '@delon/acl';
import type { NgClassType, NgStyleInterface, NzSafeAny, NzSizeLDSType } from 'ng-zorro-antd/core/types';

import type { ErrorSchema } from '../errors';
import type { SFValue } from '../interface';
import type { FormProperty } from '../model/form.property';

export type SFPlacement =
  | 'top'
  | 'left'
  | 'right'
  | 'bottom'
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight'
  | 'leftTop'
  | 'leftBottom'
  | 'rightTop'
  | 'rightBottom';

export type SFTrigger = 'click' | 'focus' | 'hover';

export type SFLSSize = 'large' | 'small';

export type SFDLSSize = NzSizeLDSType;

export interface SFGridSizeSchema {
  span?: number | null;
  order?: number | null;
  offset?: number | null;
  push?: number | null;
  pull?: number | null;
}

export interface SFGridSchema {
  /**
   * 栅格间隔
   */
  gutter?: number | null;
  /**
   * 栅格占位格数，为 `0` 时相当于 `display: none`
   */
  span?: number | null;
  /**
   * 数组索引栅格占位格数，为 `0` 时相当于 `display: none`，限 `type: 'array'` 时有效
   */
  arraySpan?: number | null;
  /**
   * 栅格左侧的间隔格数，间隔内不可以有栅格
   */
  offset?: number | null;
  xs?: number | SFGridSizeSchema;
  sm?: number | SFGridSizeSchema;
  md?: number | SFGridSizeSchema;
  lg?: number | SFGridSizeSchema;
  xl?: number | SFGridSizeSchema;
  xxl?: number | SFGridSizeSchema;
}

export type SFBuiltInWidgets =
  | 'text'
  | 'string'
  | 'number'
  | 'integer'
  | 'date'
  | 'time'
  | 'radio'
  | 'checkbox'
  | 'boolean'
  | 'textarea'
  | 'select'
  | 'tree-select'
  | 'tag'
  | 'upload'
  | 'transfer'
  | 'slider'
  | 'rate'
  | 'autocomplete'
  | 'cascader'
  | 'mention'
  | 'custom'
  | 'array'
  | 'object';

export interface SFRenderSchema {
  /**
   * 指定采用什么小部件渲染，所有小部件名可[查阅文档](https://ng-alain.com/)
   */
  widget?: SFBuiltInWidgets | (string & {});
  /**
   * 自定义类，等同 `[ngClass]` 值
   */
  class?: NgClassType;
  /**
   * 元素组件大小
   */
  size?: SFDLSSize;
  /**
   * 指定宽度，单位：`px`
   */
  width?: number;
  /**
   * 响应式属性
   */
  grid?: SFGridSchema;
  /**
   * 标签可选信息
   */
  optional?: string;
  /**
   * 标签可选帮助，使用 `nz-tooltip` 展示
   */
  optionalHelp?: string | SFOptionalHelp;
}

export interface SFOptionalHelp {
  text?: string;
  i18n?: string;
  /** 文字提示背景颜色 */
  bgColor?: string;
  /** 图标，默认：`question-circle` */
  icon?: string;
  placement?: SFPlacement;
  trigger?: SFTrigger;
  mouseEnterDelay?: number;
  mouseLeaveDelay?: number;
  overlayClassName?: string;
  overlayStyle?: NgStyleInterface;
}

export interface SFHorizontalLayoutSchema {
  /**
   * `label` 栅格占位格数，默认：`5`
   * - `0` 时相当于 `display: none`
   * - 限 `horizontal` 水平布局有效
   */
  spanLabel?: number | null;

  /**
   * `control` 栅格占位格数，默认：`19`
   * - `0` 时相当于 `display: none`
   * - 限 `horizontal` 水平布局有效
   */
  spanControl?: number | null;

  /**
   * `control` 栅格左侧的间隔格数，间隔内不可以有栅格
   * - 限 `horizontal` 水平布局有效
   */
  offsetControl?: number | null;

  /**
   * `label` 固定宽度
   * - 限 `horizontal` 水平布局有效
   */
  spanLabelFixed?: number | null;
}

export interface SFSchemaI18n {
  /**
   * 指 `schema.title` 的国际化键值
   */
  i18n?: string;
  /**
   * 对应 `schema.description` 国际化
   */
  descriptionI18n?: string;
}

export interface SFVisibleIfReturn {
  show?: boolean;
  required?: boolean;
}

export interface SFVisibleIf {
  [key: string]: NzSafeAny[] | ((value: SFValue, property: FormProperty) => boolean | SFVisibleIfReturn | null);
}

/** 指定如何渲染 `Schema` */
export interface SFUISchemaItem extends SFRenderSchema, SFHorizontalLayoutSchema, ErrorSchema, SFSchemaI18n {
  [key: string]: NzSafeAny;

  /**
   * Whether to enable the debug mode, the trust information will be printed out when the data is changed and verified, it is not recommended to use it in the production environment
   *
   * 是否开启调试模式，在数据变更、校验会打印出相信信息，不建议在生产环境中使用
   */
  debug?: boolean;

  /**
   * Order of property
   *
   * 属性顺序，当你只想某几个属性靠前时，则允许使用通配符 `*` 来表示剩余部分，且只允许出现一次
   *
   * @example
   *
   * [ 'a', 'b', 'c', 'd' ] + [ 'c', 'b', '*' ] = [ 'c', 'b', 'a', 'd']
   */
  order?: string[];
  /**
   * Whether to hide
   *
   * 是否隐藏
   */
  hidden?: boolean;
  /**
   * Is visible with conditions (When there are multiple, you can specify logic vis `visibleIfLogical`)
   *
   * 指定条件时才显示（当多个时可以通过 `visibleIfLogical` 来指定处理逻辑），但需要**注意**：
   * - 键值表示监听对象属性名
   * - JSON Schema 校验是各属性独立运行，监听对象属性每一次值变化都会重新做一次整个JSON结构计算
   *
   * 有效格式包括：
   * - `visibleIf: { shown: [ true ] }`：当 `shown: true` 时才显示当前属性
   * - `visibleIf: { shown: [ '$ANY$' ] }`：当 `shown` 包括任意值时
   * - `visibleIf: { shown: (value: any, property: FormProperty) => value > 0 }`：复杂表达式
   */
  visibleIf?: SFVisibleIf;

  /**
   * The logical used when specifying multiple `visibleIf`, default: `or`
   *
   * 指定多个 `visibleIf` 时采用的逻辑关系，默认：`or`
   */
  visibleIfLogical?: 'or' | 'and';

  /**
   * ACL 配置
   */
  acl?: ACLCanType | null;
}

/**
 * UI Schema，KEY名**务必**是 `$` 开头（例如：`$name`、`$id`），以便能区分KEY值还是UI选项
 * - 结构层级应同 `SFSchema` 一致
 * - 当KEY为 `*` 时表示对所有子表单元素都有效
 */
export interface SFUISchema {
  [key: string]: SFUISchemaItem | SFUISchemaItemRun;
}

/**
 * @inner
 */
export interface SFUISchemaItemRun extends SFUISchemaItem {
  /** @internal 自定义模板 */
  _render?: TemplateRef<void>;
  /** @internal 是否必填 */
  _required?: boolean;
}
