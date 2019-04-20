---
order: 10
title: Getting Started
type: Basic
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

Please make sure global Angular Cli is latest version via `ng version` command (Currently <img src="https://img.shields.io/npm/v/@angular/cli.svg?style= Flat-square" alt="npm">), please refer to [CLI Command Reference](https://angular.cn/cli) for how to upgrade.

```bash
ng new my-project --style less
cd my-project
ng add ng-alain
npm start
```

> Please refer to [Schematics](/cli) for more details.

### Clone the Git Repository

```bash
git clone --depth=1 https://github.com/ng-alain/ng-alain.git my-project
cd my-project
yarn
npm start
```

> Note: Installing with the CLI is a clean scaffolding; using clone the git repository include all example pages.

## Scaffolding

NG-ALAIN is a standard Angular CLI project that includes common routes for admins and demonstrates our component library. The project layout is as follows:

```
├── _mock                                       # Local Mock Data
├── src
│   ├── app
│   │   ├── core
│   │   │   ├── i18n
│   │   │   ├── net
│   │   │   │   └── default.interceptor.ts      # Default HTTP interceptor
│   │   │   ├── services
│   │   │   │   └── startup.service.ts          # Initialize project configuration
│   │   │   └── core.module.ts                  # Core module file
│   │   ├── layout                              # Layout files
│   │   ├── routes
│   │   │   ├── **                              # Business directory
│   │   │   ├── routes.module.ts                # Business routing module
│   │   │   └── routes-routing.module.ts
│   │   ├── shared                              # Shared module
│   │   │   └── shared.module.ts
│   │   ├── app.component.ts                    # Root component
│   │   └── app.module.ts                       # Root module
│   │   └── delon.module.ts                     # @delon modules import
│   ├── assets                                  # Local static files
│   ├── environments                            # Environment configuration
│   ├── styles                                  # Project styles
└── └── style.less                              # Style entry
```

## Development

```bash
npm start
```

This will automatically open http://localhost:8000. If you see the following page then you have succeeded.

![](./assets/screenshot/desktop.png | width=700)

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
