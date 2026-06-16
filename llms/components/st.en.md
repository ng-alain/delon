---
type: CURD
title: st
subtitle: Table
cols: 1
order: 1
module: import { STModule } from '@delon/abc/st';
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

### FAQ

**Cannot read property 'text' of undefined**

If the component has been rendered, this error may appear when `columns` is changed again. This is because `st` will only process the data according to `columns` each time. When the column definition changes, it may be because of the column definition. Unable to match with existing data, you may need to use `this.st.resetColumns({ columns: [], emitReload: true })` to update the column definition and reload the data.

**Show INVALID DATA**

When an exception is thrown when parsing column data, *INVALID DATA* will be forced to display. For example, when a column is specified `type:'number'`, an exception will be thrown when the actual value obtained is not a valid number type.

## API

### st

| Property | Description | Type | Default | Global Config |
|----------|-------------|------|---------|---------------|
| `[columns]` | Columns description | `STColumn[]` | - | - |
| `[data]` | Data source | `string, STData[], Observable<STData[]>` | - | - |
| `[req]` | Http request configuration | `STReq` | - | ✅ |
| `[res]` | Http response configuration | `STRes` | - | ✅ |
| `[pi]` | Page index | `number` | `1` | ✅ |
| `[ps]` | Page size, default is `10` | `number` | `10` | ✅ |
| `[total]` | Total data count, should set when nzServerRender is true, default is `0` | `number` | `0` | - |
| `[page]` | Pager configuration | `STPage` | - | ✅ |
| `[noResult]` | Custom no result content | `string,TemplateRef<void>` | - | ✅ |
| `[bordered]` | Whether to show all table borders | `boolean` | `false` | ✅ |
| `[size]` | Size of table | `'small','middle','default'` | `'default'` | ✅ |
| `[widthMode]` | Set the table width mode | `STWidthMode` | - | ✅ |
| `[rowClassName]` | Row class name of table | `(record: STData, index: number) => string` | - | ✅ |
| `[clickRowClassName]` | Row class name of click the row | `string, STClickRowClassNameType` | - | ✅ |
| `[loading]` | Loading status of table, when specifying `null` is controlled by st | `boolean | null` | `null` | - |
| `[loadingIndicator]` | The spinning indicator | `TemplateRef<void>` | - | ✅ |
| `[loadingDelay]` | Specifies a delay in milliseconds for loading state (prevent flush) | `number` | `0` | ✅ |
| `[delay]` | Whether to delay table rendering, requires manual call to `refreshColumns()` to render | boolean | false | - |
| `[scroll]` | Whether table can be scrolled in x/y direction, x or y can be a string that indicates the width and height of table body | `{ y?: string; x?: string }` | - | - |
| `[virtualScroll]` | Enable virtual scroll mode，work with `[nzScroll]` | `boolean` | `false` | ✅ |
| `[virtualItemSize]` | The size of the items in the list, same as [cdk itemSize](https://material.angular.io/cdk/scrolling/api) | `number` | `54` | ✅ |
| `[virtualMaxBufferPx]` | The number of pixels worth of buffer to render for when rendering new items, same as [cdk maxBufferPx](https://material.angular.io/cdk/scrolling/api) | `number` | `200` | ✅ |
| `[virtualMinBufferPx]` | The minimum amount of buffer rendered beyond the viewport (in pixels),same as [cdk minBufferPx](https://material.angular.io/cdk/scrolling/api) | `number` | `100` | ✅ |
| `[virtualForTrackBy]` | The TrackByFunction to use for tracking changes. | `TrackByFunction<T>` | - | ✅ |
| `[singleSort]` | Single sort config<br>If not specified, return: `columnName=ascend|descend`<br>If specified, return: `sort=columnName.(ascend|descend)` | `STSingleSort` | `null` | ✅ |
| `[multiSort]` | Whether to mulit-sort, recommended use in URL data source | `boolean, STMultiSort` | `false` | ✅ |
| `[header]` | Table header renderer | `string,TemplateRef<void>` | - | - |
| `[showHeader]` | Whether show the head of the columns of the table | `boolean` | `true` | - |
| `[footer]` | Table footer renderer | `string,TemplateRef<void>` | - | - |
| `[bodyHeader]` | Table extra body renderer in header, generally used to add total rows | `TemplateRef<STStatisticalResults>` | - | - |
| `[body]` | Table extra body renderer, generally used to add total rows | `TemplateRef<STStatisticalResults>` | - | - |
| `[widthConfig]` | Set col width can not used with width of STColumn | `string[]` | - | - |
| `[expandRowByClick]` | Whether to expand row by clicking anywhere in the whole row | `boolean` | `false` | ✅ |
| `[expandAccordion]` | Accordion mode | `boolean` | `false` | ✅ |
| `[expand]` | Whether current column include expand icon | `TemplateRef<{ $implicit: STData; index: number }>` | - | - |
| `[expandIcon]`   | Custom expand icon | `TemplateRef<{ $implicit: STData; index: number }>` | - |
| `[responsive]` | Whether to turn on responsive | `boolean` | `true` | ✅ |
| `[responsiveHideHeaderFooter]` | Whether to display the header and footer under the small screen | `boolean` | `false` | ✅ |
| `[resizable]` | Resize header of the current table, **Multiple headers not supported** | `STResizable, boolean` | - | - |
| `[trackBy]` | `TrackByFunction` function of list loop `@for` | `TrackByFunction<T>` | - | - |
| `[drag]` | Drag soring | `STDragOptions, boolean` | - | - |
| `(change)` | Events | `EventEmitter<STChange>` | - | - |
| `(error)` | Error event | `EventEmitter<STError>` | - | - |

### Properties & Methods

| Name | Description |
|------|-------------|
| `[filteredData]` | Get all data after filtering & sorting<br>- Local data: including sorting, filtering<br>- Remote data: Don't pass `pi`, `ps` parameters in http request |
| `[count]` | Get the number of the current page |
| `[list]` | Get the data of the current page |
| `resetColumns(options?: STResetColumnsOption)` | Reset columns |
| `load(pi = 1, extraParams?: any, options?: STLoadOptions)` | Load specified page |
| `reload(extraParams?: any, options?: STLoadOptions)` | Refresh current page |
| `reset(extraParams?: any, options?: STLoadOptions)` | Reset data and `pi` to `1`, including single multi-select, sort, filter status (Covered default state) |
| `addRow(data: STData | STData[], options?: { index?: number })` | Add a rows in the table |
| `removeRow(data: STData | STData[] | number)` | Remove a row in the table |
| `setRow(index: number | STData, item: STData, options?: { refreshSchema?: boolean; emitReload?: boolean; arrayProcessMethod?: boolean })` | Sets the row value for the `index` in the table |
| `pureItem(itemOrIndex: STData | number)` | Return pure data, `st` internally maintains a set of data for caching, this part of data may affect the backend |
| `clear(cleanStatus = true)` | Clear all data |
| `clearStatus()` | Clean all status (like this: single multi-select, sort, filter status) |
| `clearCheck()` | Clear all `checkbox` |
| `clearRadio()` | Clear all `radio` |
| `export(newData?: STData[] | true, opt?: STExportOptions)` | Export Excel and make sure you have imported `XlsxModule` |

Some details:

- `extraParams` Keep original values when is null
- `STLoadOptions.merge` merge mode, if `true` merges with new values instead of replacing
- `STLoadOptions.toTop` Whether to jump to the top, if not specified, it's determined by `page.toTop`

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
  @ViewChild('st', { static: false }) comp: STComponent;
  // this.comp.load();
}
```

### STReq

| Property | Description | Type | Default | Global Config |
|----------|-------------|------|---------|---------------|
| `[type]` | Pagination type, `page` used `pi`, `ps`; `skip` used `skip`, `limit` | `page,skip` | `page` | ✅ |
| `[params]` | Request parameters, default to auto append `pi`, `ps` to URL | `any` | - | - |
| `[ignoreParamNull]` | Whether to ignore `null` or `unfind` values in parameters | `Boolean` |`false` | ✅ |
| `[method]` | Request method | `'POST','GET','HEAD','PUT','PATCH','DELETE'` | `'GET'` | ✅ |
| `[body]` | Request body (only method is POST) | `any` | - | - |
| `[headers]` | Request header | `any` | - | ✅ |
| `[reName]` | Map name `pi`、`ps` | `STReqReNameType, ((result: any, options: { pi: number; ps: number; total: number }) => { total: number; list: T[] })` | `{ pi: 'pi', ps: 'ps', skip: 'skip', limit: 'limit' }` | ✅ |
| `[allInBody]` | Whether to request all parameter data into `body` (except `url` itself parameter) | `boolean` | `false` | ✅ |
| `[lazyLoad]` | Whether to delay loading data in first render `st` component | `boolean` | `false` | ✅ |
| `[process]` | Pre-request data processing | `(requestOptions: STRequestOptions) => STRequestOptions` | - | ✅ |

### STRes

| Property | Description | Type | Default | Global Config |
|----------|-------------|------|---------|---------------|
| `[reName]` | Map name `total`、`list`, could be set like `a.b.c` | `{total:string;list:string}` | - | ✅ |
| `[process]` | Data preprocessing | `(data: STData[], rawData?: any) => STData[]` | - | ✅ |

### STPage

| Property | Description | Type | Default | Global Config |
|----------|-------------|------|---------|---------------|
| `[front]` | Front paging when `data` is `any[]` or `Observable<any[]>` | `boolean` | `true` | ✅ |
| `[zeroIndexed]` | Whether the backend paging uses the `0` base index (only data is url) | `boolean` | `false` | ✅ |
| `[position]` | Specify the position of Pagination | `top,bottom,both` | `bottom` | ✅ |
| `[placement]` | Specify the direction of Pagination | `left,center,right` | `right` | ✅ |
| `[show]` | Whether to show pager | `boolean` | `true` | ✅ |
| `[showSize]` | Determine whether `ps` can be changed | `boolean` | `false` | ✅ |
| `[pageSizes]` | Specify the sizeChanger options | `number[]` | `[10, 20, 30, 40, 50]` | ✅ |
| `[showQuickJumper]` | Determine whether you can jump to pages directly | `boolean` | `false` | ✅ |
| `[total]` | To display the total number and range, support custom string template (Three variable names: `total` for total data, `range[0]` and `range[1]` for current data range; **Variable name** must be double curly braces wrapper) | `boolean, string` | `false` | ✅ |
| `[toTop]` | To top when pager changed | `boolean` | `true` | ✅ |
| `[toTopOffset]` | To top offset value | `number` | `100` | ✅ |
| `[itemRender]` | To customize Pagination item, same as Pagination | `TemplateRef<{ $implicit: 'page' \| 'prev' \| 'next', page: number }>` | - | ✅ |
| `[simple]` | Whether to use simple mode | `boolean` | - | ✅ |
| `[checkboxIdMap]` | The identifier column of the cached checkbox list | `string` | - | ✅ |

### STError

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[type]` | Error type | `req` | - |
| `[error]` | Error message | `any` | - |

### STChange

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[type]` | Change type | `STChangeType` | - |
| `[pi]` | Page index | `number` | - |
| `[ps]` | Page size | `number` | - |
| `[total]` | Total data | `number` | - |
| `[loaded]` | Parameters of type `loaded` | `STData[]` | - |
| `[checkbox]` | Parameters of type `checkbox` | `STData[]` | - |
| `[radio]` | Parameters of type `radio` | `STData` | - |
| `[sort]` | Parameters of type `sort` | `STChangeSort` | - |
| `[filter]` | Parameters of type `filter` | `STColumn` | - |
| `[click]` | Parameters of type `click` | `STChangeRowClick` | - |
| `[dblClick]` | Parameters of type `dblClick` | `STChangeRowClick` | - |
| `[expand]` | Parameters of type `expand` | `STData` | - |

### STChangeSort

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[value]` | Current column sort status | `ascend,descend` | - |
| `[map]` | All column sorting states | `{ [key: string]: string }` | - |
| `[column]` | Column description | `STColumn` | - |

### STChangeRowClick

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[e]` | Current rows event | `Event` | - |
| `[item]` | Current rows data | `STData` | - |
| `[index]` | Current rows index | `number` | - |

### STExportOptions

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[sheetname]` | Sheet name | `string` | `Sheet1` |
| `[filename]` | Save file name | `string` | `export.xslx` |
| `[callback]` | Callback before saving | `(wb: WorkBook) => void` | - |

### STSingleSort

| Property | Description | Type | Default | Global Config |
|----------|-------------|------|---------|---------------|
| `[key]` | Request parameter name | `string` | `sort` | ✅ |
| `[nameSeparator]` | Column name and state separator | `string` | `.` | ✅ |

### STMultiSort

| Property | Description | Type | Default | Global Config |
|----------|-------------|------|---------|---------------|
| `[key]` | Request parameter name | `string` | `sort` | ✅ |
| `[separator]` | Separator between attributes | `string` | `-` | ✅ |
| `[nameSeparator]` | Column name and state separator | `string` | `.` | ✅ |
| `[arrayParam]` | Whether to pass parameters as an array<br>`true` Indicates the use of `url?sort=name.asc&sort=age.desc`<br>`false` Indicates the use of `url?sort=name.asc-age.desc` | `boolean` | `false` | ✅ |
| `[keepEmptyKey]` | Whether to keep send empty key<br>`true` send the `key` name anyway<br>`false` don't send `key` when not sorting | `boolean` | `true` | ✅ |
| `[global]` | **Only global config**, Whether global multi sort mode<br>`true` all `st` defaults multi-sort<br>`false` all `st` non-multiple sorting, just only configurable for rule | `boolean` | `true` | ✅ |

### STData

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[checked]` | Select or radio button `checked` status value | `boolean` | - |
| `[disabled]` | Select or radio button `disabled` status value | `boolean` | - |
| `[expand]` | Whether to expand the status value | `boolean` | - |
| `[showExpand]` | Whether show expand icon | `boolean` | - |
| `[className]` | Class name of the row | `string` | - |

### STColumn<T extends STData = any>

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[title]` | Name of this column | `string, STColumnTitle` | - |
| `[i18n]` | I18n key of this column | `string` | - |
| `[type]` | `no` Rows number<br>`checkbox` selection<br>`radio` selection<br>`link` Link that triggers `click`<br>`img` Align to the center<br>`number` Align to the right<br>`currency` Align to the right<br>`date` Align to the center<br>`badge` [Nz-Badge](https://ng.ant.design/components/badge/en)<br>`tag` [Nz-Tag](https://ng.ant.design/components/tag/en)<br>`yn` Make boolean as [badge](/theme/yn)<br>`cell` Rendered using the `cell` component, see [cell](/components/cell)<br>`widget` Custom widgets to render columns | `string` | - |
| `[cell]` | Rendered using the `cell` component, see [cell](/components/cell). | `CellOptions | ((record: T, column: STColumn) => CellOptions)` | - |
| `[index]` | Display field of the data record, could be set like `a.b.c` | `string, string[]` | - |
| `[render]` | Custom render template ID | `string, TemplateRef<void>, TemplateRef<{ $implicit: STData; index: number }>` | - |
| `[renderTitle]` | Title custom render template ID | `string, TemplateRef<void>, TemplateRef<{ $implicit: STColumn; index: number }>` | - |
| `[default]` | Replace with default value when no data exists (value typeof is `undefined`) | `string` | - |
| `[buttons]` | Buttons of this column | `STColumnButton[]` | - |
| `[maxMultipleButton]` | Max button option can be showed, and the extra part are auto generated under `more` | `STColumnMaxMultipleButton, number` | - |
| `[width]` | Width of this column (**NOTICE:** If the fixed column must be a number), e.g: `100`, `10%`, `100px` | `string,number` | - |
| `[fixed]` | Set column to be fixed, must specify `width` | `left,right` | - |
| `[format]` | Format value of this column | `(item: STData, col: STColumn, index: number) => string` | - |
| `[className]` | Class name of this column, e.g: `text-center`, `text-right`, `text-error`, pls refer to [Style Tools](/theme/tools) | `string` | - |
| `[colSpan]` | Span of this column's title | `number` | - |
| `[onCell]` | Set props on per cell | `(item: T, index: number) => STOnCellResult;` | - |
| `[sort]` | Sort config of this column, Remote Data Configuration**Priority** Rule: <br>`true` allow sorting, should be auto generate compose `compare: (a, b) => a[index] - b[index]` method when data is local<br>`ascend`<br>`descend`<br>`string` corresponding `key` value | `true,string,STColumnSort` | - |
| `[filter]` | Filter config of this column | `STColumnFilter` | - |
| `[selections]` | Config of type is checkbox | `STColumnSelection[]` | - |
| `[numberDigits]` | Config of type is number | `string` | - |
| `[dateFormat]` | Config of type is date | `yyyy-MM-dd HH:mm` | - |
| `[currency]` | Currency format option, `type=currency` is valid | `STColumnCurrency` | - |
| `[yn]` | Config of type is yn | `STColumnYn` | - |
| `[exported]` | Whether to allow export | `boolean` | `true` |
| `[acl]` | ACL permission (Use `can()` verify) | `ACLCanType` | - |
| `[click]` | Callback of type is link | `(record: STData, instance?: STComponent) => void` | - |
| `[badge]` | Config of type is badge | `STColumnBadge` | - |
| `[tag]` | Config of type is tag | `STColumnTag` | - |
| `[enum]` | Config of type is enum | `{ [key: string]: string; [key: number]: string }` | - |
| `[widget]` | Config of type is widget | `STWidgetColumn` | - |
| `[noIndex]` | Line number index start value | `number,(item: STData, col: STColumn, idx: number) => number` | `1` |
| `[iif]` | Custom conditional expression<br>1. Execute only once when `columns` is assigned<br>2. Call `resetColumns()` to trigger again | `(item: STColumn) => boolean` | - |
| `[statistical]` | Statistics | `STStatisticalType,STStatistical` | - |
| `[resizable]` | Resize header, **Multiple headers not supported** | `STResizable, boolean` | - | - |
| `[children]` | Group columns | `STColumn[]` | - |
| `[safeType]` | Safe rendering type, Support [global config](https://ng-alain.com/docs/global-config) | `text,html,safeHtml` | `safeHtml` |
| `[customRequest]` | Override the default request behavior, you can customize your own request implementation, for example: Graphql, Support [global config](https://ng-alain.com/docs/global-config) | `(options: STCustomRequestOptions) => Observable<any>` | - |

### STColumnTitle

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[text]` | Text of header, can be choose one of `text` or `i18n` | `string` | - |
| `[i18n]` | I18n key of header, can be choose one of `text` or `i18n` | `string` | - |
| `[optional]` | Optional information of header | `string` | - |
| `[optionalHelp]` | Optional help of header | `string` | - |

### STColumnSort

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[default]` | Default order of sorted values | `ascend,descend` | - |
| `[compare]` | Sort function for local sort, see [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)'s compareFunction, `null` ingore local sort but keeping sort function. | `(a: STData, b: STData) => number, null` | - |
| `[key]` | Unique key of this column, default is `index` property value<br>`multiSort: false` => `key: 'name' => ?name=1&pi=1`<br>`multiSort: true` allow multiple sort keys, or use `STMultiSort` to specify multi-column sort key merge rule | `string` | - |
| `[reName]` | Map name<br>`{ ascend: '0', descend: '1' }` => `?name=1&pi=1`<br>`{ ascend: 'asc', descend: 'desc' }` => `?name=desc&pi=1` | `{ ascend?: string, descend?: string }` | - |
| `[directions]`  | Supported sort order, could be `'ascend'`, `'descend'`, `null` | `Array<'ascend' \| 'descend' \| null>`        | `['ascend', 'descend', null]` | ✅ |

### STColumnFilter

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[type]` | Type of the filter, `keyword` render by input | `default,keyword,number,date,custom` | `default` |
| `[menus]` | Filter menu config | `STColumnFilterMenu[]` | - |
| `[fn]` | Filter function for local data | `(filter: STColumnFilterMenu, record: STData) => boolean` | - |
| `[default]` | Whether the `data` is filtered | `boolean` | - |
| `[icon]` | Customized filter icon<br>When `type='default'` default `filter`<br> when `type='keyword'` default `search` | `string | STIcon` | `filter` |
| `[multiple]` | Whether multiple filters can be selected | `boolean` | `true` |
| `[confirmText]` | Text of the confirm button | `string` | - |
| `[clearText]` | Text of the clear button | `string` | - |
| `[key]` | Unique key of this column, default is `index` property value | `string` | - |
| `[reName]` | Map name | `(list: STColumnFilterMenu[], col: STColumn) => Object` | - |
| `[custom]` | Custom template | `TemplateRef<{ $implicit: STColumnFilter; col: STColumn; handle: STColumnFilterHandle }>` | - |
| `[showOPArea]` | Whether to display the operation area | `boolean` | `true` |
| `[placeholder]` | placeholder | `boolean` | `true` |
| `[number]` | Option for the type is `number` | `Object` | - |
| `[date]` | Option for the type is `date` | `Object` | - |

### STColumnFilterMenu

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[text]` | Filter text<br>When `type: 'keyword'` is `placeholder` value | `string` | - |
| `[value]` | Filter value | `any` | - |
| `[checked]` | Whether checked | `boolean` | - |
| `[acl]` | ACL permission (Use `can()` verify) | `ACLCanType` | - |

### STIcon

| Property | Description | Type | Default | Global Config |
|----------|-------------|------|---------|---------------|
| `[type]` | Type of the ant design icon | `string` | - | - |
| `[theme]` | Type of the ant design icon | `outline | twotone | fill` | `outline` | ✅ |
| `[spin]` | Rotate icon with animation | `boolean` | `false` | ✅ |
| `[twoToneColor]` | Only support the two-tone icon. Specific the primary color. | `string` | - | v |
| `[iconfont]` | Type of the icon from iconfont | `string` | - | ✅ |

### STColumnButton

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[text]` | Text of button, coexist with icon | `string | (record: T, btn: STColumnButton) => string` | - |
| `[icon]` | Icon of button, coexist with text | `string | STIcon | ((record: T, btn: STColumnButton<T>) => STIcon | null | undefined)` | - |
| `[i18n]` | I18n key of button | `string` | - |
| `[type]` | Type of button | `none,del,modal,static,drawer,link` | - |
| `[click]` | Click callback; <br>**function** when `type=modal` will only fire when `confirmed`<br>**reload** Refresh current page<br>**load** load `1` page | `(record: STData, modal?: any, instance?: STComponent) => void | reload` | - |
| `[pop]` | Whether to pop confirm | `boolean, string, STColumnButtonPop` | `false` |
| `[modal]` | Config of type is modal or static | `STColumnButtonModal` | - |
| `[drawer]` | Config of type is drawer | `STColumnButtonDrawer` | - |
| `[children]` | Drop-down menu, only supports level 1 | `STColumnButton[]` | - |
| `[acl]` | ACL permission (Use `can()` verify) | `ACLCanType` | - |
| `[iif]` | Custom conditional expression | `(item: STData, btn: STColumnButton, column: STColumn) => boolean` | `() => true` |
| `[iifBehavior]` | Render button mode when the conditional expression `false` value | `hide,disabled` | `hide` |
| `[tooltip]` | Button popup tip | `string` | - |
| `[className]` | Class name of this button, e.g: `text-error`, pls refer to [Style Tools](/theme/tools) | `string | ((record: T, btn: STColumnButton<T>) => NgClassType | null | undefined)` | - |

### STColumnButtonModal

| Property | Description | Type | Default | Global Config |
|----------|-------------|------|---------|---------------|
| `[component]` | Modal component class | `any` | - | - |
| `[params]` | Dialog parameter | `(record: STData) => Object` | - | - |
| `[paramsName]` | Receive parameter name of the target component, If target component receive value is null, pls check [global-config.module.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/global-config.module.ts#L52) Global settings | `string` | `record` | ✅ |
| `[size]` | Size of modal, support number type | `'sm','md','lg','xl'` | `'lg'` | ✅ |
| `[exact]` | Exact match return value, default is `true`, If the return value is not null (`null` or `undefined`) is considered successful, otherwise it is considered error. | `boolean` | `true` | ✅ |
| `[includeTabs]` | Whether to wrap the nz-tabset, fix content spacing problem | `boolean` | - | - |
| `[modalOptions]` | nz-modal raw parameters [ModalOptions](https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/modal/modal-types.ts) | `any` | - | ✅ |

### STColumnButtonDrawer

| Property | Description | Type | Default | Global Config |
|----------|-------------|------|---------|---------------|
| `[title]` | Title of drawer | `string` | - | - |
| `[component]` | Drawer component class | `any` | - | - |
| `[params]` | Dialog parameter | `(record: STData) => Object` | - | - |
| `[paramsName]` | Receive parameter name of the target component, If target component receive value is null, pls check [global-config.module.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/global-config.module.ts#L52) Global settings | `string` | `record` | ✅ |
| `[size]` | Size of drawer, support number type | `'sm','md','lg','xl'` | `'md'` | ✅ |
| `[drawerOptions]` | nz-drawer raw parameters [NzDrawerOptions](https://ng.ant.design/components/drawer/zh#nzdraweroptions) | `any` | - | ✅ |
| `[footer]` | Whether to include the bottom toolbar | `boolean` | `true` | ✅ |
| `[footerHeight]` | Height of bottom toolbar | `number` | `55` | ✅ |

### STColumnSelection

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[text]` | Selection text | `string` | - |
| `[select]` | Select callback event | `(data: STData[]) => void` | - |
| `[acl]` | ACL permission (Use `can()` verify) | `ACLCanType` | - |

### STColumnYn

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[truth]` | Truth condition value | `any` | `true` |
| `[yes]` | Badge `true` text | `string` | `是` |
| `[no]` | Badge `false` text | `string` | `否` |
| `[mode]` | Display mode for yn | `full,icon,text` | `icon` |

### STcolumnCurrency

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[type]` | Currency rendering type | `commas, mega` | `commas` |
| `[format]` | See [CurrencyService.format](https://ng-alain.com/util/format/en#format) | `CurrencyFormatOptions` | - |

### STColumnBadge

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[text]` | Badge text | `string` | - |
| `[color]` | Badge color value | `success,processing,default,error,warning` | - |
| `[tooltip]` | Text popup tip | `string` | - |

### STColumnTag

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[text]` | Tag text | `string` | - |
| `[color]` | Tag color value | `string` | - |
| `[tooltip]` | Text popup tip | `string` | - |

### STWidgetColumn

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[type]` | Specify the type name, which can be customized by `STWidgetRegistry`, [for example](https://github.com/ng-alain/delon/blob/master/src/app/shared/st-widget/st-widget.module.ts) | `string` | - |
| `[params]` | Parameters of the target component | `(options: { record: STData; column: STColumn }) => {}` | - |

### STWidthMode

| Property | Description | Type | Default | Global Config |
|----------|-------------|------|---------|---------------|
| `[type]` | Type of width mode | `strict,default` | `default` | ✅ |
| `[strictBehavior]` | Behavior type of `strict` | `wrap,truncate` | `truncate` | ✅ |

### STStatistical

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[type]` | Statistic type of current column | `STStatisticalType | STStatisticalFn` | - |
| `[digits]` | The number of digits to appear after the decimal point | `number` | `2` |
| `[currency]` | Whether formatting currency, default to `true` when `type` is `STStatisticalFn`,`sum`,`average`,`max`,`min` | `boolean` | - |

**STStatisticalFn**

```ts
(
  values: number[],
  col: STColumn,
  list: STData[],
  rawData?: any,
) => STStatisticalResult
```

### STResizable

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[disabled]` | Disable resize | `boolean` | `true` |
| `[bounds]` | Specifies resize boundaries | `window, parent, ElementRef<HTMLElement>` | `window` |
| `[maxWidth]` | Maximum width of resizable elemen | `number` | `360` |
| `[minWidth]` | Minimum width of resizable element | `number` | `60` |
| `[preview]` | Enable preview when resizing | `boolean` | `true` |

## Theme

| Property | Description | Default
|----|----|----|
| `@nz-table-img-radius` | Radius size for the image in td | `4px` |
| `@nz-table-img-margin-right` | Margin right for the image in td | `4px` |
| `@nz-table-img-max-height` | Max height for the image in td | `32px` |
| `@nz-table-img-max-width` | Max width for the image in td | `32px` |
| `@nz-table-even-background` | Even background for the row | `none` |
| `@nz-table-rep-max-width` | Trigger when the viewable area is less than | `` |
| `@nz-table-rep-min-width` | Trigger when the visible area is greater than | `` |
| `@nz-table-rep-header-background` | Header background in responsive | `@border-color-split` |
| `@nz-table-rep-even-background` | Event background in responsive | `#f9f9f9` |
| `@nz-table-rep-column-name-color` | Name color in responsive | `rgba(0, 0, 0, 0.5)` |
| `@nz-table-rep-column-name-text-align` | Name text align in responsive | `right` |
| `@nz-table-rep-column-name-width` | Name column width in responsive | `100px` |
| `@nz-table-rep-column-name-padding-right` | Right padding of title and content in responsive | `8px` |
| `@table-row-hover-bg` | Hover background color of the row | `#fafafa` |
| `@st-btn-disabled-color` | Text color of the button | `rgba(0, 0, 0, 0.25)` |
| `@st-title-optional-color` | Optional color of title | `rgba(0, 0, 0, 0.35)` |
| `@st-resizable-handle-width` | Width of the rasizable handle | `1px` |
| `@st-resizable-handle-height` | Height of the rasizable handle | `60%` |
| `@st-resizable-handle-color` | Color of the rasizable handle | `@border-color-base` |

---

## Examples

### Basic

Quickly generate tables; use `res` to adapted backend data format.

```typescript
import { Component, ViewChild } from '@angular/core';

import { STColumn, STComponent, STModule } from '@delon/abc/st';
import { NzButtonModule } from 'ng-zorro-antd/button';

interface User {
  id: number;
  picture: {
    thumbnail: string;
  };
  name: {
    last: string;
    first: string;
  };
  nat: string;
  gender: string;
  email: string;
  phone: string;
  price: number;
  registered: Date;
}

@Component({
  selector: 'components-st-basic',
  template: `
    <button nz-button nzType="primary" (click)="setRow()">setRow Method</button>
    <st #st [widthMode]="{ type: 'strict' }" [data]="url" [req]="{ params: params }" [columns]="columns" />
  `,
  imports: [STModule, NzButtonModule]
})
export class ComponentsStBasic {
  url = `/users?total=2&field=list`;
  params = { a: 1, b: 2 };
  @ViewChild('st', { static: false }) private st!: STComponent;
  columns: Array<STColumn<User>> = [
    { title: '编号', index: 'id', width: 80 },
    { title: '头像', index: 'picture.thumbnail', type: 'img', width: 60 },
    { title: '邮箱', index: 'email', width: 80 },
    { title: '电话', index: 'phone' },
    {
      title: { text: '佣金', optional: '（单位：元）', optionalHelp: '计算公式=订单金额 * 0.6%' },
      index: 'price',
      type: 'currency'
    },
    { title: '注册时间', type: 'date', index: 'registered' }
  ];

  setRow(): void {
    this.st.setRow(0, { price: 100000000 });
  }
}
```

### Custom Data

`data` property supports `STData[]`、`Observable<STData[]>` data types.

```typescript
import { Component, OnInit, TemplateRef, ViewChild, inject } from '@angular/core';
import { of, delay } from 'rxjs';

import { STChange, STColumn, STColumnFilter, STColumnFilterHandle, STData, STModule } from '@delon/abc/st';
import { dateTimePickerUtil } from '@delon/util/date-time';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'components-st-custom-data',
  template: `
    <div class="mb-md">
      <button (click)="st.clear()" nz-button>Clear Data</button>
      <button (click)="st.reload()" nz-button>Reload Data</button>
      <button (click)="st.clearStatus(); st.reload()" nz-button>Clear Status</button>
      <button (click)="st.setRow(0, { className: 'text-success' })" nz-button>Update Row ClassName</button>
    </div>
    <st #st [data]="users" [columns]="columns" (change)="change($event)" />
    <ng-template #customFilter let-f let-col="col" let-handle="handle">
      <div class="p-lg">
        <p>Custom body</p>
        <button nz-button nzType="primary" (click)="close(f, handle, true)">confirm</button>
        <button nz-button (click)="close(f, handle, false)">reset</button>
      </div>
    </ng-template>
  `,
  imports: [STModule, NzButtonModule]
})
export class ComponentsStCustomData implements OnInit {
  private readonly msg = inject(NzMessageService);
  users: STData[] = [];
  @ViewChild('customFilter', { static: true }) readonly customFilter!: TemplateRef<{
    $implicit: STColumnFilter;
    col: STColumn;
    handle: STColumnFilterHandle;
  }>;
  columns: STColumn[] = [];

  ngOnInit(): void {
    this.columns = [
      {
        title: '编号',
        index: 'id',
        type: 'checkbox',
        selections: [
          {
            text: '小于25岁',
            select: data => data.forEach(item => (item.checked = item.age < 25))
          },
          {
            text: '大于25岁',
            select: data => data.forEach(item => (item.checked = item.age >= 25))
          }
        ]
      },
      {
        title: '姓名',
        index: 'name',
        sort: {
          compare: (a, b) => a.name.length - b.name.length
        },
        filter: {
          type: 'keyword',
          placeholder: '输入后按回车搜索',
          fn: (filter, record) => !filter.value || record.name.indexOf(filter.value) !== -1
        }
      },
      {
        title: '年龄',
        index: 'age',
        sort: {
          compare: (a, b) => a.age - b.age
        },
        filter: {
          type: 'number',
          placeholder: '范围 10 ~ 100 之间',
          number: {
            min: 10,
            max: 100
          },
          fn: (filter, record) => (filter.value != null ? record.age >= +filter.value : true)
        }
      },
      {
        title: '状态',
        type: 'badge',
        index: 'status',
        badge: {
          1: { text: 'Success', color: 'success' },
          2: { text: 'Error', color: 'error' },
          3: { text: 'Processing', color: 'processing' },
          4: { text: 'Default', color: 'default' },
          5: { text: 'Warning', color: 'warning' }
        },
        filter: {
          menus: [
            { text: 'Success', value: 1 },
            { text: 'Error', value: 2 }
          ],
          fn: (filter, record) => record.age >= filter.value[0] && record.age <= filter.value[1],
          multiple: true
        }
      },
      {
        title: 'Date',
        index: 'created',
        type: 'date',
        filter: {
          type: 'date',
          date: {
            mode: 'date',
            showToday: false,
            disabledDate: dateTimePickerUtil.disabledAfterDate()
          },
          fn: () => true
        }
      },
      {
        title: 'Custom',
        index: 'name',
        filter: {
          type: 'custom',
          icon: { type: 'search', theme: 'outline' },
          custom: this.customFilter,
          showOPArea: false,
          fn: (filter, record) => !filter.value || record.name.indexOf(filter.value) !== -1
        }
      }
    ];
    const data = Array(100)
      .fill({})
      .map((_, idx) => ({
        id: idx + 1,
        name: `name ${idx + 1}`,
        age: Math.ceil(Math.random() * 10) + 20,
        status: Math.floor(Math.random() * 5) + 1,
        created: new Date()
      }));
    of(data)
      .pipe(delay(500))
      .subscribe(res => (this.users = res));
  }

  close(f: STColumnFilter, handle: STColumnFilterHandle, result: boolean): void {
    this.msg.info(`Process result: ${result}${result ? '(only name 2)' : ''}`);
    f.menus = [{ value: result ? 'name 2' : null }];
    handle.close(result);
  }

  change(e: STChange): void {
    console.log(e);
  }
}
```

### Column type

Support for ten different column types: no, checkbox, radio, badge, tag, image, number, currency, date, boolean badge, enum.

```typescript
import { Component } from '@angular/core';

import { STColumn, STColumnBadge, STColumnTag, STData, STModule } from '@delon/abc/st';
import { NzButtonModule } from 'ng-zorro-antd/button';

const BADGE: STColumnBadge = {
  1: { text: '成功', color: 'success' },
  2: { text: '错误', color: 'error', tooltip: 'TIPS' },
  3: { text: '进行中', color: 'processing' },
  4: { text: '默认', color: 'default' },
  5: { text: '警告', color: 'warning' }
};
const TAG: STColumnTag = {
  1: { text: '成功', color: 'green' },
  2: { text: '错误', color: 'red' },
  3: { text: '进行中', color: 'blue' },
  4: { text: '默认', color: '' },
  5: { text: '警告', color: 'orange', tooltip: 'TIPS' }
};
const r = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1) + min);

@Component({
  selector: 'components-st-type',
  template: `
    <button nz-button (click)="reload()">Reload</button>
    <st #st [data]="users" [columns]="columns" [page]="{ position: 'both' }" />
  `,
  imports: [STModule, NzButtonModule]
})
export class ComponentsStType {
  users: STData[] = [];
  columns: STColumn[] = [
    { title: '行号', type: 'no' },
    { title: '姓名', index: 'name' },
    { title: '年龄', index: 'age', type: 'number' },
    { title: 'HTML', index: 'html', safeType: 'safeHtml' },
    { title: 'Text', index: 'html', safeType: 'text' },
    { title: 'tag', index: 'tag', type: 'tag', tag: TAG },
    { title: 'badge', index: 'badge', type: 'badge', badge: BADGE },
    { title: 'Enum', index: 'enum', type: 'enum', enum: { 1: '壹', 2: '贰', 3: '叁' } },
    { title: 'yn', index: 'yn', type: 'yn' }
  ];

  reload(): void {
    this.users = Array(10)
      .fill({})
      .map((_, idx) => ({
        id: idx + 1,
        name: `name ${idx + 1}`,
        age: r(10, 50),
        tag: r(1, 5),
        badge: r(1, 5),
        enum: r(1, 3),
        yn: [true, false][r(1, 5) % 2],
        html: `<strong>${idx + 1}</strong> Other`
      }));
  }

  constructor() {
    this.reload();
  }
}
```

### Cell

Use the `cell` component for richer rendering.

```typescript
import { Component, ViewChild } from '@angular/core';

import type { CellOptions } from '@delon/abc/cell';
import { STColumn, STComponent, STModule } from '@delon/abc/st';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'components-st-cell',
  template: `
    <button nz-button nzType="primary" (click)="setRow()">setRow Method</button>
    <st #st [widthMode]="{ type: 'strict' }" [data]="url" [req]="{ params: params }" [columns]="columns" />
  `,
  imports: [STModule, NzButtonModule]
})
export class ComponentsStCell {
  url = `/users?total=2&field=list`;
  params = { a: 1, b: 2 };
  @ViewChild('st', { static: false }) private st!: STComponent;
  columns: STColumn[] = [
    { title: '编号', index: 'id', width: 55 },
    { title: '类型', index: 'type', width: 60, cell: { enum: { 1: '普通', 2: '会员', 3: '管理' } } },
    { title: '头像', index: 'picture.thumbnail', width: 64, cell: { type: 'img' } },
    { title: '邮箱', index: 'email', width: 120 },
    { title: '电话', index: 'phone', cell: { mask: '999****9999' } },
    {
      title: { text: '佣金', optionalHelp: '计算公式=订单金额 * 0.6%' },
      index: 'price',
      cell: {
        type: 'currency',
        unit: '元'
      }
    },
    {
      title: '人民币写法',
      index: 'total',
      cell: {
        type: 'cny'
      }
    },
    {
      title: 'Site',
      index: 'website',
      width: 100,
      cell: record => {
        return {
          tooltip: record.website,
          link: {
            url: record.website
          }
        } as CellOptions;
      }
    },
    {
      title: '可用',
      index: 'disabled',
      width: 64,
      cell: { type: 'boolean', tooltip: '点击可切换状态' },
      className: 'point',
      click: i => {
        this.st.setRow(i, { disabled: !i.disabled });
      }
    },
    { title: '注册时间', index: 'registered', width: 180, cell: { type: 'date' } }
  ];

  setRow(): void {
    this.st.setRow(0, { price: 100000000 });
  }
}
```

### Checkbox

Use `change` event get selected data, and use `page.checkboxIdMap` as an identifier to enable paginated caching of selectable items.

```typescript
import { Component } from '@angular/core';

import { STColumn, STModule } from '@delon/abc/st';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'components-st-checkbox',
  template: ` <div class="mb-md">
      Check Count:{{ st.checkList.length }}
      <button nz-button (click)="st.checkAll(true)">All</button>
      <button nz-button (click)="st.clearCheck()">Clean</button>
    </div>
    <st #st [data]="url" [columns]="columns" [page]="{ checkboxIdMap: 'id' }" />`,
  imports: [STModule, NzButtonModule]
})
export class ComponentsStCheckbox {
  url = `/users?total=100&ignoreDisabled=1`;
  columns: STColumn[] = [
    { title: '编号', index: 'id', type: 'checkbox' },
    { title: '头像', type: 'img', width: 60, index: 'picture.thumbnail' },
    { title: '邮箱', index: 'email' },
    { title: '电话', index: 'phone' },
    { title: '注册时间', type: 'date', index: 'registered' }
  ];
}
```

### Radio

Use `change` event get selected data.

```typescript
import { Component } from '@angular/core';

import { STChange, STColumn, STData, STModule } from '@delon/abc/st';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'components-st-radio',
  template: ` <div class="mb-md">
      <button nz-button (click)="st.setRow(1, { checked: true })">Radio second</button>
      <button nz-button (click)="st.clearRadio()">Clean</button>
    </div>
    <st
      #st
      [data]="url"
      [columns]="columns"
      [req]="{ params: params }"
      [res]="{ process: dataChange }"
      (change)="change($event)"
    />`,
  imports: [STModule, NzButtonModule]
})
export class ComponentsStRadio {
  url = `/users?total=300`;
  params = { a: 1, b: 2 };
  columns: STColumn[] = [
    { title: '编号', index: 'id', type: 'radio', width: 70 },
    { title: '头像', type: 'img', width: 60, index: 'picture.thumbnail' },
    { title: '邮箱', index: 'email' },
    { title: '电话', index: 'phone' },
    { title: '注册时间', type: 'date', index: 'registered' }
  ];

  change(ret: STChange): void {
    console.log('change', ret);
  }

  dataChange(data: STData[]): STData[] {
    return data.map((i, index) => {
      i.disabled = index === 0;
      i.hidden = index === 1;
      return i;
    });
  }
}
```

### Context Menu

Use `contextmenu` to implement the contextmenu of the table.

```typescript
import { Component, inject } from '@angular/core';

import { STColumn, STContextmenuFn, STContextmenuItem, STContextmenuOptions, STModule } from '@delon/abc/st';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'components-st-contextmenu',
  template: `
    <st
      #st
      [widthMode]="{ type: 'strict' }"
      [data]="url"
      [req]="{ params: params }"
      [columns]="columns"
      [contextmenu]="handleContextmenu"
    />
  `,
  imports: [STModule]
})
export class ComponentsStContextmenu {
  private readonly msg = inject(NzMessageService);
  url = `/users?total=2&field=list`;
  params = { a: 1, b: 2 };
  columns: STColumn[] = [
    { title: '编号', index: 'id', width: 80 },
    { title: '邮箱', index: 'email', width: 80 },
    { title: '电话', index: 'phone' },
    { title: '注册时间', type: 'date', index: 'registered' }
  ];

