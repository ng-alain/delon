export interface Menu {
    /** 文本 */
    text: string;
    /** i18n主键 */
    i18n?: string;
    /** 是否菜单组 */
    group?: boolean;
    /** angular 路由 */
    link?: string;
    /** 外部链接 */
    externalLink?: string;
    /** 链接 target */
    target?: '_blank' | '_self' | '_parent' | '_top';
    /** 图标 */
    icon?: string;
    /** 徽标数，展示的数字。（注：`group:true` 无效） */
    badge?: number;
    /** 徽标数，显示小红点 */
    badge_dot?: boolean;
    /** 徽标数，设置 Badge 颜色 （默认：error， 所有颜色值见：https://github.com/cipchk/ng-alain/blob/master/_documents/utils.md#色彩） */
    badge_status?: string;
    /** 是否隐藏菜单 */
    hide?: boolean;
    /** 隐藏面包屑，指 `pro-header` 组件的自动生成面包屑时有效 */
    hideInBreadcrumb?: boolean;
    /** ACL配置，若导入 `@delon/acl` 时自动有效 */
    acl?: any;
    /** 是否快捷菜单项 */
    shortcut?: boolean;
    /** 快捷菜单根节点 */
    shortcut_root?: boolean;
    /** 是否允许复用，需配合 `reuse-tab` 组件 */
    reuse?: boolean;
    /** 二级菜单 */
    children?: Menu[];
    /**
     * 菜单类型，无须指定由 Service 自动识别
     * 1：链接
     * 2：外部链接
     * 3：链接（子菜单）
     * @private
     */
    _type?: number;
    /**
     * 是否选中
     * @private
     */
    _selected?: boolean;
    /**
     * 是否隐藏菜单
     * @private
     */
    _hidden?: boolean;
    /**
     * 是否打开
     * @private
     */
    _open?: boolean;
    /**
     * @private
     */
    _depth?: number;

    [key: string]: any;
}
