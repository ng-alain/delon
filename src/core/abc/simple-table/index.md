---
title: simple-table
subtitle: 简易表格
order: 10
cols: 1
module: AdSimpleTableModule
---

现有的 `nz-table` 已经足够满足绝大多数需求，然而在中台系统中绝大多数在使用过程中只是需要一个简单的数据表格展示，但现有的使用规则很繁琐：

- HTML模板存在大量 `td`、`th`
- 表格数据来源于 HTTP
- 繁琐的选择框
- 简单的排序、过滤动作

而 `simple-table` 是在 `nz-table` 向上构建更高价的组件，同时以更简洁的方式解决上述问题。

## 特性

- 后端 HTTP 优先
- Column 配置
- 简化选择框处理
- 简化单选框处理
- 自定义渲染列
- 简化模态框处理
- 简化按钮组处理
- 排序可配置
- 过滤可配置
- 切换分页时自动返回表格顶部
- 允许设置分页左、中、右对齐
- 支持对所有表格统一配置默认项
- 简化页码、每页数量变化时回调处理

## API

### simple-table

参数 | 说明 | 类型 | 默认值
----|------|-----|------
data | 数据源 | `string, any[], Observable<any[]>` | -
**已过期** url | 后端URL地址，请使用 `data` 属性，`0.6.0` 后将移除 | `string` | -
extraParams | 额外请求参数，默认自动附加 `pi`、`ps` 至URL | `any` | -
reqMehtod | 请求方法 | `string` | `GET`
reqHeader | 请求 `header` | `any` | -
reqBody | 请求 `body` | `any` | -
reqError | 请求异常时回调 | `EventEmitter` | -
reqReName | 重命名请求参数 `pi`、`ps` | `Object` | -
resReName | 重命名返回参数 `total`、`list` | `Object` | -
columns | 列描述 | `SimpleTableColumn[]` | -
ps | 每页数量，当设置为 `0` 表示不分页，默认：`10` | `number` | `10`
bordered | 是否显示边框 | `boolean` | `false`
size | table大小 | `small,middle,default` | `default`
scroll | 纵向支持滚动，也可用于指定滚动区域的高度：`{ y: 300 }` | `{ y: number }` | -
showSizeChanger | 是否显示pagination中改变页数 | `boolean` | `false`
pageSizeSelectorValues | pagination中每页显示条目数下拉框值 | `number[]` | `[10, 20, 30, 40, 50]`
showQuickJumper | 是否显示pagination中快速跳转 | `boolean` | `false`
showTotal | 是否显示总数据量 | `boolean` | `false`
isPageIndexReset | 数据变更后是否保留在数据变更前的页码 | `boolean` | `true`
toTopInChange | 切换分页时返回顶部 | `boolean` | `true`
pagePlacement | 分页方向 | `left,center,right` | `right`
multiSort | 是否多排序，建议后端支持时使用 | `boolean` | `false`
sortReName | 重命名排序值，`columns` 的重命名高于属性 | `{ ascend?: string, descend?: string }` | -
preDataChange | 数据处理前回调，一般在使用 `url` 时很有用 | `(data: SimpleTableData[]) => SimpleTableData[]` | -
body | 额外 `body` 内容，一般用于添加合计行 | `TemplateRef<any>` | -
footer | `footer` 内容 | `TemplateRef<any>` | -
change | 页码、每页数量变化时回调 | `EventEmitter` | -
checkboxChange | checkbox变化时回调，参数为当前所选清单 | `EventEmitter` | -
radioChange | radio变化时回调，参数为当前所选 | `EventEmitter` | -
sortChange | 排序回调 | `EventEmitter` | -
filterChange | Filter回调 | `EventEmitter` | -

**方法**

参数 | 说明
----|------
`export(urlOrData?: string | any[], opt?: STExportOptions)` | 导出Excel，确保已经注册 `AdXlsxModule` | `Function` | -

> `urlOrData` 一般用于需要导出所有页时重新指定带有所有数据的URL地址或本地数据数组，当所有参数都不指定时自动读书当前页数据。

*STExportOptions*

参数 | 说明 | 类型 | 默认值
----|------|-----|------
sheetname | 工作溥名 | `string` | Sheet1
filename | 保存的文件名 | `string` | export.xslx
callback | 保存前的回调 | `(wb: WorkBook) => void` | -

### SimpleTableData

参数 | 说明 | 类型 | 默认值
----|------|-----|------
checked? | 选择框或单选框状态值 | `boolean` | -
disabled? | 选择框或单选框 `disabled` 值 | `boolean` | -
[key: string]: any | - | - | -

### SimpleTableColumn

