import { Menu } from '@delon/theme';

export interface Nav extends Menu {
  /**
   * 菜单类型，无须指定由 Service 自动识别
   * 1：链接
   * 2：外部链接
   * 3：链接（子菜单）
   */
  _type?: number;
  /**
   * 是否选中
   */
  _selected?: boolean;
  /**
   * 是否隐藏菜单
   */
  _hidden?: boolean;
  /**
   * 是否打开
   */
  _open?: boolean;

  _depth?: number;

  [key: string]: any;
}
