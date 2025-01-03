---
title:
  zh-CN: 搜索用户
  en-US: Search and Select Users
order: 3
---

## zh-CN

一个带有远程搜索，节流控制，请求时序控制，加载状态的多选示例。

## en-US

A complete multiple select sample with remote search, debounce fetch, ajax callback order flow, and loading state.

```ts
import { Component, inject } from '@angular/core';
import { lastValueFrom, map } from 'rxjs';

import { DelonFormModule, SFSchema, SFSchemaEnum, SFSelectWidgetSchema } from '@delon/form';
import { _HttpClient } from '@delon/theme';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: ` <sf [schema]="schema" (formSubmit)="submit($event)" /> `,
  standalone: true,
  imports: [DelonFormModule]
})
export class DemoComponent {
  private readonly msg = inject(NzMessageService);
  private readonly http = inject(_HttpClient);
  schema: SFSchema = {
    properties: {
      status: {
        type: 'string',
        title: '用户',
        ui: {
          widget: 'select',
          serverSearch: true,
          searchDebounceTime: 300,
          searchLoadingText: '搜索中...',
          onSearch: q => {
            return lastValueFrom(
              this.http
                .get(`https://api.randomuser.me/?results=5&q=${q}`)
                .pipe(
                  map(res =>
                    (res.results as NzSafeAny[]).map(i => ({ label: i.email, value: i.email }) as SFSchemaEnum)
                  )
                )
            );
          }
        } as SFSelectWidgetSchema
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```
