---
type: Basic
title: xlsx
order: 6
subtitle: Excel
cols: 1
module: import { XlsxModule } from '@delon/abc/xlsx';
---

An Excel file operation based on [sheetjs](http://sheetjs.com/).

> Note: You can also use [js-xlsx](https://github.com/protobi/js-xlsx) to be another Fork by sheetjs library that provides additional options including: images, styles, and more. Finally, use `callback` option to render your excel.

## Dependencies

The sheetjs script file takes the form of lazy loading，you can change the default CDN path via [Global Configuration](/docs/global-config). By default: `https://cdn.jsdelivr.net/npm/xlsx/dist/xlsx.full.min.js`.

**Use local path**

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

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `import(fileOrUrl: File | string)` | Import Excel, return JSON | `Promise<{ [key: string]: any[][] }>` | - |
| `export(options: XlsxExportOptions)` | Export Excel | `Promise<void>` | - |
| `numberToSchema(val: number)` | Numeric to schema name | `string` | - |

### XlsxExportOptions

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[sheets]` | Data source | `{ [sheet: string]: WorkSheet } | XlsxExportSheet[]` | - |
| `[filename]` | file name of excel | `string` | `export.xlsx` |
| `[opts]` | Excel options, see [WritingOptions](https://github.com/SheetJS/sheetjs/blob/master/docbits/81_writeopts.md) | `WritingOptions` | - |
| `[callback]` | Trigger before saving | `(wb: WorkBook) => void` | - |

### [xlsx]

xlsx directive.

```html
<div [xlsx]="XlsxExportOptions">Export</div>
```

---

## Examples

### Import

Import Excel and output JSON, support File, URL.

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

### Export

Export Excel and automatically pop save dialog.

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
