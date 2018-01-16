---
order: 2
title: 压缩
---

通过 `pushUrl` 可以快速将URL资源写入 Zip 实例。

```ts
import { NzMessageService } from 'ng-zorro-antd';
import { Component } from '@angular/core';
import { ZipService } from '@delon/abc';
import * as JSZip from 'jszip';

@Component({
    selector: 'app-demo',
    template: `
    <div *ngIf="instance">
        <button nz-button (click)="data.push({})" [nzType]="'primary'">new</button>
        <button nz-button (click)="download()">download</button>
        <nz-table [nzDataSource]="data" [nzIsPagination]="false" class="mt-sm">
            <thead nz-thead>
                <tr>
                <th nz-th><span>path</span></th>
                <th nz-th><span>url</span></th>
                </tr>
            </thead>
            <tbody nz-tbody>
                <tr *ngFor="let i of data; let index = index">
                    <td nz-td><nz-input [(ngModel)]="i.path" name="path{{index}}"></nz-input></td>
                    <td nz-td><nz-input [(ngModel)]="i.url" name="url{{index}}"></nz-input></td>
                </tr>
            </tbody>
        </nz-table>
    </div>
    `
})
export class DemoComponent {

    instance: JSZip = null;
    data: { path: string, url: string }[] = [
        { path: 'demo.docx', url: 'http://ng-alain.com/assets/demo.docx' },
        { path: 'img/zorro.svg', url: 'https://ng.ant.design/assets/img/zorro.svg' },
        { path: '小程序标志.zip', url: 'https://wximg.gtimg.com/shake_tv/mina/standard_logo.zip' }
    ];

    constructor(private zip: ZipService, private msg: NzMessageService) {
        this.zip.create().then(ret => this.instance = ret);
    }

    download() {
        const promises: Promise<any>[] = [];
        this.data.forEach(item => {
            promises.push(this.zip.pushUrl(this.instance, item.path, item.url));
        });
        Promise.all(promises).then(() => {
            this.zip.save(this.instance).then(() => {
                this.msg.success('download success');
                this.data = [];
            });
        });
    }
}
```
