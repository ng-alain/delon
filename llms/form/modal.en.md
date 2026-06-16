---
title: modal
subtitle: Modal
type: Examples
---

Using a form in a modal box is a very common scenario. In fact, when you run `ng g ng-alain:edit edit`, you will get a complete example; you will get an HTML template like this:

```html
<sf mode="edit" [schema]="schema" [ui]="ui" [formData]="i" button="none">
  <div class="modal-footer">
    <button nz-button type="button" (click)="close()">Close</button>
    <button nz-button type="submit" [nzType]="'primary'" (click)="save(sf.value)" [disabled]="!sf.valid" [nzLoading]="http.loading">Save</button>
  </div>
</sf>
```

`.modal-footer` has been very friendly to integrate custom dynamic boxes.

---

## Examples

### Basic Usage

Simplest of usage.

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
