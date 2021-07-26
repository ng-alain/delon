---
order: 100
title: Change Log
type: Other
---

NG-ALAIN strictly follows [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/).

#### Release Schedule

* Weekly release: patch version at the end of every week for routine bugfix (anytime for urgent bugfix).
* Monthly release: minor version at the end of every month for new features.
* Major version release is not included in this schedule for breaking change and new features.

---

## [12.0.2](https://github.com/ng-alain/delon/compare/12.0.1...12.0.2) (2021-07-26)

### Bug Fixes

* **cli:** add `fixAngularJson` option ([#1294](https://github.com/ng-alain/delon/issues/1294)) ([dbe0642](https://github.com/ng-alain/delon/commit/dbe06424c59fa005f86c0f196bb5ad053ac4665f))


## [12.0.1](https://github.com/ng-alain/delon/compare/12.0.0...12.0.1) (2021-07-24)

### Bug Fixes

* **abc:st:** fix optimize when specified new data in call `export` ([#1288](https://github.com/ng-alain/delon/issues/1288)) ([9416fe1](https://github.com/ng-alain/delon/commit/9416fe16360e7e9def0a6b9150bd5e8bbc166386))
* **cli:** fix `UserLoginComponent` is declared by more than on NgModule ([#1289](https://github.com/ng-alain/delon/issues/1289)) ([1042aea](https://github.com/ng-alain/delon/commit/1042aeae16b6f06022bf6cc0a52727a5458b8bc1))
* **cli:** fix duplicate alias of `t` ([#1291](https://github.com/ng-alain/delon/issues/1291)) ([c4e1943](https://github.com/ng-alain/delon/commit/c4e1943475d46f94683345cc94fc8c5eb83e1267))
* **theme:http:** fix missing `HttpContext` ([#1292](https://github.com/ng-alain/delon/issues/1292)) ([a394400](https://github.com/ng-alain/delon/commit/a394400c003e1e73c42789aa43baadbc590af080))


# [12.0.0](https://github.com/ng-alain/delon/compare/11.10.4...12.0.0) (2021-07-16)

### Features

* **abc:st:** add intellisense for `index` ([#1284](https://github.com/ng-alain/delon/issues/1284)) ([5d8c017](https://github.com/ng-alain/delon/commit/5d8c01788e6f23853d83a67593b87ffee86bd2d4))
* **abc:notice-icon:** add `emptyText`, `title`, `description` support TemplateRef ([#1256](https://github.com/ng-alain/delon/issues/1256)) ([596ca40](https://github.com/ng-alain/delon/commit/596ca40c254e619dc868deced7d4f105fac2d797))
* **abc:se,sv:** add `nz-divider` support ([#1283](https://github.com/ng-alain/delon/issues/1283)) ([46d6e3d](https://github.com/ng-alain/delon/commit/46d6e3d60a8903c4a71fc64efc5e8b2d596c3742))
* **cache:** add custom request ([#1253](https://github.com/ng-alain/delon/issues/1253)) ([084037e](https://github.com/ng-alain/delon/commit/084037e73c094636eb510565863e403259f264d1))
* **chart:bar,mini-area,mini-bar:** add `color` in data ([#1279](https://github.com/ng-alain/delon/issues/1279)) ([1ea098d](https://github.com/ng-alain/delon/commit/1ea098daaeca6eedfb07f5f342052b1c3e3ffb6a))
* **chart:echarts:** support resize ([#1263](https://github.com/ng-alain/delon/issues/1263)) ([9ac3a99](https://github.com/ng-alain/delon/commit/9ac3a99c85f773e63232b2723201b8888fbe5cf0))
* **form:** add `property` property of `visibleIf` function ([#1281](https://github.com/ng-alain/delon/issues/1281)) ([980b8a5](https://github.com/ng-alain/delon/commit/980b8a528bbf59f474984994f6a7271a89cf70b6))
* **theme:theme-btn:** add `deployUrl` property ([#1264](https://github.com/ng-alain/delon/issues/1264)) ([05ce8f2](https://github.com/ng-alain/delon/commit/05ce8f20f7c4b62d75c23e3b1013c8e9951034ff))
* **theme:** add enabled of util classes ([#1280](https://github.com/ng-alain/delon/issues/1280)) ([273aeed](https://github.com/ng-alain/delon/commit/273aeedeb748f97163cd0282288a9947dc93d605))
* **util:** add mobile number format starting with `16` ([#1282](https://github.com/ng-alain/delon/issues/1282)) ([cd98359](https://github.com/ng-alain/delon/commit/cd983593e05fbdcdb83cb155d6b5f7fbba435702))

### Performance Improvements

* use build-in `i18n` instead of `@ngx-translate/core` ([#1276](https://github.com/ng-alain/delon/issues/1276)) ([ba48cc3](https://github.com/ng-alain/delon/commit/ba48cc3f574837064940f720323351172dd4e3df))

### BREAKING CHANGES

**DelonChartModule**
- Removed

**WINDOW**
- Used `import { WINDOW } from '@delon/util/token';` instead

**_currency**
- Used [price](https://ng-alain.com/util/pipes-currency/en?#price) pipe instead

**_HttpClient.end**
- Used `cleanLoading` instead

**ModalHelper.open, static**
- `open` used `create` instead
- `static` used `createStatic` instead

**ScrollService**
- Used `import { ScrollService } from '{AT}delon/util/browser';` instead

**Badges Class**
- Used `nz-tag` instead

**AlainMockConfig.data**
- Used `DelonMockModule.forRoot({ data: {} })` instead

## Old Versions

All releases notes can be found [here](https://github.com/ng-alain/ng-alain/releases).
