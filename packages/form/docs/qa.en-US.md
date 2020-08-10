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
```
