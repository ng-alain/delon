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

| Method | Parameter | Description |
| ----- | --- | ---- |
| `add` | `items: Menu[]` | Setting menu data |
| `clear` | - | Clear menu data |
| `resume` | `callback: Funection` | Reset menu, may need call when I18N, user acl changed |
| `openedByUrl` | `url, recursive = false` | Set menu `_open` attribute by URL (`_open` expands the submenu) |
| `getPathByUrl` | `url, recursive = false` | Get menu list based on url |

**recursive**

Recursive upward find, for example, the menu data source contains `/ware`, then `/ware/1` is equivalent to `/ware`.
