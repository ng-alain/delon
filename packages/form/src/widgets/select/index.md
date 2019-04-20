---
title: select
subtitle: 选择器
type: Widgets
---

下拉选择器。

## API

### schema 属性

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[enum]` | 数据源 | `SFSchemaEnumType[]` | -
`[readOnly]` | 禁用状态  | `boolean` | -

### ui 属性

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[asyncData]` | 异步数据源 | `() => Observable<SFSchemaEnumType[]>` | -
`[size]` | 大小，等同 `nzSize` | `string` | -
`[placeholder]` | 在文字框中显示提示讯息 | `string` | -
`[autoClearSearchValue]` | 是否在选中项后清空搜索框，只在 `mode` 为 `multiple` 或 `tags` 时有效。 | `boolean` | `true`
`[allowClear]` | 支持清除 | `boolean` | `false`
`[autoFocus]` | 默认获取焦点 | `boolean` | `false`
`[dropdownClassName]` | 下拉菜单的 className 属性 | `string` | -
`[dropdownMatchSelectWidth]` | 下拉菜单和选择器同宽 | `boolean` | `true`
`[dropdownStyle]` | 下拉菜单的 style 属性 | `object` | -
`[serverSearch]` | 是否使用服务端搜索，当为 true 时，将不再在前端对 nz-option 进行过滤 | `boolean` | `false`
`[maxMultipleCount]` | 最多选中多少个标签| `number` | `Infinity`
`[mode]` | 设置 nz-select 的模式，`tags` 建议增加 `default: null`，否则可能会遇到初始化有一个空的标签。 | `multiple,tags,default` | `default`
`[notFoundContent]` | 当下拉列表为空时显示的内容 | `string` | -
`[showSearch]` | 使单选模式可搜索 | `boolean` | `false`
`[onSearch]` | 搜索内容变化回调函数，参数为搜索内容，必须返回 `Promise` 对象 | `(text: string) => Promise<any[]>` | -
`[tokenSeparators]` | 在 tags 和 multiple 模式下自动分词的分隔符 | `string[]` | `[]`
`[maxTagCount]` | 最多显示多少个 tag | `number` | -
`[change]` | 选中的 nz-option 发生变化时，调用此函数 | `(ngModel:any丨any[])=>{}` | -
`[openChange]` | 下拉菜单打开关闭回调函数 | `(nzOpen:boolean)=>{}` | -
`[scrollToBottom]` | 下拉菜单滚动到底部回调，可用于作为动态加载的触发条件 | `()=>{}` | -
