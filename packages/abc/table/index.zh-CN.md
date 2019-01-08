---
type: CURD
title: st
subtitle: 表格
cols: 1
order: 1
module: STModule
config: STConfig
---

`st` 并不是在创造另一个表格组件，而是在 `nz-table` 基础上以**可配置**形式渲染表格，在中后台里这种方式可以满足绝大多数场景，但又可以更易地管理表格渲染动作。

## 关于数据源

`data` 支持三种不同格式数据源，整体分为：URL和静态数据两类；但可以透过参数的配置达到不同的效果，同时有非常多参数可通过 `STConfig` 重置默认值，使整个 `st` 组件模板达到极简。

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

## API

### st

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[columns]` | 列描述 | `STColumn[]` | -
`[data]` | 数据源 | `string, STData[], Observable<STData[]>` | -
`[req]` | 请求体配置 | `STReq` | -
`[res]` | 返回体配置 | `STRes` | -
`[pi]` | 当前页码 | `number` | `1`
`[ps]` | 每页数量，当设置为 `0` 表示不分页，默认：`10` | `number` | `10`
`[total]` | 当前总数据，在服务器渲染时需要传入，默认：`0` | `number` | `0`
`[page]` | 分页器配置 | `STPage` | -
`[noResult]` | 无数据时显示内容 | `string,TemplateRef<void>` | -
`[bordered]` | 是否显示边框 | `boolean` | `false`
`[size]` | table大小 | `'small','middle','default'` | `'default'`
`[rowClassName]` | 表格行的类名 | `(record: STData, index: number) => string` | -
`[loading]` | 页面是否加载中 | `boolean` | `false`
`[loadingDelay]` | 延迟显示加载效果的时间（防止闪烁） | `number` | `0`
`[scroll]` | 横向或纵向支持滚动，也可用于指定滚动区域的宽高度：`{ x: "300px", y: "300px" }` | `{ y?: string; x?: string }` | -
`[singleSort]` | 单排序规则<br>若不指定，则返回：`columnName=ascend|descend`<br>若指定，则返回：`sort=columnName.(ascend|descend)` | `STSingleSort` | `null`
`[multiSort]` | 是否多排序，当 `sort` 多个相同值时自动合并，建议后端支持时使用 | `boolean, STMultiSort` | `false`
`[rowClickTime]` | 行单击多少时长之类为双击（单位：毫秒） | `number` | `200`
`[header]` | 表格标题 | `string,TemplateRef<void>` | -
`[footer]` | 表格底部 | `string,TemplateRef<void>` | -
`[body]` | 表格额外内容，一般用于添加合计行 | `TemplateRef<void>` | -
`[widthConfig]` | 表头分组时指定每列宽度，与 STColumn 的 width 不可混用 | `string[]` | -
`[expandRowByClick]` | 通过点击行来展开子行 | `boolean` | `false`
`[expand]` | 当前列是否包含展开按钮，当数据源中包括 `expand` 表示展开状态 | `TemplateRef<void>` | -
`(change)` | 变化时回调，包括：`pi`、`ps`、`checkbox`、`radio`、`sort`、`filter`、`click`、`dblClick` 变动 | `EventEmitter<STChange>` | -
`(error)` | 异常时回调 | `EventEmitter<STError>` | -

### 组件方法

名称 | 说明
--- | -----
`load(pi = 1, extraParams?: any, options?: STLoadOptions)` | 加载指定页
`reload(extraParams?: any, options?: STLoadOptions)` | 刷新当前页
`reset(extraParams?: any, options?: STLoadOptions)` | 重置且重新设置 `pi` 为 `1`，包含单多选、排序、过滤状态（同默认状态一并清除）
`removeRow(data: STData | STData[])` | 移除行
`clear(cleanStatus = true)` | 清空所有数据
`clearStatus()` | 清空所有状态（包含单多选、排序、过滤状态）
`clearCheck()` | 清除所有 `checkbox`
`clearRadio()` | 清除所有 `radio`
`export(newData?: any[], opt?: STExportOptions)` | 导出Excel，确保已经导入 `XlsxModule`

一些细节：

- `extraParams` 若不传递表示保留原始值
- `STLoadOptions.merge` 是否合并模式，即 `extraParams` 跟新值合并而非替代

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
  @ViewChild('st') comp: STComponent;
  // this.comp.load();
}
```

