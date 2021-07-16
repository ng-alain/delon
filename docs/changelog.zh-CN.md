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

# [12.0.0](https://github.com/ng-alain/delon/compare/11.10.4...12.0.0) (2021-07-16)

### Features

* **abc:st:** 新增 `index` 支持智能代码补全 ([#1284](https://github.com/ng-alain/delon/issues/1284)) ([5d8c017](https://github.com/ng-alain/delon/commit/5d8c01788e6f23853d83a67593b87ffee86bd2d4))
* **abc:notice-icon:** 新增 `emptyText`, `title`, `description` 支持 `TemplateRef` ([#1256](https://github.com/ng-alain/delon/issues/1256)) ([596ca40](https://github.com/ng-alain/delon/commit/596ca40c254e619dc868deced7d4f105fac2d797))
* **abc:se,sv:** 新增对 `nz-divider` 支持，显示分隔线 ([#1283](https://github.com/ng-alain/delon/issues/1283)) ([46d6e3d](https://github.com/ng-alain/delon/commit/46d6e3d60a8903c4a71fc64efc5e8b2d596c3742))
* **cache:** 新增自定义请求接口 ([#1253](https://github.com/ng-alain/delon/issues/1253)) ([084037e](https://github.com/ng-alain/delon/commit/084037e73c094636eb510565863e403259f264d1))
* **chart:bar,mini-area,mini-bar:** 数据内新增 `color` 参数 ([#1279](https://github.com/ng-alain/delon/issues/1279)) ([1ea098d](https://github.com/ng-alain/delon/commit/1ea098daaeca6eedfb07f5f342052b1c3e3ffb6a))
* **chart:echarts:** 支持跟随浏览器调整 ([#1263](https://github.com/ng-alain/delon/issues/1263)) ([9ac3a99](https://github.com/ng-alain/delon/commit/9ac3a99c85f773e63232b2723201b8888fbe5cf0))
* **form:** `visibleIf` 参数增加 `property` 属性 ([#1281](https://github.com/ng-alain/delon/issues/1281)) ([980b8a5](https://github.com/ng-alain/delon/commit/980b8a528bbf59f474984994f6a7271a89cf70b6))
* **theme:theme-btn:** 增加 `deployUrl` 属性 ([#1264](https://github.com/ng-alain/delon/issues/1264)) ([05ce8f2](https://github.com/ng-alain/delon/commit/05ce8f20f7c4b62d75c23e3b1013c8e9951034ff))
* **theme:** 增加工具类开关 ([#1280](https://github.com/ng-alain/delon/issues/1280)) ([273aeed](https://github.com/ng-alain/delon/commit/273aeedeb748f97163cd0282288a9947dc93d605))
* **util:** 增加手机号 `16` 开头格式 ([#1282](https://github.com/ng-alain/delon/issues/1282)) ([cd98359](https://github.com/ng-alain/delon/commit/cd983593e05fbdcdb83cb155d6b5f7fbba435702))

### Performance Improvements

* 使用内置简易 `i18n` 替代 `@ngx-translate/core` ([#1276](https://github.com/ng-alain/delon/issues/1276)) ([ba48cc3](https://github.com/ng-alain/delon/commit/ba48cc3f574837064940f720323351172dd4e3df))

### BREAKING CHANGES

**DelonChartModule**
- 已移除

**WINDOW**
- 使用 `import { WINDOW } from '@delon/util/token';` 替代

**_currency**
- 使用 [price](https://ng-alain.com/util/pipes-currency/en?#price) 管道替代

**_HttpClient.end**
- 使用 `cleanLoading` 替代

**ModalHelper.open, static**
- `open` 使用 `create` 替代
- `static` 使用 `createStatic` 替代

**ScrollService**
- 使用 `import { ScrollService } from '{AT}delon/util/browser';` 替代

**Badges Class**
- 使用 `nz-tag` 替代

**AlainMockConfig.data**
- 使用 `DelonMockModule.forRoot({ data: {} })` 替代

## 历史版本

历史版本的更新记录可以在 [Github](https://github.com/ng-alain/ng-alain/releases) 查看。
