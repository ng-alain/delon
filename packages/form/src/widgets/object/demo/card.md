---
title:
  zh-CN: 卡片容器
  en-US: Rectangular container
order: 1
---

## zh-CN

包含标题、内容、操作区域。

## en-US

A basic card containing a title, content and an extra corner content.

```ts
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { SFObjectWidgetSchema, SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: `
    <sf *ngIf="schema" [schema]="schema" (formSubmit)="submit($event)"></sf>
    <ng-template #extra>
      <a (click)="msg.success('Success')">More</a>
    </ng-template>
  `,
})
export class DemoComponent implements OnInit {
  @ViewChild('extra', { static: true }) private extra: TemplateRef<void>;
  schema: SFSchema;

  constructor(public msg: NzMessageService) {}

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
            zone: { type: 'string' },
          },
          ui: {
            type: 'card',
            cardExtra: this.extra,
          } as SFObjectWidgetSchema,
        },
        address2: {
          title: '地址2',
          type: 'object',
          properties: {
            country: { type: 'string' },
            city: { type: 'string' },
            zone: { type: 'string' },
          },
          ui: {
            type: 'card',
            showExpand: false,
          } as SFObjectWidgetSchema,
        },
      },
      required: ['name', 'age'],
      ui: {
        spanLabelFixed: 150,
        grid: { span: 12, gutter: 16 },
      } as SFObjectWidgetSchema,
    };
  }

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```
