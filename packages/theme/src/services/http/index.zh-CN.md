---
order: 1
title: _HttpClient
type: Service
---

`@delon/theme` 包含了一个叫 [\_HttpClient](https://github.com/ng-alain/delon/blob/master/packages/theme/src/services/http/http.client.ts) 类，其本质还是调用 Angular 的 `HttpClient`。

## 特性

- 更友好的调用方法
- 维护 `loading` 属性
- 处理空值
- 统一时间格式为时间戳

## 示例

网络请求一般情况下是同 Object 对象做为参数一起使用，例如一个 `get` 请求，原始写法：

```ts
HttpClient.get(url, { params: { pi: 1 } });
```

而对于 `_HttpClient` 来讲，将参数进一步优化为：

```ts
_HttpClient.get(url, { pi: 1 });
```

## AlainThemeConfig

通用配置项，例如统一对 `_HttpClient` 设置空值、时间处理方式。

```ts
import { AlainThemeConfig } from '@delon/theme';
export function fnAlainThemeConfig(): AlainThemeConfig {
  return Object.assign(new AlainThemeConfig(), <AlainThemeConfig>{
    http: {
      nullValueHandling: 'ignore',
    },
  });
}

@NgModule({})
export class DelonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DelonModule,
      providers: [
        { provide: AlainThemeConfig, useFactory: fnAlainThemeConfig },
      ],
    };
  }
}
```

### API

| 参数     | 说明     | 类型                                | 默认值    |
| --------------------- | ---------- | ------------------ | ----------- |
| `nullValueHandling` | 空值处理   | `include,ignore`   | `include`   |
| `dateValueHandling` | 时间值处理 | `timestamp,ignore` | `timestamp` |
