---
title: object
subtitle: 对象
type: Widgets
order: 1
---

创建对象，只对 `schema.type="object"` 时有效。

## API

### schema 属性

| 参数 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[properties]` | 定义对象的属性 | `{ [key: string]: SFSchema }` | - |
| `[required]` | 必填项属性 | `string[]` | - |
| `[maxProperties]` | 最大属性个数，必须是非负整数 | `number` | - |
| `[minProperties]` | 最小属性个数，必须是非负整数 | `number` | - |

### ui 属性

| 参数 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[showExpand]` | 是否显示扩展，点击隐藏内容，限 `type === 'card'` | `boolean` | `true` |
| `[expand]` | 展开状态，限 `type === 'card'` | `boolean` | `true` |
| `[showTitle]` | 是否显示标题 | `boolean` | `false` |
| `[type]` | 渲染类型 | `card, default` | `default` |
| `[cardSize]` | 等同 `nzSize` 属性 | `small, default` | `small` |
| `[cardBodyStyle]` | 等同 `nzBodyStyle` 属性 | `{ [key: string]: string }` | - |
| `[cardBordered]` | 等同 `nzBordered` 属性 | `boolean` | `false` |
| `[cardExtra]` | 等同 `nzExtra` 属性 | `string, TemplateRef<void>` | - |
| `[cardActions]` | 等同 `nzActions` 属性 | `Array<TemplateRef<void>>` | - |

---

## 代码示例

### 基础样例

最简单的用法。

```typescript
import { Component, inject } from '@angular/core';

import { DelonFormModule, SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-object-simple',
  template: `<sf [schema]="schema" (formSubmit)="submit($event)" />`,
  imports: [DelonFormModule]
})
export class FormObjectSimple {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      name: { type: 'string' },
      age: { type: 'number' }
    },
    required: ['name', 'age'],
    ui: {
      // 指定 `label` 和 `control` 在一行中各占栅格数
      spanLabel: 4,
      spanControl: 5
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```

### 卡片容器

包含标题、内容、操作区域。

```typescript
import { Component, OnInit, TemplateRef, ViewChild, inject } from '@angular/core';

import { DelonFormModule, SFObjectWidgetSchema, SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-object-card',
  template: `
    @if (schema) {
      <sf [schema]="schema" (formSubmit)="submit($event)" />
    }
    <ng-template #extra>
      <a (click)="msg.success('Success')">More</a>
    </ng-template>
  `,
  imports: [DelonFormModule]
})
export class FormObjectCard implements OnInit {
  readonly msg = inject(NzMessageService);
  @ViewChild('extra', { static: true }) private extra!: TemplateRef<void>;
  schema?: SFSchema;

  ngOnInit(): void {
    this.schema = {
      properties: {
        name: { type: 'string' },
        age: { type: 'number' },
        address1: {
          title: '地址1',
          type: 'object',
          properties: {
            country: { type: 'string' },
            city: { type: 'string' },
            zone: { type: 'string' }
          },
          ui: {
            type: 'card',
            cardExtra: this.extra
          } as SFObjectWidgetSchema
        },
        address2: {
          title: '地址2',
          type: 'object',
          properties: {
            country: { type: 'string' },
            city: { type: 'string' },
            zone: { type: 'string' }
          },
          ui: {
            type: 'card',
            showExpand: false
          } as SFObjectWidgetSchema
        }
      },
      required: ['name', 'age'],
      ui: {
        spanLabelFixed: 150,
        grid: { span: 12, gutter: 16 }
      } as SFObjectWidgetSchema
    };
  }

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```
