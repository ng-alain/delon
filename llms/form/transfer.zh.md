---
title: transfer
subtitle: 穿梭框
type: Non-built-in widgets
---

双栏穿梭选择框。

## 如何使用

非内置模块，需要额外在 [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9) 注册 `withTransferWidget`。

## 注意事项

- `default` 值被当成 `direction: 'right'` 表示右栏中

## API

### schema 属性

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[enum]` | 数据源 | `SFSchemaEnumType[]` | - |

### ui 属性

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[asyncData]` | 异步数据源 | `() => Observable<SFSchemaEnumType[]>` | - |
| `[titles]` | 标题集合，顺序从左至右 | `string[]` | `['', '']` |
| `[operations]` | 操作文案集合，顺序从下至上 | `string[]` | `['', '']` |
| `[listStyle]` | 两个穿梭框的自定义样式，以`ngStyle`写法标题 | `object` | - |
| `[itemUnit]` | 单数单位 | `string` | `项目` |
| `[itemsUnit]` | 复数单位 | `string` | `项目` |
| `[showSearch]` | 是否显示搜索框 | `boolean` | `false` |
| `[filterOption]` | 接收 `inputValueoption` 两个参数，当 `option` 符合筛选条件时，应返回 `true`，反之则返回 `false`。 | - | - |
| `[searchPlaceholder]` | 搜索框的默认值 | `string` | - |
| `[notFoundContent]` | 当列表为空时显示的内容 | `string` | - |
| `[canMove]` | 穿梭时二次校验。 | `function` | - |
| `[oneWay]` | 展示为单向样式 | `boolean` | `false` |
| `(change)` | 选项在两栏之间转移时的回调函数 | `(options: TransferChange) => void` | - |
| `(searchChange)` | 搜索框内容时改变时的回调函数 | `(options: TransferSearchChange) => void` | - |
| `(selectChange)` | 选中项发生改变时的回调函数 | `(options: TransferSelectChange) => void` | - |

---

## 代码示例

### 基础样例

最简单的用法。

```typescript
import { Component, inject } from '@angular/core';
import { of, delay } from 'rxjs';

import { DelonFormModule, SFSchema } from '@delon/form';
import { SFTransferWidgetSchema } from '@delon/form/widgets/transfer';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-transfer-simple',
  template: ` <sf [schema]="schema" (formSubmit)="submit($event)" /> `,
  imports: [DelonFormModule]
})
export class FormTransferSimple {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      roles: {
        type: 'number',
        title: '角色',
        enum: [
          { title: 'DNS管理', value: 10 },
          { title: 'ECS管理', value: 11 },
          { title: 'OSS管理', value: 12 },
          { title: 'RDS管理', value: 13 }
        ],
        ui: {
          widget: 'transfer',
          titles: ['未拥有', '已拥有']
        } as SFTransferWidgetSchema,
        default: [11, 12]
      },
      roles2: {
        type: 'number',
        title: '角色',
        ui: {
          widget: 'transfer',
          titles: ['未拥有', '已拥有'],
          asyncData: () =>
            of([
              { title: 'DNS管理', value: 10 },
              { title: 'ECS管理', value: 11 },
              { title: 'OSS管理', value: 12 },
              { title: 'RDS管理', value: 13 }
            ]).pipe(delay(10))
        } as SFTransferWidgetSchema,
        default: [11, 12]
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```
