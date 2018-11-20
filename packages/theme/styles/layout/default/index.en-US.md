---
type: Theme
order: 100
title: Default Layout
---

The default layout all parameters are prefixed with `@alain-default-`.

## Parameters

| Name | Default | Description |
| --- | --- | --- |
| `@alain-default-prefix` | `.alain-default` | Style name prefix |
| `@alain-default-ease` | `cubic-bezier(.25, 0, .15, 1)` | Animation filter function |
| `@alain-default-header-hg` | `64px` | Height of header |
| `@alain-default-header-bg` | `@primary-color` | Background-color of header |
| `@alain-default-header-padding` | `@layout-gutter * 2` | Horizontal padding of header |
| `@alain-default-header-search-enabled` | `true` | Whether top search |
| `@alain-default-header-search-height` | `34px` | Height of top search |
| `@alain-default-aside-wd` | `200px` | Width of aside |
| `@alain-default-aside-bg` | `#fff` | Background-color of aside |
| `@alain-default-aside-scrollbar-width` | `0` | Scrollbar width of aside |
| `@alain-default-aside-scrollbar-height` | `0` | Scrollbar height of aside |
| `@alain-default-aside-scrollbar-track-color` | `transparent` | Scrollbar track color of aside |
| `@alain-default-aside-scrollbar-thumb-color` | `transparent` | Scrollbar thumb color of aside |
| `@alain-default-aside-nav-fs` | `14px` | Font size of nav name |
| `@alain-default-aside-nav-icon-width`          | `14px`                         | Width of nav icon     |
| `@alain-default-aside-nav-img-wh`              | `14px`                         | Width & height of nav image |
| `@alain-default-aside-nav-padding-top-bottom` | `@layout-gutter` | Vertical padding of nav |
| `@alain-default-aside-nav-item-height` | `38px` | Item height of nav |
| `@alain-default-aside-nav-text-color` | `rgba(0, 0, 0, 0.65)` | Nav text color |
| `@alain-default-aside-nav-text-hover-color` | `#108ee9` | Nav text hover color |
| `@alain-default-aside-nav-group-text-color` | `rgba(0, 0, 0, 0.43)` | Group text color |
| `@alain-default-aside-nav-selected-text-color` | `#108ee9` | Nav selected text color |
| `@alain-default-aside-nav-selected-bg` | `#fcfcfc` | Nav selected background color |
| `@alain-default-aside-collapsed-wd` | `@layout-gutter * 8` |  Width of aside collapsed |
| `@alain-default-aside-collapsed-nav-fs` | `24px` | Font size of aside collapsed |
| `@alain-default-aside-collapsed-nav-img-wh` | `24px` | Width & height nav image of aside collapsed |
| `@alain-default-content-heading-bg` | `#fafbfc` |  Heading background color of content area |
| `@alain-default-content-heading-border` | `#efe3e5` | Heading bottom border color of content area |
| `@alain-default-content-padding` | `@layout-gutter * 3` | Padding of content area |
| `@alain-default-content-bg` | `#f5f7fa` | Background color of content area |

## Usage

Import in `src/styles.less`:

```less
@import '~@delon/theme/styles/layout/default/index';
```
