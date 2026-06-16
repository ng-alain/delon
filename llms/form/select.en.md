---
title: select
subtitle: Select
type: Widgets
order: 6
---

Select.

## API

### schema

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[enum]` | Data source | `SFSchemaEnumType[]` | - |
| `[readOnly]` | Read only | `boolean` | - |

### ui

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[asyncData]` | Asynchronous static data source | `() => Observable<SFSchemaEnumType[]>` | - |
| `[size]` | Size, equals to `nzSize` | `string` | - |
| `[compareWith]` | Same with [SelectControlValueAccessor](https://angular.io/api/forms/SelectControlValueAccessor#caveat-option-selection) | `(o1: any, o2: any) => boolean` | `(o1: any, o2: any) => o1===o2` |
| `[placeholder]` | Placeholder | `string` | - |
| `[autoClearSearchValue]` | Whether clear search box when an option is selected, only valid when `mode` is `multiple` or `tags`. | `boolean` | `true` |
| `[allowClear]` | Allow clear | `boolean` | `false` |
| `[clearValue]` | Default value when cleared | `any` | `undefined` |
| `[variant]` | Variant | `outlined,borderless,filled,underlined` | `outlined` |
| `[autoFocus]` | Focused by default | `boolean` | `false` |
| `[dropdownClassName]` | className property of dropdown list | `string` | - |
| `[dropdownMatchSelectWidth]` | Dropdown list and select have same width | `boolean` | `true` |
| `[dropdownStyle]` | style property of dropdown list | `object` | - |
| `[serverSearch]` | Whether using server search, won't fliter nz-option in frontend when it is true | `boolean` | `false` |
| `[searchDebounceTime]` | Debounce time of server search | `number` | `300` |
| `[searchLoadingText]` | Loading text of searching | `string` | - |
| `[onSearch]` | Callback when search content is changed, parameter is search content, must return `Promise` object | `(text: string) => Promise<SFSchemaEnum[]>` | - |
| `[maxMultipleCount]` | Maximum selected labels | `number` | `Infinity` |
| `[mode]` | Set mode for nz-select, suggest to add `default: null` for `tags`, otherwise, it would initialize an empty label. | `multiple,tags,default` | `default` |
| `[notFoundContent]` | Content when dropdown list is empty | `string` | - |
| `[showSearch]` | Enable search for signle select mode | `boolean` | `false` |
| `[showArrow]` | Whether to show the drop-down arrow | `boolean` | `true`(for single select), `false`(for multiple select) |
| `[tokenSeparators]` | Separator for automatic word segmentation when it is tags and multiple mode | `string[]` | `[]` |
| `[maxTagCount]` | Maximum count of tag | `number` | - |
| `[change]` | Callback function when selected nz-option is changed | `(ngModel:any丨any[], orgData: SFSchemaEnum丨SFSchemaEnum[])=>void` | - |
| `[openChange]` | Callback function when dropdown list is open or closed | `(status: boolean) => void` | - |
| `[scrollToBottom]` | Callback function when dropdown list is scrolled to bottom, can be used to trigger dynamic load | `() => void` | - |

---

## Examples

### Basic Usage

Simplest of usage.

```typescript
import { Component, ViewChild, inject } from '@angular/core';
import { of, delay } from 'rxjs';

import { DelonFormModule, SFComponent, SFSchema, SFSelectWidgetSchema } from '@delon/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-select-simple',
  template: `
    <sf #sf [schema]="schema" (formSubmit)="submit($event)" />
    <button nz-button (click)="updateStatus()">Update Status</button>
    <button nz-button (click)="updateAsyncData()">Update async data</button>
  `,
  imports: [DelonFormModule, NzButtonModule]
})
export class FormSelectSimple {
  private readonly msg = inject(NzMessageService);
  @ViewChild('sf', { static: false }) private sf!: SFComponent;
  asyncData = [
    {
      label: '订单状态',
      group: true,
      children: [
        { label: '待支付', value: 'WAIT_BUYER_PAY' },
        { label: '已支付', value: 'TRADE_SUCCESS' },
        { label: '交易完成', value: 'TRADE_FINISHED' }
      ]
    }
  ];
  delay = 1200;
  schema: SFSchema = {
    properties: {
      status: {
        type: 'string',
        title: '状态',
        enum: [
          { label: '待支付', value: 'WAIT_BUYER_PAY', otherData: 1 },
          { label: '已支付', value: 'TRADE_SUCCESS' },
          { label: '交易完成', value: 'TRADE_FINISHED' }
        ],
        default: 'WAIT_BUYER_PAY',
        ui: {
          widget: 'select',
          change: (value, orgData) => console.log(value, orgData)
        } as SFSelectWidgetSchema
      },
      // 标签
      tags: {
        type: 'string',
        title: '标签',
        enum: [
          { label: '待支付', value: 'WAIT_BUYER_PAY' },
          { label: '已支付', value: 'TRADE_SUCCESS' },
          { label: '交易完成', value: 'TRADE_FINISHED' }
        ],
        ui: {
          widget: 'select',
          mode: 'tags'
        } as SFSelectWidgetSchema,
        default: null
      },
      // 异步数据
      async: {
        type: 'string',
        title: 'Async',
        default: 'WAIT_BUYER_PAY',
        ui: {
          widget: 'select',
          asyncData: () => of(this.asyncData).pipe(delay(this.delay))
        } as SFSelectWidgetSchema
      },
      hide: {
        type: 'string',
        title: '隐藏项',
        enum: [
          { label: '第1个', value: 1 },
          { label: '第2个', value: 2, hide: true },
          { label: '第3个(第2个被隐藏了)', value: 3 }
        ],
        default: 1
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }

  updateStatus(): void {
    const statusProperty = this.sf.getProperty('/status')!;
    statusProperty.schema.enum = ['1', '2', '3'];
    statusProperty.widget.reset('2');
  }

  updateAsyncData(): void {
    this.delay = 0;
    this.asyncData = [
      {
        label: 'Order Status',
        group: true,
        children: [
          { label: 'Wait buyer pay', value: 'WAIT_BUYER_PAY' },
          { label: 'Trade success', value: 'TRADE_SUCCESS' },
          { label: 'Trade finished', value: 'TRADE_FINISHED' }
        ]
      }
    ];
    // Reset the value to make the element load data again
    const updatePath = '/async';
    this.sf.setValue(updatePath, this.sf.getProperty(updatePath)?.value);
  }
}
```

### coordinate

Coordinating the selection of provinces and cities is a common use case and demonstrates how selection can be coordinated.

```typescript
import { Component, ViewChild, inject } from '@angular/core';
import { of, delay, tap } from 'rxjs';

import { DelonFormModule, SFComponent, SFSchema, SFSelectWidgetSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-select-coordinate',
  template: ` <sf #sf [schema]="schema" [formData]="data" (formSubmit)="submit($event)" /> `,
  imports: [DelonFormModule]
})
export class FormSelectCoordinate {
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
    cityProperty.widget.reset(city ?? items[0]);
  }
}
```

### Custom dropdown

Customize the dropdown menu via `dropdownRender`.

```typescript
import { Component, OnInit, TemplateRef, ViewChild, inject } from '@angular/core';

