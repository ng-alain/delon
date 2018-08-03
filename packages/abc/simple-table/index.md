---
title: simple-table
subtitle: 简易表格
cols: 1
module: AdSimpleTableModule
config: AdSimpleTableConfig
---

`simple-table` 并不是在创造另一个表格组件，而是在 `nz-table` 基础上以**可配置**形式渲染表格，在中后台里这种方式可以满足绝大多数场景，但又可以更易地管理表格渲染动作。

## 关于数据源

`data` 支持三种不同格式数据源，整体分为：URL和静态数据两类；但可以透过参数的配置达到不同的效果，同时有非常多参数可通过 `AdSimpleTableConfig` 重置默认值，使整个 `<simple-table>` 达到极简。

### URL

指的是通过一个 URL 字符串来获取数据。

- 通过 `extraParams`、`reqMethod` 等参数解决请求数据格式问题
- 通过 `resReName` 重置数据 `key` 而无须担心后端数据格式是否满足 `simpel-table` 需求
- 通过 `preDataChange` 可以对表格渲染前对数据进一步优化
- 通过 `zeroIndexedOnPage` 可以调整 http 请求时 `pi` 参数是否遵循 0 基索引，默认情况下为 1 基索引

### 静态数据

指的是通过指定值为 `any[]` 或 `Observable<any[]>`，二者都遵循以下规则：

- `frontPagination` 前端分页，默认：`true`
  - `true` 由 `simple-table` 根据 `data` 长度受控分页，包括：排序、过滤等
  - `false` 由用户通过 `total` 和 `data` 参数受控分页，并维护 `(change)` 当分页变更时重新加载数据
- `showPagination` 是否显示分页器；当未指定时若 `ps>total` 情况下自动不显示

## API

### simple-table

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[columns]` | 列描述 | `SimpleTableColumn[]` | -
`[data]` | 数据源 | `string, any[], Observable<any[]>` | -
`[extraParams]` | 额外请求参数，默认自动附加 `pi`、`ps` 至URL | `any` | -
`[reqMethod]` | 请求方法 | `string` | `GET`
`[reqHeader]` | 请求 `header` | `any` | -
`[reqBody]` | 请求 `body` | `any` | -
`[reqError]` | 请求异常时回调 | `EventEmitter` | -
`[reqReName]` | 重命名请求参数 `pi`、`ps` | `{pi:string;ps:string}` | -
`[resReName]` | 重命名返回参数 `total`、`list`，支持 `a.b.c` 的嵌套写法 | `{total:string;list:string}` | -
`[preDataChange]` | 数据处理前回调，一般在使用 `url` 时很有用 | `(data: SimpleTableData[]) => SimpleTableData[]` | -
`[pi]` | 当前页码 | `number` | `10`
`[ps]` | 每页数量，当设置为 `0` 表示不分页，默认：`10` | `number` | `10`
`[zeroIndexedOnPage]` | 后端分页是否采用`0`基索引，只在`data`类型为`string`时有效 | `boolean` | `false`
`[frontPagination]` | 前端分页，当 `data` 为 `any[]` 或 `Observable<any[]>` 有效 | `boolean` | `true`
`[showPagination]` | 是否显示分页器；当未指定时若 `ps>total` 情况下自动不显示 | `boolean` | -
`[pagePlacement]` | 分页方向 | `left,center,right` | `right`
`[noResult]` | 无数据时显示内容 | `string | TemplateRef<void>` | -
`[bordered]` | 是否显示边框 | `boolean` | `false`
`[size]` | table大小 | `small,middle,default` | `default`
`[loadingDelay]` | 延迟显示加载效果的时间（防止闪烁） | `number` | `0`
`[scroll]` | 固定表头，纵向支持滚动，也可用于指定滚动区域的高度：`{ y: '300px' }` | `{ y: string }` | -
`[showSizeChanger]` | 是否显示pagination中改变页数 | `boolean` | `false`
`[pageSizeOptions]` | pagination中每页显示条目数下拉框值 | `number[]` | `[10, 20, 30, 40, 50]`
`[showQuickJumper]` | 是否显示pagination中快速跳转 | `boolean` | `false`
`[showTotal]` | 是否显示总数据量，字符串表示自定义模板（支持三个变量名：`total` 表示数据总量、`range[0]` 和 `range[1]` 表示当前数据范围；**变量名**统一使用双引号包裹） | `boolean, string` | `false`
`[isPageIndexReset]` | 数据变更后是否保留在数据变更前的页码 | `boolean` | `true`
`[toTopInChange]` | 切换分页时返回顶部 | `boolean` | `true`
`[toTopOffset]` | 返回顶部偏移值 | `number` | `100`
`[multiSort]` | 是否多排序，当 `sort` 多个相同值时自动合并，建议后端支持时使用 | `boolean, SimpleTableMultiSort` | `false`
`[sortReName]` | 重命名排序值，`columns` 的重命名高于属性 | `{ ascend?: string, descend?: string }` | -
`(sortChange)` | 排序回调 | `EventEmitter` | -
`#header` | `footer` 标题 | `TemplateRef<void>` | -
`#body` | 额外 `body` 内容，一般用于添加合计行 | `TemplateRef<void>` | -
`#footer` | `footer` 底部 | `TemplateRef<void>` | -
`#expand` | `expand` 可展开，当数据源中包括 `expand` 表示展开状态 | `TemplateRef<void>` | -
`(change)` | 页码、每页数量变化时回调 | `EventEmitter` | -
`(checkboxChange)` | checkbox变化时回调，参数为当前所选清单 | `EventEmitter` | -
`(radioChange)` | radio变化时回调，参数为当前所选 | `EventEmitter` | -
`(filterChange)` | Filter回调 | `EventEmitter` | -
`[rowClickTime]` | 行单击多少时长之类为双击（单位：毫秒） | `number` | `200`
`(rowClick)` | 行单击回调 | `EventEmitter<SimpleTableRowClick>` | -
`(rowDblClick)` | 行双击回调 | `EventEmitter<SimpleTableRowClick>` | -

