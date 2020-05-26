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

# [9.3.0](https://github.com/ng-alain/delon/compare/9.2.4...9.3.0) (2020-05-24)

### Scaffold

* 新增暗黑、紧凑两种主题，本次为**破坏性变更**，需要手动更新两个地方：

**1、`src/styles.less` 文件**

```less
// #region PLACEHOLDER, IMPORTANT: don't remove
@import '~@delon/theme/styles/index';
@import '~@delon/abc/index';
@import '~@delon/chart/index';
@import '~@delon/theme/styles/layout/default/index';
@import '~@delon/theme/styles/layout/fullscreen/index';
@import './styles/index';
@import './styles/theme';
// #endregion
```

更新为：

```less
@import '~@delon/theme/system/index';
@import '~@delon/abc/index';
@import '~@delon/chart/index';
@import '~@delon/theme/layout/default/index';
@import '~@delon/theme/layout/fullscreen/index';

@import './styles/index';
@import './styles/theme';

// You can directly set the default theme
// - `dark` Import the official dark less style file
// - `compact` Import the official compact less style file
// @import '~@delon/theme/theme-dark.less';
```

**2、主题变量路径**

将所有 `@import '~@delon/theme/styles/default';` 替换成 `@import '~@delon/theme/index';`

> 如果你希望跟示例网站一样，支持这两种动态主题的切换，请参考[定制主题](https://ng-alain.com/theme/customize-theme)。
>
> 本次更新完整 PR 请参考 ([#1668](https://github.com/ng-alain/ng-alain/pull/1668/files))

### Bug Fixes

* 修复次级导入警告 ([#911](https://github.com/ng-alain/delon/issues/911)) ([248e8c8](https://github.com/ng-alain/delon/commit/248e8c8961e593fb525f752c16ff2cef6d3a213c))
* **abc:media:** 修复初始化无法再次实例 `Plyr` ([#909](https://github.com/ng-alain/delon/issues/909)) ([e22fd25](https://github.com/ng-alain/delon/commit/e22fd259699c9c065604ac1624a3009e548421da))
* **abc:st:** 修复统计数据时若未指定 `key` 时应优先使用 `index` 最后才使用当前下标 ([#908](https://github.com/ng-alain/delon/issues/908)) ([1de4383](https://github.com/ng-alain/delon/commit/1de438366e9ac57340c4c2a3bb9f6b51a01e0486))
* **form:** 修复内联模式按钮与表单错位 ([#904](https://github.com/ng-alain/delon/issues/904)) ([e869da0](https://github.com/ng-alain/delon/commit/e869da0c0ddc5349593fb3beb432df511f9cf438))
* **theme:menu.service:** 修复在 Hash 路由模式下无法命中 ([#906](https://github.com/ng-alain/delon/issues/906)) ([47b8bc7](https://github.com/ng-alain/delon/commit/47b8bc78e31e51beae083e2a50ab894d331ff58f))

### Features

* **abc:sidebar-nav:** 新增无限层级 ([#910](https://github.com/ng-alain/delon/issues/910)) ([81b5422](https://github.com/ng-alain/delon/commit/81b54220cc7d14e47be92c009238ee8cf29bd80b))
* **abc:st:** 新增 `sort: true` 自动生成 `compose` 方法 ([#907](https://github.com/ng-alain/delon/issues/907)) ([8e1657a](https://github.com/ng-alain/delon/commit/8e1657ace1efed132038d34588f71189c98d39d8))
* **chart:water-wave:** 新增 `animate` 动画属性 ([#918](https://github.com/ng-alain/delon/issues/918)) ([7ae1f35](https://github.com/ng-alain/delon/commit/7ae1f3576409d12844fdaec3d075d03bc42e6e69))
* **form:** 新增 `compact` 紧凑属性 ([#917](https://github.com/ng-alain/delon/issues/917)) ([cc11212](https://github.com/ng-alain/delon/commit/cc1121236a4f3f405526a624225af8b6b9a1202d))
* **form:widget:array:** 新增 `add`、`remove` 回调事件 ([#905](https://github.com/ng-alain/delon/issues/905)) ([31b031d](https://github.com/ng-alain/delon/commit/31b031d35ed277241ee6a682250ad0273a27734a))


## [9.2.4](https://github.com/ng-alain/delon/compare/9.2.3...9.2.4) (2020-05-15)

### Scaffold

* 修复 `catchError` 不会处理数组异常 ([#1652](https://github.com/ng-alain/ng-alain/pull/1652/files))

### Bug Fixes

* **abc:lodop:** 修复无法附加 `LODOP.NEWPAGE();` 代码 ([#902](https://github.com/ng-alain/delon/issues/902)) ([8022a66](https://github.com/ng-alain/delon/commit/8022a66c863d48d9cee81939e4f2ed96e246f9f4))
* **abc:st:** 修复 `strict` 宽度模式无法指定列宽 ([#900](https://github.com/ng-alain/delon/issues/900)) ([a12cf4f](https://github.com/ng-alain/delon/commit/a12cf4f36c16691b5904d47956ac2527aa117ba3))
* **cli:ng-add:** 修复 `catchError` 不会处理数组异常 ([#901](https://github.com/ng-alain/delon/issues/901)) ([a6d6ee3](https://github.com/ng-alain/delon/commit/a6d6ee33f449b7597fbedee8655c51275598db85))
* **cli:plugin:ie:** 修复错误修改了 `app.module.ts` 文件，应修改至 `polyfills.ts` ([#898](https://github.com/ng-alain/delon/issues/898)) ([b3de732](https://github.com/ng-alain/delon/commit/b3de7321661dc2664832f0be78c007f0231bf8a1))


## [9.2.3](https://github.com/ng-alain/delon/compare/9.2.2...9.2.3) (2020-05-14)

### Bug Fixes

* 修复缺少导出成员 'PanelMode' ([#894](https://github.com/ng-alain/delon/issues/894)) ([702a485](https://github.com/ng-alain/delon/commit/da07bc1fc4d326e9bb8f06813d95e99093073187))
* **form:** 修复固定标签时 `nz-select` 组件会错位 ([#895](https://github.com/ng-alain/delon/issues/895)) ([702a485](https://github.com/ng-alain/delon/commit/702a4859ca093eca35675e7ba18b8f3288fc0990))


## [9.2.2](https://github.com/ng-alain/delon/compare/9.2.1...9.2.2) (2020-05-12)

### Bug Fixes

* **abc:lodop:** 修复 `lodop` 无效定义 ([#887](https://github.com/ng-alain/delon/issues/887)) ([aa80730](https://github.com/ng-alain/delon/commit/aa80730b2a5dfe7d3b93054a80c84f85fc81f6b9))
* **abc:st:** 修复固定列无法覆盖上层 ([#892](https://github.com/ng-alain/delon/issues/892)) ([b3453c5](https://github.com/ng-alain/delon/commit/b3453c54edb45f476c733ee87638327b72918a41))
* **abc:st:** 修复有过滤时图标无法高亮 ([#889](https://github.com/ng-alain/delon/issues/889)) ([c9b374d](https://github.com/ng-alain/delon/commit/c9b374d476cd8c67cd361b651b8a3f1bed6d16cb))
* **abc:st:** 修复点击过滤图标会触发排序 ([#889](https://github.com/ng-alain/delon/issues/889)) ([c9b374d](https://github.com/ng-alain/delon/commit/c9b374d476cd8c67cd361b651b8a3f1bed6d16cb))
* **abc:se:** 修复内嵌时错位 ([#886](https://github.com/ng-alain/delon/issues/886)) ([2b3f998](https://github.com/ng-alain/delon/commit/2b3f9983006dfe174dfd46bd6b1f8c355512621c))
* **abc:se:** 修复 `inline` 布局时 `col="1"` 应为一整行 ([#886](https://github.com/ng-alain/delon/issues/886)) ([2b3f998](https://github.com/ng-alain/delon/commit/2b3f9983006dfe174dfd46bd6b1f8c355512621c))
* **sf:widget:date:** 修复默认值为空时会触发格式化动作 ([#890](https://github.com/ng-alain/delon/issues/890)) ([bedd102](https://github.com/ng-alain/delon/commit/bedd10283d020b0aaf02bf26d173c7d53cc6f751))
* **theme:style:utils:** 修复 `flex-center-between` 样式不正确 ([#886](https://github.com/ng-alain/delon/issues/886)) ([2b3f998](https://github.com/ng-alain/delon/commit/2b3f9983006dfe174dfd46bd6b1f8c355512621c))
* **theme:style:utils:** 修复两个 `nzType="link"` 按钮不应该有空白间距 ([#886](https://github.com/ng-alain/delon/issues/886)) ([2b3f998](https://github.com/ng-alain/delon/commit/2b3f9983006dfe174dfd46bd6b1f8c355512621c))
* **cli:plugin:ie:** 修复依赖包无效版本号 ([#888](https://github.com/ng-alain/delon/issues/888)) ([35de0d0](https://github.com/ng-alain/delon/commit/35de0d000d3aa5d15742218dede050df9007b1a0))


## [9.2.1](https://github.com/ng-alain/delon/compare/9.2.0...9.2.1) (2020-05-06)

### Bug Fixes

* **abc:page-header:** 移除调试代码 ([#883](https://github.com/ng-alain/delon/issues/883)) ([48702ac](https://github.com/ng-alain/delon/commit/48702ac87a0b16cc8befc57d4e664681bc64323f))
* **abc:st:** 新增 `enum` 枚举类型 ([#884](https://github.com/ng-alain/delon/issues/884)) ([41e25d5](https://github.com/ng-alain/delon/commit/41e25d5e07fce59aa2f17c3d2c4c879004b35dee))


# [9.2.0](https://github.com/ng-alain/delon/compare/9.1.0...9.2.0) (2020-05-06)

### Bug Fixes

* **abc:page-header:** 修复路由包含参数时无法生成导航及标题 ([#881](https://github.com/ng-alain/delon/issues/881)) ([3b1a6e3](https://github.com/ng-alain/delon/commit/3b1a6e3d7c5904f0d696bfb985bec006a53733a8))
* **abc:st:** 修复内嵌表格时边框丢失 ([#872](https://github.com/ng-alain/delon/issues/872)) ([626b143](https://github.com/ng-alain/delon/commit/626b1433f5b404895816ebd2f77f82253f36945d))
* **cli:ng-add:** 修复部分组件未导入 ([#873](https://github.com/ng-alain/delon/issues/873)) ([fbc09d1](https://github.com/ng-alain/delon/commit/fbc09d188c0b9b8ab496534881141224b9454eb5))
* **theme:drawer:** 修复底部按钮与内容的间距 ([#871](https://github.com/ng-alain/delon/issues/871)) ([7ae744e](https://github.com/ng-alain/delon/commit/7ae744e3b80b660305d61b7eb7b7f4820c1df10f))

### Features

* **abc:qr:** 新增支持延迟加载类库，减少 `main.js` 大小 ([#875](https://github.com/ng-alain/delon/issues/875)) ([6009ae2](https://github.com/ng-alain/delon/commit/6009ae25d1aa2d8e873482216cbf36caf8886ac1))
* **abc:st:** 新增多表头 ([#877](https://github.com/ng-alain/delon/issues/877)) ([1b96516](https://github.com/ng-alain/delon/commit/1b965164e3391d76c8dd9b9d4e7c974f8083e4be))
* **auth:** 新增 Cookie 存储 ([#876](https://github.com/ng-alain/delon/issues/876)) ([f6fe116](https://github.com/ng-alain/delon/commit/f6fe1165eedd62bd14739b63e8ce9a1d305e6e35))
* **sf:widget:object:** 新增卡片式（使用 `nz-card`）渲染 ([#879](https://github.com/ng-alain/delon/issues/879)) ([702e641](https://github.com/ng-alain/delon/commit/702e64130775816d058fddd468978f3ab0e3c101))
* **util:lazy:** 新增未完成加载时使用 `loading` 状态 ([#874](https://github.com/ng-alain/delon/issues/874)) ([05ce8a8](https://github.com/ng-alain/delon/commit/05ce8a863778e750e3336ff8a0be84e6e759bc52))


# [9.1.0](https://github.com/ng-alain/delon/compare/9.0.1...9.1.0) (2020-05-01)

### Bug Fixes

* **abc:reuse-tab:** 修复滚动条错位 ([#863](https://github.com/ng-alain/delon/issues/863)) ([ea588b2](https://github.com/ng-alain/delon/commit/ea588b2d9748a2c281ed57529b29aa0682380503))
* **abc:reuse-tab:** 修复丢失当前标签标记 ([#863](https://github.com/ng-alain/delon/issues/863)) ([ea588b2](https://github.com/ng-alain/delon/commit/ea588b2d9748a2c281ed57529b29aa0682380503))
* **abc:st:** 修复扩展打开后错位 ([#860](https://github.com/ng-alain/delon/issues/860)) ([773f546](https://github.com/ng-alain/delon/commit/773f54656d5a6c55be203f0183ebbf1f794ed316))
* **abc:st:** 修复调用 `load` 时不会触发加载效果 ([#858](https://github.com/ng-alain/delon/issues/858)) ([020393d](https://github.com/ng-alain/delon/commit/020393d496dcb4bb2e96be191d8bf517a36de8ee))
* **form:** 修复默认 `date-time` 不是 ISO8601 格式 ([#864](https://github.com/ng-alain/delon/issues/864)) ([25cb0ee](https://github.com/ng-alain/delon/commit/25cb0eec57bdb0e9428b68ffee02199196f29b61))
* **sf:widget:autocomplete:** 修复输入过程中呈现异常效果 ([#867](https://github.com/ng-alain/delon/issues/867)) ([a47cfe6](https://github.com/ng-alain/delon/commit/a47cfe66411fb64ce5c7ee84054d5687209cfd05))
* **theme:yn:** 修复 `yn` 支持可选参数写法 ([#866](https://github.com/ng-alain/delon/issues/866)) ([fa9d0ea](https://github.com/ng-alain/delon/commit/fa9d0eae8756df8110a3ded2be04c3557a9ef3e5))
* **theme:default:** 修复顶部搜索框图标错位 ([#857](https://github.com/ng-alain/delon/issues/857)) ([32a6ab4](https://github.com/ng-alain/delon/commit/32a6ab4364b27576a13c19abe1232c2031079107))
* 移除所有不恰当的 `console.log` ([#862](https://github.com/ng-alain/delon/issues/862)) ([e15cf62](https://github.com/ng-alain/delon/commit/e15cf625b0129c60fac8eeeb525b29051064f998))

### Features

* **abc:media:** 新增 `media` 媒体组件，支持 MP3,MP4 等 ([#859](https://github.com/ng-alain/delon/issues/859)) ([5009c5d](https://github.com/ng-alain/delon/commit/5009c5de5d4ba20c8e5a4abaa40a6b54e3290871))
* **abc:reuse-tab:** 新增右键刷新标签，**务必要**调整 [route-outlet](https://github.com/ng-alain/ng-alain/pull/1612/files)，否则当前标签无法刷新 ([#863](https://github.com/ng-alain/delon/issues/863)) ([ea588b2](https://github.com/ng-alain/delon/commit/ea588b2d9748a2c281ed57529b29aa0682380503))
* **form:** 同步所有 NG-ZORRO 在小部件内的属性 ([#868](https://github.com/ng-alain/delon/issues/868)) ([f6bbf63](https://github.com/ng-alain/delon/commit/f6bbf63c0a699eecb0bebea2f4a22d5422aa09ca))


## [9.0.1](https://github.com/ng-alain/delon/compare/9.0.0...9.0.1) (2020-04-27)

### Scaffold

* 修复无法正确获取浏览器默认语言代码 ([#1600](https://github.com/ng-alain/ng-alain/pull/1600/files))

### Bug Fixes

* 修复ISO8610格式问题 ([#852](https://github.com/ng-alain/delon/issues/852)) ([ff07adc](https://github.com/ng-alain/delon/commit/ff07adc159c6026cc4e237dccf9f5218df560b21))
* **cli:** 修复 `ng update` 一并移除 G2 的依赖 ([#853](https://github.com/ng-alain/delon/issues/853)) ([cd0df52](https://github.com/ng-alain/delon/commit/cd0df52a2a850d64b2a8393a057927127da8e5cd))
* **cli:plugin:ie:** 新增 `ie` 插件，支持 IE11 开发环境 ([#855](https://github.com/ng-alain/delon/issues/855)) ([b033c81](https://github.com/ng-alain/delon/commit/b033c81e2eddbcd32f1a312d87ca4cd1cd5d777e))


# 9.0.0 (2020-04-24)

## 欢迎来到 `ng-alain` 的 `9.0.0` 版本，有关细节请参考[升级指南](https://github.com/ng-alain/ng-alain/issues/1569)。

### Scaffold

* 重构全新统一全局配置 `@delon/abc/*`，`@delon/chart/*` ([#1591](https://github.com/ng-alain/ng-alain/pull/1591/files))
* **feat(abc:st):** 新增 `st` 对应 `widget` 配置方式 ([#1579](https://github.com/ng-alain/ng-alain/pull/1579))

### Features

* **chart:** 新增 `theme` 属性，可定制所有G2主题 ([#839](https://github.com/ng-alain/delon/issues/839)) ([a1903aa](https://github.com/ng-alain/delon/commit/a1903aae6dda4f031f5f2ad7be3aaff25fa31ab1))
* **chart:time-line:** 新增 `maxAxis` 属性，最多可显示五个轴度 ([#838](https://github.com/ng-alain/delon/issues/838)) ([fa40822](https://github.com/ng-alain/delon/commit/fa40822932308db78c893e746992ba7b38f97de1))
* **abc:se:** 新增 `label`, `error`, `extr` 支持 `TemplateRef<void>` 类型 ([#803](https://github.com/ng-alain/delon/issues/803)) ([eb13170](https://github.com/ng-alain/delon/commit/eb131704a374a9ea84803c20dde9836ec78549ee))
* **abc:se:** 新增自动根据元素组件来调整 `required` 值 ([#799](https://github.com/ng-alain/delon/issues/799)) ([1d4dad5](https://github.com/ng-alain/delon/commit/1d4dad559743091be1f85ed43757c2c0e20ba3ee))
* **abc:sidebar-nav:** 新增3级以内的 Icon 图标 ([#801](https://github.com/ng-alain/delon/issues/801)) ([087b8e9](https://github.com/ng-alain/delon/commit/087b8e9a94e1ae08a88461faecf2ef606dfa0dd1))
* **abc:st:** 新增 `reset`, `load` 允许指是否返回表格顶部控制 ([#800](https://github.com/ng-alain/delon/issues/800)) ([4a8bfb0](https://github.com/ng-alain/delon/commit/4a8bfb0ee34cfac5bbc71c3b9ce6c56f2bcb2c70))
* **theme:** 新增日语 ([#730](https://github.com/ng-alain/delon/issues/730)) ([5efbe5b](https://github.com/ng-alain/delon/commit/5efbe5b52917fc3981009d76b53536924a6bb680))
* **chart:custom:** 新增 `delay` 延迟属性 ([#818](https://github.com/ng-alain/delon/issues/818)) ([07e59fb](https://github.com/ng-alain/delon/commit/07e59fb5f1bdd1d51660510d34d45b968341faa9))
* **abc:st:** 新增 `widget` 自定义小部件类型 ([#827](https://github.com/ng-alain/delon/issues/827)) ([4d5a767](https://github.com/ng-alain/delon/commit/4d5a767d94a248908465e59a6af9eae110205b68))
* **mock:** 新增返回的数据应该是副本，防止污染 ([#821](https://github.com/ng-alain/delon/issues/821)) ([16d0146](https://github.com/ng-alain/delon/commit/16d0146234be9031889e70b6d67fa030c7511b03))

### Bug Fixes

* **chart:tag-cloud:** 修复文本重叠 ([#816](https://github.com/ng-alain/delon/issues/816)) ([7f31648](https://github.com/ng-alain/delon/commit/7f3164875372dac9358a2349e76fa8e2d988ca84))
* **form:widget:array** 修复移除最后一项时数据没有清空 ([#829](https://github.com/ng-alain/delon/issues/829)) ([6ff3db5](https://github.com/ng-alain/delon/commit/6ff3db5fdb24fa4da08ff672d5d3c553fd654186))
* **form:widget:date:** 修复默认值应自动格式一次 ([#833](https://github.com/ng-alain/delon/issues/833)) ([92821b0](https://github.com/ng-alain/delon/commit/92821b047c96cff5a67365a1a32300bad7c76e05))
* **form:widget:date:** 修复清空后 `end` 没有清空 ([#831](https://github.com/ng-alain/delon/issues/831)) ([04e6983](https://github.com/ng-alain/delon/commit/04e698350d8b190f8578821927e5edd796df7050))


### BREAKING CHANGES

* The All "General Configuration" method is going to be removed in 10.0.0. Please refer to https://ng-alain.com/docs/global-config


## 9.0.0 之前版本

9.0.0 之前版本的更新记录可以在 [Github](https://github.com/ng-alain/ng-alain/releases) 查看
