---
title:
  zh-CN: 基础样例
  en-US: Basic Usage
order: 0
---

## zh-CN

最简单的用法。

## en-US

Simplest of usage.

```ts
import { JsonPipe } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CacheService } from '@delon/cache';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: `
    <p>value: {{ value | json }}</p>
    <div class="pt-sm">
      Basic:
      <button nz-button (click)="srv.set(key, newValue)">Set</button>
      <button nz-button (click)="value = srv.getNone(key)">Get</button>
      <button nz-button (click)="srv.remove(key)">Remove</button>
      <button nz-button (click)="srv.clear()">Clear</button>
    </div>
    <div class="pt-sm">
      Key is valid request:
      <button nz-button (click)="getByHttp()">Get</button>
    </div>
    <div class="pt-sm">
      Notify:
      <button nz-button (click)="registerNotify()">Register</button>
      <button nz-button (click)="unRegisterNotify()">UnRegister</button>
    </div>
  `,
  imports: [JsonPipe, NzButtonModule]
})
export class DemoComponent implements OnDestroy {
  value: any;
  key = 'demo';
  private notify$?: Subscription;

  get newValue(): number {
    return +new Date();
  }

  constructor(
    public srv: CacheService,
    private msg: NzMessageService
  ) {}

  getByHttp(): void {
    this.srv.get(`https://randomuser.me/api/?results=1`).subscribe(res => {
      this.value = res;
    });
  }

  registerNotify(): void {
    if (this.notify$) this.notify$.unsubscribe();
    this.notify$ = this.srv.notify(this.key).subscribe(res => {
      if (res == null) {
        this.msg.success('register success');
        return;
      }
      this.msg.warning(`"${this.key}" new status: ${res.type}`);
    });
  }

  unRegisterNotify(): void {
    this.srv.cancelNotify(this.key);
  }

  ngOnDestroy(): void {
    if (this.notify$) this.notify$.unsubscribe();
  }
}
```
