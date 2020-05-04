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
    DelonUtilModule
  ]
})
export class AppModule { }
```

## 参数

可以通过[全局配置](/docs/global-config)覆盖 `ArrayService` 设置映射名称。
