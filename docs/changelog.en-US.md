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

## [7.2.0](https://github.com/ng-alain/delon/compare/7.1.0...7.2.0) (2019-04-09)

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


## [7.1.0](https://github.com/ng-alain/delon/compare/7.0.3...7.1.0) (2019-03-29)

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
