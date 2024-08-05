---
order: 100
title: 更新日志
type: Other
---

NG-ALAIN 严格遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范。

#### 发布周期

* 修订版本号：每周末会进行日常 bugfix 更新。（如果有紧急的 bugfix，则任何时候都可发布）
* 次版本号：每月发布一个带有新特性的向下兼容的版本。
* 主版本号：含有破坏性更新和新特性，不在发布周期内。

---

## 18.1.0 (2024-08-05)

### Features

* feat(abc:let): Angular 18.1 以后请使用内置 `@let` 替代 (#1814) ([5dd82df](https://github.com/ng-alain/delon/commit/5dd82df)), closes [#1814](https://github.com/ng-alain/delon/issues/1814)
* feat(abc:result): 使用 `nz-result` 替代 (#1818) ([62da4d1](https://github.com/ng-alain/delon/commit/62da4d1)), closes [#1818](https://github.com/ng-alain/delon/issues/1818)
* feat(abc:st): 新增 `expandIcon` 属性 (#1812) ([663b764](https://github.com/ng-alain/delon/commit/663b764)), closes [#1812](https://github.com/ng-alain/delon/issues/1812)
* feat(theme): `_date` 管道支持自定义处理时间格式化处理 (#1822) ([772ecb4](https://github.com/ng-alain/delon/commit/772ecb4)), closes [#1822](https://github.com/ng-alain/delon/issues/1822)

### Bug Fixes

* fix(abc:lodop): `url` 支持带有URL参数 (#1824) ([a3dc917](https://github.com/ng-alain/delon/commit/a3dc917)), closes [#1824](https://github.com/ng-alain/delon/issues/1824)
* fix(abc:st): 纠正 `date` 类型时间戳默认值不正确 (#1823) ([40ae0dc](https://github.com/ng-alain/delon/commit/40ae0dc)), closes [#1823](https://github.com/ng-alain/delon/issues/1823)
* fix(form:select): 修复 `maxTagCount` 默认值应该是 `Infinity` (#1815) ([bafe3ab](https://github.com/ng-alain/delon/commit/bafe3ab)), closes [#1815](https://github.com/ng-alain/delon/issues/1815)
* fix(form:select): 修复 `showArrow` 不正确默认值 (#1816) ([666c17a](https://github.com/ng-alain/delon/commit/666c17a)), closes [#1816](https://github.com/ng-alain/delon/issues/1816)
* fix(theme): 修复暗黑颜色样式 (#1819) ([6389ec1](https://github.com/ng-alain/delon/commit/6389ec1)), closes [#1819](https://github.com/ng-alain/delon/issues/1819)


## <small>18.0.2 (2024-07-04)</small>

* build: 纠正没有生成 css 文件 (#1811) ([22d3878](https://github.com/ng-alain/delon/commit/22d3878)), closes [#1811](https://github.com/ng-alain/delon/issues/1811)

## <small>18.0.1 (2024-07-02)</small>

* fix(cli): 纠正 `angular.json` 缺少设置 `src/assets` (#1809) ([18166bc](https://github.com/ng-alain/delon/commit/18166bc)), closes [#1809](https://github.com/ng-alain/delon/issues/1809)

## 18.0.0 (2024-07-02)

### Breaking Changes

* feat(abc:qr): 已移除，使用 ng-zorro-antd 提供的 `qr-code` 组件 (#1800) ([dabd26c](https://github.com/ng-alain/delon/commit/dabd26c)), closes [#1800](https://github.com/ng-alain/delon/issues/1800)

### Features

* feat(theme): support css variable (#1785) ([19be3b1](https://github.com/ng-alain/delon/commit/19be3b1)), closes [#1785](https://github.com/ng-alain/delon/issues/1785)
* feat: adding Arabic locale (#1796) ([6db6763](https://github.com/ng-alain/delon/commit/6db6763)), closes [#1796](https://github.com/ng-alain/delon/issues/1796)

### Bug Fixes

* fix(abc:notice-icon): fix incorrect unsubscription (#1794) ([4077073](https://github.com/ng-alain/delon/commit/4077073)), closes [#1794](https://github.com/ng-alain/delon/issues/1794)
* fix(abc:notice-icon): fix nz-tabset animation triggers panel `0` height (#1805) ([73608d1](https://github.com/ng-alain/delon/commit/73608d1)), closes [#1805](https://github.com/ng-alain/delon/issues/1805)
* fix(abc:st): fix optional use context menu (#1804) ([bcf9721](https://github.com/ng-alain/delon/commit/bcf9721)), closes [#1804](https://github.com/ng-alain/delon/issues/1804)
* fix(theme:http): fix type mismatch of `post` (#1803) ([36ee49b](https://github.com/ng-alain/delon/commit/36ee49b)), closes [#1803](https://github.com/ng-alain/delon/issues/1803)
* fix(cli): remove `ng-less-javascript-enabled-patch` (#1806) ([7225b35](https://github.com/ng-alain/delon/commit/7225b35)), closes [#1806](https://github.com/ng-alain/delon/issues/1806)


## 历史版本

历史版本的更新记录可以在 [Github](https://github.com/ng-alain/ng-alain/releases) 查看。
