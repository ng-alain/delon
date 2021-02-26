import { TemplateRef } from '@angular/core';
import { NzFormatEmitEvent, NzTreeNode, NzTreeNodeOptions } from 'ng-zorro-antd/core/tree';
import { NgStyleInterface, NzSizeLDSType } from 'ng-zorro-antd/core/types';
import { Observable } from 'rxjs';
import { SFSchemaEnum, SFSchemaEnumType } from '../../schema';
import { SFUISchemaItem } from '../../schema/ui';

export interface SFTreeSelectWidgetSchema extends SFUISchemaItem {
  /**
   * 异步数据源
   */
  asyncData?: () => Observable<SFSchemaEnumType[]>;

  size?: NzSizeLDSType;

  placeholder?: string;

  /**
   * 支持清除，默认：`false`
   */
  allowClear?: boolean;

  /**
   * 下拉菜单和选择器同宽，默认：`true`
   */
  dropdownMatchSelectWidth?: boolean;

  /**
   * 下拉菜单的 style 属性
   */
  dropdownStyle?: NgStyleInterface;

  /**
   * 下拉菜单的 className 属性
   */
  dropdownClassName?: string;

  /**
   * 支持多选（当设置 `checkable` 时自动变为true），默认：`false`
   */
  multiple?: boolean;

  /**
   * 搜索隐藏未匹配的节点，默认：`false`
   */
  hideUnMatched?: boolean;

  /**
   * 节点前添加 Checkbox 复选框，默认：`false`
   */
  checkable?: boolean;

  /**
   * checkable 状态下节点选择完全受控（父子节点选中状态不再关联），默认：`false`
   */
  checkStrictly?: boolean;

  /**
   * 是否展示 TreeNode title 前的图标，没有默认样式，默认：`false`
   */
  showIcon?: boolean;

  /**
   * 节点前添加展开图标，默认：`true`
   */
  showExpand?: boolean;

  /**
   * 节点前添加展开图标，默认：`false`
   */
  showLine?: boolean;

  /**
   * 默认展开所有树节点，默认：`false`
   */
  defaultExpandAll?: boolean;

  /**
   * 当下拉列表为空时显示的内容
   */
  notFoundContent?: string;

  /**
   * 默认展开指定的树节点
   */
  expandedKeys?: string[];

  /**
   * 最多显示多少个 tag
   */
  maxTagCount?: number;

  /**
   * 隐藏 tag 时显示的内容
   */
  maxTagPlaceholder?: TemplateRef<{ $implicit: NzTreeNode[] }> | null;

  /**
   * 自定义节点
   */
  treeTemplate?: TemplateRef<{ $implicit: NzTreeNode; origin: NzTreeNodeOptions }>;

  /**
   * The size of the items in the list, same as [cdk itemSize](https://material.angular.io/cdk/scrolling/api), Default: `28`
   */
  virtualItemSize?: number;

  /**
   *  The number of pixels worth of buffer to render for when rendering new items, same as [cdk maxBufferPx](https://material.angular.io/cdk/scrolling/api), Default: `28`
   */
  virtualMaxBufferPx?: number;

  /**
   * The minimum amount of buffer rendered beyond the viewport (in pixels),same as [cdk minBufferPx](https://material.angular.io/cdk/scrolling/api), Default: `28`
   */
  virtualMinBufferPx?: number;

  /**
   * The height of virtual scroll
   */
  virtualHeight?: string | null;

  /**
   * 如何在输入框显示所选的节点值的方法
   */
  displayWith?: (node: NzTreeNode) => string | undefined;

  /**
   * 点击展开树节点图标调用
   */
  expandChange?: (e: NzFormatEmitEvent) => Observable<SFSchemaEnum[]>;
}
