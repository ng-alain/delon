---
order: 0
title:
  en-US: Changelog
  zh-CN: 更新日志
type: Other
---

### 0.4.0-rc.3

`2017-12-19`

- ng-alain 脚手架
    - 新增 [UEditor](https://cipchk.github.io/ng-alain/editor/ueditor)、[Tinymce](https://cipchk.github.io/ng-alain/editor/tinymce) 示例页
- @delon/abc
    - 修复 `simple-table` 无法加载第一页问题，[#122](https://github.com/cipchk/ng-alain/issues/122)
    - 优化利用 `OnChange` 简化属性，[#103](https://github.com/cipchk/ng-alain/issues/103)
    - 重构移除所有 `host` 属性，[#116](https://github.com/cipchk/ng-alain/issues/116)
    - 重构简化所有组件布尔、数字属性更友好的使用性，[#102](https://github.com/cipchk/ng-alain/issues/102)

### 0.4.0-rc.3

`2017-12-19`

- ng-alain 脚手架
    - 新增 [UEditor](https://cipchk.github.io/ng-alain/editor/ueditor)、[Tinymce](https://cipchk.github.io/ng-alain/editor/tinymce) 示例页
- @delon/abc
    - 修复 `simple-table` 无法加载第一页问题，[#122](https://github.com/cipchk/ng-alain/issues/122)
    - 优化利用 `OnChange` 简化属性，[#103](https://github.com/cipchk/ng-alain/issues/103)
    - 重构移除所有 `host` 属性，[#116](https://github.com/cipchk/ng-alain/issues/116)
    - 重构简化所有组件布尔、数字属性更友好的使用性，[#102](https://github.com/cipchk/ng-alain/issues/102)

### 0.4.0-rc.2

`2017-12-18`

- ng-alain 脚手架
    - 新增 `reuse-tab` 示例[页](https://cipchk.github.io/ng-alain/)
- @delon/abc
    - 新增 `reuse-tab` 组件，解决不同路由页切换时组件数据不丢失问题，[Document](http://ng-alain.com/components/reuse-tab)

### 0.4.0-rc.1

`2017-12-16`

- ng-alain 脚手架
    - 新增 `simple-talbe` 示例[页](https://cipchk.github.io/ng-alain/tables/simple-table)
- @delon/abc
    - 新增 `simple-talbe` 组件，利用配置快速构建表格数据，[Document](http://ng-alain.com/components/simple-table)

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
