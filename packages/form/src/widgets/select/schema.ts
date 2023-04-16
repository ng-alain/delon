import { TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzOptionComponent, NzSelectModeType } from 'ng-zorro-antd/select';

import { SFValue } from '../../interface';
import { SFSchemaEnum, SFSchemaEnumType } from '../../schema';
import { SFDLSSize, SFUISchemaItem } from '../../schema/ui';

export interface SFSelectWidgetSchema extends SFUISchemaItem {
  /**
   * 异步数据源
   */
  asyncData?: () => Observable<SFSchemaEnumType[]>;

  size?: SFDLSSize;

  /**
   * 在文字框中显示提示讯息
   */
  placeholder?: string;

  /**
   * 与 [SelectControlValueAccessor](https://angular.io/api/forms/SelectControlValueAccessor#caveat-option-selection) 相同
   */
  compareWith?: (o1: NzSafeAny, o2: NzSafeAny) => boolean;

  /**
   * 是否在选中项后清空搜索框，只在 `mode` 为 `multiple` 或 `tags` 时有效，默认：`true`
   */
  autoClearSearchValue?: boolean;

  /**
   * 支持清除，默认：`false`
   */
  allowClear?: boolean;

  /**
   * 是否无边框，默认：`false`
   */
  borderless?: boolean;

  /**
   * 默认获取焦点，默认：`false`
   */
  autoFocus?: boolean;

  /**
   * 下拉菜单的 className 属性
   */
  dropdownClassName?: string | string[];

  /**
   * 下拉菜单和选择器同宽，默认：`true`
   */
  dropdownMatchSelectWidth?: boolean;

  /**
   * 下拉菜单的 style 属性
   */
  dropdownStyle?: { [key: string]: string } | null;

  /**
   * 是否使用服务端搜索，当为 `true` 时，将不再在前端对 `nz-option` 进行过滤，默认：`false`
   */
  serverSearch?: boolean;

  /**
   * 最多选中多少个标签，默认：`Infinity`
   */
  maxMultipleCount?: number;

  /**
   * 设置 `nz-select` 的模式，`tags` 建议增加 `default: null`，否则可能会遇到初始化有一个空的标签
   */
  mode?: NzSelectModeType;

  /**
   * 当下拉列表为空时显示的内容
   */
  notFoundContent?: string;

  /**
   * 使单选模式可搜索，默认：`false`
   */
  showSearch?: boolean;

  /**
   * 搜索内容变化回调函数，参数为搜索内容，必须返回 `Promise` 对象
   */
  onSearch?: (text: string) => Promise<SFSchemaEnum[]>;

  /** 搜索抖动时间，默认：`300` */
  searchDebounceTime?: number;

  /** 搜索加载中文本 */
  searchLoadingText?: string;

  /**
   * 在 `tags` 和 `multiple` 模式下自动分词的分隔符
   */
  tokenSeparators?: string[];

  /**
   * 是否显示箭头，默认：单选为 `true`，多选为 `false`
   */
  showArrow?: boolean;

  /**
   * 最多显示多少个 tag
   */
  maxTagCount?: number;

  /**
   * 自定义选择框的Template内容
   */
  customTemplate?: TemplateRef<{ $implicit: NzOptionComponent }>;

  /**
   * 自定义的选择框后缀图标
   */
  suffixIcon?: TemplateRef<NzSafeAny> | string;

  /**
   * 自定义的多选框清除图标
   */
  removeIcon?: TemplateRef<NzSafeAny>;

  /**
   * 自定义的多选框清空图标
   */
  clearIcon?: TemplateRef<NzSafeAny>;

  /**
   * 自定义当前选中的条目图标
   */
  menuItemSelectedIcon?: TemplateRef<NzSafeAny>;

  /**
   * 隐藏 tag 时显示的内容
   */
  maxTagPlaceholder?: TemplateRef<{ $implicit: NzSafeAny[] }>;

  /**
   * 下拉菜单中每个 Option 的高度，默认：`32`
   */
  optionHeightPx?: number;

  /**
   * 下拉菜单中最多展示的 Option 个数，超出部分滚动，默认：`8`
   */
  optionOverflowSize?: number;

  /**
   * 自由扩展
   */
  dropdownRender?: TemplateRef<NzSafeAny>;

  /**
   * 选中的 `nz-option` 发生变化时，调用此函数
   */
  change?: (ngModel: SFValue | SFValue[], orgData: SFSchemaEnum | SFSchemaEnum[]) => void;

  /**
   * 下拉菜单打开关闭回调函数
   */
  openChange?: (status: boolean) => void;

  /**
   * 下拉菜单滚动到底部回调，可用于作为动态加载的触发条件
   */
  scrollToBottom?: () => void;
}