  private show(options: STContextmenuOptions, item: STContextmenuItem): void {
    if (options.type === 'head') {
      this.msg.info(`点击标题，下标为：${options.colIndex}，当前按钮为：${item.text}`);
    } else {
      this.msg.info(
        `点击单元格，行下标为：${options.rowIndex}，列下标为：${options.colIndex}，当前按钮为：${item.text}`
      );
    }
  }

  handleContextmenu: STContextmenuFn = (options): STContextmenuItem[] => {
    if (options.type === 'head') {
      return [
        {
          text: 'Click me',
          fn: item => this.show(options, item)
        }
      ];
    }
    return [
      {
        text: 'Edit',
        fn: item => this.show(options, item)
      },
      {
        text: 'View',
        fn: item => this.show(options, item)
      },
      {
        text: 'Next',
        children: [
          {
            text: 'Nothing',
            fn: item => this.show(options, item)
          },
          {
            text: 'asdf',
            fn: item => this.show(options, item)
          }
        ]
      }
    ];
  };
}
```

### Drag sorting

Use `drag` to implement row drag sorting.

```typescript
import { Component } from '@angular/core';

import { STColumn, STData, STModule } from '@delon/abc/st';

@Component({
  selector: 'components-st-drag',
  template: `<st [data]="users" [columns]="columns" drag />`,
  imports: [STModule]
})
export class ComponentsStDrag {
  users: STData[] = Array(10)
    .fill({})
    .map((_, idx) => {
      return {
        id: idx + 1,
        name: `name ${idx + 1}`,
        age: Math.ceil(Math.random() * 10) + 20
      };
    });
  columns: STColumn[] = [
    { title: '编号4', index: 'id' },
    { title: '编号5', index: 'id' },
    { title: '编号6', index: 'id' },
    { title: '编号7', index: 'id' },
    { title: '编号8', index: 'id' },
    { title: '编号8', index: 'id' },
    { title: '编号8', index: 'id' },
    { title: '编号8', index: 'id' },
    { title: '编号8', index: 'id' }
  ];
}
```

### Editable Rows

Table with editable rows.

```typescript
import { Component, ViewChild, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { STColumn, STComponent, STData, STModule } from '@delon/abc/st';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

@Component({
  selector: 'components-st-edit-row',
  template: `
    <st #st [data]="users" [columns]="columns">
      <ng-template st-row="nameTpl" let-item let-index="index">
        @if (item.edit) {
          <input nz-input [ngModel]="item.name" (ngModelChange)="st.setRow(index, { name: $event })" />
        } @else {
          {{ item.name }}
        }
      </ng-template>
      <ng-template st-row="ageTpl" let-item let-index="index">
        @if (item.edit) {
          <nz-input-number [ngModel]="item.age" (ngModelChange)="st.setRow(index, { age: $event })" />
        } @else {
          {{ item.age }}
        }
      </ng-template>
      <ng-template st-row="enabledTpl" let-item let-index="index">
        @if (item.edit) {
          <nz-switch [ngModel]="item.enabled" (ngModelChange)="st.setRow(index, { enabled: $event })" />
        } @else {
          {{ item.enabled ? 'Y' : 'N' }}
        }
      </ng-template>
    </st>
  `,
  imports: [STModule, NzInputModule, FormsModule, NzInputNumberModule, NzSwitchModule]
})
export class ComponentsStEditRow {
  private readonly msg = inject(NzMessageService);
  @ViewChild('st') private st!: STComponent;
  users: STData[] = Array(10)
    .fill({})
    .map((_, idx) => {
      return {
        id: idx + 1,
        name: `name ${idx + 1}`,
        age: Math.ceil(Math.random() * 10) + 20,
        enabled: idx % 2 === 0
      };
    });
  columns: STColumn[] = [
    { title: '编号', index: 'id' },
    { title: '姓名', index: 'name', render: 'nameTpl' },
    { title: '年龄', index: 'age', render: 'ageTpl' },
    { title: '启用', index: 'enabled', render: 'enabledTpl' },
    {
      title: 'OP',
      buttons: [
        {
          text: `Edit`,
          iif: i => !i.edit,
          click: i => this.updateEdit(i, true)
        },
        {
          text: `Save`,
          iif: i => i.edit,
          click: i => {
            this.submit(i);
          }
        },
        {
          text: `Cancel`,
          iif: i => i.edit,
          click: i => this.updateEdit(i, false)
        }
      ]
    }
  ];

  private submit(i: STData): void {
    this.msg.success(JSON.stringify(this.st.pureItem(i)));
    this.updateEdit(i, false);
  }

  private updateEdit(i: STData, edit: boolean): void {
    this.st.setRow(i, { edit }, { refreshSchema: true });
  }
}
```

### Search form

Implement search form with `load()` & `reset()`.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { STColumn, STModule } from '@delon/abc/st';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'components-st-form',
  template: `
    <div class="mb-md">
      <input
        nz-input
        [(ngModel)]="params.name"
        name="name"
        nzPlaceHolder="请输入姓名"
        style="width: 100px;"
        class="mr-sm"
      />
      <button nz-button (click)="st.load(1)" [nzType]="'primary'">搜索</button>
      <button nz-button (click)="params = {}; st.reset()">重置</button>
    </div>
    <st #st [data]="url" [req]="{ params: params }" [columns]="columns" />
  `,
  imports: [STModule, NzInputModule, FormsModule, NzButtonModule]
})
export class ComponentsStForm {
  url = `/users?total=100`;
  params: { name?: string } = { name: 'asdf' };
  columns: STColumn[] = [
    { title: '编号', index: 'id', default: '-' },
    { title: '头像', type: 'img', width: 60, index: 'picture.thumbnail' },
    { title: '邮箱', index: 'email' },
    { title: '电话', index: 'phone' },
    { title: '注册时间', type: 'date', index: 'registered' }
  ];
}
```

### Row OP

Operations on rows using `addRow`, `removeRow`, `setRow` methods.
> Open the control panel for print details.

```typescript
import { Component } from '@angular/core';

import { STChange, STClickRowClassNameType, STColumn, STModule } from '@delon/abc/st';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'components-st-row-op',
  template: ` <button nz-button (click)="st.addRow({ id: 1000, email: 'add@email.com', phone: '123' })"> addRow</button>
    <button nz-button (click)="st.removeRow(0)"> removeRow index: 0 </button>
    <button nz-button (click)="st.setRow(0, { className: 'text-success' })"> Via setRow method </button>
    <st
      #st
      [data]="url"
      [req]="{ params: params }"
      [columns]="columns"
      (change)="_click($event)"
      [clickRowClassName]="clickRowClassName"
    />`,
  imports: [STModule, NzButtonModule]
})
export class ComponentsStRowOp {
  url = `/users?results=3`;
  params = { a: 1, b: 2 };
  clickRowClassName: STClickRowClassNameType = { exclusive: true, fn: () => 'text-error' };
  columns: STColumn[] = [
    { title: '编号', index: 'id' },
    { title: '邮箱', index: 'email' },
    { title: '电话', index: 'phone' }
  ];

  _click(e: STChange): void {
    console.log('click', e);
  }
}
```

### Backend filtering and sorting

Using `multiSort` supported multi-field sorting.

```typescript
import { Component } from '@angular/core';

import { STColumn, STData, STModule } from '@delon/abc/st';
import { NzButtonModule } from 'ng-zorro-antd/button';

interface UserData extends STData {
  name: {
    last: string;
    first: string;
  };
}

@Component({
  selector: 'components-st-sort',
  template: `
    <button nz-button (click)="st.reset()">重置</button>
    <st #st [data]="url" [req]="{ params: params }" [columns]="columns" multiSort />
  `,
  imports: [STModule, NzButtonModule]
})
export class ComponentsStSort {
  url = `/users?total=200`;
  params = { a: 1, b: 2 };
  columns: Array<STColumn<UserData>> = [
    { title: '编号', index: 'id' },
    { title: '头像', type: 'img', width: 60, index: 'picture.thumbnail' },
    {
      title: '姓名',
      index: 'name.last',
      format: (item, _col, index) => `${index + 1}: ${item.name.last} ${item.name.first}`,
      sort: true
    },
    {
      title: '国家',
      index: 'nat',
      filter: {
        menus: [
          { text: '中国', value: 'CH' },
          { text: '美国', value: 'US' },
          { text: '德国', value: 'DE' }
        ]
      },
      sort: true
    },
    {
      title: '性别',
      index: 'gender',
      filter: {
        menus: [
          { text: 'male', value: 'male' },
          { text: 'female', value: 'female' }
        ],
        multiple: false
      },
      sort: true
    },
    { title: '注册时间', type: 'date', index: 'registered', sort: 'descend' }
  ];
}
```

### Expandable Row

Use `#expand` template implement expandable, allowing you to receive three values: `item`, `index`, `column`. Additional achievable: nested subtables.

```typescript
import { Component } from '@angular/core';

import { STColumn, STData, STModule } from '@delon/abc/st';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzIconDirective } from 'ng-zorro-antd/icon';

@Component({
  selector: 'components-st-expand',
  template: `
    <button nz-button nzType="primary" (click)="customIcon = !customIcon">Use Custom Icon</button>
    <st
      [data]="users"
      [columns]="columns"
      [expand]="expand"
      expandRowByClick
      expandAccordion
      [expandIcon]="customIcon ? expandIcon : null"
    >
      <ng-template #expand let-item let-index="index" let-column="column">
        {{ item.description }}
      </ng-template>
      <ng-template #expandIcon let-i let-index="index">
        <nz-icon [nzType]="i.expand ? 'up' : 'down'" />
      </ng-template>
    </st>
  `,
  imports: [STModule, NzIconDirective, NzButtonComponent]
})
export class ComponentsStExpand {
  customIcon = false;
  users: STData[] = Array(10)
    .fill({})
    .map((_, idx) => ({
      id: idx + 1,
      name: `name ${idx + 1}`,
      age: Math.ceil(Math.random() * 10) + 20,
      // 是否显示展开按钮
      showExpand: idx !== 0,
      description: `${idx + 1}. My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.`
    }));
  columns: STColumn[] = [
    { title: '编号', index: 'id' },
    { title: '姓名', index: 'name' },
    { title: '年龄', index: 'age' },
    {
      buttons: [
        {
          text: 'Button'
        }
      ]
    }
  ];
}
```

### Custom columns

Create a `ng-template` with `st-row="custom-name"` and specify the name in the column description `render: 'custom-name'`; template receive `item`, `index`, `column` three values.
Specifying `type="title"` means to customize the column for the title. Additional achievable: header grouping.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { STColumn, STData, STModule } from '@delon/abc/st';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDropdownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'components-st-render',
  template: `
    <div class="mb-md">
      <nz-checkbox-group
        [(ngModel)]="customColumns"
        name="customColumns"
        (ngModelChange)="st.resetColumns({ emitReload: true })"
      />
    </div>
    <st #st [data]="users" [columns]="columns">
      <ng-template st-row="customTitle" type="title" let-c>
        {{ c.title.text }}
        <span nz-dropdown [nzDropdownMenu]="menuTpl" nzTrigger="click" [nzClickHide]="false" nzPlacement="bottomRight">
          <nz-icon nzType="down" />
        </span>
        <nz-dropdown-menu #menuTpl="nzDropdownMenu">
          <div class="ant-table-filter-dropdown p-sm">
            <input
              type="text"
              nz-input
              placeholder="Search name"
              [(ngModel)]="searchValue"
              name="searchValue"
              class="width-sm mr-sm"
            />
            <button nz-button [nzType]="'primary'" (click)="st.load(2)">Search</button>
          </div>
        </nz-dropdown-menu>
      </ng-template>
      <ng-template st-row="custom" let-item let-index="index">
        <span nz-tooltip [nzTooltipTitle]="'年龄：' + item.age">tooltip: {{ item.age }}-{{ index }}</span>
      </ng-template>
    </st>
  `,
  imports: [
    STModule,
    NzButtonModule,
    NzCheckboxModule,
    FormsModule,
    NzDropdownModule,
    NzIconModule,
    NzInputModule,
    NzTooltipModule
  ]
})
export class ComponentsStRender {
  searchValue?: string;
  users: STData[] = Array(10)
    .fill({})
    .map((_, idx) => {
      return {
        id: idx + 1,
        name: `name ${idx + 1}`,
        age: Math.ceil(Math.random() * 10) + 20
      };
    });
  columns: STColumn[] = [
    { title: '编号', index: 'id' },
    { title: '姓名', index: 'name', iif: () => this.isChoose('name') },
    { title: '年龄', index: 'age', iif: () => this.isChoose('age') },
    {
      title: '自定义',
      renderTitle: 'customTitle',
      render: 'custom',
      iif: () => this.isChoose('custom')
    }
  ];
  customColumns = [
    { label: '姓名', value: 'name', checked: true },
    { label: '年龄', value: 'age', checked: true },
    { label: '自定义', value: 'custom', checked: true }
  ];

