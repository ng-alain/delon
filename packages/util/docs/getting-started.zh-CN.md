---
order: 1
title: 开始使用
type: Documents
module: DelonUtilModule
config: DelonUtilConfig
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
    DelonUtilModule
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