### STReq

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[params]` | 额外请求参数，默认自动附加 `pi`、`ps` 至URL | `any` | -
`[method]` | 请求方法 | `'POST','GET','HEAD','PUT','PATCH','DELETE'` | `'GET'`
`[body]` | 请求体 `body`，当 `method: POST` 时有效 | `any` | -
`[headers]` | 请求体 `headers` | `any` | -
`[reName]` | 重命名请求参数 `pi`、`ps` | `STReqReNameType` | `{ pi: 'pi', ps: 'ps' }`
`[allInBody]` | 是否将请求所有参数数据都放入 `body` 当中（`url` 地址本身参数除外），仅当 `method: 'POST'` 时有效 | `boolean` | `false`

### STRes

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[reName]` | 重命名返回参数 `total`、`list`，支持 `a.b.c` 的嵌套写法 | `{total:string;list:string}` | -
`[process]` | 数据预处理 | `(data: STData[]) => STData[]` | -

### STPage

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[front]` | 前端分页，当 `data` 为 `any[]` 或 `Observable<any[]>` 有效 | `boolean` | `true`
`[zeroIndexed]` | 后端分页是否采用`0`基索引，只在`data`类型为`string`时有效 | `boolean` | `false`
`[placement]` | 分页方向 | `'left','center','right'` | `'right'`
`[show]` | 是否显示分页器 | `boolean` | -
`[showSize]` | 是否显示分页器中改变页数 | `boolean` | `false`
`[pageSizes]` | 分页器中每页显示条目数下拉框值 | `number[]` | `[10, 20, 30, 40, 50]`
`[showQuickJumper]` | 是否显示分页器中快速跳转 | `boolean` | `false`
`[total]` | 是否显示总数据量，字符串表示自定义模板（支持三个变量名：`total` 表示数据总量、`range[0]` 和 `range[1]` 表示当前数据范围；**变量名**统一使用双花括号包裹） | `boolean, string` | `false`
`[toTop]` | 切换分页时返回顶部 | `boolean` | `true`
`[toTopOffset]` | 返回顶部偏移值 | `number` | `100`

### STError

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[type]` | 异常类型，`req` 表示HTTP请求 | `req` | -
`[error]` | 异常内容 | `any` | -

### STChange

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[type]` | 变更类型，包括：`pi`、`ps`、`checkbox`、`radio`、`sort`、`filter`、`click`、`dblClick` | `STChangeType` | -
`[pi]` | 当前页码 | `number` | -
`[ps]` | 每页数量 | `number` | -
`[total]` | 数据总量 | `number` | -
`[checkbox]` | `checkbox` 参数 | `STData[]` | -
`[radio]` | `radio` 参数 | `STData` | -
`[sort]` | 排序参数 | `STChangeSort` | -
`[filter]` | 过滤参数 | `STColumn` | -
`[click]` | 行点击或双击参数 | `STChangeRowClick` | -

### STChangeSort

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[value]` | 当前列排序状态 | `ascend,descend` | -
`[map]` | 所有列排序状态 | `{ [key: string]: string }` | -
`[column]` | 行描述 | `STColumn` | -

### STChangeRowClick

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[e]` | 当前行事件 | `Event` | -
`[item]` | 当前行数据 | `STData` | -
`[index]` | 当前行索引 | `number` | -

### STExportOptions

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[sheetname]` | 工作薄名称 | `string` | `Sheet1`
`[filename]` | 保存的文件名 | `string` | `export.xslx`
`[callback]` | 保存前的回调 | `(wb: WorkBook) => void` | -

### STMultiSort

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[key]` | 请求参数名 | `string` | `sort`
`[separator]` | 不同属性间分隔符 | `string` | `-`
`[nameSeparator]` | 列名与状态间分隔符 | `string` | `.`
`[global]` | 是否全局多排序模式<br>`true` 表示所有 `st` 默认为多排序<br>`false` 表示需要为每个 `st` 添加 `multiSort` 才会视为多排序模式 | `boolean` | `true`

### STData

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[checked]` | 选择框或单选框状态值 | `boolean` | -
`[disabled]` | 选择框或单选框 `disabled` 值 | `boolean` | -
`[expand]` | 是否展开状态 | `boolean` | -