  isChoose(key: string): boolean {
    return !!this.customColumns.find(w => w.value === key && w.checked);
  }
}
```

### Custom Buttons

Build a button group with the `buttons` property.
Generate a set of button group with a simple configuration (example code: \[DemoModalComponent]\(https://github.com/ng-alain/delon/blob/master/src/app/shared/components/dialog/modal. Component.ts), [DemoDrawerComponent](https://github.com/ng-alain/delon/blob/master/src/app/shared/components/dialog/drawer.component.ts)).
> The modal is handled by [ModalHelper](/theme/modal) and the drawer is handled by [DrawerHelper](/theme/drawer).

```typescript
import { Component, ViewChild, inject } from '@angular/core';

import { DemoDrawerComponent, DemoModalComponent } from '@shared';

import { STChange, STColumn, STComponent, STData, STModule } from '@delon/abc/st';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'components-st-buttons',
  template: ` <st #st [data]="users" [columns]="columns" (change)="change($event)" /> `,
  imports: [STModule]
})
export class ComponentsStButtons {
  private readonly msg = inject(NzMessageService);
  @ViewChild('st') readonly st!: STComponent;

  users: STData[] = Array(10)
    .fill({})
    .map((_, idx) => ({
      id: idx + 1,
      name: `name ${idx + 1}`,
      age: Math.ceil(Math.random() * 10) + 20
    }));
  columns: STColumn[] = [
    { title: '序号', type: 'no' },
    { title: '编号', index: 'id' },
    { title: '姓名', index: 'name' },
    { title: '年龄', index: 'age' },
    {
      title: '操作区',
      buttons: [
        {
          text: i => (i.ok ? 'Click' : 'Edit'),
          icon: i => ({ type: i.ok ? 'edit' : 'delete' }),
          className: i => (i.ok ? 'text-error' : null),
          type: 'modal',
          modal: {
            component: DemoModalComponent
          },
          click: (i, modal) => {
            this.msg.success(`重新加载页面，回传值：${JSON.stringify(modal)}`);
            // 触发更新按钮的文本、颜色、Icon
            this.st.setRow(i, { ok: !i.ok });
          }
        },
        {
          text: 'Drawer',
          type: 'drawer',
          drawer: {
            title: '编辑',
            component: DemoDrawerComponent
          },
          click: (_record, modal) => this.msg.success(`重新加载页面，回传值：${JSON.stringify(modal)}`)
        },
        {
          icon: 'check-circle',
          click: record => this.msg.info(`check-${record.name}`),
          iif: record => record.id % 2 === 0,
          iifBehavior: 'disabled',
          tooltip: `Is disabled button`
        },
        {
          icon: 'delete',
          type: 'del',
          pop: {
            title: 'Yar you sure?',
            okType: 'danger',
            icon: 'star'
          },
          click: (record, _modal, comp) => {
            this.msg.success(`成功删除【${record.name}】`);
            comp!.removeRow(record);
          },
          iif: record => record.id % 2 === 0
        },
        {
          text: '更多',
          children: [
            {
              text: record => (record.id === 1 ? `过期` : `正常`),
              click: record => this.msg.error(`${record.id === 1 ? `过期` : `正常`}【${record.name}】`)
            },
            {
              text: `审核`,
              click: record => this.msg.info(`check-${record.name}`),
              iif: record => record.id % 2 === 0,
              iifBehavior: 'disabled',
              tooltip: 'This is tooltip'
            },
            {
              type: 'divider'
            },
            {
              text: `重新开始`,
              icon: 'edit',
              click: record => this.msg.success(`重新开始【${record.name}】`)
            }
          ]
        }
      ]
    }
  ];