import { DelonFormModule, SFComponent, SFSchema, SFSelectWidgetSchema } from '@delon/form';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-select-custom-dropdown-menu',
  template: `
    @if (schema) {
      <sf #sf [schema]="schema" (formSubmit)="submit($event)" />
    }
    <ng-template #dropdownRender>
      <nz-divider />
      <div class="container">
        <input type="text" nz-input #inputElement />
        <a class="add-item" (click)="addItem(inputElement)"><nz-icon nzType="plus"/> Add item</a>
      </div>
    </ng-template>
  `,
  styles: [
    `
      nz-divider {
        margin: 4px 0;
      }
      .container {
        display: flex;
        flex-wrap: nowrap;
        padding: 8px;
      }
      input {
      }
      .add-item {
        flex: 0 0 auto;
        padding: 8px;
        display: block;
      }
    `
  ],
  imports: [DelonFormModule, NzDividerModule, NzInputModule, NzIconModule]
})
export class FormSelectCustomDropdownMenu implements OnInit {
  private readonly msg = inject(NzMessageService);
  @ViewChild('sf', { static: false }) private sf!: SFComponent;
  @ViewChild('dropdownRender', { static: true }) private dropdownRender!: TemplateRef<void>;

  schema?: SFSchema;
  statusList: string[] = ['1', '2', '3'];

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }

  ngOnInit(): void {
    this.schema = {
      properties: {
        status: {
          type: 'string',
          title: '状态',
          enum: this.statusList,
          default: '1',
          ui: {
            widget: 'select',
            dropdownRender: this.dropdownRender
          } as SFSelectWidgetSchema
        }
      }
    };
  }

  addItem(input: HTMLInputElement): void {
    this.statusList.push(input.value);
    const statusProperty = this.sf.getProperty('/status')!;
    statusProperty.schema.enum = this.statusList;
    this.sf.setValue('/status', input.value);
  }
}
```

### Search and Select Users

A complete multiple select sample with remote search, debounce fetch, ajax callback order flow, and loading state.

```typescript
import { Component, inject } from '@angular/core';
import { lastValueFrom, map } from 'rxjs';

import { DelonFormModule, SFSchema, SFSchemaEnum, SFSelectWidgetSchema } from '@delon/form';
import { _HttpClient } from '@delon/theme';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-select-search',
  template: ` <sf [schema]="schema" (formSubmit)="submit($event)" /> `,
  imports: [DelonFormModule]
})
export class FormSelectSearch {
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
