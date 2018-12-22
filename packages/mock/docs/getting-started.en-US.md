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
yarn add @delon/mock -D
```

Import the [mock rule data](/mock/rule) and `DelonMockModule` in to your root `AppModule`.

```ts
import { DelonMockModule } from '@delon/mock';
import * as MOCKDATA from '../../_mock';
// Configuration for test environment only.
import { environment } from '../environments/environment';
const MOCKMODULE = !environment.production ? [ DelonMockModule.forRoot({ data: MOCKDATA }) ] : [];

@NgModule({
  imports: [
    ...MOCKMODULE
  ]
})
```

### MockOptions

The `forRoot` parameters:

| Property | Type  | Default  | Description   |
| ----- | --- | --- | --- |
| `[data]` | `any` | - | Mock data rule |
| `[delay]` | `number` | `300` | Request delay, unit is milliseconds |
| `[force]` | `boolean` | `false` | Whether to force all requests to Mock, `true` means to return a 404 error directly when the requested URL does not exist, `false` means to send a real HTTP request when the request is missed |
| `[log]` | `boolean` | `true` | Whether to print Mock request information, make up for the browser without Network information; it will output [👽Mock] when hit |
| `[executeOtherInterceptors]` | `boolean` | `true` | Whether continue to call other interceptor `intercept` method after mock rule hit |

> **Lazy modules** need to import `forChild`, You can import `forChild` in the `SharedModule`.
