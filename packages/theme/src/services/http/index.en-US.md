---
order: 1
title: _HttpClient
type: Service
---

[\_HttpClient](https://github.com/ng-alain/delon/blob/master/packages/theme/src/services/http/http.client.ts) service is based on Angular `HttpClient`.

## Features

- More friendly call methods
- Maintain `loading` attribute
- Handling null values
- Unified time format is timestamp
- Support decorator @GET, @POST etc

## DEMO

Network requests are generally used with Object as arguments, such as a `get` request:

```ts
HttpClient.get(url, { params: { pi: 1 } });
```

For `_HttpClient`:

```ts
_HttpClient.get(url, { pi: 1 });
```

## AlainThemeConfig

Common configuration, such as unifying null and time processing for `_HttpClient`.

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

| Property            | Description     | Type               | Default     |
| ------------------- | --------------- | ------------------ | ----------- |
| `nullValueHandling` | Null processing | `include,ignore`   | `include`   |
| `dateValueHandling` | Time processing | `timestamp,ignore` | `timestamp` |

## Decorators

The target service must inherit `BaseApi` abstract class.

### Usage

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

  // If authorization is invalid, will be thrown directly `401` error and will not be sent.
  @GET('', { acl: 'admin' })
  ACL(): Observable<any> {
    return;
  }
}
```

### Class decorators

- `@BaseUrl(url: string)`
- `@BaseHeaders(headers: HttpHeaders | { [header: string]: string | string[] })`

### Method decorators

- `@GET(url: string = '', options?: HttpOptions)`
- `@POST(url: string = '', options?: HttpOptions)`
- `@DELETE(url: string = '', options?: HttpOptions)`
- `@PUT(url: string = '', options?: HttpOptions)`
- `@HEAD(url: string = '', options?: HttpOptions)`
- `@PATCH(url: string = '', options?: HttpOptions)`
- `@JSONP(url: string = '', options?: HttpOptions)`
- `@OPTIONS(url: string = '', options?: HttpOptions)`

#### HttpOptions

| Property          | Description                         | Type                         | Default |
| ----------------- | ----------------------------------- | ---------------------------- | ------- |
| `acl`             | ACL config, depends on `@delon/acl` | `any`                        | -       |
| `observe`         | Specify response content            | `body,events,response`       | -       |
| `responseType`    | Specify content format              | `arraybuffer,blob,json,text` | -       |
| `reportProgress`  | Whether monitor progress events     | `boolean`                    | -       |
| `withCredentials` | Set withCredentials                 | `boolean`                    | -       |

### Parameter decorators

- `@Path(key?: string)` URL path parameters
- `@Query(key?: string)` QueryString of URL
- `@Body` Body of URL
- `@Headers(key?: string)` Headers of URL
