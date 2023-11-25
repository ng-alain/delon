---
order: 2
title: 压缩
---

## zh-CN

通过 `pushUrl` 可以快速将URL资源写入 Zip 实例。

## en-US

Use `pushUrl` to quickly write URL resources to a Zip instance.

```ts
import { ChangeDetectorRef, Component } from '@angular/core';

import type jsZipType from 'jszip';

import { ZipService } from '@delon/abc/zip';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: `
    @if (instance) {
      <button nz-button (click)="add()" [nzType]="'primary'">new</button>
      <button nz-button (click)="download()" class="ml-sm">download</button>
      <nz-table [nzData]="data" [nzFrontPagination]="false" [nzShowPagination]="false" class="mt-sm">
        <thead>
          <tr>
            <th><span>path</span></th>
            <th><span>url</span></th>
          </tr>
        </thead>
        <tbody>
          @for (i of data; track $index) {
            <tr>
              <td><input nz-input [(ngModel)]="i.path" name="path{{ $index }}" /></td>
              <td><input nz-input [(ngModel)]="i.url" name="url{{ $index }}" /></td>
            </tr>
          }
        </tbody>
      </nz-table>
    }
  `
})
export class DemoComponent {
  instance: jsZipType | null = null;
  data: Array<{ path: string; url: string }> = [
    { path: '小程序标志.zip', url: 'https://wximg.gtimg.com/shake_tv/mina/standard_logo.zip' }
  ];

  constructor(private zip: ZipService, private msg: NzMessageService, cdr: ChangeDetectorRef) {
    this.zip.create().then(ret => {
      this.instance = ret;
      cdr.detectChanges();
    });
  }

  add(): void {
    this.data.push({ path: '', url: '' });
  }

  download(): void {
    const promises: Array<Promise<void>> = [];
    this.data.forEach(item => {
      promises.push(this.zip.pushUrl(this.instance, item.path, item.url));
    });
    Promise.all(promises).then(
      () => {
        this.zip.save(this.instance).then(() => {
          this.msg.success('download success');
          this.data = [];
        });
      },
      (error: {}) => {
        console.warn(error);
        this.msg.error(JSON.stringify(error));
      }
    );
  }
}
```
