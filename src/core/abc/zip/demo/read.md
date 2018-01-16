---
order: 1
title: 解压
---

读取Zip文件信息（含内容），支持 File、URL 形式

```ts
import { Component } from '@angular/core';
import { ZipService } from '@delon/abc';

@Component({
    selector: 'app-demo',
    template: `
    <button nz-button (click)="url()">Via Url</button>
    <input type="file" (change)="change($event)" multiple="false" class="ml-sm" />
    <ol>
        <li *ngFor="let i of data">{{i | json}}</li>
    </ol>
    `
})
export class DemoComponent {
    constructor(private zip: ZipService) {}
    data: any;

    private format(data: any) {
        const files = data.files;
        this.data = Object.keys(files).map(key => {
            return {
                name: key,
                dir: files[key].dir,
                date: files[key].date
            };
        });
    }

    url() {
        this.zip.read(`./assets/demo.zip`).then(res => this.format(res));
    }

    change(e: Event) {
        const file = (e.target as HTMLInputElement).files[0];
        this.zip.read(file).then(res => this.format(res));
    }
}
```
