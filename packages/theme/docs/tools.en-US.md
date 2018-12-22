---
type: Theme
order: 2
title: Style Tools
---

ng-alain builds a set of style tools for size, spacing, color, and more based on Ant Design.

> Install [ng-alain snippets](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-vscode) plugin in VSCode for intellisense these class names.

## Spacing

ng-alain believes that these styles tool only using in the content area. Built on the design principles developed by Ant Design, A spacing width is based on `8px` as a reference unit, and derived from three rule sizes.

| Name | Formula | Size | Description |
| ---- | --- | --- | --- |
| `xs` | $gutter / 2 | 4px | Smaller |
| `sm` | $gutter | 8px | Small |
| `md` | $gutter * 2 | 16px | Medium |
| `lg` | $gutter * 3 | 24px | Large |

According these rules, derived from `margin`，`padding`, and naming rules as follows:

- Type: `padding`, `margin`
- Direction(Optional): `top`, `right`, `bottom`, `left`, `x`(equal to `left`, `right`), `y`(equal to `top`, `bottom`)

**Clean**

```regex
[<Type>p|m][<Direction>t|r|b|l|x|y]?0
```

**Name Rule**

```regex
[<Type>p|m][<Direction>t|r|b|l|x|y]?-[<Size>sm|md|lg]
```

Demo:

```css
.p-sm { padding: 8px !important; }
.pt-sm { padding-top: 8px !important; }
.m-sm { margin: 16px !important; }
.mt-md { margin-top: 16px !important; }

.p0 { padding: 0 !important; }
```

## Color

Ant Design does not have a button color, but is based on visual effects. The default is daybreak blue, for example: button type `primary` of `nz-button`.

