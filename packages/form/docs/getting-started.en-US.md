---
order: 1
title: Getting Started
type: Documents
module: DelonFormModule
config: DelonFormConfig
---

@delon/form is a dynamic build form based on the [JSON Schema](http://json-schema.org/) standard.

## Features

- Compliance with the JSON Schema standard
- Based on the ng-zorro-antd library
- Built on the design principles developed by Ant Design
- Twenty different widgets
- Customizable widgets
- No third-party dependencies, so applicable to all antd projects

## How to read document

This document uses the following conventions:

- With `schema.` prefix is JSON Schema properties
- With `ui.` prefix is UI properties
- Some widget data sources are divided into **static** and **realtime**
  - **Static** refers to the `schema.enum` value, which is JSON Schema standard, and limited to the array format `any[]`
  - **Real-time** refers to the `ui.asyncData` value, which is not JSON Schema standard, the format `(input?: any) => Observable<SFSchemaEnumType[]>`

## Usage

Install `@delon/form` from `yarn`.

```bash
yarn add @delon/form
```

Import `DelonFormModule` in to your root `AppModule`.

```typescript
import { DelonFormModule } from '@delon/form';

@NgModule({
  imports: [
    DelonFormModule.forRoot()
  ]
})
export class AppModule { }
```

Although the default `@delon/form` validator is [ajv](http://epoberezkin.github.io/ajv/), you can override `SchemaValidatorFactory` to use other validator libraries,  so you still have to install `ajv` and in `angular.json` import it.

```bash
yarn add ajv @types/ajv
```

angular.json

```json
"scripts": [
  "node_modules/ajv/dist/ajv.bundle.js"
]
```

**DelonFormConfig**

```ts
import { DelonFormConfig } from '@delon/abc';
export function fnDelonFormConfig(): DelonFormConfig {
  return Object.assign(new DelonFormConfig(), <DelonFormConfig>{
    // values
  });
}

@NgModule({ })
export class DelonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DelonModule,
      providers: [
        { provide: DelonFormConfig, useFactory: fnDelonFormConfig }
      ]
    };
  }
}
```

Property | Description | Type | Default
-------- | ----------- | ---- | -------
`[ajv]` | [ajv](http://epoberezkin.github.io/ajv/#options) options | `Ajv.Options` | -
`[ingoreKeywords]` | Whether to ignore data type validator ([all types](https://github.com/ng-alain/delon/blob/master/packages/form/src/errors.ts#L4)) | `string[]` | `[ 'type', 'enum' ]`
`[liveValidate]` | Whether to live validate | `boolean` | `true`
`[autocomplete]` | autocomplete value of this form | `on,off` | `null`
`[firstVisual]` | Whether to show visual error immediately | `boolean` | `false`
`[onlyVisual]` | Whether only show visual error not include text, and cancel the error text spacing | `boolean` | `false`
`[errors]` | Customize error messages | `{ [ key: string ]: string }` | `ERRORSDEFAULT`
`[ui]` | Default global ui property | `SFUISchemaItem` | -
`[size]` | Size of the all angular element | `default,large,small` | -
`[button]` | Submit button of the form | `SFButton` | `{submit:'提交',submit_type:'primary',reset:'重置',reset_type:'default'}`
`[uiDateStringFormat]` | Date widget default format | `string` | `YYYY-MM-DD HH:mm:ss`
`[uiDateNumberFormat]` | Date widget default format | `string` | `x`
`[uiTimeStringFormat]` | Time widget default format | `string` | `HH:mm:ss`
`[uiTimeNumberFormat]` | Time widget default format | `string` | `x`
`[uiEmailSuffixes]` | Specify the default Email suffix for `format: 'email'` | `string[]` | `['qq.com', '163.com', 'gmail.com', '126.com', 'aliyun.com']`

For example, Build a email and name form:

```ts
@Component({
    selector: 'app-home',
    template: `
    <sf [schema]="schema" (formSubmit)="submit($event)"></sf>
    `
})
export class HomeComponent {
  schema: SFSchema = {
    properties: {
      email: {
        type: 'string',
        title: 'Email',
        format: 'email',
        maxLength: 20
      },
      name: {
        type: 'string',
        title: 'Name',
        minLength: 3
      }
    }
  };

  submit(value: any) {

  }
}
```

## API

### sf

| Property         | Description                              | Type                         | Default      |
|------------------|------------------------------------------|------------------------------|--------------|
| `[layout]`       | layout of the form                       | `horizontal,vertical,inline` | `horizontal` |
| `[schema]`       | **Required** JSON Schema                 | `SFSchema`                   | -            |
| `[ui]`           | UI Schema                                | `SFUISchema`                 | -            |
| `[formData]`     | Default form values                      | `any`                        | -            |
| `[mode]`         | Form type mode                           | `default,search,edit`        | `default`    |
| `[button]`       | Submit button of the form                | `SFButton, 'none'`           | `{}`         |
| `[firstVisual]`  | Whether to show visual error immediately | `boolean`                    | `true`       |
| `[liveValidate]` | Whether to live validate                 | `boolean`                    | `true`       |
| `[autocomplete]` | autocomplete value of this form          | `on,off`                     | `null`       |
| `[loading]` | Whether to load status，when `true` reset button is disabled status, submit button is loading status  | `boolean` | `false` |
| `(formChange)`   | Callback when data changes               | `EventEmitter<{}>`           | -            |
| `(formSubmit)`   | Callback when submitting the form        | `EventEmitter<{}>`           | -            |
| `(formReset)`    | Callback when resetting the form         | `EventEmitter<{}>`           | -            |
| `(formError)`    | Callback when form check                 | `EventEmitter<ErrorData[]>`  | -            |

### SFButton

| Property        | Description           | Type             | Default   |
|-----------------|-----------------------|------------------|-----------|
| `[submit]`      | Submit text of button | `string`         | `提交`    |
| `[submit_type]` | Submit type of button | `string`         | `primary` |
| `[reset]`       | Reset text of button  | `string`         | `重置`    |
| `[reset_type]`  | Reset type of button  | `string`         | `default` |
| `[search]`      | Search text of button | `string`         | `搜索`    |
| `[edit]`        | Edit text of button   | `string`         | `保存`    |
| `[render]`      | Button layout         | `SFRenderButton` | -         |

### Methods

| Method Name     | Description                                                 | Return Value   |
|-----------------|-------------------------------------------------------------|----------------|
| `valid`         | Form is valid                                               | `boolean`      |
| `value`         | The current value of the form                               | `any`          |
| `refreshSchema` | Refresh JSON Schema                                         | `void`         |
| `reset`         | Resets the form                                             | `void`         |
| `validator`     | Manually verify a form                                      | `void`         |
| `getProperty`   | Get a form property via path                                | `FormProperty` |
| `getValue`      | Get value via path                                          | `any`          |
| `setValue`      | Set value via path, shoudl be throw error when invalid path | `this`         |

> **Note:** All paths are separated by `/`, for example: `/user/name`.

### Button

**Notice**

- Manually add button when value is `null` or `undefined`, but keeping container element.
- Manually add button when value is `none`, but removed container element.
- When using fixed `label` width. Default is center when `render.class` is not spacifid.

**Custom Button**

**NOTICE:** Must be setting `button` value is `null`.

```html
<sf #sf [button]="null">
    <button type="submit" nz-button [disabled]="!sf.valid">Save</button>
    <button (click)="sf.reset()" type="button" nz-button>Reset</button>
</sf>
```

## FAQ

### What is mode

`mode` 只是快捷作用，**且优先级高于一切**，规则如下：

- `default` 默认模式，什么也不做
- `search` 搜索模式，自动设置 `layout: inline`、`firstVisual: false`、`liveValidate: false`、`button.submit: '搜索'`
- `edit` 编辑模式，自动设置 `layout: horizontal`、`firstVisual: false`、`liveValidate: true`、`button.submit: '保存'`

### Schema国际化

`sf` 并不支持任何 Schema 国际化动作，这是因为本身 Schema 是一组 JSON 值，国际化的实现只需要提供不同语言版本即可。
