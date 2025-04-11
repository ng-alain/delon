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

## 19.2.0 (2025-04-11)

### Features

* feat(abc:st): 增加排序方向 (#1894) ([f4aeb6c](https://github.com/ng-alain/delon/commit/f4aeb6c)), closes [#1894](https://github.com/ng-alain/delon/issues/1894)
* feat(form:cascader): 支持多选 (#1895) ([0575b22](https://github.com/ng-alain/delon/commit/0575b22)), closes [#1895](https://github.com/ng-alain/delon/issues/1895)
* feat(form:transfer): 增加 `oneWay` 参数 (#1896) ([12e30aa](https://github.com/ng-alain/delon/commit/12e30aa)), closes [#1896](https://github.com/ng-alain/delon/issues/1896)


# [19.1.0](https://github.com/ng-alain/delon/compare/19.0.1...19.1.0) (2025-03-23)

### Bug Fixes

* **form:array:** 修复 `track` 中每一项必须是唯一 ([#1892](https://github.com/ng-alain/delon/issues/1892)) ([9538891](https://github.com/ng-alain/delon/commit/95388910d6cc0d165d6120bde74745c0de6e42dd))
* **form:utils:** 修复 `getCopyEnum` 替代 `getEnum` 防止污染数据 ([#1890](https://github.com/ng-alain/delon/issues/1890)) ([ace3a28](https://github.com/ng-alain/delon/commit/ace3a288bca484fef40d0f506d4bcf07ac1b57e5))

### Features

* **module:theme:** 新增 `badgeOverflowCount` 属性 ([#1891](https://github.com/ng-alain/delon/issues/1891)) ([634a138](https://github.com/ng-alain/delon/commit/634a138fa9d99abd6607afb5e0a6c87babb96b36))


## [19.0.1](https://github.com/ng-alain/delon/compare/19.0.0...19.0.1) (2025-01-21)

### Bug Fixes

* **cli:** 修复未知参数 `--swaggerPath` ([#1884](https://github.com/ng-alain/delon/issues/1884)) ([a2d214d](https://github.com/ng-alain/delon/commit/a2d214dea3ecdb04265cbc78b92d5e1e6def2279))
* **util:config:** 修复 `attach` 不支持信号 ([#1882](https://github.com/ng-alain/delon/issues/1882)) ([a1c4fb1](https://github.com/ng-alain/delon/commit/a1c4fb113455bc1468e3ab0f600625d7b1cc1547))


## 19.0.0 (2025-01-19)

### Features

* feat(*): 迁移 `[nz-icon]` 至 `nz-icon` 标签 (#1866) ([cb038a3](https://github.com/ng-alain/delon/commit/cb038a3)), closes [#1866](https://github.com/ng-alain/delon/issues/1866)
* feat(cli): 新增 `ng update ng-alain` 支持自动加入 `declaration-property-value-no-unknown` 规则 (#1879) ([50dba0a](https://github.com/ng-alain/delon/commit/50dba0a)), closes [#1879](https://github.com/ng-alain/delon/issues/1879)
* feat(form): 同步一些 NG-ZORRO 新特性 (#1864) ([327dd47](https://github.com/ng-alain/delon/commit/327dd47)), closes [#1864](https://github.com/ng-alain/delon/issues/1864)
* feat(abc:st): 新增 `setRow` 支持 `arrayProcessMethod` 数组覆盖方式 (#1853) ([f057dd6](https://github.com/ng-alain/delon/commit/f057dd6)), closes [#1853](https://github.com/ng-alain/delon/issues/1853)
* feat(abc:st): 支持拖拽 `drag` 属性 (#1876) ([26e93cc](https://github.com/ng-alain/delon/commit/26e93cc)), closes [#1876](https://github.com/ng-alain/delon/issues/1876)
* feat(abc:st): `pop` 支持国际化参数 `titleI18n`, `okTextI18n`, `cancelTextI18n` (#1874) ([f752c24](https://github.com/ng-alain/delon/commit/f752c24)), closes [#1874](https://github.com/ng-alain/delon/issues/1874)
* feat(abc:st): 新增类型 `cell` 支持 `click` 触发 (#1873) ([704badc](https://github.com/ng-alain/delon/commit/704badc)), closes [#1873](https://github.com/ng-alain/delon/issues/1873)
* feat(theme:layout-default): 当小屏幕下自动收缩侧边栏 (#1868) ([983cedb](https://github.com/ng-alain/delon/commit/983cedb)), closes [#1868](https://github.com/ng-alain/delon/issues/1868)
* feat(theme:menu): 新增获取默认第一个跳转路由地址 `getDefaultRedirect` 方法 (#1850) ([0323a37](https://github.com/ng-alain/delon/commit/0323a37)), closes [#1850](https://github.com/ng-alain/delon/issues/1850)

### Bug Fixes

* fix(abc:notice-icon): 纠正当使用 `popoverVisible` 控制时显示不正确 (#1869) ([9f2482d](https://github.com/ng-alain/delon/commit/9f2482d)), closes [#1869](https://github.com/ng-alain/delon/issues/1869)
* fix(abc:reuse-tab): 修复缓存标签页刷新后无法关闭 (#1870) ([ae863b5](https://github.com/ng-alain/delon/commit/ae863b5)), closes [#1870](https://github.com/ng-alain/delon/issues/1870)
* fix(abc:st): 修复表头分组时无法调用 `addRow` 方法 (#1871) ([409169a](https://github.com/ng-alain/delon/commit/409169a)), closes [#1871](https://github.com/ng-alain/delon/issues/1871)
* fix(abc:st): 修复固定列不对齐问题 (#1877) ([4ea94be](https://github.com/ng-alain/delon/commit/4ea94be)), closes [#1877](https://github.com/ng-alain/delon/issues/1877)
* fix(abc:st): 修复可展开与固定列同时存在时不对齐 (#1872) ([afb1287](https://github.com/ng-alain/delon/commit/afb1287)), closes [#1872](https://github.com/ng-alain/delon/issues/1872)
* fix(form:color): 修复重复导出，导致无法使用颜色小部件 (#1867) ([1e1a837](https://github.com/ng-alain/delon/commit/1e1a837)), closes [#1867](https://github.com/ng-alain/delon/issues/1867)

### Code Refactoring

* refactor(module:*): 移除 `ngClass` 和 `ngStyle` (#1852) ([2547da9](https://github.com/ng-alain/delon/commit/2547da9)), closes [#1852](https://github.com/ng-alain/delon/issues/1852)
* refactor: 启用 `isolatedModules` 编译选项，增加编译速度 (#1863) ([5d5b290](https://github.com/ng-alain/delon/commit/5d5b290)), closes [#1863](https://github.com/ng-alain/delon/issues/1863)
* build: 启用 `strictStandalone` 标记 (#1862) ([be8606e](https://github.com/ng-alain/delon/commit/be8606e)), closes [#1862](https://github.com/ng-alain/delon/issues/1862)
* perf: 优化使用 `@let` (#1849) ([d28a8ad](https://github.com/ng-alain/delon/commit/d28a8ad)), closes [#1849](https://github.com/ng-alain/delon/issues/1849)

### BREAKING CHANGES

* 移除 `let` 组件，使用 Angular 内置 `@let` 替代 (#1856) ([df6658f](https://github.com/ng-alain/delon/commit/df6658f)), closes [#1856](https://github.com/ng-alain/delon/issues/1856)

## 历史版本

历史版本的更新记录可以在 [Github](https://github.com/ng-alain/ng-alain/releases) 查看。
