---
type: Theme
order: 2
title: 样式工具类
---

ng-alain 在 Ant Design 的基础上生产一套尺寸、间距、颜色等工具类。

> 在 VSCode 安装 [ng-alain snippets](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-vscode) 插件，可以对所有工具集样式名称的智能提醒。

## 间距

ng-alain 认为这些工具类只会运用在内容区域，且秉承 Ant Design 的设计价值观，间距宽度是以 `8px` 为一个基准单位，并衍生出三个尺寸，分别为：

| 名称 | 公式 | 尺寸 | 说明 |
| ---- | --- | --- | --- |
| `xs` | $gutter / 2 | 4px | 超小号 |
| `sm` | $gutter | 8px | 小号 |
| `md` | $gutter * 2 | 16px | 中号 |
| `lg` | $gutter * 3 | 24px | 大号 |

依这些规则，衍生出 `margin`、`padding`，其命名规则如下：

- 类型：`padding`、`margin`
- 方向（可选）：`top`、`right`、`bottom`、`left`、`x`（相当于 `left`、`right`）、`y`（相当于 `top`、`bottom`）

**消除**

```regex
[<类型>p|m][<方向>t|r|b|l|x|y]?0
```

**命名格式**

```regex
[<类型>p|m][<方向>t|r|b|l|x|y]?-[<尺寸>sm|md|lg]
```

示例：

```css
.p-sm { padding: 8px !important; }
.pt-sm { padding-top: 8px !important; }
.m-sm { margin: 16px !important; }
.mt-md { margin-top: 16px !important; }

.p0 { padding: 0 !important; }
```

## 色彩

Ant Design 并没有按钮色这一说，而是以视觉效果为基准。默认是蓝色系（拂晓蓝），例如：`nz-button` 的按钮类型 `primary`。

