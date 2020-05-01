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
