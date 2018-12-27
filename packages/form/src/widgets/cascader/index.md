---
title: cascader
subtitle: 级联选择
type: Widgets
---

一般用于省市区，公司层级，事物分类等。

## 注意事项

- `default` 或 `formData` 值始终应该保持一个数组，例如：城市级联可能只存储叶节点 `value`，此时需要手动处理并给出完整数据链 `value` 数组

## 数据源说明

**静态**

指一次性获取数据，数据来源于 `asyncData`、`enum`。

**实时**

指每一次每一次选择会触发HTTP请求，数据来源于 `asyncData`；包含三个参数 `(node: CascaderOption, index: number, me: CascaderWidget) => PromiseLike<any>`，其中 `me` 表示当前小部件实例。

受限于 `nz-cascader` 还不支持 OnPush 模式，因此数据请求返回后，**务必调用** `me.detectChanges(true)` 触发小部件变更检测。

## API

### schema 属性

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[enum]` | 静态数据源 | `SFSchemaEnumType[]` | -
`[readOnly]` | 禁用状态  | `boolean` | -

### ui 属性

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[asyncData]` | 异步静态数据源 | `(node: CascaderOption, index: number, me: CascaderWidget) => PromiseLike<any>` | -
`[size]` | 大小，等同 `nzSize` | `string` | -
`[placeholder]` | 在文字框中显示提示讯息 | `string` | -
`[showSearch]` | 是否支持搜索 | `bool` | `false`
`[allowClear]` | 是否显示清除按钮 | `bool` | `true`
`[clearText]` | 清除按钮的标题 | `string` | `清除`
`[showArrow]` | 是否显示箭头 | `bool` | `true`
`[menuClassName]` | 自定义浮层类名 | `string` | -
`[nzMenuStyle]` | 自定义浮层样式 | `string` | -
`[columnClassName]` | 弹出菜单中数据列的自定义样式 | `string` | -
`[data]` | 初始化列数据，用于第一列的数据，子列通过选项的 `children` 加载，或者通过 `load` 事件异步加载。 | `Array` | -
`[enableCache]` | 是否缓存异步加载的数据，若每次异步加载的数据都是变化的，需将该值设置为 false | `bool` | `true`
`[expandTrigger]` | 次级菜单的展开方式，可选 'click' 和 'hover' | `string` | `click`
`[changeOnSelect]` | 当此项为 true 时，点选每级菜单选项值都会发生变化，具体见上面的演示 | `bool` | `false`
`[changeOn]` | 可通过自定义的函数来判断点击菜单选项是否应该发生变化，当函数返回 true 时，将发生变化 | `(option: CascaderOption, level: number) => boolean` | -
`[triggerAction]` | 触发菜单出现的行为 | `('click', 'hover')[]` | `['click']`
`[valueProperty]` | 值 `value` 的属性名称 | `string` | `value`
`[labelProperty]` | 值 `label` 的属性名称 | `string` | `label`
`[visibleChange]` | 异步加载事件 | `(value: boolean) => void` | -
`[change]` | 选项值变更事件 | `(values: any[]) => void` | -
`[selectionChange]` | 选项变更事件 | `(values: CascaderOption[]) => void` | -
`[select]` | 选项被选中事件 | `(values: { option: CascaderOption, index: number }) => void` | -
`[clear]` | 内容被清空事件 | `() => void` | -
