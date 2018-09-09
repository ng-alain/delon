---
order: 1
title: _HttpClient
type: Service
---

`@delon/theme` 包含了一个叫 [\_HttpClient](https://github.com/ng-alain/delon/blob/master/packages/theme/services/http/http.client.ts) 类，其本质还是调用 Angular 的 `HttpClient`。

我们知道 ng-zorro-antd 充斥着大量 `nzLoading` 属性，它可以让网络请求的加载有更友好的体验，这样我们无须在每一个业务页面维护一个 `loadind` 变量。

当然，不光如此，`_HttpClient` 还支持一些数据统一的，例如：空值、时间数据格式为时间戳，这对于前端后离的状态下保证数据的一致性有很好的作用。

网络请求一般情况下是同 Object 对象做为参数一起使用，例如一个 `get` 请求，原始写法：

```ts
HttpClient.get(url, { params: { pi: 1 } });
```

而对于 `_HttpClient` 来讲，将参数进一步优化为：

```ts
_HttpClient.get(url, { pi: 1 });
```

剩下的所有部分都同 `HttpClient` 接口一致性。

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

| 参数                  | 说明       | 类型               | 默认值      |
| --------------------- | ---------- | ------------------ | ----------- |
| `nullValueHandling` | 空值处理   | `include,ignore`   | `include`   |
| `dateValueHandling` | 时间值处理 | `timestamp,ignore` | `timestamp` |
