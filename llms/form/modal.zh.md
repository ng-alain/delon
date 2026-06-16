---
title: modal
subtitle: 模态框
type: Examples
---

在模态框里使用表单是一种非常常见场景，其实 `ng g ng-alain:edit edit` 的时候会得到一个完整示例；会得到这样的一个HTML模板：

```html
<sf mode="edit" [schema]="schema" [ui]="ui" [formData]="i" button="none">
  <div class="modal-footer">
    <button nz-button type="button" (click)="close()">关闭</button>
    <button nz-button type="submit" [nzType]="'primary'" (click)="save(sf.value)" [disabled]="!sf.valid" [nzLoading]="http.loading">保存</button>
  </div>
</sf>
```

`.modal-footer` 已经非常友好的融合了自定义动态框。

---

## 代码示例

### 基础样例

最简单的用法。

```typescript
import { Component, inject } from '@angular/core';

import { DemoSfComponent } from '@shared';

import { ModalHelper } from '@delon/theme';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-modal-simple',
  template: ` <button nz-button type="button" (click)="open()">Open</button> `,
  imports: [NzButtonModule]
})
export class FormModalSimple {
  private readonly mh = inject(ModalHelper);
  private readonly msg = inject(NzMessageService);

  open(): void {
    this.mh.create(DemoSfComponent).subscribe(res => this.msg.success(JSON.stringify(res)));
  }
}
```
