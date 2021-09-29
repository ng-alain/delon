---
order: 1
title:
  zh-CN: 导入
  en-US: Import
---

## zh-CN

导入Excel并输出JSON，支持 File、URL 格式。

## en-US

Import Excel and output JSON, support File, URL.

```ts
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { XlsxService } from '@delon/abc/xlsx';

@Component({
  selector: 'app-demo',
  template: `
    <button nz-button (click)="url()">Via Url</button>
    <input type="file" (change)="change($event)" multiple="false" class="ml-sm" />
    <p class="mt-sm">result: {{ data | json }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoComponent {
  data: any;

  constructor(private xlsx: XlsxService, private cdr: ChangeDetectorRef) {}

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
