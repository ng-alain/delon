---
type: Business
title: sidebar-nav
subtitle: Sidebar
cols: 1
module: SidebarNavModule
---

NG-ALAIN The left main menu depends on `@delon/theme`.

The component data comes from `MenuService` (which is structured as [Menu](/theme/menu#Menu)), and the operation of `MenuService` is auto synchronized to the component.

## FAQ

### Why are there two shortcut menus?

The shortcut menu generation rules are uniformly searched under the `0` index，and get in the following order:

1. [Recommended] children have `shortcutRoot: true` which is the highest priority
2. Otherwise, find the link with the word [dashboard], if it exists, create a shortcut entry below the menu.
3. Otherwise placed at the 0 node position

Therefore, it's recommended to keep a valid `shortcutRoot: true` data under the `0` index of the menu data.

### About hide

**Hide main menu item**

You can set `hide: true` in the menu.

**Hide auto-generated navigation hide breadcrumbs**

You can set `hideInBreadcrumb: true` in the menu.

## API

### sidebar-nav

Property | Description | Type | Default
----|------|-----|------
`[disabledAcl]` | Displayed `disabled` state when `acl` check fails. | `boolean` | `false`
`[autoCloseUnderPad]` | When the route width is less than the Pad width, the sidebar is automatically closed. | `boolean` | `true`
`[recursivePath]` | Automatic up recursive lookup, menu data source contains `/ware`, then `/ware/1` is also treated as `/ware` | `boolean` | `true`
`[openStrictly]` | Precise check open status, does not auto closed other open item | `boolean` | `false`
`(select)` | Callback when clicking menu (including `disabled`) | `EventEmitter<Menu>` | -
