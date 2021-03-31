---
order: 2
title: Schema
type: Documents
---

## Prologue

[JSON Schema](http://json-schema.org/) is a specification to define JSON data structure, it doesn't include detailed explanation about how to convert the specification to specific forms, `@delon/form` is a dynamic form library developed based on our own understanding of JSON Schema and current data input components of `ng-zorro-antd`.

JSON Schema **must always** have a type `type="object"` as **root node**，therefore a simplest Schema structure at least is:

```ts
schema = {
  type: 'object', // optional, set to `object` by default
  properties: {}
}
```

Ahead of dscribing Schema, it is necessary to make a systematic description about the relationship between form elements and Schema.

As we know, form is a set of HTML elements, every element maps to one Schema property, a property has it's own data type, format, visual information, etc., but this is not enough to describe the rich APIs provided by `ng-zorro-antd`. In order to better use these APIs, `@delon/form` not only implemented most standard JSON Schema, but also added an additional property `ui`, which is used to describe how to render the property.

### Non Pollution

Of course, you can set `<sf [ui]="ui">` to add additional UI rendering if you have strict requirement about standard, or JSON Schema data is generated from backend. For example:

```ts
schema = {
  properties: {
    url: {
      type: 'string',
      title: 'Web Site'
    }
  }
}
```

A URL property, the pure JSON Schema structure cann't describe about adding prefix `https://`, but `nz-input` supports very rich prefix and postfix texts, so we can customize it in `ui` to add prefix `https://`:

```ts
ui = {
  $url: {
    addOnBefore: 'https://'
  }
}
```

`ui` itself is a JSON structure, in order to distinguish with relationship of JSON Schema property, **must** add prefix `$` to all properties; must replace array elements with `$items`. When KEY is `*`, it is valid for all properties.

### Relationship between Form and Data Structure

We think a complete form should include some of following elements:

![](./assets/img/form-input.png)

Description from left to right:

| Structure Source | Parameter | Description | Type | Default Value |
|------------------|-----------|-------------|------|---------------|
| Schema | `[required]` | If required | `string[]` | - |
| Schema | `[title]` | Title | `string` | - |
| ui | `[optional]` | Optional information | `string` | - |
| ui | `[optionalHelp]` | Optional help information | `string, SFOptionalHelp` | - |
| ui | `[placeholder]` | Placeholder | `string` | - |
| Schema | `[description]` | Description for the property | `string` | - |
| - | `[error]` | Error information | `string` | - |

### Some Specifications

- Following camelCase to name `key`
- You can ignore description marked as **Not recommended** if you are very familiar with JSON Schema.

## JSON Schema（SFSchema）

JSON Schema has complete specification descrbes for each property, `@delon/form` is currently based on specification [draft-07](http://json-schema.org/), following is the detailed explanation of specification:

### Common Type

| Parameter | Description | Type | Default Value |
|-----------|-------------|------|---------------|
| `[type]` | Data type, support JavaScript basic types | `number,string,boolean,object,array` | `object` |
| `[enum]` | Enum, static data source | `SFSchemaEnumType[]` | - |

### Value Type

| Parameter | Description | Type | Default Value |
|-----------|-------------|------|---------------|
| `[minimum]` | Minimum value | `number` | - |
| `[exclusiveMinimum]` | If excluding `minimum` value | `boolean` | - |
| `[maximum]` | Maximum value | `number` | - |
| `[exclusiveMaximum]` | If excluding `maximum` value | `boolean` | - |
| `[multipleOf]` | Multiple | `number` | - |

**About exclusiveMinimum and exclusiveMaximum**

The implementation mechanism of `sf` causes that it couldn't handle error capturing for `type` perpectly, therefore `sf` ignores all `type` (see [config.ts](https://github.com/ng-alain/delon/blob/master/packages/form/src/config.ts#L12)) errors by default, these two kinds of errors are considered as `type` error, which will trigger invalid check. (find more details from [#676](https://github.com/ng-alain/ng-alain/issues/676#issuecomment-420208459)）

### String Type

| Parameter | Description | Type | Default Value |
|-----------|-------------|------|---------------|
| `[maxLength]` | Maximum length of string | `number` | - |
| `[minLength]` | Minimum length of string | `number` | - |
| `[pattern]` | Regular expression | `string` | - |

### Array Type

| Parameter | Description | Type | Default Value |
|-----------|-------------|------|---------------|
| `[items]` | Array element description, only support array object. Can use other components if array of basic type is needed | `SFSchema` | - |
| `[minItems]` | Minimum number of element in array | `number` | - |
| `[maxItems]` | Maximum number of element in array | `number` | - |
| `[uniqueItems]` | Element is unique in array | `boolean` | - |
| `[additionalItems]` | additional validation rules for array | `SFSchema` | - |

### Object Type

| Parameter | Description | Type | Default Value |
|-----------|-------------|------|---------------|
| `[maxProperties]` | Maximum number of property, must be a nonnegative integer | `number` | - |
| `[minProperties]` | Maximum number of property, must be a nonnegative integer | `number` | - |
| `[required]` | If required | `string[]` | - |
| `[properties]` | Propery definition | `{ [key: string]: SFSchema }` | - |

### Condition Type

| Parameter | Description | Type | Default Value |
|-----------|-------------|------|---------------|
| `[if]` | Condition validation | `SFSchema` | - |
| `[then]` | Condition validation | `SFSchema` | - |
| `[else]` | Condition validation | `SFSchema` | - |

Validation of condition check is very strong and rich, but considering it breaks UI and adds complexity to component build, `@delon/form` only implements `required`, and uses it to determine if need validation, for example, a login page, it can show different login mode based on different login methods:

```ts
schema: SFSchema = {
  properties: {
    type: { type: 'string', enum: [ 'mobile', 'name' ], default: 'mobile' },
    name: { type: 'string' },
    pwd: { type: 'string' },
    mobile: { type: 'string' },
    code: { type: 'string' }
  },
  required: [ 'type' ],
  if: {
    properties: { type: { enum: [ 'mobile' ] } }
  },
  then: {
    required: [ 'mobile', 'code' ]
  },
  else: {
    required: [ 'name', 'pwd' ]
  }
};
```

For above configuraion, eventual behavior is showing `mobile` and `code` in UI when login method is `mobile`, otherwise, showing `name` and `pwd`.

Actually, condition type is eventually parsed to `ui.visibleIf`, Convert it to the following:

```ts
{
  properties: {
    login_type: {
      type: "string",
      title: "登录方式",
      enum: [
        { label: "手机", value: "mobile" },
        { label: "账密", value: "account" }
      ],
      default: "mobile",
      ui: {
        widget: "radio",
        styleType: "button"
      }
    },
    mobile: {
      type: "string",
      ui: {
        visibleIf: {
          login_type: val => val === "mobile"
        }
      }
    },
    code: {
      type: "number",
      ui: {
        visibleIf: {
          login_type: val => val === "mobile"
        }
      }
    },
    name: {
      type: "string",
      ui: {
        visibleIf: {
          login_type: val => val === "account"
        }
      }
    },
    pwd: {
      type: "string",
      ui: {
        type: "password",
        visibleIf: {
          login_type: val => val === "account"
        }
      }
    }
  },
  required: ["login_type"]
};
```

### Logic Type

| Parameter | Description | Type | Default Value |
|-----------|-------------|------|---------------|
| `[allOf]` | **Not recommended**, can be replaced by `required` | `SFSchema[]` | - |
| `[anyOf]` | **Not recommended**, can be replaced by `required` and `minProperties` | `SFSchema[]` | - |
| `[oneOf]` | **Not recommended**, value must be one of | `SFSchema[]` | - |

> **Not recommended**, mainly because there is no UI handle for logic type, it's similar to condition type, will affect UI rendering.

### Format and Visual Type

| Parameter | Description | Type | Default Value |
|-----------|-------------|------|---------------|
| `[title]` | Title | `string` | - |
| `[description]` | Description | `string` | - |
| `[default]` | Default value | `any` | - |
| `[readOnly]` | If read only, equals to `nzDisabled` | `boolean` | - |
| `[format]` | Data format, [Doc](http://json-schema.org/latest/json-schema-validation.html#rfc.section.7.3) | `string` | - |

### Other

| Parameter | Description | Type | Default Value |
|-----------|-------------|------|---------------|
| `[definitions]` | Internal definition | `SFSchemaDefinition` | - |
| `[$ref]` | Reference definition | `string` | - |
| `[$comment]` | Comment for developer, no real meaning, won't be validated | `string` | - |

### Non Standard

| Parameter | Description | Type | Default Value |
|-----------|-------------|------|---------------|
| `[ui]` | UI configuration, has more priority than `ui` property of `sf` component | `SFUISchemaItem` | - |

## UI（SFUISchemaItem）

UI Schema structure is composed by commonality and widgets, following is descriptioin of commonality part, please refer to widget API for widget part.

> In order to keep integrity of API, Schema of widget may includes commonality information.

### SFUISchema

Equals to `<sf [ui]="ui">`, a group of UI structure corresponds to JSON Schema structure, type is: `[ key: string ]: SFUISchemaItem`。

### Basic Type

| Parameter | Description | Type | Default Value |
|-----------|-------------|------|---------------|
| `[debug]` | Debug mode | `boolean` | - |
| `[order]` | Order of property | `string[]` | - |
| `[asyncData]` | Asynchronized static data source | `(input?: any) => Observable<SFSchemaEnumType[]>` | - |
| `[hidden]` | If hide | `boolean` | `false` |
| `[visibleIf]` | Is visible with conditions | `{ [key: string]: any[] | ((value: any) => boolean) }` | - |
| `[acl]` | ACL permission (Use `can()` verify) | `ACLCanType` | - |

**visibleIf**

Is visible with conditions, for example:

- `visibleIf: { shown: [ true ] }`: show current property when `shown: true`
- `visibleIf: { shown: [ '$ANY$' ] }`: show current property when `shown` is any value
- `visibleIf: { shown: (value: any) => value > 0 }`: complex expression

### Validation Type

| Parameter | Description | Type | Default Value |
|-----------|-------------|------|---------------|
| `[liveValidate]` | If realtime validation | `boolean` | `true` |
| `[firstVisual]` | If show visual error immediately | `boolean` | `false` |
| `[onlyVisual]` | If only show visiual error not error text | `boolean` | `false` |
| `[ingoreKeywords]` | Ignore validation for some data types | `string[]` |  |
| `[errors]` | Customized error text | `{ [ key: string ]: string | ((obj: ErrorData) => string) }` | - |
| `[showRequired]` | Whether to display the required logo * | `boolean` | - |
| `[validator]` | Customized validator | `(value: any, formProperty: FormProperty, form: PropertyGroup) => ErrorData[]` | - |

### Array Type

| Parameter | Description | Type | Default Value |
|-----------|-------------|------|---------------|
| `[items]` | UI of specific sub element | `SFUISchema` | - |
| `[addTitle]` | Add Title | `string` | `Add` |
| `[addType]` | Add button style, equals to  `nzType` | `string` | `dashed` |
| `[removable]` | If show remove button | `boolean` | - |
| `[removeTitle]` | Text of remove button | `string` | `Remove` |

### Form Element Type

| Parameter | Description | Type | Default Value |
|-----------|-------------|------|---------------|
| `[type]` | `type` of `input` | `string` | `text` |
| `[placeholder]` | placeholder | `string` | - |
| `[autofocus]` | If auto focus during loading | `boolean` | - |

### Render Type

| Parameter | Description | Type | Default Value |
|-----------|-------------|------|---------------|
| `[widget]` | Widget | `string` | - |
| `[i18n]` | Refers to the i18n key of `schema.title` | `string` | - |
| `[descriptionI18n]` | Refers to the i18n key of `schema.description` | `string` | - |
| `[class]` | Customized class, equals to `[ngClass]` | `string,string[]` | - |
| `[width]` | Width, unit: `px` | `number` | - |
| `[size]` | Size of element | `default,large,small` | - |
| `[grid]` | Property for responsive | `SFGridSchema` | - |
| `[optional]` | Optional | `string` | - |
| `[optionalHelp]` | Optional help | `string, SFOptionalHelp` | - |

### Responsive Property SFGridSchema

`grid` equals to complete [Grid](https://ng.ant.design/components/grid/en), can determine how to render the form by `grid`

| Parameter | Description | Type | Default Value |
|-----------|-------------|------|---------------|
| `[gutter]` | Gutter | `number` | - |
| `[span]` | Number of column for each element, `0` means `display: none` | `number` | - |
| `[xs]` | `<768px` responsive grid, can be number of columns or including object of other properties | `number, SFGridSizeSchema` | - |
| `[sm]` | `≥768px` responsive grid, can be number of columns or including object of other properties | `number, SFGridSizeSchema` | - |
| `[md]` | `≥992px` responsive grid, can be number of columns or including object of other properties | `number, SFGridSizeSchema` | - |
| `[lg]` | `≥1200px` responsive grid, can be number of columns or including object of other properties | `number, SFGridSizeSchema` | - |
| `[xl]` | `≥1600px` responsive grid, can be number of columns or including object of other properties | `number, SFGridSizeSchema` | - |
| `[xxl]` | Reserved field, support after version `0.7.0` | `number, SFGridSizeSchema` | - |

### Horizontal Layout Type

> The sum of label and control **must** be `24`

| Parameter | Description | Type | Default Value |
|-----------|-------------|------|---------------|
| `[spanLabel]` | Number of column for `label` | `number` | 5 |
| `[spanControl]` | Number of column for form element | `number` | 19 |
| `[offsetControl]` | Number of column for left side of `control` | `number` | - |
| `[spanLabelFixed]` | Fixed width for `label` | `number` | - |
