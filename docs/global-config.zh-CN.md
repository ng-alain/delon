---
order: 90
title:
  en-US: Global Configuration
  zh-CN: 全局配置项
type: Dev
---

我们给众多组件添加了**全局配置**功能，你可以通过全局配置来定义组件的默认行为，从而减少在模板中需要写的代码（让你的代码更加清爽），还能在运行时修改全局配置项。

## 如何使用

想要为某些组件提供默认配置项，可以使用 `provideAlain` 函数，转入一个符合 `AlainProvideOptions` 接口的对象，例如：

```typescript
// global-config.module.ts
import { AlainConfig, AlainProvideLang } from '@delon/util/config';
import { ICONS } from '../style-icons';
import { ICONS_AUTO } from '../style-icons-auto';

const defaultLang: AlainProvideLang = {
  abbr: 'zh-CN',
  ng: ngLang,
  zorro: zorroLang,
  date: dateLang,
  delon: delonLang
};

const alainConfig: AlainConfig = {
  st: { ps: 3 },
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideAlain({ config: alainConfig, defaultLang, icons: [...ICONS_AUTO, ...ICONS] })
  ]
};
```

这些全局配置项将会被注入 `AlainConfigService` 当中并保存。

## 关于 NG-ZORRO 全局配置项

请参考 NG-ZORRO [官网文档](https://ng.ant.design/docs/global-config/zh)。
