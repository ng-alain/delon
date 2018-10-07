---
order: 1
title: 开始使用
type: Documents
---

@delon/util 是一组日常普通使用的工具函数的集合。

## 如何使用

安装 `@delon/util` 依赖包：

```bash
yarn add @delon/util
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

## DelonUtilConfig

通用配置项，例如统一对 `ArrayService` 设置映射名称。

```ts
import { DelonUtilConfig } from '@delon/abc';
export function fnDelonUtilConfig(): DelonUtilConfig {
  return Object.assign(new DelonUtilConfig(), <DelonUtilConfig>{
    array: {
      idMapName: 'Id',
      parentIdMapName: 'ParentId'
    }
  });
}

@NgModule({ })
export class DelonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DelonModule,
      providers: [
        { provide: DelonUtilConfig, useFactory: fnDelonUtilConfig }
      ]
    };
  }
}
```

## 常见问题

### 如何在HTML模板中调用

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
