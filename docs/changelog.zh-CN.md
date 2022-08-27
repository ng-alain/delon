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
