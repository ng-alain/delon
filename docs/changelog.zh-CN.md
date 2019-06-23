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

# [8.0.0-rc.0](https://github.com/ng-alain/delon/compare/7.7.1...8.0.0-rc.0) (2019-06-23)

**`8.0.0-rc.0` 版本有一些破坏性变更，更多请阅读[升级指南](https://ng-alain.com/docs/upgrade-v8/zh)。**

### Bug Fixes

* **form:*:** 修复部分小部件调用 `setValue` 方法无法渲染 ([#622](https://github.com/ng-alain/delon/issues/622)) ([4cea3b7](https://github.com/ng-alain/delon/commit/4cea3b7))

### Features

* **abc:down-file:** 新增 `down-file_not-support` & `down-file__disabled` 样式 ([#624](https://github.com/ng-alain/delon/issues/624)) ([2369153](https://github.com/ng-alain/delon/commit/2369153))
* **abc:st:** 新增 `confirmText`, `clearText` 国际化 ([#618](https://github.com/ng-alain/delon/issues/618)) ([a8cd300](https://github.com/ng-alain/delon/commit/a8cd300))
* **abc:st:** 新增关键词过滤器 ([#612](https://github.com/ng-alain/delon/issues/612)) ([543236d](https://github.com/ng-alain/delon/commit/543236d))
* **form:** 新增 `optionalHelp` 支持更复杂的属性 ([#621](https://github.com/ng-alain/delon/issues/621)) ([d45fddf](https://github.com/ng-alain/delon/commit/d45fddf))
* **form:** 新增国际化 ([#625](https://github.com/ng-alain/delon/issues/625)) ([e1bbbdb](https://github.com/ng-alain/delon/commit/e1bbbdb))
* **util:deepMergeKey:** 新增支持传递 `null` & `undefined` ([#620](https://github.com/ng-alain/delon/issues/620)) ([a8ddbb8](https://github.com/ng-alain/delon/commit/a8ddbb8))

### Performance Improvements

* **cli:** 优化所有指令提供更详细的错误信息 ([#619](https://github.com/ng-alain/delon/issues/619)) ([7ebef13](https://github.com/ng-alain/delon/commit/7ebef13))

### BREAKING CHANGES

* `DelonACLModule` 必须使用 `forRoot()` 来导入该模块


## 8.0.0 之前版本

8.0.0 之前版本的更新记录可以在 [Github](https://github.com/ng-alain/ng-alain/releases) 查看
