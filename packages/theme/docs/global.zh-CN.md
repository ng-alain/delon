---
type: Theme
order: 1
title: 全局参数
---

## 公共类

| 名称 | 默认值 | 功能 |
| --- | --- | --- |
| `@layout-gutter` | `8px` | antd布局间距，不可改变 |
| `@font-size-base` | `14px` | antd字号 |
| `@primary-color` | 蓝色 | antd 主色 |
| `@mobile-min` | `768px` | PC端 |
| `@mobile-max` | `768px` | 移动端 |
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
| `@modal-xl` | `1200px` | 超大号对话框 |
| `@drawer-sm` | `300px` | 小号抽屉 |
| `@drawer-md` | `500px` | 中号抽屉 |
| `@drawer-lg` | `900px` | 大号抽屉 |
| `@drawer-xl` | `1200px` | 超大号抽屉 |
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

## Zorro组件补丁

### 通用

| 名称 | 默认值 | 功能 |
| --- | --- | --- |
| `@preserve-white-spaces-enabled` | `true` | 开启 `preserveWhitespaces` |
| `@router-animation-duration` | `antFadeIn` | 路由切换动画 |
| `@router-animation-duration` | `1s` | 路由切换动画时长 |

### 表单

| 名称 | 默认值 | 功能 |
| --- | --- | --- |
| `@form-state-visual-feedback-enabled` | `false` | 开启表单元素的视觉反馈 |
| `@search-form-bg` | `#fbfbfb` | 列表页简易搜索表单背景色 |
| `@search-form-radius` | `4px` | 列表页简易搜索表单圆角 |

### 表格

指 `nz-table`。

| 名称 | 默认值 | 功能 |
| --- | --- | --- |
| `@nz-table-img-radius` | `4px` | 表格中的图片圆角 |
| `@nz-table-img-margin-right` | `4px` | 表格中的图片右外边距 |
| `@nz-table-img-max-width` | `32px` | 表格中的图片最大宽度 |
| `@nz-table-img-max-height` | `32px` | 表格中的图片最大高度 |
| `@nz-table-rep-max-width` | `@mobile-max` | 当移动端屏幕时触发表格响应式 |
| `@nz-table-rep-header-background` | `@border-color-split` | 表格响应式：标题背景色 |
| `@nz-table-rep-even-background` | `#f9f9f9` | 表格响应式：偶数行背景色 |
| `@nz-table-rep-padding-vertical` | `8px` | 表格响应式：单元格垂直间距 |
| `@nz-table-rep-padding-horizontal` | `8px` | 表格响应式：单元格水平间距 |
| `@nz-table-rep-column-name-width` | `100px` | 表格响应式：列名最大宽度 |
| `@nz-table-rep-column-name-text-align` | `right` | 表格响应式：列名文本对齐方式 |
| `@nz-table-rep-column-name-padding-right` | `right` | 表格响应式：列名右间距 |
| `@nz-table-rep-column-name-color` | `rgba(0, 0, 0, 0.5)` | 表格响应式：列名颜色 |
