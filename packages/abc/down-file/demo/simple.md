---
order: 0
title:
  zh-CN: 基础
  en-US: Basic
---

## zh-CN

下载一个文件。

## en-US

Download a file.

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
