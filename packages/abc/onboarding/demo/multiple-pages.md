---
title:
  zh-CN: 多页
  en-US: Multiple Pages
order: 1
---

## zh-CN

使用 `url` 变更路由地址，建议配合 `before` 的延迟来处理目标页是否完成，否则可能会遇到无法获取目标元素。

## en-US

Use `url` to change the routing, it's recommended to use `before` to delay, otherwise the target element may not be obtained.

```ts
import { Component } from '@angular/core';
import { OnboardingService } from '@delon/abc/onboarding';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'demo',
  template: `
    <div class="mb-md pb-md border-bottom-1">
      <button class="test2-1" nz-button nzType="primary">First Button</button>
      <button class="test2-3" nz-button nzType="dashed">Third Button</button>
    </div>
    <button nz-button (click)="start()">Start</button>
  `,
})
export class DemoComponent {
  constructor(private srv: OnboardingService) {}

  start(): void {
    this.srv.start({
      items: [
        {
          selectors: '.test2-1',
          content: 'The user guidance is to help users better understand and use the product',
          next: `Go to home`,
          width: 300,
          url: '/components/onboarding',
        },
        {
          selectors: '.page-banner__slogan',
          content:
            'ng-alain is an MIT-licensed open source project. In order to achieve better and sustainable development of the project, we expect to gain more backers. You can support us in any of the following ways, Or purchasing our <a href="https://e.ng-alain.com/" target="_blank">business theme</a>',
          width: 300,
          url: '/',
          before: 200,
        },
        {
          selectors: '.test2-3',
          title: 'Test3',
          content: 'The user guidance is to help users better understand and use the product',
          url: '/components/onboarding',
        },
      ],
    });
  }
}
```
