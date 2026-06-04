# Introduction

This file provides guidance to Claude Code when working on the delon project.

## Project Context

The delon project (`@delon/*`) is the core library for [NG-ALAIN](https://ng-alain.com), an Angular enterprise admin framework built on top of [NG-ZORRO](https://ng.ant.design) and Ant Design. It provides essential modules including business components, ACL, authentication, caching, dynamic forms, theming, and utilities.

## Project Structure

```
delon/
├── packages/               # Main delon packages
│   ├── abc/                # Business components (st, se, sv, sg, page-header, reuse-tab, etc.)
│   ├── acl/                # Access Control List module
│   ├── auth/               # Authentication module (JWT, Simple)
│   ├── cache/              # Caching module
│   ├── chart/              # Chart components (G2-based)
│   ├── form/               # Dynamic form module (sf)
│   ├── mock/               # HTTP mock module
│   ├── testing/            # Testing utilities and helpers
│   ├── theme/              # Theme module (layout, services, pipes, directives)
│   └── util/               # Utility functions and helpers
├── ng-alain/               # Scaffold demo application
├── schematics/             # Angular schematics (ng-add, ng-generate, ng-update)
├── scripts/                # Build and utility scripts
├── src/                    # Documentation site source
├── docs/                   # Documentation markdown files
├── angular.json            # Angular workspace configuration
├── package.json            # Project dependencies and scripts
└── tsconfig.json           # TypeScript configuration
```

Each feature folder within a package (e.g. `packages/abc/st/`) is composed of:

- `*.ts`: Component/service/directive/pipe source files
- `index.ts`: Entry point
- `public_api.ts`: Public API exports
- `style/`: Component-specific LESS styles
- `demo/`: Demo examples shown in the documentation site
- `index.en-US.md`: English API documentation
- `index.zh-CN.md`: Chinese API documentation
- `test/` or `*.spec.ts`: Unit tests

## Installation and Setup

### Development environment requirements

- Node.js `^20.19.0 || ^22.12.0 || ^24.0.0`
- Yarn (package manager)

### Install dependencies

```bash
yarn install
```

### Development commands

```bash
yarn start            # Start the documentation site dev server
yarn build            # Build all packages and site
yarn test             # Run all unit tests (Karma + Jasmine)
yarn test:cli         # Test Angular schematics
yarn lint             # Run ESLint and Stylelint
yarn lint:fix         # Auto-fix lint issues
yarn site:build       # Build the documentation site
```

## Coding Style Guide

More information can be found [here](./DEVELOPMENT.md).
