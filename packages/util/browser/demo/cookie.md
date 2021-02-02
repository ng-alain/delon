---
type: example
---

```ts
import { Component } from '@angular/core';
import { CookieOptions, CookieService } from '@delon/util/browser';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: `
    <p classs="mb-md">Result: {{ value || 'NULL' }}</p>
    <button nz-button (click)="get()">Get</button>
    <button nz-button (click)="set()">Set</button>
    <button nz-button (click)="set({ expires: 10 })">Set 10s expired</button>
    <button nz-button (click)="remove()">Remove</button>
  `,
})
export class DemoComponent {
  key = 'test-key';
  value: string;

  constructor(private cookieSrv: CookieService, private msg: NzMessageService) {
    this.get();
  }

  get(): void {
    this.value = this.cookieSrv.get(this.key)!;
  }

  set(options?: CookieOptions): void {
    this.cookieSrv.put(this.key, (+new Date()).toString(), options);
    this.msg.success(`Success`);
  }

  remove(): void {
    this.cookieSrv.remove(this.key);
  }
}
```