### STColumn

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[title]` | 列名 | `string` | -
`[i18n]` | 列名i18n | `string` | -
`[type]` | `no` 行号<br>`checkbox` 多选<br>`radio` 单选<br>`link` 链接，可触发 `click`<br>`img` 图像且居中<br>`number` 数字且居右<br>`currency` 货币且居右<br>`date` 日期格式且居中<br>`badge` [徽标](https://ng.ant.design/components/badge/zh)<br>`tag` [标签](https://ng.ant.design/components/tag/zh)<br>`yn` 将`boolean`类型徽章化 [document](/theme/yn) | `string` | -
`[index]` | 列数据在数据项中对应的 key，支持 `a.b.c` 的嵌套写法 | `string, string[]` | -
`[render]` | 自定义渲染ID | `string` | -
`[renderTitle]` | 标题自定义渲染ID | `string` | -
`[default]` | 当不存在数据时以默认值替代 | `string` | -
`[buttons]` | 按钮组 | `STColumnButton[]` | -
`[width]` | 列宽（数字型表示 `px` 值，**注意：** 若固定列必须是数字），例如：`100`、`10%`、`100px` | `string,number` | -
`[fixed]` | 固定前后列，当指定时务必指定 `width` 否则视为无效 | `left,right` | -
`[format]` | 格式化列值 | `function(cell: any, row: any)` | -
`[className]` | 列 `class` 属性值，例如：；`text-center` 居中； `text-right` 居右； `text-danger` 异常色，更多参考[样式工具类](/theme/tools) | `string` | -
`[colSpan]` | 合并列 | `number` | -
`[sort]` | 排序配置项，远程数据配置**优先**规则：<br>`true` 表示允许排序<br>`string` 表示远程数据排序相对应 `key` 值 | `true,string,STColumnSort` | -
`[filter]` | 过滤配置项 | `STColumnFilter` | -
`[selections]` | 选择功能配置 | `STColumnSelection[]` | -
`[numberDigits]` | 数字格式，`type=number` 有效 | `string` | -
`[dateFormat]` | 日期格式，`type=date` 有效 | `string` | `YYYY-MM-DD HH:mm`
`[yn]` | 当 `type=yn` 有效 | `STColumnYn` | -
`[exported]` | 是否允许导出 | `boolean` | `true`
`[acl]` | ACL权限，等同 `can()` 参数值 | `ACLCanType` | -
`[click]` | 链接回调 | `(record: STData, instance?: STComponent) => void` | -
`[badge]` | 徽标配置项 | `STColumnBadge` | -
`[tag]` | 徽标配置项 | `STColumnTag` | -
`[noIndex]` | 行号索引开始值 | `STColumnTag` | `1`

### STColumnSort

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[default]` | 排序的受控属性 | `ascend,descend` | -
`[compare]` | 本地数据的排序函数，使用一个函数(参考 [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) 的 compareFunction) | `(a: any, b: any) => number` | -
`[key]` | 远程数据的排序时后端相对应的KEY，默认使用 `index` 属性<br>若 `multiSort: false` 时：`key: 'name' => ?name=1&pi=1`<br>若 `multiSort: true` 允许多个排序 key 存在，或使用 `STMultiSort` 指定多列排序key合并规则 | `string` | -
`[reName]` | 远程数据的排序时后端相对应的VALUE<br>`{ ascend: '0', descend: '1' }` 结果 `?name=1&pi=1`<br>`{ ascend: 'asc', descend: 'desc' }` 结果 `?name=desc&pi=1` | `{ ascend?: string, descend?: string }` | -

### STColumnFilter

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[menus]` | 表头的筛选菜单项，至少一项才会生效 | `STColumnFilterMenu[]` | -
`[fn]` | 本地数据的筛选函数 | `(filter: STColumnFilterMenu, record: STData) => boolean` | -
`[default]` | 标识数据是否经过过滤，筛选图标会高亮 | `boolean` | -
`[icon]` | 自定义 fiter 图标 | `string` | `filter`
`[multiple]` | 是否多选 | `boolean` | `true`
`[confirmText]` | filter 确认按钮文本 | `string` | `确认`
`[clearText]` | filter 清除按钮文本 | `string` | `重置`
`[key]` | 远程数据的过滤时后端相对应的KEY，默认使用 `index` 属性 | `string` | -
`[reName]` | 远程数据的过滤时后端相对应的VALUE | `(list: STColumnFilterMenu[], col: STColumn) => Object` | -

### STColumnFilterMenu

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[text]` | 文本 | `string` | -
`[value]` | 值 | `any` | -
`[checked]` | 是否选中 | `boolean` | -
`[acl]` | 权限，等同 `can()` 参数值 | `ACLCanType` | -

