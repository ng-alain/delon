---
order: 0
title:
  en-US: Getting Started
  zh-CN: 开始使用
type: Basic
---

## Foreword

ng-alain is a production-ready solution for admin interfaces based on ng-zorro-antd, which should help you buid angular project to be faster and simpler.

## Installation

There are two ways to install:

### Clone the Git Repository

```bash
$ git clone -b 0.2.0 --depth=1 https://github.com/cipchk/ng-alain.git my-project
$ cd my-project
```

### Download the Package

Download [https://github.com/cipchk/ng-alain/archive/0.2.0.zip](https://github.com/cipchk/ng-alain/archive/0.2.0.zip), and un-archive.

## Scaffolding

ng-alain is a standard Angular cli project, and have built the following template. which should help you prototyping production-ready admin interfaces.

```
├── src
│   ├── app
│   │   ├── core                                # Core module
│   │   │   ├── i18n
│   │   │   ├── net
│   │   │   │   └── default.interceptor.ts      # HTTP Interceptor
│   │   │   ├── services
│   │   │   │   └── startup.service.ts          # Startup Service
│   │   │   └── core.module.ts
│   │   ├── layout                              # Common Layouts
│   │   ├── routes
│   │   │   ├── **                              # Your Business
│   │   │   ├── routes.module.ts                # Router module file of business
│   │   │   └── routes.ts                       # Router Register
│   │   ├── shared
│   │   │   └── core.module.ts                  # Shared module file
│   │   ├── app.component.ts                    # Root component
│   │   └── app.module.ts                       # Root module file
│   ├── assets                                  # Local static files
│   ├── environments                            # Environments config
│   ├── styles                                  # Theme config
└── └── style.less                              # Global Stylesheet
```

## Development

Install Dependencies

```bash
$ npm install
```

```bash
$ npm start
```

or use HMR mode

```bash
$ npm run serve:hmr
```

open [http://localhost:4200](http://localhost:4200), If you see the following page then you have succeeded.

![](./assets/screenshot/desktop.png | width=700)
