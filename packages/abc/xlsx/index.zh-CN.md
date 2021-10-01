---
type: Basic
title: xlsx
order: 6
subtitle: Excel 操作
cols: 1
module: import { XlsxModule } from '@delon/abc/xlsx';
---

一个基于 [SheetJS](http://sheetjs.com/) 的Excel文件操作，它是目前在浏览器中包含最全的Excel操作的脚本库。

> 注：你也可以使用 [js-xlsx](https://github.com/protobi/js-xlsx) 是另一个 Fork sheetjs 的类库，它提供包括：图片、样式等额外选项。最后你利用 `callback` 选项重要渲染你的 excel。

## 依赖

由于 sheetjs 脚本大小以及对 Excel 的操作并不是刚需的原因，因此采用一种延迟加载脚本的形式，可以通过[全局配置](/docs/global-config)配置来改变默认 CDN 路径（或使用[本地路径](https://angular.cn/guide/workspace-config#asset-config)），默认情况下使用 `https://cdn.bootcdn.net/ajax/libs/xlsx/0.16.8/xlsx.full.min.js`。

## API

### LazyService

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `import(fileOrUrl: File | string)` | 导入Excel，返回 JSON | `Promise<{ [key: string]: any[][] }>` | - |
| `export(options: XlsxExportOptions)` | 导出Excel | `Promise<void>` | - |
| `numberToSchema(val: number)` | 数值转符号名 | `string` | - |

### XlsxExportOptions

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[sheets]` | 数据源 | `{ [sheet: string]: WorkSheet } | XlsxExportSheet[]` | - |
| `[filename]` | Excel文件名 | `string` | `export.xlsx` |
| `[opts]` | Excel写入选项，见 [WritingOptions](https://github.com/SheetJS/sheetjs/blob/master/docbits/81_writeopts.md) | `WritingOptions` | - |
| `[callback]` | 保存前触发 | `(wb: WorkBook) => void` | - |

### [xlsx]

xlsx 指令。

```html
<div [xlsx]="XlsxExportOptions">导出</div>
```