  change(e: STChange): void {
    console.log(e);
  }
}
```

### Custom Widgets

The type is `widget` custom widget, eg: Click on Avatar effect, View [source code](https://github.com/ng-alain/delon/blob/master/src/app/shared/st-widget/img.ts).

```typescript
import { Component, ViewChild } from '@angular/core';

import { STColumn, STComponent, STModule } from '@delon/abc/st';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'components-st-widget',
  template: `
    <div class="mb-md">
      <button (click)="st.clear()" nz-button>Clear Data</button>
      <button (click)="st.reload()" nz-button>Reload Data</button>
      <button (click)="st.clearStatus(); st.reload()" nz-button>Clear Status</button>
      <button (click)="changeImg()" nz-button>Change Img Data</button>
    </div>
    <st #st [data]="url" [columns]="columns" />
  `,
  imports: [STModule, NzButtonModule]
})
export class ComponentsStWidget {
  url = `/users?total=100`;
  @ViewChild('st', { static: false }) private st!: STComponent;
  columns: STColumn[] = [
    { title: '编号', index: 'id', width: 80 },
    {
      title: '自定义头像',
      type: 'widget',
      widget: { type: 'img', params: ({ record }) => ({ img: record.picture.thumbnail }) },
      width: 150
    },
    { title: '邮箱', index: 'email' }
  ];

