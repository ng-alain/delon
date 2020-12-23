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
import { Component } from '@angular/core';
import { SFSchema, SFSchemaEnum, SFSelectWidgetSchema } from '@delon/form';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-demo',
  template: ` <sf [schema]="schema" (formSubmit)="submit($event)"></sf> `,
})
export class DemoComponent {
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
            return this.http
              .get(`https://api.randomuser.me/?results=5&q=${q}`)
              .pipe(map(res => (res.results as any[]).map(i => ({ label: i.email, value: i.email } as SFSchemaEnum))))
              .toPromise();
          },
        } as SFSelectWidgetSchema,
      },
    },
  };

  constructor(private msg: NzMessageService, private http: _HttpClient) {}

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```