而 ng-alain 依然不会破坏这种规则，但依 [色彩](//ant.design/docs/spec/colors-cn) 章节，产生了一种运用于文本、背景的色系类。

| 名称 | 基本色 | 说明 |
| ---- | --- | --- |
| `red` | `#f5222d` | 薄暮：斗志、奔放 |
| `volcano` | `#fa541c` | 火山：醒目、澎湃 |
| `orange` | `#fa8c16` | 日暮：温暖、欢快 |
| `gold` | `#faad14` | 金盏花：活力、积极 |
| `yellow` | `#fadb14` | 日出：出生、阳光 |
| `lime` | `#a0d911` | 青柠：自然、生机 |
| `green` | `#52c41a` |  极光绿：健康、创新 |
| `cyan` | `#13c2c2` | 明青：希望、坚强 |
| `blue` | `#1890ff` | 拂晓蓝：包容、科技、普惠 |
| `geekblue` | `#2f54eb` | 极客蓝：探索、钻研 |
| `purple` | `#722ed1` | 酱紫：优雅、浪漫 |
| `magenta` | `#eb2f96` | 法式洋红：平稳、中性 |

Ant Design 的基础色板共计 120 个颜色，包含 12 个主色以及衍生色。这些颜色基本可以满足中后台设计中对于颜色的需求。

**分类**

| 名称 | 色号 |
| ---- | --- |
| `light` | 5号 |
| `normal` | 6号 |
| `dark` | 7号 |

**命名格式**

```regex
[<类型>text|bg]-[<色彩名>red|volcano|orange|gold|yellow|lime|green|cyan|blue|geekblue|purple|magenta|grey](-[light|dark])?(-h)?
```

> `normal` 本身即是基本色，所以可以被忽略
> `grey` 可能会更常用，所以额外增加 `grey-lighter`、`grey-darker` 别名表示深度

示例：

```less
// Text color
.text-red-light { color: #fabeb9 !important; }
.text-red { color: #f04134 !important; }
.text-red-dark { color: #a31837 !important; }

// background-color color
.bg-red-light { background-color: #fabeb9 !important; }
.bg-red { background-color: #f04134 !important; }
.bg-red-dark { background-color: #a31837 !important; }

// hover color
.bg-red-light-h { &:hover { background-color: #fabeb9 !important; } }
.bg-red-h { &:hover { background-color: #f04134 !important; } }
.bg-red-dark-h { &:hover { background-color: #a31837 !important; } }
```

### 别名

| 别名 | 色系 |
| ---- | --- |
| `primary` | `blue` |
| `success` | `green` |
| `error` | `red` |
| `warning` | `yellow` |

示例：

```less
// Text color
.text-error-light { color: #fabeb9 !important; }
.text-error { color: #f04134 !important; }
.text-error-dark { color: #a31837 !important; }

// background-color color
.bg-error-light { background-color: #fabeb9 !important; }
.bg-error { background-color: #f04134 !important; }
.bg-error-dark { background-color: #a31837 !important; }

// hover color
.bg-error-light-h { &:hover { background-color: #fabeb9 !important; } }
.bg-error-h { &:hover { background-color: #f04134 !important; } }
.bg-error-dark-h { &:hover { background-color: #a31837 !important; } }
```

### 全量颜色

你可以使用 `@enable-all-colors: true` 来开启所有 120 个颜色的规则。

```less
.text-red-1 { color: #fff1f0 !important; }
.text-red-6 { color: #f04134 !important; }
.text-red-10 { color: #5c0011 !important; }

.bg-red-6 { color: #f04134 !important; }
.bg-red-6-h { color: #f04134 !important; }
```

## 清除浮动

清除浮动 `.clearfix`。

## 显示

| 别名 | CSS |
| ---- | --- |
| `d-none` | `display: none` |
| `d-block` | `display: block` |
| `d-inline-block` | `display: inline-block` |
| `d-flex` | `display: flex` |
| `d-inline-flex` | `display: inline-flex` |
| `justify-content-start` | `justify-content: flex-start` |
| `justify-content-end` | `justify-content: flex-end` |
| `justify-content-center` | `justify-content: center` |
| `justify-content-between` | `justify-content: space-between` |
| `justify-content-around` | `justify-content: space-around` |
| `align-items-start` | `align-items: flex-start` |
| `align-items-end` | `align-items: flex-end` |
| `align-items-center` | `align-items: center` |
| `align-items-baseline` | `align-items: baseline` |
| `align-items-stretch` | `align-items: stretch` |
| `align-content-start` | `align-content: flex-start` |
| `align-content-end` | `align-content: flex-end` |
| `align-content-center` | `align-content: center` |
| `align-content-between` | `align-content: space-between` |
| `align-content-around` | `align-content: space-around` |
| `align-content-stretch` | `align-content: stretch` |
| `align-self-auto` | `align-self: auto` |
| `align-self-start` | `align-self: flex-start` |
| `align-self-end` | `align-self: flex-end` |
| `align-self-center` | `align-self: center` |
| `align-self-baseline` | `align-self: baseline` |
| `align-self-stretch` | `align-self: stretch` |

## 位置

| 名称 | 说明 |
| ---- | --- |
| `overflow-auto` | `overflow: auto` |
| `overflow-hidden` | `overflow: hidden` |
| `fixed-top` | 固定顶部 |
| `fixed-bottom` | 固定底部 |

## 文本

### 大小

Ant Design 是以 `14px` 为基准字号。

| 名称 | 说明 |
| ---- | --- |
| `text-xs` | `12px` |
| `text-sm` | `14px` |
| `text-md` | `16px` |
| `text-lg` | `18px` |
| `text-xl` | `22px` |

### 对齐

| 名称 | 说明 |
| ---- | --- |
| `text-left` | 文本居左 |
| `text-center` | 文本居中 |
| `text-right` | 文本居右 |

### 溢出

> 容器必须是 `display: inline-block` 或 `display: block`。

| 名称 | 说明 |
| ---- | --- |
| `text-nowrap` | 文本超出不换行 |
| `text-truncate` | 文本超出截取并加 `...` |

### Transformation

| 名称 | 说明 |
| ---- | --- |
| `text-lowercase` | 小写文本 |
| `text-uppercase` | 大写文本 |
| `text-capitalize` | 首词大写 |
| `text-deleted` | 删除线 |

### Weight and italics

| 名称 | 说明 |
| ---- | --- |
| `font-weight-normal` | `font-weight: normal` |
| `font-weight-bold` | `font-weight: 700` |
| `font-italic` | `font-style: italic` |

### Other

| 名称 | 说明 |
| ---- | --- |
| `text-hover` | `*:hover { color: @primary-color; }` |

## Borders

### 边框

| 名称 | 说明 |
| ---- | --- |
| `border` | `border: 1px solid #f5f5f5 !important;` |
| `border-0` | `border: 0 !important;` |
| `border-top-0` | `border-top: 0 !important;` |
| `border-right-0` | `border-right: 0 !important;` |
| `border-bottom-0` | `border-bottom: 0 !important;` |
| `border-left-0` | `border-left: 0 !important;` |

### 颜色

支持[色彩章节](/theme/tools#色彩)所有的色系&别名写法，例如：`border-red`、`border-success`。

### 圆角

| 名称 | 说明 |
| ---- | --- |
| `rounded-0` | `border-radius: 0;` |
| `rounded-circle` | `border-radius: 50%;` |
| `rounded-sm` | `border-radius: 2px;` |
| `rounded-md` | `border-radius: 4px;` |
| `rounded-lg` | `border-radius: 6px;` |

## Width

| 名称 | 说明 |
| ---- | --- |
| `width-sm` | `160px` |
| `width-md` | `240px` |
| `width-lg` | `320px` |
| `width-[0-10]` | `0%-100%` |

## Responsive

类似 Bootstrap 响应式规则，当屏幕小于 `480px` 时会隐藏所有 `hidden-xs` 类。

| 名称 | 屏幕 |
| ---- | --- |
| `hidden-xs` | <480px |
| `hidden-sm` | <768px |
| `hidden-md` | <992px |
| `hidden-lg` | <1200px |
| `hidden-pc` | <768px |
| `hidden-mobile` | >768px |

## 旋转

```
.rotate-[360 / 15]
```

例如：

```css
// 旋转15度
.rotate-15
// 旋转90度
.rotate-90
// 旋转360度
.rotate-360
```

## Other

| 名称 | 说明 |
| ---- | --- |
| `block-center` | `margin: 0 auto` |
| `point` | `cursor: pointer` |
| `no-data` | 空数据行 |
| `no-resize` | 设置不允许调整元素 |
| `bg-center` | 背景图垂直居中 |
| `scrollbar` | 美化 div 滚动条 |
| `color-weak` | 色弱模式 |

## 小部件

### 瀑布流

在线[示例](https://ng-alain.github.io/ng-alain/#/style/gridmasonry)。

| 名称 | 说明 |
| ---- | --- |
| `row-masonry` | 行 |
| `row-masonry-{xs|sm|md|lg|xl}-{1-10}` | 列，响应式样式 |
| `col-masonry` | 列 |

## ng-zorro

### nz-card

| 名称 | 说明 |
| ---- | --- |
| `ant-card__body-nopadding` | 强制内容无间距 |

### nz-modal

| 名称 | 说明 |
| ---- | --- |
| `modal-{sm|md|lg|xl}` | 设置Modal的大小，`wrapClassName: 'modal-lg'` |
| `modal-body-nopadding` | 内容无内边距 |
| `modal-header` | 自定义Modal时非常有效，[DEMO](https://ng-alain.github.io/ng-alain/#/extras/poi) |
| `modal-footer` | 自定义Modal时非常有效，[DEMO](https://ng-alain.github.io/ng-alain/#/extras/poi) |

### nz-table

| 名称 | 说明 |
| ---- | --- |
| `ant-table-rep__title` | 标题 |
| `ant-table-rep__hide-header-footer` | 小屏幕时才显示标题或底部 |

[comment]: <demo(table-rep)>

### nz-tag

| 名称 | 说明 |
| ---- | --- |
| `ant-tag__plus` | 增加按钮样式 |
