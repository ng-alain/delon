---
title: cascader
subtitle: 级联选择
type: Non-built-in widgets
---

一般用于省市区，公司层级，事物分类等。

## 如何使用

非内置模块，需要额外在 [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9) 注册 `withCascaderWidget`。

## 注意事项

- `default` 或 `formData` 值始终应该保持一个数组，例如：城市级联可能只存储叶节点 `value`，此时需要手动处理并给出完整数据链 `value` 数组

## 数据源说明

**静态**

指一次性获取数据，数据来源于 `asyncData`、`enum`。

**实时**

指每一次每一次选择会触发HTTP请求，数据来源于 `asyncData`；包含三个参数 `(node: NzCascaderOption, index: number, me: CascaderWidget) => PromiseLike<any>`，其中 `me` 表示当前小部件实例。

## API

### schema 属性

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[enum]` | 静态数据源 | `SFSchemaEnumType[]` | - |
| `[readOnly]` | 禁用状态 | `boolean` | - |

### ui 属性

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[asyncData]` | 异步静态数据源 | `(node: NzCascaderOption, index: number, me: CascaderWidget) => PromiseLike<any>` | - |
| `[size]` | 大小，等同 `nzSize` | `string` | - |
| `[variant]` | 变体 | `outlined,borderless,filled,underlined` | `outlined` |
| `[autoFocus]` | 默认获取焦点 | `boolean` | `false` |
| `[placeholder]` | 在文字框中显示提示讯息 | `string` | - |
| `[showSearch]` | 是否支持搜索 | `bool` | `false` |
| `[allowClear]` | 是否显示清除按钮 | `bool` | `true` |
| `[clearValue]` | 清空时默认值 | `any` | `undefined` |
| `[clearText]` | 清除按钮的标题 | `string` | `清除` |
| `[showArrow]` | 是否显示箭头 | `bool` | `true` |
| `[showInput]` | 是否显示输入框 | `bool` | `true` |
| `[menuClassName]` | 自定义浮层类名 | `string` | - |
| `[menuStyle]` | 自定义浮层样式 | `string` | - |
| `[columnClassName]` | 弹出菜单中数据列的自定义样式 | `string` | - |
| `[notFoundContent]` | 当下拉列表为空时显示的内容 | `string` | - |
| `[data]` | 初始化列数据，用于第一列的数据，子列通过选项的 `children` 加载，或者通过 `load` 事件异步加载。 | `Array` | - |
| `[expandTrigger]` | 次级菜单的展开方式，可选 'click' 和 'hover' | `string` | `click` |
| `[changeOnSelect]` | 当此项为 true 时，点选每级菜单选项值都会发生变化，具体见上面的演示 | `bool` | `false` |
| `[changeOn]` | 可通过自定义的函数来判断点击菜单选项是否应该发生变化，当函数返回 true 时，将发生变化 | `(option: NzCascaderOption, level: number) => boolean` | - |
| `[triggerAction]` | 触发菜单出现的行为 | `('click', 'hover')[]` | `['click']` |
| `[valueProperty]` | 值 `value` 的属性名称 | `string` | `value` |
| `[labelProperty]` | 值 `label` 的属性名称 | `string` | `label` |
| `[multiple]` | 是否多选 | `boolean` | `false` |
| `[suffixIcon]` | 自定义的选择框后缀图标 | `TemplateRef<any>, string` | - |
| `(openChange)` | 下拉菜单打开关闭回调函数 | `(status: boolean) => void` | - |
| `(change)` | 选项值变更事件 | `(values: any[]) => void` | - |
| `(selectionChange)` | 选项变更事件 | `(values: NzCascaderOption[]) => void` | - |
| `(clear)` | 内容被清空事件 | `() => void` | - |
