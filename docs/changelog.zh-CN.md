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
