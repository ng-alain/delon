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

# [12.3.0](https://github.com/ng-alain/delon/compare/12.2.3...12.3.0) (2021-10-30)

### Bug Fixes

* **abc:st:** 修复表头分组下 `iif` 失效 ([#1363](https://github.com/ng-alain/delon/issues/1363)) ([14eb035](https://github.com/ng-alain/delon/commit/14eb0351d62ec57d64010a910f8054350e9c9734))
* **form:number:** 修复步骤影响范围包含值 ([#1366](https://github.com/ng-alain/delon/issues/1366)) ([68b5c5b](https://github.com/ng-alain/delon/commit/68b5c5b726e6cdf7d55bf4ba271d4e5f299d8cbb))

### Features

* **abc:xlsx:** 新增支持 `csv` 文件 ([#1354](https://github.com/ng-alain/delon/issues/1354)) ([826b93f](https://github.com/ng-alain/delon/commit/826b93f1c41247fd9385ebf4f11b99e10a5449a3))
* **acl:** 新增 `guard` 参数支持函数 ([#1365](https://github.com/ng-alain/delon/issues/1365)) ([bf2ff5d](https://github.com/ng-alain/delon/commit/bf2ff5d5be9d0f94ff949a0574b35cba3648aa77))
* 新增意大利语 ([#1357](https://github.com/ng-alain/delon/issues/1357)) ([52b237a](https://github.com/ng-alain/delon/commit/52b237ade8f9c13f95cc0cc84eba17f8cbda51f1))
* **chart:echarts:** 新增 `on` 参数 ([#1337](https://github.com/ng-alain/delon/issues/1337)) ([442abcc](https://github.com/ng-alain/delon/commit/442abcc89d63aaab9664330ce0ecc6034d6d3888))
* **form:widget:text:** 新增 `html` 参数，默认以HTML格式渲染 ([#1367](https://github.com/ng-alain/delon/issues/1367)) ([d07bcdd](https://github.com/ng-alain/delon/commit/d07bcdd55f0d749a2d66c8b3fcdde651ad947cf5))
* **theme:menu:** 新增Icon图标支持 `svg` 格式 ([#1364](https://github.com/ng-alain/delon/issues/1364)) ([36c43e2](https://github.com/ng-alain/delon/commit/36c43e2efee9564a6c7f41ff8247858b7d248aca))
* **util:format:** 新增更复杂的掩码格式 ([#1349](https://github.com/ng-alain/delon/issues/1349)) ([152cc50](https://github.com/ng-alain/delon/commit/152cc504e0dc83d65ae571fdf0919bcfbd6e1cdb))


## [12.2.3](https://github.com/ng-alain/delon/compare/12.2.2...12.2.3) (2021-09-24)

### Bug Fixes

* **cli:** 修复未选择动态表单时导出多余的项 ([#1352](https://github.com/ng-alain/delon/issues/1352)) ([e71ea04](https://github.com/ng-alain/delon/commit/e71ea04dba044a29919b36b436d855164eeebc63))
* **form:widget:autocomplete:** 修复异步数据源下不正确的标签 ([#1351](https://github.com/ng-alain/delon/issues/1351)) ([aca195a](https://github.com/ng-alain/delon/commit/aca195a10fc46dda51c8eefc8b9b28ced30da812))
* **form:** 修复 `ui` 值存在交叉感染 ([#1355](https://github.com/ng-alain/delon/issues/1355)) ([65ac839](https://github.com/ng-alain/delon/commit/65ac839fedb34d4e18e959071e0b8c31e0aa6e96))


## [12.2.2](https://github.com/ng-alain/delon/compare/12.2.1...12.2.2) (2021-09-10)

### Scaffold

* 修复 WebKit 内核 `navigator.languages` 总是返回小写字符 ([#2088](https://github.com/ng-alain/ng-alain/pull/2069))

### Bug Fixes

* **abc:reuse-tab:** 修复新增标签总是在当前标签之后 ([#1345](https://github.com/ng-alain/delon/issues/1345)) ([d6438cf](https://github.com/ng-alain/delon/commit/d6438cf40cb6857ca4459278ec3b6e95fbbba738))
* **abc:st:** 修复 `type` 为 `date` 时空值会产生 `#NULL!` ([#1338](https://github.com/ng-alain/delon/issues/1338)) ([52bac24](https://github.com/ng-alain/delon/commit/52bac241ab537eb829542bf6290b43cb0440d67c))
* **abc:st:** 修复拖拽与排序之间的间隔 ([#1341](https://github.com/ng-alain/delon/issues/1341)) ([519adbe](https://github.com/ng-alain/delon/commit/519adbe9c5f86068d2b97acf3a3921b491470521))
* **auth:** 修复确保 `change` 事件与 `get()` 始终一致性 ([#1339](https://github.com/ng-alain/delon/issues/1339)) ([fddb094](https://github.com/ng-alain/delon/commit/fddb0942d4e297f62d227e06230573ad314e9b65))
* **cli:tpl:** 修复 `index` 索引不正确 ([#1336](https://github.com/ng-alain/delon/issues/1336)) ([af62081](https://github.com/ng-alain/delon/commit/af620810ecdd93c8844755b303c995fe54dbe2b0))
* **cli:tpl:** 修复缺少 `tplName` 属性 ([#1335](https://github.com/ng-alain/delon/issues/1335)) ([0e7b4f4](https://github.com/ng-alain/delon/commit/0e7b4f471bf28257a19c130e78df26542b1d5d0f))
* **form:** 修复 `widget` 参数显示内置小部件名称 ([#1334](https://github.com/ng-alain/delon/issues/1334)) ([b192990](https://github.com/ng-alain/delon/commit/b192990cf9f7ecfe84aa7f252ab4d3cc33151885))
* **util:format:** 修复手机号不支持 198 开头 ([#1331](https://github.com/ng-alain/delon/issues/1331)) ([a6faccd](https://github.com/ng-alain/delon/commit/a6faccd197857a08f07add7031975e56312d0424))


## [12.2.1](https://github.com/ng-alain/delon/compare/12.2.0...12.2.1) (2021-08-22)

### Bug Fixes

* 修复Less无法编译 `.antTableEvenBG` ([#1329](https://github.com/ng-alain/delon/issues/1329)) ([f0fa5d5](https://github.com/ng-alain/delon/commit/f0fa5d526ac7789f4a4746829a6c682fc6579cf7))


# [12.2.0](https://github.com/ng-alain/delon/compare/12.1.1...12.2.0) (2021-08-22)

### Scaffold

* 新增 `PreloadOptionalModules` 可选预加载模块 ([#2055](https://github.com/ng-alain/ng-alain/issues/2055))
* 新增支持国际化插值符号配置 `interpolation` ([#2062](https://github.com/ng-alain/ng-alain/issues/2062))
* 修复语言键名大小写敏感 ([#2069](https://github.com/ng-alain/ng-alain/issues/2069))
* 优化使用 `MatchControl` 替代自定义两个控件值的匹配 ([#2061](https://github.com/ng-alain/ng-alain/issues/2061))

### Bug Fixes

* **abc:st:** 修复 `safeType` 为 `text` 值时会渲染出 `undefined` 文本 ([#1322](https://github.com/ng-alain/delon/issues/1322)) ([c337d75](https://github.com/ng-alain/delon/commit/c337d75a7f2aa0d374c88db4e97dd51da8b604ce))
* **form:widget:select:** 修复分组情况下 `change` 事件的 `orgData` 参数不正确 ([#1312](https://github.com/ng-alain/delon/issues/1312)) ([#1320](https://github.com/ng-alain/delon/issues/1320)) ([8c12822](https://github.com/ng-alain/delon/commit/8c12822a7d65cdcda7c34d9554d13c5a1ef981d9))
* **sf:** 修复 `strict` 模式下产生：`unknown keyword: "_description"` 错误 ([#1327](https://github.com/ng-alain/delon/issues/1327)) ([554abd4](https://github.com/ng-alain/delon/commit/554abd469fa588548a1ec79d603201eeeafd1250))
* **util:convert:** 修复 `InputBoolean` 默认值参数无效问题 ([#1323](https://github.com/ng-alain/delon/issues/1323)) ([386690c](https://github.com/ng-alain/delon/commit/386690cb1e194dc50c22450e71d0e0995a8b24bc))
* **util:other:deep:** 修复无法深度合并函数 ([#1321](https://github.com/ng-alain/delon/issues/1321)) ([f2f181b](https://github.com/ng-alain/delon/commit/f2f181b8ba44eade220eececa546a5c84fa6f776))

### Features

* **abc:se,sv:** 新增 `noColon` 属性 ([#1324](https://github.com/ng-alain/delon/issues/1324)) ([9f2a031](https://github.com/ng-alain/delon/commit/9f2a0313310fbbcd610a26a33c77742734a3fe2e))
* **form:string:** 新增 `changeDebounceTime`, `changeMap` 属性 ([#1315](https://github.com/ng-alain/delon/issues/1315)) ([3a8a26d](https://github.com/ng-alain/delon/commit/3a8a26d5a36513b2cdb6d51fb474c4eb7eaceb60))
* **theme:i18n:** 新增可配置国际插值符合 `interpolation` ([#1318](https://github.com/ng-alain/delon/issues/1318)) ([e711865](https://github.com/ng-alain/delon/commit/e7118657fbb24c9f62c422e1b1029bfbe2cee541))
* **theme:** 新增 `@nz-table-even-background` 表格奇偶背景色 ([#1325](https://github.com/ng-alain/delon/issues/1325)) ([71d3ef6](https://github.com/ng-alain/delon/commit/71d3ef6be7097d083af3967283d27c420c35e0e9))
* **theme:** 新增可选预加载 `PreloadOptionalModules` 模块 ([#1310](https://github.com/ng-alain/delon/issues/1310)) ([6df8fd0](https://github.com/ng-alain/delon/commit/6df8fd029be8f877292d384e962d4c26161a8011))


## [12.1.1](https://github.com/ng-alain/delon/compare/12.1.0...12.1.1) (2021-08-13)

### Bug Fixes

* **abc:st:** 修复若只设置 `scroll.x` 时 `toTop` 无效 ([#1311](https://github.com/ng-alain/delon/issues/1311)) ([c07e1fa](https://github.com/ng-alain/delon/commit/c07e1fa688d7dbf4cbf593c08886b6346e5de46c))
* **auth:** 修复写入Cookie含有无效值 ([#1316](https://github.com/ng-alain/delon/issues/1316)) ([fd97e51](https://github.com/ng-alain/delon/commit/fd97e51fd37d4e011940e3ae518a0fa24badf819))
* **form:widget:select:** 修复 `change` 事件 `orgData` 参数没有返回正确值 ([#1312](https://github.com/ng-alain/delon/issues/1312)) ([527c212](https://github.com/ng-alain/delon/commit/527c212ae4ded1ba7c3b36ea039d8d72cb22fd59))
* **form:** 修复 `button` 无法设置 `null` 值 ([#1314](https://github.com/ng-alain/delon/issues/1314)) ([d289411](https://github.com/ng-alain/delon/commit/d2894115b1ef9e898303952307e4f5ead6f64bc5))


# [12.1.0](https://github.com/ng-alain/delon/compare/12.0.3...12.1.0) (2021-08-07)

### Bug Fixes

* **abc:page-header:** 修复很多标签时无法自动滚动 ([#1304](https://github.com/ng-alain/delon/issues/1304)) ([90677bb](https://github.com/ng-alain/delon/commit/90677bb3341a8b5286f65e55e3d5183a69f7e4a3))
* **abc:reuse-tab:** 修复重复触发 `_onReuseInit` 事件 ([#1308](https://github.com/ng-alain/delon/issues/1308)) ([4282fc2](https://github.com/ng-alain/delon/commit/4282fc2ea1556a0b4e0459e9c9385edf7fb0f670))
* **cli:** 移除测试用例过期属性 ([#1305](https://github.com/ng-alain/delon/issues/1305)) ([259a1c2](https://github.com/ng-alain/delon/commit/259a1c2a90f5473081807b3af2895d68b9375e07))

### Features

* **abc:exception:** 新增 `backRouterLink` 属性 ([#1299](https://github.com/ng-alain/delon/issues/1299)) ([6a94dbd](https://github.com/ng-alain/delon/commit/6a94dbd6ae80ce5ae4176d28731e373e0c26ee55))
* **abc:st:** 新增点击行切换类名 `clickRowClassName` 属性 ([#1307](https://github.com/ng-alain/delon/issues/1307)) ([5e5978d](https://github.com/ng-alain/delon/commit/5e5978d1fbd5eaf96f252871cbcc766bad8f2381))
* **form:** `number` 新增 `hideStep` 属性用于隐藏步骤图标 ([#1303](https://github.com/ng-alain/delon/issues/1303)) ([f895bf0](https://github.com/ng-alain/delon/commit/f895bf0abbfc88dc4154bd57ef65b8321dae6fb9))


## [12.0.3](https://github.com/ng-alain/delon/compare/12.0.2...12.0.3) (2021-08-01)

### Bug Fixes

* **abc:page-header:** 修复 `should be run in update mode` 错误 ([#1297](https://github.com/ng-alain/delon/issues/1297)) ([1e4ea43](https://github.com/ng-alain/delon/commit/1e4ea439adf3eb0f9cb3419a9d6b8b5ea84714d9))
* **abc:st:** 修复导出Excel未设置宽度 ([#1296](https://github.com/ng-alain/delon/issues/1296)) ([b0a9a96](https://github.com/ng-alain/delon/commit/b0a9a964085f951efe2ff58c8c853e0c178a8bd9))
* **form:** 修复 `formData` 签名丢失问题 ([#1296](https://github.com/ng-alain/delon/issues/1300))

## [12.0.2](https://github.com/ng-alain/delon/compare/12.0.1...12.0.2) (2021-07-26)

### Bug Fixes

* **cli:** `ng update ng-alain --fixAngularJson=false` 增加 `fixAngularJson` 选项，可忽略对 `angular.json` 的调整 ([#1294](https://github.com/ng-alain/delon/issues/1294)) ([dbe0642](https://github.com/ng-alain/delon/commit/dbe06424c59fa005f86c0f196bb5ad053ac4665f))


## [12.0.1](https://github.com/ng-alain/delon/compare/12.0.0...12.0.1) (2021-07-24)

### Bug Fixes

* **abc:st:** 修复调用 `export` 在指定数据下应调用优化函数 ([#1288](https://github.com/ng-alain/delon/issues/1288)) ([9416fe1](https://github.com/ng-alain/delon/commit/9416fe16360e7e9def0a6b9150bd5e8bbc166386))
* **cli:** 修复重复多余定义 `UserLoginComponent` ([#1289](https://github.com/ng-alain/delon/issues/1289)) ([1042aea](https://github.com/ng-alain/delon/commit/1042aeae16b6f06022bf6cc0a52727a5458b8bc1))
* **cli:** 修复命令行重复别名 `t` ([#1291](https://github.com/ng-alain/delon/issues/1291)) ([c4e1943](https://github.com/ng-alain/delon/commit/c4e1943475d46f94683345cc94fc8c5eb83e1267))
* **theme:http:** 修复丢失 `HttpContext` ([#1292](https://github.com/ng-alain/delon/issues/1292)) ([a394400](https://github.com/ng-alain/delon/commit/a394400c003e1e73c42789aa43baadbc590af080))


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
