---
order: 80
title:
  en-US: Upgrade scaffold
  zh-CN: 升级脚手架
type: Dev
---

In [Architecture](/docs/architecture) we have described the overall composition of the NG-ALAIN scaffolding. We spent a lot of time developing some infrastructure and publishing these to the `@delon/*` series to Npm. , making the upgrade very easy.

## Publishing rule

Similar to `@angular/*`, the version number of the `@delon/*` class library will be a version number ([![NPM version](https:/) at each iteration, regardless of whether a class library has been modified. /img.shields.io/npm/v/@delon/theme.svg)](https://www.npmjs.com/package/@delon/theme)).

At the same time, please follow the following publishing rules and update version number:

- `@delon` as the infrastructure library, which will be slightly higher in the update frequency, usually updated at least once a week.
- With **BREAKING CHANGES** at least one minor version number
- [Update Log](https://github.com/ng-alain/ng-alain/releases)

## How to upgrade?

### Method 1: Modify the version number

Modify `package.json` All class libraries starting with `@delon/` are the latest version number:

```
"@delon/theme": "^0.7.1"
```

Replace `^0.7.1` with the latest version number.

Finally, reinstall the dependencies.

```bash
yarn
```

> Please read [Frequently Asked Questions](/docs/faq)

### Method 2: Update all class libraries

Scaffolding in `package.json` most libraries use loose version numbers, for example:

`^0.1.0` with the `^` symbol indicates that the latest minor version number is used, so `0.7.0` is also the range.

To use this update method, you need to follow these steps:

- Remove the `node_modules` folder and the `yarn.lock` file
- Execute `yarn`

**Note:** This method will install all class libraries in a newer version, but it may cause unnecessary troubles due to damaging changes of third-party types.
