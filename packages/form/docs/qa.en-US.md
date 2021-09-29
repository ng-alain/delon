---
order: 99
title: FAQ
type: Documents
---

## path

Many functions require passing `path` parameter, it uses `/` to represent form object path, following JSON Schema is an example:

```ts
schema: SFSchema = {
  properties: {
    app: {
      type: 'string',
      title: 'APP',
    },
    user: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
        age: {
          type: 'number',
        },
      }
    },
  }
};
```

Following `path` are all valid:

- `/app`
- `/user/name`

Starting with `/` indicates to search from root path, otherwise, search from current path.

## Why some customized validations are not working in non-realtime validation?

Because non-realtime validation (set `liveValidate:false`) doesn't revalidate every element, although it can be done, customized validation may involve asynchronized validation, cannot guarantee the order of execution, so non-realtime validation actually only validates JSON Schema itself.

## How to use Schema dynamically?

There are two common scenarios:

**1. Schema is limited by remote data after definition**

```ts
@ViewChild('sf', { static: false }) sf: SFComponent;
schema: SFSchema = {
  properties: {
    app: {
      type: 'string',
      title: 'Affiliated Application',
      ui: 'select',
      enum: []
    }
  }
};

ngOnInit() {
  this.http.get('/apps').subscribe(res => {
    this.schema.properties.app.enum = res;
    this.sf.refreshSchema();
  });
}
```

**2. Remote Schema**

```ts
schema: SFSchema = {
  properties: {}
};

ngOnInit() {
  this.http.get('/schema').subscribe(res => this.sf.refreshSchema(res));
}
```

## When to use `default`?

`default` of Schema is used to set initialization, usually, need to provide `formData` when editting forms, but for adding forms, should rely on `default` to provide a better user friendly experience form to users.

## How to refresh a specific Schema?

You can get a specific attribute of Schema by calling `getProperty` function, the attribute includes Schema data and Ui data, you can modify these data and re-render the Schema by calling `reset` function, for example:

```ts
const statusProperty = this.sf.getProperty('/status')!;
statusProperty.schema.enum = ['1', '2', '3'];
statusProperty.widget.reset('2');
// Or manually trigger `detectChanges`
// statusProperty.widget.detectChanges();
```

## Why can't verify `required`

Added [strict](https://ajv.js.org/options.html#strict-mode-options) mode from Ajv 7.x, and the default is `true`, when the most basic `required` is not correct When verifying, the high probability is that the Schema contains information that does not conform to the Json Schema format. This can be verified through the `debug` mode:

```ts
schema: SFSchema = {
   properties: {
     month: {
       type:'string',
       format:'month'
     }
   },
   required: ['month'],
   ui: {debug: true}
};
```

Since the `format:'month'` here is not a Json Schema standard, you can get an error in the Console panel:

```
Error: unknown format "month" ignored in schema at path "#/properties/month"
```

To solve this problem, you can only set `strict` to `false` through the global configuration:

```ts
// src/app/global-config.module.ts
const alainConfig: AlainConfig = {
   sf: {
     ajv: {strict: false}
   }
};
```
