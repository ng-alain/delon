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

# [13.3.0](https://github.com/ng-alain/delon/compare/13.2.1...13.3.0) (2022-03-11)

### Bug Fixes

* **sf:widget:radio:** 修复 `SafeHtml` 问题 ([#1454](https://github.com/ng-alain/delon/issues/1454)) ([4b12d0c](https://github.com/ng-alain/delon/commit/4b12d0cb10fabd97cd82f719eb527947ca16b236))

### Features

* **form:** 新增 `feedback` 反馈状态相关属性与操作 ([#1452](https://github.com/ng-alain/delon/issues/1452)) ([1305849](https://github.com/ng-alain/delon/commit/1305849545316ac6ea7b117245f58d1caa2ca155))
* **theme:i18n:** 新增 `AlainI18NGuard` 守卫，用于国际化体现在URL上 ([#1451](https://github.com/ng-alain/delon/issues/1451)) ([4340c15](https://github.com/ng-alain/delon/commit/4340c151682d63460b9c8a872194370b72113b13))
* **theme:theme-btn:** 新增 `themeChange` 事件 ([#1445](https://github.com/ng-alain/delon/issues/1445)) ([4326e73](https://github.com/ng-alain/delon/commit/4326e73df0c275ad334ba9516142506100bf1223))


## [13.2.1](https://github.com/ng-alain/delon/compare/13.2.0...13.2.1) (2022-03-04)

### Bug Fixes

* **abc:media:** 修复 `cannot redefine property` 错误 ([#1447](https://github.com/ng-alain/delon/issues/1447)) ([475e5cb](https://github.com/ng-alain/delon/commit/475e5cb639dee52952eacde9c5c70677167e50e6))
* **abc:pdf:** 修复确保 `container` 绝对位置错误 ([#1448](https://github.com/ng-alain/delon/issues/1448)) ([c2ed8a7](https://github.com/ng-alain/delon/commit/c2ed8a7e8cdbc976561cbd30eb5b54d1fae975be))
* **chart:pie:** 修复开发环境下 ECAIHBC 错误 ([#1440](https://github.com/ng-alain/delon/issues/1440)) ([43595f2](https://github.com/ng-alain/delon/commit/43595f21c82618f5de284397bd736522f4b928f4))
* **cli:** 修复重复 `-t` 别名问题 ([#1443](https://github.com/ng-alain/delon/issues/1443)) ([e44df08](https://github.com/ng-alain/delon/commit/e44df0855d923e57a5dfef511aac1540663f5d8d))
* **form:tree-select:** 修复错误 `checkfStrictly` ([#1446](https://github.com/ng-alain/delon/issues/1446)) ([90498f0](https://github.com/ng-alain/delon/commit/90498f06c52e9e8f94f2e61d05b28977889db687))
* **form:** 修复 `inline` 布局按钮错位问题 ([#1442](https://github.com/ng-alain/delon/issues/1442)) ([1e836f8](https://github.com/ng-alain/delon/commit/1e836f8b93dd6925245d018e85f52c0b8da6a659))


# [13.2.0](https://github.com/ng-alain/delon/compare/13.1.0...13.2.0) (2022-02-12)

### Bug Fixes

* **abc:se:** 修复动画效果错位 ([#1432](https://github.com/ng-alain/delon/issues/1432)) ([3152ad6](https://github.com/ng-alain/delon/commit/3152ad677a358f4688b15d208ec580975855e77c))
* **form:** 修改无效错误样式 ([#1430](https://github.com/ng-alain/delon/issues/1430)) ([929cca9](https://github.com/ng-alain/delon/commit/929cca98b8d48d789928145e65ac19dd657518e0))
* **form:arra:** 修复 Schema 被污染 ([#1431](https://github.com/ng-alain/delon/issues/1431)) ([5d33bc0](https://github.com/ng-alain/delon/commit/5d33bc0b0357c319b91a756f52d9332b82f1bc6a))

### Features

* **abc:qr:** 新增值类型 `value` 支持 Function，自定义解析 ([#1437](https://github.com/ng-alain/delon/issues/1437)) ([ec21e06](https://github.com/ng-alain/delon/commit/ec21e064e0d02e9f32ce5c8d38fd0929cb531577))
* **cache:** 新增 `emitNotify` 属性 ([#1433](https://github.com/ng-alain/delon/issues/1433)) ([a5c15fe](https://github.com/ng-alain/delon/commit/a5c15fe5389c14fed0c5181fc6126c3be28e05d8))


# [13.1.0](https://github.com/ng-alain/delon/compare/13.0.0...13.1.0) (2022-01-15)

### Bug Fixes

* **abc:se:** 修改无效错误样式 ([#1425](https://github.com/ng-alain/delon/issues/1425)) ([2b74c66](https://github.com/ng-alain/delon/commit/2b74c6662bd8e56f2d185064ccfef8a6fef27f60))
* **cli:module:** 修复丢失逗号 ([#1428](https://github.com/ng-alain/delon/issues/1428)) ([c3dba05](https://github.com/ng-alain/delon/commit/c3dba05ca33a16f321098e46b5d88aea5ef3b98d))
* **cli:** 修复 `lint:style` 脚本 ([#1421](https://github.com/ng-alain/delon/issues/1421)) ([37089eb](https://github.com/ng-alain/delon/commit/37089ebef07e0e74593fa78cb3e4bb361ea1a0cc))

### Features

* **chart:*:** 新增 `ready` 事件 ([#1426](https://github.com/ng-alain/delon/issues/1426)) ([4fd46a6](https://github.com/ng-alain/delon/commit/4fd46a65afc410188bdfd35d1207e2734ff17c44))
* **cli:** 新增生成服务类 ([#1427](https://github.com/ng-alain/delon/issues/1427)) ([794c569](https://github.com/ng-alain/delon/commit/794c569ea1dcdeec5eaadca643866bdea2c2b2d8))

### Performance Improvements

* 优化更友好的泛型支持 ([#1422](https://github.com/ng-alain/delon/issues/1422)) ([0ff1988](https://github.com/ng-alain/delon/commit/0ff1988c24e3dfa766b9f3b0d33c185ded6c95e0))
* 移除部分专门针对IE的样式 ([#1424](https://github.com/ng-alain/delon/issues/1424)) ([36031a4](https://github.com/ng-alain/delon/commit/36031a4d133e495276693109fd8e014210bd75f7))


# [13.0.0](https://github.com/ng-alain/delon/compare/12.4.2...13.0.0) (2022-01-03)

### Bug Fixes

* **abc:lodop:** 更新 `lodop.types.ts` ([#1400](https://github.com/ng-alain/delon/issues/1400)) ([3fb7b41](https://github.com/ng-alain/delon/commit/3fb7b41859a3eb6a3c987cfa8141b9d5c90ee86e))
* **cli:ng-add:** 修复警告不支持的 Node 版本 ([#1401](https://github.com/ng-alain/delon/issues/1401)) ([1c15596](https://github.com/ng-alain/delon/commit/1c1559606595fdd3630a8e1cb664c7bef7e3263f))
* **form:array:** 修复水平布局下指定 `spanLabelFixed` 样式错位 ([#1407](https://github.com/ng-alain/delon/issues/1407)) ([a7c6450](https://github.com/ng-alain/delon/commit/a7c64508dba9d50efaa77a589e8e8beb75ad8f43))
* **form:autocomplete:** 修复无法设置默认值 ([#1406](https://github.com/ng-alain/delon/issues/1406)) ([d18aa43](https://github.com/ng-alain/delon/commit/d18aa43e85772eb7231bb5970f5c9716abde7c4d))
* **theme:layout-default:** 修复在收缩下光标移到其他菜单时自动关闭子菜单 ([#1411](https://github.com/ng-alain/delon/issues/1411)) ([22cacb4](https://github.com/ng-alain/delon/commit/22cacb4eb3d9cc18e67c3953aff81537193f2cbc))

### Features

* **abc:se:** 新增 `hideLabel` 属性 ([#1402](https://github.com/ng-alain/delon/issues/1402)) ([3ec8d06](https://github.com/ng-alain/delon/commit/3ec8d0675261d04cfbf61f14c51cff99cee1734f))
* **cli:** 新增提醒使用 `yarn` 替代 `npm` 的安装依赖方式 ([#1415](https://github.com/ng-alain/delon/issues/1415)) ([0bf930c](https://github.com/ng-alain/delon/commit/0bf930ca48a2ee230fb5ed708bd19f9adc72a37c))
* **form:array:** 新增 `required` 属性 ([#1408](https://github.com/ng-alain/delon/issues/1408)) ([8f3510e](https://github.com/ng-alain/delon/commit/8f3510e22331fab8a65ab0d7a0217dcf52d329ff))

### Performance Improvements

* 移除对 IE 的支持 ([#1419](https://github.com/ng-alain/delon/issues/1419)) ([c2279c4](https://github.com/ng-alain/delon/commit/c2279c47449360576609b3da47b47ff2b2449e94))
* 优化生成环境下 tree-shake 警告 ([#1417](https://github.com/ng-alain/delon/issues/1417)) ([e98cf99](https://github.com/ng-alain/delon/commit/e98cf9939865a4b04b1626d9bfcd76b41e16c8f1))
* **util:copy:** 优化使用原生 `navigator.clipboard` ([#1413](https://github.com/ng-alain/delon/issues/1413)) ([ed7834b](https://github.com/ng-alain/delon/commit/ed7834b9730f350d3fbe6498aea6d54c43d44436))


## 历史版本

历史版本的更新记录可以在 [Github](https://github.com/ng-alain/ng-alain/releases) 查看。
