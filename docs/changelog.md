---
order: 0
title:
  en-US: Changelog
  zh-CN: 更新日志
type: Other
---

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
