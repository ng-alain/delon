---
order: 2
title: 国际化
type: Documents
---

为整个 `@delon/*` 类库内建文案提供统一的国际化支持。

## 使用

### 全局配置

只需要在根模块重新对 `DELON_LOCALE` 注入目标语言即可全局生效。

```ts
import { DELON_LOCALE, en_US } from '@delon/theme';
@NgModule({
  ...
  providers   : [ { provide: DELON_LOCALE, useValue: en_US } ]
})
export class AppModule { }
```

### 运行时修改

`@delon` 提供了一个服务 `DelonLocaleService` 用于动态修改国际化文案。

```ts
import { en_US, DelonLocaleService } from '@delon/theme';
...
constructor(private delonLocaleService: DelonLocaleService) {
}

switchLanguage() {
  this.delonLocaleService.setLocale(en_US);
}
```

注意：`en_US` 是语言包名称，以下表格也遵循同样的规则。

## 支持语言

| 语言         | 语言包名称 |
| ------------ | ---------- |
| 英语（美式） | en_US      |
| 简体中文     | zh_CN      |
| 繁体中文     | zh_TW      |
| 土耳其语     | tr_TR      |
| 波兰语       | pl_PL      |

## 增加语言包

如果你找不到你需要的语言包，欢迎你在 [英文语言包](https://github.com/ng-alain/delon/tree/master/packages/theme/src/locale/languages/en-US.ts) 的基础上创建一个新的语言包，并给我们 Pull Request。
