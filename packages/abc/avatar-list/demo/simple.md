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

@Component({
  selector: 'app-demo',
  template: `
  <avatar-list size="mini">
      <avatar-list-item tips="Jake" src="https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png"></avatar-list-item>
      <avatar-list-item tips="Andy" src="https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png"></avatar-list-item>
      <avatar-list-item tips="Niko" src="https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png"></avatar-list-item>
      <avatar-list-item tips="Cipchk" text="Cipchk"></avatar-list-item>
      <avatar-list-item tips="heart-o" icon="heart-o"></avatar-list-item>
  </avatar-list>
  `
})
export class DemoComponent {
}
```
