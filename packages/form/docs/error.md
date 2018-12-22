---
order: 3
title: 校验错误
type: Documents
---

## 写在前面

JSON Schema 校验过程中会生产一组错误信息，每一个错误都有一个固定的 `keyword` 来表示，允许通过 `DelonFormConfig.errors` 来覆盖默认的错误信息，包括处理错误信息国际化问题。例如当某属性为必填性时产生的错误信息为:

```json
[{
  "keyword": "required",
  "dataPath": ".client",
  "schemaPath": "#/required",
  "params": {"missingProperty":"client"},
  "message":"必填项"
}]
```

其中 `message` 用于页面渲染的错误文本。

> **注：**第一次渲染会触发校验，但不会有任何视觉展示，若需要一开始就体现错误视觉效果可以指定 `<sf firstVisual></sf>`。

## 自定义错误文本

分别支持 `DelonFormConfig.errors`（一般用于国际化） 或 `ui.errors`（针对某个属性） 结构来处理错误文本。

**DelonFormConfig**

在根模块重新注入 `DelonFormConfig` 实例：

```ts
import { DelonFormConfig } from '@delon/abc';
export function fnDelonFormConfig(): DelonFormConfig {
  return Object.assign(new DelonFormConfig(), <DelonFormConfig>{
    errors: {
      'required': '必填项',
      // others
    }
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

**ui.errors**

```ts
schema: SFSchema = {
  properties: {
    email: {
      type: 'string',
      title: '邮箱',
      format: 'email',
      maxLength: 20,
      ui: {
        errors: {
          'required': '必填项'
        }
      }
    }
  }
};
```

### keyword

不管采用哪种方式来构建错误文本，都必须通过 `keyword` 来区分错误类型（完整类型见 [ERRORSDEFAULT](https://github.com/ng-alain/delon/blob/master/packages/form/src/errors.ts#L4)）。

## 自定义校验

JSON Schema 校验并不一定能够满足一些业务的需求，例如需要根据其他属性值区分不同校验规则：

### 属性校验

```ts
schema: SFSchema = {
  properties: {
    name: {
      type: 'string'
    },
    email: {
      type: 'string',
      title: '邮箱',
      format: 'email',
      ui: {
        validator: (value: any, formProperty: FormProperty, form: PropertyGroup) => {
          return form.value.name === 'cipchk' ? [] : [{ keyword: 'required', message: '必须是cipchk@qq.com'}];
        }
      }
    }
  }
};
```

### 异步校验

例如一个异步校验用户名是否存在示例：

```ts
schema: SFSchema = {
  properties: {
    name: {
      type: 'string',
      ui: {
        validator: (value: any) => this.http.get(`/user/check/${value}`).pipe(
          map(res => res ? [ { keyword: 'required', message: '用户名已存在'} ] : [])
        )
      }
    }
  }
};
```

**注意：** 由于每一次校验都是重新实例一次，因此无法做一些控制的操作，例如：去抖 `debounceTime`。

## 视觉

可以通过设置 `DelonFormConfig.onlyVisual` 或 `ui.onlyVisual` 属性控制只展示错误视觉不显示错误文本。
