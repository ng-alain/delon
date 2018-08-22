---
type: CURD
title: simple-html-form
subtitle: 简易HTML模板表单
cols: 1
module: AdSHFModule
config: AdSHFConfig
---

简化HTML模板表单的构建方式。

它由 `shf-wrap` 容器（指令）和 `shf-item` 表单元素来表示一个表单，有时候甚至不需要容器，一个简单HTML模板表单是这么写的：

```html
<form nz-form #f="ngForm" shf-wrap>
  <shf-item label="App Key">
    <input type="text" nz-input [(ngModel)]="i.ak" name="ak" required>
  </shf-item>
  <shf-item label="App Secret">
    <input type="text" nz-input [(ngModel)]="i.sk" name="sk" required maxlength="32">
  </shf-item>
  <shf-item>
    <button nz-button nzType="primary" [disabled]="f.invalid">Save</button>
  </shf-item>
</form>
```

同时，会自动处理所有 Angular 内置校验指令，例如：`required`、`maxlength`、`min` 等，并以红色边框来表示无效值状态。

## API

### shf-wrap

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[shf-wrap]` | 表单元素默认占用列数 | `number` | `2`
`[labelWidth]` | 表单元素默认标签文本宽度，单位：`px` | `number` | `100`

### shf-item

参数 | 类型 | 说明
----|------|-----
`[col]` | 元素默认占用列数 | `number` | -
`[label]` | 标签文本 | `string \| TemplateRef<any>` | -
`[labelWidth]` | 标签文本宽度，单位：`px` | `number` | -
`[controlClass]` | 控件区域样式名 | `string` | -

## 常见问题

### 什么是列数

antd 的栅格系统是由 `24` 格子组成，这里的列数是指以 `24` 为基准值进行平分，例如：

- 列数 `1` 表示占用 `24` 个格子
- 列数 `2` 表示占用 `12` 个格子
- 列数 `3` 表示占用 `8` 个格子
