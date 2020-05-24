---
order: 3
title: Validation Error
type: Documents
---

## Prologue

A set of error messages may be created during JSON Schema validation, every error has a fixed `keyword`, you can configure `errors` in [global config](/docs/global-config) to override default error messages, you can also handle internationalization error messages in global config. Following is an example when it is failed to pass required field validation:

```json
[{
  "keyword": "required",
  "dataPath": ".client",
  "schemaPath": "#/required",
  "params": {"missingProperty":"client"},
  "message":"Required Field"
}]
```

`message` is used to render error information on page.

> **Note：**Validation is triggered when it is first time rendering, but there is no any visual presentation, you can set `<sf firstVisual></sf>` to show error effect when it is first time rendering.

## Custom Error Information

Support to [globally configure](/docs/global-config) `errors` (commonly used for internationalization) or configure `ui.errors` (for a specific property) to handle error information.

**ui.errors**

```ts
schema: SFSchema = {
  properties: {
    email: {
      type: 'string',
      title: 'Email',
      format: 'email',
      maxLength: 20,
      ui: {
        errors: {
          'required': 'Required Field'
        }
      }
    }
  }
};
```

### keyword

No matter which way to build error information, `keyword` must be used to distinguish error type. You can find the full list of [ERRORSDEFAULT](https://github.com/ng-alain/delon/blob/master/packages/form/src/errors.ts#L4) here.

## Custom Validation

JSON Schema cannot satisfy business requirements all the time, e.g. sometimes, need to distinguish different validation rules based on other properties:

### Property Validation

```ts
schema: SFSchema = {
  properties: {
    name: {
      type: 'string'
    },
    email: {
      type: 'string',
      title: 'Email',
      format: 'email',
      ui: {
        validator: (value: any, formProperty: FormProperty, form: PropertyGroup) => {
          return form.value.name === 'cipchk' ? [] : [{ keyword: 'required', message: 'Must be cipchk@qq.com'}];
        }
      }
    }
  }
};
```

### Asynchronous Validation

Following example show how to validate if a username exists asynchronously:

```ts
schema: SFSchema = {
  properties: {
    name: {
      type: 'string',
      ui: {
        validator: (value: any) => this.http.get(`/user/check/${value}`).pipe(
          map(res => res ? [ { keyword: 'required', message: 'Username exists'} ] : [])
        )
      }
    }
  }
};
```

**Note：** Because a new instance is generated in every time of validation, some control operations are not able to do, e.g. `debounceTime`.

## Visual

Can configure [global config](/docs/global-config) or `ui.onlyVisual` to control if only show error visual but not error message.

## Debug

JSON Schema has strong requirement on format, for example, date must follow the format described in [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6):

```ts
{
  properties: {
    time: {
      type: 'string',
      ui: { widget: 'date', mode: 'range' },
      title: 'Date',
      format: 'yyyy-MM-dd HH:mm:ss'
    }
  },
  ui: {
    debug: true
  }
}
```

`format` is an invalid format of date, detailed validation error information will be shown in console when `debug: true` is set.

```
Error: unknown format "yyyy-MM-dd HH:mm:ss" is used in schema at path "#/properties/time"
```
