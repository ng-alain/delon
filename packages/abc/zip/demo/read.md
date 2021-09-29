---
order: 1
title: 解压
---

读取Zip文件信息（含内容），支持 File、URL 形式

```ts
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ZipService } from '@delon/abc/zip';

@Component({
  selector: 'app-demo',
  template: `
    <button nz-button (click)="url()">Via Url</button>
    <input type="file" (change)="change($event)" multiple="false" class="ml-sm" />
    <ol>
      <li *ngFor="let i of data">{{ i | json }}</li>
    </ol>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoComponent {
  data: any;

  constructor(private zip: ZipService, private cdr: ChangeDetectorRef) {}

  private format(data: { files: { [key: string]: { dir: string; date: Date } } }): void {
    const files = data.files;
    this.data = Object.keys(files).map(key => ({
      name: key,
      dir: files[key].dir,
      date: files[key].date,
    }));
    this.cdr.detectChanges();
  }

  url(): void {
    this.zip.read(`./assets/demo.zip`).then(res => this.format(res));
  }

  change(e: Event): void {
    const file = (e.target as HTMLInputElement).files![0];
    this.zip.read(file).then(res => this.format(res));
  }
}
```
