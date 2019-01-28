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
@ViewChild('sf') sf: SFComponent;
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
  this.http.get('/apps').subscribe((res: any) => {
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
  this.http.get('/schema').subscribe((res: any) => this.sf.refreshSchema(res));
}
```

## 什么时候使用 `default`？

Schema 的 `default` 用于设置初始化，一般情况下当修改表单时是需要提供 `formData` 参数，但对于增加表单来说，应该依靠 `default` 提供一个更友好的表单给用户。
