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

# [8.0.0-rc.0](https://github.com/ng-alain/delon/compare/7.7.1...8.0.0-rc.0) (2019-06-23)

**`8.0.0-rc.0` version has some breaking changes. pls read more [Upgrade Guide](https://ng-alain.com/docs/upgrade-v8/en).**

### Bug Fixes

* **form:*:** fix invalid render value when call `setValue` method ([#622](https://github.com/ng-alain/delon/issues/622)) ([4cea3b7](https://github.com/ng-alain/delon/commit/4cea3b7))

### Features

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