参数 | 说明 | 类型 | 默认值
----|------|-----|------
title | 表格标题 | `string` | -
i18n? | 表格标题i18n | `string` | -
type? | `checkbox` 多选； `radio` 单选；`img` 图像且居中；`number` 数字且居右；`currency` 货币且居右；`date` 日期格式且居中；`yn` 将`boolean`类型徽章化 [document](http://ng-alain.com/docs/data-render#yn) | `string` | -
index? | 列数据在数据项中对应的 key，支持 `a.b.c` 的嵌套写法 | `string, string[]` | -
buttons? | 按钮组 | `SimpleTableButton[]` | -
width? | 列宽，例如：`10%`、`100px` | `string` | -
format? | 格式化列值 | `function(cell: any, row: any)` | -
sort? | 排序的受控属性，`asc`、`desc` | `string` | -
sorter? | 排序函数，本地排序使用一个函数(参考 [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) 的 compareFunction)；若需要后端排序直接返回 `true` | `Function` | -
sortKey? | 排序的后端相对应的KEY，默认使用 `index` 属性 | `string` | -
sortReName? | 排序的后端相对应的VALUE | `{ ascend?: string, descend?: string }` | -
filters? | 表头的筛选菜单项，至少一项以上才会生效 | `SimpleTableFilter[]` | -
filter? | 本地模式下，确定筛选的运行函数；只有当属性存在时筛选才会真的生效；如果是AJAX直接返回 true | `SimpleTableFilter[]` | -
filtered? | 标识数据是否经过过滤，筛选图标会高亮 | `boolean` | -
filterIcon? | 自定义 fiter 图标 | `string` | `anticon anticon-filter`
filterMultiple? | 是否多选 | `boolean` | `true`
filterConfirmText? | filter 确认按钮文本 | `string` | `确认`
filterClearText? | filter 清除按钮文本 | `string` | `重置`
filterKey? | 过滤的后端相对应的KEY，默认使用 `index` 属性 | `string` | -
filterReName? | 过滤的后端相对应的VALUE；默认当 `filterMultiple` 时以英文逗号拼接的字符串；参数为 `filters` 原样数组；返回为 Object 对象 | `(list: SimpleTableFilter[]) => Object` | -
selections? | 选择功能配置 | `SimpleTableSelection[]` | -
className? | 列 `class` 属性值，例如：；`text-center` 居中； `text-right` 居右； `text-danger` 异常色 | `string` | -
colSpan? | 合并列 | `number` | -
numberDigits? | 数字格式，`type=number` 有效 | `string` | -
dateFormat? | 日期格式，`type=date` 有效 | `string` | `YYYY-MM-DD HH:mm`
ynTruth? | 真值条件，`type=yn` 有效，（默认：`true`） | `any` | -
ynYes? | 徽章 `true` 时文本，`type=yn` 有效 | `string` | `是`
ynNo? | 徽章 `false` 时文本，`type=yn` 有效 | `string` | `否`
exported? | 是否允许导出 | `boolean` | `true`
acl? | ACL权限，等同 `can()` 参数值 | `boolean` | -

### SimpleTableButton

参数 | 说明 | 类型 | 默认值
----|------|-----|------
text | 文本 | `string` | -
i18n? | 文本i18n | `string` | -
format | 格式化文本 | `(record: any, btn: SimpleTableButton) => string` | -
type | 按钮类型 | `none,del,modal,static` | -
click | 点击回调；**函数：** `type=modal` 只会在 `确认` 时触发且 `modal` 参数有效<br>**reload：** 重新加载表格数据 | `(record: any, modal?: any, instance?: SimpleTableComponent) => void | reload` | -
pop | 是否需要气泡确认框 | `string` | -
popTitle | 气泡确认框内容 | `string` | 确认删除吗？
component | 对话框组件对象，务必在 `entryComponents` 注册 | `any` | -
params | 对话框参数 | `(record: any) => Object` | -
paramName | 目标组件的接收参数名 | `string` | record
size | 对话框大小 | `string` | `lg`
modalOptions | 对话框额外参数，见 [ModalHelper](http://ng-alain.com/docs/service#ModalHelper) | `any` | -
children | 下拉菜单，当存在时以 `dropdown` 形式渲染；只支持一级 | `SimpleTableButton[]` | -
acl? | ACL权限，等同 `can()` 参数值 | `boolean` | -

### SimpleTableSelection

参数 | 说明 | 类型 | 默认值
----|------|-----|------
text | 文本 | `string` | -
select | 回调 | `Function` | -
acl? | ACL权限，等同 `can()` 参数值 | `boolean` | -

### SimpleTableFilter

参数 | 说明 | 类型 | 默认值
----|------|-----|------
text | 文本 | `string` | -
value | 值 | `any` | -
checked? | 是否选中 | `boolean` | -
acl? | ACL权限，等同 `can()` 参数值 | `boolean` | -

### SimpleTableConfig

调整统一默认参数值：

```typescript
// 调整所有 `simple-table` 每页数据为 15 条
export function simpleTableConfigFactory() {
    return Object.assign(new SimpleTableConfig(), { ps: 15 });
}

@NgModule({
    providers: [
        { provide: SimpleTableConfig, useFactory: simpleTableConfigFactory }
    ]
})
```

参数 | 说明 | 类型 | 默认值
----|------|-----|------
ps | 每页数量，当设置为 `0` 表示不分页，默认：`10` | `number` | `10`
bordered | 是否显示边框 | `boolean` | `false`
size | table大小 | `small,middle,default` | `default`
showSizeChanger | 是否显示pagination中改变页数 | `boolean` | `false`
pageSizeSelectorValues | pagination中每页显示条目数下拉框值 | `number[]` | `[10, 20, 30, 40, 50]`
showQuickJumper | 是否显示pagination中快速跳转 | `boolean` | `false`
showTotal | 是否显示总数据量 | `boolean` | `false`
isPageIndexReset | 数据变更后是否保留在数据变更前的页码 | `boolean` | `true`
toTopInChange | 切换分页时返回顶部 | `boolean` | `true`
pagePlacement | 分页方向 | `left,center,right` | `right`
reqReName | 重命名请求参数 `pi`、`ps`；例如：`{ pi: 'Page' }` `pi` 会被替换成 Page | `Object` | -
resReName | 重命名返回参数 `total`、`list`；例如：`{ total: 'Total' }` Total 会被当作 `total` | `Object` | -
sortReName | 重命名排序值，`columns` 的重命名高于属性 | `{ ascend?: string, descend?: string }` | -
modalParamsName | 指定模态框目标组件的接收参数名 | `string` | record

## 刷新表格

一般用于表单搜索时。

```html
<simple-table #st></simple-table>
<button (click)="st.load()"></button>
<button (click)="st.reset()">重置</button>
```
