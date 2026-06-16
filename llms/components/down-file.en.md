---
type: Basic
title: down-file
subtitle: Download file
cols: 1
module: import { DownFileModule } from '@delon/abc/down-file';
---

A file download based on `blob`.

## API

### [down-file]

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[http-data]` | Parameter of request | `{}` | - |
| `[http-body]` | Body of request | `{}` | - |
| `[http-method]` | Method of request | `'POST','GET','HEAD','PUT','PATCH','DELETE'` | `'GET'` |
| `[http-url]` | Url of request | `string` | - |
| `[file-name]` | Specify a file name | `string, (rep: HttpResponse<Blob>) => string` | - |
| `[pre]` | Callback of download | `(ev: MouseEvent) => Promise<boolean>` | - |
| `(success)` | Success callback | `EventEmitter<HttpResponse<Blob>>` | - |
| `(error)` | Error callback | `EventEmitter<any>` | - |

## FAQ

### File name order

1. `file-name`
2. `filename*`, `filename` of `content-disposition`
3. `filename`, `x-filename` of `headers`

### Supported Browsers

Use `new Blob()` to verify [Browser Compatible](https://github.com/eligrey/FileSaver.js/#supported-browsers), The `down-file__not-support` style is added to the target element when not compatible.

> The default incompatible processing behavior is hidden. You can set the Less variable to `@down-file-not-support-behavior: 'disabled'` to can't be click.

---

## Examples

### Basic

Download a file.

```typescript
import { Component } from '@angular/core';

import { DownFileDirective } from '@delon/abc/down-file';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'components-down-file-simple',
  template: `
    @for (i of fileTypes; track $index) {
      <button nz-button down-file [http-data]="data" http-url="./assets/demo{{ i }}" file-name="demo中文" class="mr-sm">
        {{ i }}
      </button>
    }
  `,
  imports: [DownFileDirective, NzButtonModule]
})
export class ComponentsDownFileSimple {
  fileTypes = ['.xlsx', '.docx', '.pptx', '.pdf'];

  data = {
    otherdata: 1,
    time: new Date()
  };
}
```
