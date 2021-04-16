---
order: 1
title:
  zh-CN: 基础样例
  en-US: Basic Usage
---

## zh-CN

最简单的用法。

## en-US

Simplest of usage.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <button nz-button nzType="primary" (click)="src = src === one ? two : one">Change File</button>
    <pdf [src]="src" style="height: 300px" (change)="handle($event)"></pdf>
  `,
})
export class DemoComponent {
  one = `https://raw.githubusercontent.com/mozilla/pdf.js/master/web/compressed.tracemonkey-pldi-09.pdf`;
  two = `https://raw.githubusercontent.com/mozilla/pdf.js/master/examples/learning/helloworld.pdf`;
  src = this.one;
  handle(ev: any): void {
    console.log(ev);
  }
}
```
