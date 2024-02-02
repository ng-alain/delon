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

# [17.2.0](https://github.com/ng-alain/delon/compare/17.1.0...17.2.0) (2024-02-02)

### Bug Fixes

* 修复Chrome 121色块 ([#1761](https://github.com/ng-alain/delon/issues/1761)) ([6861343](https://github.com/ng-alain/delon/commit/6861343bbe3219dd588cb7ffc062984fa8a3a64e))
* **form:widget:array:** 修复移除时导致重复性通知 ([#1758](https://github.com/ng-alain/delon/issues/1758)) ([4957399](https://github.com/ng-alain/delon/commit/49573999a63796a93a63eae63f392ff4da994e3d))

### Features

* **abc:st:** 新增 `trackBy` 属性 ([#1760](https://github.com/ng-alain/delon/issues/1760)) ([f4b2fec](https://github.com/ng-alain/delon/commit/f4b2feca272139ad70b7814e3ce5f407e07ef931))
* **cache:** 新增 `CacheInterceptor` 本地缓存拦截器 ([#1576](https://github.com/ng-alain/delon/issues/1576)) ([837f4f0](https://github.com/ng-alain/delon/commit/837f4f0f7ac90da9912be8c6b3a1d7aa0c22b220))


# [17.1.0](https://github.com/ng-alain/delon/compare/17.0.5...17.1.0) (2024-01-20)

### Bug Fixes

* **abc:reuse-tab:** 修复保持打开顺序 ([#1743](https://github.com/ng-alain/delon/issues/1743)) ([e17f5e7](https://github.com/ng-alain/delon/commit/e17f5e7813ff1da26ce4bada81c5b098bc190b8c))
* **abc:st:** 纠正空值语法错误 ([#1744](https://github.com/ng-alain/delon/issues/1744)) ([69bb0bb](https://github.com/ng-alain/delon/commit/69bb0bb432b100cf8a6c5ec87e0fd28dd2923d7d))

### Features

* 新增越南语 ([#1751](https://github.com/ng-alain/delon/issues/1751)) ([385dc1c](https://github.com/ng-alain/delon/commit/385dc1c716327e899f5e61d9823c3deba26ee4bf))
* **cli:** 新增 `withViewTransitions` ([#1736](https://github.com/ng-alain/delon/issues/1736)) ([c03a797](https://github.com/ng-alain/delon/commit/c03a797c9fb2405acb8455e9c236f23296577c0e))
* **form:** 新增 `setDisabled`, `setRequired` 方法 ([#1733](https://github.com/ng-alain/delon/issues/1733)) ([581f197](https://github.com/ng-alain/delon/commit/581f197be67e33189aee44b31465fb8b6d21c640))
* **theme:layout-default:** 新增 `hideEmptyChildren` ([#1746](https://github.com/ng-alain/delon/issues/1746)) ([b6ab5f0](https://github.com/ng-alain/delon/commit/b6ab5f01c18d1668989925377da84b467aa8ee27))
* **abc:auto-focus:** 优化代码 ([#1753](https://github.com/ng-alain/delon/issues/1753)) ([7032139](https://github.com/ng-alain/delon/commit/7032139472381e5f4619dc0b71c31e43a986965b))
* **auth:** 移除 `ignores` 默认值 ([#1745](https://github.com/ng-alain/delon/issues/1745)) ([e473ff4](https://github.com/ng-alain/delon/commit/e473ff4efc4299a7f2cb2e96dd44fdefedae8e82))
* 支持 Standalone ([#1750](https://github.com/ng-alain/delon/issues/1750)) ([7940464](https://github.com/ng-alain/delon/commit/7940464f69f93f3a1c3013a916d29f73146516d9))


## <small>17.0.5 (2023-12-25)</small>

* fix(abc:st): 修复导出Excel不匹配 (#1740) ([a46f2ee](https://github.com/ng-alain/delon/commit/a46f2ee)), closes [#1740](https://github.com/ng-alain/delon/issues/1740)
* fix(form:array): 修复无效 `trackBy` (#1741) ([3e55228](https://github.com/ng-alain/delon/commit/3e55228)), closes [#1741](https://github.com/ng-alain/delon/issues/1741)


## <small>17.0.4 (2023-12-20)</small>

* fix(abc:se): 修复响应式表单无法自动识别必填项 (#1737) ([a2ca109](https://github.com/ng-alain/delon/commit/a2ca109)), closes [#1737](https://github.com/ng-alain/delon/issues/1737)
* fix(abc:sv): 修复有边框时底部间距问题 (#1732) ([b5bea4e](https://github.com/ng-alain/delon/commit/b5bea4e)), closes [#1732](https://github.com/ng-alain/delon/issues/1732)
* fix(util:pipe:filter): 修复应该使用 `pure` (#1735) ([f374209](https://github.com/ng-alain/delon/commit/f374209)), closes [#1735](https://github.com/ng-alain/delon/issues/1735)
* fix(cli): 修复拼写错误 'providers' (#1731) ([5eafa8f](https://github.com/ng-alain/delon/commit/5eafa8f)), closes [#1731](https://github.com/ng-alain/delon/issues/1731)


## <small>17.0.3 (2023-12-08)</small>

* fix(theme:i18n): 纠正 `i18n` 管道参数类型不匹配 (#1723) ([bdf0e62](https://github.com/ng-alain/delon/commit/bdf0e62)), closes [#1723](https://github.com/ng-alain/delon/issues/1723)
* fix(cli): 纠正生成NG-ALAIN存在空值问题 (#1724) ([c88c9f2](https://github.com/ng-alain/delon/commit/c88c9f2)), closes [#1724](https://github.com/ng-alain/delon/issues/1724)


## <small>17.0.2 (2023-11-27)</small>

* fix(cli): fix cannot find module `@angular/cdk/schematics` (#1721) ([49a84a1](https://github.com/ng-alain/delon/commit/49a84a1)), closes [#1721](https://github.com/ng-alain/delon/issues/1721)

## <small>17.0.1 (2023-11-26)</small>

* fix(cli): 修复不支持 node 20 版本 (#1719) ([df40bb3](https://github.com/ng-alain/delon/commit/df40bb3)), closes [#1719](https://github.com/ng-alain/delon/issues/1719)


## 17.0.0 (2023-11-26)

### Breaking Changes

* refactor(form): 重构低频率小部件为可选导入 (#1668) ([8ab0e82](https://github.com/ng-alain/delon/commit/8ab0e82)), closes [#1668](https://github.com/ng-alain/delon/issues/1668)
* build: 移除 `networkEnv` 插件，使用 [nnrm](https://github.com/YunYouJun/nnrm/blob/main/README.zh-CN.md) 替代 (#1680) ([b7dbc68](https://github.com/ng-alain/delon/commit/b7dbc68)), closes [#1680](https://github.com/ng-alain/delon/issues/1680)
* feat(acl): 移除 `forRoot` (#1690) ([4472d48](https://github.com/ng-alain/delon/commit/4472d48)), closes [#1690](https://github.com/ng-alain/delon/issues/1690)

### Features

* feat(cli): 支持多重项目下使用 `ng add ng-alain` (#1664) ([e5476e2](https://github.com/ng-alain/delon/commit/e5476e2)), closes [#1664](https://github.com/ng-alain/delon/issues/1664)
* feat(theme): 新增 `provideAlain` (#1697) ([4311426](https://github.com/ng-alain/delon/commit/4311426)), closes [#1697](https://github.com/ng-alain/delon/issues/1697)
* feat(abc:cell): 新增 `provideCellWidgets` (#1700) ([7ea0daf](https://github.com/ng-alain/delon/commit/7ea0daf)), closes [#1700](https://github.com/ng-alain/delon/issues/1700)
* feat(abc:reuse-tab): 新增 `provideReuseTabConfig` (#1707) ([2f85357](https://github.com/ng-alain/delon/commit/2f85357)), closes [#1707](https://github.com/ng-alain/delon/issues/1707)
* feat(abc:st): 新增 `provideSTWidgets` (#1701) ([065316a](https://github.com/ng-alain/delon/commit/065316a)), closes [#1701](https://github.com/ng-alain/delon/issues/1701)
* feat(theme:_httpclient): 新增 `timestampSecond` 支持 10 位时间戳 (#1670) ([051b087](https://github.com/ng-alain/delon/commit/051b087)), closes [#1670](https://github.com/ng-alain/delon/issues/1670)
* feat(theme:pipe:date): 支持全局配置格式化字符串 (#1711) ([b3b93fa](https://github.com/ng-alain/delon/commit/b3b93fa)), closes [#1711](https://github.com/ng-alain/delon/issues/1711)
* feat: 新增 `provideAlainConfig` (#1689) ([b9e0fad](https://github.com/ng-alain/delon/commit/b9e0fad)), closes [#1689](https://github.com/ng-alain/delon/issues/1689)
* feat(auth): 新增 `provideAuth` (#1704) ([c0c731b](https://github.com/ng-alain/delon/commit/c0c731b)), closes [#1704](https://github.com/ng-alain/delon/issues/1704)
* feat(form): 新增 `provideSFConfig` (#1702) ([2404802](https://github.com/ng-alain/delon/commit/2404802)), closes [#1702](https://github.com/ng-alain/delon/issues/1702)
* feat(mock): 新增 `mockInterceptor` (#1698) ([da051b2](https://github.com/ng-alain/delon/commit/da051b2)), closes [#1698](https://github.com/ng-alain/delon/issues/1698)
* feat(mock): 支持异步返回，例如 `Promise`、`Observable` (#1686) ([d7980db](https://github.com/ng-alain/delon/commit/d7980db)), closes [#1686](https://github.com/ng-alain/delon/issues/1686)
* feat(mock): 新增 `provideDelonMockConfig` (#1695) ([683ab23](https://github.com/ng-alain/delon/commit/683ab23)), closes [#1695](https://github.com/ng-alain/delon/issues/1695)
* feat(testing): 新增 `delay` function (#1682) ([f83ea57](https://github.com/ng-alain/delon/commit/f83ea57)), closes [#1682](https://github.com/ng-alain/delon/issues/1682)
* build: support pnpm and update yarn to `4` (#1678) ([b904b9a](https://github.com/ng-alain/delon/commit/b904b9a)), closes [#1678](https://github.com/ng-alain/delon/issues/1678)

### Bug Fixes

* fix(theme:preloader): 修复启动动画存在懒加载时空白问题 (#1691) ([f09c324](https://github.com/ng-alain/delon/commit/f09c324)), closes [#1691](https://github.com/ng-alain/delon/issues/1691)
* fix(cli:update): 修复自动追加 `@_mock` 路径 (#1675) ([d014b54](https://github.com/ng-alain/delon/commit/d014b54)), closes [#1675](https://github.com/ng-alain/delon/issues/1675)

## 历史版本

历史版本的更新记录可以在 [Github](https://github.com/ng-alain/ng-alain/releases) 查看。
