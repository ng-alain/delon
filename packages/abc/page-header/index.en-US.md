---
type: Layout
title: page-header
subtitle: Page Header
cols: 1
module: import { PageHeaderModule } from '@delon/abc/page-header';
---

The page header is used to declare the subject of the page and contains the most important information that the user is concerned about, so that the user can quickly understand what the current page and functions.

## API

### page-header

| Property | Description | Type | Default | Global Config |
|----------|-------------|------|---------|---------------|
| `[title]` | Title of the page | `string,TemplateRef<void>` | - | ✅ |
| `[autoTitle]` | Whether to automatically generate the title and locate it from the main menu with the current route | `boolean` | `true` | ✅ |
| `[syncTitle]` | Whether to automatically synchronize the title to `TitleService`, `ReuseService`, only valid when `title` is of type `string` | `boolean` | `true` | ✅ |
| `[home]` | Home page text of the breadcrumb, if empty is specified, it will not be displayed | `string` | `首页` | ✅ |
| `[homeLink]` | Home page link of the breadcrumb | `string` | `/` | ✅ |
| `[homeI18n]` | Home page i18n of the breadcrumb | `string` | - | ✅ |
| `[autoBreadcrumb]` | Whether to automatically generate navigation, use the current route to locate from the main menu | `boolean` | `true` | ✅ |
| `[recursiveBreadcrumb]` | Search automatically upward recursively, if the menu data source contains `/ware`, then `/ware/1` is also regarded as `/ware` item | `boolean` | `false` | ✅ |
| `[loading]` | Whether loading | `boolean` | `false` | - |
| `[wide]` | Whether wide | `boolean` | `false` | - |
| `[fixed]` | Whether fixed mode | `boolean` | `false` | ✅ |
| `[fixedOffsetTop]` | Fixed offset of the fixed mode | `number` | `64` | ✅ |
| `[breadcrumb]` | Custom navigation area | `TemplateRef<void>` | - | - |
| `[logo]` | Custom LOGO area | `TemplateRef<void>` | - | - |
| `[action]` | Custom action area | `TemplateRef<void>` | - | - |
| `[content]` | Custom content area | `TemplateRef<void>` | - | - |
| `[extra]` | Customize extra information area | `TemplateRef<void>` | - | - |
| `[tab]` | Custom tab area | `TemplateRef<void>` | - | - |

## FAQ

### Automatically generated navigation

By default, the navigation is automatically generated based on the menu data. Sometimes you may want to hide the menu data of a certain node, you can specify the menu `hideInBreadcrumb: true`.

### Fixed mode

The fixed mode will override the reuse-tab component during scrolling.
