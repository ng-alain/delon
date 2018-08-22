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
  <na-avatar-list size="mini">
    <na-avatar-list-item tips="Jake" src="https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png"></na-avatar-list-item>
    <na-avatar-list-item tips="Andy" src="https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png"></na-avatar-list-item>
    <na-avatar-list-item tips="Niko" src="https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png"></na-avatar-list-item>
    <na-avatar-list-item tips="Cipchk" text="Cipchk"></na-avatar-list-item>
    <na-avatar-list-item tips="heart-o" icon="heart-o"></na-avatar-list-item>
  </na-avatar-list>`
})
export class DemoComponent {
}
```
