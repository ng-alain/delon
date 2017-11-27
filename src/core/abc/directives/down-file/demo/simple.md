---
order: 0
title: 基础样例
---

需要配合后端。

```ts
import { Component } from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
    <button nz-button *ngFor="let i of fileTypes" class="mr-sm"
        down-file [http-data]="data" http-url="./assets/demo{{i}}" file-name="demo中文">{{i}}</button>
    `
})
export class DemoComponent {

    fileTypes = ['.xlsx', '.docx', '.pptx', '.pdf'];

    data = {
        otherdata: 1,
        time: new Date()
    };
}
```
