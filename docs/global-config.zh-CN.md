---
order: 90
title:
  en-US: Global Configuration
  zh-CN: 全局配置项
type: Dev
---

我们给众多组件添加了**全局配置**功能，你可以通过全局配置来定义组件的默认行为，从而减少在模板中需要写的代码（让你的代码更加清爽），还能在运行时修改全局配置项。

## 如何使用

想要为某些组件提供默认配置项，请在根注入器中根据注入令牌 `ALAIN_CONFIG` 提供一个符合 `AlainConfig` 接口的对象，例如：

```typescript
// global-config.module.ts
import { AlainConfig, ALAIN_CONFIG } from '@delon/util/config';

const alainConfig: AlainConfig = {
  st: { ps: 3 },
};

@NgModule({
  providers: [
    { provide: ALAIN_CONFIG, useValue: alainConfig },
  ],
})
export class GlobalConfigModule {}
```

这些全局配置项将会被注入 `AlainConfigService` 当中并保存。

## 关于 NG-ZORRO 全局配置项

请参考 NG-ZORRO [官网文档](https://ng.ant.design/docs/global-config/zh)。
