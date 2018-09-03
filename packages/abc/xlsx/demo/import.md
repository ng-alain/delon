---
order: 1
title: 导入
---

导入Excel并输出JSON，支持 File、URL 形式

```ts
import { Component } from '@angular/core';
import { STColumn, XlsxService } from '@delon/abc';

@Component({
  selector: 'app-demo',
  template: `
    <button nz-button (click)="url()">Via Url</button>
    <input type="file" (change)="change($event)" multiple="false" class="ml-sm" />
    <p class="mt-sm">result: {{data | json}}</p>
    `,
})
export class DemoComponent {
  constructor(private xlsx: XlsxService) {}
  data: any;
  url() {
    this.xlsx.import(`./assets/demo.xlsx`).then(res => this.data = res);
  }

  change(e: Event) {
    const node = e.target as HTMLInputElement;
    this.xlsx.import(node.files[0]).then(res => this.data = res);
    node.value = '';
  }
}
```
