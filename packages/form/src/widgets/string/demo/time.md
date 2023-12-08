---
title:
  zh-CN: 抖动与顺序
  en-US: Debounce and order
order: 0
---

## zh-CN

使用 `changeDebounceTime` 启用节流控制，并利用 `changeMap` 和 `change` 配合完成节流、请求顺序。

## en-US

Use `changeDebounceTime` to enable throttling control, use `changeMap` and `change` to debounce fetch and ajax callback order flow.

```ts
import { Component, ViewChild, inject } from '@angular/core';
import { of } from 'rxjs';

import { DelonFormModule, SFComponent, SFSchema, SFStringWidgetSchema } from '@delon/form';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';

interface UserItem {
  id: number;
  email: string;
}

@Component({
  selector: 'app-demo',
  template: `<sf #sf [schema]="schema" (formSubmit)="submit($event)" />`,
  standalone: true,
  imports: [DelonFormModule]
})
export class DemoComponent {
  private readonly msg = inject(NzMessageService);
  private readonly http = inject(_HttpClient);
  @ViewChild('sf') private readonly sf!: SFComponent;

  schema: SFSchema = {
    properties: {
      q: {
        type: 'string',
        title: 'Key',
        ui: {
          changeDebounceTime: 500,
          changeMap: v => (v?.length > 0 ? this.http.get(`/users?q=${v}&ps=6`) : of({ list: [] })),
          change: (res: { list: UserItem[] }) => {
            if (res.list.length <= 0) return;
            const property = this.sf.getProperty('/items')!;
            property.schema.enum = res.list.map(item => item.email);
            property.widget.reset(res.list[0].email);
          }
        } as SFStringWidgetSchema
      },
      items: {
        type: 'string',
        enum: ['a', 'b', 'c']
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```
