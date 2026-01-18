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

## <small>21.0.2 (2026-01-18)</small>

* fix(acl:if): 修复 NG0950 错误 (#1974) ([2cdef54](https://github.com/ng-alain/delon/commit/2cdef54)), closes [#1974](https://github.com/ng-alain/delon/issues/1974)
* fix(cli): 修复 `ng add ng-alain` 缺少 vitest 配置 (#1973) ([f708066](https://github.com/ng-alain/delon/commit/f708066)), closes [#1973](https://github.com/ng-alain/delon/issues/1973)


## <small>21.0.1 (2026-01-17)</small>

* fix(cli): 修复缺少 `ReuseTabComponent` 导入 (#1970) ([3fbafb1](https://github.com/ng-alain/delon/commit/3fbafb1)), closes [#1970](https://github.com/ng-alain/delon/issues/1970)
* fix(cli): 修复移除 `provideAnimations` (#1971) ([4c92bca](https://github.com/ng-alain/delon/commit/4c92bca)), closes [#1971](https://github.com/ng-alain/delon/issues/1971)


## 21.0.0 (2026-01-17)

### Code Refactoring

* refactor(*): 使用 `nzVariant` 替代 `nzBorderless` (#1944) ([6e61fec](https://github.com/ng-alain/delon/commit/6e61fec)), closes [#1944](https://github.com/ng-alain/delon/issues/1944)

### Features

* feat(abc:date-picker): 新增使用字符串标识来替代快捷输入 (#1954) ([4cbac18](https://github.com/ng-alain/delon/commit/4cbac18)), closes [#1954](https://github.com/ng-alain/delon/issues/1954)
* feat(abc:loading): 新增 `text` 国际化 (#1959) ([31fac3f](https://github.com/ng-alain/delon/commit/31fac3f)), closes [#1959](https://github.com/ng-alain/delon/issues/1959)
* feat(abc:reuse-tab): 新增 `routeParamMatchMode` 支持自定义模式 (#1952) ([f3505e2](https://github.com/ng-alain/delon/commit/f3505e2)), closes [#1952](https://github.com/ng-alain/delon/issues/1952)
* feat(abc:st): 新增重置 `filter` 时 `change` 事件的 `filter` 为 `null` (#1950) ([891ff48](https://github.com/ng-alain/delon/commit/891ff48)), closes [#1950](https://github.com/ng-alain/delon/issues/1950)
* feat(abc:st): 新增 `page.checkboxIdMap` 用于缓存选择项数据 (#1951) ([4144847](https://github.com/ng-alain/delon/commit/4144847)), closes [#1951](https://github.com/ng-alain/delon/issues/1951)
* feat(module:i18n): 新增若干丢失翻译 (#1955) ([3cb28c5](https://github.com/ng-alain/delon/commit/3cb28c5)), closes [#1955](https://github.com/ng-alain/delon/issues/1955)
* feat(theme:i18n): 新增 `mergeData` 方法 (#1945) ([4f1a351](https://github.com/ng-alain/delon/commit/4f1a351)), closes [#1945](https://github.com/ng-alain/delon/issues/1945)
* feat(cli): `ng add` 新增 `reuseTab` 选项 (#1961) ([478f009](https://github.com/ng-alain/delon/commit/478f009)), closes [#1961](https://github.com/ng-alain/delon/issues/1961)

### Bug Fixes

* fix(abc:st): 修复当 `children` 为空数组时不应该显示按钮 (#1947) ([a4be8d1](https://github.com/ng-alain/delon/commit/a4be8d1)), closes [#1947](https://github.com/ng-alain/delon/issues/1947)
* fix(form): 修复 `formValueChange.path` 参数没有返回值 (#1953) ([86a9b4e](https://github.com/ng-alain/delon/commit/86a9b4e)), closes [#1953](https://github.com/ng-alain/delon/issues/1953)
* fix(theme:setting-drawer): 修复样式 (#1968) ([f82dc34](https://github.com/ng-alain/delon/commit/f82dc34)), closes [#1968](https://github.com/ng-alain/delon/issues/1968)


## Old Versions

All releases notes can be found [here](https://github.com/ng-alain/ng-alain/releases).
