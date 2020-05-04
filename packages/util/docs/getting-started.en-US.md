---
order: 1
title: Getting Started
type: Documents
---

`@delon/util` is a collection of tool functions.

## Usage

Installing `@delon/util` dependency package:

```bash
yarn add @delon/util
```

Import the `DelonUtilModule` in to your root AppModule.

```typescript
import { DelonUtilModule } from '@delon/util';

@NgModule({
  imports: [
    DelonUtilModule
  ]
})
export class AppModule { }
```

## Parameters

You can override [ArrayService] to set the mapping name through [Global Configuration](/docs/global-config).
