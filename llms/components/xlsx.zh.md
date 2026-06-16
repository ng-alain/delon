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

由于 sheetjs 脚本大小以及对 Excel 的操作并不是刚需的原因，因此采用一种延迟加载脚本的形式，可以通过[全局配置](/docs/global-config)配置来改变默认 CDN 路径，默认情况下使用 `https://cdn.jsdelivr.net/npm/xlsx/dist/xlsx.full.min.js`。

**使用本地路径**

```bash
yarn add -D xlsx
```

```json
// angular.json
{
  "glob": "**/{xlsx.full.min,cpexcel}.js",
  "input": "./node_modules/xlsx/dist",
  "output": "assets/xlsx/"
}
```

```ts
// global-config.module.ts
const alainConfig: AlainConfig = {
  xlsx: {
    url: '/assets/xlsx/xlsx.full.min.js',
    modules: [`/assets/xlsx/cpexcel.js`]
  }
};
```

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

---

## 代码示例

### 导入

导入Excel并输出JSON，支持 File、URL 格式。

```typescript
import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

import { XlsxService } from '@delon/abc/xlsx';
import { NzButtonModule } from 'ng-zorro-antd/button';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'components-xlsx-import',
  template: `
    <button nz-button (click)="url()">Via Url</button>
    <input type="file" (change)="change($event)" multiple="false" class="ml-sm" />
    <p class="mt-sm">result: {{ data | json }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NzButtonModule, JsonPipe]
})
export class ComponentsXlsxImport {
  data: NzSafeAny;

  constructor(
    private xlsx: XlsxService,
    private cdr: ChangeDetectorRef
  ) {}

  url(): void {
    this.xlsx.import(`./assets/demo.xlsx`).then(res => {
      this.data = res;
      this.cdr.detectChanges();
    });
  }

  change(e: Event): void {
    const node = e.target as HTMLInputElement;
    this.xlsx.import(node.files![0]).then(res => {
      this.data = res;
      this.cdr.detectChanges();
    });
    node.value = '';
  }
}
```

### 导出

导出Excel并自动弹出保存对话框。

```typescript
import { Component, inject } from '@angular/core';

import { STColumn, STData, STModule } from '@delon/abc/st';
import { XlsxService } from '@delon/abc/xlsx';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'components-xlsx-export',
  template: `
    <button nz-button (click)="download('xlsx')">Export Xlsx</button>
    <button nz-button (click)="download('csv')">Export Csv</button>
    <st [data]="users" [ps]="3" [columns]="columns" class="mt-sm" />
  `,
  imports: [NzButtonModule, STModule]
})
export class ComponentsXlsxExport {
  private readonly xlsx = inject(XlsxService);

  users: STData[] = Array(100)
    .fill({})
    .map((_, idx) => ({
      id: idx + 1,
      name: `name ${idx + 1}`,
      age: Math.ceil(Math.random() * 10) + 20
    }));
  columns: STColumn[] = [
    { title: '编号', index: 'id', type: 'checkbox' },
    { title: '姓名', index: 'name' },
    { title: '年龄', index: 'age' }
  ];

  download(format: 'xlsx' | 'csv'): void {
    const data = [this.columns.map(i => i.title)];
    this.users.forEach(i => data.push(this.columns.map(c => i[c.index as string])));
    this.xlsx.export({
      sheets: [
        {
          data,
          name: 'sheet name'
        }
      ],
      format
    });
  }
}
```
