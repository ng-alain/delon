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
