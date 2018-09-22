---
order: 100
title:
  en-US: Changelog
  zh-CN: 更新日志
type: Other
---

### 2.0.0-beta.2

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

### 2.0.0-beta.1

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

### 2.0.0-beta.0

`2018-9-9`

[升级指南](/docs/upgrade-v2)

### 1.x

1.x 历史变更日志请至[1.x-doc站](https://ng-alain.github.io/1.x-doc/docs/changelog)。
