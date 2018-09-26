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

| Property | Description  | Type                                | Default   |
| --------------------- | ---------- | ------------------ | ----------- |
| `nullValueHandling` | Null processing   | `include,ignore`   | `include`   |
| `dateValueHandling` | Time processing | `timestamp,ignore` | `timestamp` |