### 组件方法

参数 | 返回值 | 说明
----|-----|-----
`load(pi = 1, extraParams?: any)` | `void` | 根据页码重新加载数据<br>`pi` 指定当前页码，`-1` 表示不重置页码，只对当前页进行刷新，默认：`1`
`reload(extraParams?: any)` | `void` | 刷新当前页
`reset(extraParams?: any)` | `void` | 重置且重新设置 `pi` 为 `1`，包含单多选、排序、过滤状态（同默认状态一并清除）
`clearCheck()` | `void` | 清除所有 `checkbox`
`clearRadio()` | `void` | 清除所有 `radio`
`export(urlOrData?: string | any[], opt?: STExportOptions)` | `void` | 导出Excel，确保已经注册 `AdXlsxModule`

一些细节：

- `extraParams` 若不传递表示保留原始值
- `urlOrData` 一般用于需要导出所有页时重新指定带有所有数据的URL地址或本地数据数组，当所有参数都不指定时自动读书当前页数据。

**使用方式**

```ts
@Component({
  template: `
    <simple-table #st></simple-table>
    <button (click)="st.load()"></button>
    <button (click)="st.reset()">重置</button>
  `
})
class TestComponent {
  @ViewChild('st') comp: SimpleTableComponent;
  // this.comp.load();
}
```

*STExportOptions*

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[sheetname]` | 工作溥名 | `string` | `Sheet1`
`[filename]` | 保存的文件名 | `string` | `export.xslx`
`[callback]` | 保存前的回调 | `(wb: WorkBook) => void` | -

### SimpleTableData

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[checked]` | 选择框或单选框状态值 | `boolean` | -
`[disabled]` | 选择框或单选框 `disabled` 值 | `boolean` | -

