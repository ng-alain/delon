---
order: 99
title: 常见问题
type: Documents
---

## path

有许多方法都需要传递 `path` 参数，它使用 `/` 分隔符来表示访问表单对象路径，例如一个 JSON Schema 示例：

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

以下 `path` 行为都有效：

- `/app`
- `/user/name`

使用 `/` 开头时表示从根路径查找，反之从当前路径向下查找。

## 为什么非实时校验部分自定义校验无法生效？

由于非实时校验（设置 `liveValidate:false`）不会重新对每个元素执行一次校验，虽然能做到，但自定义校验有可能存在异步，无法保证执行的顺序，因此非实时校验实际只对 JSON Schema 本身的校验。

## 如何动态使用 Schema？

一般分为两种情形：

**1、Schema 定义后可能受限于某个数据来自远程**

```ts
@ViewChild('sf', { static: false }) sf: SFComponent;
schema: SFSchema = {
  properties: {
    app: {
      type: 'string',
      title: '附属应用',
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

**2、远程 Schema**

```ts
schema: SFSchema = {
  properties: {}
};

ngOnInit() {
  this.http.get('/schema').subscribe(res => this.sf.refreshSchema(res));
}
```

## 什么时候使用 `default`？

Schema 的 `default` 用于设置初始化，一般情况下当修改表单时是需要提供 `formData` 参数，但对于增加表单来说，应该依靠 `default` 提供一个更友好的表单给用户。

## 如何刷新特定 Schema？

可以通过 `getProperty` 方法来获取某个 Schema 的属性，其属性包含 Schema 数据以及 Ui 数据，可以修改这些数据，并重新调用小部件的 `reset` 方法重新渲染该 Schema，例如：

```ts
const statusProperty = this.sf.getProperty('/status')!;
statusProperty.schema.enum = ['1', '2', '3'];
statusProperty.widget.reset('2');
// 或手动触发 `detectChanges`
// statusProperty.widget.detectChanges();
```

## 为什么无法校验 `required`

从 Ajv 7.x 新增 [strict](https://ajv.js.org/options.html#strict-mode-options) 模式，并且默认为 `true`，当最基本的 `required` 都无法正确校验时，那大概率就是因为 Schema 包含了不符合 Json Schema 格式的信息，可以通过 `debug` 模式验证这一点：

```ts
schema: SFSchema = {
  properties: {
    month: {
      type: 'string',
      format: 'month'
    }
  },
  required: ['month'],
  ui: { debug: true }
};
```

由于这里的 `format: 'month'` 并不是 Json Schema 标准，因此，你可以在 Console 面板得到错误：

```
Error: unknown format "month" ignored in schema at path "#/properties/month"
```

解决这一问题，只能通过全局配置设置 `strict` 为 `false`：

```ts
// src/app/global-config.module.ts
const alainConfig: AlainConfig = {
  sf: {
    ajv: { strict: false }
  }
};
```