### STColumnButton

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[text]` | 文本与图标共存 | `string` | -
`[icon]` | 图标与文本共存 | `string | STIcon` | -
`[i18n]` | 文本i18n | `string` | -
`[format]` | 格式化文本 | `(record: STData, btn: STColumnButton) => string` | -
`[type]` | 按钮类型 | `none,del,modal,static,drawer,link` | -
`[click]` | 点击回调；**函数：** `type=modal` 只会在 `确认` 时触发且 `modal` 参数有效<br>**reload：** 重新刷新当前页<br>**load：** 重新加载数据，并重置页码为：`1` | `(record: STData, modal?: any, instance?: STComponent) => void | reload` | -
`[pop]` | 是否需要气泡确认框 | `string` | -
`[popTitle]` | 气泡确认框内容 | `string` | 确认删除吗？
`[modal]` | 模态框配置 | `STColumnButtonModal` | -
`[drawer]` | 抽屉配置 | `STColumnButtonDrawer` | -
`[children]` | 下拉菜单，当存在时以 `dropdown` 形式渲染；只支持一级 | `STColumnButton[]` | -
`[acl]` | ACL权限，等同 `can()` 参数值 | `ACLCanType` | -
`[iif]` | 自定义条件表达式 | `(item: STData, btn: STColumnButton, column: STColumn) => boolean` | `() => true`

### STIcon

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[type]` | 图标类型 | `string` | -
`[theme]` | 图标主题风格 | `outline | twotone | fill` | `outline`
`[spin]` | 是否有旋转动画 | `boolean` | `false`
`[twoToneColor]` | 仅适用双色图标，设置双色图标的主要颜色，仅对当前 icon 生效 | `string` | -
`[iconfont]` | 指定来自 IconFont 的图标类型 | `string` | -

### STColumnButtonModal

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[component]` | 目标组件对象，务必在 `entryComponents` 注册 | `any` | -
`[params]` | 目标组件的接收参数对象 | `(record: STData) => Object` | -
`[paramsName]` | 目标组件的接收参数名，若目标组件接收值为空时，检查 [delon.module.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/delon.module.ts#L69) 全局设置 | `string` | record
`[size]` | 对话框大小，支持数字类型 | `'sm','md','lg','xl'` | `'lg'`
`[exact]` | 是否精准（默认：`true`），若返回值非空值（`null`或`undefined`）视为成功，否则视为错误 | `boolean` | `true`
`[includeTabs]` | 是否包裹标签页，修复模态包含标签间距问题 | `boolean` | -
`[modalOptions]` | 对话框 [ModalOptionsForService](https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/modal/nz-modal.type.ts) 参数 | `any` | -

### STColumnButtonDrawer

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[title]` | 标题 | `any` | -
`[component]` | 目标组件对象，务必在 `entryComponents` 注册 | `any` | -
`[params]` | 目标组件的接收参数对象 | `(record: STData) => Object` | -
`[paramsName]` | 目标组件的接收参数名，若目标组件接收值为空时，检查 [delon.module.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/delon.module.ts#L69) 全局设置 | `string` | record
`[size]` | 抽屉大小，支持数字类型 | `'sm','md','lg','xl'` | `'md'`
`[drawerOptions]` | 抽屉 [NzDrawerOptions](https://ng.ant.design/components/drawer/zh#nzdraweroptions) 参数 | `any` | -

### STColumnSelection

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[text]` | 文本 | `string` | -
`[select]` | 选择项点击回调，允许对参数 `data.checked` 进行操作 | `(data: STData[]) => void` | -
`[acl]` | ACL权限，等同 `can()` 参数值 | `ACLCanType` | -

### STColumnYn

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[truth]` | 真值条件 | `any` | `true`
`[yes]` | 徽章 `true` 时文本 | `string` | `是`
`[no]` | 徽章 `false` 时文本 | `string` | `否`

### STColumnBadge

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[text]` | 文本 | `string` | -
`[color]` | 徽标颜色值 | `success,processing,default,error,warning` | -

### STColumnTag

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[text]` | 文本 | `string` | -
`[color]` | Tag颜色值 | `string` | -

