---
type: Theme
order: 10
title: Default Layout
---

The default layout all parameters are prefixed with `@alain-default-`.

## Parameters

| Name | Default | Description |
| --- | --- | --- |
| `@prefix` | `.alain-default` | Style name prefix |
| `@ease` | `cubic-bezier(.25, 0, .15, 1)` | Animation filter function |
| `@header-hg` | `64px` | Height of header |
| `@header-bg` | `@primary-color` | Background-color of header |
| `@header-padding` | `@layout-gutter * 2` | Horizontal padding of header |
| `@header-search-enabled` | `true` | Whether top search |
| `@header-search-height` | `34px` | Height of top search |
| `@aside-wd` | `200px` | Width of aside |
| `@aside-bg` | `#fff` | Background-color of aside |
| `@aside-scrollbar-width` | `0` | Scrollbar width of aside |
| `@aside-scrollbar-height` | `0` | Scrollbar height of aside |
| `@aside-scrollbar-track-color` | `transparent` | Scrollbar track color of aside |
| `@aside-scrollbar-thumb-color` | `transparent` | Scrollbar thumb color of aside |
| `@aside-nav-fs` | `14px` | Font size of nav name |
| `@aside-nav-padding-top-bottom` | `@layout-gutter` | Vertical padding of nav |
| `@aside-nav-item-height` | `38px` | Item height of nav |
| `@aside-nav-text-color` | `rgba(0, 0, 0, 0.65)` | Nav text color |
| `@aside-nav-text-hover-color` | `#108ee9` | Nav text hover color |
| `@aside-nav-group-text-color` | `rgba(0, 0, 0, 0.43)` | Group text color |
| `@aside-nav-selected-text-color` | `#108ee9` | Nav selected text color |
| `@aside-nav-selected-bg` | `#fcfcfc` | Nav selected background color |
| `@aside-collapsed-wd` | `@layout-gutter * 8` |  Width of aside collapsed |
| `@aside-collapsed-nav-fs` | `24px` | Font size of aside collapsed |
| `@content-heading-bg` | `#fafbfc` |  Heading background color of content area |
| `@content-heading-border` | `#efe3e5` | Heading bottom border color of content area |
| `@content-padding` | `@layout-gutter * 3` | Padding of content area |
| `@content-bg` | `#f5f7fa` | Background color of content area |

## Usage

Import in `src/styles.less`:

```less
@import '~@delon/theme/styles/layout/default/index';
```
