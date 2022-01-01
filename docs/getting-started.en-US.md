---
order: 10
title: Getting Started
type: Basic
i18n: need-update
---

## Foreword

NG-ALAIN is a production-ready solution for admin interfaces. Built on the design principles developed by [Ant Design](https://ant.design/), this project introduces higher level components; we have developed templates, components, and a corresponding design kit to improve the user and development experience for admin interfaces.

**How to read document**

This document uses the following conventions:

- API
  - `[]` Input Property
  - `()` Output Event
  - `[()]` Two-way binding
  - `ng-content` Component content placeholders
  - `#tpl` Refers `<ng-template #tpl></ng-template>`

## Preparation

You will need [node](http://nodejs.org/) and [git](https://git-scm.com/). The project is based on [Typescript](https://www.tslang.com/), [Angular](https://angular.io/), [g2](http://g2.alipay.com/), [@delon](https://github.com/ng-alain/delon) and [ng-zorro-antd](https://ng.ant.design/). It would be helpful if you have pre-existing knowledge on those.

## Installation

### CLI (Recommend)

Please make sure global Angular Cli is latest version via `ng version` command, please refer to [CLI Command Reference](https://angular.io/cli) for how to upgrade.

```bash
yarn global add @angular/cli
ng new my-project --style less --routing --package-manager yarn
cd my-project
ng add ng-alain
yarn start
# Or use HMR mode by: yarn run hmr
```

> Please refer to [Schematics](/cli) for more details.

### Clone the Git Repository

```bash
git clone --depth=1 https://github.com/ng-alain/ng-alain.git my-project
cd my-project
yarn
yarn start
# Or use HMR mode by: yarn run hmr
```

> Note: Installing with the CLI is a clean scaffolding; using clone the git repository include all example pages.

## Scaffolding

NG-ALAIN is a standard Angular CLI project that includes common routes for admins and demonstrates our component library. The project layout is as follows:

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

## Development

```bash
yarn start
```

This will automatically open [http://localhost:4200](http://localhost:4200). If you see the following page then you have succeeded.

![](./assets/screenshot/desktop.png | width=700)

## Environment Support

- **Limited by Angular, no longer supports IE**
- Modern browsers, [Browser support](https://angular.io/guide/browser-support)
- Server-side Rendering
- [Electron](https://electron.atom.io/)

| [<img src="https://img.alicdn.com/tfs/TB1G5ewZuL2gK0jSZPhXXahvXXa-48-48.png" alt="IE / Edge" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges//)<br>IE / Edge | [<img src="https://img.alicdn.com/tfs/TB1Dx73o79l0K4jSZFKXXXFjpXa-48-48.png" alt="Firefox" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://img.alicdn.com/tfs/TB1mY9FZrr1gK0jSZFDXXb9yVXa-48-48.png" alt="Chrome" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://img.alicdn.com/tfs/TB1Vas5o79l0K4jSZFKXXXFjpXa-48-48.png" alt="Safari" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)<br>Safari | [<img src="https://img.alicdn.com/tfs/TB12EmNZET1gK0jSZFrXXcNCXXa-48-48.png" alt="Opera" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)<br>Opera | [<img src="https://img.alicdn.com/tfs/TB1TMW8paNj0u4jSZFyXXXgMVXa-48-48.png" alt="Electron" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)<br>Electron |
| --- | --- | --- | --- | --- | --- |
| Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## Contributing

Please read our [CONTRIBUTING.md](/docs/contributing) first.

If you'd like to help us improve NG-ZORRO, just create a [Pull Request](https://github.com/ng-alain/ng-alain/pulls). Feel free to report bugs and issues [here](https://github.com/ng-alain/ng-alain/issues).

> If you're new to posting issues, we ask that you read [*How To Ask Questions The Smart Way*](http://www.catb.org/~esr/faqs/smart-questions.html)(This guide does not provide actual support services for this project!) and [How to Ask a Question in Open Source Community](https://github.com/seajs/seajs/issues/545) and [How to Report Bugs Effectively](http://www.chiark.greenend.org.uk/~sgtatham/bugs.html) prior to posting. Well written bug reports help us help you!

## Need Help?

For questions on how to use ng-alain, please post questions to [![Stack Overflow](https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/so/so-logo.svg | width=140)](https://stackoverflow.com/questions/tagged/ng-alain) using the `ng-alain` tag.

As always, we encourage experienced users to help those who are not familiar with `ng-alain`!

## DONATE

If you would like to [![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.me/cipchk)
 to NG-ALAIN.
