---
title: xlsx
subtitle: Excel 操作
cols: 1
module: NaXlsxModule
---

一个基于 [sheetjs](https://docs.sheetjs.com) 的Excel文件操作，它是目前在浏览器中包含最全的Excel操作的脚本库。

> 注：你也可以使用 [js-xlsx](https://github.com/protobi/js-xlsx) 是另一个 Fork sheetjs 的类库，它提供包括：图片、样式等额外选项。最后你利用 `callback` 选项重要渲染你的 excel。

## 依赖

```
npm install --save file-saver
```

由于 sheetjs 脚本大小以及对 Excel 的操作并不是刚需的原因，因此采用一种延迟加载脚本的形式。在导入 `NaXlsxModule` 模块时允许你指定个 URL、CDN 路径，默认情况下使用 `//cdn.bootcss.com/xlsx/0.12.13/xlsx.full.min.js`。

## API

### NaLazyService

方法 | 说明 |
----|------
`import(fileOrUrl: File | string): Promise<{ [key: string]: any[][] }>` | 导入Excel，返回 JSON
`export(options: NaXlsxExportOptions): Promise<void>` | 导出Excel

### NaXlsxExportOptions

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[sheets]` | 数据源 | `{ [sheet: string]: WorkSheet } | NaXlsxExportSheet[]` | -
`[filename]` | Excel文件名 | `string` | `export.xlsx`
`[opts]` | Excel写入选项，见 [WritingOptions](https://docs.sheetjs.com/#writing-options) | `WritingOptions` | -
`[callback]` | 保存前触发 | `(wb: WorkBook) => void` | -

### na-xlsx 指令

```html
<div [na-xlsx]="NaXlsxExportOptions">导出</div>
```

## 常见问题

### csv格式

需要 UTF8 with BOM 格式才能解析。
