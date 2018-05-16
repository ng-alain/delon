---
order: 100
title:
  en-US: Changelog
  zh-CN: 更新日志
type: Other
---

### 1.0.1

`2018-5-16`

- 同步 `0.7.0`
- 支持 `ng add ng-alain` 构建脚手架，[cli](/docs/cli)

**据 `1.0.1-beta.2@next` 的更新细节：**

- 脚手架
  - 降级 less 版本，暂时受限于 [#10430](https://github.com/angular/angular-cli/issues/10430) 无法在 angular6 使用 zorro 问题，[46abde](https://github.com/cipchk/ng-alain/commit/46abde)
  - **BREAKING CHANGES** 使用 `zh` 替代 `zh-Hans`，[541468](https://github.com/cipchk/ng-alain/commit/541468)
  - 同步 `0.7.0`，[3832a4](https://github.com/cipchk/ng-alain/commit/3832a4)
- 命令行
  - 移除 `@delon/cli`
  - 支持 `ng add ng-alain`

### 1.0.1-beta.2@next

`2018-5-14`

- 支持 Angular6，见[升级指引](/docs/changelog-v6)

> invalid `1.0.1-beta.1@next`

### 1.0.0-beta.10@next

`2018-5-11`

- 重构所有 `@delon/*` 的强制依赖关系
- 脚手架
  - **BREAKING CHANGES** 重构路由复用组件用法，需要手动注册 `RouteReuseStrategy`，未使用该组件不受影响，[6713c4](https://github.com/cipchk/ng-alain/commit/6713c4)
  - **BREAKING CHANGES** 从 `@delon/abc` 抽离 `AdUtilModule` 模块为 `@delon/util` 新类库，[66b0ea](https://github.com/cipchk/ng-alain/commit/66b0ea)
  - 添加二维码示例页，[70fbfd](https://github.com/cipchk/ng-alain/commit/70fbfd)
- @delon/util：新工具集类库
- @delon/form
  - 增加 `tag`、`checkbox` 变更回调事件，[#426](https://github.com/cipchk/ng-alain/issues/426)
  - 修复无效导入路径，[#65](https://github.com/cipchk/delon/issues/65)
- @delon/abc
  - `reuse-tab`：**BREAKING CHANGES** 重构路由复用组件用法，需要手动注册 `RouteReuseStrategy`
  - `qr`：增加生成二维码组件
  - `simple-table`：文档细节，[@NitronPlus](https://github.com/NitronPlus)
- @delon/cli
  - 修复若干bug
- 升级文档站

### 1.0.0-beta.9@next

`2018-5-7`

- 重构
  - 代码风格：统一所有代码风格（ng-alain、@delon/*），[#410](https://github.com/cipchk/ng-alain/issues/410)，[#404](https://github.com/cipchk/ng-alain/issues/404)
  - 使用 `deep-extend` 解决 Deep Copy 问题，[#412](https://github.com/cipchk/ng-alain/issues/412)
- 脚手架
  - 增加 prettier 修复统一代码风格，[05c540](https://github.com/cipchk/ng-alain/commit/05c540) [@billyma128](https://github.com/billyma128)
  - 增加 nginx 配置文件 `try_files` 节点，[ae1e50](https://github.com/cipchk/ng-alain/commit/ae1e50)
  - 修复进入异常页应关闭已打开 `modal`，[b994f3](https://github.com/cipchk/ng-alain/commit/b994f3)
  - 使用 `npm run` 替代 `run-s`，[77bc16](https://github.com/cipchk/ng-alain/commit/77bc16)
- @delon/abc
  - simple-table
    - 增加 `reload` 方法，表示刷新当前页
    - 变更 `SimpleTableButton` 按钮可选项
      - **BREAKING CHANGES** 原 `reload` 表示刷新当前页
      - 增加 `load` 表示刷新表格且强制为第1页
    - 修复重新加载数据时无效页码，[#63](https://github.com/cipchk/delon/issues/63)、[#379](https://github.com/cipchk/ng-alain/issues/379)
- @delon/form
  - **BREAKING CHANGES** 变更 `SFComponent` 的 `item` 属性名为 `value`
  - **BREAKING CHANGES** 移除 `ui.style` 属性
  - 增加 `button` 可选值 `'none'` 值表示不生成按钮和容器
  - 增加 `mode` 属性用于快速设置参数
  - time：修复还原数据时部分格式时间无效问题
- @delon/cli
  - 增加 `ng g page` 类型 `view`、`edit`
  - 修复 `ng g page -t=list` 使用了过期动态表单组件，[#411](https://github.com/cipchk/ng-alain/issues/411)
- @delon/acl
  - 增加 `mode` 属性表示权限校验模式，[#405](https://github.com/cipchk/ng-alain/issues/405)
- @delon/theme
  - 同步 `antd` 目录部分依赖 ng-zorro-antd 0.7 样式问题，例如：`modal-*`

### 1.0.0-beta.8@next

`2018-5-3`

- 同步ng-zorro-antd 0.7.0-beta.5，主要增加 `nz-time-picker` 组件
- 脚手架
  - 使用husky提交时风格检查，[329238](https://github.com/cipchk/ng-alain/commit/329238) [@billyma128](https://github.com/billyma128)
- @delon/form
  - 同步时间组件为 `nz-time-picker`
  - 修复类型 `array` 导致UI `items` 无效问题

### 1.0.0-beta.7@next

`2018-4-26`

- 脚手架
  - 增加 `@delon/form` 示例，[92d5d3](https://github.com/cipchk/ng-alain/commit/92d5d3)
- @delon/form
  - 基于JSON Schema动态表单

### 1.0.0-beta.6@next

`2018-4-22`

- 脚手架
  - **BREAKING CHANGES** 自包含 `ng-zorro-antd` 组件样式，无需再单纯此用，[44cad2](https://github.com/cipchk/ng-alain/commit/44cad2)
  - 同步 `ng-zorro-antd 0.7.0-beta.4`，[52bce7](https://github.com/cipchk/ng-alain/commit/52bce7)
- @delon/abc
  - 修复 `sidebar-nav` 指定 `base-href` 后收缩时链接无效问题，[#59](https://github.com/cipchk/delon/pull/59) [@pbbisme](https://github.com/pbbisme)
  - 修复 `simple-table` 在 `-bo` 打包时无效 `reqReName`，[#396](https://github.com/cipchk/ng-alain/issues/396)
- @delon/theme
  - 自包含 `ng-zorro-antd` 组件样式
- @delon/cli
  - 保持在 `package.json` 同步 `ng-zorro-antd` 版本

### 1.0.0-beta.5@next

`2018-4-16`

- 脚手架
  - 修复顶部二级菜单更友好触发行为，[765644d](https://github.com/cipchk/ng-alain/commit/765644d) ([@ferried](https://github.com/ferried))
  - 修复登录页
      - 格式问题：顶部图文垂直居中、移除链接、标题问题，[b96cae](https://github.com/cipchk/ng-alain/commit/b96cae)
      - 增加登录后重新加载 `startup.service` 示例代码，[16c964](https://github.com/cipchk/ng-alain/commit/16c964)
  - 重构部分默认拦截器业务处理方式，[18e02f](https://github.com/cipchk/ng-alain/commit/18e02f)
- @delon/abc
  - 增加若干全局可配置项
  - 增加 `page-header` 更多额外参数
- @delon/cli
  - 修复侧边栏用户信息不对齐问题
- 文档站支持PWA、手机版

### 0.8.2

`2018-4-8`

- @delon/abc
  - 重构 `reuse-tab` 部分逻辑
  - 修复 `Timeline` 日期格式问题
- @delon/auth
  - 修复无法使用 `url` 附加 `token` 问题
  - 修复 `login_url` 支持外部链接

### 1.0.0-beta.4@next

`2018-4-8`

- 脚手架
  - 修复典型搜索页更好友的命中Tab标签，[49307e4](https://github.com/cipchk/ng-alain/commit/e933f9a513a4a8e9735878a14da183872cab0c0d) ([@Harlancui](https://github.com/Harlancui))
- @delon/abc
  - 增加 `sidebar-nav` 事件 `select`，[#54](https://github.com/cipchk/delon/issues/54)
  - 重构 `reuse-tab` 部分逻辑
- @delon/auth
  - 修复无法使用 `url` 附加 `token` 问题
- @delon/theme
  - 修复超长页面可能被截断问题
- 重构文档站

### 1.0.0-beta.3@next

`2018-4-3`

- @delon/abc
  - 修复 `getTimeDistance` 周范围问题，[#50](https://github.com/cipchk/delon/issues/50)
  - 修复 `sidebar-nav` 不兼容 ie11 问题，[#52](https://github.com/cipchk/delon/issues/52)
  - 重构 `lodop` 的 `eval` 问题
- @delon/auth
  - 支持 `login_url` 支持外部链接
- @delon/cli
  - 修复部分图片、Icon 无效链接问题
- 更新文档站部分错别字，[@bigpear0201](https://github.com/bigpear0201)

### 1.0.0-beta.2@next

`2018-3-29`

- 脚手架
  - 修复按键切换全屏时无法同步按钮状态，([1d1f261](https://github.com/cipchk/ng-alain/commit/1d1f261)) [#360](https://github.com/cipchk/ng-alain/issues/360) [@jecyhw](https://github.com/jecyhw)
  - 修复 `passport.component.html` 布局模板 `global-footer` 不显示问题，([b4cac34](https://github.com/cipchk/ng-alain/commit/b4cac34))
- @delon/abc
  - 修复 `reuse-tab` 会关闭最后一个标签问题，[#363](https://github.com/cipchk/ng-alain/issues/363)
- @delon/cache
  - 新增支持监听 `key` 用于处理类似通用事件处理服务（[#242](https://github.com/cipchk/ng-alain/issues/242)）
- @delon/cli
  - 修复国际化无法正常显示顶部搜索框问题

### 1.0.0-beta.1@next

`2018-3-26`

[1.0.0升级指引](docs/changelog-81)

### 0.8.1

`2018-3-16`

- 脚手架
  - 增加 Lodop 打印[示例页](https://cipchk.github.io/ng-alain/other/print)
- @delon/abc
  - 增加 [Lodop](/components/lodop) 组件，最强打印插件
  - 修复 `LazyService` 延迟加载资源的JS脚本的判断规则
  - 修复 `Pip` 饼图 tooltip 百分比显示错误，[#331](https://github.com/cipchk/ng-alain/issues/331)
- @delon/cli
  - 修复 @delon 使用新版本
- site
  - 修复链接错误，[#333](https://github.com/cipchk/ng-alain/issues/333)

### 0.8.0

`2018-3-13`

- 脚手架
  - **BREAKING CHANGES** 变更 `notice-icon` 组件的 `popupVisibleChange` 事件名为 `popoverVisibleChange`，([2ec3c40](https://github.com/cipchk/ng-alain/commit/2ec3c40))
  - 修复 `nz-schema-form` 第三方小部件导入失败问题，([d676598](https://github.com/cipchk/ng-alain/commit/d676598))
- @delon/theme
  - 修复 `_HttpClient` 无法捕获异常问题
  - 重构 `MenuService`、`ScrollService` 部分冗余逻辑
- @delon/mock
  - 更友好日志，只对命中的规则进行提醒
- @delon/auth
  - 修复无法捕获异常问题
- delon/abc
  - 重构 `reuse-tab`，[#23](https://github.com/cipchk/delon/issues/23)，[#252](https://github.com/cipchk/ng-alain/issues/252)，[#260](https://github.com/cipchk/ng-alain/issues/260)，[#272](https://github.com/cipchk/ng-alain/issues/272)，[#284](https://github.com/cipchk/ng-alain/issues/284)，[#296](https://github.com/cipchk/ng-alain/issues/296)，[#306](https://github.com/cipchk/ng-alain/issues/306)，[#320](https://github.com/cipchk/ng-alain/issues/320)，[#326](https://github.com/cipchk/ng-alain/issues/326)，[#328](https://github.com/cipchk/ng-alain/issues/328)
  - 修复 `down-file` 没对状态码的校验，[#44](https://github.com/cipchk/delon/issues/44)
- ALL
  - 对所有组件设置 `preserveWhitespaces: false`

### 0.7.1

`2018-3-6`

- 脚手架
  - 新增 `number-to-chinese` 模块导入，([a170141](https://github.com/cipchk/ng-alain/commit/a170141))
  - 移除**老版本兼容性**属性 `translate`，已统一采用 `i18n`，([475ed58](https://github.com/cipchk/ng-alain/commit/475ed58))
- @delon/theme
  - 修复收缩时呈现子菜单会影响内容区域，[#305](https://github.com/cipchk/ng-alain/issues/305)
  - `TitleService` 新增 `titleI18n` 属性支持国际化，[#315](https://github.com/cipchk/ng-alain/issues/315)
  - `MenuService` 修复快捷菜单无法国际化，[#316](https://github.com/cipchk/ng-alain/issues/316)
- @delon/abc
  - `number-to-chinese` 新增人民币转大写模块
- @delon/auth
  - 新增 `SessionStorageStore`、`MemoryStore` 两种存储模式，见[API文档](/docs/auth)
- @delon/cache
  - 修复 `get` 方法已存在key时应该返回 Observable 类型，[#40](https://github.com/cipchk/delon/issues/40)
- @delon/mock
  - 新增URL允许包括正则表达式，[#41](https://github.com/cipchk/delon/issues/41)
- @delon/cli
  - 修复部分内部无同步脚手架问题，[#311](https://github.com/cipchk/ng-alain/issues/311)

### 0.7.0

`2018-3-5`

- 更新所有文档站点内容，[#307](https://github.com/cipchk/ng-alain/issues/307)
- ALL：修复字符串与模板无法自由切换问题
- @delon/theme
  - ModalHelper：新增 `removeAll` 方法用于移除当前所有对话框，自动管理 `z-index` 参数
  - Menu：新增 `hideInBreadcrumb` 参数，用于 `pro-header` 时自动隐藏某节点项
  - 修复IE11下无法切换主题，[#302](https://github.com/cipchk/ng-alain/issues/302)
- @delon/abc
  - G2：关闭体验改进计划说明
  - standard-form-row：新增支持字符串风格
- @delon/auth
  - 修复拦截器引起 “You provided an invalid object where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.” 异常问题
- @delon/cli
  - 新增 `guard`、`app-shell` 命令
  - 新增 `module` 命令增加无须路由组件注册区域

### 0.6.7

`2018-2-27`

- 脚手架
  - 新增 [nz-schema-form](https://github.com/cipchk/nz-schema-form) 导入，([af77281](https://github.com/cipchk/ng-alain/commit/af77281))
  - 新增 package-lock.json 文件，更健壮构建环境，[#298](https://github.com/cipchk/ng-alain/issues/298)
  - 修复 acl 粒度控制时变更权限时无法生效问题，以及更友好的支持懒模块，[#291](https://github.com/cipchk/ng-alain/issues/291)，([a8c07fc](https://github.com/cipchk/ng-alain/commit/a8c07fc))
  - 修复 toggleCollapsedSideabar 方法名更改为 toggleCollapsedSidebar，[#248](https://github.com/cipchk/ng-alain/pull/248) [@dusdong](https://github.com/dusdong)
- @delon/abc
  - 修复 `pie` 百分比显示问题，[#288](https://github.com/cipchk/ng-alain/issues/288)
  - 修复 `pro-header` 当无任何面包屑数据时不显示该组件
  - 新增 `yuan` 支持小数点，[#38](https://github.com/cipchk/delon/pull/38)
- @delon/cli
  - 新增 [nz-schema-form](https://github.com/cipchk/nz-schema-form) 导入
  - 新增 page 命令

### 0.6.6

`2018-2-2`

- 脚手架
  - 增加退出登录时清空路由复用数据，([0322190](https://github.com/cipchk/ng-alain/commit/0322190))
  - 修复默认语言，[#269](https://github.com/cipchk/ng-alain/issues/269) ([39206be](https://github.com/cipchk/ng-alain/commit/39206be))
- @delon/abc
  - `simple-table` 变更：
      - 新增 `type: 'number'` 数字格式化，[#267](https://github.com/cipchk/ng-alain/issues/267)
      - 新增 `multiSort` 支持多排序，[#270](https://github.com/cipchk/ng-alain/issues/270)
  - `sidebar-nav` 变更：
      - 修复大屏幕也会自动关闭侧边栏问题
      - 修复收起时鼠标悬停显示被选中项，[#266](https://github.com/cipchk/ng-alain/issues/266)
  - 新增 `number-info` 允许数字型 `0`，[#262](https://github.com/cipchk/ng-alain/issues/262)

### 0.6.5

`2018-1-24`

- 脚手架
  - 修复切换语言时无同步更改标题问题，[#28](https://github.com/cipchk/delon/issues/28) ([80b0fce](https://github.com/cipchk/ng-alain/commit/80b0fce))
- @delon/abc
  - 新增 `simple-table` 方法 `reset()`，用于[重置](/components/simple-table#components-simple-table-form)表单
  - 新增 `sidebar-nav` 小于 `992` 以下切换路由时自动关闭侧边栏
  - 新增 `pro-header` 配置项，例如自定义 Home 内容
  - 修复 `reuse-tab` 自定义标题错位问题，[#25](https://github.com/cipchk/delon/issues/25) [#247](https://github.com/cipchk/ng-alain/issues/247)
  - 优化更可靠的深度拷贝

### 0.6.4

`2018-1-22`

- 脚手架
  - 重构 `startup.service`、`default.interceptor` 逻辑处理 ([3f437a1](https://github.com/cipchk/ng-alain/commit/3f437a1))
  - 重构 `title.service` 将路由 `data.title` 优先级高于其他 ([7f2ceeb](https://github.com/cipchk/ng-alain/commit/7f2ceeb))
  - 不再维护 `blank` 分支
- @delon/theme
  - 重构 `TitleService` 包括：
      - **BREAKING CHANGES** 移除 `setTitleByUrl` 统一采用 `setTitle`
      - 新增 `default` 属性指定默认标题名
  - 重构 `begin`、`end` 为 `public`
- @delon/abc
  - `simple-table` 变更：
      - 新增按钮允许设置 `"reload"` 表示重新加载表格
      - 新增按钮当 `type=modal` 时允许设置 `paramName` 简化目标组件的接收参数名
      - 修复当指定 `ps=0` 时应该不分页问题，[#27](https://github.com/cipchk/delon/issues/27)
  - 修复 `reuse-tab` 某些情况下导致 `active` 无效问题，[#244](https://github.com/cipchk/ng-alain/issues/244)
- @delon/auth
  - 修复可能会因为跳转引起渲染异常
- @delon/cli
  - 同步脚手架的优化

### 0.6.3

`2018-1-20`

- 脚手架
  - 优化cli，将 i18n 相关文件统一命名为 `i18n.*` 开头 ([68ef9e9](https://github.com/cipchk/ng-alain/commit/68ef9e9))
  - 优化 @delon/abc 模块 `forRoot` 按需注册，([28e0b88](https://github.com/cipchk/ng-alain/commit/28e0b88))
  - 升级 @angular/cli 至最新版本，([9bcb411](https://github.com/cipchk/ng-alain/commit/9bcb411))
- @delon/abc
  - 优化类库依赖自动下载，[#22](https://github.com/cipchk/delon/issues/22) [#237](https://github.com/cipchk/ng-alain/issues/237)
  - 重构 `reuse-tab` 决定是否复用逻辑，[#24](https://github.com/cipchk/delon/issues/24)
- @delon/cli
  - 新增 `--delon-electron` 参数，支持 Electron 打包，[#221](https://github.com/cipchk/ng-alain/issues/221)

### 0.6.2

`2018-1-18`

- 脚手架
  - 新增上传示例页采用 `nz-upload`
  - 修复最新 @angular/cli 无法加载 less 问题，采用固定 `1.6.2` 版本，[#205](https://github.com/cipchk/ng-alain/issues/205)
  - 优化 `DefaultInterceptor` 注入 `NzMessageService` 消息框示例，及修复 `catchError` 类型问题，[#226](https://github.com/cipchk/ng-alain/issues/226) [@vellengs](https://github.com/vellengs)
- @delon/abc
  - 修复 `reuse-tab` 引发父组件复用问题，[#20](https://github.com/cipchk/delon/issues/20)
- @delon/cli
  - 修复最新 @angular/cli 无法加载 less 问题，[#205](https://github.com/cipchk/ng-alain/issues/205)

### 0.6.1

`2018-1-16`

- @delon/theme
  - 修复IPAD屏幕以下出现错位，[#215](https://github.com/cipchk/ng-alain/issues/215)
- @delon/abc
  - `reuse-tab` 变更：
      - 修复路由参数重复触发问题，[#13](https://github.com/cipchk/delon/issues/13)
      - 新增 `_onReuseInit`、`_onReuseDestroy` 生命周期钩子，用于复用过程中无法触发Angular组件任何生命周期钩子问题
  - 优化 `xlsx` 默认加载完整版本类库
- @delon/cli
  - 新增 class,directive,enum,interface,pipe,service 模板，[#217](https://github.com/cipchk/ng-alain/issues/217)
  - 修复若干国际化问题，[#218](https://github.com/cipchk/ng-alain/issues/218)

### 0.6.0

`2018-1-14`

- ng-alain 脚手架
  - **BREAKING CHANGES** 优化模块注册指导原则，[#commit](https://github.com/cipchk/ng-alain/commit/7b6de512d2bd6cb99a1d576eedd4ad9ea0808352)，[#180](https://github.com/cipchk/ng-alain/issues/180)
  - 新增 `cache`、`acl-guard` 通用路由守卫示例页
  - 新增主菜单二级支持收缩，[#177](https://github.com/cipchk/ng-alain/issues/177)
  - 新增 `@delon/abc` 全局配置示例代码
  - 升级 `typescript: 2.6.0` 版本，更严格的类型检查
  - 优化 `DefaultInterceptor` 更友好的处理逻辑
- @delon/theme
  - 新增 `HttpClient` 泛型支持，[#16](https://github.com/cipchk/delon/issues/16)
  - 修复无法移除空快捷菜单数据，[#196](https://github.com/cipchk/ng-alain/issues/196)
  - 优化 `MenuService` 自动处理 `acl` 属性值
- @delon/abc
  - `simple-table` 变更：
      - 新增 `pi` 允许全局设置且最小可为 `0`，[#194](https://github.com/cipchk/ng-alain/issues/194)
      - 修复无法获取 `total` 值，[#200](https://github.com/cipchk/ng-alain/issues/200)
  - `reuse-tab` 变更：
      - 新增 `mode`、`debug` 属性
      - 修复 `ReuseTabService` 调用 `clear()`、`remove()` 时无法同步更新组件，[#191](https://github.com/cipchk/ng-alain/issues/191)
  - 优化包体大小
- @delon/acl
  - 新增通用ACL路由守卫方法，[Document](/docs/acl)
- @delon/cache
  - 修复无法设置有效期，[#190](https://github.com/cipchk/ng-alain/issues/190)
  - 修复 `tryGet` 无法返回 `Observalbe` 类型，[#15](https://github.com/cipchk/delon/issues/15)
  - 支持泛型，[#14](https://github.com/cipchk/delon/issues/14)
- @delon/cli
  - 基于 Angular Cli 向上构建的针对 ng-alain 脚手架的命令行工具，[Document](/docs/cli)

### 0.5.0

`2018-1-5`

- ng-alain 脚手架
  - 新增 `full-content`、`zip`、`xlsx` 示例页
- @delon/theme
  - 修复快捷菜单项 `externalLink` 属性无效值问题，[#169](https://github.com/cipchk/ng-alain/issues/169)
- @delon/abc
  - 新增 `full-content` 全屏工作区组件，[Document](/components/full-content)
  - 新增 `zip` 组件，[Document](/components/zip)
  - 新增 `xlsx` 组件，[Document](/components/xlsx)
  - `simple-table` 变更：
      - **BREAKING CHANGES** 列描述 `url` 属性由 `data` 代替，数据源统一一个属性名，`0.6.0` 后将移除 `url` 属性
      - 新增列描述 `i18n` 属性，支持国际化
      - 新增 `simple-table` 组件导出 Excel 方法，[Demo](//cipchk.github.io/ng-alain/tables/simple-table)
      - 新增列描述、按钮组、过滤、选择项的 `acl` 参数，用于权限控制，[#158](https://github.com/cipchk/ng-alain/issues/158)
      - 新增 `export()` 支持指定数组数据，[#162](https://github.com/cipchk/ng-alain/issues/162)
  - 优化 `tag-cloud` 云词组件
- @delon/mock
  - Angular 里 Mock Http数据，适用于所有 Angular 项目，[Document](/docs/mock)
- @delon/auth
  - 修复Angular模块暂不支持正则参数（[#14187](https://github.com/angular/angular/issues/14187)）问题，[#170](https://github.com/cipchk/ng-alain/issues/170)


### 0.4.4

`2017-12-30`

- ng-alain 脚手架
  - 修复 `g2-plugin-slider` 路径问题，[#157](https://github.com/cipchk/ng-alain/issues/157)
- @delon/abc
  - `simple-talbe` 新增 `body`、`footer` 属性

### 0.4.3

`2017-12-28`

- @delon/abc
  - `simple-talbe` 变更
      - 新增 `disabled` 属性表示当前行多、单选框是否禁用状态，[#151](https://github.com/cipchk/ng-alain/issues/151)
      - 修复无法显示部分数据类型问题
- @delon/auth
  - `token_send_template` 支持多属性（例如：`${uid}-${token}`），[#154](https://github.com/cipchk/ng-alain/issues/154)

### 0.4.2

> `0.4.1` invalid

`2017-12-27`

- 新增 `@next` NPM版本，用于区分稳定版本与展望版本
- ng-alain 脚手架
  - 修复顶部锁屏无效链接
- @delon/theme
  - 新增 `MenuService` 的 `change` 属性，可用于监听菜单数据的变更通知
  - 修复 `_HttpClient` 共享服务 `loading` 容易引起 `ExpressionChangedAfterItHasBeenCheckedError` 问题
  - 优化 `ThemeService.setTheme` 调用时同步调用 `SettingsService`
- @delon/abc
  - 修复 `reuse-tab` 组件在移除时自动调用目标组件 `OnDestroy` 事件，避免内存泄露
  - 优化 G2 部分组件
  - `simple-talbe` 变更
      - 支持固定表头
      - `columens` 支持 `ynTruth` 属性
      - 修复选择框、单选框对齐问题
  - 移除 `ngx-countdown` 强制依赖

### 0.4.0

`2017-12-24`

- ng-alain 脚手架
  - 新增 [blank](//github.com/cipchk/ng-alain/tree/blank) 基础版分支，如何使用见[文档](/docs/getting-started)
  - 新增 [reuse-tab](https://cipchk.github.io/ng-alain/)、[simple-talbe](https://cipchk.github.io/ng-alain/tables/simple-table)、[UEditor](https://cipchk.github.io/ng-alain/editor/ueditor)、[Tinymce](https://cipchk.github.io/ng-alain/editor/tinymce)、[拆分视图](https://cipchk.github.io/ng-alain/other/split)、[剪贴板](https://cipchk.github.io/ng-alain/other/clipboard) 示例页
  - 修复无法启动 HMR 问题，[#130](https://github.com/cipchk/ng-alain/issues/130) [Commit](https://github.com/cipchk/ng-alain/commit/fca17fe7f74303e70ee2cfbac4dac0e032d426f4)
  - 修复i18n加载顺序问题，[#138](https://github.com/cipchk/ng-alain/issues/138)
  - 重构 `layout` 文件夹结构，将 Pro 版本的用户页设置为默认授权页
  - 重构子模块路配置文件独立为 `*-routing.module.ts` 更符合 cli 生成规则，[#117](https://github.com/cipchk/ng-alain/issues/117)
- @delon/theme
  - 增加 `nz-calendar` 组件主题色，[#7](https://github.com/cipchk/delon/pull/7) [@KennethMa](https://github.com/KennethMa)
  - 增加 `@aside-scrollbar-track-color` 侧边栏滚动条的轨道颜色
  - 修复 `MenuService` 带参数无法匹配问题，[#125](https://github.com/cipchk/ng-alain/issues/125)
- @delon/auth
  - 新增 `token_send_template` 属性，[#112](https://github.com/cipchk/ng-alain/issues/112)
  - 新增 `login_url` 属性，获取当前登录页路由地址
  - 修复由于无法获取 `token` 导致拦截器抛出异常
  - 修复JWT拦截器无法获取过期值问题，[#8](https://github.com/cipchk/delon/issues/8)
- @delon/abc
  - 新增 `reuse-tab` 组件，解决不同路由页切换时组件数据不丢失问题，[Document](/components/reuse-tab)
  - 新增 `simple-talbe` 组件，利用配置快速构建表格数据，[Document](/components/simple-table)
  - 修复 `sidebar-nav` 侧边栏收缩时无法自动隐藏及跳转问题，[#128](https://github.com/cipchk/ng-alain/issues/128)
  - 修复 `simple-table` 无法加载第一页问题，[#122](https://github.com/cipchk/ng-alain/issues/122)
  - 优化组件性能尽可能使用 `OnPush` 维护变更检测，[#115](https://github.com/cipchk/ng-alain/issues/115)
  - 优化利用 `OnChange` 简化属性，[#103](https://github.com/cipchk/ng-alain/issues/103)
  - 优化G2加载性能，[#118](https://github.com/cipchk/ng-alain/issues/118)
  - 重构移除所有 `host` 属性，[#116](https://github.com/cipchk/ng-alain/issues/116)
  - 重构简化所有组件布尔、数字属性更友好的使用性，[#102](https://github.com/cipchk/ng-alain/issues/102)

### 0.3.2

`2017-12-16`

- @delon/theme
  - 新增 `nz-table` 样式类 `.img` 表示图片强制大小
- @delon/auth
  - 修复无法获取完整 Token 对象，[#5](https://github.com/cipchk/delon/issues/5)

### 0.3.1

`2017-12-15`

- @delon/theme
  - 新增重载更多 `_HttpClient` 的 `get`、`post`、`delete` 方法
  - 新增导出所有 Pipes
  - 修复 `MenuService` 重复调用 `resume` 导致快捷菜单重复，[#107](https://github.com/cipchk/ng-alain/pull/107)

### 0.3.0

`2017-12-14`

- 脚手架 [commit](https://github.com/cipchk/ng-alain/commit/6d89f7468232de6c828ad9c735cd53087014587e)
  - AppModule：导入 `@delon/auth` 模块
  - DefaultInterceptor：TOKEN信息由 `@delon/auth` 的 `SimpleInterceptor` 处理
  - PRO登录页：登录页基于 `@delon/auth` 实现账密、第三方登录动作
  - 新增 `callback` 页面，用于回调页
- @delon/theme
  - **BREAKING CHANGES** MenuService： `setDefault` 已过期，使用 `openedByUrl` 替代
  - _HttpClient：修复JSONP参数转换URL错误问题
- @delon/abc
  - 修复 `sidebar-nav` 当Edge浏览器中收缩侧边栏时错位问题，[#100](https://github.com/cipchk/ng-alain/pull/100)
  - 取消 `mini-bar` 在 Tooltip 时显示辅助框
- @delon/acl
  - 修复 `can()` 方法传递角色数组时总是返回 `false`
- @delon/auth
  - 认证类库：用户认证过程的解决方案，[Document](/docs/auth)

### 0.2.1

`2017-12-11`

- 脚手架
  - 构建：支持 Typescript 2.5
  - 构建：移除 `@types/moment`，新版本自带定义文件
  - 修正 `NzSubject` 不支持 `boolean` 值返回，[#92](https://github.com/cipchk/ng-alain/pull/92)
- @delon/theme
  - MenuService：增加 `clear()` 方法，[#98](https://github.com/cipchk/ng-alain/pull/98)
- @delon/abc
  - avatar-list-item：支持 `text`、`icon` 属性，[#93](https://github.com/cipchk/ng-alain/pull/93)

### 0.2.0

`2017-12-09`

- 脚手架
  - 重构：统一的表单校验编码风格
- @delon/theme
  - 修复 `preloader`、IE下侧边框菜单样式问题，[#67](https://github.com/cipchk/ng-alain/pull/67) [@icycore](https://github.com/icycore)

### 0.2.0-beta.2

`2017-12-06`

- 脚手架
  - `package.json` 新增 `npm run analyze` 命令
- @delon/theme
  - 支持 `nz-tree` 主题颜色
- @delon/abc
  - 新增 `chart` 自定义G2组件容器
  - 新增 `Validate`、`_Validators` 一套验证类与表单验证器
- @delon/acl
  - 新增 `[acl]` 指令，用于元素（例如：按钮）粒度的权限控制

### 0.2.0-beta.1

`2017-12-05`

- 脚手架
  - `package.json` 默认版本号跟 `@delon/*` 同步
- @delon/abc
  - 新增 `count-down`

### 0.2.0-beta.0

`2017-12-04`

- 脚手架
  - 引入 `@delon/*` 系列类库，极大简化 `core`、`shared`、`styles` 的使用方式；若 `0.1` 则请参考[升级指引](/docs/010-020-changes)。
