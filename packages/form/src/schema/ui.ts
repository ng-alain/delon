// tslint:disable:no-any
import { TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';

import { ErrorSchema } from '../errors';
import { SFSchemaEnumType } from './index';

export interface SFGridSizeSchema {
  span?: number;
  order?: number;
  offset?: number;
  push?: number;
  pull?: number;
}

export interface SFGridSchema {
  /**
   * 栅格间隔
   */
  gutter?: number;
  /**
   * 栅格占位格数，为 `0` 时相当于 `display: none`
   */
  span?: number;
  /**
   * 数据栅格占位格数，为 `0` 时相当于 `display: none`
   */
  arraySpan?: number;
  /**
   * 栅格左侧的间隔格数，间隔内不可以有栅格
   */
  offset?: number;
  xs?: number | SFGridSizeSchema;
  sm?: number | SFGridSizeSchema;
  md?: number | SFGridSizeSchema;
  lg?: number | SFGridSizeSchema;
  xl?: number | SFGridSizeSchema;
  xxl?: number | SFGridSizeSchema;
}

export interface SFRenderSchema {
  /**
   * 指定采用什么小部件渲染，所有小部件名可[查阅文档](https://ng-alain.com/)
   */
  widget?: string;
  /**
   * 自定义类，等同 `[ngClass]` 值
   */
  class?: string | string[];
  /**
   * 元素组件大小
   */
  size?: 'default' | 'large' | 'small';
  /**
   * 指定宽度，单位：`px`
   */
  width?: number;
  /**
   * 响应式属性
   */
  grid?: SFGridSchema;
  /** 标签可选信息 */
  optional?: string;
  /** 标签可选帮助，使用 `nz-tooltip` 展示 */
  optionalHelp?: string;
}

export interface SFHorizontalLayoutSchema {
  /**
   * `label` 栅格占位格数，默认：`5`
   * - `0` 时相当于 `display: none`
   * - 限 `horizontal` 水平布局有效
   */
  spanLabel?: number;

  /**
   * `control` 栅格占位格数，默认：`19`
   * - `0` 时相当于 `display: none`
   * - 限 `horizontal` 水平布局有效
   */
  spanControl?: number;

  /**
   * `control` 栅格左侧的间隔格数，间隔内不可以有栅格
   * - 限 `horizontal` 水平布局有效
   */
  offsetControl?: number;

  /**
   * `label` 固定宽度
   * - 限 `horizontal` 水平布局有效
   */
  spanLabelFixed?: number;
}

export interface SFArraySchema {
  /** **限array** 指定添加按钮文本，默认：添加 */
  addTitle?: string;

  /** **限array** 指定添加按钮风格，等同按钮 `nzType`，默认：dashed */
  addType?: string;

  /** **限array** 指定是否显示移除按钮 */
  removable?: boolean;

  /** **限array** 指定移除按钮文本，默认：移除 */
  removeTitle?: string;

  /** **限array** 指定是否显示排序按钮 */
  // orderable?: boolean;
}

export interface SFInputSchema {
  /**
   * **限string** 指定 `input` 的 `type` 值，默认为：`text`
   */
  type?: string;
  /**
   * **限string** 文字框中显示提示信息
   */
  placeholder?: string | string[];

  /**
   * **限string** 加载时是否获得焦点
   */
  autofocus?: boolean;
}

export interface SFDataSchema {
  /**
   * 异步静态数据源
   * - `input` 可能根据不同部件的情况存在值，例如：`autocomplete` 表示当前键入的值
   * - 参数、返回值：可能根据不同部件需求而定，具体参阅相应小部件独立说明
   */
  asyncData?: (input?: any) => Observable<SFSchemaEnumType[]>;
}

/** 指定如何渲染 `Schema` */
export interface SFUISchemaItem
  extends SFRenderSchema,
  SFArraySchema,
  SFHorizontalLayoutSchema,
  SFDataSchema,
  SFInputSchema,
  ErrorSchema {
  [key: string]: any;

  /** 是否开启调试模式，在数据变更、校验会打印出相信信息，不建议在生产环境中使用 */
  debug?: boolean;

  /**
   * 属性顺序
   *
   * 当你只想某几个属性靠前时，则允许使用通配符 `*` 来表示剩余部分，且只允许出现一次
   *
   * @example
   *
   * [ 'a', 'b', 'c', 'd' ] + [ 'c', 'b', '*' ] = [ 'c', 'b', 'a', 'd']
   */
  order?: string[];
  /**
   * 是否隐藏
   */
  hidden?: boolean;
  /**
   * 指定条件时才显示，但需要**注意**：
   * - 键值表示监听对象属性名
   * - JSON Schema 校验是各属性独立运行，监听对象属性每一次值变化都会重新做一次整个JSON结构计算
   *
   * 有效格式包括：
   * - `visibleIf: { shown: [ true ] }`：当 `shown: true` 时才显示当前属性
   * - `visibleIf: { shown: [ '$ANY$' ] }`：当 `shown` 包括任意值时
   * - `visibleIf: { shown: (value: any) => value > 0 }`：复杂表达式
   */
  visibleIf?: { [key: string]: any[] | ((value: any) => boolean) };
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
 * 内部运行时使用
 */
export interface SFUISchemaItemRun extends SFUISchemaItem {
  /** @internal 自定义模板 */
  _render?: TemplateRef<void>;
  /** @internal 是否必填 */
  _required?: boolean;
}
