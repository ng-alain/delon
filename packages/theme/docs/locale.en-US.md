---
order: 2
title: Internationalization
type: Documents
---

Provide a uniform localization support for `@delon/*` class library built-in text of components.

## Usage

### Providers

Provides the token of `DELON_LOCALE` for configuring antd locale text globally.

```ts
import { DELON_LOCALE, en_US } from '@delon/theme';
@NgModule({
  ...
  providers   : [ { provide: DELON_LOCALE, useValue: en_US } ]
})
export class AppModule { }
```

### Service

Provides the service of `DelonLocaleService` to dynamic change the locale text.

```ts
import { en_US, DelonLocaleService } from '@delon/theme';
...
constructor(private delonLocaleService: DelonLocaleService) {
}

switchLanguage() {
  this.delonLocaleService.setLocale(en_US);
}
```

Note: `en_US` is the package name, follow below.

## Supported languages

| Language              | Filename |
| --------------------- | -------- |
| English               | en_US    |
| Chinese (Simplified)  | zh_CN    |
| Chinese (Traditional) | zh_TW    |
| Turkish               | tr_TR    |
| Polish                | pl_PL    |

## Add a new language

If you can't find your language, you are welcome to create a locale package based on [en_US](https://github.com/ng-alain/delon/tree/master/packages/theme/src/locale/languages/en-US.ts) and send us a pull request.
