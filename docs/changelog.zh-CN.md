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

## [7.3.2](https://github.com/ng-alain/delon/compare/7.3.1...7.3.2) (2019-05-03)

### Scaffold

* style: 更新 prettier HTML 配置 ([c0338ef](https://github.com/ng-alain/ng-alain/commit/c0338ef))
* perf: 优化所有DEMO ([#1062](https://github.com/ng-alain/ng-alain/pull/1062))

### Bug Fixes

* **abc:se:** 修复内联模式时应忽略标签的宽度 ([#553](https://github.com/ng-alain/delon/issues/553)) ([70322fa](https://github.com/ng-alain/delon/commit/70322fa))
* **abc:st:** 修复 `res.process` 缺少 `rawData` 参数 ([#549](https://github.com/ng-alain/delon/issues/549)) ([102f53f](https://github.com/ng-alain/delon/commit/102f53f))
* **theme:http:** 修复 `get` 泛型返回错误类型 ([#551](https://github.com/ng-alain/delon/issues/551)) ([b2e1482](https://github.com/ng-alain/delon/commit/b2e1482))
* **util:deepMergeKey:** 修复忽略数组无法问题 ([#555](https://github.com/ng-alain/delon/issues/555)) ([6d4c1cc](https://github.com/ng-alain/delon/commit/6d4c1cc))

### Performance Improvements

* 使用 NG-ZORRO 二级入口 ([#548](https://github.com/ng-alain/delon/issues/548)) ([5d8bac1](https://github.com/ng-alain/delon/commit/5d8bac1))


## [7.3.1](https://github.com/ng-alain/delon/compare/7.3.0...7.3.1) (2019-04-30)

### Scaffold

* 更新 `stylelint` 配置 ([#1054](https://github.com/ng-alain/ng-alain/pull/1054))

### Bug Fixes

* **abc:sv:** 修复内容包含块会引起错位 ([#545](https://github.com/ng-alain/delon/issues/545)) ([a3191a3](https://github.com/ng-alain/delon/commit/a3191a3))
* **cli:** 修复最新版本 stylelint 导致 `lint:style` 命令无效 ([#541](https://github.com/ng-alain/delon/issues/541)) ([1d41e82](https://github.com/ng-alain/delon/commit/1d41e82))
* **form:*:** 修复 `ViewDestroyedError` 错误 ([#542](https://github.com/ng-alain/delon/issues/542)) ([5d8ffa4](https://github.com/ng-alain/delon/commit/5d8ffa4))
* **theme:http:** 修复 `get` 泛型部分参数应可选 ([#546](https://github.com/ng-alain/delon/issues/546)) ([359159c](https://github.com/ng-alain/delon/commit/359159c))


# [7.3.0](https://github.com/ng-alain/delon/compare/7.2.0...7.3.0) (2019-04-26)

### Scaffold

* 401 不需要提示请求错误 ([#1023](https://github.com/ng-alain/ng-alain/pull/1023))
* 升级 `screenfull` 至 `4.2.0` ([#1031](https://github.com/ng-alain/ng-alain/pull/1031))
* 更新 `prettier` 配置 ([#1034](https://github.com/ng-alain/ng-alain/pull/1034))

### Bug Fixes

* **abc:st:** 修复切换页数会触发两次数据加载 ([#539](https://github.com/ng-alain/delon/issues/539)) ([12ad96f](https://github.com/ng-alain/delon/commit/12ad96f))
* **form:*:** 修复异步数据渲染不正确 ([#525](https://github.com/ng-alain/delon/issues/525)) ([d4d4428](https://github.com/ng-alain/delon/commit/d4d4428))
* **form:date:** 修复当未包含 `end` 属性时抛出异常 ([#527](https://github.com/ng-alain/delon/issues/527)) ([f06757c](https://github.com/ng-alain/delon/commit/f06757c))
* **form:select:** 修复国际化 ([#524](https://github.com/ng-alain/delon/issues/524)) ([1df658c](https://github.com/ng-alain/delon/commit/1df658c))
* **form:upload:** 修复移除文件列表时应更新清空值 ([#526](https://github.com/ng-alain/delon/issues/526)) ([0f4e1c5](https://github.com/ng-alain/delon/commit/0f4e1c5))
* **theme:drawer:** 修复默认值问题 ([#535](https://github.com/ng-alain/delon/issues/535)) ([9c588eb](https://github.com/ng-alain/delon/commit/9c588eb))
* **theme:modal:** 修复 `nzWrapClassName` 和 `size` 存在时无法并存问题 ([#537](https://github.com/ng-alain/delon/issues/537)) ([c64834a](https://github.com/ng-alain/delon/commit/c64834a))

### Features

* **abc:st:** 新增 `showExpand` 属性 ([#520](https://github.com/ng-alain/delon/issues/520)) ([d87d56f](https://github.com/ng-alain/delon/commit/d87d56f))
* **abc:st:** 新增 `widthMode` 属性 ([#518](https://github.com/ng-alain/delon/issues/518)) ([715d5de](https://github.com/ng-alain/delon/commit/715d5de))
* **abc:st:** 新增完全受控 `loading` 属性 ([#533](https://github.com/ng-alain/delon/issues/533)) ([317b88c](https://github.com/ng-alain/delon/commit/317b88c))
* **acl:** 新增 `*aclIf` 结构化指令 ([#529](https://github.com/ng-alain/delon/issues/529)) ([cf49779](https://github.com/ng-alain/delon/commit/cf49779))
* **form:** 新增按钮图标配置属性 ([#538](https://github.com/ng-alain/delon/issues/538)) ([0ef4281](https://github.com/ng-alain/delon/commit/0ef4281))
* **form:** 新增 `loading` 属性 ([#517](https://github.com/ng-alain/delon/issues/517)) ([1e9df24](https://github.com/ng-alain/delon/commit/1e9df24))
* **theme:yn:** 新增 `mode` 属性 ([#534](https://github.com/ng-alain/delon/issues/534)) ([ebd42be](https://github.com/ng-alain/delon/commit/ebd42be))
* **theme:drawer:** 新增 `exact` 属性 ([#535](https://github.com/ng-alain/delon/issues/535)) ([9c588eb](https://github.com/ng-alain/delon/commit/9c588eb))

### Special Thanks

Amit0043, its404


# [7.2.0](https://github.com/ng-alain/delon/compare/7.1.0...7.2.0) (2019-04-09)

### Bug Fixes

* **abc:_src:** 修复无效 `size` 属性 ([#503](https://github.com/ng-alain/delon/issues/503)) ([76fc61b](https://github.com/ng-alain/delon/commit/76fc61b))
* **abc:reuse-tab:** 修复右击关闭其他或右侧标签应以当前选择项为基准 ([#500](https://github.com/ng-alain/delon/issues/500)) ([ed3eef7](https://github.com/ng-alain/delon/commit/ed3eef7))
* **abc:st:** 修复点击扩展图标无法触发 `expand` 事件 ([#501](https://github.com/ng-alain/delon/issues/501)) ([a0a9c53](https://github.com/ng-alain/delon/commit/a0a9c53))
* **cli:** 修复未指定 i18n 时提示未找到 `header-i18n` ([#505](https://github.com/ng-alain/delon/issues/505)) ([9839f69](https://github.com/ng-alain/delon/commit/9839f69))
* **sf:** 修复内联模式错位 ([#514](https://github.com/ng-alain/delon/issues/514)) ([9a7901a](https://github.com/ng-alain/delon/commit/9a7901a))
* **sf:radio:** 修复异步数据无法渲染 ([#504](https://github.com/ng-alain/delon/issues/504)) ([18c6af5](https://github.com/ng-alain/delon/commit/18c6af5))

### Features

* **abc:reuse-tab:** 增加 `tabBarExtraContent` `tabBarStyle` `tabBarGutter` 属性 ([#510](https://github.com/ng-alain/delon/issues/510)) ([5d48933](https://github.com/ng-alain/delon/commit/5d48933))
* **acl:** 增加全局 `preCan` 属性，更好的定制 ACL 权限 ([#511](https://github.com/ng-alain/delon/issues/511)) ([1bdbd8c](https://github.com/ng-alain/delon/commit/1bdbd8c))


# [7.1.0](https://github.com/ng-alain/delon/compare/7.0.3...7.1.0) (2019-03-29)

### Bug Fixes

* **sf:checkbox:** 修复点击复选框无法触发全选 ([#493](https://github.com/ng-alain/delon/issues/493)) ([4ee3ca5](https://github.com/ng-alain/delon/commit/4ee3ca5))
* **sf:select:** 修复无效清除按钮 ([#496](https://github.com/ng-alain/delon/issues/496)) ([28e3915](https://github.com/ng-alain/delon/commit/28e3915))

### Features

* **abc:qr:** 新增支持 unicode 值，支持中文 ([#495](https://github.com/ng-alain/delon/issues/495)) ([9082319](https://github.com/ng-alain/delon/commit/9082319))
* **abc:sv:** 新增 `unit` 单位属性 ([#497](https://github.com/ng-alain/delon/issues/497)) ([5a84e1b](https://github.com/ng-alain/delon/commit/5a84e1b))
* **cli:plugin:sts:** 新增 [sts](https://github.com/ng-alain/sts) 插件 ([#494](https://github.com/ng-alain/delon/issues/494)) ([5f735db](https://github.com/ng-alain/delon/commit/5f735db))
* **module:theme:** 新增朝鲜语 ([#486](https://github.com/ng-alain/delon/issues/486)) ([5e3ad9c](https://github.com/ng-alain/delon/commit/5e3ad9c))

### BREAKING CHANGES

* **refactor(abc:st):** `currenty` 重命名为 `currency` ([#492](https://github.com/ng-alain/delon/issues/492)) ([f42861a](https://github.com/ng-alain/delon/commit/f42861a))


## [7.0.3](https://github.com/ng-alain/delon/compare/7.0.2...7.0.3) (2019-03-20)

### Bug Fixes

* **abc:result:** 使用 `nzType` 替代已过期 anticon 类名 ([#483](https://github.com/ng-alain/delon/issues/483)) ([7553860](https://github.com/ng-alain/delon/commit/7553860))
* **abc:se:** 修复当内容为空时应保持占位符的高度 ([#480](https://github.com/ng-alain/delon/issues/480)) ([e35c2e0](https://github.com/ng-alain/delon/commit/e35c2e0))
* **abc:st:** 修复 `width` 不支持数字型 ([#481](https://github.com/ng-alain/delon/issues/481)) ([7cdbe6e](https://github.com/ng-alain/delon/commit/7cdbe6e))
* **abc:st:** 修复丢失模态、抽屉全局配置 ([#482](https://github.com/ng-alain/delon/issues/482)) ([ab34a44](https://github.com/ng-alain/delon/commit/ab34a44))
* **abc:st:** 修复丢失过滤框按钮样式 ([#474](https://github.com/ng-alain/delon/issues/474)) ([f491b4d](https://github.com/ng-alain/delon/commit/f491b4d))
* **sf:number:** 修复指定 `prefix` 后缀时会显示 `null` ([#473](https://github.com/ng-alain/delon/issues/473)) ([4d2cede](https://github.com/ng-alain/delon/commit/4d2cede))
* **util:deepGet:** 修复 `0` 被认为无效值问题 ([#479](https://github.com/ng-alain/delon/issues/479)) ([bf37459](https://github.com/ng-alain/delon/commit/bf37459))

### Features

* **abc:st:** 增加自定义统计方法支持原始数据参数 ([#478](https://github.com/ng-alain/delon/issues/478)) ([431c461](https://github.com/ng-alain/delon/commit/431c461))


## [7.0.2](https://github.com/ng-alain/delon/compare/7.0.1...7.0.2) (2019-03-05)

### Bug Fixes

* **abc:sidebar-nav:** 修复 'Navigation triggered outside Anggular' 警告导致收缩时无法点击 ([#466](https://github.com/ng-alain/delon/issues/466)) ([b565b3f](https://github.com/ng-alain/delon/commit/b565b3f))
* **abc:st:** 修复无法覆盖全局 `req` ([#467](https://github.com/ng-alain/delon/issues/467)) ([697f33e](https://github.com/ng-alain/delon/commit/697f33e))
* **theme:drawer:** 修复顶部或底部宽度及子组件无法滚动问题 ([#469](https://github.com/ng-alain/delon/issues/469)) ([873d0de](https://github.com/ng-alain/delon/commit/873d0de))

### Features

* **sf:upload:** 新增 `urlReName` 属性 ([#464](https://github.com/ng-alain/delon/issues/464)) ([5540631](https://github.com/ng-alain/delon/commit/5540631))


## [7.0.1](https://github.com/ng-alain/delon/compare/7.0.0...7.0.1) (2019-03-01)

### Bug Fixes

* **cli:** 修复 `ng add ng-alain` 执行错误 ([#461](https://github.com/ng-alain/delon/issues/461)) ([bd5696a](https://github.com/ng-alain/delon/commit/bd5696a))


# [7.0.0](https://github.com/ng-alain/delon/compare/7.0.0-rc.10...7.0.0) (2019-02-28)

**一切安好，一直在等待 NG-ZORRO 7.0.0 正式版，它是我们的基础组件，因此本次更新只是保持主版本号的同步**

### Features

* 同步 NG-ZORRO 7.0.0
* 新增希腊 `el_GR` 语言 ([#423](https://github.com/ng-alain/delon/issues/423)) ([17a03d6](https://github.com/ng-alain/delon/commit/17a03d6))


## 7.0.0 之前版本

7.0.0 之前版本的更新记录可以在 [Github](https://github.com/ng-alain/ng-alain/releases) 查看
