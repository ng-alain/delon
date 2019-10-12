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

# [8.5.0](https://github.com/ng-alain/delon/compare/8.4.0...8.5.0) (2019-09-25)

### Bug Fixes

* **abc:sidebar-nav:** 修复重复渲染外部链接 ([#688](https://github.com/ng-alain/delon/issues/688)) ([fbf52c4](https://github.com/ng-alain/delon/commit/fbf52c4))
* **abc:st:** 修复 `tag` 或 `badge` 空值抛错 ([#687](https://github.com/ng-alain/delon/issues/687)) ([3752205](https://github.com/ng-alain/delon/commit/3752205))
* **abc:st:** 修复导出 Excel 时空值显示 null 字符问题 ([#689](https://github.com/ng-alain/delon/issues/689)) ([2aef5a9](https://github.com/ng-alain/delon/commit/2aef5a9))
* **abc:st:** 修复当设置 `expandRowByClick: true` 时按钮点击会触发展开问题 ([#692](https://github.com/ng-alain/delon/issues/692)) ([da8d99d](https://github.com/ng-alain/delon/commit/da8d99d))
* **sf:cascader:** 修复 `select` 无效事件，应使用 `selectionChange` 替代 ([#684](https://github.com/ng-alain/delon/issues/684)) ([1ed0ae1](https://github.com/ng-alain/delon/commit/1ed0ae1))

### Features

* **abc:reuse-tab:** 新增 `tabMaxWidth` 属性 ([#690](https://github.com/ng-alain/delon/issues/690)) ([19cc818](https://github.com/ng-alain/delon/commit/19cc818))
* **abc:st:** 新增 `divider` 按钮类型 ([#683](https://github.com/ng-alain/delon/issues/683)) ([d9f6014](https://github.com/ng-alain/delon/commit/d9f6014))
* **form:autocomplete:** 新增 `change` 事件 ([#691](https://github.com/ng-alain/delon/issues/691)) ([f4215e4](https://github.com/ng-alain/delon/commit/f4215e4))
* **theme:http:** 新增 `@Payload` 装饰 ([#686](https://github.com/ng-alain/delon/issues/686)) ([123c29e](https://github.com/ng-alain/delon/commit/123c29e))
* **theme:http:** 新增 `::id` 表示转义字符 ([#686](https://github.com/ng-alain/delon/issues/686)) ([123c29e](https://github.com/ng-alain/delon/commit/123c29e))

### BREAKING CHANGES

* **abc:count-down** 升级至 `8.x`，其版本有破坏性变更[细节](https://github.com/cipchk/ngx-countdown/releases/tag/8.0.0)


# [8.4.0](https://github.com/ng-alain/delon/compare/8.3.0...8.4.0) (2019-09-01)

### Bug Fixes

* **abc:sidebar-nav:** 修复收缩下点击父级标准抛出错误 ([#673](https://github.com/ng-alain/delon/issues/673)) ([b6c1fc6](https://github.com/ng-alain/delon/commit/b6c1fc6))
* **abc:sidebar-nav:** 修复长名称样式错位 ([#677](https://github.com/ng-alain/delon/issues/677)) ([efd9bb1](https://github.com/ng-alain/delon/commit/efd9bb1))
* **abc:st:** 修复新请求时应先中断旧请求 ([#674](https://github.com/ng-alain/delon/issues/674)) ([c98ae19](https://github.com/ng-alain/delon/commit/c98ae19))
* **abc:st:** 修复导出Excel时产生无效标题 ([#672](https://github.com/ng-alain/delon/issues/672)) ([48ca08f](https://github.com/ng-alain/delon/commit/48ca08f))
* **abc:sv:** 修复 `SVConfig` 的 `labelWidth` 无效类型 ([#668](https://github.com/ng-alain/delon/issues/668)) ([43cf770](https://github.com/ng-alain/delon/commit/43cf770))

### Features

* **abc:st:** 增加 `pop` 相关的若干属性 ([#676](https://github.com/ng-alain/delon/issues/676)) ([a078f02](https://github.com/ng-alain/delon/commit/a078f02))
* **cache:** 增加全局 `DelonCacheConfig` 配置支持 `type`, `expire` 类型 ([#669](https://github.com/ng-alain/delon/issues/669)) ([9d393fb](https://github.com/ng-alain/delon/commit/9d393fb))


# [8.3.0](https://github.com/ng-alain/delon/compare/8.2.0...8.3.0) (2019-08-03)

### Bug Fixes

* **abc:reuse-tab:** 修复 URL 模式也应该从菜单数据中获取标题 ([#661](https://github.com/ng-alain/delon/issues/661)) ([6e63418](https://github.com/ng-alain/delon/commit/6e63418))
* **abc:sidebar:** 修复当包含徽章时无法展开子菜单问题 ([#665](https://github.com/ng-alain/delon/issues/665)) ([763a27e](https://github.com/ng-alain/delon/commit/763a27e))
* **abc:st:** 修复当组件被销毁时应该中断 HTTP 请求 ([#658](https://github.com/ng-alain/delon/issues/658)) ([6bd97eb](https://github.com/ng-alain/delon/commit/6bd97eb))
* **theme:title:** 修复路由跳转后在 `NavigationEnd` 事件里调用重置当前页无效问题 ([#660](https://github.com/ng-alain/delon/issues/660)) ([0db451d](https://github.com/ng-alain/delon/commit/0db451d))
* **abc:st:** 修复当 `strictBehavior` 为 `truncate` 时 `img` 列不应该截断 ([#656](https://github.com/ng-alain/delon/issues/656)) ([4ae8f13](https://github.com/ng-alain/delon/commit/4ae8f13))

### Features

* **abc:st:** 新增 `req.lazyLoad` 属性首次不发送请求 ([#656](https://github.com/ng-alain/delon/issues/656)) ([4ae8f13](https://github.com/ng-alain/delon/commit/4ae8f13))
* **abc:st:** 新增 `STColumnTitle.title` 支持可选和帮助信息描述 ([#657](https://github.com/ng-alain/delon/issues/657)) ([9408ccc](https://github.com/ng-alain/delon/commit/9408ccc))
* **acl:** 新增支持在路由 `data` 属性里指定未授权跳转URL ([#666](https://github.com/ng-alain/delon/issues/666)) ([bee66fd](https://github.com/ng-alain/delon/commit/bee66fd))
* **form:*:** 新增 `date` `time` 小部件对 date-fns 格式化的支持 ([#663](https://github.com/ng-alain/delon/issues/663)) ([ba91193](https://github.com/ng-alain/delon/commit/ba91193))


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
