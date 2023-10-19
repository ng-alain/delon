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

# [16.3.0](https://github.com/ng-alain/delon/compare/16.2.1...16.3.0) (2023-09-01)

### SCAFFOLDING

* 启用 `bindToComponentInputs` [#2409](https://github.com/ng-alain/ng-alain/pull/2409/files).

### Bug Fixes

* **abc:pdf:** 忽略依赖 `pdfjs-dist`（若使用[本地](https://ng-alain.com/components/pdf)加载模式，需要自行安装该依赖，`pdfjs-dist` 依赖了 `canvas` 可能会因为环境因素安装依赖很慢） ([#1641](https://github.com/ng-alain/delon/issues/1641)) ([b987bab](https://github.com/ng-alain/delon/commit/b987baba6035eb60872c4ee48198568df140869c))
* **form:select:** 当设置 `onSearch` 时重置数据时会忽略更新预选数据 ([#1644](https://github.com/ng-alain/delon/issues/1644)) ([1f8def7](https://github.com/ng-alain/delon/commit/1f8def70856c091ed677cbd47aed7ca230a2aa79))
* **theme:http:** 纠正 `HttpOptions` 缺少 `content` ([#1640](https://github.com/ng-alain/delon/issues/1640)) ([28eeceb](https://github.com/ng-alain/delon/commit/28eecebd7ab71a1b9a8345c0af1ebe22fd3bc1a6))

### Features

* **abc:cell:** 新增 `cell` 单元格数据组件 ([#1530](https://github.com/ng-alain/delon/issues/1530)) ([26023ca](https://github.com/ng-alain/delon/commit/26023cac7a91cae5383cfffd26d44fba6a95fb9f))
* **abc:page-header:** 新增 `titleSub` 子标题属性 ([#1643](https://github.com/ng-alain/delon/issues/1643)) ([79e229f](https://github.com/ng-alain/delon/commit/79e229f5c1b509dd463c48e4a82b361e5d923920))
* **abc:st:** 标签或徽标支持 `tooltip` ([#1634](https://github.com/ng-alain/delon/issues/1634)) ([0e9006e](https://github.com/ng-alain/delon/commit/0e9006e5b9fd30092b5a808f9b3d8012fd3a060c))
* **abc:sv:** 新增 `bordered` 是否显示边框 ([#1628](https://github.com/ng-alain/delon/issues/1628)) ([ccfa5e1](https://github.com/ng-alain/delon/commit/ccfa5e1d6f5cf1d3f9bc5360bc2e373604ae22a2))
* **cli:** `ng add` 开启 `bindToComponentInputs` ([#1630](https://github.com/ng-alain/delon/issues/1630)) ([9717d9d](https://github.com/ng-alain/delon/commit/9717d9dd4ee1d5ab1526616a99da7b70e8664bd2))
* **theme:drawer:** 新增 `closeAll`, `openDrawers` 方法 ([#1627](https://github.com/ng-alain/delon/issues/1627)) ([bab3d0c](https://github.com/ng-alain/delon/commit/bab3d0c3c648d933784c4623b2714ac227219c5c))
* **theme:modal:** 支持百分比大小 ([#1626](https://github.com/ng-alain/delon/issues/1626)) ([8b52a08](https://github.com/ng-alain/delon/commit/8b52a08d82378a42e06c316757e19e5434e109dc))


## [16.2.1](https://github.com/ng-alain/delon/compare/16.2.0...16.2.1) (2023-08-06)

### Bug Fixes

* **abc:reuse-tab:** 修复缺少导出缓存相关 ([#1633](https://github.com/ng-alain/delon/issues/1633)) ([2c7def7](https://github.com/ng-alain/delon/commit/2c7def75a5b219a58319ab129407f4058010fc44))
* **auth:cookie:** 修复过期值应与 expires 同步 ([#1636](https://github.com/ng-alain/delon/issues/1636)) ([eca7bcb](https://github.com/ng-alain/delon/commit/eca7bcb2e7ba43b3a4b3bb4ab3cd17a7d762a967))
* **theme:table:** 修复单图像的间距问题 ([#1629](https://github.com/ng-alain/delon/issues/1629)) ([994e2be](https://github.com/ng-alain/delon/commit/994e2be90354a55a538ed1b55c413b8ce8cde872))
* **theme:title:** 修复应忽略空标题 ([#1638](https://github.com/ng-alain/delon/issues/1638)) ([c7bf339](https://github.com/ng-alain/delon/commit/c7bf339ee417a3b238cdb7dc18cccd1fe99a6c88))


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
