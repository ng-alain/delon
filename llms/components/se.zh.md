---
type: CURD
title: se
subtitle: 编辑
cols: 1
order: 3
module: import { SEModule } from '@delon/abc/se';
---

简化表单HTML模板的高阶组件，并进一步优化了一些细节：

- 更友好的表单校验状态
- 自动化响应式布局
- 自动维护表单 `id`

它由 `se-container` 容器（指令）和 `se` 组件来表示一个表单，一个简单HTML模板表单是这么写的：

```html
<form nz-form #f="ngForm" se-container="2">
  <se label="App Key">
    <input type="text" nz-input [(ngModel)]="i.ak" name="ak" required>
  </se>
  <se label="App Secret">
    <input type="text" nz-input [(ngModel)]="i.sk" name="sk" required maxlength="32">
  </se>
  <se>
    <button nz-button nzType="primary" [disabled]="f.invalid">Save</button>
  </se>
</form>
```

同时，会自动处理所有 Angular 内置校验指令，例如：`required`、`maxlength`、`min`、`pattern` 等，并以红色边框来表示无效值状态。

## API

### se-container

| 成员 | 说明 | 类型 | 默认值 | 全局配置 |
|----|----|----|-----|------|
| `[gutter]` | 间距，当 `nzLayout:horizontal` 时有效 | `number` | `32` | ✅ |
| `[se-container]` | 指定表单元素最多分几列展示，最终一行几列由 col 配置结合[响应式规则](/theme/responsive)决定 | `'1','2','3','4','5','6'` | - |  |
| `[col]` | 指定表单元素最多分几列展示，最终一行几列由 col 配置结合[响应式规则](/theme/responsive)决定 | `'1','2','3','4','5','6'` | - | ✅ |
| `[labelWidth]` | 表单元素默认标签文本宽度，单位：`px` | `number` | `150` | ✅ |
| `[nzLayout]` | 表单布局，当 `inline` 时强制大小为 `compact` | `'horizontal','vertical','inline'` | `'horizontal'` | ✅ |
| `[size]` | 大小 `compact` 紧凑型，强制忽略 `error`、`extra` 展示 | `'default','compact'` | `'default'` | ✅ |
| `[firstVisual]` | 是否立即呈现错误视觉 | `boolean` | `false` | ✅ |
| `[ingoreDirty]` | 是否忽略 `dirty` 校验 | `boolean` | `false` | ✅ |
| `[line]` | 分隔线 | `boolean` | `false` | - |
| `[title]` | 标题 | `string,TemplateRef<void>` | - |  |
| `[errors]` | 批量修改 `se` 错误消息描述 | `SEErrorRefresh[]` | - |  |
| `[noColon]` | 默认是否不显示 label 后面的冒号 | `boolean` | `false` | - |

