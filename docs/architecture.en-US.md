---
order: 20
title: Architecture
type: Basic
i18n: need-update
---

NG-ALAIN scaffold is a front-end solution to support middleware and back-end application. It is based on [Angular](https://angular.io/) and [ng-zorro-antd](https://ng.ant.design/docs/introduce/en)(Angular implementation of Ant Design). The scaffold includes a set of common functionalities and business component libraries. It reduces lots of infrastructure development overwhelmingly and let you focus on business logic development.

## Architecture Diagram

![](https://github.com/ng-alain/delon/raw/master/_screenshot/architecture.png | width=700)

**@delon/theme**

Theme library of scaffold, we publish the theme library to NPM, which extremely simplifies upgrade effort.

Theme library includes not only essential styles(CSS tool like bootstrap) required by NG-ALAIN, but also a set of common data rendering(Pipe) and service tools(page title, scroll bar, etc..), which are needed during daily development.

**@delon/abc**

Scaffold provides a default set of [business components](/components/), which abstract commonly used block/area in console service. We will continue to maintain and iterate the components. Provide more advanced abstract components than Ant Design base components to middleware and back-end business.

**@delon/chart**

[@delon/chart](/chart) chart library is customised based on G2. Providing commonly used chart suite in business development. It can be used alone or composed together to achieve more complex and fancy display effect.

**@delon/form**

[@delon/form](/form) follows standard of [JSON Schema](http://json-schema.org/) to build dynamic forms.

**@delon/auth**

[User Authentication](/auth) module is used for resolving steps to obtain, save and use authentication.

**@delon/acl**

[ACL](/acl) Access Control List is a very simple role based permission control. It can even reach the granularity of controlling the visibility of a button.

**@delon/cache**

Reduce the Http request by storing [cache](/cache) of the dictionary, city data, etc. into memory or persistence storage.

**@delon/mock**

[Mock](/mock) will intercept Angular HTTP request and return testing data.

**@delon/util**

[Daily Utilities](/util)。

**@delon/testing**

Commonly used testing suite.

**CLI Schematics**

[CLI Tool](/cli)

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
│   │   │   ├── shared-delon.module.ts          # @Delon/* import of secondary shared modules
│   │   │   ├── shared-zorro.module.ts          # NG-ZORRO import of secondary shared modules
│   │   │   └── shared.module.ts                # Shared module file
│   │   ├── app.component.ts                    # Root component
│   │   └── app.module.ts                       # Root module
│   │   └── global-config.module.ts             # @delon & ng-zorro global config
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

The shared module means that some third-party modules, custom components, and custom instructions that you need to use for the entire business module should exist here. In addition, for @delon & NG-ZORRO, two shared secondary module imports, `shared-delon.module.ts` and` shared-zorro.module.ts`.

**src/app/global-config.module.ts**

Global configuration for @delon & NG-ZORRO.

**src/environments**

The application environment variable contains the following values:

- `SERVER_URL` All HTTP request prefixes
- `production` Whether the production environment
- `useHash` Whether the route is useHash mode
