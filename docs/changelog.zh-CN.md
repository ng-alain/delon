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

# [8.2.0](https://github.com/ng-alain/delon/compare/8.1.0...8.2.0) (2019-07-20)

### Scaffold

* 修复每次执行 `npm run color-less` 生成的 `alain-default.less` 文件总是包含上一次结果 ([#1248](https://github.com/ng-alain/ng-alain/pull/1248))

### Bug Fixes

* **abc:*:** 修复 `sv-title`, `se-title` 样式无法独立一行问题 ([#651](https://github.com/ng-alain/delon/issues/651)) ([d92a21d](https://github.com/ng-alain/delon/commit/d92a21d))
* **auth:** 修复 `referrer.url` 应该总是最新路由地址 ([#654](https://github.com/ng-alain/delon/issues/654)) ([89098e1](https://github.com/ng-alain/delon/commit/89098e1))

### Features

* **abc:reuse-tab:** 新增 `tabType` 属性，支持 `card` 风格 ([#652](https://github.com/ng-alain/delon/issues/652)) ([9da990f](https://github.com/ng-alain/delon/commit/9da990f))
* **abc:*:** 新增 `sv` 和 `se` 组件若长标签自动增加省略号 ([#651](https://github.com/ng-alain/delon/issues/651)) ([d92a21d](https://github.com/ng-alain/delon/commit/d92a21d))


# [8.1.0](https://github.com/ng-alain/delon/compare/8.0.0...8.1.0) (2019-07-12)

### Scaffold

* 新增使用 `proxyConfig` 选项来代理后端服务器配置 ([#1237](https://github.com/ng-alain/ng-alain/pull/1237))

### Bug Fixes

* **abc:st:** 修复 `page` 丢失默认配置项 ([#649](https://github.com/ng-alain/delon/issues/649)) ([8f59ea2](https://github.com/ng-alain/delon/commit/8f59ea2))
* **form:** 修复 `ui` 属性无法继承问题 ([#647](https://github.com/ng-alain/delon/issues/647)) ([f2df673](https://github.com/ng-alain/delon/commit/f2df673))
* **form:** 修复小部件样式 ([#646](https://github.com/ng-alain/delon/issues/646)) ([fe2f0fe](https://github.com/ng-alain/delon/commit/fe2f0fe))
* **theme:menu:** 修复 `text` 或 `i18n` 二选一 ([#648](https://github.com/ng-alain/delon/issues/648)) ([3200998](https://github.com/ng-alain/delon/commit/3200998))

### Features

* **abc:st:** 新增 `format` 的 `index` 参数 ([#644](https://github.com/ng-alain/delon/issues/644)) ([498d0b7](https://github.com/ng-alain/delon/commit/498d0b7))
* **cli:** 新增使用 `proxyConfig` 选项来代理后端服务器配置 ([#645](https://github.com/ng-alain/delon/issues/645)) ([10c91d8](https://github.com/ng-alain/delon/commit/10c91d8))


# [8.0.0](https://github.com/ng-alain/delon/compare/8.0.0-rc.1...8.0.0) (2019-07-03)

**`8.0.0` 版本有一些破坏性变更，更多请阅读[升级指南](https://ng-alain.com/docs/upgrade-v8/zh)。**

### Bug Fixes

* **theme:style:** 修复侧边栏用户模块样式 ([#639](https://github.com/ng-alain/delon/issues/639)) ([ede1d15](https://github.com/ng-alain/delon/commit/ede1d15))
* **abc:st:** 修复忽略 `STColumn` 里 `title` 为非必填性 ([#632](https://github.com/ng-alain/delon/issues/632)) ([69608c5](https://github.com/ng-alain/delon/commit/69608c5))
* **cli:plugin:icon:** 修复未识别 `nzType` 属性 ([#637](https://github.com/ng-alain/delon/issues/637)) ([2784a5a](https://github.com/ng-alain/delon/commit/2784a5a))
* **form:array:** 修复 `readOnly: true` 时应禁用添加、移除按钮 ([#633](https://github.com/ng-alain/delon/issues/633)) ([15194cc](https://github.com/ng-alain/delon/commit/15194cc))
* **form:array:** 修复数组下标值经过增删后混乱问题 ([#628](https://github.com/ng-alain/delon/issues/628)) ([09807f7](https://github.com/ng-alain/delon/commit/09807f7))
* **form:upload:** 修复 `showUploadList` 无法设置复合参数 ([#634](https://github.com/ng-alain/delon/issues/634)) ([54c3b90](https://github.com/ng-alain/delon/commit/54c3b90))
* **form:*:** 修复部分小部件调用 `setValue` 方法无法渲染 ([#622](https://github.com/ng-alain/delon/issues/622)) ([4cea3b7](https://github.com/ng-alain/delon/commit/4cea3b7))

### Features

* **abc:st:** 新增按钮的 `tooltip` 属性 ([#640](https://github.com/ng-alain/delon/issues/640)) ([181e3a1](https://github.com/ng-alain/delon/commit/181e3a1))
* **abc:st:** 新增调用 `resetColumns` 时允许指定是否需要刷新数据 ([#635](https://github.com/ng-alain/delon/issues/635)) ([a96123e](https://github.com/ng-alain/delon/commit/a96123e))
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