### se

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[col]` | 指定表单元素最多分几列展示，最终一行几列由 col 配置结合[响应式规则](/theme/responsive)决定（继承于 `se-container`） | `'1','2','3','4','5','6'` | - |
| `[label]` | 标签文本 | `string, TemplateRef<void>` | - |
| `[labelWidth]` | 标签文本宽度，单位：`px`（继承于 `se-container`） | `number` | - |
| `[hideLabel]` | 是否隐藏当前 `label` | `boolean` | `false` |
| `[optional]` | 标签可选信息 | `string, TemplateRef<void>` | - |
| `[optionalHelp]` | 标签可选帮助 | `string, TemplateRef<void>` | - |
| `[optionalHelpColor]` | 标签可选帮助背景颜色	 | `string` | - |
| `[error]` | 错误描述 | `string, TemplateRef<void>, { [key: string]: string, TemplateRef<void> }` | - |
| `[extra]` | 额外提示信息 | `string, TemplateRef<void>` | - |
| `[required]` | 是否必填项标识符，若不设置自动根据表单元素是否有 `RequiredValidator` 校验来设置值 | `string` | - |
| `[controlClass]` | 控件区域样式名 | `string` | - |
| `[id]` | 自定义组件 `id` | `string` | - |
| `[line]` | 分隔线（继承于 `se-container`） | `boolean` | - |
| `[noColon]` | 是否不显示 label 后面的冒号 | `boolean` | `false` | - |

### se-title

用于展示标题，单独一行。

## 常见问题

### 什么时候自定义组件id

点击表单的 Label 会将光标定位至相应组件下，而 `ng-edit` 会自动根据 `ngModel` 状态合理的设定 `id`，绝大多数情况下你无须关心 `id` 的绑定状态，当然若你手动指定 `id` 值则优先级更高但同时你需要自己维护组件对应的 `id` 值。

---

## 代码示例

### 基础

一行两列表单。

```typescript
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SEModule } from '@delon/abc/se';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'components-se-basic',
  template: ` <form nz-form #f="ngForm" se-container gutter="32">
    <se label="App Key" [error]="{ required: '请填写', pattern: '只能包含a-z, 0-9之间' }">
      <input
        type="text"
        nz-input
        [(ngModel)]="i.ak"
        name="ak"
        required
        pattern="^[a-z0-9]*$"
        placeholder="必填项，且只能包含a-z, 0-9之间"
      />
    </se>
    <ng-template #appSecretRequired> 请填写，密钥<a (click)="msg.success('success')">生成</a>地址。 </ng-template>
    <se label="App Secret" [error]="{ required: appSecretRequired, pattern: '只能包含0-9之间' }">
      <input
        type="text"
        nz-input
        [(ngModel)]="i.sk"
        name="sk"
        required
        maxlength="32"
        pattern="^[0-9]*$"
        placeholder="必填项，且只能包含0-9之间"
      />
    </se>
    <se>
      <button nz-button nzType="primary" [disabled]="f.invalid">Save</button>
    </se>
  </form>`,
  imports: [SEModule, NzFormModule, NzInputModule, FormsModule, NzButtonModule]
})
export class ComponentsSeBasic {
  readonly msg = inject(NzMessageService);
  i: { ak?: string; sk?: string } = {};
}
```

### 响应式表单

支持响应式表单。
> **注意：**
>
> * 响应式表单无法自动获取 `Validators.required` 来判断是否需要必填项标识符，因此需要手动标识 `required` 属性。
> * 当需要使用 `patchValue` 赋值时，因为 `dirty` 依然保持为 `false` 的因素，需要对所有表单元素设置 `markAsDirty()` 或者使用 `ingoreDirty` 属性强制忽略 `dirty` 的校验。

```typescript
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { SEModule } from '@delon/abc/se';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'components-se-reactive',
  template: ` <form nz-form [formGroup]="validateForm" (ngSubmit)="submitForm()" se-container gutter="32" ingoreDirty>
    <se
      label="App Key"
      required
      [error]="{ required: 'Please input your username!', pattern: 'Incorrect format, muse be A' }"
    >
      <input formControlName="userName" nz-input placeholder="Username" />
    </se>
    <se label="App Secret" required error="Please input your Password!">
      <input formControlName="password" nz-input type="password" placeholder="Password" />
    </se>
    <se>
      <button nz-button nzType="primary" [disabled]="!validateForm.valid">Log in</button>
      <button nz-button nzType="link" type="button" (click)="updateValue()">Update value via patchValue</button>
    </se>
  </form>`,
  imports: [SEModule, NzFormModule, NzInputModule, ReactiveFormsModule, NzButtonModule]
})
export class ComponentsSeReactive {
  validateForm = new FormGroup({
    userName: new FormControl<string | null>(null, [Validators.required, Validators.pattern(/A/)]),
    password: new FormControl(null, [Validators.required]),
    remember: new FormControl(true)
  });
  constructor(private msg: NzMessageService) {}

  submitForm(): void {
    this.msg.success(JSON.stringify(this.validateForm.value));
  }

  updateValue(): void {
    this.validateForm.patchValue({ userName: 'a' });
  }
}
```

### 紧凑型

强制忽略 `error`、`extra` 展示。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SEModule } from '@delon/abc/se';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'components-se-compact',
  template: ` <form nz-form #f="ngForm" se-container labelWidth="150" gutter="32" size="compact">
    <se label="App Key" error="请填写" optional="(选填)" optionalHelp="通过控制台-查看KEY获取" extra="额外提示信息">
      <input type="text" nz-input [(ngModel)]="i.ak" name="ak" required />
    </se>
    <se label="App Secret" error="请填写，最多32位">
      <input type="text" nz-input [(ngModel)]="i.sk" name="sk" required maxlength="32" />
    </se>
    <se>
      <button nz-button nzType="primary" [disabled]="f.invalid">Save</button>
    </se>
  </form>`,
  imports: [SEModule, NzFormModule, NzInputModule, FormsModule, NzButtonModule]
})
export class ComponentsSeCompact {
  i: { ak?: string; sk?: string } = {};
}
```

### 水平排列

