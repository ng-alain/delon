---
order: 100
title: 更新日志
type: Other
---

# [7.0.0-rc.4](https://github.com/ng-alain/delon/compare/7.0.0-rc.3...7.0.0-rc.4) (2019-01-12)

### Scaffold

* 移除 `editor.snippetSuggestions` 配置，由于最新 [ng-zorro-vscode](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-zorro-vscode) 版本不再推荐该项配置为 `top` ([#861](https://github.com/ng-alain/ng-alain/pull/861))

### Bug Fixes

* **module:*:** 修复所有无效复杂类型的全局配置 ([#378](https://github.com/ng-alain/delon/issues/378)) ([b58334f](https://github.com/ng-alain/delon/commit/b58334f))
* **module:reuse-tab:** 修复路由切换时可能产生溢出 ([#369](https://github.com/ng-alain/delon/issues/369)) ([83d7831](https://github.com/ng-alain/delon/commit/83d7831)), closes [#361](https://github.com/ng-alain/delon/issues/361)
* **module:se:** 修复错误消息样式不正确 ([#371](https://github.com/ng-alain/delon/issues/371)) ([c5431f8](https://github.com/ng-alain/delon/commit/c5431f8)), closes [#370](https://github.com/ng-alain/delon/issues/370)
* **module:sf:autocomplete:** 修复 `SFSchemaEnum` 无法识别 `value` 值 ([#362](https://github.com/ng-alain/delon/issues/362)) ([9cd179e](https://github.com/ng-alain/delon/commit/9cd179e))
* **module:st:** 修复所有项都禁用时不应该允许操作全选操作 ([#367](https://github.com/ng-alain/delon/issues/367)) ([20b654e](https://github.com/ng-alain/delon/commit/20b654e)), closes [#363](https://github.com/ng-alain/delon/issues/363)

### Features

* **module:reuse-tab:** 新增支持自定义右键菜单 ([#368](https://github.com/ng-alain/delon/issues/368)) ([2c0eb89](https://github.com/ng-alain/delon/commit/2c0eb89)), closes [#364](https://github.com/ng-alain/delon/issues/364)
* **module:sidebar-nav:** 新增 `recursivePath` 属性 ([#374](https://github.com/ng-alain/delon/issues/374)) ([e24ee4f](https://github.com/ng-alain/delon/commit/e24ee4f)), closes [#373](https://github.com/ng-alain/delon/issues/373) [#365](https://github.com/ng-alain/delon/issues/365)


# [7.0.0-rc.3](https://github.com/ng-alain/delon/compare/7.0.0-rc.2...7.0.0-rc.3) (2018-12-29)

### Bug Fixes

* **module:theme:** 修复未找到 `window` 值 ([#355](https://github.com/ng-alain/delon/issues/355)) ([3be639a](https://github.com/ng-alain/delon/commit/3be639a))


# [7.0.0-rc.2](https://github.com/ng-alain/delon/compare/7.0.0-rc.1...7.0.0-rc.2) (2018-12-28)

### Scaffold

* 路由通配符指向 `/exception/404` ([db3055b](https://github.com/ng-alain/ng-alain/commit/db3055b))
* 使用 `scrollPositionRestoration` 替代 `ScrollService` 来管理切换路由时滚动条位置 ([135327b](https://github.com/ng-alain/ng-alain/commit/135327b))
* 优化 `default.interceptor.ts`

### Bug Fixes

* **module:cache:** 修复 `get` 无效指定存储参数 ([#343](https://github.com/ng-alain/delon/issues/343)) ([fd005e5](https://github.com/ng-alain/delon/commit/fd005e5))
* **module:reuse-tab:** 修复存储时应忽略不可关闭缓存 ([#344](https://github.com/ng-alain/delon/issues/344)) ([fa08c07](https://github.com/ng-alain/delon/commit/fa08c07))
* **module:se:** 修复重置值时应触发一次变更检测 ([#339](https://github.com/ng-alain/delon/issues/339)) ([7223e85](https://github.com/ng-alain/delon/commit/7223e85))
* **module:sf:** 修复数组添加按钮会触发提交事件 ([#349](https://github.com/ng-alain/delon/issues/349)) ([8e11729](https://github.com/ng-alain/delon/commit/8e11729)), closes [#348](https://github.com/ng-alain/delon/issues/348)
* **module:sf:** 修复异步可能会引起丢失数据问题 ([#345](https://github.com/ng-alain/delon/issues/345)) ([2520f11](https://github.com/ng-alain/delon/commit/2520f11))

### Features

* **module:reuse-tab:** 新增保持滚动条 ([#347](https://github.com/ng-alain/delon/issues/347)) ([862d8f4](https://github.com/ng-alain/delon/commit/862d8f4))


# [7.0.0-rc.1](https://github.com/ng-alain/delon/compare/7.0.0-rc.0...7.0.0-rc.1) (2018-12-24)

### Scaffold

* 新增异常触发示例页
* 新增波兰语
* 优化路径配置 ([#825](https://github.com/ng-alain/ng-alain/pull/825))

### Bug Fixes

* **module:auth:** 修复无法识别完整URL匿名键名 ([#328](https://github.com/ng-alain/delon/issues/328)) ([e223ccb](https://github.com/ng-alain/delon/commit/e223ccb))
* **module:sf:** 修复重置值时应触发一次变更检测 ([#332](https://github.com/ng-alain/delon/issues/332)) ([ffd365b](https://github.com/ng-alain/delon/commit/ffd365b))
* **module:sf:cascader:** 修复未指定 `labelProperty`、`valueProperty` 问题 ([#325](https://github.com/ng-alain/delon/issues/325)) ([4d4e53f](https://github.com/ng-alain/delon/commit/4d4e53f))
* **module:st:** 修复调用 `removeRow` 方法应重新计算序号 ([#331](https://github.com/ng-alain/delon/issues/331)) ([6c8c2d1](https://github.com/ng-alain/delon/commit/6c8c2d1)), closes [#330](https://github.com/ng-alain/delon/issues/330)
* **module:theme:** 修复主菜单在Firefox下总是显示滚动条 ([#336](https://github.com/ng-alain/delon/issues/336)) ([727d0d7](https://github.com/ng-alain/delon/commit/727d0d7))
* **module:theme:menu:** 标记过期属性 `linkExact` ([#337](https://github.com/ng-alain/delon/issues/337)) ([ebbeed3](https://github.com/ng-alain/delon/commit/ebbeed3))

### Features

* **module:testing:** 增加 `@delon/testing` 测试套件库 ([#329](https://github.com/ng-alain/delon/issues/329)) ([9d533cf](https://github.com/ng-alain/delon/commit/9d533cf))
* **module:auth:** 增加 `referrer` 属性，用于获取跳转前URL ([#334](https://github.com/ng-alain/delon/issues/334)) ([0510864](https://github.com/ng-alain/delon/commit/0510864))
* **module:mock:** 增加 `executeOtherInterceptors` 命中后继续执行后续拦截器 ([#321](https://github.com/ng-alain/delon/issues/321)) ([d77e8e9](https://github.com/ng-alain/delon/commit/d77e8e9))
* **module:sidebar-nav:** 增加 `disabledAcl` 属性，当 ACL 未授权时以禁用状态显示 ([#337](https://github.com/ng-alain/delon/issues/337)) ([ebbeed3](https://github.com/ng-alain/delon/commit/ebbeed3))
* **module:st:** 增加 `expandRowByClick` 属性，点击行展开与收缩 ([#326](https://github.com/ng-alain/delon/issues/326)) ([a8a6695](https://github.com/ng-alain/delon/commit/a8a6695))
* **module:st:** 增加 `url` 模式下支持数组响应体 ([#327](https://github.com/ng-alain/delon/issues/327)) ([4e681dc](https://github.com/ng-alain/delon/commit/4e681dc))
* **module:util:** 增加 `stringTemplateOutlet` 指令 ([#324](https://github.com/ng-alain/delon/issues/324)) ([e8d9ed1](https://github.com/ng-alain/delon/commit/e8d9ed1))
* **module:theme:** 新增波兰语 ([#308](https://github.com/ng-alain/delon/issues/308)) ([025282c](https://github.com/ng-alain/delon/commit/025282c))

### BREAKING CHANGES

* **module:chart:timeline:** 移除 `tickCount`，同步 antd 3.4 ([#323](https://github.com/ng-alain/delon/issues/323)) ([20920fc](https://github.com/ng-alain/delon/commit/20920fc))

# [7.0.0-rc.0](https://github.com/ng-alain/delon/compare/2.0.1...7.0.0-rc.0) (2018-12-14)

`ng-alain` will track the major version of `@angular/core` from `7.0.0-rc.0` like other angular libraries.

- 支持 Angular 7.0
- 重构整个 `@delon/*` 系列库，重点两项变更请参考：
  - 移除部分类库 `.forRoot()`，[commit](https://github.com/ng-alain/ng-alain/pull/764/files#diff-e6d91e942371baa2d86bc42c2fa9ede8L85)
  - `notify-icon` 组件需要额外增加 `btnClass`、`btnIconClass` 类名，[commit](https://github.com/ng-alain/ng-alain/pull/764/files#diff-b526c13479119e1a38465bdaa867009bR16)
- 重构默认主题及所有示例页使用 OnPush 模式，参考 [#764](https://github.com/ng-alain/ng-alain/pull/764)

### Bug Fixes

* **module:st:** 修复无过滤时依然显示过滤状态 ([#303](https://github.com/ng-alain/delon/issues/303)) ([96430d1](https://github.com/ng-alain/delon/commit/96430d1))
* **module:st:** 修复无效 `body`
* **module:st:** 修复丢失配置参数，[#815](https://github.com/ng-alain/ng-alain/issues/815)
* **module:se:** 修复禁止状态时依然显示错误视觉, [#312](https://github.com/ng-alain/delon/issues/312)
* **schematics:** 修复 `list` 模式使用过期代码 ([#302](https://github.com/ng-alain/delon/issues/302)) ([839147e](https://github.com/ng-alain/delon/commit/839147e))

### Features

* **module:theme:title:** 增加 `setTitleByI18n` 方法 ([#299](https://github.com/ng-alain/delon/issues/299)) ([80a9636](https://github.com/ng-alain/delon/commit/80a9636))
* **module:utils:** 增加 `isUrl` 校验
* **module:mock:** 增加允许舞台 `HttpResponse`, [#813](https://github.com/ng-alain/ng-alain/issues/813)
* **module:theme:** 增加 `@forced-turn-off-nz-modal-animation-enabled` 强制关闭 `nzModel` 动画效果
* **module:utils:** 增加 `deepMerge` 深度合并

### BREAKING CHANGES

* **module:utils:** 移除 `yuan`


## 2.0.1

`2018-11-25`

### Bug Fixes

* **module:page-header:** 修复 `autoBreadcrumb: false` 时切换路依然会渲染导航 ([#296](https://github.com/ng-alain/delon/issues/296)) ([862aa9d](https://github.com/ng-alain/delon/commit/862aa9d)), closes [#293](https://github.com/ng-alain/delon/issues/293)
* **module:sf:autocomplete:** 修复无效值 ([#291](https://github.com/ng-alain/delon/issues/291)) ([ac17fb3](https://github.com/ng-alain/delon/commit/ac17fb3)), closes [#290](https://github.com/ng-alain/delon/issues/290)
* **module:sf:button:** 修复无效按钮大小 ([#294](https://github.com/ng-alain/delon/issues/294)) ([96f8adc](https://github.com/ng-alain/delon/commit/96f8adc))
* **module:theme:style:** 修复 dropdown 与 button 的标准间距 ([#292](https://github.com/ng-alain/delon/issues/292)) ([d330e5e](https://github.com/ng-alain/delon/commit/d330e5e))
* **module:theme:title:** 修复 `default` 不允许设置 ([#295](https://github.com/ng-alain/delon/issues/295)) ([a882507](https://github.com/ng-alain/delon/commit/a882507))

### Features

* **module:theme:** 新增土耳其语语言 ([#289](https://github.com/ng-alain/delon/issues/289)) ([9df6f0e](https://github.com/ng-alain/delon/commit/9df6f0e)), closes [#288](https://github.com/ng-alain/delon/issues/288)


## 2.0.0

`2018-11-20`

### **支持使用工具将 1.x 升级至 2.x，请参考[升级指南](https://ng-alain.com/docs/upgrade-v2/zh)**

### Scaffold

* **all:** 重构部分页面优先使用 `OnPush` 模式，提供更好的性能体验 ([#772](https://github.com/ng-alain/ng-alain/pull/772))
* **router:** 根路由添加 `SimpleGuard` ([#774](https://github.com/ng-alain/ng-alain/pull/774))
* **i18n:** 重构系列授权页，增加多语言版本 ([#777](https://github.com/ng-alain/ng-alain/pull/777))

### Bug Fixes

* **module:mock:** 修复 `_HttClient` 的 `loading` 状态值 ([#270](https://github.com/ng-alain/delon/pull/270))
* **module:sf:upload:** 修复 size 属性被占用 ([#274](https://github.com/ng-alain/delon/pull/274))
* **module:sf:checkbox:** 修复延迟状态问题 ([#278](https://github.com/ng-alain/delon/pull/278))
* **module:st:** 修复在ie、edge下会渲染null字符 ([#275](https://github.com/ng-alain/delon/pull/275))
* **module:page-header:** 修复路由切换无法刷新导航数据 ([#276](https://github.com/ng-alain/delon/pull/276))

### Features

* **schematics:** Support for dynamic build ng-alain of specified language versions ([#286](https://github.com/ng-alain/delon/issues/286)) ([f0bff6d](https://github.com/ng-alain/delon/commit/f0bff6d))
* **module:st:** 新增 `clear` & `clearStatus` 清除数据方法 ([#282](https://github.com/ng-alain/delon/pull/282))
* **module:st:** 新增单排序配置项 [#775](https://github.com/ng-alain/ng-alain/issues/775) ([#283](https://github.com/ng-alain/delon/pull/283))
* **module:http:** 新增系列 `@GET`, `@POST` 等修饰器，[文档](https://ng-alain.com/theme/http/zh#%E4%BD%BF%E7%94%A8%E4%BF%AE%E9%A5%B0%E5%99%A8) ([#284](https://github.com/ng-alain/delon/pull/284))
* **schematics:** 新增 `ng add` 额外按 `defaultLanguage` 指定语言的示例代码 ([#286](https://github.com/ng-alain/delon/pull/286))

### BREAKING CHANGES

* **module:st:** 移除所有 `checkboxChange`、`radioChange`、`sortChange` 等过期事件，使用 `change` 替代 ([#281](https://github.com/ng-alain/delon/pull/281))


## 2.0.0-rc.3

`2018-11-09`

### Scaffold

* 修复命名错误 `GLOBAL_THIRD_MDOULES` 变更为 `GLOBAL_THIRD_MODULES` ([#762](https://github.com/ng-alain/ng-alain/pull/762))

### Bug Fixes

* **module:sf:checkbox:** 修复丢失 title 问题 ([#259](https://github.com/ng-alain/delon/issues/259)) ([b78f38a](https://github.com/ng-alain/delon/commit/b78f38a)), closes [#258](https://github.com/ng-alain/delon/issues/258)
* **module:sf:tree-select:** 修复异步展示会重复渲染子项 ([#260](https://github.com/ng-alain/delon/issues/260)) ([2bfd75f](https://github.com/ng-alain/delon/commit/2bfd75f))
* **module:st:** 修复 icon 无法触发 pop 问题 ([#256](https://github.com/ng-alain/delon/issues/256)) ([598f9ab](https://github.com/ng-alain/delon/commit/598f9ab))
* **module:theme:menu:** 修复快捷菜单项污染原始菜单数据，导致重复高亮 ([#265](https://github.com/ng-alain/delon/issues/265)) ([a255fe0](https://github.com/ng-alain/delon/commit/a255fe0))

### Features

* **module:sidebar-nav:** 新增所有 icon 组件的属性 ([#263](https://github.com/ng-alain/delon/issues/263)) ([5b696f5](https://github.com/ng-alain/delon/commit/5b696f5))
* **module:st:** 新增行号 `no` 类型 ([#261](https://github.com/ng-alain/delon/issues/261)) ([8fc29ce](https://github.com/ng-alain/delon/commit/8fc29ce))
* **module:st:** 新增 `removeRow` 移除行方法 ([#255](https://github.com/ng-alain/delon/issues/255)) ([13a3a21](https://github.com/ng-alain/delon/commit/13a3a21))
* **module:st:** 新增 `rowClassName` 组件属性 ([#268](https://github.com/ng-alain/delon/issues/268)) ([0af1484](https://github.com/ng-alain/delon/commit/0af1484))
* **module:st:** 新增按钮允许 icon & text 并存 ([#256](https://github.com/ng-alain/delon/issues/256)) ([598f9ab](https://github.com/ng-alain/delon/commit/598f9ab))
* **module:theme:** 新增 `.scrollbar` 美化 div 滚动条样式 ([#267](https://github.com/ng-alain/delon/issues/267)) ([161d328](https://github.com/ng-alain/delon/commit/161d328))
* **module:theme:** 新增安全 URL `| url` 管道 ([#254](https://github.com/ng-alain/delon/issues/254)) ([62724a0](https://github.com/ng-alain/delon/commit/62724a0))
* **schematics:** 新增运行 `ng` 命令时优先执行 color less 生成 ([#253](https://github.com/ng-alain/delon/issues/253)) ([145e4a9](https://github.com/ng-alain/delon/commit/145e4a9))


## 2.0.0-rc.2

`2018-11-01`

### Bug Fixes

* **module:sf:** 修复 `attempt to use a destroyed` 异常 ([#248](https://github.com/ng-alain/delon/issues/248)) ([3e470e7](https://github.com/ng-alain/delon/commit/3e470e7))
* **module:sf:** 修复按钮 `spanLabelFixed` 为 `0` 时无效问题 ([#242](https://github.com/ng-alain/delon/issues/242)) ([1f601e2](https://github.com/ng-alain/delon/commit/1f601e2))
* **module:theme:** 修复错误的灰色系代码 ([#249](https://github.com/ng-alain/delon/issues/249)) ([6234538](https://github.com/ng-alain/delon/commit/6234538))
* **module:theme:** 修复 `ng-invalid` 样式风格 ([#243](https://github.com/ng-alain/delon/issues/243)) ([fe6d104](https://github.com/ng-alain/delon/commit/fe6d104))
* **schematics:** 修复 `-t` 重复别名导致无效问题 ([#247](https://github.com/ng-alain/delon/issues/247)) ([4f744fa](https://github.com/ng-alain/delon/commit/4f744fa))

### Features

* **module:mock:** QueryString 支持数组类型 ([#246](https://github.com/ng-alain/delon/issues/246)) ([f0135ce](https://github.com/ng-alain/delon/commit/f0135ce))
* **module:st:** 增加按钮 Icon ([#240](https://github.com/ng-alain/delon/issues/240)) ([1145d47](https://github.com/ng-alain/delon/commit/1145d47))
* **module:theme:MenuService** 增加向上查找能力 ([#244](https://github.com/ng-alain/delon/issues/244)) ([c391d3a](https://github.com/ng-alain/delon/commit/c391d3a))
* **module:theme:html:** 安全HTML，增加 `| html` 管道 ([#239](https://github.com/ng-alain/delon/issues/239)) ([0298665](https://github.com/ng-alain/delon/commit/0298665))
* **module:theme:i18n:** 增加 `| i18n` 管道 ([#238](https://github.com/ng-alain/delon/issues/238)) ([423c9c3](https://github.com/ng-alain/delon/commit/423c9c3))


## 2.0.0-rc.1

`2018-10-25`

### Bug Fixes

* **form:** 修复重复调用变更检测 ([#224](https://github.com/ng-alain/delon/issues/224)) ([a9f2db6](https://github.com/ng-alain/delon/commit/a9f2db6))
* **form:checkbox:** 修复 Checkbox 小部件错位 ([#226](https://github.com/ng-alain/delon/issues/226)) ([d75600e](https://github.com/ng-alain/delon/commit/d75600e))
* **form:date:** 修复范围日期小部件 `nzShowTime` 丢失 ([#223](https://github.com/ng-alain/delon/issues/223)) ([a40bc13](https://github.com/ng-alain/delon/commit/a40bc13))
* **st:** 修复标题错位 ([#229](https://github.com/ng-alain/delon/issues/229)) ([0d70d26](https://github.com/ng-alain/delon/commit/0d70d26))
* **schematics:** 修复 `tpl` 自定义模板无法使用 `-t` 参数 ([#231](https://github.com/ng-alain/delon/issues/231)) ([829f11e](https://github.com/ng-alain/delon/commit/829f11e))
* **schematics:** 修复 `edit` 模板包含无效 `msgSrv` 属性 ([#225](https://github.com/ng-alain/delon/issues/225)) ([e3270e4](https://github.com/ng-alain/delon/commit/e3270e4))
* **schematics:** 修复 `ng add` 非I18N包含相关代码 ([#230](https://github.com/ng-alain/delon/issues/230)) ([93163a9](https://github.com/ng-alain/delon/commit/93163a9))

### Features

* **schematics:** 新增 `-t` 参数支持子目录 ([#231](https://github.com/ng-alain/delon/issues/231)) ([829f11e](https://github.com/ng-alain/delon/commit/829f11e))
* **schematics:** 新增 `ng udpate` 将 1.x 升级至 2.0 [文档](https://ng-alain.com/docs/upgrade-v2#ng-update)
* **schematics:plugin:** 新增 `icon` 图标插件，自动分析并生成图标引导文件 [文档](https://ng-alain.com/cli/plugin#icon)
* 同步 ng-zorro-antd 1.7.1 ([#228](https://github.com/ng-alain/delon/issues/228)) ([9a62ea3](https://github.com/ng-alain/delon/commit/9a62ea3))

### BREAKING CHANGES

* **module:theme:** 使用 `NzDropdownService` 替代 `ContextMenuService` ([#234](https://github.com/ng-alain/delon/pull/234))


## 2.0.0-beta.5

`2018-10-15`

### Bug Fixes

* **form:** 修复 `readOnly` 无法呈现 ([#212](https://github.com/ng-alain/delon/issues/212)) ([6a68def](https://github.com/ng-alain/delon/commit/6a68def))
* **scaffold:** 使用 `zh` 替代 `zh-Hans` ([6972e58](https://github.com/ng-alain/ng-alain/commit/6972e58))

### Features

* **code-style:** 升级 husky 配置 ([#208](https://github.com/ng-alain/delon/issues/208)) ([61c6214](https://github.com/ng-alain/delon/commit/61c6214))
  - 脚手架变更 ([dd1cc90](https://github.com/ng-alain/ng-alain/commit/dd1cc90))
* **abc.st:** 增加 `total` 国际化 ([#203](https://github.com/ng-alain/delon/issues/203)) ([ec0b0df](https://github.com/ng-alain/delon/commit/ec0b0df))
* **theme:** 增加 `page-loading` 加载状态容器样式 ([#207](https://github.com/ng-alain/delon/issues/207)) ([ad43622](https://github.com/ng-alain/delon/commit/ad43622))
  - 脚手架变更：优化国际化切换风格 ([8b6f318](https://github.com/ng-alain/ng-alain/commit/8b6f318))

### BREAKING CHANGES

* **theme:** ([6b8168f](https://github.com/ng-alain/ng-alain/commit/6b8168f))
  + `layout-fixed` was changed to `alain-default__fixed`
  + `layout-boxed` was changed to `alain-default__boxed`
  + `aside-collapsed` was changed to `alain-default__collapsed`


## 2.0.0-beta.4

`2018-10-07`

### Bug Fixes

* **form:date:** 修复扁平模式下无效初始值 ([#187](https://github.com/ng-alain/delon/issues/187)) ([d2c89ca](https://github.com/ng-alain/delon/commit/d2c89ca))
* **theme:styles** 移除重复空白间距代码 ([#193](https://github.com/ng-alain/delon/issues/193)) ([1545178](https://github.com/ng-alain/delon/commit/1545178))
* **theme:drawer** 应导入至 `forChild` ([1545178](https://github.com/ng-alain/delon/commit/09516ea))


### Features

* **abc:page-header:** 增加 loading & wide 属性 ([#194](https://github.com/ng-alain/delon/issues/194)) ([299e877](https://github.com/ng-alain/delon/commit/299e877))
* **form:number:** 增加 prefix & unit 属性 ([#189](https://github.com/ng-alain/delon/issues/189)) ([4121b90](https://github.com/ng-alain/delon/commit/4121b90))
* **schematice:** 增加 color-less.js 颜色脚本 ([#196](https://github.com/ng-alain/delon/issues/196)) ([d7f7da6](https://github.com/ng-alain/delon/commit/d7f7da6))
* **theme:context-menu:** 增加右击菜单辅助类 ([#191](https://github.com/ng-alain/delon/issues/191)) ([f0e96f6](https://github.com/ng-alain/delon/commit/f0e96f6))

### BREAKING CHANGES

* **abc:** 所有输入属性都必须指定属性值 ([cfd0497](https://github.com/ng-alain/delon/commit/cfd0497))


## 2.0.0-beta.3

`2018-9-29`

- @delon/theme
  - 新增 [DrawerHelper](https://ng-alain.com/theme/drawer/zh) 辅助类
  - 修复 `_HttpClient` 对象 `param` 参数解析不标准，[#694](https://github.com/ng-alain/ng-alain/issues/694)
  - 移除一些已过期样式，[#commit](https://github.com/ng-alain/ng-alain/pull/691)
    - 使用 `nzBlock` 替代 `.ant-btn__block`
    - 使用 `nzCover` 替代 `.ant-card__img`
    - 移除多余 `.ant-card__title-img`，antd 已修复
    - 移除 `.nz-carousel__dot-{color}` 由手工自定义
    - 移除 `.box-placeholder` 由手工自定义
- @delon/abc
  - 新增 `st` 按钮类型 `drawer` 打开一个抽屉目标组件
  - 修复 `_HttpClient` 对象 `param` 参数解析不标准，[#694](https://github.com/ng-alain/ng-alain/issues/694)
- @delon/form
  - 修复 `cascader` 小部件不支持 `showSearch` 参数，[#695](https://github.com/ng-alain/ng-alain/issues/695)
  - 修复 `g2-custom` 默认应该块模型
- @delon/util
  - 修复 `getTimeDistance` 参数 `-today` 应是昨天至今天，[#696](https://github.com/ng-alain/ng-alain/issues/696)
- cli
  - 增加[自定义业务页模板](https://ng-alain.com/cli/generate/zh#%E8%87%AA%E5%AE%9A%E4%B9%89%E9%A1%B5)功能

## 2.0.0-beta.2

`2018-9-22`

- 同步 `ng-zorro-antd` 至 `1.6.0`
  - 新增 skeleton 组件
- @delon/abc
  - 重构 `st` 组件Http请求使用 `_HttpClient`，[#685](https://github.com/ng-alain/ng-alain/issues/685)
  - 新增 `global-footer` 支持自定义组件
- @delon/form
  - 修复固定标签宽度时布局被挤兑
  - 修复文本框在 Safari 浏览器下会重复录入，[#651](https://github.com/ng-alain/ng-alain/issues/651)
  - 修复单多选框组 `readOnly` 无效问题，[#167](https://github.com/ng-alain/delon/issues/167)
- @delon/theme
  - 增加 `setLayout` 支持对象替换

## 2.0.0-beta.1

`2018-9-16`

- 重构使用 ng-packagr 打包，支持 `@delon/abc`、`@delon/chart` 次级导入
- 增加 `DelonLocaleModule` 支持所有 `@delon/*` 模块的[国际化](https://ng-alain.com/theme/locale)
- 脚手架
  - 增加[默认语言](https://ng-alain.com/docs/i18n#默认语言)示例代码，[commit](https://github.com/ng-alain/ng-alain/pull/683)
  - 增加个人中心、设置示例页，[commit](https://github.com/ng-alain/ng-alain/pull/682)
- @delon/chart
  - **BREAKING CHANGES** 重命名 `g2-chart` 为 `g2-custom`
  - 修复部分未导出模块，[#162](https://github.com/ng-alain/delon/issues/162)
- @delon/theme
  - 增加 `.ant-tag__plus` 样式
- @delon/form
  - 修复 select 小部件在 Search 模式下不支持 `width` 问题
  - 修复 select 小部件若存在初始值则无法清空，[#674](https://github.com/ng-alain/ng-alain/issues/674)
  - 修复 number 类型若存在初始值则无法清空，[#675](https://github.com/ng-alain/ng-alain/issues/675)
- cli
  - 修复 `view` 插件使用过期组件

## 2.0.0-beta.0

`2018-9-9`

[升级指南](/docs/upgrade-v2)

### 1.x

1.x 历史变更日志请至[1.x-doc站](https://ng-alain.github.io/1.x-doc/docs/changelog)。