### SimpleTableColumn

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[title]` | 表格标题 | `string` | -
`[i18n]` | 表格标题i18n | `string` | -
`[type]` | `checkbox` 多选；`radio` 单选；`link` 链接，可触发 `click`；`img` 图像且居中；`number` 数字且居右；`currency` 货币且居右；`date` 日期格式且居中；`badge` [徽标](https://ng.ant.design/components/badge/zh)；`tag` [标签](https://ng.ant.design/components/tag/zh)；`yn` 将`boolean`类型徽章化 [document](http://ng-alain.com/docs/data-render#yn) | `string` | -
`[index]` | 列数据在数据项中对应的 key，支持 `a.b.c` 的嵌套写法 | `string, string[]` | -
`[render]` | 自定义渲染ID | `string` | -
`[renderTitle]` | 标题自定义渲染ID | `string` | -
`[default]` | 当不存在数据时以默认值替代 | `string` | -
`[buttons]` | 按钮组 | `SimpleTableButton[]` | -
`[width]` | 列宽，例如：`10%`、`100px` | `string` | -
`[fixed]` | 固定前后列，当指定时务必指定 `width` 否则视为无效 | `left,right` | -
`[format]` | 格式化列值 | `function(cell: any, row: any)` | -
`[sort]` | 排序的受控属性，`asc`、`desc` | `string` | -
`[sorter]` | 排序函数，本地排序使用一个函数(参考 [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) 的 compareFunction)；若需要后端排序直接返回 `true` | `Function` | -
`[sortKey]` | 排序的后端相对应的KEY，默认使用 `index` 属性<br>若 `multiSort: false` 时：`sortKey: 'name' => ?name=1&pi=1`<br>若 `multiSort: true` 允许多个排序 key 存在，或使用 `SimpleTableMultiSort` 进行多key合并 | `string` | -
`[sortReName]` | 排序的后端相对应的VALUE | `{ ascend?: string, descend?: string }` | -
`[filters]` | 表头的筛选菜单项，至少一项以上才会生效 | `SimpleTableFilter[]` | -
`[filter]` | 本地模式下，确定筛选的运行函数；只有当属性存在时筛选才会真的生效；如果是AJAX直接返回 true | `(filter: SimpleTableFilter, record: any) => boolean` | -
`[filtered]` | 标识数据是否经过过滤，筛选图标会高亮 | `boolean` | -
`[filterIcon]` | 自定义 fiter 图标 | `string` | `anticon anticon-filter`
`[filterMultiple]` | 是否多选 | `boolean` | `true`
`[filterConfirmText]` | filter 确认按钮文本 | `string` | `确认`
`[filterClearText]` | filter 清除按钮文本 | `string` | `重置`
`[filterKey]` | 过滤的后端相对应的KEY，默认使用 `index` 属性 | `string` | -
`[filterReName]` | 过滤的后端相对应的VALUE；默认当 `filterMultiple` 时以英文逗号拼接的字符串；参数为 `filters` 原样数组；返回为 Object 对象 | `(list: SimpleTableFilter[]) => Object` | -
`[selections]` | 选择功能配置 | `SimpleTableSelection[]` | -
`[className]` | 列 `class` 属性值，例如：；`text-center` 居中； `text-right` 居右； `text-danger` 异常色 | `string` | -
`[colSpan]` | 合并列 | `number` | -
`[numberDigits]` | 数字格式，`type=number` 有效 | `string` | -
`[dateFormat]` | 日期格式，`type=date` 有效 | `string` | `YYYY-MM-DD HH:mm`
`[ynTruth]` | 真值条件，`type=yn` 有效，（默认：`true`） | `any` | -
`[ynYes]` | 徽章 `true` 时文本，`type=yn` 有效 | `string` | `是`
`[ynNo]` | 徽章 `false` 时文本，`type=yn` 有效 | `string` | `否`
`[exported]` | 是否允许导出 | `boolean` | `true`
`[acl]` | ACL权限，等同 `can()` 参数值 | `boolean` | -
`[click]` | 链接回调 | `(record: any, instance?: SimpleTableComponent) => void` | -
`[badge]` | 徽标配置项 | `SimpleTableBadge` | -
`[tag]` | 徽标配置项 | `SimpleTableTag` | -

### SimpleTableButton

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[text]` | 文本 | `string` | -
`[i18n]` | 文本i18n | `string` | -
`[format]` | 格式化文本 | `(record: any, btn: SimpleTableButton) => string` | -
`[type]` | 按钮类型 | `none,del,modal,static` | -
`[click]` | 点击回调；**函数：** `type=modal` 只会在 `确认` 时触发且 `modal` 参数有效<br>**reload：** 重新刷新当前页<br>**load：** 重新加载数据，并重置页码为：`1` | `(record: any, modal?: any, instance?: SimpleTableComponent) => void | reload` | -
`[pop]` | 是否需要气泡确认框 | `string` | -
`[popTitle]` | 气泡确认框内容 | `string` | 确认删除吗？
`[component]` | 对话框组件对象，务必在 `entryComponents` 注册 | `any` | -
`[params]` | 对话框参数 | `(record: any) => Object` | -
`[paramName]` | 目标组件的接收参数名 | `string` | record
`[size]` | 对话框大小 | `string` | `lg`
`[modalOptions]` | 对话框额外参数，见 [ModalHelper](http://ng-alain.com/docs/service#ModalHelper) | `any` | -
`[children]` | 下拉菜单，当存在时以 `dropdown` 形式渲染；只支持一级 | `SimpleTableButton[]` | -
`[acl]` | ACL权限，等同 `can()` 参数值 | `boolean` | -
`[iif]` | 自定义条件表达式，原 `if` 属性 `1.1.0` 以后将移除 | `boolean` | `() => true`

### SimpleTableSelection

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[text]` | 文本 | `string` | -
`[select]` | 选择项点击回调，允许对参数 `data.checked` 进行操作 | `(data: SimpleTableData[]) => void` | -
`[acl]` | ACL权限，等同 `can()` 参数值 | `boolean` | -

### SimpleTableFilter

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[text]` | 文本 | `string` | -
`[value]` | 值 | `any` | -
`[checked]` | 是否选中 | `boolean` | -
`[acl]` | ACL权限，等同 `can()` 参数值 | `boolean` | -

### SimpleTableBadge

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[text]` | 文本 | `string` | -
`[color]` | 徽标颜色值 | `success,processing,default,error,warning` | -