一行一列表单。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SEModule } from '@delon/abc/se';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'components-se-horizontal',
  template: ` <form nz-form #f="ngForm" se-container="1" labelWidth="150">
    <se label="App Key" error="请填写" optional="(选填)" optionalHelp="通过控制台-查看KEY获取" extra="额外提示信息">
      <input type="text" nz-input [(ngModel)]="i.ak" name="ak" required />
    </se>
    <se label="App Secret" error="请填写，最多32位">
      <input type="text" nz-input [(ngModel)]="i.sk" name="sk" required maxlength="32" />
    </se>
    <se>
      <button nz-button nzType="primary" [disabled]="f.invalid">Save</button>
    </se>
  </form>`,
  imports: [SEModule, NzFormModule, NzInputModule, FormsModule, NzButtonModule]
})
export class ComponentsSeHorizontal {
  i: { ak?: string; sk?: string } = {};
}
```

### 内联布局

若 `nzLayout: inline` 时强制使用紧凑型，一般用于搜索框。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SEModule } from '@delon/abc/se';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'components-se-inline',
  template: ` <form nz-form nzLayout="inline" #f="ngForm" se-container>
    <se label="App Key" error="请填写" optional="(选填)" optionalHelp="通过控制台-查看KEY获取" extra="额外提示信息">
      <input type="text" nz-input [(ngModel)]="i.ak" name="ak" required />
    </se>
    <se label="App Secret" error="请填写，最多32位">
      <input type="text" nz-input [(ngModel)]="i.sk" name="sk" required maxlength="32" />
    </se>
    <se>
      <button nz-button nzType="primary" [disabled]="f.invalid">Save</button>
    </se>
  </form>`,
  imports: [SEModule, NzFormModule, NzInputModule, FormsModule, NzButtonModule]
})
export class ComponentsSeInline {
  i: { ak?: string; sk?: string } = {};
}
```

### 垂直布局

垂直布局表单。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SEModule } from '@delon/abc/se';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'components-se-vertical',
  template: ` <form nz-form nzLayout="vertical" #f="ngForm" se-container>
    <se label="App Key" error="请填写" optional="(选填)" optionalHelp="通过控制台-查看KEY获取" extra="额外提示信息">
      <input type="text" nz-input [(ngModel)]="i.ak" name="ak" required />
    </se>
    <se label="App Secret" error="请填写，最多32位">
      <input type="text" nz-input [(ngModel)]="i.sk" name="sk" required maxlength="32" />
    </se>
    <se>
      <button nz-button nzType="primary" [disabled]="f.invalid">Save</button>
    </se>
  </form>`,
  imports: [SEModule, NzFormModule, NzInputModule, FormsModule, NzButtonModule]
})
export class ComponentsSeVertical {
  i: { ak?: string; sk?: string } = {};
}
```

### 分隔线

构建一个左右结构的标准表单行。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SEModule } from '@delon/abc/se';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'components-se-line',
  template: ` <form nz-form #f="ngForm" se-container="1" size="compact" gutter="32">
    <se label="所属类目" line>头像</se>
    <se label="图片">
      <nz-input-search nzEnterButton="提取">
        <input type="text" nz-input placeholder="请贴入网络图片地址" />
      </nz-input-search>
    </se>
  </form>`,
  imports: [SEModule, NzFormModule, NzInputModule, FormsModule, NzButtonModule]
})
export class ComponentsSeLine {}
```

### 批量重置错误消息

利用 `errors` 可以批量对所有 `se` 组件重置 `error` 值。

```typescript
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { SEErrorRefresh, SEModule } from '@delon/abc/se';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'components-se-reset-errors',
  template: `
    <h3>Operating</h3>
    <div class="mb-md">
      <button nz-button (click)="resetErrors()">Reset all errors</button>
    </div>
    <form nz-form #f="ngForm" se-container [errors]="ngModelErrors" gutter="32">
      <se label="App Key" [error]="{ required: '请填写', pattern: '只能包含a-z, 0-9之间' }">
        <input
          type="text"
          nz-input
          [(ngModel)]="i.ak"
          name="ak"
          required
          pattern="^[a-z0-9]*$"
          placeholder="必填项，且只能包含a-z, 0-9之间"
        />
      </se>
      <ng-template #appSecretRequired> 请填写，密钥<a (click)="msg.success('success')">生成</a>地址。 </ng-template>
      <se label="App Secret" [error]="{ required: appSecretRequired, pattern: '只能包含0-9之间' }">
        <input
          type="text"
          nz-input
          [(ngModel)]="i.sk"
          name="sk"
          required
          maxlength="32"
          pattern="^[0-9]*$"
          placeholder="必填项，且只能包含0-9之间"
        />
      </se>
      <se>
        <button nz-button nzType="primary" [disabled]="f.invalid">Save</button>
      </se>
    </form>
    <h3>Reactive</h3>
    <form nz-form [formGroup]="validateForm" se-container gutter="32" [errors]="reactiveErrors">
      <se label="App Key" [error]="{ required: 'Please input your username!', pattern: 'Incorrect format, muse be A' }">
        <input formControlName="userName" nz-input placeholder="Username" />
      </se>
      <se label="App Secret" error="Please input your Password!">
        <input formControlName="password" nz-input type="password" placeholder="Password" />
      </se>
      <se>
        <button nz-button nzType="primary" [disabled]="!validateForm.valid">Log in</button>
      </se>
    </form>
  `,
  imports: [SEModule, NzFormModule, NzInputModule, ReactiveFormsModule, FormsModule, NzButtonModule]
})
export class ComponentsSeResetErrors {
  validateForm = new FormGroup({
    userName: new FormControl<string | null>(null, [Validators.required, Validators.pattern(/A/)]),
    password: new FormControl(null, [Validators.required]),
    remember: new FormControl(true)
  });

  i: { ak?: string; sk?: string } = {};
  ngModelErrors: SEErrorRefresh[] = [];
  reactiveErrors: SEErrorRefresh[] = [];

  constructor(public msg: NzMessageService) {}

  resetErrors(): void {
    this.ngModelErrors = [{ name: 'ak', error: 'Required field, and can only contain a-z, 0-9' }];
    this.reactiveErrors = [
      { name: 'userName', error: 'Required username' },
      { name: 'password', error: 'Required password' }
    ];
  }
}
```

