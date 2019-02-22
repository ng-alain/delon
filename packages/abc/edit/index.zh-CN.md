---
type: CURD
title: se
subtitle: 编辑
cols: 1
order: 3
module: SEModule
config: SEConfig
---

简化表单HTML模板的高阶组件，并进一步优化了一些细节：

- 更友好的表单校验状态
- 自动化响应式布局
- 自动维护表单 `id`

它由 `se-container` 容器（指令）和 `se` 组件来表示一个表单，一个简单HTML模板表单是这么写的：

```html
<form nz-form #f="ngForm" se-container="2">
  <se label="App Key">
    <input type="text" nz-input [(ngModel)]="i.ak" name="ak" required>
  </se>
  <se label="App Secret">
    <input type="text" nz-input [(ngModel)]="i.sk" name="sk" required maxlength="32">
  </se>
  <se>
    <button nz-button nzType="primary" [disabled]="f.invalid">Save</button>
  </se>
</form>
```

同时，会自动处理所有 Angular 内置校验指令，例如：`required`、`maxlength`、`min`、`pattern` 等，并以红色边框来表示无效值状态。

## API

### se-container

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[gutter]` | 间距，当 `nzLayout:horizontal` 时有效 | `number` | `32`
`[se-container]` | 指定表单元素最多分几列展示，最终一行几列由 col 配置结合[响应式规则](/theme/responsive)决定 | `'1','2','3','4','5','6'` | -
`[col]` | 指定表单元素最多分几列展示，最终一行几列由 col 配置结合[响应式规则](/theme/responsive)决定 | `'1','2','3','4','5','6'` | -
`[labelWidth]` | 表单元素默认标签文本宽度，单位：`px` | `number` | `150`
`[nzLayout]` | 表单布局，当 `inline` 时强制大小为 `compact` | `'horizontal','vertical','inline'` | `'horizontal'`
`[size]` | 大小 `compact` 紧凑型，强制忽略 `error`、`extra` 展示 | `'default','compact'` | `'default'`
`[firstVisual]` | 是否立即呈现错误视觉 | `boolean` | `false`
`[line]` | 分隔线 | `boolean` | `false`
`[title]` | 标题 | `string,TemplateRef<void>` | -

### se

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[col]` | 指定表单元素最多分几列展示，最终一行几列由 col 配置结合[响应式规则](/theme/responsive)决定（继承于 `se-container`） | `'1','2','3','4','5','6'` | -
`[label]` | 标签文本 | `string,TemplateRef<void>` | -
`[labelWidth]` | 标签文本宽度，单位：`px`（继承于 `se-container`） | `number` | -
`[optional]` | 标签可选信息 | `string` | -
`[optionalHelp]` | 标签可选帮助 | `string` | -
`[error]` | 错误描述 | `string` | -
`[extra]` | 额外提示信息 | `string` | -
`[required]` | 是否必填项标识符 | `string` | -
`[controlClass]` | 控件区域样式名 | `string` | -
`[id]` | 自定义组件 `id` | `string` | -
`[line]` | 分隔线（继承于 `se-container`） | `boolean` | -

### se-title

用于展示标题，单独一行。

## 常见问题

### 什么时候自定义组件id

点击表单的 Label 会将光标定位至相应组件下，而 `ng-edit` 会自动根据 `ngModel` 状态合理的设定 `id`，绝大多数情况下你无须关心 `id` 的绑定状态，当然若你手动指定 `id` 值则优先级更高但同时你需要自己维护组件对应的 `id` 值。
