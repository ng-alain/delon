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
- 支持修饰器 @GET、@POST 等

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

| 参数                | 说明       | 类型               | 默认值      |
| ------------------- | ---------- | ------------------ | ----------- |
| `nullValueHandling` | 空值处理   | `include,ignore`   | `include`   |
| `dateValueHandling` | 时间值处理 | `timestamp,ignore` | `timestamp` |

## 使用修饰器

目标类都必须继承 `BaseApi` 基类。

### 示例

```ts
@BaseUrl('/user')
@BaseHeaders({ bh: 'a' })
class RestService extends BaseApi {
  @GET()
  query(@Query('pi') pi: number, @Query('ps') ps: number): Observable<any> {
    return;
  }

  @GET(':id')
  GET(@Path('id') id: number): Observable<any> {
    return;
  }

  @POST(':id')
  save(@Path('id') id: number, @Body data: Object): Observable<any> {
    return;
  }

  // 若请求的URL不符合授权要求，会直接抛出 `401` 错误，且不发送请求
  @GET('', { acl: 'admin' })
  ACL(): Observable<any> {
    return;
  }
}
```

### 类

- `@BaseUrl(url: string)`
- `@BaseHeaders(headers: HttpHeaders | { [header: string]: string | string[] })`

### 方法

- `@GET(url: string = '', options?: HttpOptions)`
- `@POST(url: string = '', options?: HttpOptions)`
- `@DELETE(url: string = '', options?: HttpOptions)`
- `@PUT(url: string = '', options?: HttpOptions)`
- `@HEAD(url: string = '', options?: HttpOptions)`
- `@PATCH(url: string = '', options?: HttpOptions)`
- `@JSONP(url: string = '', options?: HttpOptions)`
- `@OPTIONS(url: string = '', options?: HttpOptions)`

#### HttpOptions

| 参数              | 说明                                                                                                | 类型                         | 默认值 |
| ----------------- | --------------------------------------------------------------------------------------------------- | ---------------------------- | ------ |
| `acl`             | ACL 配置，若导入 `@delon/acl` 时自动有效，等同于 `ACLService.can(roleOrAbility: ACLCanType)` 参数值 | `any`                        | -      |
| `observe`         | 指定响应内容                                                                                        | `body,events,response`       | -      |
| `responseType`    | 指定内容格式                                                                                        | `arraybuffer,blob,json,text` | -      |
| `reportProgress`  | 是否监听进度事件                                                                                    | `boolean`                    | -      |
| `withCredentials` | 设置 withCredentials                                                                                | `boolean`                    | -      |

### 参数

- `@Path(key?: string)` URL 路由参数
- `@Query(key?: string)` URL 参数 QueryString
- `@Body` 参数 Body
- `@Headers(key?: string)` 参数 Headers