ng-alain still does not break this rule, building a set of color classes for text and background based on the [color](//ant.design/docs/spec/colors) section.

| Name | Primary Color | Description |
| ---- | --- | --- |
| `red` | `#f5222d` | Dust Red: 斗志、奔放 |
| `volcano` | `#fa541c` | Volcano: 醒目、澎湃 |
| `orange` | `#fa8c16` | Sunset Orange: 温暖、欢快 |
| `gold` | `#faad14` | Calendula Gold: 活力、积极 |
| `yellow` | `#fadb14` | Sunrise Yellow: 出生、阳光 |
| `lime` | `#a0d911` | Lime: 自然、生机 |
| `green` | `#52c41a` | Polar Green: 健康、创新 |
| `cyan` | `#13c2c2` | Cyan: 希望、坚强 |
| `blue` | `#1890ff` | Daybreak Blue: 包容、科技、普惠 |
| `geekblue` | `#2f54eb` | Geek Blue: 探索、钻研 |
| `purple` | `#722ed1` | Golden Purple: 优雅、浪漫 |
| `magenta` | `#eb2f96` | Magenta: 平稳、中性 |

Ant Design's base color palette totals 120 colors, including 12 primary colors and their derivative colors. These colors can basically include the need for color in background applications design.

**Category**

| Name | Color Size |
| ---- | --- |
| `light` | 5 |
| `normal` | 6 |
| `dark` | 7 |

**Name Rule**

```regex
[<Type>text|bg]-[<Color Name>red|volcano|orange|gold|yellow|lime|green|cyan|blue|geekblue|purple|magenta|grey](-[light|dark])?(-h)?
```

> `normal` itself is the basic color, so it can be ignored
> `grey` is very often used, so add extra `grey-light`, `grey-darker` alias to indicate depth

DEMO:

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

### Aliase

| Aliase | Color Name |
| ---- | --- |
| `primary` | `blue` |
| `success` | `green` |
| `error` | `red` |
| `warning` | `yellow` |

DEMO:

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

**Full Colors**

You can use `@enable-all-colors: true` to turn on all 120 color rules.

```less
.text-red-1 { color: #fff1f0 !important; }
.text-red-6 { color: #f04134 !important; }
.text-red-10 { color: #5c0011 !important; }

.bg-red-6 { color: #f04134 !important; }
.bg-red-6-h { color: #f04134 !important; }
```

## Clearfix

Clear floats `.clearfix`.

## Display

| Aliase | CSS |
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

## Position

| Name | Description |
| ---- | --- |
| `overflow-auto` | `overflow: auto` |
| `overflow-hidden` | `overflow: hidden` |
| `fixed-top` | Fixed top |
| `fixed-bottom` | Fixed bottom |

## Text

### Sizing

Ant Design is based on `14px`.

| Name | Description |
| ---- | --- |
| `text-xs` | `12px` |
| `text-sm` | `14px` |
| `text-md` | `16px` |
| `text-lg` | `18px` |
| `text-xl` | `22px` |

### Alignment

| Name | Description |
| ---- | --- |
| `text-left` | Text left |
| `text-center` | Text center |
| `text-right` | Text right |

### Overflow

> The container must be `display: inline-block` or `display: block`.

| Name | Description |
| ---- | --- |
| `text-nowrap` | Outputs a single line |
| `text-truncate` | Truncate string with ellipsis |

### Transformation

| Name | Description |
| ---- | --- |
| `text-lowercase` | Lowercase of text |
| `text-uppercase` | Uppercase of text |
| `text-capitalize` | Capitalize of text |
| `text-deleted` | Deleted line |

### Weight and italics

| Name | Description |
| ---- | --- |
| `font-weight-normal` | `font-weight: normal` |
| `font-weight-bold` | `font-weight: 700` |
| `font-italic` | `font-style: italic` |

### Other

| Name | Description |
| ---- | --- |
| `text-hover` | `*:hover { color: @primary-color; }` |

## Borders

### Border

| Name | Description |
| ---- | --- |
| `border` | `border: 1px solid #f5f5f5 !important;` |
| `border-0` | `border: 0 !important;` |
| `border-top-0` | `border-top: 0 !important;` |
| `border-right-0` | `border-right: 0 !important;` |
| `border-bottom-0` | `border-bottom: 0 !important;` |
| `border-left-0` | `border-left: 0 !important;` |

### Color

Supports all color & aliase of [color section](/theme/tools#color), such as `border-red`, `border-success`.

### Rounded

| Name | Description |
| ---- | --- |
| `rounded-0` | `border-radius: 0;` |
| `rounded-circle` | `border-radius: 50%;` |
| `rounded-sm` | `border-radius: 2px;` |
| `rounded-md` | `border-radius: 4px;` |
| `rounded-lg` | `border-radius: 6px;` |

## Width

| Name | Description |
| ---- | --- |
| `width-sm` | `160px` |
| `width-md` | `240px` |
| `width-lg` | `320px` |
| `width-[0-10]` | `0%-100%` |

## Responsive

Like Bootstrap responsive rules, all apply `hidden-xs` classes are hidden when screen less than `480px`.

| Name | Screen |
| ---- | --- |
| `hidden-xs` | <480px |
| `hidden-sm` | <768px |
| `hidden-md` | <992px |
| `hidden-lg` | <1200px |
| `hidden-pc` | <768px |
| `hidden-mobile` | >768px |

## Rotate

```
.rotate-[360 / 15]
```

DEMO:

```css
// Rotate 15 degrees
.rotate-15
// Rotate 90 degrees
.rotate-90
// Rotate 360 degrees
.rotate-360
```

## Other

| Name | Description |
| ---- | --- |
| `block-center` | `margin: 0 auto` |
| `point` | `cursor: pointer` |
| `no-data` | No result |
| `no-resize` | Setting does not allow adjustment elements |
| `bg-center` | Background image is vertically centered |
| `scrollbar` | Custom scrollbar for a div |
| `color-weak` | Weak mode |

## Widgets

### Masonry

Online [DEMO](https://ng-alain.github.io/ng-alain/#/style/gridmasonry)。

| Name | Description |
| ---- | --- |
| `row-masonry` | Rows |
| `row-masonry-{xs|sm|md|lg|xl}-{1-10}` | Rows, Responsive style |
| `col-masonry` | Columns |

## ng-zorro

### nz-card

| Name | Description |
| ---- | --- |
| `ant-card__body-nopadding` | Force body without spacing |

### nz-modal

| Name | Description |
| ---- | --- |
| `modal-{sm|md|lg|xl}` | Set size of modal, `wrapClassName: 'modal-lg'` |
| `modal-body-nopadding` | Without padding in body element |
| `modal-header` | Use html template to custom modal, [DEMO](https://ng-alain.github.io/ng-alain/#/extras/poi) |
| `modal-footer` | Use html template to custom modal, [DEMO](https://ng-alain.github.io/ng-alain/#/extras/poi) |

### nz-table

| Name | Description |
| ---- | --- |
| `ant-table-rep__title` | Title |
| `ant-table-rep__hide-header-footer` | Show title or bottom when mobile screen |

[comment]: <demo(table-rep)>

### nz-tag

| Name | Description |
| ---- | --- |
| `ant-tag__plus` | Add button style |
