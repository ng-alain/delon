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

import { DownFileDirective } from '@delon/abc/down-file';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-demo',
  template: `
    @for (i of fileTypes; track $index) {
      <button nz-button down-file [http-data]="data" http-url="./assets/demo{{ i }}" file-name="demo中文" class="mr-sm">
        {{ i }}
      </button>
    }
  `,
  imports: [DownFileDirective, NzButtonModule]
})
export class DemoComponent {
  fileTypes = ['.xlsx', '.docx', '.pptx', '.pdf'];

  data = {
    otherdata: 1,
    time: new Date()
  };
}
```
