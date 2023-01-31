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