  changeImg(): void {
    this.st.setRow(
      0,
      { picture: { thumbnail: 'https://ng-alain.com/assets/img/logo-color.svg' } },
      { refreshSchema: true, emitReload: false }
    );
  }
}
```

### colSpan and rowSpan

The table supports row/column merging, use `onCell` to set, if return `colSpan` or `rowSpan` is set to 0, the set table will not be rendered.

```typescript
import { Component } from '@angular/core';

import { STColumn, STData, STModule, STOnCellResult } from '@delon/abc/st';

// In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0
const sharedOnCell = (_: STData, index: number): STOnCellResult => {
  if (index === 1) {
    return { colSpan: 0 };
  }

  return {};
};

@Component({
  selector: 'components-st-colspan-rowspan',
  template: ` <st #st [data]="url" [ps]="5" [req]="{ params: params }" [columns]="columns" bordered size="middle" />`,
  imports: [STModule]
})
export class ComponentsStColspanRowspan {
  url = `/users?total=2&field=list`;
  params = { a: 1, b: 2 };

  columns: STColumn[] = [
    { title: '编号', index: 'id', sort: true, width: 100 },
    { title: '头像', type: 'img', index: 'picture.thumbnail', width: 60 },
    {
      title: '邮箱',
      index: 'email',
      onCell: (_, index) => ({
        colSpan: index === 1 ? 5 : 1
      })
    },
    {
      title: 'first',
      index: 'name.first',
      sort: true,
      className: 'text-center',
      onCell: (_, index) => {
        if (index === 3) {
          return { rowSpan: 2 };
        }
        // These two are merged into above cell
        if (index === 4) {
          return { rowSpan: 0 };
        }
        if (index === 1) {
          return { colSpan: 0 };
        }

        return {};
      }
    },
    { title: 'last', index: 'name.last', onCell: sharedOnCell }
  ];
}
```

### Fixed columns

To fix some columns and scroll inside other columns, and you must set `scroll.x`, `left` and `right` meanwhile.
> We use `sticky` property to fixed column，[browsers support](https://caniuse.com/#feat=css-sticky).
>
> * Specify the `width` of th if header and cell do not align properly.
> * A fixed value which is greater than table width for `scroll.x` is recommended. The sum of unfixed columns should not greater than `scroll.x`.

```typescript
import { Component } from '@angular/core';

