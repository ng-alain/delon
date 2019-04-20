---
order: 30
title:
  en-US: Scaffold
  zh-CN: 脚手架结构
type: Basic
---

## Directory Structure

Schematic diagram of directory structure：

```
├── _mock                                       # Mock Data rule
├── src
│   ├── app
│   │   ├── core                                # Core module
│   │   │   ├── i18n
│   │   │   ├── net
│   │   │   │   └── default.interceptor.ts      # Default HTTP interceptor
│   │   │   ├── services
│   │   │   │   └── startup.service.ts          # Initialize project configuration
│   │   │   └── core.module.ts                  # Core module file
│   │   ├── layout                              # Core layout
│   │   ├── routes
│   │   │   ├── **                              # Business directory
│   │   │   ├── routes.module.ts                # Service routing module
│   │   │   └── routes-routing.module.ts        # Service routes registration
│   │   ├── shared                              # Shared module
│   │   │   └── shared.module.ts                # Shared module file
│   │   ├── app.component.ts                    # Root component
│   │   └── app.module.ts                       # Root module
│   │   └── delon.module.ts                     # @delon module import
│   ├── assets                                  # Local static resource
│   ├── environments                            # Environment variable configuration
│   ├── styles                                  # Style directory
└── └── style.less                              # Style guide entry
```

The following is a description and use of each directory and file.

**_mock**

The Mock data rules directory, if you create a project via [Command Line Tools](/cli), you can specify the `--mock` parameter to determine if the Mock function is required.

**src/app/core/core.module.ts**

The core module will only be imported once. Therefore, core service classes (eg, messages, data access, etc.) that are required for the entire ** business module should exist here.

**src/app/core/i18n**

[Internationalization](/docs/i18n) data loading and processing related classes. If you create a project via [Command Line Tool](/cli), you can specify the `-di` parameter to determine whether internationalization support is required.

**src/app/core/net**

The default interceptor, where you can handle request parameters, request exceptions, business exceptions, and so on.

**src/app/core/services/startup.service.ts**

Useful when you need to execute some remote data (eg application information, user information, etc.) before Angular launches.

> It is a simple method and returns a `Promise` object, unless Angular will abort the launch unless `resolve(null)` is explicitly executed.

**src/app/layout**

Layout file code, refer to the page structure section.

**src/app/routes**

Business module, all your business code will be here.

**src/app/shared/shared.module.ts**

The shared module means that some third-party modules, custom components, and custom instructions that you need to use for the entire business module should exist here.

**src/app/delon.module.ts**

For the @delon series of module import collections, all modules are imported by default, and you can use the [Optimization](/docs/performance) section to further optimize on demand.

**src/styles/_alain-custom-variables.less**

**[[Do not delete]]** You can adjust the default parameters of alain according to your needs.

**src/environments**

The application environment variable contains the following values:

- `SERVER_URL` All HTTP request prefixes
- `production` Whether the production environment
- `useHash` Whether the route is useHash mode

## Page structure

The overall layout refers to the outermost frame structure including navigation, sidebars, content areas, footers, and so on.

At the same time, in the internal area, the layout of the block, such as form, search box, list page, etc., is required. For this, NG-ZORRO has two layout schemes:
[Layout](https://ng.ant.design/#/components/layout) with [Grid](https://ng.ant.design/#/components/grid)。

Scaffolding provides three overall layout options by default:

| Type | Location | Description |
| ---- | -------- | ----------- |
| Base | [LayoutDefaultComponent](https://github.com/ng-alain/ng-alain/tree/master/src/app/layout/default) | - |
| Full screen | [LayoutFullScreenComponent](https://github.com/ng-alain/ng-alain/blob/master/src/app/layout/fullscreen) | - |
| User authorization | [LayoutPassportComponent](https://github.com/ng-alain/ng-alain/blob/master/src/app/layout/passport) | - |

### Basic layout

In the upper-left-right layout mode, it is applied to the development of the **business page**. Its specification details:

+ Top area height `64px`（parameter：`@header-hg`）
+ Side area width `200px`（parameter：`@aside-wd`）
+ Hide side navigation when the screen is below `1140px` wide
+ Turn the side navigation to the `fixed` state when the screen is below `1140px` wide
+ Mainly includes a [sidebar-nav (click to view API)](/components/sidebar-nav) component

> Parameters are adjustable as needed by the `src/styles/_alain-custom-variables.less` file.

**Top area**

location：*src/app/layout/default/header*

Scaffolding provides some regular top-level components by default, which are stored in the *components* directory. At the same time `@delon/abc` also provides several top components (eg：[notice-icon](/components/notice-icon) Notification menu component. You can build it yourself or develop it yourself based on the components provided.

> Scaffolding supports responsive layout. For the top area, you may need to hide some components under the small screen, so you can add `hidden-xs` to the corresponding DOM node to automatically hide when the screen is smaller than `768px`.

**Side area**

location：*src/app/layout/default/sidebar*

Only one user information and main menu are included. The main menu is a [sidebar-nav](/components/sidebar-nav) component. For details, please refer to [Business Components](/components/sidebar-nav).

**Internal area**

The content area is the business page area, the specification details：

+ Content distance page standard, side, right scroll bar, bottom, this margin is based on a standard Dashboard Gutter width `24px`.

### Full screen layout

Used for any top and side areas, typically for highly customizable pages such as large screen data.

### User authorization layout

Used for the `/passport/login` series of user related pages.

### Custom layout

If the provided layout does not meet your requirements, you will need to create a new Layout template yourself. Just define it in layout.module.ts.
