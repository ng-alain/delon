---
order: 100
title: 更新日志
type: Other
---

## 2.0.0-beta.4

`2018-10-07`

### Bug Fixes

* **form:date:** 修复扁平模式下无效初始值 ([#187](https://github.com/ng-alain/delon/issues/187)) ([d2c89ca](https://github.com/ng-alain/delon/commit/d2c89ca))
* **theme:** 移除重复空白间距代码 ([#193](https://github.com/ng-alain/delon/issues/193)) ([1545178](https://github.com/ng-alain/delon/commit/1545178))


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
