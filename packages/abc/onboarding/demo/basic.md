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
import { Component } from '@angular/core';
import { OnboardingService } from '@delon/abc/onboarding';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'demo',
  template: `
    <div class="mb-md pb-md border-bottom-1">
      <button class="test1-1" nz-button nzType="primary" (click)="handleClick()">First Button</button>
      <button class="test1-2" nz-button nzType="link">Second Button</button>
      <button class="test1-3" nz-button nzType="dashed">Third Button</button>
    </div>
    <button nz-button (click)="start()">Start</button>
    <button nz-button (click)="viaHttp()">Start Via Http</button>
    <a href="https://github.com/ng-alain/delon/blob/master/src/assets/schema/onboarding.json" target="_blank" class="ml-md">
      onboarding.json
    </a>
  `,
})
export class DemoComponent {
  constructor(private srv: OnboardingService, private msg: NzMessageService, private http: _HttpClient) {}

  handleClick(): void {
    this.msg.info(`click`);
  }

  start(): void {
    this.srv.start({
      items: [
        { selectors: '.test1-1', content: 'The user guidance is to help users better understand and use the product', width: 300 },
        { selectors: '.test1-2', title: 'Test2', content: 'The user guidance is to help users better understand and use the product' },
        { selectors: '.test1-3', title: 'Test3', content: 'The user guidance is to help users better understand and use the product' },
      ],
    });
  }

  viaHttp(): void {
    this.http.get(`./assets/schema/onboarding.json`).subscribe(res => {
      console.log(res);
      this.srv.start(res);
    });
  }
}
```
