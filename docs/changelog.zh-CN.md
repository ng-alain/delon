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

# [16.2.0](https://github.com/ng-alain/delon/compare/16.1.1...16.2.0) (2023-07-21)

### SCAFFOLDING

* 路由守卫的破坏性变更 [#2407](https://github.com/ng-alain/ng-alain/pull/2407/files).
* 代码风格变更 [#2405](https://github.com/ng-alain/ng-alain/pull/2405/files#diff-a3f38f2cae79a3819f93ff1a9d4cd281cbe8f95696e14a29864f08796d3dc568).

### Bug Fixes

* **abc:onboarding:** 修复使用过期方法 `ComponentFactoryResolver` ([#1624](https://github.com/ng-alain/delon/issues/1624)) ([ae065c2](https://github.com/ng-alain/delon/commit/ae065c21e9ba1ea0d56bae9ceb1e44b7bbb9b0fb))
* **chat:timeline:** 修复 `y2` 指标数据为可选 ([#1622](https://github.com/ng-alain/delon/issues/1622)) ([b565ddf](https://github.com/ng-alain/delon/commit/b565ddfdd7872a43f9fd3b3a1fd33d739f08074c))
* **cli:** 移除生成模块时包含无效参数 `skipTests` ([#1616](https://github.com/ng-alain/delon/issues/1616)) ([0da83f8](https://github.com/ng-alain/delon/commit/0da83f83b90ea5a367d35c6761554d7ebc07bfd0))
* 修复 `col` 占位符不对齐问题，涉及 `se`, `sv`, `sg` 组件 ([#1617](https://github.com/ng-alain/delon/issues/1617)) ([83b08c9](https://github.com/ng-alain/delon/commit/83b08c95ba803cf29e0f10bb354ae4f9170b2295))
* **theme:modal:** 修复过期参数 `nzComponentParams` ([#1615](https://github.com/ng-alain/delon/issues/1615)) ([45863a1](https://github.com/ng-alain/delon/commit/45863a1d62e5751416321cb1d591faf820bb82d3))

### Features

* **abc:st:** 新增 `onCell` 方法支持合并列或行 ([#1613](https://github.com/ng-alain/delon/issues/1613)) ([9ab109e](https://github.com/ng-alain/delon/commit/9ab109e8f99fb1bd4e5b4e99b0b814bf34f0b4ac))
* **abc:st:** 新增 `icon`, `className` 方法支持动态调整 ([#1618](https://github.com/ng-alain/delon/issues/1618)) ([6bf27da](https://github.com/ng-alain/delon/commit/6bf27dac696818ff78b0ee955333e308597c968b))
* **theme:layout-default:** 新增 `fetchingStrictly`, `fetching` 属性用于自主受控顶部加载动画状态 ([#1614](https://github.com/ng-alain/delon/issues/1614)) ([8446da6](https://github.com/ng-alain/delon/commit/8446da6fdd10d07f2e917d91830d95e1c81d2622))

### BREAKING CHANGE

* **acl:** 重构 `ACLGuard` 为 `aclCanMatch`, `aclCanActivate`, `aclCanActivateChild`
* **auth:simple** 重构 `SimpleGuard` 为 `authSimpleCanMatch`, `authSimpleCanActivate`, `authSimpleCanActivateChild`
* **auth:jtw** 重构 `JWTGuard` 为 `authJWTCanMatch`, `authJWTCanActivate`, `authJWTCanActivateChild`
* **i18n** 重构 `AlainI18NGuard` 为 `alainI18nCanMatch`, `alainI18nCanActivate`, `alainI18nCanActivateChild`


# [16.1.1](https://github.com/ng-alain/delon/compare/16.0.1...16.1.0) (2023-07-16)

### Bug Fixes

* **cli:** 移除过期库 `stylelint-config-prettier` ([#1606](https://github.com/ng-alain/delon/issues/1606)) ([2ecc28b](https://github.com/ng-alain/delon/commit/2ecc28b53773d9b5215ebd720be4ead55d78c705))
* **theme:** 修复忽略两个 `nzType="link"` 按错时间距 ([#1605](https://github.com/ng-alain/delon/issues/1605)) ([0fdd15d](https://github.com/ng-alain/delon/commit/0fdd15dd0922bf6570d38fabd1afc1ca755b87a2))

### Features

* **abc:reuse-tab:** 新增可自定义缓存存储 ([#1609](https://github.com/ng-alain/delon/issues/1609)) ([11599d9](https://github.com/ng-alain/delon/commit/11599d9566712c707146e4ac299ec6efc2d82b01))
* **theme:modal:** 新增支持拖拽参数 `drag` ([#1607](https://github.com/ng-alain/delon/issues/1607)) ([3cd73f7](https://github.com/ng-alain/delon/commit/3cd73f7f86a76a7ea450f839e9ad359f6afd0da4))


## [16.0.1](https://github.com/ng-alain/delon/compare/16.0.0...16.0.1) (2023-06-08)

* 修复 `ng-zorro-antd` 错位版本依赖

# [16.0.0](https://github.com/ng-alain/delon/compare/15.2.1...16.0.0) (2023-06-07)

### Bug Fixes

* **abc:st:** 修复固定列样式错误 ([#1598](https://github.com/ng-alain/delon/issues/1598)) ([d2bf211](https://github.com/ng-alain/delon/commit/d2bf211a35df8bcbee165b54bcda4b2dcf69c6f0))
* **form:** 修复ui由于继承关系导致重复引用 ([#1600](https://github.com/ng-alain/delon/issues/1600)) ([a0150e7](https://github.com/ng-alain/delon/commit/a0150e7520376064469cfa5ae0e3394635620022))


## 历史版本

历史版本的更新记录可以在 [Github](https://github.com/ng-alain/ng-alain/releases) 查看。