### 不规则布局

利用 `col` 可以构建复杂不规则布局。

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SEModule } from '@delon/abc/se';
import { STColumn, STModule } from '@delon/abc/st';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'components-se-complex',
  template: `
    <form nz-form #f="ngForm" se-container="3" size="compact" gutter="24">
      <se-title>Title 1</se-title>
      <se label="ID" col="1" [optionalHelp]="optionalHelpTpl">
        1000
        <ng-template #optionalHelpTpl> Via by ng-template </ng-template>
      </se>
      <se label="Name" required col="2" optionalHelp="The background color is #f50" optionalHelpColor="#f50">
        <input type="text" nz-input [(ngModel)]="i.user_name" name="user_name" required placeholder="占两栏" />
      </se>
      <se label="Age" required>
        <nz-select [(ngModel)]="i.user_age" name="user_age" nzAllowClear nzPlaceHolder="Choose">
          <nz-option [nzValue]="1" nzLabel="1" />
          <nz-option [nzValue]="2" nzLabel="2" />
          <nz-option [nzValue]="3" nzLabel="3" />
          <nz-option [nzValue]="4" nzLabel="4" />
          <nz-option [nzValue]="5" nzLabel="5" />
        </nz-select>
      </se>
      <se label="Brithday" required>
        <nz-date-picker [(ngModel)]="i.user_birthday" name="user_birthday" nzShowTime />
      </se>
      <se label="App Key" required>
        <input type="text" nz-input [(ngModel)]="i.ak" name="ak" required />
      </se>
      <se label="App Secret" required>
        <input type="text" nz-input [(ngModel)]="i.sk" name="sk" required maxlength="32" />
      </se>
      <nz-divider />
      <se label="Phone Number" required>
        <nz-input-wrapper>
          <nz-select nzInputAddonBefore [(ngModel)]="i.phoneNumberPrefix" name="phoneNumberPrefix" style="width: 70px;">
            <nz-option nzLabel="+86" nzValue="+86" />
            <nz-option nzLabel="+87" nzValue="+87" />
          </nz-select>
          <input type="text" nz-input [(ngModel)]="i.phoneNumber" name="phoneNumber" required maxlength="32" />
        </nz-input-wrapper>
      </se>
      <se>
        <label nz-checkbox [(ngModel)]="i.agree" name="agree">
          <span>I have read the <a>agreement</a></span>
        </label>
      </se>
      <se-title>Title 2</se-title>
      <se label="Long Long Long Long Long Long Label" col="1">
        <textarea [(ngModel)]="i.comment" name="comment" nz-input rows="2" placeholder="write any thing"></textarea>
      </se>
      <se hideLabel col="1">
        <st [columns]="columns" size="small" />
      </se>
      <se col="1">
        <button nz-button nzType="primary" [disabled]="f.invalid">Save</button>
      </se>
    </form>
  `,
  imports: [
    SEModule,
    NzFormModule,
    NzInputModule,
    FormsModule,
    NzButtonModule,
    NzSelectModule,
    NzDividerModule,
    NzCheckboxModule,
    NzDatePickerModule,
    STModule
  ]
})
export class ComponentsSeComplex {
  i = {
    user_name: '',
    user_age: 3,
    user_birthday: '',
    ak: '',
    sk: '',
    phoneNumberPrefix: '+86',
    phoneNumber: '',
    agree: true,
    comment: ''
  };
  columns: STColumn[] = [{ title: 'id' }];
}
```
