---
type: CURD
title: st
subtitle: Table
cols: 1
order: 1
module: STModule
config: STConfig
---

`st` is not creating another table component, but use **configurable** rendering table on base of `nz-table`. this method can satisfy most scenes in admin interfaces, but it's easier to rendering table.

## Data Source

`data` supports multiple formats of data sources: URL and static data.

### URL

The value is URL.

- Resolve request data format problems with parameters such as `req.params`, `req.method`
- Resolve backend data format through `res.reName` mapping data
- Use `res.process` to optimize data before rendering table
- Use `page.zeroIndexed` to adjust the http request when `pi` parameter follows the `0` base index, default is `1` base index
- Automatically cancel paging when the response body value is an array type
- Use `_HttpClient` send request, so applies to [AlainThemeConfig](/theme/http#AlainThemeConfig) configuration

### Static

The value is `STData[]` or `Observable<STData[]>`, both follow the following rules:

- `page.front` Front paging, default is `true`
  - `true` controlled by `st` according to `data` length, including: sorting, filtering, etc.
  - `false` controlled by the user through the `total` and `data` parameters, and maintains `(change)` when the page changes to reload data
- Whether `page.show` displays pager; if not specified, it will not be displayed automatically if `ps>total`

## API

### st

Property | Description | Type | Default
-------- | ----------- | ---- | -------
`[columns]` | Columns description | `STColumn[]` | -
`[data]` | Data source | `string, STData[], Observable<STData[]>` | -
`[req]` | Http request configuration | `STReq` | -
`[res]` | Http response configuration | `STRes` | -
`[pi]` | Page index | `number` | `1`
`[ps]` | Page size, `0` is no page, default is `10` | `number` | `10`
`[total]` | Total data count, should set when nzServerRender is true, default is `0` | `number` | `0`
`[page]` | Pager configuration | `STPage` | -
`[noResult]` | Custom no result content | `string,TemplateRef<void>` | -
`[bordered]` | Whether to show all table borders | `boolean` | `false`
`[size]` | Size of table | `'small','middle','default'` | `'default'`
`[widthMode]` | Set the table width mode | `STWidthMode` | -
`[rowClassName]` | Row class name of table | `(record: STData, index: number) => string` | -
`[loading]` | Loading status of table | `boolean` | `false`
`[loadingDelay]` | Specifies a delay in milliseconds for loading state (prevent flush) | `number` | `0`
`[scroll]` | Whether table can be scrolled in x/y direction, x or y can be a string that indicates the width and height of table body | `{ y?: string; x?: string }` | -
`[singleSort]` | Single sort config<br>If not specified, return: `columnName=ascend|descend`<br>If specified, return: `sort=columnName.(ascend|descend)` | `STSingleSort` | `null`
`[multiSort]` | Whether to mulit-sort, recommended use in URL data source | `boolean, STMultiSort` | `false`
`[rowClickTime]` | Click twice in the time range for double click, unit is millisecond | `number` | `200`
`[header]` | Table header renderer | `string,TemplateRef<void>` | -
`[footer]` | Table footer renderer | `string,TemplateRef<void>` | -
`[bodyHeader]` | Table extra body renderer in header, generally used to add total rows | `TemplateRef<STStatisticalResults>` | -
`[body]` | Table extra body renderer, generally used to add total rows | `TemplateRef<STStatisticalResults>` | -
`[widthConfig]` | Set col width can not used with width of STColumn | `string[]` | -
`[expandRowByClick]` | Whether to expand row by clicking anywhere in the whole row | `boolean` | `false`
`[expand]` | Whether current column include expand icon | `TemplateRef<void>` | -
`(change)` | Events | `EventEmitter<STChange>` | -
`(error)` | Error event | `EventEmitter<STError>` | -

### Methods

Name | Description
---- | -----------
`resetColumns()` | Reset columns
`load(pi = 1, extraParams?: any, options?: STLoadOptions)` | Load specified page
`reload(extraParams?: any, options?: STLoadOptions)` | Refresh current page
`reset(extraParams?: any, options?: STLoadOptions)` | Reset data and `pi` to `1`, including single multi-select, sort, filter status (Covered default state)
`removeRow(data: STData | STData[])` | Remove row
`clear(cleanStatus = true)` | Clear all data
`clearStatus()` | Clean all status (like this: single multi-select, sort, filter status)
`clearCheck()` | Clear all `checkbox`
`clearRadio()` | Clear all `radio`
`export(newData?: any[], opt?: STExportOptions)` | Export Excel and make sure you have imported `XlsxModule`

Some details:

- `extraParams` Keep original values when is null
- `STLoadOptions.merge` merge mode, if `true` merges with new values instead of replacing

**Usage**

```ts
@Component({
  template: `
    <st #st></st>
    <button (click)="st.load()">Load</button>
    <button (click)="st.reset()">Reset</button>
  `
})
class TestComponent {
  @ViewChild('st') comp: STComponent;
  // this.comp.load();
}
```

### STReq

Property | Description | Type | Default
-------- | ----------- | ---- | -------
`[type]` | Pagination type, `page` used `pi`, `ps`; `skip` used `skip`, `limit` | `page,skip` | `page`
`[params]` | Request parameters, default to auto append `pi`, `ps` to URL | `any` | -
`[method]` | Request method | `'POST','GET','HEAD','PUT','PATCH','DELETE'` | `'GET'`
`[body]` | Request body (only method is POST)  | `any` | -
`[headers]` | Request header | `any` | -
`[reName]` | Map name `pi`、`ps` | `STReqReNameType` | `{ pi: 'pi', ps: 'ps', skip: 'skip', limit: 'limit' }`
`[allInBody]` | Whether to request all parameter data into `body` (except `url` itself parameter) | `boolean` | `false`
`[process]` | Pre-request data processing | `(requestOptions: STRequestOptions) => STRequestOptions` | -

### STRes

Property | Description | Type | Default
-------- | ----------- | ---- | -------
`[reName]` | Map name `total`、`list`, could be set like `a.b.c` | `{total:string;list:string}` | -
`[process]` | Data preprocessing | `(data: STData[]) => STData[]` | -

### STPage

Property | Description | Type | Default
-------- | ----------- | ---- | -------
`[front]` | Front paging when `data` is `any[]` or `Observable<any[]>` | `boolean` | `true`
`[zeroIndexed]` | Whether the backend paging uses the `0` base index (only data is url) | `boolean` | `false`
`[placement]` | Pager direction | `'left','center','right'` | `'right'`
`[show]` | Whether to show pager | `boolean` | -
`[showSize]` | Determine whether `ps` can be changed | `boolean` | `false`
`[pageSizes]` | Specify the sizeChanger options | `number[]` | `[10, 20, 30, 40, 50]`
`[showQuickJumper]` | Determine whether you can jump to pages directly | `boolean` | `false`
`[total]` | To display the total number and range, support custom string template (Three variable names: `total` for total data, `range[0]` and `range[1]` for current data range; **Variable name** must be double curly braces wrapper) | `boolean, string` | `false`
`[toTop]` | To top when pager changed | `boolean` | `true`
`[toTopOffset]` | To top offset value | `number` | `100`

### STError

Property | Description | Type | Default
-------- | ----------- | ---- | -------
`[type]` | Error type | `req` | -
`[error]` | Error message | `any` | -

### STChange

Property | Description | Type | Default
-------- | ----------- | ---- | -------
`[type]` | Change type | `STChangeType` | -
`[pi]` | Page index | `number` | -
`[ps]` | Page size | `number` | -
`[total]` | Total data | `number` | -
`[checkbox]` | Parameters of type `checkbox` | `STData[]` | -
`[radio]` | Parameters of type `radio` | `STData` | -
`[sort]` | Parameters of type `sort` | `STChangeSort` | -
`[filter]` | Parameters of type `filter` | `STColumn` | -
`[click]` | Parameters of type `click` or `dblClick` | `STChangeRowClick` | -
`[expand]` | Parameters of type `expand` | `STData` | -

### STChangeSort

Property | Description | Type | Default
-------- | ----------- | ---- | -------
`[value]` | Current column sort status | `ascend,descend` | -
`[map]` | All column sorting states | `{ [key: string]: string }` | -
`[column]` | Column description | `STColumn` | -

### STChangeRowClick

Property | Description | Type | Default
-------- | ----------- | ---- | -------
`[e]` | Current rows event | `Event` | -
`[item]` | Current rows data | `STData` | -
`[index]` | Current rows index | `number` | -

### STExportOptions

Property | Description | Type | Default
-------- | ----------- | ---- | -------
`[sheetname]` | Sheet name | `string` | `Sheet1`
`[filename]` | Save file name | `string` | `export.xslx`
`[callback]` | Callback before saving | `(wb: WorkBook) => void` | -

### STSingleSort

Property | Description | Type | Default
-------- | ----------- | ---- | -------
`[key]` | Request parameter name | `string` | `sort`
`[nameSeparator]` | Column name and state separator | `string` | `.`

### STMultiSort

Property | Description | Type | Default
-------- | ----------- | ---- | -------
`[key]` | Request parameter name | `string` | `sort`
`[separator]` | Separator between attributes | `string` | `-`
`[nameSeparator]` | Column name and state separator | `string` | `.`
`[global]` | Whether global multi sort mode<br>`true` all `st` defaults multi-sort<br>`false` all `st` non-multiple sorting, just only configurable for rule | `boolean` | `true`

### STData

Property | Description | Type | Default
-------- | ----------- | ---- | -------
`[checked]` | Select or radio button `checked` status value | `boolean` | -
`[disabled]` | Select or radio button `disabled` status value | `boolean` | -
`[expand]` | Whether to expand the status value | `boolean` | -
`[showExpand]` | Whether show expand icon | `boolean` | -

### STColumn

Property | Description | Type | Default
-------- | ----------- | ---- | -------
`[title]` | Name of this column | `string` | -
`[i18n]` | I18n key of this column | `string` | -
`[type]` | `no` Rows number<br>`checkbox` selection<br>`radio` selection<br>`link` Link that triggers `click`<br>`img` Align to the center<br>`number` Align to the right<br>`currency` Align to the right<br>`date` Align to the center<br>`badge` [Nz-Badge](https://ng.ant.design/components/badge/en)<br>`tag` [Nz-Tag](https://ng.ant.design/components/tag/en)<br>`yn` Make boolean as [badge](/theme/yn) | `string` | -
`[index]` | Display field of the data record, could be set like `a.b.c` | `string, string[]` | -
`[render]` | Custom render template ID | `string` | -
`[renderTitle]` | Title custom render template ID | `string` | -
`[default]` | Replace with default value when no data exists | `string` | -
`[buttons]` | Buttons of this column | `STColumnButton[]` | -
`[width]` | Width of this column (**NOTICE:** If the fixed column must be a number), e.g: `100`, `10%`, `100px` | `string,number` | -
`[fixed]` | Set column to be fixed, must specify `width` | `left,right` | -
`[format]` | Format value of this column | `(item: STData, col: STColumn) => string` | -
`[className]` | Class name of this column, e.g: `text-center`, `text-right`, `text-danger`, pls refer to [Style Tools](/theme/tools) | `string` | -
`[colSpan]` | Span of this column's title | `number` | -
`[sort]` | Sort config of this column, Remote Data Configuration**Priority** Rule: <br>`true` allow sorting<br>`string` corresponding `key` value| `true,string,STColumnSort` | -
`[filter]` | Filter config of this column | `STColumnFilter` | -
`[selections]` | Config of type is checkbox | `STColumnSelection[]` | -
`[numberDigits]` | Config of type is number | `string` | -
`[dateFormat]` | Config of type is date | `YYYY-MM-DD HH:mm`
`[yn]` | Config of type is yn | `STColumnYn` | -
`[exported]` | Whether to allow export | `boolean` | `true`
`[acl]` | ACL permission (Use `can()` verify) | `ACLCanType` | -
`[click]` | Callback of type is link | `(record: STData, instance?: STComponent) => void` | -
`[badge]` | Config of type is badge | `STColumnBadge` | -
`[tag]` | Config of type is tag | `STColumnTag` | -
`[noIndex]` | Line number index start value | `number,(item: STData, col: STColumn, idx: number) => number` | `1`
`[iif]` | Custom conditional expression<br>1. Execute only once when `columns` is assigned<br>2. Call `resetColumns()` to trigger again | `(item: STColumn) => boolean` | -
`[statistical]` | Statistics | `STStatisticalType,STStatistical` | -

### STColumnSort

Property | Description | Type | Default
-------- | ----------- | ---- | -------
`[default]` | Default order of sorted values | `ascend,descend` | -
`[compare]` | Sort function for local sort, see [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)'s compareFunction. | `(a: STData, b: STData) => number` | -
`[key]` | Unique key of this column, default is `index` property value<br>`multiSort: false` => `key: 'name' => ?name=1&pi=1`<br>`multiSort: true` allow multiple sort keys, or use `STMultiSort` to specify multi-column sort key merge rule | `string` | -
`[reName]` | Map name<br>`{ ascend: '0', descend: '1' }` => `?name=1&pi=1`<br>`{ ascend: 'asc', descend: 'desc' }` => `?name=desc&pi=1` | `{ ascend?: string, descend?: string }` | -

### STColumnFilter

Property | Description | Type | Default
-------- | ----------- | ---- | -------
`[menus]` | Filter menu config | `STColumnFilterMenu[]` | -
`[fn]` | Filter function for local data | `(filter: STColumnFilterMenu, record: STData) => boolean` | -
`[default]` | Whether the `data` is filtered | `boolean` | -
`[icon]` | Customized filter icon | `string` | `filter`
`[multiple]` | Whether multiple filters can be selected | `boolean` | `true`
`[confirmText]` | Text of the confirm button | `string` | `确认`
`[clearText]` | Text of the clear button | `string` | `重置`
`[key]` | Unique key of this column, default is `index` property value | `string` | -
`[reName]` | Map name | `(list: STColumnFilterMenu[], col: STColumn) => Object` | -

### STColumnFilterMenu

Property | Description | Type | Default
-------- | ----------- | ---- | -------
`[text]` | Filter text | `string` | -
`[value]` | Filter value | `any` | -
`[checked]` | Whether checked | `boolean` | -
`[acl]` | ACL permission (Use `can()` verify) | `ACLCanType` | -

### STIcon

Property | Description | Type | Default
-------- | ----------- | ---- | -------
`[type]` | Type of the ant design icon | `string` | -
`[theme]` | Type of the ant design icon | `outline | twotone | fill` | `outline`
`[spin]` | Rotate icon with animation | `boolean` | `false`
`[twoToneColor]` | Only support the two-tone icon. Specific the primary color. | `string` | -
`[iconfont]` | Type of the icon from iconfont | `string` | -

### STColumnButton

Property | Description | Type | Default
-------- | ----------- | ---- | -------
`[text]` | Text of button, coexist with icon | `string` | -
`[icon]` | Icon of button, coexist with text | `string | STIcon` | -
`[i18n]` | I18n key of button | `string` | -
`[format]` | Format value of button text | `(record: STData, btn: STColumnButton) => string` | -
`[type]` | Type of button | `none,del,modal,static,drawer,link` | -
`[click]` | Click callback; <br>**function** when `type=modal` will only fire when `confirmed`<br>**reload** Refresh current page<br>**load** load `1` page | `(record: STData, modal?: any, instance?: STComponent) => void | reload` | -
`[pop]` | Whether to pop confirm | `string` | -
`[popTitle]` | Title of pop confirm | `string` | `确认删除吗？`
`[modal]` | Config of type is modal or static | `STColumnButtonModal` | -
`[drawer]` | Config of type is drawer | `STColumnButtonDrawer` | -
`[children]` | Drop-down menu, only supports level 1| `STColumnButton[]` | -
`[acl]` | ACL permission (Use `can()` verify) | `ACLCanType` | -
`[iif]` | Custom conditional expression | `(item: STData, btn: STColumnButton, column: STColumn) => boolean` | `() => true`

### STColumnButtonModal

Property | Description | Type | Default
-------- | ----------- | ---- | -------
`[component]` | Modal component class, be sure to register in `entryComponents` | `any` | -
`[params]` | Dialog parameter | `(record: STData) => Object` | -
`[paramsName]` | Receive parameter name of the target component, If target component receive value is null, pls check [delon.module.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/delon.module.ts#L69) Global settings | `string` | record
`[size]` | Size of modal, support number type | `'sm','md','lg','xl'` | `'lg'`
`[exact]` | Exact match return value, default is `true`, If the return value is not null (`null` or `undefined`) is considered successful, otherwise it is considered error. | `boolean` | `true`
`[includeTabs]` | Whether to wrap the nz-tabset, fix content spacing problem | `boolean` | -
`[modalOptions]` | nz-modal raw parameters [ModalOptionsForService](https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/modal/nz-modal.type.ts) | `any` | -

### STColumnButtonDrawer

Property | Description | Type | Default
-------- | ----------- | ---- | -------
`[title]` | Title of drawer | `string` | -
`[component]` | Drawer component class, be sure to register in `entryComponents` | `any` | -
`[params]` | Dialog parameter | `(record: STData) => Object` | -
`[paramsName]` | Receive parameter name of the target component, If target component receive value is null, pls check [delon.module.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/delon.module.ts#L69) Global settings | `string` | record
`[size]` | Size of drawer, support number type | `'sm','md','lg','xl'` | `'md'`
`[drawerOptions]` | nz-drawer raw parameters [NzDrawerOptions](https://ng.ant.design/components/drawer/zh#nzdraweroptions) | `any` | -

### STColumnSelection

Property | Description | Type | Default
-------- | ----------- | ---- | -------
`[text]` | Selection text | `string` | -
`[select]` | Select callback event | `(data: STData[]) => void` | -
`[acl]` | ACL permission (Use `can()` verify) | `ACLCanType` | -

### STColumnYn

Property | Description | Type | Default
-------- | ----------- | ---- | -------
`[truth]` | Truth condition value | `any` | `true`
`[yes]` | Badge `true` text | `string` | `是`
`[no]` | Badge `false` text | `string` | `否`

### STColumnBadge

Property | Description | Type | Default
-------- | ----------- | ---- | -------
`[text]` | Badge text | `string` | -
`[color]` | Badge color value | `success,processing,default,error,warning` | -

### STColumnTag

Property | Description | Type | Default
-------- | ----------- | ---- | -------
`[text]` | Tag text | `string` | -
`[color]` | Tag color value | `string` | -

### STWidthMode

Property | Description | Type | Default
-------- | ----------- | ---- | -------
`[type]` | Type of width mode | `strict,default` | `default`
`[strictBehavior]` | Behavior type of `strict` | `wrap,truncate` | `truncate`

### STStatistical

Property | Description | Type | Default
-------- | ----------- | ---- | -------
`[type]` | Statistic type of current column | `STStatisticalType | STStatisticalFn` | -
`[digits]` | The number of digits to appear after the decimal point | `number` | `2`
`[currency]` | Whether formatting currency, default to `true` when `type` is `STStatisticalFn`,`sum`,`average`,`max`,`min` | `boolean` | -

**STStatisticalFn**

```ts
(
  values: number[],
  col: STColumn,
  list: STData[],
  rawData?: any,
) => STStatisticalResult
```