import { STColumn, STData, STModule } from '@delon/abc/st';

@Component({
  selector: 'components-st-fixed',
  template: ` <st [data]="users" [columns]="columns" [scroll]="{ x: '1300px' }" /> `,
  imports: [STModule]
})
export class ComponentsStFixed {
  users: STData[] = Array(10)
    .fill({})
    .map((_, idx) => {
      return {
        id: idx + 1,
        name: `name ${idx + 1}`,
        age: Math.ceil(Math.random() * 10) + 20
      };
    });
  columns: STColumn[] = [
    { title: '编号1', index: 'id', fixed: 'left', width: 100 },
    { title: '编号2', index: 'id', fixed: 'left', width: 100 },
    { title: '编号3', index: 'id', fixed: 'left', width: 100 },
    { title: '编号4', index: 'id' },
    { title: '编号5', index: 'id' },
    { title: '编号6', index: 'id' },
    { title: '编号7', index: 'id' },
    { title: '编号8', index: 'id' },
    { title: '编号8', index: 'id' },
    { title: '编号8', index: 'id' },
    { title: '编号8', index: 'id' },
    { title: '编号8', index: 'id' },
    { title: '姓名10', index: 'name', fixed: 'right', width: 100 },
    { title: '姓名11', index: 'name', fixed: 'right', width: 100 },
    { title: '年龄12', index: 'age', fixed: 'right', width: 100 }
  ];
}
```

### Grouping table head

Group table head with `columns[n].children`.

```typescript
import { Component, viewChild } from '@angular/core';

