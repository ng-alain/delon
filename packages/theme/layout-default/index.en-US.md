---
type: Theme
order: 100
title: Default Layout
---

The default layout all parameters are prefixed with `@alain-default-`.

## Usage

Import in `src/styles.less`:

```less
@import '~@delon/theme/layout-default/style/index';
```

## Layout description

In the upper-left-right layout mode, it is applied to the development of the **business page**. Its specification details:

+ Top area height `64px`（parameter：`@header-hg`）
+ Side area width `200px`（parameter：`@aside-wd`）
+ Hide side navigation when the screen is below `1140px` wide
+ Turn the side navigation to the `fixed` state when the screen is below `1140px` wide
+ Mainly includes a [sidebar-nav (click to view API)](/components/sidebar-nav) component

> Parameters are adjustable as needed by the `src/styles/theme.less` file.

**Top area**

location：*src/app/layout/base/header*

Scaffolding provides some regular top-level components by default, which are stored in the *components* directory. At the same time `@delon/abc` also provides several top components (eg：[notice-icon](/components/notice-icon) Notification menu component. You can build it yourself or develop it yourself based on the components provided.

> Scaffolding supports responsive layout. For the top area, you may need to hide some components under the small screen, so you can add `hidden-xs` to the corresponding DOM node to automatically hide when the screen is smaller than `768px`.

**Side area**

location：*src/app/layout/default/sidebar*

Only one user information and main menu are included. The main menu is a [sidebar-nav](/components/sidebar-nav) component. For details, please refer to [Business Components](/components/sidebar-nav).

**Internal area**

The content area is the business page area, the specification details：

+ Content distance page standard, side, right scroll bar, bottom, this margin is based on a standard Dashboard Gutter width `24px`.

## Parameters

| Name | Default | Description |
|------|---------|-------------|
| `@alain-default-prefix` | `.alain-default` | Style name prefix |
| `@alain-default-ease` | `cubic-bezier(.25, 0, .15, 1)` | Animation filter function |
| `@alain-default-header-hg` | `64px` | Height of header |
| `@alain-default-header-bg` | `@primary-color` | Background-color of header |
| `@alain-default-header-padding` | `@layout-gutter * 2` | Horizontal padding of header |
| `@alain-default-header-search-enabled` | `true` | Whether top search |
| `@alain-default-header-icon-fs` | `18px` | Font size of icon |
| `@alain-default-aside-wd` | `200px` | Width of aside |
| `@alain-default-aside-bg` | `#fff` | Background-color of aside |
| `@alain-default-aside-scrollbar-width` | `0` | Scrollbar width of aside |
| `@alain-default-aside-scrollbar-height` | `0` | Scrollbar height of aside |
| `@alain-default-aside-scrollbar-track-color` | `transparent` | Scrollbar track color of aside |
| `@alain-default-aside-scrollbar-thumb-color` | `transparent` | Scrollbar thumb color of aside |
| `@alain-default-aside-nav-fs` | `14px` | Font size of nav name |
| `@alain-default-aside-nav-icon-width` | `14px` | Width of nav icon |
| `@alain-default-aside-nav-img-wh` | `14px` | Width & height of nav image |
| `@alain-default-aside-nav-padding-top-bottom` | `@layout-gutter` | Vertical padding of nav |
| `@alain-default-aside-nav-item-height` | `38px` | Item height of nav |
| `@alain-default-aside-nav-text-color` | `rgba(0, 0, 0, 0.65)` | Nav text color |
| `@alain-default-aside-nav-text-hover-color` | `#108ee9` | Nav text hover color |
| `@alain-default-aside-nav-group-text-color` | `rgba(0, 0, 0, 0.43)` | Group text color |
| `@alain-default-aside-nav-selected-text-color` | `#108ee9` | Nav selected text color |
| `@alain-default-aside-nav-selected-bg` | `#fcfcfc` | Nav selected background color |
| `@alain-default-aside-collapsed-wd` | `@layout-gutter * 8` | Width of aside collapsed |
| `@alain-default-aside-collapsed-nav-fs` | `24px` | Font size of aside collapsed |
| `@alain-default-aside-collapsed-nav-img-wh` | `24px` | Width & height nav image of aside collapsed |
| `@alain-default-content-heading-bg` | `#fafbfc` | Heading background color of content area |
| `@alain-default-content-heading-border` | `#efe3e5` | Heading bottom border color of content area |
| `@alain-default-content-padding` | `@layout-gutter * 3` | Padding of content area |
| `@alain-default-content-bg` | `#f5f7fa` | Background color of content area |
| `@alain-default-widget-app-icons-enabled` | `true` | Whether the app-icon widget styles |
| `@alain-default-aside-user-enabled` | `true` | Whether the user styles of aside |

