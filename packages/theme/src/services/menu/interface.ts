export interface MenuIcon {
  /** Type for icon */
  type: 'class' | 'icon' | 'iconfont' | 'img';
  /** Value for the icon, can be set Class Name, nz-icon of `nzType`, image */
  value?: string;
  /** Type of the ant design icon, default: `outline` */
  theme?: 'outline' | 'twotone' | 'fill';
  /** Rotate icon with animation, default: `false` */
  spin?: boolean;
  /** Only support the two-tone icon. Specific the primary color */
  twoToneColor?: string;
  /** Type of the icon from iconfont */
  iconfont?: string;
  /** Rotate degrees */
  rotate?: number;
}

export interface Menu {
  [key: string]: any;
  /** Text of menu item, can be choose one of  `text` or `i18n` (Support HTML) */
  text?: string;
  /** I18n key of menu item, can be choose one of  `text` or `i18n` (Support HTML) */
  i18n?: string;
  /** Whether to display the group name, default: `true` */
  group?: boolean;
  /** Routing for the menu item, can be choose one of `link` or `externalLink` */
  link?: string;
  /** External link for the menu item, can be choose one of `link` or `externalLink` */
  externalLink?: string;
  /** Specifies `externalLink` where to display the linked URL */
  target?: '_blank' | '_self' | '_parent' | '_top';
  /** Icon for the menu item, only valid for the first level menu */
  icon?: string | MenuIcon | null;
  /** Badget for the menu item when `group` is `true` */
  badge?: number;
  /** Whether to display a red dot instead of `badge` value */
  badgeDot?: boolean;
  /** Badge [color](https://ng.ant.design/components/badge/en#nz-badge) */
  badgeStatus?: string;
  /** Whether disable for the menu item */
  disabled?: boolean;
  /** Whether hidden for the menu item */
  hide?: boolean;
  /** Whether hide in breadcrumbs, which are valid when the `page-header` component automatically generates breadcrumbs */
  hideInBreadcrumb?: boolean;
  /** ACL configuration, it's equivalent to `ACLService.can(roleOrAbility: ACLCanType)` parameter value */
  acl?:
    | number
    | number[]
    | string
    | string[]
    | {
        /**
         * 角色
         */
        role?: string[];
        /**
         * 权限点
         */
        ability?: number[] | string[];

        /**
         * 校验模式，默认：`oneOf`
         * - `allOf` 表示必须满足所有角色或权限点数组算有效
         * - `oneOf` 表示只须满足角色或权限点数组中的一项算有效
         */
        mode?: 'allOf' | 'oneOf';

        /**
         * 是否取反，即结果为 `true` 时表示未授权
         */
        except?: boolean;
      };
  /** Whether shortcut menu item */
  shortcut?: boolean;
  /** Wheter shortcut menu root node */
  shortcutRoot?: boolean;
  /** Whether to allow reuse, need to cooperate with the `reuse-tab` component */
  reuse?: boolean;
  /** Whether to expand, when `checkStrictly` is valid in `sidebar-nav` component */
  open?: boolean;
  /** Unique identifier of the menu item, can be used in `getItem`,` setItem` to update a menu */
  key?: string;
  /** Children menu of menu item */
  children?: Menu[];
  /** @inner Not recommended */
  _id?: number;
  /** @inner Not recommended */
  _parent?: Menu | null;
  /** @inner Not recommended */
  _depth?: number;
  /** @inner Not recommended */
  _hidden?: boolean;
  /** @inner Not recommended */
  _selected?: boolean;
  /** @inner Not recommended */
  _open?: boolean;
  /** @inner Not recommended */
  _aclResult?: boolean;
}
