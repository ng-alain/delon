---
order: 5
title: 如何布局
type: Documents
---

@delon/form 布局是基于 [Grid](https://ng.ant.design/components/grid/zh) 栅格系统，而 SFSchema 的[渲染类](/form/schema/en#%E6%B8%B2%E6%9F%93%E7%B1%BB)来决定布局参数。

表单布局分为行内、垂直、水平（默认）三类，它由 [layout](/form/getting-started/zh#API) 决定。

## 类型

### 行内

表单项水平行内排列，一般用于简单搜索框。

表单项的宽度由组件自身来决定，你可以使用 `width` 参数来调整其大小，像小部件 `select` 可能会因为未设置默认值倒置宽度极小。

> 可通过设置 [mode](/form/getting-started/zh#mode%E6%9C%89%E4%BB%80%E4%B9%88%E4%BD%9C%E7%94%A8%EF%BC%9F) 参数来快速设置为搜索模式。

### 垂直

标签和表单控件上下垂直排列。

### 水平

标签和表单控件水平排列，一般用于编辑页。

水平类型相对于行内与垂直更复杂一点，因为会涉及响应式，决定每个表单项所站的格数是由 [grid](/form/schema#%E5%93%8D%E5%BA%94%E5%BC%8F%E5%B1%9E%E6%80%A7-SFGridSchema) 属性来决定。

> 可通过设置 [mode](/form/getting-started/zh#mode%E6%9C%89%E4%BB%80%E4%B9%88%E4%BD%9C%E7%94%A8%EF%BC%9F) 参数来快速设置为编辑模式。

**非响应式**

非响应式时只需要维护 `span` 属性即可。

**响应式**

响应式是根据 `xs`、`sm`、`md`、`lg`、`xl`、`xxl` 来决定不同屏幕时决定要占用几格，有几个注意点：

- 每一行只能有 `24` 格
- 表示两个表单项在同一行，则设置值为 `12`
- 表示屏幕 `≥992px` 时两个表单项在同一行，小于则每个表单项为一行，则：`{ sm: 24, md: 12 }`

## 不规则布局

当然，表单不可能每一行都有固定表单项数量，有可能某个表单项会占用一整行，由于栅格系统的因素，这会产生另一个问题：**标签无法对齐**，sf 提供一种方案，即固定所有标签的宽度 `spanLabelFixed` 属性，例如：

```json
{
  "properties": {
    "email": {
      "type": "string",
      "title": "邮箱",
      "format": "email"
    },
    "name": {
      "type": "string",
      "title": "姓名",
      "minLength": 5
    },
    "remark": {
      "type": "string",
      "title": "描述",
      "ui": {
        "widget": "textarea",
        "autosize": true,
        "grid": {
            "span": 24
        }
      }
    }
  },
  "ui": {
    "spanLabelFixed": 100,
    "grid": {
      "span": 12
    }
  }
}
```

## 按钮

按钮布局渲染同表单项一样布局、参数，可以通过 [SFButton](/form/getting-started#SFButton) 属性来调整按钮渲染风格。

**注意事项**

- 值为 `null` 或 `undefined` 表示手动添加按钮，但保留容器
- 值为 `none` 表示手动添加按钮，且不保留容器
- 使用 `spanLabelFixed` 固定标签宽度时，若无 `render.class` 则默认为居中状态

**自定义**

当你希望自定义按钮时，务必设置 `button` 值为 `null`。

```html
<sf #sf [button]="null">
  <button type="submit" nz-button [disabled]="!sf.valid">保存</button>
  <button (click)="sf.reset()" type="button" nz-button>重置</button>
</sf>
```
