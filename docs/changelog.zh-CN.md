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

# [9.0.0-rc.3](https://github.com/ng-alain/delon/compare/9.0.0-rc.2...9.0.0-rc.3) (2020-04-21)

### Bug Fixes

* **cli:** 修复 `ng add` 提示无效扩展 ([#824](https://github.com/ng-alain/delon/issues/824)) ([68b56c4](https://github.com/ng-alain/delon/commit/68b56c4226d6016ece6d0de00696f263af85294e))
* **form:** fix width is not aligned in fixed label width ([#825](https://github.com/ng-alain/delon/issues/825)) ([c4682fa](https://github.com/ng-alain/delon/commit/c4682faea59c726b5c82b99254b2157f5fec72d6))
* **form:widget:array** 修复移除最后一项时数据没有清空 ([#829](https://github.com/ng-alain/delon/issues/829)) ([6ff3db5](https://github.com/ng-alain/delon/commit/6ff3db5fdb24fa4da08ff672d5d3c553fd654186))
* **form:widget:date:** 修复默认值应自动格式一次 ([#833](https://github.com/ng-alain/delon/issues/833)) ([92821b0](https://github.com/ng-alain/delon/commit/92821b047c96cff5a67365a1a32300bad7c76e05))
* **form:widget:date:** 修复清空后 `end` 没有清空 ([#831](https://github.com/ng-alain/delon/issues/831)) ([04e6983](https://github.com/ng-alain/delon/commit/04e698350d8b190f8578821927e5edd796df7050))
* **module:all:** 修复 `enableIvy:false` 依然可用 ([#826](https://github.com/ng-alain/delon/issues/826)) ([f0a9443](https://github.com/ng-alain/delon/commit/f0a9443c8191a69b334a7f6ae935ef1092b69326))

### Features

* **abc:st:** 新增 `widget` 自定义小部件类型 ([#827](https://github.com/ng-alain/delon/issues/827)) ([4d5a767](https://github.com/ng-alain/delon/commit/4d5a767d94a248908465e59a6af9eae110205b68))
* **mock:** 新增 `copy` 属性，防止污染 ([#821](https://github.com/ng-alain/delon/issues/821)) ([16d0146](https://github.com/ng-alain/delon/commit/16d0146234be9031889e70b6d67fa030c7511b03))

### Performance Improvements

* 优化过期属性提示 ([#823](https://github.com/ng-alain/delon/issues/823)) ([4bac6d2](https://github.com/ng-alain/delon/commit/4bac6d2c9914cccaa6937d7d7b62504629207d80))


# [9.0.0-rc.2](https://github.com/ng-alain/delon/compare/9.0.0-rc.1...9.0.0-rc.2) (2020-04-19)

### Bug Fixes

* 修复依赖注入在lvy下兼容性问题 ([#819](https://github.com/ng-alain/delon/issues/819)) ([6f9bba5](https://github.com/ng-alain/delon/commit/6f9bba5895b2be17907f0faf7451ae73ff38625d))
* **chart:tag-cloud:** 修复文本重叠 ([#816](https://github.com/ng-alain/delon/issues/816)) ([7f31648](https://github.com/ng-alain/delon/commit/7f3164875372dac9358a2349e76fa8e2d988ca84))
* **chart:timeline:** 修复滑块日期显示不正确 ([#817](https://github.com/ng-alain/delon/issues/817)) ([1284553](https://github.com/ng-alain/delon/commit/12845534bef3df2f7f75aa162e036b6cd20912c5))

### Features

* **chart:custom:** 新增 `delay` 延迟属性 ([#818](https://github.com/ng-alain/delon/issues/818)) ([07e59fb](https://github.com/ng-alain/delon/commit/07e59fb5f1bdd1d51660510d34d45b968341faa9))


# [9.0.0-rc.1](https://github.com/ng-alain/delon/compare/8.9.2...9.0.0-rc.1) (2020-04-18)

欢迎来到 `ng-alain` 的 `9.0.0-rc.1` 版本，直接发布 `rc` 主要是因为 `ng-alain` 本身并无严重的破坏性变更，但 `ng-alain` 又是依赖 `ng-zorro`，因此本次升级着重点在于 `ng-zorro` 的升级，有关细节请参考[升级指南](https://github.com/ng-alain/ng-alain/issues/1569)。

### Features

* **abc:se:** 新增 `label`, `error`, `extr` 支持 `TemplateRef<void>` 类型 ([#803](https://github.com/ng-alain/delon/issues/803)) ([eb13170](https://github.com/ng-alain/delon/commit/eb131704a374a9ea84803c20dde9836ec78549ee))
* **abc:se:** 新增自动根据元素组件来调整 `required` 值 ([#799](https://github.com/ng-alain/delon/issues/799)) ([1d4dad5](https://github.com/ng-alain/delon/commit/1d4dad559743091be1f85ed43757c2c0e20ba3ee))
* **abc:sidebar-nav:** 新增3级以内的 Icon 图标 ([#801](https://github.com/ng-alain/delon/issues/801)) ([087b8e9](https://github.com/ng-alain/delon/commit/087b8e9a94e1ae08a88461faecf2ef606dfa0dd1))
* **abc:st:** 新增 `reset`, `load` 允许指是否返回表格顶部控制 ([#800](https://github.com/ng-alain/delon/issues/800)) ([4a8bfb0](https://github.com/ng-alain/delon/commit/4a8bfb0ee34cfac5bbc71c3b9ce6c56f2bcb2c70))
* **theme:** 新增日语 ([#730](https://github.com/ng-alain/delon/issues/730)) ([5efbe5b](https://github.com/ng-alain/delon/commit/5efbe5b52917fc3981009d76b53536924a6bb680))


## 8.9.2 (2020-04-07)

### Bug Fixes

* **abc:page-header:** 修复缺少导入模块 `@angular/cdk/observers` ([#789](https://github.com/ng-alain/delon/issues/789)) ([d4566d7](https://github.com/ng-alain/delon/commit/d4566d71e31a3a8a3ce59627709ed86db2d2e5b1))
* **abc:st:** 修复无法渲染 `yn` 类型 ([#786](https://github.com/ng-alain/delon/issues/786)) ([e16e02f](https://github.com/ng-alain/delon/commit/e16e02f0175ac89c9a70a51a728ca8ce7ecc74d7))
* **theme:title:** 修复不可以把注释节点设置为标题 ([#793](https://github.com/ng-alain/delon/issues/793)) ([8b34f60](https://github.com/ng-alain/delon/commit/8b34f60fa5b081f37f1a5a7db5a4db8d69f48964))

### Features

* **form:string:** 新增 `change`, `focus`, `blur`, `enter` 事件 ([#790](https://github.com/ng-alain/delon/issues/790)) ([29373c4](https://github.com/ng-alain/delon/commit/29373c4d05d94d0ea4d07c504dbfdf28acf245cd))
* **theme:http:** 新增 `form` 方法用于传统表单 ([#787](https://github.com/ng-alain/delon/issues/787)) ([2edfd58](https://github.com/ng-alain/delon/commit/2edfd5868135750e67c195669bafc2f741e2952e))


## 8.9.1 (2020-04-03)

### Bug Fixes

* **abc:st:** 修复小屏幕文本溢出 ([#781](https://github.com/ng-alain/delon/issues/781)) ([a055b93](https://github.com/ng-alain/delon/commit/a055b93647d3aa7116162293947c6527643512e1))
* **form:widget:upload:** 修复通过 `limitFileCount` 限制上传数据将不再显示上传按钮 ([#784](https://github.com/ng-alain/delon/issues/784)) ([acc2347](https://github.com/ng-alain/delon/commit/acc234793760163d259ceb32f48383e082b72e3f))
* **sf:widget:number:** 修复通过 `widgetWidth` 属性来指定 `nz-number` 的宽度 ([#782](https://github.com/ng-alain/delon/issues/782)) ([d2d3557](https://github.com/ng-alain/delon/commit/d2d3557dc8d3d226c8d1c566e272e1ddd9d47eb9))
* **theme:menu:** 修复当 QueryString 存在时无法高亮 ([#783](https://github.com/ng-alain/delon/issues/783)) ([9c9af73](https://github.com/ng-alain/delon/commit/9c9af73258f79c42be8ced9aca35699dc95b9e7c))


# [8.9.0](https://github.com/ng-alain/delon/compare/8.8.0...8.9.0) (2020-02-19)

## `8.9` 作为 Angular 8 的最后一个次版本更新

### Bug Fixes

* **abc:sidebar:** 修复微标大于99时溢出 ([#769](https://github.com/ng-alain/delon/issues/769)) ([7dc834e](https://github.com/ng-alain/delon/commit/7dc834ede2dc0d0d43d84a7c1ebbc47ddfc94209))
* **abc:st:** 修复 `data` 类型时默认值无效 ([#765](https://github.com/ng-alain/delon/issues/765)) ([a971ac0](https://github.com/ng-alain/delon/commit/a971ac0f5a7729ae8da2d2e6dffbb37e790a3f1e))
* **abc:st:** 修复 `STChange` 缺少 `dblClick` 类型 ([#763](https://github.com/ng-alain/delon/issues/763)) ([153558b](https://github.com/ng-alain/delon/commit/153558b3ed74aa335bd0690f2dd238aed259f544))
* **cli:** 修复 `ng-alain:tpl` 创建模板时无法自定义传入参数 ([#762](https://github.com/ng-alain/delon/issues/762)) ([4dddcb0](https://github.com/ng-alain/delon/commit/4dddcb075054e9674157578da09520766531c82f))
* **cli:** 限定 `ng add ng-alain` 只支持 Angular 8.x 版本 ([#773](https://github.com/ng-alain/delon/issues/773)) ([2568480](https://github.com/ng-alain/delon/commit/25684801cdd065688a205c4595dd1c1b6f21b23b))
* **form:array:** 修复移除项应重新校验 ([#772](https://github.com/ng-alain/delon/issues/772)) ([ad2a3e6](https://github.com/ng-alain/delon/commit/ad2a3e663af16ffc91af590b71e18936087dfced))
* **form:date:** 修复无法自定义 `end` 格式 ([#770](https://github.com/ng-alain/delon/issues/770)) ([8d3fed1](https://github.com/ng-alain/delon/commit/8d3fed1127ff82b579d2b2a2318610ab97bfdd9e))
* **theme:_HtpClient:** 修复未订阅时导致 `loading` 状态值不正确 ([#774](https://github.com/ng-alain/delon/issues/774)) ([770ec8b](https://github.com/ng-alain/delon/commit/770ec8b3b9d381cf229e8f1ffd5c8926cc18487c))

### Features

* **abc:down-file:** 新增 `http-body` 属性 ([#768](https://github.com/ng-alain/delon/issues/768)) ([748f7e1](https://github.com/ng-alain/delon/commit/748f7e12dfd736f579340c9e777b9fe159080741))
* **abc:st:** 新增 `count`, `list` 属性参数用于获取当然表格条目及列表 ([#767](https://github.com/ng-alain/delon/issues/767)) ([21eec5b](https://github.com/ng-alain/delon/commit/21eec5b1ace7dc88e5ba41e12a5d82fa0412be15))
* **theme:** 新增 `disabled` 和 `flex` 工具类 ([#764](https://github.com/ng-alain/delon/issues/764)) ([842e9d8](https://github.com/ng-alain/delon/commit/842e9d8b42169bf6cdb9409ecea6f8e3fe2d7b0e))


# [8.8.0](https://github.com/ng-alain/delon/compare/8.7.3...8.8.0) (2019-12-30)

### Bug Fixes

* **abc:sidebar-nav:** 修复启用 `openStrictly` 下切换路由后保持展开状态 ([#759](https://github.com/ng-alain/delon/issues/759)) ([a7ab84a](https://github.com/ng-alain/delon/commit/a7ab84a1b98a7e714afd6c44c5ef13c02a093d7e))
* **abc:st:** 修复过滤操作符错位 ([#754](https://github.com/ng-alain/delon/issues/754)) ([7236e70](https://github.com/ng-alain/delon/commit/7236e70ab73838cb69173ccb53ba992e54852d8e))
* **cli:plugin:docker:** 修复 node 版本过低导致编译失败 ([#753](https://github.com/ng-alain/delon/issues/753)) ([6ce6eb6](https://github.com/ng-alain/delon/commit/6ce6eb668af8bca0e2d591abf7b54f2e19ef6722))
* **cli:plugin:icon:** 修复多项目时会污染 ([#752](https://github.com/ng-alain/delon/issues/752)) ([889d75a](https://github.com/ng-alain/delon/commit/889d75af9b330a6deb6ebbe91b4873ec611f2cab))

### Features

* **abc:down-file:** 新增支付自定义文件名 ([#757](https://github.com/ng-alain/delon/issues/757)) ([bafb44c](https://github.com/ng-alain/delon/commit/bafb44cbfdcad73eb9bfed6a155b089e7c77c3e6))
* **abc:loading:** 新增全局加载指示符组件 ([#755](https://github.com/ng-alain/delon/issues/755)) ([8c1a6d8](https://github.com/ng-alain/delon/commit/8c1a6d8cc3f041d82007ef4641fe5f641730df5d))


## [8.7.3](https://github.com/ng-alain/delon/compare/8.7.2...8.7.3) (2019-12-20)

### Bug Fixes

* **abc:se:** 修复小屏幕标签错位 ([#744](https://github.com/ng-alain/delon/issues/744)) ([1f141a5](https://github.com/ng-alain/delon/commit/1f141a5ded2b8727a0d505057cdc17e04899036c))
* **abc:sidebar-nav:** 修复收缩下点击文本无法路由跳转 ([#749](https://github.com/ng-alain/delon/issues/749)) ([c502017](https://github.com/ng-alain/delon/commit/c5020175ab7e817dac41076a53e9da1cccb4995c))
* **form:** 修复数组没有继承 UI 选项 ([#747](https://github.com/ng-alain/delon/issues/747)) ([0c02bb6](https://github.com/ng-alain/delon/commit/0c02bb6846cc3f7e96c5aa30748177bfd8c5916e)), closes [#745](https://github.com/ng-alain/delon/issues/745)
* **theme:http.decorator:** 修复响应体无法发送数组 ([#746](https://github.com/ng-alain/delon/issues/746)) ([3855838](https://github.com/ng-alain/delon/commit/3855838b8e8ab2c3468d77267c5643e8ce5fa32a))


## [8.7.2](https://github.com/ng-alain/delon/compare/8.7.1...8.7.2) (2019-12-16)

### Bug Fixes

* **abc:sidebar-nav:** 修复 `tooltip` 无效渲染 ([#736](https://github.com/ng-alain/delon/issues/736)) ([7de70b2](https://github.com/ng-alain/delon/commit/7de70b2642cc063c0d1978df770cb16057f0b07b))
* **abc:sidebar-nav:** 修复商业主题未找到 `[@alain-default-aside](https://github.com/alain-default-aside)-*` var… ([#740](https://github.com/ng-alain/delon/issues/740)) ([8bd3729](https://github.com/ng-alain/delon/commit/8bd3729107e67c2bc0239effb302e680ed5bdca1))
* **abc:sv,se:** 修复可选文本与Icon图标间距问题 ([#741](https://github.com/ng-alain/delon/issues/741)) ([1ab2ca5](https://github.com/ng-alain/delon/commit/1ab2ca5b38614b9f4410c0b3095e926130e1feed))


## [8.7.1](https://github.com/ng-alain/delon/compare/8.7.0...8.7.1) (2019-12-11)

### Bug Fixes

* **abc:sidebar-nav:** 修复禁用菜单项样式问题 ([#731](https://github.com/ng-alain/delon/issues/731)) ([7759299](https://github.com/ng-alain/delon/commit/7759299fa6822e98c2d1133134db74ae59dfa453))
* **abc:st:** 修复 `responsive` 为 `false` 时依然显示坚标题 ([#733](https://github.com/ng-alain/delon/issues/733)) ([baab4a7](https://github.com/ng-alain/delon/commit/baab4a7a00cf737c344342e085def4e01b54a27a))
* **chart:water-wave:** 修复首次加载无法渲染问题 ([#734](https://github.com/ng-alain/delon/issues/734)) ([cbbd573](https://github.com/ng-alain/delon/commit/cbbd573a43e404098f23c28b8ff0fb5f3beb87b3))


# [8.7.0](https://github.com/ng-alain/delon/compare/8.6.0...8.7.0) (2019-12-06)

### Scaffold

* fix: 修复 `DefaultInterceptor.handleData()` 应更友好的处理异常错误 ([#1411](https://github.com/ng-alain/ng-alain/pull/1411))

### Bug Fixes

* **abc:st:** 修复 strict 宽度模式下扩展操作符列宽问题 ([#720](https://github.com/ng-alain/delon/issues/720)) ([248c27d](https://github.com/ng-alain/delon/commit/248c27d71891323975d48bfa2010805b4bab9072))

### Features

* **abc:sidebar-nav:** 新增 `text`、`i18n` 属性支持HTML ([#723](https://github.com/ng-alain/delon/issues/723)) ([d58f5b1](https://github.com/ng-alain/delon/commit/d58f5b1edb4109d5d21a2e1d7b4c1aa6fed0dca4)), closes [#716](https://github.com/ng-alain/delon/issues/716)
* **abc:st:** 新增 `error` 支持多种错误类型 ([#721](https://github.com/ng-alain/delon/issues/721)) ([436a4e5](https://github.com/ng-alain/delon/commit/436a4e56346784e96ad2aaa4c268d3415d46f590))
* **abc:st:** 新增 `setRow` 方法用于更新某列的部分数据 ([#725](https://github.com/ng-alain/delon/issues/725)) ([170bab2](https://github.com/ng-alain/delon/commit/170bab2a2ac9a7bbd2b92465183d711e03be8333))
* **auth:** 新增 `clear` 方法允许只清空 Token 属性 ([#717](https://github.com/ng-alain/delon/issues/717)) ([f05ab21](https://github.com/ng-alain/delon/commit/f05ab21f9cac6d9db46af3689974be19693a8058))
* **theme:MenuService:** 新增 `getItem`、`setItem` 方法，用于更新某个菜单项 ([#722](https://github.com/ng-alain/delon/issues/722)) ([2c05493](https://github.com/ng-alain/delon/commit/2c054935b94aa465dec4ef091994087fa32c053d))


# [8.6.0](https://github.com/ng-alain/delon/compare/8.5.1...8.6.0) (2019-11-15)

### Bug Fixes

* **abc:reuse-tab:** 修复重复性标签渲染，导致快速切换 ([#707](https://github.com/ng-alain/delon/issues/707)) ([2e697af](https://github.com/ng-alain/delon/commit/2e697afd5ecea6f24bb281d56e653f9efd71a199))
* **abc:xlsx:** 修复当 `XLSX` 对象存在时应忽略加载 xlsx.js ([#705](https://github.com/ng-alain/delon/issues/705)) ([88e63a2](https://github.com/ng-alain/delon/commit/88e63a2941f5b9e6f6a26c15ed28162d90b4db4f))
* **form:array:** 修复 `optionalHelp` 属性不生效 ([#713](https://github.com/ng-alain/delon/issues/713)) ([8c574ef](https://github.com/ng-alain/delon/commit/8c574efd5e7f31c7d5bf82c7c861ff5bc63f945d))
* **form:checkbox:** 修复 `optionalHelp` 属性不生效 ([#708](https://github.com/ng-alain/delon/issues/708)) ([e3585ea](https://github.com/ng-alain/delon/commit/e3585ea9034b2b02e9160ad3dc551fe6cc8291d2))
* **abc:table:** 修复无效全局 `sortReName` 属性不生效 ([#714](https://github.com/ng-alain/delon/issues/714)) ([00f998d](https://github.com/ng-alain/delon/commit/00f998d8939fde2ef2a60a54417e8ae7556e1dd4))

### Features

* **abc:sv,se:** 新增 `optional`, `optionalHelp` 支持 `TemplateRef` 自定义模板 ([#710](https://github.com/ng-alain/delon/issues/710)) ([a456201](https://github.com/ng-alain/delon/commit/a456201ba7a4ae3df68cc4c0470aa3ee6fab86ee))
* **abc:table:** 新增 `keepEmptyKey` 属性指定多排序时是否始终发送键名 ([#714](https://github.com/ng-alain/delon/issues/714)) ([00f998d](https://github.com/ng-alain/delon/commit/00f998d8939fde2ef2a60a54417e8ae7556e1dd4))
* **abc:table:** 新增 `change` 事件类型 `loaded` 当数据加载完成后触发 ([#709](https://github.com/ng-alain/delon/issues/709)) ([6d3f017](https://github.com/ng-alain/delon/commit/6d3f0171c97a7f8c45ea3c3f799079506df3ffbf))
* **cli:** 新增禁止使用 `cnpm` 提醒文本 ([#704](https://github.com/ng-alain/delon/issues/704)) ([9e131d7](https://github.com/ng-alain/delon/commit/9e131d76276120725a574859f33b9130aa31c6a5))
* **form:** 新增 `cleanValue` 属性，是否清空未定义Schema值 ([#711](https://github.com/ng-alain/delon/issues/711)) ([7e55136](https://github.com/ng-alain/delon/commit/7e55136768578df5f054948df6ad2ca4c2a942e1))
* **form:** 新增 `noColon` 属性 ([#698](https://github.com/ng-alain/delon/issues/698)) ([2c34460](https://github.com/ng-alain/delon/commit/2c34460226818d1bc78ad7e62790ff4a32eb2791))


## [8.5.1](https://github.com/ng-alain/delon/compare/8.5.0...8.5.1) (2019-10-28)

### Bug Fixes

* **abc:reuse-tab:** 修复卡片式样式问题 ([#701](https://github.com/ng-alain/delon/issues/701)) ([8eaa89d](https://github.com/ng-alain/delon/commit/8eaa89d))
* **abc:st:** 修复当指定 `width` 时应自动填充未指定的列为 `100%` ([#700](https://github.com/ng-alain/delon/issues/700)) ([36a95f6](https://github.com/ng-alain/delon/commit/36a95f6))


# [8.5.0](https://github.com/ng-alain/delon/compare/8.4.0...8.5.0) (2019-09-25)

### Bug Fixes

* **abc:sidebar-nav:** 修复重复渲染外部链接 ([#688](https://github.com/ng-alain/delon/issues/688)) ([fbf52c4](https://github.com/ng-alain/delon/commit/fbf52c4))
* **abc:st:** 修复 `tag` 或 `badge` 空值抛错 ([#687](https://github.com/ng-alain/delon/issues/687)) ([3752205](https://github.com/ng-alain/delon/commit/3752205))
* **abc:st:** 修复导出 Excel 时空值显示 null 字符问题 ([#689](https://github.com/ng-alain/delon/issues/689)) ([2aef5a9](https://github.com/ng-alain/delon/commit/2aef5a9))
* **abc:st:** 修复当设置 `expandRowByClick: true` 时按钮点击会触发展开问题 ([#692](https://github.com/ng-alain/delon/issues/692)) ([da8d99d](https://github.com/ng-alain/delon/commit/da8d99d))
* **sf:cascader:** 修复 `select` 无效事件，应使用 `selectionChange` 替代 ([#684](https://github.com/ng-alain/delon/issues/684)) ([1ed0ae1](https://github.com/ng-alain/delon/commit/1ed0ae1))

### Features

* **abc:reuse-tab:** 新增 `tabMaxWidth` 属性 ([#690](https://github.com/ng-alain/delon/issues/690)) ([19cc818](https://github.com/ng-alain/delon/commit/19cc818))
* **abc:st:** 新增 `divider` 按钮类型 ([#683](https://github.com/ng-alain/delon/issues/683)) ([d9f6014](https://github.com/ng-alain/delon/commit/d9f6014))
* **form:autocomplete:** 新增 `change` 事件 ([#691](https://github.com/ng-alain/delon/issues/691)) ([f4215e4](https://github.com/ng-alain/delon/commit/f4215e4))
* **theme:http:** 新增 `@Payload` 装饰 ([#686](https://github.com/ng-alain/delon/issues/686)) ([123c29e](https://github.com/ng-alain/delon/commit/123c29e))
* **theme:http:** 新增 `::id` 表示转义字符 ([#686](https://github.com/ng-alain/delon/issues/686)) ([123c29e](https://github.com/ng-alain/delon/commit/123c29e))

### BREAKING CHANGES

* **abc:count-down** 升级至 `8.x`，其版本有破坏性变更[细节](https://github.com/cipchk/ngx-countdown/releases/tag/8.0.0)


# [8.4.0](https://github.com/ng-alain/delon/compare/8.3.0...8.4.0) (2019-09-01)

### Bug Fixes

* **abc:sidebar-nav:** 修复收缩下点击父级标准抛出错误 ([#673](https://github.com/ng-alain/delon/issues/673)) ([b6c1fc6](https://github.com/ng-alain/delon/commit/b6c1fc6))
* **abc:sidebar-nav:** 修复长名称样式错位 ([#677](https://github.com/ng-alain/delon/issues/677)) ([efd9bb1](https://github.com/ng-alain/delon/commit/efd9bb1))
* **abc:st:** 修复新请求时应先中断旧请求 ([#674](https://github.com/ng-alain/delon/issues/674)) ([c98ae19](https://github.com/ng-alain/delon/commit/c98ae19))
* **abc:st:** 修复导出Excel时产生无效标题 ([#672](https://github.com/ng-alain/delon/issues/672)) ([48ca08f](https://github.com/ng-alain/delon/commit/48ca08f))
* **abc:sv:** 修复 `SVConfig` 的 `labelWidth` 无效类型 ([#668](https://github.com/ng-alain/delon/issues/668)) ([43cf770](https://github.com/ng-alain/delon/commit/43cf770))

### Features

* **abc:st:** 增加 `pop` 相关的若干属性 ([#676](https://github.com/ng-alain/delon/issues/676)) ([a078f02](https://github.com/ng-alain/delon/commit/a078f02))
* **cache:** 增加全局 `DelonCacheConfig` 配置支持 `type`, `expire` 类型 ([#669](https://github.com/ng-alain/delon/issues/669)) ([9d393fb](https://github.com/ng-alain/delon/commit/9d393fb))


# [8.3.0](https://github.com/ng-alain/delon/compare/8.2.0...8.3.0) (2019-08-03)

### Bug Fixes

* **abc:reuse-tab:** 修复 URL 模式也应该从菜单数据中获取标题 ([#661](https://github.com/ng-alain/delon/issues/661)) ([6e63418](https://github.com/ng-alain/delon/commit/6e63418))
* **abc:sidebar:** 修复当包含徽章时无法展开子菜单问题 ([#665](https://github.com/ng-alain/delon/issues/665)) ([763a27e](https://github.com/ng-alain/delon/commit/763a27e))
* **abc:st:** 修复当组件被销毁时应该中断 HTTP 请求 ([#658](https://github.com/ng-alain/delon/issues/658)) ([6bd97eb](https://github.com/ng-alain/delon/commit/6bd97eb))
* **theme:title:** 修复路由跳转后在 `NavigationEnd` 事件里调用重置当前页无效问题 ([#660](https://github.com/ng-alain/delon/issues/660)) ([0db451d](https://github.com/ng-alain/delon/commit/0db451d))
* **abc:st:** 修复当 `strictBehavior` 为 `truncate` 时 `img` 列不应该截断 ([#656](https://github.com/ng-alain/delon/issues/656)) ([4ae8f13](https://github.com/ng-alain/delon/commit/4ae8f13))

### Features

* **abc:st:** 新增 `req.lazyLoad` 属性首次不发送请求 ([#656](https://github.com/ng-alain/delon/issues/656)) ([4ae8f13](https://github.com/ng-alain/delon/commit/4ae8f13))
* **abc:st:** 新增 `STColumnTitle.title` 支持可选和帮助信息描述 ([#657](https://github.com/ng-alain/delon/issues/657)) ([9408ccc](https://github.com/ng-alain/delon/commit/9408ccc))
* **acl:** 新增支持在路由 `data` 属性里指定未授权跳转URL ([#666](https://github.com/ng-alain/delon/issues/666)) ([bee66fd](https://github.com/ng-alain/delon/commit/bee66fd))
* **form:*:** 新增 `date` `time` 小部件对 date-fns 格式化的支持 ([#663](https://github.com/ng-alain/delon/issues/663)) ([ba91193](https://github.com/ng-alain/delon/commit/ba91193))


# [8.2.0](https://github.com/ng-alain/delon/compare/8.1.0...8.2.0) (2019-07-20)

### Scaffold

* 修复每次执行 `npm run color-less` 生成的 `alain-default.less` 文件总是包含上一次结果 ([#1248](https://github.com/ng-alain/ng-alain/pull/1248))

### Bug Fixes

* **abc:*:** 修复 `sv-title`, `se-title` 样式无法独立一行问题 ([#651](https://github.com/ng-alain/delon/issues/651)) ([d92a21d](https://github.com/ng-alain/delon/commit/d92a21d))
* **auth:** 修复 `referrer.url` 应该总是最新路由地址 ([#654](https://github.com/ng-alain/delon/issues/654)) ([89098e1](https://github.com/ng-alain/delon/commit/89098e1))

### Features

* **abc:reuse-tab:** 新增 `tabType` 属性，支持 `card` 风格 ([#652](https://github.com/ng-alain/delon/issues/652)) ([9da990f](https://github.com/ng-alain/delon/commit/9da990f))
* **abc:*:** 新增 `sv` 和 `se` 组件若长标签自动增加省略号 ([#651](https://github.com/ng-alain/delon/issues/651)) ([d92a21d](https://github.com/ng-alain/delon/commit/d92a21d))


# [8.1.0](https://github.com/ng-alain/delon/compare/8.0.0...8.1.0) (2019-07-12)

### Scaffold

* 新增使用 `proxyConfig` 选项来代理后端服务器配置 ([#1237](https://github.com/ng-alain/ng-alain/pull/1237))

### Bug Fixes

* **abc:st:** 修复 `page` 丢失默认配置项 ([#649](https://github.com/ng-alain/delon/issues/649)) ([8f59ea2](https://github.com/ng-alain/delon/commit/8f59ea2))
* **form:** 修复 `ui` 属性无法继承问题 ([#647](https://github.com/ng-alain/delon/issues/647)) ([f2df673](https://github.com/ng-alain/delon/commit/f2df673))
* **form:** 修复小部件样式 ([#646](https://github.com/ng-alain/delon/issues/646)) ([fe2f0fe](https://github.com/ng-alain/delon/commit/fe2f0fe))
* **theme:menu:** 修复 `text` 或 `i18n` 二选一 ([#648](https://github.com/ng-alain/delon/issues/648)) ([3200998](https://github.com/ng-alain/delon/commit/3200998))

### Features

* **abc:st:** 新增 `format` 的 `index` 参数 ([#644](https://github.com/ng-alain/delon/issues/644)) ([498d0b7](https://github.com/ng-alain/delon/commit/498d0b7))
* **cli:** 新增使用 `proxyConfig` 选项来代理后端服务器配置 ([#645](https://github.com/ng-alain/delon/issues/645)) ([10c91d8](https://github.com/ng-alain/delon/commit/10c91d8))


# [8.0.0](https://github.com/ng-alain/delon/compare/8.0.0-rc.1...8.0.0) (2019-07-03)

**`8.0.0` 版本有一些破坏性变更，更多请阅读[升级指南](https://ng-alain.com/docs/upgrade-v8/zh)。**

### Bug Fixes

* **theme:style:** 修复侧边栏用户模块样式 ([#639](https://github.com/ng-alain/delon/issues/639)) ([ede1d15](https://github.com/ng-alain/delon/commit/ede1d15))
* **abc:st:** 修复忽略 `STColumn` 里 `title` 为非必填性 ([#632](https://github.com/ng-alain/delon/issues/632)) ([69608c5](https://github.com/ng-alain/delon/commit/69608c5))
* **cli:plugin:icon:** 修复未识别 `nzType` 属性 ([#637](https://github.com/ng-alain/delon/issues/637)) ([2784a5a](https://github.com/ng-alain/delon/commit/2784a5a))
* **form:array:** 修复 `readOnly: true` 时应禁用添加、移除按钮 ([#633](https://github.com/ng-alain/delon/issues/633)) ([15194cc](https://github.com/ng-alain/delon/commit/15194cc))
* **form:array:** 修复数组下标值经过增删后混乱问题 ([#628](https://github.com/ng-alain/delon/issues/628)) ([09807f7](https://github.com/ng-alain/delon/commit/09807f7))
* **form:upload:** 修复 `showUploadList` 无法设置复合参数 ([#634](https://github.com/ng-alain/delon/issues/634)) ([54c3b90](https://github.com/ng-alain/delon/commit/54c3b90))
* **form:*:** 修复部分小部件调用 `setValue` 方法无法渲染 ([#622](https://github.com/ng-alain/delon/issues/622)) ([4cea3b7](https://github.com/ng-alain/delon/commit/4cea3b7))

### Features

* **abc:st:** 新增按钮的 `tooltip` 属性 ([#640](https://github.com/ng-alain/delon/issues/640)) ([181e3a1](https://github.com/ng-alain/delon/commit/181e3a1))
* **abc:st:** 新增调用 `resetColumns` 时允许指定是否需要刷新数据 ([#635](https://github.com/ng-alain/delon/issues/635)) ([a96123e](https://github.com/ng-alain/delon/commit/a96123e))
* **abc:down-file:** 新增 `down-file_not-support` & `down-file__disabled` 样式 ([#624](https://github.com/ng-alain/delon/issues/624)) ([2369153](https://github.com/ng-alain/delon/commit/2369153))
* **abc:st:** 新增 `confirmText`, `clearText` 国际化 ([#618](https://github.com/ng-alain/delon/issues/618)) ([a8cd300](https://github.com/ng-alain/delon/commit/a8cd300))
* **abc:st:** 新增关键词过滤器 ([#612](https://github.com/ng-alain/delon/issues/612)) ([543236d](https://github.com/ng-alain/delon/commit/543236d))
* **form:** 新增 `optionalHelp` 支持更复杂的属性 ([#621](https://github.com/ng-alain/delon/issues/621)) ([d45fddf](https://github.com/ng-alain/delon/commit/d45fddf))
* **form:** 新增国际化 ([#625](https://github.com/ng-alain/delon/issues/625)) ([e1bbbdb](https://github.com/ng-alain/delon/commit/e1bbbdb))
* **util:deepMergeKey:** 新增支持传递 `null` & `undefined` ([#620](https://github.com/ng-alain/delon/issues/620)) ([a8ddbb8](https://github.com/ng-alain/delon/commit/a8ddbb8))

### Performance Improvements

* **cli:** 优化所有指令提供更详细的错误信息 ([#619](https://github.com/ng-alain/delon/issues/619)) ([7ebef13](https://github.com/ng-alain/delon/commit/7ebef13))

### BREAKING CHANGES

* `DelonACLModule` 必须使用 `forRoot()` 来导入该模块


## 8.0.0 之前版本

8.0.0 之前版本的更新记录可以在 [Github](https://github.com/ng-alain/ng-alain/releases) 查看
