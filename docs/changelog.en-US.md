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