import { STColumn, STComponent, STModule } from '@delon/abc/st';
import { NzButtonComponent } from 'ng-zorro-antd/button';

@Component({
  selector: 'components-st-grouping-columns',
  template: `
    <button nz-button nzType="primary" (click)="addRow()">addRow</button>
    <st #st [data]="url" [req]="{ params: params }" [columns]="columns" bordered size="middle" />
  `,
  imports: [STModule, NzButtonComponent]
})
export class ComponentsStGroupingColumns {
  private readonly st = viewChild<STComponent>('st');
  url = `/users?total=2&field=list`;
  params = { a: 1, b: 2 };
  columns: STColumn[] = [
    { title: '编号', index: 'id', sort: true, width: 100 },
    {
      title: 'Other',
      children: [
        { title: '头像', type: 'img', index: 'picture.thumbnail', width: 60 },
        { title: '邮箱', index: 'email' },
        {
          title: '姓名',
          sort: true,
          children: [
            { title: 'first', index: 'name.first', sort: true },
            { title: 'last', index: 'name.last' }
          ]
        }
      ]
    }
  ];

  addRow(): void {
    this.st()?.addRow(
      {
        id: 3,
        email: 'aaa6@qq.com',
        picture: {
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/24.jpg'
        },
        name: {
          first: 'first-11',
          last: '	last-1'
        }
      },
      { index: 0 }
    );
  }
}
```

### Responsive

Table columns are displayed as stacked in responsive mode if the screen size becomes smaller.

```typescript
import { Component } from '@angular/core';

