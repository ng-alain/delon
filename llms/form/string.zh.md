---
title: string
subtitle: 文本框
type: Widgets
order: 3
---

默认小部件，一般用于字符串元素。

## API

### schema 属性

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[maxLength]` | 表单最大长度 | `number` | - |
| `[readOnly]` | 禁用状态 | `boolean` | - |

### ui 属性

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[type]` | 等同 input 的 `type` 值，例如：`password` | `string` | - |
| `[placeholder]` | 在文字框中显示提示讯息 | `string` | - |
| `[variant]` | 变体 | `outlined,borderless,filled,underlined` | `outlined` |
| `[autocomplete]` | 自动完成功能的表单 | `HTML Attribute` | - |
| `[autofocus]` | 当页面加载时获得焦点 | `HTML Attribute` | - |
| `[addOnBefore]` | 前置标签，等同 `nzAddOnBefore` | `string` | - |
| `[addOnAfter]` | 后置标签，等同 `nzAddOnAfter` | `string` | - |
| `[addOnBeforeIcon]` | 前置Icon，等同 `nzAddOnBeforeIcon` | `string` | - |
| `[addOnAfterIcon]` | 后置Icon，等同 `nzAddOnAfterIcon` | `string` | - |
| `[prefix]` | 带有前缀图标的 input，等同 `nzPrefix` | `string` | - |
| `[prefixIcon]` | 前缀图标，等同 `nzPrefixIcon` | `string` | - |
| `[suffix]` | 带有后缀图标的 input，等同 `nzSuffix` | `string` | - |
| `[suffixIcon]` | 后缀图标，等同 `nzSuffixIcon` | `string` | - |
| `[changeDebounceTime]` | `change` 事件节流与顺序控制的阀值 | `number` | - |
| `[changeMap]` | 转换数据，相当于 `switchMap` 操作 | `(val: string) => Observable<any>` | - |
| `[change]` | 内容变更事件 | `(val: string) => void` | - |
| `[focus]` | 焦点事件 | `(e: FocusEvent) => void` | - |
| `[blur]` | 失焦事件 | `(e: FocusEvent) => void` | - |
| `[enter]` | 回车事件 | `(e: KeyboardEvent) => void` | - |

---

## 代码示例

### 基础样例

最简单的用法。

```typescript
import { Component, inject } from '@angular/core';

import { DelonFormModule, SFSchema, SFStringWidgetSchema, SFValueChange } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-string-simple',
  template: `<sf [schema]="schema" (formValueChange)="valueChange($event)" (formSubmit)="submit($event)" />`,
  imports: [DelonFormModule]
})
export class FormStringSimple {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      name: {
        type: 'string',
        title: 'Name',
        ui: {
          addOnAfter: 'RMB',
          placeholder: 'RMB结算',
          change: val => console.log(val),
          focus: e => console.log('focus', e),
          blur: e => console.log('blur', e),
          enter: e => console.log('enter', e)
        } as SFStringWidgetSchema
      },
      mobile: {
        type: 'string',
        format: 'mobile',
        title: '手机号'
      },
      sfz: {
        type: 'string',
        format: 'id-card',
        title: '身份证号'
      },
      regex: {
        type: 'string',
        pattern: `^[abc]+$`,
        title: '正则表达式',
        ui: {
          placeholder: `^[abc]+$`
        } as SFStringWidgetSchema
      },
      color: {
        type: 'string',
        format: 'color',
        title: '颜色',
        ui: {
          optionalHelp: {
            text: '我是有背景颜色的喔',
            bgColor: '#f50'
          }
        }
      }
    },
    required: ['name']
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }

  valueChange(res: SFValueChange): void {
    this.msg.info(JSON.stringify(res));
  }
}
```

### 抖动与顺序

使用 `changeDebounceTime` 启用节流控制，并利用 `changeMap` 和 `change` 配合完成节流、请求顺序。

```typescript
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
  selector: 'form-string-time',
  template: `<sf #sf [schema]="schema" (formSubmit)="submit($event)" />`,
  imports: [DelonFormModule]
})
export class FormStringTime {
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
