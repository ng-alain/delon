---
order: 1
title: Getting Started
type: Documents
---

## Foreword

`@delon/mock` is a simulation data generator to help the front-end to develop and prototype separate from the back-end progress and reduce some monotony particularly while writing automated tests.

**Features**

- All of the Angular projects
- Unobtrusive
- Simple usage
- Support [mock.js](http://mockjs.com/)

## Usage

Install `@delon/mock` from `yarn`.

```bash
npm i --save-dev @delon/mock
```

Please refer to [global-config.module.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/global-config.module.ts#L26-L30) import the [Mock Rule data](/mock/rule).

### MockOptions

> You can override them via [Global Configuration](/docs/global-config).

| Property | Description | Type | Default | Global Config |
|----------|-------------|------|---------|---------------|
| `[data]` | `any` | - | Mock data rule | ✅ |
| `[delay]` | `number` | `300` | Request delay, unit is milliseconds | ✅ |
| `[force]` | `boolean` | `false` | Whether to force all requests to Mock, `true` means to return a 404 error directly when the requested URL does not exist, `false` means to send a real HTTP request when the request is missed | ✅ |
| `[log]` | `boolean` | `true` | Whether to print Mock request information, make up for the browser without Network information; it will output [👽Mock] when hit | ✅ |
| `[copy]` | `boolean` | `true` | Whether to return copy data | ✅ |

### Why is it only valid for development environment?

Mock is not real data, and most scenarios are for development local or test environments; therefore, Mock modules and rule data should not be included in the production environment.

Of course, you can also put the `provideDelonMockConfig` of `environment.ts` under `environment.prod.ts` so that the production environment also uses this rule, just like https://ng-alain.github.io/ng- Like alain/, some mock requests are needed to ensure the environment runs.

```ts
import { mockInterceptor, provideDelonMockConfig } from '@delon/mock';
import * as MOCKDATA from '../../_mock';
export const environment = {
  providers: [provideDelonMockConfig({ data: MOCKDATA })],
  interceptorFns: [mockInterceptor],
} as Environment;
```
