---
title:
  zh-CN: 联动
  en-US: coordinate
order: 1
---

## zh-CN

省市联动是典型的例子。

## en-US

Coordinating the selection of provinces and cities is a common use case and demonstrates how selection can be coordinated.

```ts
import { Component, ViewChild, inject } from '@angular/core';
import { of, delay, tap } from 'rxjs';

import { DelonFormModule, SFComponent, SFSchema, SFSelectWidgetSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: ` <sf #sf [schema]="schema" [formData]="data" (formSubmit)="submit($event)" /> `,
  standalone: true,
  imports: [DelonFormModule]
})
export class DemoComponent {
  private readonly msg = inject(NzMessageService);
  @ViewChild('sf', { static: false }) private sf!: SFComponent;
  data = {
    province: 'Zhejiang',
    city: 'Ningbo'
  };
  private cityData: { [place: string]: string[] } = {
    Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
    Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang']
  };
  schema: SFSchema = {
    properties: {
      province: {
        type: 'string',
        title: 'Province',
        ui: {
          widget: 'select',
          asyncData: () =>
            of(['Zhejiang', 'Jiangsu']).pipe(
              delay(100),
              tap(() => this.updateCity(this.data.province, this.data.city))
            ),
          change: i => this.updateCity(i)
        } as SFSelectWidgetSchema
      },
      city: {
        type: 'string',
        title: 'City',
        ui: {
          widget: 'select'
        } as SFSelectWidgetSchema
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }

  private updateCity(province: string, city: string = ''): void {
    const cityProperty = this.sf.getProperty('/city')!;
    const items = this.cityData[province];
    cityProperty.schema.enum = items;
    cityProperty.widget.reset(city || items[0]);
  }
}
```
