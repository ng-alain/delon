import { NzFormatEmitEvent, NzTreeNode } from 'ng-zorro-antd/core/tree';
import { Observable } from 'rxjs';
import { SFSchemaEnum, SFSchemaEnumType } from '../../schema';
import { SFDLSSize, SFUISchemaItem } from '../../schema/ui';

export interface SFTreeSelectWidgetSchema extends SFUISchemaItem {
  /**
   * 异步数据源
   */
  asyncData?: () => Observable<SFSchemaEnumType[]>;

  size?: SFDLSSize;

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
  dropdownStyle?: object;

  /**
   * 支持多选（当设置 `checkable` 时自动变为true），默认：`false`
   */
  multiple?: boolean;

  /**
   * 节点前添加 Checkbox 复选框，默认：`false`
   */
  checkable?: boolean;

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
   * 如何在输入框显示所选的节点值的方法
   */
  displayWith?: (node: NzTreeNode) => string | undefined;

  /**
   * 点击展开树节点图标调用
   */
  expandChange?: (e: NzFormatEmitEvent) => Observable<SFSchemaEnum[]>;
}
