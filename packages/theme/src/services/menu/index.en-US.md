---
order: 2
title: MenuService
subtitle: Menu Service
type: Service
---

The data format is an array of [Menu](https://github.com/ng-alain/delon/blob/master/packages/theme/src/services/menu/interface.ts), where `text` text property muse be required, And it's not affected by external components (such as [sidebar-nav](/components/sidebar-nav)),

This is because menus it's essential part of the applications, And it can be used more effectively as a service, such as: dynamically generate navigation, title etc.

**Suggest:** Start up Angular ([startup.service.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/core/startup/startup.service .ts)) After get menu data from remote, call the `add()` method.

## API

### MenuService

| Method | Parameter | Description |
| ----- | --- | ---- |
| `add` | `items: Menu[]` | Setting menu data |
| `clear` | - | Clear menu data |
| `resume` | `callback: Funection` | Reset menu, may need call when I18N, user acl changed |
| `openedByUrl` | `url, recursive = false` | Set menu `_open` attribute by URL (`_open` expands the submenu) |
| `getPathByUrl` | `url, recursive = false` | Get menu list based on url |

**recursive**

Recursive upward find, for example, the menu data source contains `/ware`, then `/ware/1` is equivalent to `/ware`.

### Menu

Property | Description  | Type  | Default
----|------|-----|------
text | Text for the menu item, **required** | `string` | -
i18n | I18n key for the menu item text | `string` | -
group | Whether to display the group name | `boolean` | `true`
link | Routing for the menu item, Muse be choose `link` or `externalLink` | `string` | -
externalLink | External link for the menu item, Muse be choose `link` or `externalLink` | `string` | -
target | Link target value for external link | `_blank,_self,_parent,_top` | -
icon | Icon for the menu item, only valid for the first level menu | `string | MenuIcon` | -
badge | Badget for the menu item | `number` | -
badgeDot | Whether to display a red dot instead of `badge` value | `boolean` | -
badgeStatus | Badge [color](https://ng.ant.design/components/badge/en#nz-badge) | `string` | -
disabled | Whether disable for the menu item | `boolean` | `false`
hide | Whether hidden for the menu item | `boolean` | `false`
hideInBreadcrumb | Whether hide in breadcrumbs, which are valid when the `page-header` component automatically generates breadcrumbs | `boolean` | -
acl | ACL configuration, it's equivalent to `ACLService.can(roleOrAbility: ACLCanType)` parameter value | `any` | -
shortcut | Whether shortcut menu item | `boolean` | -
shortcutRoot | Wheter shortcut menu root node | `boolean` | -
reuse | Whether to allow reuse, need to cooperate with the `reuse-tab` component | `boolean` | -
children | Children for the menu item | `Menu[]` | -

### MenuIcon

Property | Description  | Type  | Default
----|------|-----|------
`[type]` | Type for icon | `class,icon,iconfont,img` | `icon`
`[value]` | Value for the icon, can be set Class Name, nz-icon of `nzType`, image | `string` | -
`[theme]` | Type of the ant design icon | `outline,twotone,fill` | `outline`
`[spin]` | Rotate icon with animation | `boolean` | `false`
`[twoToneColor]` | Only support the two-tone icon. Specific the primary color. | `string` | -
`[iconfont]` | Type of the icon from iconfont | `string` | -
