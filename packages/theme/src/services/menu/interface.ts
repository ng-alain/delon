export interface MenuIcon {
  type: 'class' | 'icon' | 'iconfont' | 'img';
  /** 值，包含：类名、图标 `type`、图像 */
  value?: string;
  /** 图标主题风格，默认：`outline` */
  theme?: 'outline' | 'twotone' | 'fill';
  /** 是否有旋转动画，默认：`false` */
  spin?: boolean;
  /** 仅适用双色图标，设置双色图标的主要颜色，仅对当前 icon 生效 */
  twoToneColor?: string;
  /** 指定来自 IconFont 的图标类型 */
  iconfont?: string;
}

export interface Menu {
  [key: string]: any;
  /** 文本 */
  text: string;
  /** i18n主键 */
  i18n?: string;
  /** 是否显示分组名，默认：`true` */
  group?: boolean;
  /** 路由 */
  link?: string;
  /**
   * @deprecated
   * 路由是否精准匹配，默认：`false`，see:
   * - [#344](https://github.com/ng-alain/ng-alain/issues/344)
   * - [RouterLinkActive](https://angular.io/api/router/RouterLinkActive#routerLinkActiveOptions)
   */
  linkExact?: boolean;
  /** 外部链接 */
  externalLink?: string;
  /** 链接 target */
  target?: '_blank' | '_self' | '_parent' | '_top';
  /** 图标 */
  icon?: string | MenuIcon | null;
  /** 徽标数，展示的数字。（注：`group:true` 无效） */
  badge?: number;
  /** 徽标数，显示小红点 */
  badgeDot?: boolean;
  /** 徽标 Badge 颜色 （默认：error， 所有颜色值见：https://github.com/ng-alain/ng-alain/blob/master/_documents/utils.md#色彩） */
  badgeStatus?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否隐藏菜单 */
  hide?: boolean;
  /** 隐藏面包屑，指 `page-header` 组件的自动生成面包屑时有效 */
  hideInBreadcrumb?: boolean;
  /** ACL配置，若导入 `@delon/acl` 时自动有效，等同于 `ACLService.can(roleOrAbility: ACLCanType)` 参数值 */
  acl?: any;
  /** 是否快捷菜单项 */
  shortcut?: boolean;
  /** 快捷菜单根节点 */
  shortcutRoot?: boolean;
  /** 是否允许复用，需配合 `reuse-tab` 组件 */
  reuse?: boolean;
  /** 是否展开，当设置 `checkStrictly` 时有效 */
  open?: boolean;
  /** 二级菜单 */
  children?: Menu[];
}
