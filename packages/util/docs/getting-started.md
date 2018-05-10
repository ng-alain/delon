---
order: 1
title: 开始使用
type: Documents
---

@delon/util 是一组日常普通使用的工具函数的集合。

## 如何使用？

安装 `@delon/util` 依赖包：

```bash
npm install @delon/util --save
```

导入 `DelonUtilModule` 模块：

```typescript
import { DelonUtilModule } from '@delon/util';

@NgModule({
  imports: [
    DelonUtilModule.forRoot()
  ]
})
export class AppModule { }
```

## 如何在HTML模板中调用

```ts
import { Component } from '@angular/core';
import { yuan } from '@delon/util';

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
