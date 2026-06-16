---
type: CURD
title: st
subtitle: 表格
cols: 1
order: 1
module: import { STModule } from '@delon/abc/st';
---

`st` 并不是在创造另一个表格组件，而是在 `nz-table` 基础上以**可配置**形式渲染表格，在中后台里这种方式可以满足绝大多数场景，但又可以更易地管理表格渲染动作。

## 关于数据源

`data` 支持三种不同格式数据源，整体分为：URL和静态数据两类；但可以透过参数的配置达到不同的效果，同时有非常多参数可通过 `AlainSTConfig` 重置默认值，使整个 `st` 组件模板达到极简。

### URL

指的是通过一个 URL 字符串来获取数据。

- 通过 `req.params`、`req.method` 等参数解决请求数据格式问题
- 通过 `res.reName` 重置数据 `key` 而无须担心后端数据格式是否满足 `st` 需求
- 通过 `res.process` 可以对表格渲染前对数据进一步优化
- 通过 `page.zeroIndexed` 可以调整 http 请求时 `pi` 参数是否遵循 0 基索引，默认情况下为 1 基索引
- 若返回体的值是数组类型，则强制不分页
- 使用 `_HttpClient` 发起请求，因此满足 [AlainThemeConfig](/theme/http#AlainThemeConfig) 的配置也适用

### 静态数据

指的是通过指定值为 `STData[]` 或 `Observable<STData[]>`，二者都遵循以下规则：

- `page.front` 前端分页，默认：`true`
  - `true` 由 `st` 根据 `data` 长度受控分页，包括：排序、过滤等
  - `false` 由用户通过 `total` 和 `data` 参数受控分页，并维护 `(change)` 当分页变更时重新加载数据
- `page.show` 是否显示分页器；当未指定时若 `ps>total` 情况下自动不显示

### 常见问题

**Cannot read property 'text' of undefined**

若组件已经加载完毕，此时如果再次改变 `columns` 时可能会出现该错误，这是因为 `st` 每次只会根据 `columns` 对数据处理，当列定义发生改变后可能会因为列定义与现有数据无法配对，可能需要使用 `this.st.resetColumns({ columns: [], emitReload: true })` 来更新列定义并重新加载数据。

**某列显示INVALID DATA**

当在解析列数据时抛出异常时，会强制显示 *INVALID DATA*，例如当某指定 `type: 'number'` 时，而实际获得值为非有效数字型时就会抛出异常。

## API

### st

| 成员 | 说明 | 类型 | 默认值 | 全局配置 |
|----|----|----|-----|------|
| `[columns]` | 列描述 | `STColumn[]` | - | - |
| `[data]` | 数据源 | `string, STData[], Observable<STData[]>` | - | - |
| `[req]` | 请求体配置 | `STReq` | - | ✅ |
| `[res]` | 返回体配置 | `STRes` | - | ✅ |
| `[pi]` | 当前页码 | `number` | `1` | ✅ |
| `[ps]` | 每页数量，默认：`10` | `number` | `10` | ✅ |
| `[total]` | 当前总数据，在服务器渲染时需要传入，默认：`0` | `number` | `0` | - |
| `[page]` | 分页器配置 | `STPage` | - | ✅ |
| `[noResult]` | 无数据时显示内容 | `string,TemplateRef<void>` | - | ✅ |
| `[bordered]` | 是否显示边框 | `boolean` | `false` | ✅ |
| `[size]` | table大小 | `'small','middle','default'` | `'default'` | ✅ |
| `[widthMode]` | 设置表格宽度模式 | `STWidthMode` | - | ✅ |
| `[rowClassName]` | 表格行的类名 | `(record: STData, index: number) => string` | - | ✅ |
| `[clickRowClassName]` | 点击行切换类名 | `string, STClickRowClassNameType` | - | ✅ |
| `[loading]` | 页面是否加载中，当指定 `null` 由 st 受控 | `boolean | null` | `null` | - |
| `[loadingIndicator]` | 加载指示符 | `TemplateRef<void>` | - | ✅ |
| `[loadingDelay]` | 延迟显示加载效果的时间（防止闪烁） | `number` | `0` | ✅ |
| `[delay]` | 是否延迟渲染表格,需手动调用`refreshColumns()`渲染 | `boolean` | `false` | - |
| `[scroll]` | 横向或纵向支持滚动，也可用于指定滚动区域的宽高度：`{ x: "300px", y: "300px" }` | `{ y?: string; x?: string }` | - | - |
| `[virtualScroll]` | 是否启用虚拟滚动模式，与 `[nzScroll]` 配合使用 | `boolean` | `false` | ✅ |
| `[virtualItemSize]` | 虚拟滚动时每一列的高度，与 [cdk itemSize](https://material.angular.io/cdk/scrolling/api) 相同 | `number` | `54` | ✅ |
| `[virtualMaxBufferPx]` | 缓冲区最大像素高度，与 [cdk maxBufferPx](https://material.angular.io/cdk/scrolling/api) 相同 | `number` | `200` | ✅ |
| `[virtualMinBufferPx]` | 缓冲区最小像素高度，低于该值时将加载新结构，与 [cdk minBufferPx](https://material.angular.io/cdk/scrolling/api) 相同 | `number` | `100` | ✅ |
| `[virtualForTrackBy]` | 虚拟滚动数据 `TrackByFunction` 函数 | `TrackByFunction<T>` | - | ✅ |
| `[singleSort]` | 单排序规则<br>若不指定，则返回：`columnName=ascend|descend`<br>若指定，则返回：`sort=columnName.(ascend|descend)` | `STSingleSort` | `null` | ✅ |
| `[multiSort]` | 是否多排序，当 `sort` 多个相同值时自动合并，建议后端支持时使用 | `boolean, STMultiSort` | `false` | ✅ |
| `[header]` | 表格标题 | `string,TemplateRef<void>` | - | - |
| `[showHeader]` | 是否显示列头行 | `boolean` | `true` | - |
| `[footer]` | 表格底部 | `string,TemplateRef<void>` | - | - |
| `[bodyHeader]` | 表格顶部额外内容，一般用于添加合计行 | `TemplateRef<STStatisticalResults>` | - | - |
| `[body]` | 表格额外内容，一般用于添加合计行 | `TemplateRef<STStatisticalResults>` | - | - |
| `[widthConfig]` | 表头分组时指定每列宽度，与 STColumn 的 width 不可混用 | `string[]` | - | - |
| `[expandRowByClick]` | 通过点击行来展开子行 | `boolean` | `false` | ✅ |
| `[expandAccordion]` | 手风琴模式 | `boolean` | `false` | ✅ |
| `[expand]` | 当前列是否包含展开按钮，当数据源中包括 `expand` 表示展开状态 | `TemplateRef<{ $implicit: STData; index: number }>` | - | - |
| `[expandIcon]`   | 自定义展开图标 | `TemplateRef<{ $implicit: STData; index: number }>` | - |
| `[responsive]` | 是否开启响应式 | `boolean` | `true` | ✅ |
| `[responsiveHideHeaderFooter]` | 是否在小屏幕下才显示顶部与底部 | `boolean` | `false` | ✅ |
| `[resizable]` | 当前表格所有列的调整表头配置项，**不支持多表头** | `STResizable, boolean` | - | - |
| `[trackBy]` | `@for` 列表循环的 `TrackByFunction` 函数 | `TrackByFunction<T>` | - | - |
| `[drag]` | 拖拽排序 | `STDragOptions, boolean` | - | - |
| `(change)` | 变化时回调，包括：`pi`、`ps`、`checkbox`、`radio`、`sort`、`filter`、`click`、`dblClick`、`expand` 变动 | `EventEmitter<STChange>` | - | - |
| `(error)` | 异常时回调 | `EventEmitter<STError>` | - | - |

### 组件属性与方法

| 名称 | 说明 |
|----|----|
| `[filteredData]` | 获取过滤后所有数据<br>- 本地数据：包含排序、过滤后不分页数据<br>- 远程数据：不传递 `pi`、`ps` 两个参数 |
| `[count]` | 获取当前页的条目数 |
| `[list]` | 获取当前页的数据列表 |
| `resetColumns(options?: STResetColumnsOption)` | 重置列描述 |
| `load(pi = 1, extraParams?: any, options?: STLoadOptions)` | 加载指定页 |
| `reload(extraParams?: any, options?: STLoadOptions)` | 刷新当前页 |
| `reset(extraParams?: any, options?: STLoadOptions)` | 重置且重新设置 `pi` 为 `1`，包含单多选、排序、过滤状态（同默认状态一并清除） |
| `addRow(data: STData | STData[], options?: { index?: number })` | 添加行 |
| `removeRow(data: STData | STData[] | number)` | 移除行 |
| `setRow(index: number | STData, item: STData, options?: { refreshSchema?: boolean; emitReload?: boolean; arrayProcessMethod?: boolean })` | 修改行数据，支持部分字段更新 |
| `pureItem(itemOrIndex: STData | number)` | 返回纯净数据，`st` 内部会维护一组用于缓存的数据，这部分数据可能会影响后端 |
| `clear(cleanStatus = true)` | 清空所有数据 |
| `clearStatus()` | 清空所有状态（包含单多选、排序、过滤状态） |
| `clearCheck()` | 清除所有 `checkbox` |
| `clearRadio()` | 清除所有 `radio` |
| `export(newData?: STData[] | true, opt?: STExportOptions)` | 导出Excel，确保已经导入 `XlsxModule` |

一些细节：

- `extraParams` 若不传递表示保留原始值
- `STLoadOptions.merge` 是否合并模式，即 `extraParams` 跟新值合并而非替代
- `STLoadOptions.toTop` 是否跳转至顶部，若不指定由 `page.toTop` 来决定

**使用方式**

```ts
@Component({
  template: `
    <st #st></st>
    <button (click)="st.load()"></button>
    <button (click)="st.reset()">重置</button>
  `
})
class TestComponent {
  @ViewChild('st', { static: false }) comp: STComponent;
  // this.comp.load();
}
```

### STReq

| 成员 | 说明 | 类型 | 默认值 | 全局配置 |
|----|----|----|-----|------|
| `[type]` | 分页类型，`page` 使用 `pi`，`ps` 组合；`skip` 使用 `skip`，`limit` 组合 | `page,skip` | `page` | ✅ |
| `[params]` | 额外请求参数，默认自动附加 `pi`、`ps` 至URL | `any` | - | - |
| `[ignoreParamNull]` | 是否忽略参数中 `null` 或 `undefind` 值 | `Boolean` |`false` | ✅ |
| `[method]` | 请求方法 | `'POST','GET','HEAD','PUT','PATCH','DELETE'` | `'GET'` | ✅ |
| `[body]` | 请求体 `body`，当 `method: POST` 时有效 | `any` | - | - |
| `[headers]` | 请求体 `headers` | `any` | - | ✅ |
| `[reName]` | 重命名请求参数 `pi`、`ps` | `STReqReNameType, ((result: any, options: { pi: number; ps: number; total: number }) => { total: number; list: T[] })` | `{ pi: 'pi', ps: 'ps', skip: 'skip', limit: 'limit' }` | ✅ |
| `[allInBody]` | 是否将请求所有参数数据都放入 `body` 当中（`url` 地址本身参数除外），仅当 `method: 'POST'` 时有效 | `boolean` | `false` | ✅ |
| `[lazyLoad]` | 是否延迟加载数据，即渲染结束后不会主动发起请求 | `boolean` | `false` | ✅ |
| `[process]` | 请求前数据处理 | `(requestOptions: STRequestOptions) => STRequestOptions` | - | ✅ |

### STRes

| 成员 | 说明 | 类型 | 默认值 | 全局配置 |
|----|----|----|-----|------|
| `[reName]` | 重命名返回参数 `total`、`list`，支持 `a.b.c` 的嵌套写法 | `{total:string;list:string}` | - | ✅ |
| `[process]` | 数据预处理 | `(data: STData[], rawData?: any) => STData[]` | - | ✅ |

### STPage

| 成员 | 说明 | 类型 | 默认值 | 全局配置 |
|----|----|----|-----|------|
| `[front]` | 前端分页，当 `data` 为 `any[]` 或 `Observable<any[]>` 有效 | `boolean` | `true` | ✅ |
| `[zeroIndexed]` | 后端分页是否采用`0`基索引，只在`data`类型为`string`时有效 | `boolean` | `false` | ✅ |
| `[position]` | 指定分页显示的位置 | `top,bottom,both` | `bottom` | ✅ |
| `[placement]` | 指定分页分页方向 | `left,center,right` | `right` | ✅ |
| `[show]` | 是否显示分页器 | `boolean` | `true` | ✅ |
| `[showSize]` | 是否显示分页器中改变页数 | `boolean` | `false` | ✅ |
| `[pageSizes]` | 分页器中每页显示条目数下拉框值 | `number[]` | `[10, 20, 30, 40, 50]` | ✅ |
| `[showQuickJumper]` | 是否显示分页器中快速跳转 | `boolean` | `false` | ✅ |
| `[total]` | 是否显示总数据量，字符串表示自定义模板（支持三个变量名：`total` 表示数据总量、`range[0]` 和 `range[1]` 表示当前数据范围；**变量名**统一使用双花括号包裹） | `boolean, string` | `false` | ✅ |
| `[toTop]` | 切换分页时返回顶部 | `boolean` | `true` | ✅ |
| `[toTopOffset]` | 返回顶部偏移值 | `number` | `100` | ✅ |
| `[itemRender]` | 用于自定义页码的结构，用法参照 Pagination 组件 | `TemplateRef<{ $implicit: 'page' \| 'prev' \| 'next', page: number }>` | - | ✅ |
| `[simple]` | 当添加该属性时，显示为简单分页 | `boolean` | - | ✅ |
| `[checkboxIdMap]` | 缓存 checkbox 列表的标识列 | `string` | - | ✅ |

### STError

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[type]` | 异常类型，`req` 表示HTTP请求 | `req` | - |
| `[error]` | 异常内容 | `any` | - |

### STChange

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[type]` | 变更类型，包括：`loaded`、`pi`、`ps`、`checkbox`、`radio`、`sort`、`filter`、`filterChange`、`click`、`dblClick`、`expand` | `STChangeType` | - |
| `[pi]` | 当前页码 | `number` | - |
| `[ps]` | 每页数量 | `number` | - |
| `[total]` | 数据总量 | `number` | - |
| `[loaded]` | `loaded` 参数 | `STData[]` | - |
| `[checkbox]` | `checkbox` 参数 | `STData[]` | - |
| `[radio]` | `radio` 参数 | `STData` | - |
| `[sort]` | 排序参数 | `STChangeSort` | - |
| `[filter]` | 过滤参数 | `STColumn` | - |
| `[click]` | 行点击参数 | `STChangeRowClick` | - |
| `[dblClick]` | 行双击参数 | `STChangeRowClick` | - |
| `[expand]` | `expand` 参数 | `STData` | - |

### STChangeSort

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[value]` | 当前列排序状态 | `ascend,descend` | - |
| `[map]` | 所有列排序状态 | `{ [key: string]: string }` | - |
| `[column]` | 行描述 | `STColumn` | - |

### STChangeRowClick

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[e]` | 当前行事件 | `Event` | - |
| `[item]` | 当前行数据 | `STData` | - |
| `[index]` | 当前行索引 | `number` | - |

### STExportOptions

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[sheetname]` | 工作薄名称 | `string` | `Sheet1` |
| `[filename]` | 保存的文件名 | `string` | `export.xslx` |
| `[callback]` | 保存前的回调 | `(wb: WorkBook) => void` | - |

### STSingleSort

| 成员 | 说明 | 类型 | 默认值 | 全局配置 |
|----|----|----|-----|------|
| `[key]` | 请求参数名 | `string` | `sort` | ✅ |
| `[nameSeparator]` | 列名与状态间分隔符 | `string` | `.` | ✅ |

### STMultiSort

| 成员 | 说明 | 类型 | 默认值 | 全局配置 |
|----|----|----|-----|------|
| `[key]` | 请求参数名 | `string` | `sort` | ✅ |
| `[separator]` | 不同属性间分隔符 | `string` | `-` | ✅ |
| `[nameSeparator]` | 列名与状态间分隔符 | `string` | `.` | ✅ |
| `[arrayParam]` | 是否以数组的形式传递参数<br>`true` 表示使用 `url?sort=name.asc&sort=age.desc` 形式<br>`false` 表示使用 `url?sort=name.asc-age.desc` 形式 | `boolean` | `false` | ✅ |
| `[keepEmptyKey]` | 是否保持空值的键名<br>`true` 表示不管是否有排序都会发送 `key` 键名<br>`false` 表示无排序动作时不会发送 `key` 键名 | `boolean` | `true` | ✅ |
| `[global]` | **仅限全局配置项有效**，是否全局多排序模式<br>`true` 表示所有 `st` 默认为多排序<br>`false` 表示需要为每个 `st` 添加 `multiSort` 才会视为多排序模式 | `boolean` | `true` | ✅ |

### STData

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[checked]` | 选择框或单选框状态值 | `boolean` | - |
| `[disabled]` | 选择框或单选框 `disabled` 值 | `boolean` | - |
| `[expand]` | 是否展开状态 | `boolean` | - |
| `[showExpand]` | 是否显示展开按钮 | `boolean` | - |
| `[className]` | 行样式 | `string` | - |

### STColumn<T extends STData = any>

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[title]` | 列名 | `string, STColumnTitle` | - |
| `[i18n]` | 列名i18n | `string` | - |
| `[type]` | `no` 行号<br>`checkbox` 多选<br>`radio` 单选<br>`link` 链接，可触发 `click`<br>`img` 图像且居中<br>`number` 数字且居右<br>`currency` 货币且居右<br>`date` 日期格式且居中<br>`badge` [徽标](https://ng.ant.design/components/badge/zh)<br>`tag` [标签](https://ng.ant.design/components/tag/zh)<br>`yn` 将`boolean`类型徽章化 [document](/theme/yn)<br>使用 `cell` 组件渲染，见[cell](/components/cell)<br>`widget` 自定义小部件来渲染列 | `string` | - |
| `[cell]` | 使用 `cell` 组件渲染，见[cell](/components/cell)。 | `CellOptions | ((record: T, column: STColumn) => CellOptions)` | - |
| `[index]` | 列数据在数据项中对应的 key，支持 `a.b.c` 的嵌套写法 | `string, string[]` | - |
| `[render]` | 自定义渲染ID | `string, TemplateRef<void>, TemplateRef<{ $implicit: STData; index: number }>` | - |
| `[renderTitle]` | 标题自定义渲染ID | `string, TemplateRef<void>, TemplateRef<{ $implicit: STColumn; index: number }>` | - |
| `[default]` | 当不存在数据（值类型为 `undefined`）时以默认值替代 | `string` | - |
| `[buttons]` | 按钮组 | `STColumnButton[]` | - |
| `[maxMultipleButton]` | 配置最多显示多少个按钮，多余部分自动生成至 `更多` 下面 | `STColumnMaxMultipleButton, number` | - |
| `[width]` | 列宽（数字型表示 `px` 值，**注意：** 若固定列必须是数字），例如：`100`、`10%`、`100px` | `string,number` | - |
| `[fixed]` | 固定前后列，当指定时务必指定 `width` 否则视为无效 | `left,right` | - |
| `[format]` | 格式化列值 | `(item: STData, col: STColumn, index: number) => string` | - |
| `[className]` | 列 `class` 属性值，例如：`text-center` 居中； `text-right` 居右； `text-error` 异常色，更多参考[样式工具类](/theme/tools) | `string` | - |
| `[colSpan]` | 合并列 | `number` | - |
| `[onCell]` | 设置单元格属性 | `(item: T, index: number) => STOnCellResult;` | - |
| `[sort]` | 排序配置项，远程数据配置**优先**规则：<br>`true` 表示允许排序，且若数据源为本地数据时会自动生成 `compare: (a, b) => a[index] - b[index]` 方法<br>`ascend` 表示升序<br>`descend` 表示降序<br>`string` 表示远程数据排序相对应 `key` 值 | `true,string,STColumnSort` | - |
| `[filter]` | 过滤配置项 | `STColumnFilter` | - |
| `[selections]` | 选择功能配置 | `STColumnSelection[]` | - |
| `[numberDigits]` | 数字格式，`type=number` 有效 | `string` | - |
| `[dateFormat]` | 日期格式，`type=date` 有效 | `string` | `yyyy-MM-dd HH:mm` |
| `[currency]` | 货币格式选项，`type=currency` 有效 | `STColumnCurrency` | - |
| `[yn]` | 当 `type=yn` 有效 | `STColumnYn` | - |
| `[exported]` | 是否允许导出 | `boolean` | `true` |
| `[acl]` | ACL权限，等同 `can()` 参数值 | `ACLCanType` | - |
| `[click]` | 链接回调 | `(record: STData, instance?: STComponent) => void` | - |
| `[badge]` | 徽标配置项 | `STColumnBadge` | - |
| `[tag]` | 徽标配置项 | `STColumnTag` | - |
| `[enum]` | 枚举配置项 | `{ [key: string]: string; [key: number]: string }` | - |
| `[widget]` | 小部件配置项 | `STWidgetColumn` | - |
| `[noIndex]` | 行号索引开始值 | `number,(item: STData, col: STColumn, idx: number) => number` | `1` |
| `[iif]` | 条件表达式<br>1、仅赋值 `columns` 时执行一次<br>2、可调用 `resetColumns()` 再一次触发 | `(item: STColumn) => boolean` | - |
| `[statistical]` | 统计信息 | `STStatisticalType,STStatistical` | - |
| `[resizable]` | 调整表头配置项，**不支持多表头** | `STResizable, boolean` | - | - |
| `[children]` | 多表头 | `STColumn[]` | - |
| `[safeType]` | 安全渲染方式，支持[全局配置](https://ng-alain.com/docs/global-config/zh) | `text,html,safeHtml` | `safeHtml` |
| `[customRequest]` | 覆盖默认的请求行为，可以自定义自己的请求实现，例如：Graphql，支持[全局配置](https://ng-alain.com/docs/global-config/zh) | `(options: STCustomRequestOptions) => Observable<any>` | - |

### STColumnTitle

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[text]` | 列标题，`text` 与 `i18n` 必选其一 | `string` | - |
| `[i18n]` | 列标题i18n主键，`text` 与 `i18n` 必选其一 | `string` | - |
| `[optional]` | 标签可选信息 | `string` | - |
| `[optionalHelp]` | 标签可选帮助 | `string` | - |

### STColumnSort

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[default]` | 排序的受控属性 | `ascend,descend` | - |
| `[compare]` | 本地数据的排序函数，使用一个函数(参考 [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) 的 compareFunction)，`null` 忽略本地排序，但保持排序功能 | `(a: any, b: any) => number, null` | - |
| `[key]` | 远程数据的排序时后端相对应的KEY，默认使用 `index` 属性<br>若 `multiSort: false` 时：`key: 'name' => ?name=1&pi=1`<br>若 `multiSort: true` 允许多个排序 key 存在，或使用 `STMultiSort` 指定多列排序key合并规则 | `string` | - |
| `[reName]` | 远程数据的排序时后端相对应的VALUE<br>`{ ascend: '0', descend: '1' }` 结果 `?name=1&pi=1`<br>`{ ascend: 'asc', descend: 'desc' }` 结果 `?name=desc&pi=1` | `{ ascend?: string, descend?: string }` | - |
| `[directions]`  | 支持的排序方式，取值为 `'ascend'`, `'descend'`, `null` | `Array<'ascend' \| 'descend' \| null>`  | `['ascend', 'descend', null]` | ✅ |

### STColumnFilter

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[type]` | 类型，`keyword` 文本框形式 | `default,keyword,number,date,custom` | `default` |
| `[menus]` | 表头的筛选菜单项，至少一项才会生效 | `STColumnFilterMenu[]` | - |
| `[fn]` | 本地数据的筛选函数 | `(filter: STColumnFilterMenu, record: STData) => boolean` | - |
| `[default]` | 标识数据是否经过过滤，筛选图标会高亮 | `boolean` | - |
| `[icon]` | 自定义 fiter 图标<br>当 `type='default'` 默认 `filter`<br>当 `type='keyword'` 默认 `search` | `string | STIcon` | `filter` |
| `[multiple]` | 是否多选 | `boolean` | `true` |
| `[confirmText]` | filter 确认按钮文本 | `string` | - |
| `[clearText]` | filter 清除按钮文本 | `string` | - |
| `[key]` | 远程数据的过滤时后端相对应的KEY，默认使用 `index` 属性 | `string` | - |
| `[reName]` | 远程数据的过滤时后端相对应的VALUE | `(list: STColumnFilterMenu[], col: STColumn) => Object` | - |
| `[custom]` | 自定义模版 | `TemplateRef<{ $implicit: STColumnFilter; col: STColumn; handle: STColumnFilterHandle }>` | - |
| `[showOPArea]` | 是否显示操作区域 | `boolean` | `true` |
| `[placeholder]` | 在文字框中显示提示讯息 | `boolean` | `true` |
| `[number]` | 类型为 `number` 的配置项 | `Object` | - |
| `[date]` | 类型为 `date` 的配置项 | `Object` | - |

### STColumnFilterMenu

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[text]` | 文本<br>当 `type: 'keyword'` 时表示 `placeholder` | `string` | - |
| `[value]` | 值 | `any` | - |
| `[checked]` | 是否选中 | `boolean` | - |
| `[acl]` | 权限，等同 `can()` 参数值 | `ACLCanType` | - |

### STColumnButton

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[text]` | 文本与图标共存 | `string | (record: T, btn: STColumnButton) => string` | - |
| `[icon]` | 图标与文本共存 | `string | STIcon | ((record: T, btn: STColumnButton<T>) => STIcon | null | undefined)` | - |
| `[i18n]` | 文本i18n | `string` | - |
| `[type]` | 按钮类型 | `none,del,modal,static,drawer,link` | - |
| `[click]` | 点击回调；**函数：** `type=modal` 只会在 `确认` 时触发且 `modal` 参数有效<br>**reload：** 重新刷新当前页<br>**load：** 重新加载数据，并重置页码为：`1` | `(record: STData, modal?: any, instance?: STComponent) => void | reload` | - |
| `[pop]` | 是否需要气泡确认框 | `boolean, string, STColumnButtonPop` | `false` |
| `[modal]` | 模态框配置 | `STColumnButtonModal` | - |
| `[drawer]` | 抽屉配置 | `STColumnButtonDrawer` | - |
| `[children]` | 下拉菜单，当存在时以 `dropdown` 形式渲染；只支持一级 | `STColumnButton[]` | - |
| `[acl]` | ACL权限，等同 `can()` 参数值 | `ACLCanType` | - |
| `[iif]` | 自定义条件表达式 | `(item: STData, btn: STColumnButton, column: STColumn) => boolean` | `() => true` |
| `[iifBehavior]` | 表达式 `false` 值时渲染方式 | `hide,disabled` | `hide` |
| `[tooltip]` | 按钮文字提示 | `string` | - |
| `[className]` | 按钮 `class` 属性值，例如：`text-error` 异常色，更多参考[样式工具类](/theme/tools) | `string | ((record: T, btn: STColumnButton<T>) => NgClassType | null | undefined)` | - |

### STIcon

| 成员 | 说明 | 类型 | 默认值 | 全局配置 |
|----|----|----|-----|------|
| `[type]` | 图标类型 | `string` | - | - |
| `[theme]` | 图标主题风格 | `outline | twotone | fill` | `outline` | ✅ |
| `[spin]` | 是否有旋转动画 | `boolean` | `false` | ✅ |
| `[twoToneColor]` | 仅适用双色图标，设置双色图标的主要颜色，仅对当前 icon 生效 | `string` | - | ✅ |
| `[iconfont]` | 指定来自 IconFont 的图标类型 | `string` | - | ✅ |

### STColumnButtonModal

| 成员 | 说明 | 类型 | 默认值 | 全局配置 |
|----|----|----|-----|------|
| `[component]` | 目标组件对象 | `any` | - | - |
| `[params]` | 目标组件的接收参数对象 | `(record: STData) => Object` | - | - |
| `[paramsName]` | 目标组件的接收参数名，若目标组件接收值为空时，检查 [global-config.module.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/global-config.module.ts#L52) 全局设置 | `string` | `record` | ✅ |
| `[size]` | 对话框大小，支持数字类型 | `'sm','md','lg','xl'` | `'lg'` | ✅ |
| `[exact]` | 是否精准（默认：`true`），若返回值非空值（`null`或`undefined`）视为成功，否则视为错误 | `boolean` | `true` | ✅ |
| `[includeTabs]` | 是否包裹标签页，修复模态包含标签间距问题 | `boolean` | - | - |
| `[modalOptions]` | 对话框 [ModalOptions](https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/modal/modal-types.ts) 参数 | `any` | - | ✅ |

### STColumnButtonDrawer

| 成员 | 说明 | 类型 | 默认值 | 全局配置 |
|----|----|----|-----|------|
| `[title]` | 标题 | `any` | - | - |
| `[component]` | 目标组件对象 | `any` | - | - |
| `[params]` | 目标组件的接收参数对象 | `(record: STData) => Object` | - | - |
| `[paramsName]` | 目标组件的接收参数名，若目标组件接收值为空时，检查 [global-config.module.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/global-config.module.ts#L52) 全局设置 | `string` | `record` | ✅ |
| `[size]` | 抽屉大小，支持数字类型 | `'sm','md','lg','xl'` | `'md'` | ✅ |
| `[drawerOptions]` | 抽屉 [NzDrawerOptions](https://ng.ant.design/components/drawer/zh#nzdraweroptions) 参数 | `any` | - | ✅ |
| `[footer]` | 是否包含底部工具条 | `boolean` | `true` | ✅ |
| `[footerHeight]` | 底部工具条高度 | `number` | `55` | ✅ |

### STColumnSelection

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[text]` | 文本 | `string` | - |
| `[select]` | 选择项点击回调，允许对参数 `data.checked` 进行操作 | `(data: STData[]) => void` | - |
| `[acl]` | ACL权限，等同 `can()` 参数值 | `ACLCanType` | - |

### STColumnYn

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[truth]` | 真值条件 | `any` | `true` |
| `[yes]` | 徽章 `true` 时文本 | `string` | `是` |
| `[no]` | 徽章 `false` 时文本 | `string` | `否` |
| `[mode]` | 显示模式 | `full,icon,text` | `icon` |

### STcolumnCurrency

| 成员 | 说明 | 类型 | 默认值 |
|----------|-------------|------|---------|
| `[type]` | 货币渲染类型 | `commas, mega` | `commas` |
| `[format]` | 见 [CurrencyService.format](https://ng-alain.com/util/format/zh#format) | `CurrencyFormatOptions` | - |

### STColumnBadge

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[text]` | 文本 | `string` | - |
| `[color]` | 徽标颜色值 | `success,processing,default,error,warning` | - |
| `[tooltip]` | 文字提示 | `string` | - |

### STColumnTag

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[text]` | 文本 | `string` | - |
| `[color]` | Tag颜色值 | `string` | - |
| `[tooltip]` | 文字提示 | `string` | - |

### STWidgetColumn

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[type]` | 指定类型名，可通过定义 `STWidgetRegistry` 来定制，[例如](https://github.com/ng-alain/delon/blob/master/src/app/shared/st-widget/st-widget.module.ts) | `string` | - |
| `[params]` | 目标组件的参数 | `(options: { record: STData; column: STColumn }) => {}` | - |


### STWidthMode

| 成员 | 说明 | 类型 | 默认值 | 全局配置 |
|----|----|----|-----|------|
| `[type]` | 类型 | `strict,default` | `default` | ✅ |
| `[strictBehavior]` | `strict` 的行为类型 | `wrap,truncate` | `truncate` | ✅ |

### STStatistical

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[type]` | 统计类型 | `STStatisticalType | STStatisticalFn` | - |
| `[digits]` | 保留小数位数 | `number` | `2` |
| `[currency]` | 是否需要货币格式化，默认当 `type` 为 `STStatisticalFn`、 `sum`、`average`、`max`、`min` 时为 `true` | `boolean` | - |

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

| 成员 | 说明 | 类型 | 默认值 |
|----------|-------------|------|---------|
| `[disabled]` | Disable resize | `boolean` | `true` |
| `[bounds]` | 调整尺寸的边界 | `window, parent, ElementRef<HTMLElement>` | `window` |
| `[maxWidth]` | 最大宽度(超过边界部分忽略) | `number` | `360` |
| `[minWidth]` | 最小宽度 | `number` | `60` |
| `[preview]` | 开启预览 | `boolean` | `true` |

## Theme

| 成员 | 说明 | 默认值
|----|----|----|
| `@nz-table-img-radius` | 图像圆角大小 | `4px` |
| `@nz-table-img-margin-right` | 图像右边距 | `4px` |
| `@nz-table-img-max-height` | 图像最大高度 | `32px` |
| `@nz-table-img-max-width` | 图像最大宽度 | `32px` |
| `@nz-table-even-background` | 行奇偶背景色 | `none` |
| `@nz-table-rep-max-width` | 可视区域小于时触发 | `` |
| `@nz-table-rep-min-width` | 可视区域大于时触发 | `` |
| `@nz-table-rep-header-background` | 响应式下标题背景颜色 | `@border-color-split` |
| `@nz-table-rep-even-background` | 响应式下奇偶颜色 | `#f9f9f9` |
| `@nz-table-rep-column-name-color` | 响应式下文本颜色 | `rgba(0, 0, 0, 0.5)` |
| `@nz-table-rep-column-name-text-align` | 响应式下标题文本对齐方式 | `right` |
| `@nz-table-rep-column-name-width` | 响应式下标题宽度 | `100px` |
| `@nz-table-rep-column-name-padding-right` | 响应式下标题与内容右边距 | `8px` |
| `@table-row-hover-bg` | 行悬停背景色 | `#fafafa` |
| `@st-btn-disabled-color` | 禁用按钮的文本颜色 | `rgba(0, 0, 0, 0.25)` |
| `@st-title-optional-color` | 标题可选文本颜色 | `rgba(0, 0, 0, 0.35)` |
| `@st-resizable-handle-width` | 拖拽宽度 | `1px` |
| `@st-resizable-handle-height` | 拖拽高度 | `60%` |
| `@st-resizable-handle-color` | 拖拽颜色 | `@border-color-base` |

---

## 代码示例

### 基本

快速生成表格；利用 `res` 可以适配后端数据格式。

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

### 自定义数据

`data` 属性支持 `STData[]`、`Observable<STData[]>` 数据类型。

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

### 列类型

支持十种不同列类型：行号、多选、单选、徽标、标签、图片、数字、货币、日期、布尔徽章、枚举。也可以使用自定义列完成更复杂渲染。

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

### 单元格

使用 `cell` 组件更丰富的渲染。

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

### 可选择

利用 `change` 监听所选的数据；使用 `page.checkboxIdMap` 标识实现分页缓存可选择数据。

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

### 单选框

利用 `change` 监听所选的数据。

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

### 右键菜单

利用 `contextmenu` 实现点击整个表格右键菜单。

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

### 拖拽排序

使用 `drag` 实现行拖拽排序。

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

### 可编辑行

定制带行编辑功能的表格，自由操作行内容。

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

### 搜索表单

配合 `load()` & `reset()` 实现搜索表单。

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

### 行操作

利用 `addRow`、`removeRow`、`setRow` 方法对行的操作。
> 打开控制面板了解打印明细。

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

### 后端筛选和排序

利用 `multiSort` 支持多字段排序。

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

### 可展开

使用 `#expand` 模板实现可展开，允许接收 `item`、`index`、`column` 三个值。附加可实现：嵌套子表格。

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

### 自定义列

创建一个带有 `st-row="custom-name"` 的 `ng-template`，并在列描述 `render: 'custom-name'` 指定名称；模板允许接收 `item`、`index`、`column` 三个值。
如果指定 `type="title"` 表示是对标题自定义列。附加可实现：表头分组。

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

### 自定义按钮组

透过简单的配置产生一组日常按钮组（目标组件示例：[DemoModalComponent](https://github.com/ng-alain/delon/blob/master/src/app/shared/components/dialog/modal.component.ts)、[DemoDrawerComponent](https://github.com/ng-alain/delon/blob/master/src/app/shared/components/dialog/drawer.component.ts)）。
> 对话框由[ModalHelper](/theme/modal)处理，抽屉由[DrawerHelper](/theme/drawer)处理。

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

### 自定义小部件

类型为 `widget` 自定义小部件，例如点击头像处理，查看[源代码](https://github.com/ng-alain/delon/blob/master/src/app/shared/st-widget/img.ts)。

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

### 表格行/列合并

表格支持行/列合并，使用 `onCell` 进行设置，若返回 `colSpan` 或者 `rowSpan` 设值为 0 时，设置的表格不会渲染。

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

### 固定列

对于列数很多的数据，可以使用 `left` 和 `right` 固定前后的列，横向滚动查看其它数据，需要和 `scroll.x` 配合使用。
> 固定列使用了 `sticky` 属性，浏览器支持情况可以参考[这里](https://caniuse.com/#feat=css-sticky)
>
> * 若列头与内容不对齐或出现列重复，请指定列的宽度 `width`
> * 建议指定 `scroll.x` 为大于表格宽度的固定值或百分比。注意，且非固定列宽度之和不要超过 `scroll.x`

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

### 表头分组

`columns[n]` 可以内嵌 `children`，以渲染分组表头。

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

### 响应式

小屏幕下将以响应模式堆叠显示，`responsiveHideHeaderFooter` 属性可以使大屏幕不显示头和尾，反之。

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

### 统计

支持 `count`、`distinctCount`、`sum`、`average`、`max`、`min`、自定义统计方法。

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

### 虚拟滚动

虚拟滚动，结合 [cdk scrolling](https://material.angular.io/cdk/scrolling/overview) 的虚拟滚动，用于巨量数据加载。可以通过获得 `cdkVirtualScrollViewport` 进行进一步操作，见本示例及 [API](https://material.angular.io/cdk/scrolling/api#CdkVirtualScrollViewport)。

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

### 导出Excel

将表格数据保存为 Excel。

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

### 调整尺寸

基于 [nz-resizable](https://ng.ant.design/experimental/resizable/zh) 调整表头宽度。
> * 注意：不要忘记在 `src/styles` 下导入 `nz-resizable` Less 样式文件（`@import 'ng-zorro-antd/resizable/style/entry.less';`）
> * **不支持多表头**
> * 当与过滤、排序一同存在时调整手柄会变小

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
