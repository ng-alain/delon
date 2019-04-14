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

## [7.2.0](https://github.com/ng-alain/delon/compare/7.1.0...7.2.0) (2019-04-09)

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


## [7.1.0](https://github.com/ng-alain/delon/compare/7.0.3...7.1.0) (2019-03-29)

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
