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

# [8.4.0](https://github.com/ng-alain/delon/compare/8.3.0...8.4.0) (2019-09-01)

### Bug Fixes

* **abc:sidebar-nav:** fix invalid click children title in collapsed ([#673](https://github.com/ng-alain/delon/issues/673)) ([b6c1fc6](https://github.com/ng-alain/delon/commit/b6c1fc6))
* **abc:sidebar-nav:** fix style misplacement ([#677](https://github.com/ng-alain/delon/issues/677)) ([efd9bb1](https://github.com/ng-alain/delon/commit/efd9bb1))
* **abc:st:** fix ingored incomplete request when has new request ([#674](https://github.com/ng-alain/delon/issues/674)) ([c98ae19](https://github.com/ng-alain/delon/commit/c98ae19))
* **abc:st:** fix invalid title in export ([#672](https://github.com/ng-alain/delon/issues/672)) ([48ca08f](https://github.com/ng-alain/delon/commit/48ca08f))
* **abc:sv:** fix `labelWidth` type in `SVConfig` ([#668](https://github.com/ng-alain/delon/issues/668)) ([43cf770](https://github.com/ng-alain/delon/commit/43cf770))

### Features

* **abc:st:** add `pop` property ([#676](https://github.com/ng-alain/delon/issues/676)) ([a078f02](https://github.com/ng-alain/delon/commit/a078f02))
* **cache:** add `type`, `expire` in `DelonCacheConfig` ([#669](https://github.com/ng-alain/delon/issues/669)) ([9d393fb](https://github.com/ng-alain/delon/commit/9d393fb))


# [8.3.0](https://github.com/ng-alain/delon/compare/8.2.0...8.3.0) (2019-08-03)

### Bug Fixes

* **abc:reuse-tab:** should be always get title from menu data ([#661](https://github.com/ng-alain/delon/issues/661)) ([6e63418](https://github.com/ng-alain/delon/commit/6e63418))
* **abc:sidebar:** fix invalid subnode when include badge value in collapsed mode ([#665](https://github.com/ng-alain/delon/issues/665)) ([763a27e](https://github.com/ng-alain/delon/commit/763a27e))
* **abc:st:** fix ignore catch error of http request when component is destroyed ([#658](https://github.com/ng-alain/delon/issues/658)) ([6bd97eb](https://github.com/ng-alain/delon/commit/6bd97eb))
* **theme:title:** should be avoid can't get title when rendered componet in `NavigationEnd` event ([#660](https://github.com/ng-alain/delon/issues/660)) ([0db451d](https://github.com/ng-alain/delon/commit/0db451d))
* **abc:st:** fix ingore truncate of `img` column when `strictBehavior` is `truncate` ([#656](https://github.com/ng-alain/delon/issues/656)) ([4ae8f13](https://github.com/ng-alain/delon/commit/4ae8f13))

### Features

* **abc:st:** add `lazyLoad` property in `req` ([#656](https://github.com/ng-alain/delon/issues/656)) ([4ae8f13](https://github.com/ng-alain/delon/commit/4ae8f13))
* **abc:st:** add `STColumnTitle` type of `title` property` ([#657](https://github.com/ng-alain/delon/issues/657)) ([9408ccc](https://github.com/ng-alain/delon/commit/9408ccc))
* **acl:** support specify guard fail url in router data ([#666](https://github.com/ng-alain/delon/issues/666)) ([bee66fd](https://github.com/ng-alain/delon/commit/bee66fd))
* **form:*:** support date-fns format in `date`, `time` widgets ([#663](https://github.com/ng-alain/delon/issues/663)) ([ba91193](https://github.com/ng-alain/delon/commit/ba91193))


# [8.2.0](https://github.com/ng-alain/delon/compare/8.1.0...8.2.0) (2019-07-20)

### Scaffold

* fix: fix `alain-default.less` file write always append mode ([#1248](https://github.com/ng-alain/ng-alain/pull/1248))

### Bug Fixes

* **abc:*:** fix element as a block element in `sv-title`, `se-title` components ([#651](https://github.com/ng-alain/delon/issues/651)) ([d92a21d](https://github.com/ng-alain/delon/commit/d92a21d))
* **auth:** fix `referrer.url` should be always latest router url ([#654](https://github.com/ng-alain/delon/issues/654)) ([89098e1](https://github.com/ng-alain/delon/commit/89098e1))

### Features

* **abc:reuse-tab:** add `tabType` property, support `card` style ([#652](https://github.com/ng-alain/delon/issues/652)) ([9da990f](https://github.com/ng-alain/delon/commit/9da990f))
* **abc:*:** add ellipsis of long label text in `sv` and `se` components ([#651](https://github.com/ng-alain/delon/issues/651)) ([d92a21d](https://github.com/ng-alain/delon/commit/d92a21d))


# [8.1.0](https://github.com/ng-alain/delon/compare/8.0.0...8.1.0) (2019-07-12)

### Scaffold

* feat: add proxying to a backend server ([#1237](https://github.com/ng-alain/ng-alain/pull/1237))

### Bug Fixes

* **abc:st:** fix losing default `page` config ([#649](https://github.com/ng-alain/delon/issues/649)) ([8f59ea2](https://github.com/ng-alain/delon/commit/8f59ea2))
* **form:** fix losing inherit of `ui` property value ([#647](https://github.com/ng-alain/delon/issues/647)) ([f2df673](https://github.com/ng-alain/delon/commit/f2df673))
* **form:** fix missing style of widget item ([#646](https://github.com/ng-alain/delon/issues/646)) ([fe2f0fe](https://github.com/ng-alain/delon/commit/fe2f0fe))
* **theme:menu:** fix can be choose one of `text` or `i18n` ([#648](https://github.com/ng-alain/delon/issues/648)) ([3200998](https://github.com/ng-alain/delon/commit/3200998))

### Features

* **abc:st:** add `index` argument of `format` ([#644](https://github.com/ng-alain/delon/issues/644)) ([498d0b7](https://github.com/ng-alain/delon/commit/498d0b7))
* **cli:** add proxying to a backend server ([#645](https://github.com/ng-alain/delon/issues/645)) ([10c91d8](https://github.com/ng-alain/delon/commit/10c91d8))


# [8.0.0](https://github.com/ng-alain/delon/compare/8.0.0-rc.1...8.0.0) (2019-07-03)

**`8.0.0` version has some breaking changes. pls read more [Upgrade Guide](https://ng-alain.com/docs/upgrade-v8/en).**

### Bug Fixes

* **theme:style:** fix aside user style ([#639](https://github.com/ng-alain/delon/issues/639)) ([ede1d15](https://github.com/ng-alain/delon/commit/ede1d15))
* **abc:st:** ingore `title` required in `STColumn` ([#632](https://github.com/ng-alain/delon/issues/632)) ([69608c5](https://github.com/ng-alain/delon/commit/69608c5))
* **cli:plugin:icon:** fix unidentified `nzType` property ([#637](https://github.com/ng-alain/delon/issues/637)) ([2784a5a](https://github.com/ng-alain/delon/commit/2784a5a))
* **form:array:** fix disabled add & remove buttons when `readOnly` is `true` ([#633](https://github.com/ng-alain/delon/issues/633)) ([15194cc](https://github.com/ng-alain/delon/commit/15194cc))
* **form:array:** fix invalid value subscript of path value ([#628](https://github.com/ng-alain/delon/issues/628)) ([09807f7](https://github.com/ng-alain/delon/commit/09807f7))
* **form:upload:** fix invalid `showUploadList` property ([#634](https://github.com/ng-alain/delon/issues/634)) ([54c3b90](https://github.com/ng-alain/delon/commit/54c3b90))
* **form:*:** fix invalid render value when call `setValue` method ([#622](https://github.com/ng-alain/delon/issues/622)) ([4cea3b7](https://github.com/ng-alain/delon/commit/4cea3b7))

### Features

* **abc:st:** add `tooltip` property in button ([#640](https://github.com/ng-alain/delon/issues/640)) ([181e3a1](https://github.com/ng-alain/delon/commit/181e3a1))
* **abc:st:** add `emitReload` of `resetColumns` method ([#635](https://github.com/ng-alain/delon/issues/635)) ([a96123e](https://github.com/ng-alain/delon/commit/a96123e))
* **abc:down-file:** add `down-file_not-support` & `down-file__disabled` ([#624](https://github.com/ng-alain/delon/issues/624)) ([2369153](https://github.com/ng-alain/delon/commit/2369153))
* **abc:st:** `confirmText`, `clearText` support i18n text ([#618](https://github.com/ng-alain/delon/issues/618)) ([a8cd300](https://github.com/ng-alain/delon/commit/a8cd300))
* **abc:st:** add keyword in filter ([#612](https://github.com/ng-alain/delon/issues/612)) ([543236d](https://github.com/ng-alain/delon/commit/543236d))
* **form:** `optionalHelp` support complex attributes ([#621](https://github.com/ng-alain/delon/issues/621)) ([d45fddf](https://github.com/ng-alain/delon/commit/d45fddf))
* **form:** support i18n ([#625](https://github.com/ng-alain/delon/issues/625)) ([e1bbbdb](https://github.com/ng-alain/delon/commit/e1bbbdb))
* **util:deepMergeKey:** support `null` & `undefined` of objects parament ([#620](https://github.com/ng-alain/delon/issues/620)) ([a8ddbb8](https://github.com/ng-alain/delon/commit/a8ddbb8))

### Performance Improvements

* **cli:** optimize to provide more detailed errors ([#619](https://github.com/ng-alain/delon/issues/619)) ([7ebef13](https://github.com/ng-alain/delon/commit/7ebef13))

### BREAKING CHANGES

* `DelonACLModule` muse be using `forRoot()`


## Old Version

All releases notes can be found [here](https://github.com/ng-alain/ng-alain/releases)
