---
order: 1
title: Getting Started
type: Documents
module: DelonUtilModule
config: DelonUtilConfig
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

## DelonUtilConfig

Common configuration, such as unifying mapping name for `ArrayService`.

```ts
import { DelonUtilConfig } from '@delon/abc';
export function fnDelonUtilConfig(): DelonUtilConfig {
  return Object.assign(new DelonUtilConfig(), <DelonUtilConfig>{
    array: {
      idMapName: 'Id',
      parentIdMapName: 'ParentId'
    }
  });
}

@NgModule({ })
export class DelonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DelonModule,
      providers: [
        { provide: DelonUtilConfig, useFactory: fnDelonUtilConfig }
      ]
    };
  }
}
```
