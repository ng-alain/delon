---
title:
  zh-CN: 基础样例
  en-US: Basic Usage
order: 0
---

## zh-CN

最简单的用法。

## en-US

Simplest of usage.

```ts
import { Component } from '@angular/core';
import { SFSchema } from '@delon/form';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { MentionOnSearchTypes, NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-demo',
  template: `<sf [schema]="schema" (formSubmit)="submit($event)"></sf>`
})
export class DemoComponent {
    schema: SFSchema = {
        properties: {
            remark: {
                type: 'string',
                title: '描述',
                enum: ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご'],
                minimum: 2,
                maximum: 5,
                ui: {
                    widget: 'mention',
                    inputStyle: 'textarea'
                }
            },
            // 异步静态数据源
            async: {
                type: 'string',
                title: 'Async',
                ui: {
                    widget: 'mention',
                    asyncData: () => of(['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']).pipe(delay(1000))
                }
            },
            // 实时数据
            real_time: {
                type: 'string',
                title: 'RealTime',
                ui: {
                    widget: 'mention',
                    loadData: (option: MentionOnSearchTypes) => of(
                        ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai'].filter(item => item.indexOf(option.value) !== -1)
                    ).pipe(delay(300))
                }
            }
        }
    };
    constructor(public msg: NzMessageService) { }
    submit(value: any) { this.msg.success(JSON.stringify(value)); }
}
```
