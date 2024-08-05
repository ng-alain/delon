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

## 18.1.0 (2024-08-05)

### Features

* feat(abc:let): will be removed in v19 (#1814) ([5dd82df](https://github.com/ng-alain/delon/commit/5dd82df)), closes [#1814](https://github.com/ng-alain/delon/issues/1814)
* feat(abc:result): will be removed in v20 (#1818) ([62da4d1](https://github.com/ng-alain/delon/commit/62da4d1)), closes [#1818](https://github.com/ng-alain/delon/issues/1818)
* feat(abc:st): add `expandIcon` property (#1812) ([663b764](https://github.com/ng-alain/delon/commit/663b764)), closes [#1812](https://github.com/ng-alain/delon/issues/1812)
* feat(theme): support custom process of `_date` pipe (#1822) ([772ecb4](https://github.com/ng-alain/delon/commit/772ecb4)), closes [#1822](https://github.com/ng-alain/delon/issues/1822)

### Bug Fixes

* fix(abc:lodop): support URL with parameters (#1824) ([a3dc917](https://github.com/ng-alain/delon/commit/a3dc917)), closes [#1824](https://github.com/ng-alain/delon/issues/1824)
* fix(abc:st): correct default value of `date` type (#1823) ([40ae0dc](https://github.com/ng-alain/delon/commit/40ae0dc)), closes [#1823](https://github.com/ng-alain/delon/issues/1823)
* fix(form:select): fix `maxTagCount` default value is `Infinity` (#1815) ([bafe3ab](https://github.com/ng-alain/delon/commit/bafe3ab)), closes [#1815](https://github.com/ng-alain/delon/issues/1815)
* fix(form:select): fix incorrect default value of `showArrow` (#1816) ([666c17a](https://github.com/ng-alain/delon/commit/666c17a)), closes [#1816](https://github.com/ng-alain/delon/issues/1816)
* fix(theme): fix dark style color (#1819) ([6389ec1](https://github.com/ng-alain/delon/commit/6389ec1)), closes [#1819](https://github.com/ng-alain/delon/issues/1819)


## <small>18.0.2 (2024-07-04)</small>

* build: correct css not generated (#1811) ([22d3878](https://github.com/ng-alain/delon/commit/22d3878)), closes [#1811](https://github.com/ng-alain/delon/issues/1811)

## <small>18.0.1 (2024-07-02)</small>

* fix(cli): corrected missing setup `src/assets` of `angular.json` (#1809) ([18166bc](https://github.com/ng-alain/delon/commit/18166bc)), closes [#1809](https://github.com/ng-alain/delon/issues/1809)


## 18.0.0 (2024-07-02)

### Breaking Changes

* feat(abc:qr): Removed, use `qr-code` component provided by ng-zorro-antd (#1800) ([dabd26c](https://github.com/ng-alain/delon/commit/dabd26c)), closes [#1800](https://github.com/ng-alain/delon/issues/1800)

### Features

* feat(theme): 支持CSS变量 (#1785) ([19be3b1](https://github.com/ng-alain/delon/commit/19be3b1)), closes [#1785](https://github.com/ng-alain/delon/issues/1785)
* feat: 新增阿拉伯语 (#1796) ([6db6763](https://github.com/ng-alain/delon/commit/6db6763)), closes [#1796](https://github.com/ng-alain/delon/issues/1796)

### Bug Fixes

* fix(abc:notice-icon): 修复不正确的取消订阅 (#1794) ([4077073](https://github.com/ng-alain/delon/commit/4077073)), closes [#1794](https://github.com/ng-alain/delon/issues/1794)
* fix(abc:notice-icon): 修复 nz-tabset 动画导致面板高度为 0 问题 (#1805) ([73608d1](https://github.com/ng-alain/delon/commit/73608d1)), closes [#1805](https://github.com/ng-alain/delon/issues/1805)
* fix(abc:st): 修复右击菜单模块为可选导入问题 (#1804) ([bcf9721](https://github.com/ng-alain/delon/commit/bcf9721)), closes [#1804](https://github.com/ng-alain/delon/issues/1804)
* fix(theme:http): 修复 `post` 类型错误 (#1803) ([36ee49b](https://github.com/ng-alain/delon/commit/36ee49b)), closes [#1803](https://github.com/ng-alain/delon/issues/1803)
* fix(cli): 移除 `ng-less-javascript-enabled-patch` (#1806) ([7225b35](https://github.com/ng-alain/delon/commit/7225b35)), closes [#1806](https://github.com/ng-alain/delon/issues/1806)


## Old Versions

All releases notes can be found [here](https://github.com/ng-alain/ng-alain/releases).
