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
    DelonUtilModule.forRoot()
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

## FAQ

### How to call in an HTML template

```ts
import { Component } from '@angular/core';
import { yuan } from '@delon/util';

@Component({
  selector: 'app-demo',
  template: `
  {{yuan(11111)}}
  `
})
export class DemoComponent {
  yuan = yuan;
}
```
