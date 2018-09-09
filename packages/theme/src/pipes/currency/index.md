---
order: 1
title:
  en-US: _currenty-Currenty
  zh-CN: _currenty-货币
type: Pipe
---

`_currency` 货币格式化，简化原 `currency` 针对**中文货币**格式化问题，使用方式同 `currenty` 一样。

```html
{{data.price | _currency}}
```

输出：

```
￥4,035,173.71
```

**别忘记在根模块中注册语言环境：**

```typescript
import { registerLocaleData } from '@angular/common';
import localeZh from '@angular/common/locales/zh';
registerLocaleData(localeZh);

{ provide: LOCALE_ID, useValue: 'zh' }
```
