---
order: 0
title:
  en-US: Changelog
  zh-CN: 更新日志
type: Other
---

### 0.5.0-rc.7 （@next）

`2018-1-3`

- @delon/abc
    - 修复 `zip` 组件依赖问题，[#164](https://github.com/cipchk/ng-alain/issues/164)

### 0.5.0-rc.6 （@next）

`2018-1-2`

- @delon/abc
    - 新增 `zip` 组件，[Document](//ng-alain.com/components/zip)
    - `simple-table` 变更：
        - 新增列描述、按钮组、过滤、选择项的 `acl` 参数，用于权限控制，[#158](https://github.com/cipchk/ng-alain/issues/158)
        - `export()` 支持指定数组数据，[#162](https://github.com/cipchk/ng-alain/issues/162)

### 0.5.0-rc.5 （@next）

`2018-1-1`

- @delon/abc
    - 新增 `xlsx` 组件，[Document](//ng-alain.com/components/xlsx)
    - 新增 `simple-table` 组件导出 Excel 方法，[Demo](//cipchk.github.io/ng-alain/tables/simple-table)

### 0.5.0-rc.4 （@next）

`2017-12-30`

- @delon/mock
    - Angular 里 Mock Http数据，适用于所有 Angular 项目，[Document](//ng-alain.com/docs/mock)

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

### 0.5.0-rc.2 （@next）

`2017-12-27`

- ng-alain 脚手架
    - 新增 `full-content` [示例页](//cipchk.github.io/ng-alain/tables/fs-table)
- @delon/abc
    - 新增 `full-content` 全屏工作区组件，[Document](//ng-alain.com/components/full-content)

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
    - 新增 [blank](//github.com/cipchk/ng-alain/tree/blank) 基础版分支，如何使用见[文档](//ng-alain.com/docs/getting-started)
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
    - 新增 `reuse-tab` 组件，解决不同路由页切换时组件数据不丢失问题，[Document](http://ng-alain.com/components/reuse-tab)
    - 新增 `simple-talbe` 组件，利用配置快速构建表格数据，[Document](http://ng-alain.com/components/simple-table)
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
    - 认证类库：用户认证过程的解决方案，[Document](http://ng-alain.com/docs/auth)

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
