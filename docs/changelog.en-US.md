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

# [9.4.0](https://github.com/ng-alain/delon/compare/9.3.2...9.4.0) (2020-06-13)

### Scaffold

* **theme-btn:** `update` instead of `set` ([#1712](https://github.com/ng-alain/ng-alain/pull/1712/files))

### Bug Fixes

* **abc:reuse-tab:** fix refresh tab component when call `replace` method of service ([#953](https://github.com/ng-alain/delon/issues/953)) ([44b6a9c](https://github.com/ng-alain/delon/commit/44b6a9c9d02f6d1315fdade5f2fbf0bf6710a21c))
* **abc:st:** fix call `resetColumns` and `emitReload: true` method should clean data ([#954](https://github.com/ng-alain/delon/issues/954)) ([b89f13c](https://github.com/ng-alain/delon/commit/b89f13cc31a058742b891fdfd656f21572750a25))
* **abc:st:** fix refresh data when changed `columns` ([#954](https://github.com/ng-alain/delon/issues/954)) ([b89f13c](https://github.com/ng-alain/delon/commit/b89f13cc31a058742b891fdfd656f21572750a25))
* **abc:st:** fix recalculate no value of `removeRows` method ([#944](https://github.com/ng-alain/delon/issues/944)) ([09202dd](https://github.com/ng-alain/delon/commit/09202ddb5ce8abff2692a0ddd206d8af5aef04d2))
* **form:** fix text overflow ellipsis of lable ([#949](https://github.com/ng-alain/delon/issues/949)) ([34a2c63](https://github.com/ng-alain/delon/commit/34a2c6369c0899ee7d6d00fbc07c4e24be61eea2))
* **form:widget:array:** fix clean value of `cleanValue` ([#948](https://github.com/ng-alain/delon/issues/948)) ([3881014](https://github.com/ng-alain/delon/commit/3881014d4b137ab38dbba85dcfe62a6b12733352))
* **form:widget:upload:** fix value should not be updated during initialization ([#947](https://github.com/ng-alain/delon/issues/947)) ([5d3abf0](https://github.com/ng-alain/delon/commit/5d3abf0a8b1ae3a4a150e176c74a8a27dab51afd))

### Features

* **abc:se:** add `errors` property, used to batch update all `error` attribute of `se` component ([#932](https://github.com/ng-alain/delon/issues/932)) ([7316257](https://github.com/ng-alain/delon/commit/7316257ba248d1308cbf0e9e0a87d7c24e5a0737))
* **abc:se:** add `ingoreDirty` property, ignoring the verification of the form element `diry` ([#945](https://github.com/ng-alain/delon/issues/945)) ([5f5dfcc](https://github.com/ng-alain/delon/commit/5f5dfccdf73b5a547c28c2240a0351c9d5600830))
* **chart:** add `clickItem` event ([#951](https://github.com/ng-alain/delon/issues/951)) ([f9fff60](https://github.com/ng-alain/delon/commit/f9fff6077324e1ef75b5b80ed6063fc375b58f89))
* **form:** add `showRequired` property of ui schema ([#940](https://github.com/ng-alain/delon/issues/940)) ([d10f29d](https://github.com/ng-alain/delon/commit/d10f29d336a4674014d8955ac19e8a1c9d1f67a5))
* **form:widget:date:** add `change` event ([#950](https://github.com/ng-alain/delon/issues/950)) ([172ba08](https://github.com/ng-alain/delon/commit/172ba0805e6c3e5ccc8a46e0971277cbeabc04ea))
* **form:widget:object:** add expand of type is card ([#952](https://github.com/ng-alain/delon/issues/952)) ([22833c0](https://github.com/ng-alain/delon/commit/22833c01c3bfaf80291ea1f159f01fe779e13b39))


## [9.3.2](https://github.com/ng-alain/delon/compare/9.3.1...9.3.2) (2020-06-01)

### Scaffold

* fix demo style of dark theme ([#1682](https://github.com/ng-alain/ng-alain/pull/1682/files), [#1685](https://github.com/ng-alain/ng-alain/pull/1685/files))

### Bug Fixes

* **abc:page-header:** fix route event cannot be destroyed in reuse router ([#933](https://github.com/ng-alain/delon/issues/933)) ([0080efd](https://github.com/ng-alain/delon/commit/0080efdfe32e2fa23900562c11c386e3d76bd31b))
* **cli:** fix ng-update ([#934](https://github.com/ng-alain/delon/issues/934)) ([8f26c71](https://github.com/ng-alain/delon/commit/8f26c71e085715c569185c72bfa6b3a777047f9c))
* **form:** async properites ([#935](https://github.com/ng-alain/delon/issues/935)) ([aa6de23](https://github.com/ng-alain/delon/commit/aa6de23b98ec40a886fa5acbdbc7629ff5453499))
* **form:** fix optional color of dark theme ([#941](https://github.com/ng-alain/delon/issues/941)) ([50d1617](https://github.com/ng-alain/delon/commit/50d161782db78872f504b35570704cf4e1739a7a)), closes [#939](https://github.com/ng-alain/delon/issues/939)


## [9.3.1](https://github.com/ng-alain/delon/compare/9.3.0...9.3.1) (2020-05-27)

### Bug Fixes

* **abc:reuse-tab:** fix dark style of close button ([#923](https://github.com/ng-alain/delon/issues/923)) ([f35c617](https://github.com/ng-alain/delon/commit/f35c6170ba1e1138cf6e7d228dd22838949f86fd))
* **abc:reuse-tab:** fix exclude items should be updated after leave ([#925](https://github.com/ng-alain/delon/issues/925)) ([e6fef31](https://github.com/ng-alain/delon/commit/e6fef31d3814ff5fd0a6692f00907d2f3f7fbb97))
* **abc:se:** fix only control vision when error is null ([#929](https://github.com/ng-alain/delon/issues/929)) ([42713d3](https://github.com/ng-alain/delon/commit/42713d3b3069f0a16d065f9ce44b85cfcacb0977))
* **abc:sidebar-nav:** add title of menu item ([#924](https://github.com/ng-alain/delon/issues/924)) ([ac1445c](https://github.com/ng-alain/delon/commit/ac1445c26425640d4dd9e2bc346c18813d2992a3))
* **theme:** fix flex ([#927](https://github.com/ng-alain/delon/issues/927)) ([afb8ad1](https://github.com/ng-alain/delon/commit/afb8ad1e3b5dc13ecb2a337855bf0ffd25685a50))
* **theme:layout:fullscreen:** fix dark theme ([#926](https://github.com/ng-alain/delon/issues/926)) ([b61b7f6](https://github.com/ng-alain/delon/commit/b61b7f64e1f0e208d60b09484a6ba6438f3c6c61))


# [9.3.0](https://github.com/ng-alain/delon/compare/9.2.4...9.3.0) (2020-05-24)

### Scaffold

* **BREAKING CHANGE** Add dark and compact themes, You need to manually update two places:

**1. `src/styles.less` File**

```less
// #region PLACEHOLDER, IMPORTANT: don't remove
@import '~@delon/theme/styles/index';
@import '~@delon/abc/index';
@import '~@delon/chart/index';
@import '~@delon/theme/styles/layout/default/index';
@import '~@delon/theme/styles/layout/fullscreen/index';
@import './styles/index';
@import './styles/theme';
// #endregion
```

After:

```less
@import '~@delon/theme/system/index';
@import '~@delon/abc/index';
@import '~@delon/chart/index';
@import '~@delon/theme/layout/default/index';
@import '~@delon/theme/layout/fullscreen/index';

@import './styles/index';
@import './styles/theme';

// You can directly set the default theme
// - `dark` Import the official dark less style file
// - `compact` Import the official compact less style file
// @import '~@delon/theme/theme-dark.less';
```

**2. Theme variable path**

Replace all `@import '~@delon/theme/styles/default';` with `@import '~@delon/theme/index';`

> If you want to support the switching between these two dynamic themes like the preview website, please refer to [
Customize Theme](https://ng-alain.com/theme/customize-theme).
>
> Please refer to ([#1668](https://github.com/ng-alain/ng-alain/pull/1668/files)) the complete PR for this update.

### Bug Fixes

* fix entry point warning ([#911](https://github.com/ng-alain/delon/issues/911)) ([248e8c8](https://github.com/ng-alain/delon/commit/248e8c8961e593fb525f752c16ff2cef6d3a213c))
* **abc:media:** fix can't init when Plyr has beed load ([#909](https://github.com/ng-alain/delon/issues/909)) ([e22fd25](https://github.com/ng-alain/delon/commit/e22fd259699c9c065604ac1624a3009e548421da))
* **abc:st:** fix not specifying key should use index instead in statistical ([#908](https://github.com/ng-alain/delon/issues/908)) ([1de4383](https://github.com/ng-alain/delon/commit/1de438366e9ac57340c4c2a3bb9f6b51a01e0486))
* **form:** fix button & form misalignment in inline mode ([#904](https://github.com/ng-alain/delon/issues/904)) ([e869da0](https://github.com/ng-alain/delon/commit/e869da0c0ddc5349593fb3beb432df511f9cf438))
* **theme:menu.service:** fix invald recursive hit when is hash location strategy ([#906](https://github.com/ng-alain/delon/issues/906)) ([47b8bc7](https://github.com/ng-alain/delon/commit/47b8bc78e31e51beae083e2a50ab894d331ff58f))

### Features

* **abc:sidebar-nav:** unlimited levels ([#910](https://github.com/ng-alain/delon/issues/910)) ([81b5422](https://github.com/ng-alain/delon/commit/81b54220cc7d14e47be92c009238ee8cf29bd80b))
* **abc:st:** auto generate compose method when `sort: true` ([#907](https://github.com/ng-alain/delon/issues/907)) ([8e1657a](https://github.com/ng-alain/delon/commit/8e1657ace1efed132038d34588f71189c98d39d8))
* **chart:water-wave:** add `animate` property ([#918](https://github.com/ng-alain/delon/issues/918)) ([7ae1f35](https://github.com/ng-alain/delon/commit/7ae1f3576409d12844fdaec3d075d03bc42e6e69))
* **form:** add `compact` property ([#917](https://github.com/ng-alain/delon/issues/917)) ([cc11212](https://github.com/ng-alain/delon/commit/cc1121236a4f3f405526a624225af8b6b9a1202d))
* **form:widget:array:** add callback evetns ([#905](https://github.com/ng-alain/delon/issues/905)) ([31b031d](https://github.com/ng-alain/delon/commit/31b031d35ed277241ee6a682250ad0273a27734a))


## [9.2.4](https://github.com/ng-alain/delon/compare/9.2.3...9.2.4) (2020-05-15)

### Scaffold

* fix invalid parameter in catchError ([#1652](https://github.com/ng-alain/ng-alain/pull/1652/files))

### Bug Fixes

* **abc:lodop:** fix unable to attach `LODOP.NEWPAGE();` this kind of code ([#902](https://github.com/ng-alain/delon/issues/902)) ([8022a66](https://github.com/ng-alain/delon/commit/8022a66c863d48d9cee81939e4f2ed96e246f9f4))
* **abc:st:** fix invalid link break in strict mode ([#900](https://github.com/ng-alain/delon/issues/900)) ([a12cf4f](https://github.com/ng-alain/delon/commit/a12cf4f36c16691b5904d47956ac2527aa117ba3))
* **cli:ng-add:** fix invalid parameter in catchError ([#901](https://github.com/ng-alain/delon/issues/901)) ([a6d6ee3](https://github.com/ng-alain/delon/commit/a6d6ee33f449b7597fbedee8655c51275598db85))
* **cli:plugin:ie:** fix modifiy invalid file ([#898](https://github.com/ng-alain/delon/issues/898)) ([b3de732](https://github.com/ng-alain/delon/commit/b3de7321661dc2664832f0be78c007f0231bf8a1))


## [9.2.3](https://github.com/ng-alain/delon/compare/9.2.2...9.2.3) (2020-05-14)

### Bug Fixes

* fix has no exported member 'PanelMode' ([#894](https://github.com/ng-alain/delon/issues/894)) ([702a485](https://github.com/ng-alain/delon/commit/da07bc1fc4d326e9bb8f06813d95e99093073187))
* **form:** fix misalignment in fixed label ([#895](https://github.com/ng-alain/delon/issues/895)) ([702a485](https://github.com/ng-alain/delon/commit/702a4859ca093eca35675e7ba18b8f3288fc0990))


## [9.2.2](https://github.com/ng-alain/delon/compare/9.2.1...9.2.2) (2020-05-12)

### Bug Fixes

* **abc:lodop:** fix lodop definition ([#887](https://github.com/ng-alain/delon/issues/887)) ([aa80730](https://github.com/ng-alain/delon/commit/aa80730b2a5dfe7d3b93054a80c84f85fc81f6b9))
* **abc:st:** fix invalid fixed column ([#892](https://github.com/ng-alain/delon/issues/892)) ([b3453c5](https://github.com/ng-alain/delon/commit/b3453c54edb45f476c733ee87638327b72918a41))
* **abc:st:** fix invalid highlight when filter has set ([#889](https://github.com/ng-alain/delon/issues/889)) ([c9b374d](https://github.com/ng-alain/delon/commit/c9b374d476cd8c67cd361b651b8a3f1bed6d16cb))
* **abc:st:** fix click the filter icon to trigger sorting ([#889](https://github.com/ng-alain/delon/issues/889)) ([c9b374d](https://github.com/ng-alain/delon/commit/c9b374d476cd8c67cd361b651b8a3f1bed6d16cb))
* **abc:se:** fix nesting ([#886](https://github.com/ng-alain/delon/issues/886)) ([2b3f998](https://github.com/ng-alain/delon/commit/2b3f9983006dfe174dfd46bd6b1f8c355512621c))
* **abc:se:** fix col eqar 1 in inline layout ([#886](https://github.com/ng-alain/delon/issues/886)) ([2b3f998](https://github.com/ng-alain/delon/commit/2b3f9983006dfe174dfd46bd6b1f8c355512621c))
* **sf:widget:date:** fix format default value when value is not null ([#890](https://github.com/ng-alain/delon/issues/890)) ([bedd102](https://github.com/ng-alain/delon/commit/bedd10283d020b0aaf02bf26d173c7d53cc6f751))
* **theme:style:utils:** fix `flex-center-between` ([#886](https://github.com/ng-alain/delon/issues/886)) ([2b3f998](https://github.com/ng-alain/delon/commit/2b3f9983006dfe174dfd46bd6b1f8c355512621c))
* **theme:style:utils:** fix exclude link button of preserve whilte spaces ([#886](https://github.com/ng-alain/delon/issues/886)) ([2b3f998](https://github.com/ng-alain/delon/commit/2b3f9983006dfe174dfd46bd6b1f8c355512621c))
* **cli:plugin:ie:** fix invalid version number of dependencies ([#888](https://github.com/ng-alain/delon/issues/888)) ([35de0d0](https://github.com/ng-alain/delon/commit/35de0d000d3aa5d15742218dede050df9007b1a0))


## [9.2.1](https://github.com/ng-alain/delon/compare/9.2.0...9.2.1) (2020-05-06)

### Bug Fixes

* **abc:page-header:** remove debug info ([#883](https://github.com/ng-alain/delon/issues/883)) ([48702ac](https://github.com/ng-alain/delon/commit/48702ac87a0b16cc8befc57d4e664681bc64323f))
* **abc:st:** add `enum` type ([#884](https://github.com/ng-alain/delon/issues/884)) ([41e25d5](https://github.com/ng-alain/delon/commit/41e25d5e07fce59aa2f17c3d2c4c879004b35dee))


# [9.2.0](https://github.com/ng-alain/delon/compare/9.1.0...9.2.0) (2020-05-06)

### Bug Fixes

* **abc:page-header:** fix can't generate breadcrumb when route include params ([#881](https://github.com/ng-alain/delon/issues/881)) ([3b1a6e3](https://github.com/ng-alain/delon/commit/3b1a6e3d7c5904f0d696bfb985bec006a53733a8))
* **abc:st:** fix missing border when custom body of nest table ([#872](https://github.com/ng-alain/delon/issues/872)) ([626b143](https://github.com/ng-alain/delon/commit/626b1433f5b404895816ebd2f77f82253f36945d))
* **cli:ng-add:** fix lose component import ([#873](https://github.com/ng-alain/delon/issues/873)) ([fbc09d1](https://github.com/ng-alain/delon/commit/fbc09d188c0b9b8ab496534881141224b9454eb5))
* **theme:drawer:** fix bottom margin spacing ([#871](https://github.com/ng-alain/delon/issues/871)) ([7ae744e](https://github.com/ng-alain/delon/commit/7ae744e3b80b660305d61b7eb7b7f4820c1df10f))

### Features

* **abc:qr:** add lazy load libary ([#875](https://github.com/ng-alain/delon/issues/875)) ([6009ae2](https://github.com/ng-alain/delon/commit/6009ae25d1aa2d8e873482216cbf36caf8886ac1))
* **abc:st:** add group column ([#877](https://github.com/ng-alain/delon/issues/877)) ([1b96516](https://github.com/ng-alain/delon/commit/1b965164e3391d76c8dd9b9d4e7c974f8083e4be))
* **auth:** add cookie storage ([#876](https://github.com/ng-alain/delon/issues/876)) ([f6fe116](https://github.com/ng-alain/delon/commit/f6fe1165eedd62bd14739b63e8ce9a1d305e6e35))
* **sf:widget:object:** add card style ([#879](https://github.com/ng-alain/delon/issues/879)) ([702e641](https://github.com/ng-alain/delon/commit/702e64130775816d058fddd468978f3ab0e3c101))
* **util:lazy:** add `loading` status when load is non-complete ([#874](https://github.com/ng-alain/delon/issues/874)) ([05ce8a8](https://github.com/ng-alain/delon/commit/05ce8a863778e750e3336ff8a0be84e6e759bc52))


# [9.1.0](https://github.com/ng-alain/delon/compare/9.0.1...9.1.0) (2020-05-01)

### Bug Fixes

* **abc:reuse-tab:** fix scroll bar misaligned ([#863](https://github.com/ng-alain/delon/issues/863)) ([ea588b2](https://github.com/ng-alain/delon/commit/ea588b2d9748a2c281ed57529b29aa0682380503))
* **abc:reuse-tab:** fix lose ink bar ([#863](https://github.com/ng-alain/delon/issues/863)) ([ea588b2](https://github.com/ng-alain/delon/commit/ea588b2d9748a2c281ed57529b29aa0682380503))
* **abc:st:** fix style misplacement when expand is true ([#860](https://github.com/ng-alain/delon/issues/860)) ([773f546](https://github.com/ng-alain/delon/commit/773f54656d5a6c55be203f0183ebbf1f794ed316))
* **abc:st:** fix unable to display loading when call `load` ([#858](https://github.com/ng-alain/delon/issues/858)) ([020393d](https://github.com/ng-alain/delon/commit/020393d496dcb4bb2e96be191d8bf517a36de8ee))
* **form:** fix default date-time format is invalid iso8601 value ([#864](https://github.com/ng-alain/delon/issues/864)) ([25cb0ee](https://github.com/ng-alain/delon/commit/25cb0eec57bdb0e9428b68ffee02199196f29b61))
* **sf:widget:autocomplete:** fix widget using `ngAfterViewInit` event will be overwrite ([#867](https://github.com/ng-alain/delon/issues/867)) ([a47cfe6](https://github.com/ng-alain/delon/commit/a47cfe66411fb64ce5c7ee84054d5687209cfd05))
* **theme:yn:** fix unable to select parameters ([#866](https://github.com/ng-alain/delon/issues/866)) ([fa9d0ea](https://github.com/ng-alain/delon/commit/fa9d0eae8756df8110a3ded2be04c3557a9ef3e5))
* remove console.log ([#862](https://github.com/ng-alain/delon/issues/862)) ([e15cf62](https://github.com/ng-alain/delon/commit/e15cf625b0129c60fac8eeeb525b29051064f998))
* **theme:default:** fix search icon misplacement ([#857](https://github.com/ng-alain/delon/issues/857)) ([32a6ab4](https://github.com/ng-alain/delon/commit/32a6ab4364b27576a13c19abe1232c2031079107))

### Features

* **abc:media:** add `media` component ([#859](https://github.com/ng-alain/delon/issues/859)) ([5009c5d](https://github.com/ng-alain/delon/commit/5009c5de5d4ba20c8e5a4abaa40a6b54e3290871))
* **abc:reuse-tab:** add refresh, need to modify [route-outlet](https://github.com/ng-alain/ng-alain/pull/1612/files) ([#863](https://github.com/ng-alain/delon/issues/863)) ([ea588b2](https://github.com/ng-alain/delon/commit/ea588b2d9748a2c281ed57529b29aa0682380503))
* **form:** sync property of ng-zorro components ([#868](https://github.com/ng-alain/delon/issues/868)) ([f6bbf63](https://github.com/ng-alain/delon/commit/f6bbf63c0a699eecb0bebea2f4a22d5422aa09ca))


## [9.0.1](https://github.com/ng-alain/delon/compare/9.0.0...9.0.1) (2020-04-27)

### Scaffold

* fix invalid get browser lange ([#1600](https://github.com/ng-alain/ng-alain/pull/1600/files))

### Bug Fixes

* fix support ISO 8601 ([#852](https://github.com/ng-alain/delon/issues/852)) ([ff07adc](https://github.com/ng-alain/delon/commit/ff07adc159c6026cc4e237dccf9f5218df560b21))
* **cli:** should be remove g2 in `ng update` ([#853](https://github.com/ng-alain/delon/issues/853)) ([cd0df52](https://github.com/ng-alain/delon/commit/cd0df52a2a850d64b2a8393a057927127da8e5cd))
* **cli:plugin:ie:** add `ie` plugin ([#855](https://github.com/ng-alain/delon/issues/855)) ([b033c81](https://github.com/ng-alain/delon/commit/b033c81e2eddbcd32f1a312d87ca4cd1cd5d777e))


# 9.0.0 (2020-04-24)

## Welcome to the `9.0.0` version of `ng-alain`. For details please refer to [Upgrade Guide](https://github.com/ng-alain/ng-alain/issues/1569).

### Scaffold

* refactor global config ([#1591](https://github.com/ng-alain/ng-alain/pull/1591/files))
* **feat(abc:st):** add ` widget` configuration of `st` ([#1579](https://github.com/ng-alain/ng-alain/pull/1579))

### Features

* **chart:** add `theme` property ([#839](https://github.com/ng-alain/delon/issues/839)) ([a1903aa](https://github.com/ng-alain/delon/commit/a1903aae6dda4f031f5f2ad7be3aaff25fa31ab1))
* **chart:time-line:** add `maxAxis` property ([#838](https://github.com/ng-alain/delon/issues/838)) ([fa40822](https://github.com/ng-alain/delon/commit/fa40822932308db78c893e746992ba7b38f97de1))
* **abc:se:** add `TemplateRef<void>` in `label`, `error`, `extr… ([#803](https://github.com/ng-alain/delon/issues/803)) ([eb13170](https://github.com/ng-alain/delon/commit/eb131704a374a9ea84803c20dde9836ec78549ee))
* **abc:se:** add auto `required` based on the control element ([#799](https://github.com/ng-alain/delon/issues/799)) ([1d4dad5](https://github.com/ng-alain/delon/commit/1d4dad559743091be1f85ed43757c2c0e20ba3ee))
* **abc:sidebar-nav:** can be set 3 levels icon ([#801](https://github.com/ng-alain/delon/issues/801)) ([087b8e9](https://github.com/ng-alain/delon/commit/087b8e9a94e1ae08a88461faecf2ef606dfa0dd1))
* **abc:st:** add enforce control to top via `reset`, `load` met… ([#800](https://github.com/ng-alain/delon/issues/800)) ([4a8bfb0](https://github.com/ng-alain/delon/commit/4a8bfb0ee34cfac5bbc71c3b9ce6c56f2bcb2c70))
* **theme:** add Japanese language files ([#730](https://github.com/ng-alain/delon/issues/730)) ([5efbe5b](https://github.com/ng-alain/delon/commit/5efbe5b52917fc3981009d76b53536924a6bb680))
* **chart:custom:** add `delay` property ([#818](https://github.com/ng-alain/delon/issues/818)) ([07e59fb](https://github.com/ng-alain/delon/commit/07e59fb5f1bdd1d51660510d34d45b968341faa9))
* **abc:st:** add `widget` type ([#827](https://github.com/ng-alain/delon/issues/827)) ([4d5a767](https://github.com/ng-alain/delon/commit/4d5a767d94a248908465e59a6af9eae110205b68))
* **mock:** add allows return a copy data ([#821](https://github.com/ng-alain/delon/issues/821)) ([16d0146](https://github.com/ng-alain/delon/commit/16d0146234be9031889e70b6d67fa030c7511b03))

### Bug Fixes

* **chart:tag-cloud:** fix overlap ([#816](https://github.com/ng-alain/delon/issues/816)) ([7f31648](https://github.com/ng-alain/delon/commit/7f3164875372dac9358a2349e76fa8e2d988ca84))
* **form:widget:array** fix update value and validity when removing the last… ([#829](https://github.com/ng-alain/delon/issues/829)) ([6ff3db5](https://github.com/ng-alain/delon/commit/6ff3db5fdb24fa4da08ff672d5d3c553fd654186))
* **form:widget:date:** fix format default value ([#833](https://github.com/ng-alain/delon/issues/833)) ([92821b0](https://github.com/ng-alain/delon/commit/92821b047c96cff5a67365a1a32300bad7c76e05))
* **form:widget:date:** fix invalid end date when clean date ([#831](https://github.com/ng-alain/delon/issues/831)) ([04e6983](https://github.com/ng-alain/delon/commit/04e698350d8b190f8578821927e5edd796df7050))


### BREAKING CHANGES

* The All "General Configuration" method is going to be removed in 10.0.0. Please refer to https://ng-alain.com/docs/global-config


## Old Version

All releases notes can be found [here](https://github.com/ng-alain/ng-alain/releases)
