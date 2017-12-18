---
title: Utils
subtitle: 工具类
order: 999
cols: 1
module: AdUtilsModule
---

一些常用的方法。

## API

### 验证型

方法名 | 说明 | 示例
----|------|-----
`Validate.isNum` | 是否为数字 | -
`Validate.isInt` | 是否为整数 | -
`Validate.isDecimal` | 是否为小数 | -
`Validate.isIdCard` | 是否为身份证 | -
`Validate.isMobile` | 是否为手机号 | -

每一个验证型都包括着用于表单验证器：

```ts
this.valForm = fb.group({
    id: [null, Validators.compose([Validators.required, _Validators.num])]
});
```

### 常规型

方法名 | 说明 | 示例
----|------|-----
`yuan` | 转化成RMB元字符串 | -
`fixedZero` | 不满两位数自动填充 `0` | -
`getTimeDistance` | 获取时间范围 | `getTimeDistance('week')`

**如果在HTML模板中调用**

```ts
import { Component } from '@angular/core';
import { yuan } from '@delon/abc';

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
