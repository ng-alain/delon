---
order: 2
title:
  en-US: Global
  zh-CN: 参数
type: Theme
---

ng-alain 默认很多字号、尺寸都是以`@font-size-base` 变量为基础进行变形，就目前版本而言默认是 `14px`。

## 公共类

| 名称 | 默认值 | 功能 |
| --- | --- | --- |
| `@layout-gutter` | `8px` | antd布局间距，不可改变 |
| `@font-size-base` | `14px` | antd字号，不可改变 |
| `@primary-color` | 蓝色 | antd 主视觉颜色，不可改变 |
| `@text-sm` | `@font-size-base + 0` | 小号文本 |
| `@text-md` | `@font-size-base + 2` | 中号文本 |
| `@text-lg` | `@font-size-base + 4` | 大号文本 |
| `@icon-sm` | `@font-size-base * 2` | 小号图标 |
| `@icon-md` | `@font-size-base * 4` | 中号图标 |
| `@icon-lg` | `@font-size-base * 6` | 大号图标 |
| `@h1-font-size` | `32px` | h1字号 |
| `@h2-font-size` | `24px` | h2字号 |
| `@h3-font-size` | `20px` | h3字号 |
| `@h4-font-size` | `16px` | h4字号 |
| `@h5-font-size` | `14px` | h5字号 |
| `@h6-font-size` | `12px` | h6字号 |
| `@enable-all-colors` | `true` | 开启背景、文本颜色<br>例如：`.bg-teal`、`.text-teal`<br>有关颜色值见样式规则章节 |
| `@modal-sm` | `300px` | 小号对话框 |
| `@modal-md` | `500px` | 中号对话框 |
| `@modal-lg` | `900px` | 大号对话框 |
| `@code-border-color` | `#eee` | `<code>` 边框颜色 |
| `@code-bg` | `#f7f7f7` | `<code>` 背景颜色 |
| `@widths`  | `sm @layout-gutter * 20` <br> `md @layout-gutter * 30`<br>`lg @layout-gutter * 40` | 宽度 |
| `@border-radius-md` | `4px` | 中号边框圆角 |
| `@border-radius-lg` | `6px` | 大号边框圆角 |
| `@masonry-column-gap` | `@layout-gutter * 2` | CSS瀑布流列与列的间距 |
| `@scrollbar-enabled` | `true` | 启用美化滚动条 |
| `@scrollbar-width` | `6px` | 美化滚动条宽度 |
| `@scrollbar-height` | `6px` | 美化滚动条高度 |
| `@scrollbar-track-color` | `rgba(0, 0, 0, 0.3)` | 美化滚动条的轨道颜色 |
| `@scrollbar-thumb-color` | `#6e6e6e` | 美化滚动条小方块颜色 |

## 布局类

| 名称 | 默认值 | 功能 |
| --- | --- | --- |
| `@header-hg` | `64px` | 顶部高度 |
| `@header-bg` | `@primary-color` | 顶部背景色 |
| `@header-padding` | `@layout-gutter * 2` | 顶部左右内边距 |
| `@header-search-enabled` | `true` | 是否开启顶部搜索框 |
| `@header-search-height` | `34px` | 顶部搜索框高度 |
| `@aside-wd` | `200px` | 侧边栏宽度 |
| `@aside-bg` | `#fff` | 侧边栏背景色 |
| `@aside-nav-fs` | `14px` | 侧边栏菜单字号 |
| `@aside-nav-padding-top-bottom` | `@layout-gutter` | 侧边栏菜单项上下内边距 |
| `@aside-nav-item-height` | `38px` | 侧边栏菜单项高度 |
| `@aside-nav-text-color` | `rgba(0, 0, 0, 0.65)` | 侧边栏菜单文本颜色 |
| `@aside-nav-text-hover-color` | `#108ee9` | 侧边栏菜单文本悬停颜色 |
| `@aside-nav-group-text-color` | `rgba(0, 0, 0, 0.43)` | 侧边栏菜单分组文本颜色 |
| `@aside-nav-selected-text-color` | `#108ee9` | 侧边栏菜单激活时文本颜色 |
| `@aside-nav-selected-bg` | `#fcfcfc` | 侧边栏菜单激活时背景颜色 |
| `@aside-collapsed-wd` | `@layout-gutter * 8` | 侧边栏收缩后宽度 |
| `@aside-collapsed-nav-fs` | `24px` | 侧边栏收缩后文本字号 |
| `@aside-scrollbar-width` | `0` | 侧边栏滚动条宽度 |
| `@aside-scrollbar-height` | `0` | 侧边栏滚动条高度 |
| `@aside-scrollbar-track-color` | `transparent` | 侧边栏滚动条的轨道颜色 |
| `@aside-scrollbar-thumb-color` | `transparent` | 侧边栏滚动条小方块颜色 |
| `@content-heading-bg` | `#fafbfc` | 内容区域标题背景色 |
| `@content-heading-border` | `#efe3e5` | 内容区域标题底部边框色 |
| `@content-padding` | `@layout-gutter * 3` | 内容区域内边距 |
| `@content-bg` | `#f5f7fa` | 内容区域背景色 |

## Zorro组件补丁类

| 名称 | 默认值 | 功能 |
| --- | --- | --- |
| `@form-state-visual-feedback-enabled` | `false` | 开启表单元素的视觉反馈 |
| `@nz-table-img-radius` | `4px` | `nz-table` 表格中：图片圆角 |
| `@nz-table-img-margin-right` | `4px` | `nz-table` 表格中：图片右外边距 |
| `@nz-table-img-max-width` | `32` | `nz-table` 表格中：图片最大宽度 |
| `@nz-table-img-max-height` | `32` | `nz-table` 表格中：图片最大高度 |
| `@search-form-bg` | `#fbfbfb` | 列表页搜索表单背景色 |
| `@search-form-radius` | `4px` | 列表页搜索表单圆角 |
| `@preserve-white-spaces-enabled` | `true` | 开启 `preserveWhitespaces` |
