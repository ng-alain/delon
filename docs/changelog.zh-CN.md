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

## [10.0.3](https://github.com/ng-alain/delon/compare/10.0.2...10.0.3) (2020-11-12)

### Bug Fixes

* **g2:*:** 修复数据结构发生变更时无法刷新图表 ([#1063](https://github.com/ng-alain/delon/issues/1063)) ([ff14726](https://github.com/ng-alain/delon/commit/ff14726d3cd28345a079bb5bc38d309292148c99))

## [10.0.2](https://github.com/ng-alain/delon/compare/10.0.1...10.0.2) (2020-10-15)

### Bug Fixes

* **abc:st:** 修复 `process` 的 `params` 不应该始终为 `HttpParsm` 类型 ([#1059](https://github.com/ng-alain/delon/issues/1059)) ([4d2dd0a](https://github.com/ng-alain/delon/commit/4d2dd0aadade43857e875562b26e7052ce54f1ba))


## [10.0.1](https://github.com/ng-alain/delon/compare/10.0.0...10.0.1) (2020-10-02)

### Bug Fixes

* **abc:reuse-tab:** 修复钩子事件无效 `this` 作用域 ([#1056](https://github.com/ng-alain/delon/issues/1056)) ([ccddfd9](https://github.com/ng-alain/delon/commit/ccddfd973794d93cb48dd37d8e28e39b121ec822))
* **abc:st:** 修复虚拟滚动产生空白区域 ([#1055](https://github.com/ng-alain/delon/issues/1055)) ([698f8ac](https://github.com/ng-alain/delon/commit/698f8acf05d994a3555fc575c3178c5c1ed26dba))


# [10.0.0](https://github.com/ng-alain/delon/compare/9.5.5...10.0.0) (2020-09-29)

### 脚手架

* **package.json** 使用 `ng-alain-plugin-theme` 替代 `scripts/themes.js` ([#1815](https://github.com/ng-alain/ng-alain/pull/1815)) ([4b7b7e8](https://github.com/ng-alain/ng-alain/commit/4b7b7e87ea610e261c5e827c5fe47b3fedb58a39))
* **default.interceptor.ts** 新增利用 `TokenService.refresh` 事件来刷新 Token ([#1788](https://github.com/ng-alain/ng-alain/pull/1788)) ([dcc6149](https://github.com/ng-alain/ng-alain/commit/dcc6149813d2670e42f865415ce03df290251915))

### Bug Fixes

* **abc:reuse-tab:** 修复路由参数设置 `reuse: false` 时无法移除标签 ([#1021](https://github.com/ng-alain/delon/issues/1021)) ([e9f8ead](https://github.com/ng-alain/delon/commit/e9f8eadc6ee085fbcdc37cce184ef948ad0a0897))
* **abc:sidebar-nav:** 修复收缩下可能会引起子菜单遮蔽 ([#1046](https://github.com/ng-alain/delon/issues/1046)) ([7efa241](https://github.com/ng-alain/delon/commit/7efa241b7cc907e7a1725179c202d839464e73bc))
* **abc:st:** 修复无法刷新 `width` ([#1027](https://github.com/ng-alain/delon/issues/1027)) ([6f86d8d](https://github.com/ng-alain/delon/commit/6f86d8db8f267fb5e136170ddffb54b7c23fced4))
* **abc:st:** 修复筛选时应重置 `pi` 值 ([#1020](https://github.com/ng-alain/delon/issues/1020)) ([9fa5de3](https://github.com/ng-alain/delon/commit/9fa5de310a37a500ce0fe7890730d84a22fdc7a5))
* **cli:** 修复 `index.html` 丢失 `</div>` ([#1030](https://github.com/ng-alain/delon/issues/1030)) ([a64f9ef](https://github.com/ng-alain/delon/commit/a64f9efdf73f3a3fea46ae664dca742dba8af18a))
* **form:object:** 修复错位 ([#1037](https://github.com/ng-alain/delon/issues/1037)) ([ed24223](https://github.com/ng-alain/delon/commit/ed24223150a540e2e17bf4560125acf1628e71be))
* **form:radio:** 修复无法禁用单项 ([#1033](https://github.com/ng-alain/delon/issues/1033)) ([94998e1](https://github.com/ng-alain/delon/commit/94998e192119c40fca7ec6405b2a0ac0f222161d))
* **form:widget:string:** 修复 `autofocus` 失效 ([#1028](https://github.com/ng-alain/delon/issues/1028)) ([3f033c5](https://github.com/ng-alain/delon/commit/3f033c5657d82bf7a5de20fe54ea43e74bb42027))
* **mock:** 优化显示日志 ([#1017](https://github.com/ng-alain/delon/issues/1017)) ([3d01921](https://github.com/ng-alain/delon/commit/3d019217aadfca9868f3bf500dbbfd205d7fcb26))
* **theme:http:** 修复当 `HttpParams` 类型时应忽略优化空值 ([#1016](https://github.com/ng-alain/delon/issues/1016)) ([47ff3c3](https://github.com/ng-alain/delon/commit/47ff3c3e0b88a0312d4948e928931037d02addf8))
* **theme:menu:** 修复调用 `setItem` 方法时应保持处理逻辑 ([#1044](https://github.com/ng-alain/delon/issues/1044)) ([120f425](https://github.com/ng-alain/delon/commit/120f425b2e58869a307862950bbe23a687eaeb42))

### Features

* **abc:onboarding:** 新增用户引导流程组件 ([#986](https://github.com/ng-alain/delon/issues/986)) ([fbe46d5](https://github.com/ng-alain/delon/commit/fbe46d5e811b0b4ee9815369e4e6044256a3b40d))
* **abc:down-file:** 新增 `pre` 属性 ([#1032](https://github.com/ng-alain/delon/issues/1032)) ([5538ef8](https://github.com/ng-alain/delon/commit/5538ef8b34e74fe897fdd39272edbb002dbdfb5b))
* **abc:reuse-tab:** 新增 `routeParamMatchMode` 属性 ([#1018](https://github.com/ng-alain/delon/issues/1018)) ([05876ca](https://github.com/ng-alain/delon/commit/05876caa2c64ee5f5f4159e7f8aa68ba5fe50298))
* **abc:reuse-tab:** 新增生命周期接口 ([#1047](https://github.com/ng-alain/delon/issues/1047)) ([cba82ea](https://github.com/ng-alain/delon/commit/cba82eae078a5e2d419ea12f8350d76ac76dac06))
* **abc:reuse-tab:** 新增 `_onReuseInit` 类型参数，用于判断是首次还是刷新 ([#1026](https://github.com/ng-alain/delon/issues/1026)) ([69a04ee](https://github.com/ng-alain/delon/commit/69a04ee16c77ffd42475c25a0db0cc0036c13676))
* **abc:st:** 新增按钮参数 `className` ([#1034](https://github.com/ng-alain/delon/issues/1034)) ([26f60ce](https://github.com/ng-alain/delon/commit/26f60cec7e2a53f5d91c1c6c0a8428567fc39781))
* **abc:st:** 新增 `type: 'link'` 时显示链接标题 ([#1031](https://github.com/ng-alain/delon/issues/1031)) ([09dcc8d](https://github.com/ng-alain/delon/commit/09dcc8dc5994e1fbdea4b68395a25b00f12cde7e))
* **abc:st:** 新增列拖动（不支持表头分组） ([#1049](https://github.com/ng-alain/delon/issues/1049)) ([08de51c](https://github.com/ng-alain/delon/commit/08de51ce6efadd51d9e917a3e039f66bf4bc9c9f))
* **abc:st:** 新增 `render` 和 `renderTitle` 参数支持 `TemplateRef` 类型 ([#1050](https://github.com/ng-alain/delon/issues/1050)) ([be4f6da](https://github.com/ng-alain/delon/commit/be4f6dab85ccaa06ac9522a64842ef5bdba8f548))
* **abc:st:** 新增多排序支持数组 ([#1015](https://github.com/ng-alain/delon/issues/1015)) ([e1119f5](https://github.com/ng-alain/delon/commit/e1119f5c98e883f8544e9e181464495095f34c14))
* **auth:** 新增 `refresh` 事件 ([#1011](https://github.com/ng-alain/delon/issues/1011)) ([3388e1f](https://github.com/ng-alain/delon/commit/3388e1fb071b99e02f87168ad8223101fe7f9c4d))
* **chart:water-wave:** 新增 `render()` 方法 ([#1014](https://github.com/ng-alain/delon/issues/1014)) ([c3d31c4](https://github.com/ng-alain/delon/commit/c3d31c4a1b6f116e88bb849c88999fccd8ee7f69))
* **cli:** 新增无法使用 `cnpm` 来安装 NG-ALAIN ([#1036](https://github.com/ng-alain/delon/issues/1036)) ([b2ff9e1](https://github.com/ng-alain/delon/commit/b2ff9e186d570590cd5d1fe79be545b4c2b142d3))
* **cli:** 使用 `ng-alain-plugin-theme` 替代 `scripts/themes.js` ([#1039](https://github.com/ng-alain/delon/issues/1039)) ([6c8e571](https://github.com/ng-alain/delon/commit/6c8e5710259ae13e06f00fef1c99a87773f988aa))

**移除所有已经在 `9.x` 声明的过期项，包含以下：**

| 包 | 组件 | 过期 |
|---|----|-----|
| `@delon/chart` | `tag-cloud` | 数据项 `x`、`category` |
| `@delon/chart` | `timeline` | 数据项 `x` |
| `@delon/util` | `lazy` | `LazyResult.loaded` |

## 10.0.0 之前版本

10.0.0 之前版本的更新记录可以在 [Github](https://github.com/ng-alain/ng-alain/releases) 查看
