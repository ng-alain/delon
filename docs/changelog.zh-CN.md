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

## [9.0.1](https://github.com/ng-alain/delon/compare/9.0.0...9.0.1) (2020-04-27)

### Scaffold

* 修复无法正确获取浏览器默认语言代码 ([#1600](https://github.com/ng-alain/ng-alain/pull/1600/files))

### Bug Fixes

* 修复ISO8610格式问题 ([#852](https://github.com/ng-alain/delon/issues/852)) ([ff07adc](https://github.com/ng-alain/delon/commit/ff07adc159c6026cc4e237dccf9f5218df560b21))
* **cli:** 修复 `ng update` 一并移除 G2 的依赖 ([#853](https://github.com/ng-alain/delon/issues/853)) ([cd0df52](https://github.com/ng-alain/delon/commit/cd0df52a2a850d64b2a8393a057927127da8e5cd))
* **cli:plugin:ie:** 新增 `ie` 插件，支持 IE11 开发环境 ([#855](https://github.com/ng-alain/delon/issues/855)) ([b033c81](https://github.com/ng-alain/delon/commit/b033c81e2eddbcd32f1a312d87ca4cd1cd5d777e))


# 9.0.0 (2020-04-24)

## 欢迎来到 `ng-alain` 的 `9.0.0` 版本，有关细节请参考[升级指南](https://github.com/ng-alain/ng-alain/issues/1569)。

### Scaffold

* 重构全新统一全局配置 `@delon/abc/*`，`@delon/chart/*` ([#1591](https://github.com/ng-alain/ng-alain/pull/1591/files))
* **feat(abc:st):** 新增 `st` 对应 `widget` 配置方式 ([#1579](https://github.com/ng-alain/ng-alain/pull/1579))

### Features

* **chart:** 新增 `theme` 属性，可定制所有G2主题 ([#839](https://github.com/ng-alain/delon/issues/839)) ([a1903aa](https://github.com/ng-alain/delon/commit/a1903aae6dda4f031f5f2ad7be3aaff25fa31ab1))
* **chart:time-line:** 新增 `maxAxis` 属性，最多可显示五个轴度 ([#838](https://github.com/ng-alain/delon/issues/838)) ([fa40822](https://github.com/ng-alain/delon/commit/fa40822932308db78c893e746992ba7b38f97de1))
* **abc:se:** 新增 `label`, `error`, `extr` 支持 `TemplateRef<void>` 类型 ([#803](https://github.com/ng-alain/delon/issues/803)) ([eb13170](https://github.com/ng-alain/delon/commit/eb131704a374a9ea84803c20dde9836ec78549ee))
* **abc:se:** 新增自动根据元素组件来调整 `required` 值 ([#799](https://github.com/ng-alain/delon/issues/799)) ([1d4dad5](https://github.com/ng-alain/delon/commit/1d4dad559743091be1f85ed43757c2c0e20ba3ee))
* **abc:sidebar-nav:** 新增3级以内的 Icon 图标 ([#801](https://github.com/ng-alain/delon/issues/801)) ([087b8e9](https://github.com/ng-alain/delon/commit/087b8e9a94e1ae08a88461faecf2ef606dfa0dd1))
* **abc:st:** 新增 `reset`, `load` 允许指是否返回表格顶部控制 ([#800](https://github.com/ng-alain/delon/issues/800)) ([4a8bfb0](https://github.com/ng-alain/delon/commit/4a8bfb0ee34cfac5bbc71c3b9ce6c56f2bcb2c70))
* **theme:** 新增日语 ([#730](https://github.com/ng-alain/delon/issues/730)) ([5efbe5b](https://github.com/ng-alain/delon/commit/5efbe5b52917fc3981009d76b53536924a6bb680))
* **chart:custom:** 新增 `delay` 延迟属性 ([#818](https://github.com/ng-alain/delon/issues/818)) ([07e59fb](https://github.com/ng-alain/delon/commit/07e59fb5f1bdd1d51660510d34d45b968341faa9))
* **abc:st:** 新增 `widget` 自定义小部件类型 ([#827](https://github.com/ng-alain/delon/issues/827)) ([4d5a767](https://github.com/ng-alain/delon/commit/4d5a767d94a248908465e59a6af9eae110205b68))
* **mock:** 新增返回的数据应该是副本，防止污染 ([#821](https://github.com/ng-alain/delon/issues/821)) ([16d0146](https://github.com/ng-alain/delon/commit/16d0146234be9031889e70b6d67fa030c7511b03))

### Bug Fixes

* **chart:tag-cloud:** 修复文本重叠 ([#816](https://github.com/ng-alain/delon/issues/816)) ([7f31648](https://github.com/ng-alain/delon/commit/7f3164875372dac9358a2349e76fa8e2d988ca84))
* **form:widget:array** 修复移除最后一项时数据没有清空 ([#829](https://github.com/ng-alain/delon/issues/829)) ([6ff3db5](https://github.com/ng-alain/delon/commit/6ff3db5fdb24fa4da08ff672d5d3c553fd654186))
* **form:widget:date:** 修复默认值应自动格式一次 ([#833](https://github.com/ng-alain/delon/issues/833)) ([92821b0](https://github.com/ng-alain/delon/commit/92821b047c96cff5a67365a1a32300bad7c76e05))
* **form:widget:date:** 修复清空后 `end` 没有清空 ([#831](https://github.com/ng-alain/delon/issues/831)) ([04e6983](https://github.com/ng-alain/delon/commit/04e698350d8b190f8578821927e5edd796df7050))


### BREAKING CHANGES

* The All "General Configuration" method is going to be removed in 10.0.0. Please refer to https://ng-alain.com/docs/global-config


## 9.0.0 之前版本

9.0.0 之前版本的更新记录可以在 [Github](https://github.com/ng-alain/ng-alain/releases) 查看
