---
title: Utils
subtitle: 工具类
order: 999
cols: 1
module: AdUtilsModule
---

一些常用的方法。

## API

方法名 | 说明 | 示例
----|------|-----
`isTruth` | 检查是否有真值 | -
`yuan` | 转化成RMB元字符串 | -
`fixedZero` | 不满两位数自动填充 `0` | -
`getTimeDistance` | 获取时间范围 | `getTimeDistance('week')`

**如果在HTML模板中调用**

```ts
import { Component } from '@angular/core';
import { yuan } from '@delon/abc';

@Component({
    selector: 'app-demo',
    template: `
    {{yuan(11111)}}
    `
})
export class DemoComponent {
    yuan = yuan;
}
```
