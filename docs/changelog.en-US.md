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
