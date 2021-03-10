export type LayoutDefaultHeaderItemHidden = 'pc' | 'mobile' | 'none';
export type LayoutDefaultHeaderItemDirection = 'left' | 'middle' | 'right';

export interface LayoutDefaultOptions {
  /**
   * Logo url of expanded status
   *
   * 展开时 Logo 地址
   */
  logoExpanded: string;
  /**
   * Logo url of collapsed status
   *
   * 收缩时 Logo 地址
   */
  logoCollapsed: string;
  /**
   * Hide the sidebar without showing the collapsed icon button
   *
   * 隐藏侧边栏，同时不显收缩图标按钮
   */
  hideAside?: boolean;
}