import { STColumn, STModule } from '@delon/abc/st';

@Component({
  selector: 'components-st-responsive',
  template: ` <st
    [data]="url"
    [req]="{ params: params }"
    [columns]="columns"
    header="The header"
    footer="The footer"
    responsiveHideHeaderFooter
  />`,
  imports: [STModule]
})
export class ComponentsStResponsive {
  url = `/users?total=100`;
  params = { a: 1, b: 2 };
  columns: STColumn[] = [
    { title: '编号', index: 'id' },
    { title: '头像', type: 'img', width: 60, index: 'picture.thumbnail' },
    { title: '邮箱', index: 'email' },
    { title: '电话', index: 'phone' },
    { title: '注册时间', type: 'date', index: 'registered' }
  ];
}
```

### Statistical

Support `count`, `distinctCount`, `sum`, `average`, `max`, `min` or custom function statistics methods.

```typescript
import { Component } from '@angular/core';

import { STColumn, STData, STModule } from '@delon/abc/st';
import { CurrencyPricePipe } from '@delon/util';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'components-st-statistical',
  template: `
    <button nz-button (click)="data = []">Clean Data</button>
    <st #st [data]="data" [columns]="columns" [body]="bodyTpl">
      <ng-template #bodyTpl let-s>
        @if (st.count > 0) {
          <tr>
            <td>合计</td>
            <td>{{ s.len.text }} 个</td>
            <td>{{ s.dc.text }}</td>
            <td class="text-right">{{ s.sum.text }}</td>
            <td class="text-right">{{ s.avg.text }}</td>
            <td class="text-right">{{ s.min.text }}</td>
            <td class="text-right">{{ s.max.text }}</td>
            <td class="text-right">{{ s.custom.text }}</td>
          </tr>
          <tr class="bg-grey-lighter">
            <td colspan="3">性别平均值</td>
            <td class="text-right">{{ s.sum.value / s.len.value | price }}</td>
            <td colspan="4"></td>
          </tr>
        }
      </ng-template>
    </st>
  `,
  imports: [STModule, NzButtonModule, CurrencyPricePipe]
})
export class ComponentsStStatistical {
  data: STData[] = Array(100)
    .fill({})
    .map((_, idx) => ({
      id: idx + 1,
      price: ~~(Math.random() * 100),
      age: ~~(Math.random() * 100) > 50 ? '女' : '男'
    }));
  columns: STColumn[] = [
    { title: '行号', type: 'no' },
    { title: '编号', index: 'id', statistical: 'count', key: 'len' },
    { title: '性别', index: 'age', statistical: 'distinctCount', key: 'dc' },
    { title: 'Sum', index: 'price', type: 'currency', statistical: 'sum', key: 'sum' },
    { title: 'Average', index: 'price', type: 'currency', statistical: 'average', key: 'avg' },
    { title: 'Min', index: 'price', type: 'currency', statistical: 'min', key: 'min' },
    { title: 'Max', index: 'price', type: 'currency', statistical: 'max', key: 'max' },
    {
      title: 'Custom',
      index: 'price',
      type: 'currency',
      statistical: { type: values => ({ value: values[0], text: `**${values[0]}` }), currency: false },
      key: 'custom'
    }
  ];
}
```

### Virtual Scroll

Virtual scrolling combine with [cdk scrolling](https://material.angular.io/cdk/scrolling/overview) used to display large data, you can get `cdkVirtualScrollViewport` in `STComponent` and find more API [here](https://material.angular.io/cdk/scrolling/api#CdkVirtualScrollViewport).

```typescript
import { AfterViewInit, Component, DestroyRef, ViewChild, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { STColumn, STComponent, STModule, STPage } from '@delon/abc/st';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'components-st-virtual',
  template: `
    <button nz-button (click)="scrollToIndex(200)">Scroll To Index 200</button>
    <st #st [data]="data" [columns]="columns" [page]="page" virtualScroll [scroll]="{ x: '1300px', y: '240px' }" />
  `,
  imports: [STModule, NzButtonModule]
})
export class ComponentsStVirtual implements AfterViewInit {
  private destroy$ = inject(DestroyRef);
  @ViewChild('st', { static: false }) st!: STComponent;

  page: STPage = {
    front: false,
    show: false
  };
  data: Array<{ id: number; price: number }> = Array(2000)
    .fill({})
    .map((_, idx) => ({
      id: idx + 1,
      price: ~~(Math.random() * 100)
    }));
  columns: STColumn[] = [
    { title: '编号', index: 'id', width: 100 },
    { title: '价格1', index: 'price', width: 100 },
    { title: '价格2', index: 'price', width: 100 },
    { title: '价格3', index: 'price', width: 100 },
    { title: '价格4', index: 'price', width: 100 },
    { title: '价格5', index: 'price', width: 100 },
    { title: '价格6', index: 'price', width: 100 },
    { title: '价格7', index: 'price', width: 100 },
    { title: '价格8', index: 'price', width: 100 },
    { title: '价格9', index: 'price', width: 100 },
    { title: '价格10', index: 'price', width: 100 }
  ];

  scrollToIndex(index: number): void {
    this.st.cdkVirtualScrollViewport?.scrollToIndex(index);
  }

  ngAfterViewInit(): void {
    this.st.cdkVirtualScrollViewport?.scrolledIndexChange.pipe(takeUntilDestroyed(this.destroy$)).subscribe(data => {
      console.log('scroll index to', data);
    });
  }
}
```

### Export Excel

Save the table data as Excel.

```typescript
import { Component, ViewChild } from '@angular/core';

import { STColumn, STComponent, STData, STModule } from '@delon/abc/st';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'components-st-export',
  template: `
    <button nz-button (click)="st.export()">Export</button>
    <button nz-button (click)="st.export(true)">Export Filtered Data</button>
    <button nz-button (click)="st.export(data, { filename: 'via-data.xlsx', sheetname: 'user' })"
      >Export via data</button
    >
    <st #st [data]="data" [columns]="columns" class="mt-sm" />
  `,
  imports: [STModule, NzButtonModule]
})
export class ComponentsStExport {
  @ViewChild('st', { static: false }) st!: STComponent;
  data: STData[] = Array(10000)
    .fill({})
    .map((_, index) => ({
      id: index + 1,
      picture: {
        thumbnail: `https://dummyimage.com/100x100&text=${Math.min(index + 1, 30)}`
      },
      email: `e${index + 1}@qq.com`,
      phone: `phone - ${index + 1}`,
      price: Math.ceil(Math.random() * 10000000) + 10000000,
      registered: new Date()
    }));
  columns: STColumn[] = [
    { title: '编号', index: 'id' },
    {
      title: '头像',
      type: 'img',
      width: 60,
      index: 'picture.thumbnail',
      exported: false
    },
    { title: '邮箱', index: 'email' },
    { title: '电话', index: 'phone' },
    {
      title: '数字',
      index: 'price',
      type: 'number',
      sort: {
        compare: (a, b) => a.price - b.price
      }
    },
    { title: '货币', index: 'price', type: 'currency' },
    { title: '注册时间', type: 'date', index: 'registered' }
  ];
}
```

### Resizable

Resize the table header base on [nz-resizable](https://ng.ant.design/experimental/resizable/en).
> * Note: Don't forget to import the `nz-resizable` Less style (`@import 'ng-zorro-antd/resizable/style/entry.less';`) file in `src/styles`.
> * **Multiple headers not supported**
> * Adjustment handles will become smaller when present with filtering and sorting

```typescript
import { Component } from '@angular/core';

import { STChange, STColumn, STModule } from '@delon/abc/st';

@Component({
  selector: 'components-st-resizable',
  template: `
    <st [data]="url" [columns]="columns" [widthMode]="{ type: 'strict' }" resizable (change)="onChange($event)" />
  `,
  imports: [STModule]
})
export class ComponentsStResizable {
  url = `/users?total=2&field=list`;
  columns: STColumn[] = [
    { title: '编号', index: 'id', width: 80, resizable: false },
    { title: '头像', type: 'img', width: 60, index: 'picture.thumbnail' },
    { title: '邮箱', index: 'email', width: 150, resizable: { minWidth: 150 } },
    { title: '电话', index: 'phone' },
    { title: '佣金', index: 'price', type: 'currency' },
    { title: '注册时间', type: 'date', index: 'registered' }
  ];

  onChange({ type, resize }: STChange): void {
    if (type === 'resize') {
      console.log(resize?.width);
    }
  }
}
```
