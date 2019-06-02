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

# [7.6.0](https://github.com/ng-alain/delon/compare/7.5.0...7.6.0) (2019-06-02)

### Scaffold

* refactor code styles config ([#1119](https://github.com/ng-alain/ng-alain/pull/1119))

### Bug Fixes

* **abc:st:** fix trigger area in sub buttons ([#585](https://github.com/ng-alain/delon/issues/585)) ([3f7f9a5](https://github.com/ng-alain/delon/commit/3f7f9a5))
* **cli:** fix lint in windows ([#586](https://github.com/ng-alain/delon/issues/586)) ([1782498](https://github.com/ng-alain/delon/commit/1782498))

### Features

* **abc:st:** add `filteredData` property in component ([#588](https://github.com/ng-alain/delon/issues/588)) ([f74e589](https://github.com/ng-alain/delon/commit/f74e589))
* **abc:st:** add virtual scroll ([#590](https://github.com/ng-alain/delon/issues/590)) ([1a88bfd](https://github.com/ng-alain/delon/commit/1a88bfd))
* **abc:st:** add function type in button `text` property ([#585](https://github.com/ng-alain/delon/issues/585)) ([3f7f9a5](https://github.com/ng-alain/delon/commit/3f7f9a5))
* **form:date:** add `year` in `mode` property ([#587](https://github.com/ng-alain/delon/issues/587)) ([935b8c2](https://github.com/ng-alain/delon/commit/935b8c2))


# [7.5.0](https://github.com/ng-alain/delon/compare/7.4.0...7.5.0) (2019-05-25)

### Scaffold

* refactor `color-less.js` ([#1100](https://github.com/ng-alain/ng-alain/pull/1100))

### Bug Fixes

* **abc:se:** fix losing optional icon ([#577](https://github.com/ng-alain/delon/issues/577)) ([d9033dd](https://github.com/ng-alain/delon/commit/d9033dd))
* **form:** fix ingore trigger `formChange` event when call `refreshSchema` ([#579](https://github.com/ng-alain/delon/issues/579)) ([4f4c4f9](https://github.com/ng-alain/delon/commit/4f4c4f9))
* **form:autocomplete:** fix verify form in typing ([#580](https://github.com/ng-alain/delon/issues/580)) ([3371168](https://github.com/ng-alain/delon/commit/3371168))

### Features

* **abc:st:** add `expandAccordion` property ([#576](https://github.com/ng-alain/delon/issues/576)) ([d3dd0e4](https://github.com/ng-alain/delon/commit/d3dd0e4))
* **abc:sv:** add `optional` `optionalHelp` properittes ([#578](https://github.com/ng-alain/delon/issues/578)) ([8968ae4](https://github.com/ng-alain/delon/commit/8968ae4))
* **form:** add `acl` property ([#574](https://github.com/ng-alain/delon/issues/574)) ([54ddae9](https://github.com/ng-alain/delon/commit/54ddae9))


# [7.4.0](https://github.com/ng-alain/delon/compare/7.3.2...7.4.0) (2019-05-16)

### Bug Fixes

* **abc:sidebar:** fix invalid iconfont icon ([#568](https://github.com/ng-alain/delon/issues/568)) ([9a8ebae](https://github.com/ng-alain/delon/commit/9a8ebae))
* **abc:st:** fix ingore pi event trigger when change size in last page ([#564](https://github.com/ng-alain/delon/issues/564)) ([375d605](https://github.com/ng-alain/delon/commit/375d605))
* **abc:st:** fix responsive styles pollution `nz-table` ([#563](https://github.com/ng-alain/delon/issues/563)) ([4a78ef2](https://github.com/ng-alain/delon/commit/4a78ef2))
* **cli:** fix invalid translate in `ng add` ([#561](https://github.com/ng-alain/delon/issues/561)) ([add2ec0](https://github.com/ng-alain/delon/commit/add2ec0))
* **cli:** fix repeat variable suffix in `ng g ng-alain` ([#560](https://github.com/ng-alain/delon/issues/560)) ([7b8d9eb](https://github.com/ng-alain/delon/commit/7b8d9eb))
* **form:select:** fix invlaid tag count ([#571](https://github.com/ng-alain/delon/issues/571)) ([56abb18](https://github.com/ng-alain/delon/commit/56abb18))

### Features

* **abc:st:** ingore sort procees when `compare` is `null` ([#570](https://github.com/ng-alain/delon/issues/570)) ([0b625b4](https://github.com/ng-alain/delon/commit/0b625b4))
* **acl:** add `except` property in `ACLType` ([#566](https://github.com/ng-alain/delon/issues/566)) ([3787128](https://github.com/ng-alain/delon/commit/3787128))


## [7.3.2](https://github.com/ng-alain/delon/compare/7.3.1...7.3.2) (2019-05-04)

### Scaffold

* style: update html config of prettier ([c0338ef](https://github.com/ng-alain/ng-alain/commit/c0338ef))
* perf: performance demo ([#1062](https://github.com/ng-alain/ng-alain/pull/1062))

### Bug Fixes

* **abc:se:** fix ingore label width when layout is inline ([#553](https://github.com/ng-alain/delon/issues/553)) ([70322fa](https://github.com/ng-alain/delon/commit/70322fa))
* **abc:st:** add `rawData` parameter of `res.process` ([#549](https://github.com/ng-alain/delon/issues/549)) ([102f53f](https://github.com/ng-alain/delon/commit/102f53f))
* **abc:st:** fix auto hide dropdown in buttons ([#556](https://github.com/ng-alain/delon/issues/556)) ([5eb00eb](https://github.com/ng-alain/delon/commit/5eb00eb))
* **theme:http:** fix losing generic in `get` ([#551](https://github.com/ng-alain/delon/issues/551)) ([b2e1482](https://github.com/ng-alain/delon/commit/b2e1482))
* **util:deepMergeKey:** fix override array when  ingoreArray is true ([#555](https://github.com/ng-alain/delon/issues/555)) ([6d4c1cc](https://github.com/ng-alain/delon/commit/6d4c1cc))

### Performance Improvements

* use secondary entry modules in ng-zorro ([#548](https://github.com/ng-alain/delon/issues/548)) ([5d8bac1](https://github.com/ng-alain/delon/commit/5d8bac1))


## [7.3.1](https://github.com/ng-alain/delon/compare/7.3.0...7.3.1) (2019-04-30)

### Scaffold

* style: update stylelint config ([#1054](https://github.com/ng-alain/ng-alain/pull/1054))

### Bug Fixes

* **abc:sv:** fix detail misalignment when content include block ([#545](https://github.com/ng-alain/delon/issues/545)) ([a3191a3](https://github.com/ng-alain/delon/commit/a3191a3))
* **cli:** fix `lint:style` invalid script ([#541](https://github.com/ng-alain/delon/issues/541)) ([1d41e82](https://github.com/ng-alain/delon/commit/1d41e82))
* **form:*:** fix `ViewDestroyedError` error ([#542](https://github.com/ng-alain/delon/issues/542)) ([5d8ffa4](https://github.com/ng-alain/delon/commit/5d8ffa4))
* **theme:http:** fix losing retrun a generic type in `get` ([#546](https://github.com/ng-alain/delon/issues/546)) ([359159c](https://github.com/ng-alain/delon/commit/359159c))


# [7.3.0](https://github.com/ng-alain/delon/compare/7.2.0...7.3.0) (2019-04-26)

### Scaffold

* 401 no need to prompt for request error ([#1023](https://github.com/ng-alain/ng-alain/pull/1023))
* Upgrade `screenfull` to `4.2.0` ([#1031](https://github.com/ng-alain/ng-alain/pull/1031))
* Update `prettier` settings ([#1034](https://github.com/ng-alain/ng-alain/pull/1034))

### Bug Fixes

* **abc:st:** fix ingore load data when page size changed ([#539](https://github.com/ng-alain/delon/issues/539)) ([12ad96f](https://github.com/ng-alain/delon/commit/12ad96f))
* **form:*:** fix can't render when async data ([#525](https://github.com/ng-alain/delon/issues/525)) ([d4d4428](https://github.com/ng-alain/delon/commit/d4d4428))
* **form:date:** fix throw error when not include end property ([#527](https://github.com/ng-alain/delon/issues/527)) ([f06757c](https://github.com/ng-alain/delon/commit/f06757c))
* **form:select:** fix i18n of notFoundContent ([#524](https://github.com/ng-alain/delon/issues/524)) ([1df658c](https://github.com/ng-alain/delon/commit/1df658c))
* **form:upload:** fix clean value when remove file list ([#526](https://github.com/ng-alain/delon/issues/526)) ([0f4e1c5](https://github.com/ng-alain/delon/commit/0f4e1c5))
* **theme:drawer:** fix deep merge object ([#535](https://github.com/ng-alain/delon/issues/535)) ([9c588eb](https://github.com/ng-alain/delon/commit/9c588eb))
* **theme:modal:** fix losing `nzWrapClassName` when has `size` exists ([#537](https://github.com/ng-alain/delon/issues/537)) ([c64834a](https://github.com/ng-alain/delon/commit/c64834a))

### Features

* **abc:st:** add `showExpand` property ([#520](https://github.com/ng-alain/delon/issues/520)) ([d87d56f](https://github.com/ng-alain/delon/commit/d87d56f))
* **abc:st:** add `widthMode` property ([#518](https://github.com/ng-alain/delon/issues/518)) ([715d5de](https://github.com/ng-alain/delon/commit/715d5de))
* **abc:st:** support controlled `loading` property ([#533](https://github.com/ng-alain/delon/issues/533)) ([317b88c](https://github.com/ng-alain/delon/commit/317b88c))
* **acl:** add `*aclIf` structural directive ([#529](https://github.com/ng-alain/delon/issues/529)) ([cf49779](https://github.com/ng-alain/delon/commit/cf49779))
* **form:** add icon in `button` proprety ([#538](https://github.com/ng-alain/delon/issues/538)) ([0ef4281](https://github.com/ng-alain/delon/commit/0ef4281))
* **form:** add `loading` property ([#517](https://github.com/ng-alain/delon/issues/517)) ([1e9df24](https://github.com/ng-alain/delon/commit/1e9df24))
* **theme:yn:** add `mode` property ([#534](https://github.com/ng-alain/delon/issues/534)) ([ebd42be](https://github.com/ng-alain/delon/commit/ebd42be))
* **theme:drawer:** add `exact` property ([#535](https://github.com/ng-alain/delon/issues/535)) ([9c588eb](https://github.com/ng-alain/delon/commit/9c588eb))

### Special Thanks

Amit0043, its404


# [7.2.0](https://github.com/ng-alain/delon/compare/7.1.0...7.2.0) (2019-04-09)

### Bug Fixes

* **abc:_src:** fix invalid `size` property ([#503](https://github.com/ng-alain/delon/issues/503)) ([76fc61b](https://github.com/ng-alain/delon/commit/76fc61b))
* **abc:reuse-tab:** fix actived select tab when close right or other ([#500](https://github.com/ng-alain/delon/issues/500)) ([ed3eef7](https://github.com/ng-alain/delon/commit/ed3eef7))
* **abc:st:** fix missing trigger `expand` event when click expand icon ([#501](https://github.com/ng-alain/delon/issues/501)) ([a0a9c53](https://github.com/ng-alain/delon/commit/a0a9c53))
* **cli:** fix removed `header-i18n` when no-include i18n ([#505](https://github.com/ng-alain/delon/issues/505)) ([9839f69](https://github.com/ng-alain/delon/commit/9839f69))
* **sf:** fix layout misplacement in inline mode ([#514](https://github.com/ng-alain/delon/issues/514)) ([9a7901a](https://github.com/ng-alain/delon/commit/9a7901a))
* **sf:radio:** fix async data invlid render ([#504](https://github.com/ng-alain/delon/issues/504)) ([18c6af5](https://github.com/ng-alain/delon/commit/18c6af5))

### Features

* **abc:reuse-tab:** add `tabBarExtraContent` `tabBarStyle` `tabBarGutter` properites ([#510](https://github.com/ng-alain/delon/issues/510)) ([5d48933](https://github.com/ng-alain/delon/commit/5d48933))
* **acl:** add `preCan` property in global config ([#511](https://github.com/ng-alain/delon/issues/511)) ([1bdbd8c](https://github.com/ng-alain/delon/commit/1bdbd8c))


# [7.1.0](https://github.com/ng-alain/delon/compare/7.0.3...7.1.0) (2019-03-29)

### Bug Fixes

* **sf:checkbox:** fix invalid trigger check-all when click input ([#493](https://github.com/ng-alain/delon/issues/493)) ([4ee3ca5](https://github.com/ng-alain/delon/commit/4ee3ca5))
* **sf:select:** fix invalid clear value ([#496](https://github.com/ng-alain/delon/issues/496)) ([28e3915](https://github.com/ng-alain/delon/commit/28e3915))

### Features

* **abc:qr:** add support unicode value ([#495](https://github.com/ng-alain/delon/issues/495)) ([9082319](https://github.com/ng-alain/delon/commit/9082319))
* **abc:sv:** add `unit` property ([#497](https://github.com/ng-alain/delon/issues/497)) ([5a84e1b](https://github.com/ng-alain/delon/commit/5a84e1b))
* **cli:plugin:sts:** add [sts](https://github.com/ng-alain/sts) plugin ([#494](https://github.com/ng-alain/delon/issues/494)) ([5f735db](https://github.com/ng-alain/delon/commit/5f735db))
* **module:theme:** adding Korean locale ([#486](https://github.com/ng-alain/delon/issues/486)) ([5e3ad9c](https://github.com/ng-alain/delon/commit/5e3ad9c))

### BREAKING CHANGES

* **refactor(abc:st):** `currenty` rename to `currency` ([#492](https://github.com/ng-alain/delon/issues/492)) ([f42861a](https://github.com/ng-alain/delon/commit/f42861a))


## [7.0.3](https://github.com/ng-alain/delon/compare/7.0.2...7.0.3) (2019-03-20)

### Bug Fixes

* **abc:result:** use `nzType` instead of class anticon ([#483](https://github.com/ng-alain/delon/issues/483)) ([7553860](https://github.com/ng-alain/delon/commit/7553860))
* **abc:se:** should be keeping placeholder when content is empty ([#480](https://github.com/ng-alain/delon/issues/480)) ([e35c2e0](https://github.com/ng-alain/delon/commit/e35c2e0))
* **abc:st:** fix invalid number type of width ([#481](https://github.com/ng-alain/delon/issues/481)) ([7cdbe6e](https://github.com/ng-alain/delon/commit/7cdbe6e))
* **abc:st:** fix losing global config in modal or drawer ([#482](https://github.com/ng-alain/delon/issues/482)) ([ab34a44](https://github.com/ng-alain/delon/commit/ab34a44))
* **abc:st:** fix styles of filter button ([#474](https://github.com/ng-alain/delon/issues/474)) ([f491b4d](https://github.com/ng-alain/delon/commit/f491b4d))
* **sf:number:** fix show undefined or null when use prefix or unit an… ([#473](https://github.com/ng-alain/delon/issues/473)) ([4d2cede](https://github.com/ng-alain/delon/commit/4d2cede))
* **util:deepGet:** fix losing 0 value ([#479](https://github.com/ng-alain/delon/issues/479)) ([bf37459](https://github.com/ng-alain/delon/commit/bf37459))

### Features

* **abc:st:** add raw data in custom  type of statistical ([#478](https://github.com/ng-alain/delon/issues/478)) ([431c461](https://github.com/ng-alain/delon/commit/431c461))


## [7.0.2](https://github.com/ng-alain/delon/compare/7.0.1...7.0.2) (2019-03-05)

### Bug Fixes

* **abc:sidebar-nav:** fix warnning 'Navigation triggered outside Angu… ([#466](https://github.com/ng-alain/delon/issues/466)) ([b565b3f](https://github.com/ng-alain/delon/commit/b565b3f))
* **abc:st:** fix losing req config ([#467](https://github.com/ng-alain/delon/issues/467)) ([697f33e](https://github.com/ng-alain/delon/commit/697f33e))
* **theme:drawer:** fix body scroll when placement is top or bottom ([#469](https://github.com/ng-alain/delon/issues/469)) ([873d0de](https://github.com/ng-alain/delon/commit/873d0de))

### Features

* **sf:upload:** add urlReName property ([#464](https://github.com/ng-alain/delon/issues/464)) ([5540631](https://github.com/ng-alain/delon/commit/5540631))


## [7.0.1](https://github.com/ng-alain/delon/compare/7.0.0...7.0.1) (2019-03-01)

### Bug Fixes

* **cli:** fix ignores files and folders named "core" by default ([#461](https://github.com/ng-alain/delon/issues/461)) ([bd5696a](https://github.com/ng-alain/delon/commit/bd5696a))


# [7.0.0](https://github.com/ng-alain/delon/compare/7.0.0-rc.10...7.0.0) (2019-02-28)

**All is well, has been waiting for NG-ZORRO 7.0.0, it's the basic component of ng-alain, so this update just keeps the synchronization of the major version number**

### Features

* sync NG-ZORRO 7.0.0
* add el_GR locale ([#423](https://github.com/ng-alain/delon/issues/423)) ([17a03d6](https://github.com/ng-alain/delon/commit/17a03d6))

## Old Version

All releases notes can be found [here](https://github.com/ng-alain/ng-alain/releases)
