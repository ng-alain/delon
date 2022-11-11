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

# [14.2.0](https://github.com/ng-alain/delon/compare/14.1.1...14.2.0) (2022-11-11)

### Scaffold

* 添加按 `F1` 顶部搜索框获得焦点 ([#2314](https://github.com/ng-alain/ng-alain/pull/2314))

### Bug Fixes

* **abc:st:** 修复设置排序时居中失效 ([#1547](https://github.com/ng-alain/delon/issues/1547)) ([86c8ca1](https://github.com/ng-alain/delon/commit/86c8ca188f4398c30b69877b8c8874ad5b71d096))
* **abc:st:** 修复 modal 参数支持返回纯净数据（过滤 `_values` 等） ([#1541](https://github.com/ng-alain/delon/issues/1541)) ([04e97f1](https://github.com/ng-alain/delon/commit/04e97f1aa1fbc4e883bea8c8abdde462f068df95))
* **cli:** 更新 `ng-alain-plugin-theme` ([#1545](https://github.com/ng-alain/delon/issues/1545)) ([591b604](https://github.com/ng-alain/delon/commit/591b60493d777e10bfd1b820d02b3f3151ff29fd))

### Features

* **theme:setting-drawer:** 新增 `lessJs` 属性 ([#1544](https://github.com/ng-alain/delon/issues/1544)) ([9c5a1da](https://github.com/ng-alain/delon/commit/9c5a1da6b84e786ee7ba0051bebd6effb10ef083))
* **abc:exception:** 新增全局配置项 `typeDict` ([#1551](https://github.com/ng-alain/delon/issues/1551)) ([a408cbb](https://github.com/ng-alain/delon/commit/a408cbb0b5724221d9f9540c28226986ba43502d))
* **abc:hotkey:** 新增 `hotkey` 热键组件 ([#1538](https://github.com/ng-alain/delon/issues/1538)) ([6913f01](https://github.com/ng-alain/delon/commit/6913f01f00f06c778cf454a8662fb48231c04377))
* **abc:notice-icon:** 新增 `centered` 属性 ([#1546](https://github.com/ng-alain/delon/issues/1546)) ([df01dcc](https://github.com/ng-alain/delon/commit/df01dcc6c51e8bf6a13cfa1bf1a51f691ae87a7d))
* **cli:sta:** 新增 `tagsMapping` 属性，支持只 Tags 映射转换 ([#1549](https://github.com/ng-alain/delon/issues/1549)) ([4ed1aa4](https://github.com/ng-alain/delon/commit/4ed1aa4c677ebc572c6df1337a75e29c76d869ae))
* **util:other:lazy:** 新增 `attriburte` 属性，支持自定义 `script` 或 `link` 属性 ([#1548](https://github.com/ng-alain/delon/issues/1548)) ([a197bb1](https://github.com/ng-alain/delon/commit/a197bb1453b72b5645878dedd55f17d3436f93ae))


## [14.1.1](https://github.com/ng-alain/delon/compare/14.1.0...14.1.1) (2022-10-14)

### Bug Fixes

* **form:** 修复可显会引发多次绑定 ([#1531](https://github.com/ng-alain/delon/issues/1531)) ([a4e62ef](https://github.com/ng-alain/delon/commit/a4e62ef49b31f42beb850eb02aa53de536165df8))
* **form:** 修复丢失错误样式 ([#1537](https://github.com/ng-alain/delon/issues/1537)) ([14a7388](https://github.com/ng-alain/delon/commit/14a7388443805ed1f06e2ed81008ab51547e4c75))


## [14.1.0](https://github.com/ng-alain/delon/compare/14.0.0...14.0.1) (2022-10-09)

### Bug Fixes

* **abc:reuse-tab:** 修复无法刷新当前页 ([#1529](https://github.com/ng-alain/delon/issues/1529)) ([2fb2d2b](https://github.com/ng-alain/delon/commit/2fb2d2b3af7c10255c0f0b4c82a823cee6c2c1d9))
* **abc:st:** 修复当指定 `className` 时导致内置样式失效 ([#1525](https://github.com/ng-alain/delon/issues/1525)) ([b9e433d](https://github.com/ng-alain/delon/commit/b9e433da4a5d9fc0e88e5707753be4a8a3821a61))
* **abc:st:** 修复 `showOPArea` 为 `true` 时无法关闭面板 ([#1527](https://github.com/ng-alain/delon/issues/1527)) ([7d8fbf5](https://github.com/ng-alain/delon/commit/7d8fbf56e369cb58ef189f5df41f8020369ca8b9))
* **abc:st:** 修复子菜单下点击空白区域无法触发事件 ([#1534](https://github.com/ng-alain/delon/issues/1534)) ([a807429](https://github.com/ng-alain/delon/commit/a80742910dfd1e4ce1e9c184469e49422ffb1a63))
* **cli:** 修复初始化NG-ALAIN时 `startup.service.ts` 不正确返回 `undefined` ([#1533](https://github.com/ng-alain/delon/issues/1533)) ([8b0be4c](https://github.com/ng-alain/delon/commit/8b0be4ca90b28a311262e000a27d5180015ce533))
* **cli:** 修复多余 `allowedCommonJsDependencies` 项 ([#1526](https://github.com/ng-alain/delon/issues/1526)) ([c43afb8](https://github.com/ng-alain/delon/commit/c43afb837e2619d1d92067c3fce78234ad5c814e))

### Features

* **cli:** 新增动态启动页 ([#1524](https://github.com/ng-alain/delon/issues/1524)) ([1e1c165](https://github.com/ng-alain/delon/commit/1e1c165c97a3ebef427a8558f474366bac75651f))


# [14.0.0](https://github.com/ng-alain/delon/compare/13.5.2...14.0.0) (2022-08-27)

### Bug Fixes

* **abc:se:** 修复缺失错误红色边框样式 ([#1517](https://github.com/ng-alain/delon/issues/1517)) ([c01e3de](https://github.com/ng-alain/delon/commit/c01e3de016a3beaf241c2d94b2e034b71b7b60d9))
* **form:** 修复缺失宽度样式 ([#1504](https://github.com/ng-alain/delon/issues/1504)) ([8ab8956](https://github.com/ng-alain/delon/commit/8ab89562255b561f2582f85ef9aa81b69e754e88))
* **forum:array:** 修复 `minItems` 不生效 ([#1511](https://github.com/ng-alain/delon/issues/1511)) ([923d4f4](https://github.com/ng-alain/delon/commit/923d4f40c4ee43a17e159f95e355478aaeb6cf6b))
* **theme:model** 修复垂直模式缺失 `xl` 样式 ([#1506](https://github.com/ng-alain/delon/issues/1506)) ([5e1edee](https://github.com/ng-alain/delon/commit/5e1edeef6c8123b6a730006db337501b086cb874))
* **theme:MenuService** 修复子项都隐藏时应隐藏项 ([#1507](https://github.com/ng-alain/delon/issues/1507)) ([50f35a9](https://github.com/ng-alain/delon/commit/50f35a96120c7fca746bf4b4795d93e4ee78535e))

### Features

* **abc:observers:** 新增 `[observeSize]` 指令，用于观察DOM大小变化 ([#1501](https://github.com/ng-alain/delon/issues/1501)) ([8bebd30](https://github.com/ng-alain/delon/commit/8bebd30e7d32a8a2c5068a787b993a28330fd3f1))
* **abc:pdf:** 新增 `eventBus` 属性 ([#1492](https://github.com/ng-alain/delon/issues/1492)) ([57f340f](https://github.com/ng-alain/delon/commit/57f340f497451e3548893fe6cf2726a349a46735))
* **abc:reuse-tab:** 新增 `canClose` 属性 ([#1497](https://github.com/ng-alain/delon/issues/1497)) ([347745a](https://github.com/ng-alain/delon/commit/347745ae2f7faa0c6a3780b62a422021fa424b7c))
* **abc:reuse-tab:** 新增保留最后一次打开状态 ([#1493](https://github.com/ng-alain/delon/issues/1493)) ([94f2986](https://github.com/ng-alain/delon/commit/94f2986413a01ab658c861866d77cc529a4c5e0d))
* **abc:st:** 新增 `reName` 支持自定义函数 ([#1500](https://github.com/ng-alain/delon/issues/1500)) ([9a0c96e](https://github.com/ng-alain/delon/commit/9a0c96eed22436a566221943fe01dfa520bbbccf))
* **abc:st:** 新增请求远程数据时是否忽略 `null` 或 `undefined` 值的数据 ([#1515](https://github.com/ng-alain/delon/issues/1515)) ([4747bcd](https://github.com/ng-alain/delon/commit/4747bcdc476ee819bc229b52823fed1f5349be67))
* **form:select:** 新增 `hide` 隐藏 ([#1516](https://github.com/ng-alain/delon/issues/1516)) ([6df7c38](https://github.com/ng-alain/delon/commit/6df7c389b505a71667f71b96d05e818676172537))
* **form:** 新增 `visibleIfLogical` 逻辑类型，支持 `or`、`and` 类型 ([#1496](https://github.com/ng-alain/delon/issues/1496)) ([7af1397](https://github.com/ng-alain/delon/commit/7af13975d93a856fcbb5195bd9da3d2cf0fddf68))
* **theme:title:** 新增 `selector` 属性 ([#1487](https://github.com/ng-alain/delon/issues/1487)) ([b15f35f](https://github.com/ng-alain/delon/commit/b15f35f6603402595c59ec1b8b38703c4c4da2aa))
* **theme:** 新增 `ALLOW_ANONYMOUS`, `CUSTOM_ERROR`, `IGNORE_BASE_URL`, `RAW_BODY` Token ([#1486](https://github.com/ng-alain/delon/issues/1486)) ([4a6755e](https://github.com/ng-alain/delon/commit/4a6755ef078275ee3ae4cd996570cd9259ab5aec))
* **util:** 新增 `omit` 忽略 obj 指定属性 ([#1519](https://github.com/ng-alain/delon/issues/1519)) ([15bb062](https://github.com/ng-alain/delon/commit/15bb062240d282e7635bea90cdff31d732618d40))
* **theme:MenuService** 新增允许控制打开状态 ([#1507](https://github.com/ng-alain/delon/issues/1507)) ([50f35a9](https://github.com/ng-alain/delon/commit/50f35a96120c7fca746bf4b4795d93e4ee78535e))

### BREAKING CHANGE

* **theme:MenuService** 使用 `collapsed` 替换 `open` ([#1507](https://github.com/ng-alain/delon/issues/1507)) ([50f35a9](https://github.com/ng-alain/delon/commit/50f35a96120c7fca746bf4b4795d93e4ee78535e))


## 历史版本

历史版本的更新记录可以在 [Github](https://github.com/ng-alain/ng-alain/releases) 查看。
