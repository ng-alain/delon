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

# [11.7.0](https://github.com/ng-alain/delon/compare/11.6.0...11.7.0) (2021-02-27)

### Scaffold

* **feat:** add [environment](https://github.com/ng-alain/ng-alain/blob/master/src/environments/environment.ts) type ([#1935](https://github.com/ng-alain/ng-alain/pull/1935))
* **feat:** removed redundant third library dependencies, you can use `ng update ng-alain` to fix directly ([#1940](https://github.com/ng-alain/ng-alain/pull/1940))
* **feat:** add `strictTemplates: true` ([#1939](https://github.com/ng-alain/ng-alain/pull/1939))
* **perf:** import method of mock data to make the production tree-shaking reduced 150kb ([#1941](https://github.com/ng-alain/ng-alain/pull/1941))

### Bug Fixes

* **abc:st:** fix `columns` can't be re-specified when call `export` Excel ([#1181](https://github.com/ng-alain/delon/issues/1181)) ([50baea3](https://github.com/ng-alain/delon/commit/50baea3df93e94cbc674d007de7e824992aabaec))
* **abc:st:** fix data should be converted ([#1180](https://github.com/ng-alain/delon/issues/1180)) ([f800e66](https://github.com/ng-alain/delon/commit/f800e66af62712a7a06443479befda78639dfab1))
* **abc:theme:i18n:** fix losing `defaultLang`, `currentLang` in `AlainI18NService` ([#1183](https://github.com/ng-alain/delon/issues/1183)) ([f65cb6b](https://github.com/ng-alain/delon/commit/f65cb6bd54b4ffaba8f2a90bb73b1449da861be0))
* **chart:trend:** fix data flag of html attribute ([#1174](https://github.com/ng-alain/delon/issues/1174)) ([3a10bf3](https://github.com/ng-alain/delon/commit/3a10bf354375701ea70a90b2a760531c46135f01))
* **form:** fix losing for ([#1144](https://github.com/ng-alain/delon/issues/1144)) ([e0ffa64](https://github.com/ng-alain/delon/commit/e0ffa64d3621b37458b460fbf9953e1bf9a1d1fd))
* **form:widget:date:** fix invalid default value when `mode` is `range` ([#1185](https://github.com/ng-alain/delon/issues/1185)) ([d14a823](https://github.com/ng-alain/delon/commit/d14a8234f747c26e01b680e6d109b91071b5f3f4))
* **theme:** fix less4 ([#1172](https://github.com/ng-alain/delon/issues/1172)) ([5e272c1](https://github.com/ng-alain/delon/commit/5e272c13739d71e3cc4c479440eafd5ac61ef7a7))
* **theme:layout-default:** fix disabled default nav when `nav` is specified ([#1193](https://github.com/ng-alain/delon/issues/1193)) ([38e60f5](https://github.com/ng-alain/delon/commit/38e60f5d2f010c9fb6000795f703107cb6a0035c))
* **util:ArrayService:** fix cancel return readonly of `flat`, `uniq` ([#1171](https://github.com/ng-alain/delon/issues/1171)) ([7375cdf](https://github.com/ng-alain/delon/commit/7375cdfb35a1d0b4489216a46d29fbb626f69265))

### Features

* **abc:let:** add `let` directive ([#1187](https://github.com/ng-alain/delon/issues/1187)) ([9c4397b](https://github.com/ng-alain/delon/commit/9c4397b579aaf606f3abc6d09b9c4e5e64b4e133))
* **abc:reuse-tab:** add `disabled` property ([#1179](https://github.com/ng-alain/delon/issues/1179)) ([2d2014f](https://github.com/ng-alain/delon/commit/2d2014f97cb5b85e758c985bcae53be88ee0a310))
* **abc:reuse-tab:** add `titleRender` property ([#1186](https://github.com/ng-alain/delon/issues/1186)) ([5df3c61](https://github.com/ng-alain/delon/commit/5df3c6113a12d4fc96b9d312440c169d5999b815))
* **abc:theme:** add environment type ([#1182](https://github.com/ng-alain/delon/issues/1182)) ([4e1c432](https://github.com/ng-alain/delon/commit/4e1c432b5844494bb4996fe69595816b1dbe50cb))
* **form:** Upgrade `ajv` to `7.x` ([#1188](https://github.com/ng-alain/delon/issues/1188)) ([431d540](https://github.com/ng-alain/delon/commit/431d540d3f5169b36222697c83edbcff6de55220))
* **mock:** add `setData` in `MockService` ([#1190](https://github.com/ng-alain/delon/issues/1190)) ([a118a07](https://github.com/ng-alain/delon/commit/a118a07f5d5275e859d4ea425f8c39bbff90e6b5))
* **module:theme:** adding Spanish locale [#308](https://github.com/ng-alain/delon/issues/308) ([#1175](https://github.com/ng-alain/delon/issues/1175)) ([3428310](https://github.com/ng-alain/delon/commit/342831048bd37e5dd02cee4eebbf39904bfa0a8f))
* **util:form:** add `MatchControl` ([#1178](https://github.com/ng-alain/delon/issues/1178)) ([84ab014](https://github.com/ng-alain/delon/commit/84ab014da009803476dfc4d8b3c7cb7b447ca18a))

### Performance Improvements

* use `ngDevMode` to tree-shake errors ([#1191](https://github.com/ng-alain/delon/issues/1191)) ([56b45c8](https://github.com/ng-alain/delon/commit/56b45c8ecaf93248e70701acd25ce096f37fc0b5))


# [11.6.0](https://github.com/ng-alain/delon/compare/11.3.1...11.6.0) (2021-02-07)

**Happy Chinese New Year 🇨🇳🐂🧧 to all NG-ALAIN users, so we skipped the two minor version numbers and went directly to the `6` version. the `6` is likabled number in china. 🧧🧨🧧🧨🧧🧨**

Mainly for refactor of `@delon/util`, NG-ALAIN divides them into:
- `@delon/util/array` Array&Tree, findTree, flat, groupBy, uniq
- `@delon/util/browser` Browser: `CookieServicew`, `copy`, `ScrollService`
- `@delon/util/date-time` Date Time Conversion
- `@delon/util/decorator` Decorator
- `@delon/util/form` Reactive Forms
- `@delon/util/format` String, Check, Currency, Mask
- `@delon/util/math` Math, Rounding
- `@delon/util/token` Visit `Window`, `visibilitychange` Web apis etc
- `@delon/util/other` Deep get, copy, merge, lazy, assert
- `@delon/util/pipes` Includes `price`, `mega`, `cny`, `filter`, `mask` pipes

> Pls refer to @delon/util [document](https://ng-alain.com/util/getting-started/en).

In addition, **Recommendation** Use `nz-range-picker` and `extend` directive to replace `range-picker`, will remove `range-picker` at `12.0.0`.

```html
<range-picker [(ngModel)]="i.start" [(ngModelEnd)]="i.end"></range-picker>
```

Changed to:

```html
<nz-range-picker [(ngModel)]="i.start" extend [(ngModelEnd)]="i.end"></nz-range-picker>
```

### Scaffold

* fix failure of toggle the search box multiple times in small screen ([#1929](https://github.com/ng-alain/ng-alain/pull/1929))
* used @delon/util second entry ([#1927](https://github.com/ng-alain/ng-alain/pull/1927))

### Bug Fixes

* **abc:st:** fix to top can't working ([#1153](https://github.com/ng-alain/delon/issues/1153)) ([93e314d](https://github.com/ng-alain/delon/commit/93e314de1c4d42117d25fc8f620e4176016cda64))
* **cli:ng-update:** Cannot read property 'configurations' of undefined ([#1156](https://github.com/ng-alain/delon/issues/1156)) ([26d41e1](https://github.com/ng-alain/delon/commit/26d41e1efed154e0cdf477db88d2440a2c40b9ae))
* **theme:_HttpClient:** fix count when subscribed ([#1157](https://github.com/ng-alain/delon/issues/1157)) ([a6b375a](https://github.com/ng-alain/delon/commit/a6b375ab89c80f012bca3f5abf26686f0bbee118))
* **theme** fix less4 ([#1155](https://github.com/ng-alain/delon/issues/1155)) ([331b009](https://github.com/ng-alain/delon/commit/331b0095bbe725e1a192225cc25178da307e8c6e))

### Features

* **abc:auto-focus:** add `auto-focus` component ([#1161](https://github.com/ng-alain/delon/issues/1161)) ([c02b755](https://github.com/ng-alain/delon/commit/c02b7552220d0bdbb4a56d435eac3640e785d966))
* **abc:range-picker** add `extend` directive to replace `range-picker` component ([#1167](https://github.com/ng-alain/delon/issues/1167))
* **abc:highlight:** add `highlight` component ([#1160](https://github.com/ng-alain/delon/issues/1160)) ([0d940c3](https://github.com/ng-alain/delon/commit/0d940c354421ddb110ac2ccbe229bf0332703dda))
* **abc:st:** add `contextmenu` property ([#1169](https://github.com/ng-alain/delon/issues/1169)) ([6461428](https://github.com/ng-alain/delon/commit/6461428e94a6ee7b6954ad54ce27964b6fb3245b))
* **abc:st:** add `showHeader` property ([#1151](https://github.com/ng-alain/delon/issues/1151)) ([47f0447](https://github.com/ng-alain/delon/commit/47f044769932c58ccca5502913f20f39a55b1746))
* **abc:st** support strongly data type of `STColumn` ([#1159](https://github.com/ng-alain/delon/issues/1159)) ([dadba41](https://github.com/ng-alain/delon/commit/dadba4187ee984ee4db63a18312ebe72a8f4c021))
* **util:ArrayService:** add `findTree` method ([#1164](https://github.com/ng-alain/delon/issues/1164)) ([12bf232](https://github.com/ng-alain/delon/commit/12bf2320f66c8f8c3e36cfbcbc95dd640c780b60))
* **util:token:** add tokens ([#1162](https://github.com/ng-alain/delon/issues/1162)) ([1a4b9d7](https://github.com/ng-alain/delon/commit/1a4b9d78767f3e631dca530548e8989dba8a7c2a))
* **util:pipes:** add `filter` pipe ([#1158](https://github.com/ng-alain/delon/issues/1158)) ([ac8f768](https://github.com/ng-alain/delon/commit/ac8f7688a45824945c841805fff2fc19d19429e8))
* **util** refactor util  ([#1154](https://github.com/ng-alain/delon/issues/1154))


## [11.3.1](https://github.com/ng-alain/delon/compare/11.3.0...11.3.1) (2021-01-28)

### Bug Fixes

* **sf:widget:select:** fix `showArrow` property ([#1147](https://github.com/ng-alain/delon/issues/1147)) ([4d51d61](https://github.com/ng-alain/delon/commit/4d51d6147d4c1908f684cdff1e7f5553e719a440))
* **cli:** fix `ng-alain:module` command ([#1149](https://github.com/ng-alain/delon/issues/1149)) ([f8c5a59](https://github.com/ng-alain/delon/commit/f8c5a59395db656691eea9efc54fe9618a460450))


# [11.3.0](https://github.com/ng-alain/delon/compare/11.2.0...11.3.0) (2021-01-25)

### Bug Fixes

* **abc:full-content:** fix scroll bar cannot be displayed in the work… ([#1140](https://github.com/ng-alain/delon/issues/1140)) ([0fd0c40](https://github.com/ng-alain/delon/commit/0fd0c4064010b4286b1b7fa223ca4d9c966ac8ad))
* **form:** fix missing id association ([#1143](https://github.com/ng-alain/delon/issues/1143)) ([35bdffb](https://github.com/ng-alain/delon/commit/35bdffbd0455b418b8ee22ffe8d54b63f93e779a))
* **sf:widget:array:** fix invalid `minItems` ([#1145](https://github.com/ng-alain/delon/issues/1145)) ([1411a6d](https://github.com/ng-alain/delon/commit/1411a6d31926a5aa3983ce48aa95c879fcb723dc))
* **sf:widget:time:** fix lose placeholder ([#1139](https://github.com/ng-alain/delon/issues/1139)) ([e341c93](https://github.com/ng-alain/delon/commit/e341c93f9fa7296058cf633b21c0cebe7a694935))
* **theme:** fix router animation is optional ([#1136](https://github.com/ng-alain/delon/issues/1136)) ([2865c2d](https://github.com/ng-alain/delon/commit/2865c2d9f0e6398f5dd4eeba433e9aa3c0a57d77))

### Features

* **abc:quick-menu:** add `expand` property ([#1138](https://github.com/ng-alain/delon/issues/1138)) ([ae80102](https://github.com/ng-alain/delon/commit/ae801023415e002de500125570fbd5a280102a79))
* **abc:sv:** add `sv-value` component ([#1141](https://github.com/ng-alain/delon/issues/1141)) ([4892a71](https://github.com/ng-alain/delon/commit/4892a71a8194a1cab38322dbf9a67735ff9c319f))


# [11.2.0](https://github.com/ng-alain/delon/compare/11.1.0...11.2.0) (2021-01-13)

### Bug Fixes

* **cli:** fix invalid version number of `screenfull` ([#1129](https://github.com/ng-alain/delon/issues/1129)) ([f9291c9](https://github.com/ng-alain/delon/commit/f9291c9852fd769d91c8f395b5462aac110d8e1a))
* **theme:** fix router animation when changed ([#1134](https://github.com/ng-alain/delon/issues/1134)) ([dcb6284](https://github.com/ng-alain/delon/commit/dcb628495a52e4a0b61ee4ad7a692243f29c90c7))

### Features

* **chart:number-info:** support multiple style ([#1133](https://github.com/ng-alain/delon/issues/1133)) ([876d4db](https://github.com/ng-alain/delon/commit/876d4db798dfc4cd1ee077324fe3a459bc6fff72))

### BREAKING CHANGES

* **cli:** use .template suffix for schematic template files, You need to manually add the `.template` suffix to the files in the `_cli-tpl` directory ([#1128](https://github.com/ng-alain/delon/issues/1128)) ([0ac979e](https://github.com/ng-alain/delon/commit/0ac979e4cc7dcbdfba923be6327e414f3991b2d7))


# [11.1.0](https://github.com/ng-alain/delon/compare/11.0.2...11.1.0) (2021-01-05)

### Scaffold

* support RTL
* perf `SharedModule` module ([#1894](https://github.com/ng-alain/ng-alain/pull/1894)) ([bd0a161](https://github.com/ng-alain/ng-alain/commit/bd0a16163e4b3f9ebc4a4d80eb3829fe3ad7d731))
* update `.browserslistrc` ([#1902](https://github.com/ng-alain/ng-alain/pull/1902)) ([77925a8](https://github.com/ng-alain/ng-alain/commit/77925a8e1dda832ce3a54c26ed09377fd6c9e09d))
* remove duplicate dependencies ([#1902](https://github.com/ng-alain/ng-alain/pull/1902)) ([77925a8](https://github.com/ng-alain/ng-alain/commit/77925a8e1dda832ce3a54c26ed09377fd6c9e09d))
* remove the attributes that NG-ZORRO will remove in version `12` ([#1895](https://github.com/ng-alain/ng-alain/pull/1895)) ([2272a9a](https://github.com/ng-alain/ng-alain/commit/2272a9ae7e1da1b87cda3dd796e0708c33f608c1))

### Bug Fixes

* **auth:** fix always trigger refresh event in jwt ([#1115](https://github.com/ng-alain/delon/issues/1115)) ([1ef2369](https://github.com/ng-alain/delon/commit/1ef23696d5ff8de8133cbe2d5e7a53cedee2f5d6))
* **cli:plugin:icon:** fix support conditional expression ([#1121](https://github.com/ng-alain/delon/issues/1121)) ([a481c1c](https://github.com/ng-alain/delon/commit/a481c1c257edaac603852c0096c5f4a4ecb371f5))

### Features

* **abc:st:** add `pureList` method ([#1126](https://github.com/ng-alain/delon/issues/1126)) ([70270f8](https://github.com/ng-alain/delon/commit/70270f8bb4914e5ad2bd4d769f121131b4e98944))
* **abc:st:** support item type of `setRow` ([#1119](https://github.com/ng-alain/delon/issues/1119)) ([9ea783e](https://github.com/ng-alain/delon/commit/9ea783e327d206b8cc8ad0d10cd2b56bd454d173))
* **chart:** lazy load g2 libary ([#1123](https://github.com/ng-alain/delon/issues/1123)) ([cb7b5bb](https://github.com/ng-alain/delon/commit/cb7b5bbbbaeb218ac4e912275cd77e97dfc6e7e2))
* **theme:** add `RTLService` service ([#1120](https://github.com/ng-alain/delon/issues/1120)) ([1f4f67b](https://github.com/ng-alain/delon/commit/1f4f67b239f6ea7227aca046ba9110642a43e774))
* **cli:plugin:rtl** add `ng g ng-alain:plugin rtl` plugin ([#1118](https://github.com/ng-alain/delon/issues/1118)) ([a5dc52e](https://github.com/ng-alain/delon/commit/a5dc52e0e180b18450e1d07537ff3da865c166b2))

### Performance Improvements

* **theme:** perf [@enable-all-colors](https://github.com/enable-all-colors)` default is `false` ([#1113](https://github.com/ng-alain/delon/issues/1113)) ([d03c8fb](https://github.com/ng-alain/delon/commit/d03c8fb1344b8d692e987fcd259e7d58417ec9dc))


## [11.0.2](https://github.com/ng-alain/delon/compare/11.0.1...11.0.2) (2020-12-23)

### Bug Fixes

* **cli:ng-add:** include color.less & theme css files ([#1111](https://github.com/ng-alain/delon/issues/1111)) ([5beca2f](https://github.com/ng-alain/delon/commit/5beca2fe36c64e5fdba6732facd276311ac6291b))
* **sf:select:** fix invalid loading status ([#1110](https://github.com/ng-alain/delon/issues/1110)) ([a147f95](https://github.com/ng-alain/delon/commit/a147f95cc1d8d0c7524827cdd732b3ece47490cb))
* **theme:_HttpClient:** fix load status allow multiple requests ([#1109](https://github.com/ng-alain/delon/issues/1109)) ([9e3dc29](https://github.com/ng-alain/delon/commit/9e3dc29782bc9334e62abbf6afccb5a62e903653))


## [11.0.1](https://github.com/ng-alain/delon/compare/11.0.0...11.0.1) (2020-12-22)

### Bug Fixes

* **cli:** remove tslint-language-service depend ([#1106](https://github.com/ng-alain/delon/issues/1106)) ([70ebb94](https://github.com/ng-alain/delon/commit/70ebb94c98116381c5dc32a07f3254675a56f6a3))

# [11.0.0](https://github.com/ng-alain/delon/compare/10.1.3...11.0.0) (2020-12-22)


### Bug Fixes

* **sf:** fix invalid empty value of `pathValue` property ([#1099](https://github.com/ng-alain/delon/issues/1099)) ([dad5ed0](https://github.com/ng-alain/delon/commit/dad5ed045d5c559cb2e4ab3b92f297e7c1ee9f3c))
* **util:time:** fix invalid format `toDate` ([#1093](https://github.com/ng-alain/delon/issues/1093)) ([3b97fc3](https://github.com/ng-alain/delon/commit/3b97fc3f33a58ff2701df52d1a0a055dfc523165))
* **util:array:** fix non-empty root parent id value should be return empty array ([#1084](https://github.com/ng-alain/delon/issues/1084)) ([95c0946](https://github.com/ng-alain/delon/commit/95c0946f3dff1399ca567ad17dccc5a58542bb65))

### Features

* **cli:** Use source-map-explorer instead of webpack-bundle-analyzer ([#1091](https://github.com/ng-alain/delon/issues/1091)) ([30a3dc9](https://github.com/ng-alain/delon/commit/30a3dc972f02138fbd572114789738a957454b3d))
* **cli:module:** feat auto import routing module to top routing module ([#1100](https://github.com/ng-alain/delon/issues/1100)) ([da46d3c](https://github.com/ng-alain/delon/commit/da46d3c496cc13adc8430ed9bea2829a435d4b68))
* **form:textarea:** add `change`, `focus`, `blur` events ([#1096](https://github.com/ng-alain/delon/issues/1096)) ([8ae609c](https://github.com/ng-alain/delon/commit/8ae609c8459cce3db0d9973a63f3e1e35547ec98))
* **module:theme:** adding French locale ([#1094](https://github.com/ng-alain/delon/issues/1094)) ([b20259a](https://github.com/ng-alain/delon/commit/b20259a787ca76671e9578ada060737ce32a6a92))
* **sf:** Allow use of `setVisible` method ([#1098](https://github.com/ng-alain/delon/issues/1098)) ([fb46405](https://github.com/ng-alain/delon/commit/fb464050607effa595bae9f679c5097131039003))
* **sf:select:**  add `searchDebounceTime` property ([#1097](https://github.com/ng-alain/delon/issues/1097)) ([0fa1e70](https://github.com/ng-alain/delon/commit/0fa1e70a88a6cc400ff036b92556ebf3a67e33db))
* **theme:** add `layout-default`, `layout-blank`, `setting-drawer`, `theme-btn` theme components ([#1101](https://github.com/ng-alain/delon/issues/1101)) ([9703641](https://github.com/ng-alain/delon/commit/9703641147cb49b9853b1cb175241793177a5bff))
* **abc:pdf:** add `pdf` components ([#1086](https://github.com/ng-alain/delon/issues/1086)) ([2882a52](https://github.com/ng-alain/delon/commit/2882a5283ebc869afb33db476de9167e8def5de0))
* **abc:xlsx:** support utf8 file format ([#1088](https://github.com/ng-alain/delon/issues/1088)) ([59ff03b](https://github.com/ng-alain/delon/commit/59ff03bf8474d311a6d196bf993e7679fbb29ebf))

## Old Version

All releases notes can be found [here](https://github.com/ng-alain/ng-alain/releases)
