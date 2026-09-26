---
order: 100
title: 更新日志
type: Basic
tag: '{{version}}'
---

NG-ALAIN 严格遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范。

#### 发布周期

* 修订版本号：每周末会进行日常 bugfix 更新。（如果有紧急的 bugfix，则任何时候都可发布）
* 次版本号：每月发布一个带有新特性的向下兼容的版本。
* 主版本号：含有破坏性更新和新特性，不在发布周期内。

---

## [22.1.1](https://github.com/ng-alain/delon/compare/22.0.0...22.1.1) (2026-09-26)

### Bug Fixes

* **auth:** 跳转到登录页时携带 `location.search` ([#2059](https://github.com/ng-alain/delon/issues/2059)) ([acb7e76](https://github.com/ng-alain/delon/commit/acb7e764e3f7d235e3cfd2ac84d778e9e2217ab0))
* **form:** 避免 widget ngModel 触发 `NG01354` 警告 ([#2057](https://github.com/ng-alain/delon/issues/2057)) ([2bec2c7](https://github.com/ng-alain/delon/commit/2bec2c7028579bc724913c2bbd1d4664ef5f7bcd))

### Features

* **chart:** 迁移到 `@antv/g2` v5 ([#2064](https://github.com/ng-alain/delon/issues/2064)) ([d45f670](https://github.com/ng-alain/delon/commit/d45f67028824318892d9fb744e78aa944d246e93))


# [22.0.0](https://github.com/ng-alain/delon/compare/21.3.0...22.0.0) (2026-09-11)

### Bug Fixes

* **form:** 为 sf-boolean 组件新增 `nzId` ([#2053](https://github.com/ng-alain/delon/issues/2053)) ([bd64da7](https://github.com/ng-alain/delon/commit/bd64da7cd27bfcb0a0b91b6f868016508142ec3b))
* **theme:layout-default-nav:** 使用稳定的 track 表达式避免 `NG0956` ([#2041](https://github.com/ng-alain/delon/issues/2041)) ([ff343b6](https://github.com/ng-alain/delon/commit/ff343b60f76b9502926f1328dbc56232f6eda168))

### Features

* **form:** 对齐 sf 组件 API 与 ng-zorro v22 ([#2052](https://github.com/ng-alain/delon/issues/2052)) ([085e8db](https://github.com/ng-alain/delon/commit/085e8db79f2b471eb7587c41c234be7ab78fdaa3))
* **sf:number-widget:** 新增支持 `nzChangeOnWheel` ([7623196](https://github.com/ng-alain/delon/commit/7623196c986a38a39790a3a54edcb59c368db606))
* **st:pop:** 支持 `title` 为函数 ([#2044](https://github.com/ng-alain/delon/issues/2044)) ([55ba6f5](https://github.com/ng-alain/delon/commit/55ba6f563b7bb299e52c205ce7c1f801377055d3))

## Old Versions

All releases notes can be found [here](https://github.com/ng-alain/ng-alain/releases).
