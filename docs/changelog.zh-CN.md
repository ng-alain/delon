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

## [15.2.1](https://github.com/ng-alain/delon/compare/15.2.0...15.2.1) (2023-05-13)

### Bug Fixes

* **abc:pdf:** 修复支持最新版本pdf ([#1596](https://github.com/ng-alain/delon/issues/1596)) ([a42b4f0](https://github.com/ng-alain/delon/commit/a42b4f0413036f7236b74103395d772ffe13768f))
* **form:textarea:** 修复无效参数 `autosize` ([#1595](https://github.com/ng-alain/delon/issues/1595)) ([98b7ca6](https://github.com/ng-alain/delon/commit/98b7ca6c44ba367c3be73396b28342518b6bbf2f))


# [15.2.0](https://github.com/ng-alain/delon/compare/15.1.0...15.2.0) (2023-04-16)

### Bug Fixes

* 重构：修复使用 `canMatch` 替代 `canLoad` ([#1586](https://github.com/ng-alain/delon/issues/1586)) ([ec86352](https://github.com/ng-alain/delon/commit/ec863527f1eba67cbbb6cfca40f516729344fc3b))
* **abc:pdf:** 修复使用 `currentScale` 替代 `_setScale` ([#1590](https://github.com/ng-alain/delon/issues/1590)) ([3b58880](https://github.com/ng-alain/delon/commit/3b5888022426d060310ea7a8d0fd2d2db99b28a3))
* **abc:st:** 修复 `rowClassName` 对固定列无效 ([#1591](https://github.com/ng-alain/delon/issues/1591)) ([0fa954f](https://github.com/ng-alain/delon/commit/0fa954fa65a67b34185c7c3113407b21e7693074))
* **form:** 修复继承父UI部分参数会导致无法呈现 ([#1592](https://github.com/ng-alain/delon/issues/1592)) ([d14c866](https://github.com/ng-alain/delon/commit/d14c8669c32427a5e5019f66c43bbff3d412b8b1))
* **form:** 修复超大 Schema 引发内存溢出 ([#1593](https://github.com/ng-alain/delon/issues/1593)) ([483819c](https://github.com/ng-alain/delon/commit/483819c5d4bc17c9b619ada4a5dd1a744a79fa5b))
* **form:** 修复 transfer 小部件在 dark 主题下背景问题 ([#1588](https://github.com/ng-alain/delon/issues/1588)) ([113c686](https://github.com/ng-alain/delon/commit/113c686c2a98d35896dec069354f4130b0373d22))

### Features

* **theme:** 新增 `MenuService.find` 新增 `ignoreHide` 参数 ([#1587](https://github.com/ng-alain/delon/issues/1587)) ([890f6d6](https://github.com/ng-alain/delon/commit/890f6d6b0a1bd41a1cafded9290b4ebfa7ed212d))


# [15.1.0](https://github.com/ng-alain/delon/compare/15.0.1...15.1.0) (2023-02-19)

### Bug Fixes

* **abc:st:** 修复全局配置 `total` 不生效 ([#1583](https://github.com/ng-alain/delon/issues/1583)) ([fa8087f](https://github.com/ng-alain/delon/commit/fa8087f4fb0050fa47b8c9d57460cdf55d6fa9d3))
* **form:string:** 修复携带前置标签倒置焦点失效 ([#1581](https://github.com/ng-alain/delon/issues/1581)) ([bc03f4b](https://github.com/ng-alain/delon/commit/bc03f4bdae7a861d82db2edae9e0873ae80e8020))
* **form:** 修复 `ui` 值应继续父级 ([#1582](https://github.com/ng-alain/delon/issues/1582)) ([03e2dc5](https://github.com/ng-alain/delon/commit/03e2dc5dd60e00c81fe0284fe163700b24ea39c3))

### Features

* **form:number:** 新增 `widgetWidth` 支持字符串数组 ([#1580](https://github.com/ng-alain/delon/issues/1580)) ([f3e37e9](https://github.com/ng-alain/delon/commit/f3e37e97a490eb7437f7582a3e3716288358b5e5))
* **form:** 同步 ng-zorro-antd 小部件属性 ([#1584](https://github.com/ng-alain/delon/issues/1584)) ([5774c55](https://github.com/ng-alain/delon/commit/5774c55f2226655eb0a6d9df57a029427fe6ec3f))


## [15.0.1](https://github.com/ng-alain/delon/compare/15.0.0...15.0.1) (2023-01-29)

### Bug Fixes

* **abc:pdf:** 修复支持 `2.x` 版本 ([#1574](https://github.com/ng-alain/delon/issues/1574)) ([0cf8b3a](https://github.com/ng-alain/delon/commit/0cf8b3a98c1c2029ff7d90af6cea6d2941199d4b))
* **cli:** 修复 `can not add index to parent of type array` 错误 ([#1577](https://github.com/ng-alain/delon/issues/1577)) ([3ac463f](https://github.com/ng-alain/delon/commit/3ac463f22d7020afd4930c1372c6b87d865fdddd))


# [15.0.0](https://github.com/ng-alain/delon/compare/14.3.0...15.0.0) (2023-01-09)

### Bug Fixes

* **abc:st:** 修复 `className` 没有应用到标题 ([#1569](https://github.com/ng-alain/delon/issues/1569)) ([d641164](https://github.com/ng-alain/delon/commit/d6411640f54bb41ebff254b2b221dc200a635a21))
* **abc:theme-default:** 移除一些未用到有参数 ([#1563](https://github.com/ng-alain/delon/issues/1563)) ([656bd89](https://github.com/ng-alain/delon/commit/656bd8993d9957697992842b2f25ad66e91e1a7f))
* **cli:** 修复 `name` 参数指定无效索引位 ([#1568](https://github.com/ng-alain/delon/issues/1568)) ([d4ad502](https://github.com/ng-alain/delon/commit/d4ad50259e398cbbf680b1bc2f7aca1d7eb14e1e))

### Features

* **theme:layout-default:** 新增 `layout-default-top-menu-item`，用于实现顶部菜单，使用方式请参考 [layout.component.ts](https://github.com/ng-alain/delon/blob/master/src/dev/layout.component.ts#L65-L72)([预览](https://ng-alain.com/dev/home))。 ([#1570](https://github.com/ng-alain/delon/issues/1570)) ([f08dc46](https://github.com/ng-alain/delon/commit/f08dc46af7ad9ca5cf3e4fa5b0daef2cfbc0b4a5))
* **util:format:** 新增 `isNum` 支持科学记数法 ([#1567](https://github.com/ng-alain/delon/issues/1567)) ([f8c0589](https://github.com/ng-alain/delon/commit/f8c05894e0a10fb6037275103b921698ca072494))

### BREAKING CHANGE

- **auth:** 移除 `_allow_anonymous` 使用 [ALLOW_ANONYMOUS](https://github.com/ng-alain/delon/blob/master/packages/auth/src/token.ts) `HttpContext` 替换
- **theme:** 移除 `MenuService` 下 `getHit`, `openedByUrl` 方法，使用 `find` 和 `setItem` 替代

## 历史版本

历史版本的更新记录可以在 [Github](https://github.com/ng-alain/ng-alain/releases) 查看。
