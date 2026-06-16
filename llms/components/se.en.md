---
type: CURD
title: se
subtitle: Edit
cols: 1
order: 3
module: import { SEModule } from '@delon/abc/se';
---

A higher-order components of the form HTML template. And optimized some details:

- More friendly form validation status
- Automated responsive layout
- Automatic maintenance `id`

The form HTML template consists of `se-container` container (directive) and `se` component, like this:

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

Also, automatically processed all Angular built-in validation, such as `required`, `maxlength`, `min`, `pattern`, etc., with a red border to indicate invalid value status.

## API

### se-container

| Property | Description | Type | Default | Global Config |
|----------|-------------|------|---------|---------------|
| `[gutter]` | specify the distance between two items, unit is `px`, only `nzLayout:horizontal` | `number` | `32` | ✅ |
| `[se-container]` | specify the maximum number of columns to display, the final columns number is determined by col setting combined with [Responsive Rules](/theme/responsive) | `'1','2','3','4','5','6'` | - |  |
| `[col]` | specify the maximum number of columns to display, the final columns number is determined by col setting combined with [Responsive Rules](/theme/responsive) | `'1','2','3','4','5','6'` | - | ✅ |
| `[labelWidth]` | label text of width, unit is `px` | `number` | `150` | ✅ |
| `[nzLayout]` | type of layout when `inline` forced size is `compact` | `'horizontal','vertical','inline'` | `'horizontal'` | ✅ |
| `[size]` | size of edit, forced ingores `error`, `extra` | `'default','compact'` | `'default'` | ✅ |
| `[firstVisual]` | Immediately show validation error message | `boolean` | `false` | ✅ |
| `[ingoreDirty]` | Whether to ignore the `dirty` check | `boolean` | `false` | ✅ |
| `[line]` | whether separation line style | `boolean` | `false` | - |
| `[title]` | Display title | `string,TemplateRef<void>` | - | - |
| `[errors]` | Batch modify `se` error value | `SEErrorRefresh[]` | - |  |
| `[noColon]` | Whether to not display : after label text | `boolean` | `false` | - |

### se

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[col]` | specify the maximum number of columns to display, the final columns number is determined by col setting combined with [Responsive Rules](/theme/responsive) (Inherited from `se-container`) | `'1','2','3','4','5','6'` | - |
| `[label]` | Label | `string, TemplateRef<void>` | - |
| `[labelWidth]` | label text of width, unit is `px` (Inherited from `se-container`) | `number` | - |
| `[hideLabel]` | Whether to hide the current label | `boolean` | `false` |
| `[optional]` | Label optional information | `string, TemplateRef<void>` | - |
| `[optionalHelp]` | Label optional help | `string, TemplateRef<void>` | - |
| `[optionalHelpColor]` | The background color of label optional help	 | `string` | - |
| `[error]` | validation error message | `string, TemplateRef<void>, { [key: string]: string, TemplateRef<void> }` | - |
| `[extra]` | The extra prompt message. It is similar to help. | `string, TemplateRef<void>` | - |
| `[required]` | Whether required identifier, if not set, the value is automatically set according to whether the form element has `RequiredValidator` validation | `string` | - |
| `[controlClass]` | Control area classes | `string` | - |
| `[id]` | Custom `id` value of component | `string` | - |
| `[line]` | whether separation line style (Inherited from `se-container`) | `boolean` | - |
| `[noColon]` | Whether to not display : after label text | `boolean` | `false` | - |

### se-title

Display title.

## QA

### When customize the component id?

Matching for and `id` values associate the label with the appropriate form control. Because `id` must be unique, and `ng-alain` automatic maintenance `id`. In most cases, you don't need to care about the binding state of `id`. When you manually specify the `id` value, the priority is higher, but you also need to maintain the corresponding `id` value of the component.

---

## Examples

### Basic

1 rows & 2 columns layout form.

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

### Reactive Form

Support for reactive forms.
> \*\*Note: \*\*
>
> * Reactive form can't auto obtain `Validators.required` to determine whether a required item identifier is required, so it is necessary to manually identify the `required` attribute.
> * When you need to use `patchValue` to assign values, because `dirty` remains a factor of `false`, you need to set `markAsDirty()` on all form elements or use the `ingoreDirty` attribute to force the `dirty` check to be ignored.

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

### Compact Layout

Force ignored `error`, `extra` display.

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

### Horizontal Layout

Horizontal layout form.

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

### Inline Layout

If `nzLayout: inline` is forced to use compact, generally used in the search box.

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

### Vertical Layout

Vertical layout form.

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

### Separation line

Build a standard form row.

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

### Bulk reset error value

Using `errors` you can reset `error` values for all `se` components in batches.

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

### Irregular Layout

Use `col` to build complex irregular layouts.

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
