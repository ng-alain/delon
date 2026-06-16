---
title: select
subtitle: 选择器
type: Widgets
order: 6
---

下拉选择器。

## API

### schema 属性

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[enum]` | 数据源 | `SFSchemaEnumType[]` | - |
| `[readOnly]` | 禁用状态 | `boolean` | - |

### ui 属性

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[asyncData]` | 异步数据源 | `() => Observable<SFSchemaEnumType[]>` | - |
| `[size]` | 大小，等同 `nzSize` | `string` | - |
| `[compareWith]` | 与 [SelectControlValueAccessor](https://angular.io/api/forms/SelectControlValueAccessor#caveat-option-selection) 相同 | `(o1: any, o2: any) => boolean` | `(o1: any, o2: any) => o1===o2` |
| `[placeholder]` | 在文字框中显示提示讯息 | `string` | - |
| `[autoClearSearchValue]` | 是否在选中项后清空搜索框，只在 `mode` 为 `multiple` 或 `tags` 时有效。 | `boolean` | `true` |
| `[allowClear]` | 支持清除 | `boolean` | `false` |
| `[clearValue]` | 清空时默认值 | `any` | `undefined` |
| `[variant]` | 变体 | `outlined,borderless,filled,underlined` | `outlined` |
| `[autoFocus]` | 默认获取焦点 | `boolean` | `false` |
| `[dropdownClassName]` | 下拉菜单的 className 属性 | `string` | - |
| `[dropdownMatchSelectWidth]` | 下拉菜单和选择器同宽 | `boolean` | `true` |
| `[dropdownStyle]` | 下拉菜单的 style 属性 | `object` | - |
| `[serverSearch]` | 是否使用服务端搜索，当为 true 时，将不再在前端对 nz-option 进行过滤 | `boolean` | `false` |
| `[searchDebounceTime]` | 搜索抖动时间 | `number` | `300` |
| `[searchLoadingText]` | 搜索加载中文本 | `string` | - |
| `[onSearch]` | 搜索内容变化回调函数，参数为搜索内容，必须返回 `Promise` 对象 | `(text: string) => Promise<SFSchemaEnum[]>` | - |
| `[maxMultipleCount]` | 最多选中多少个标签 | `number` | `Infinity` |
| `[mode]` | 设置 nz-select 的模式，`tags` 建议增加 `default: null`，否则可能会遇到初始化有一个空的标签。 | `multiple,tags,default` | `default` |
| `[notFoundContent]` | 当下拉列表为空时显示的内容 | `string` | - |
| `[showSearch]` | 使单选模式可搜索 | `boolean` | `false` |
| `[showArrow]` | 是否显示下拉小箭头 | `boolean` | 单选为 `true`，多选为 `false` |
| `[tokenSeparators]` | 在 tags 和 multiple 模式下自动分词的分隔符 | `string[]` | `[]` |
| `[maxTagCount]` | 最多显示多少个 tag | `number` | - |
| `[change]` | 选中的 nz-option 发生变化时，调用此函数 | `(ngModel:any丨any[], orgData: SFSchemaEnum丨SFSchemaEnum[])=>void` | - |
| `[openChange]` | 下拉菜单打开关闭回调函数 | `(status: boolean) => void` | - |
| `[scrollToBottom]` | 下拉菜单滚动到底部回调，可用于作为动态加载的触发条件 | `() => void` | - |
| `[customTemplate]` | 自定义选择框的Template内容 | `TemplateRef<{ $implicit: NzOptionComponent }>` | - |
| `[suffixIcon]` | 自定义的选择框后缀图标 | `TemplateRef<any>, string` | - |
| `[removeIcon]` | 自定义的多选框清除图标 | `TemplateRef<any>` | - |
| `[clearIcon]` | 自定义的多选框清空图标 | `TemplateRef<any>` | - |
| `[menuItemSelectedIcon]` | 自定义当前选中的条目图标 | `TemplateRef<any>` | - |
| `[maxTagPlaceholder]` | 隐藏 tag 时显示的内容 | `TemplateRef<{ $implicit: any[] }>` | - |
| `[optionHeightPx]` | 下拉菜单中每个 Option 的高度 | `number` | `32` |
| `[optionOverflowSize]` | 下拉菜单中最多展示的 Option 个数，超出部分滚动 | `number` | `8` |

---

## 代码示例

### 基础样例

最简单的用法。

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

### 联动

省市联动是典型的例子。

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

### 扩展菜单

使用 `dropdownRender` 对下拉菜单进行自由扩展。

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

### 搜索用户

一个带有远程搜索，节流控制，请求时序控制，加载状态的多选示例。

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
