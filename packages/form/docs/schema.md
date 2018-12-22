---
order: 2
title: Schema
type: Documents
---

## 写在前面

[JSON Schema](http://json-schema.org/) 是一种标准的定义 JSON 数据结构的规范，并不包含对这些规范转换成表单具体说明，`@delon/form` 也是根据自己的理解并结合 `ng-zorro-antd` 现有数据录入组件库产生的动态构建表单类库。

JSON Schema **始终**都必须有一个类型为 `type="object"` 作为**根节点**，因此一个最简单的 Schema 结构至少是：

```ts
schema = {
  type: 'object', // 可有可无，默认会强制为 `object`
  properties: {}
}
```

在描述 Schema 说明之前，有必要对表单元素与 Schema 之前的联系做一个系统性说明。

我们知道，表单是由一组HTML元素组件，每一个元素对应一个 Schema 属性，属性有自己的数据类型、格式信息、视觉信息等，但这些信息不足以表述 `ng-zorro-antd` 所提供的丰富API接口。为了更好利用这些API接口，`@delon/form` 除了实现绝大部分 JSON Schema 标准以外，额外唯一增加了一个 `ui` 属性用于表述属性如何渲染的问题。

### 无污染

当然若你对标准有非常严格，或者 JSON Schema 数据结构是来自后端的产生时，可以通过 `<sf [ui]="ui">` 来额外对当前 JSON Schema 添加 UI 渲染。例如：

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

一个URL属性，若我们不希望用于添加 `https://` 前缀的情况下，就单纯的 JSON Schema 结构是无法表述，而 `nz-input` 又支持非常丰富的前后缀文本，则我们可以为 `ui` 定制并增加 `https://` 的前缀文本：

```ts
ui = {
  $url: {
    addOnBefore: 'https://'
  }
}
```

ui 本身也是一个 JSON 结构，为了区分 JSON Schema 属性名的对应关系，**必须**统一对属性名加上 `$` 前缀；对于数组的元素对象必须使用 `$items` 替代。

### 表单元素与数据结构的对应关系

一个完整的表单元素我们认为应该包含以下若干元素：

![](./assets/img/form-input.png)

从左至向各元素描述：

| 结构源 | 参数          | 说明                 | 类型       | 默认值 |
|--------|---------------|----------------------|------------|--------|
| Schema | `[required]`      | 是否必填项           | `string[]` | -      |
| Schema | `[title]`         | 属性描述             | `string`   | -      |
| ui     | `[optional]`      | 标签可选信息         | `string`   | -      |
| ui     | `[optionalHelp]` | 标签可选帮助         | `string`   | -      |
| ui     | `[placeholder]`   | 文字框中显示提示信息 | `string`   | -      |
| Schema | `[description]`   | 属性目的性解释       | `string`   | -      |
| -      | `[error]`         | 错误信息             | `string`   | -      |

### 一点规范

- 所有 `key` 按驼峰式命名法
- 若你对 JSON Schema 很熟悉，则忽略 **不建议** 字样

## JSON Schema（SFSchema）

JSON Schema 有完整的对每个属性的规范描述，`@delon/form` 当前是基于 [draft-07](http://json-schema.org/) 规范，下列是规范具体说明：

### 常规类

| 参数 | 说明                              | 类型                                 | 默认值   |
|------|-----------------------------------|--------------------------------------|----------|
| `[type]` | 数据类型，支持 JavaScript 基础类型 | `number,string,boolean,object,array` | `object` |
| `[enum]` | 枚举，静态数据源                   | `SFSchemaEnumType[]`                 | -        |

### 数值类型

| 参数             | 说明                      | 类型      | 默认值 |
|------------------|---------------------------|-----------|--------|
| `[minimum]`          | 最小值                    | `number`  | -      |
| `[exclusiveMinimum]` | 约束是否包括 `minimum` 值 | `boolean` | -      |
| `[maximum]`          | 最大值                    | `number`  | -      |
| `[exclusiveMaximum]` | 约束是否包括 `maximum` 值 | `boolean` | -      |
| `[multipleOf]`       | 倍数                      | `number`  | -      |

**关于exclusiveMinimum和exclusiveMaximum**

`sf` 的实现机制导致无法很好的处理 `type` 类型的错误捕获，因此默认情况下 `sf` 是忽略了所有 `type` （见 [config.ts](https://github.com/ng-alain/delon/blob/master/packages/form/src/config.ts#L12)）类型错误，而这两种都错误都会被认为 `type` 类型错误，从而倒置触发无效检查的原因。（更多细节请参考 [#676](https://github.com/ng-alain/ng-alain/issues/676#issuecomment-420208459)）

### 字符串类型

| 参数      | 说明                                                             | 类型     | 默认值 |
|-----------|------------------------------------------------------------------|----------|--------|
| `[maxLength]` | 定义字符串的最大长度                                             | `number` | -      |
| `[minLength]` | 定义字符串的最小长度                                             | `number` | -      |
| `[pattern]`   | 验证输入字段正则表达式字符串，若指定 `format: 'regex'` 时务必指定 | `string` | -      |

### 数组类型

| 参数            | 说明                                                                 | 类型       | 默认值 |
|-----------------|----------------------------------------------------------------------|------------|--------|
| `[items]`           | 数组元素类型描述，只支持数组对象，若需要基础类型数组可通过其他部件支持 | `SFSchema` | -      |
| `[minItems]`        | 约束数组最小的元素个数                                               | `number`   | -      |
| `[maxItems]`        | 约束数组最大的元素个数                                               | `number`   | -      |
| `[uniqueItems]`     | 约束数组每个元素都不相同                                             | `boolean`  | -      |
| `[additionalItems]` | 数组额外元素的校验规则                                               | `SFSchema` | -      |

### 对象类型

| 参数          | 说明                        | 类型                          | 默认值 |
|---------------|-----------------------------|-------------------------------|--------|
| `[maxProperties]` | 最大属性个数，必须是非负整数 | `number`                      | -      |
| `[minProperties]` | 最小属性个数，必须是非负整数 | `number`                      | -      |
| `[required]`      | 必需属性                    | `string[]`                    | -      |
| `[properties]`    | 定义属性                    | `{ [key: string]: SFSchema }` | -      |

### 条件类

| 参数 | 说明     | 类型       | 默认值 |
|------|----------|------------|--------|
| `[if]`   | 条件验证 | `SFSchema` | -      |
| `[then]` | 条件验证 | `SFSchema` | -      |
| `[else]` | 条件验证 | `SFSchema` | -      |

条件类的校验非常强大和丰富，但是出于会破坏UI导致整个组件构建更复杂，`@delon/form` 仅实现 `required` 的处理，并且把它当成是否显示校验目标，比如：一个登录页，会根据不同登录方式来显示不同登录模式：

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

上述的最终行为是当登录方式为 `mobile` 时UI显示 `mobile` 和 `code`，反之UI显示 `name` 和 `pwd`。

其实条件类最终被解析成 `ui.visibleIf`，在未来可能会增加条件类的处理。

### 逻辑类

| 参数  | 说明                                                    | 类型         | 默认值 |
|-------|---------------------------------------------------------|--------------|--------|
| `[allOf]` | **不建议** 使用，可用 `required` 替代                    | `SFSchema[]` | -      |
| `[anyOf]` | **不建议** 使用，可用 `required` 和 `minProperties` 替代 | `SFSchema[]` | -      |
| `[oneOf]` | **不建议** 使用，值必须是其中之一                        | `SFSchema[]` | -      |

> **不建议** 主要是并没有对逻辑类进行UI相关处理，它同条件类类似，会影响UI渲染。

### 格式与视觉类

| 参数        | 说明                           | 类型      | 默认值 |
|-------------|--------------------------------|-----------|--------|
| `[title]`       | 属性描述                       | `string`  | -      |
| `[description]` | 属性目的性解释                 | `string`  | -      |
| `[default]`     | 默认值                         | `any`     | -      |
| `[readOnly]`    | 是否只读状态，等同 `nzDisabled` | `boolean` | -      |
| `[format]`      | 数据格式，[文档](http://json-schema.org/latest/json-schema-validation.html#rfc.section.7.3) | `string`  | -      |

### 其他

| 参数        | 说明                                     | 类型                 | 默认值 |
|-------------|------------------------------------------|----------------------|--------|
| `[definitions]` | 内部类型定义体                           | `SFSchemaDefinition` | -      |
| `[$ref]`        | 引用定义体                               | `string`             | -      |
| `[$comment]`    | 针对开发者的注释，无任何意义，也不会被校验 | `string`             | -      |

### 非标准

| 参数 | 说明                                            | 类型             | 默认值 |
|------|-------------------------------------------------|------------------|--------|
| `[ui]`   | 指定UI配置信息，优先级高于 `sf` 组件 `ui` 属性值 | `SFUISchemaItem` | -      |

## UI（SFUISchemaItem）

UI Schema 结构由通用性和小部件API两部分组成，以下是通用性部分进行接口说明，小部件部分自行参数小部件API。

> 为了小部件的API完整性，小部件Schema说明可能也会包含下列通用性部分。

### SFUISchema

等同 `<sf [ui]="ui">` 一组与 JSON Schema 结构相对应的 UI 结构体，类型为：`[ key: string ]: SFUISchemaItem`。

### 基础类

| 参数            | 说明                 | 类型                                                   | 默认值 |   |
|-----------------|----------------------|--------------------------------------------------------|--------|---|
| `[debug]`           | 调试模式             | `boolean`                                              | -      |   |
| `[order]`           | 属性顺序             | `string[]`                                             | -      |   |
| `[asyncData]`       | 异步静态数据源       | `(input?: any) => Observable<SFSchemaEnumType[]>`      | -      |   |
| `[hidden]`          | 是否隐藏渲染       | `boolean`      | `false`      |   |
| `[visibleIf]`       | 指定条件时才显示     | `{ [key: string]: any[] | ((value: any) => boolean) }` | -      |   |

**visibleIf**

指定条件时才显示，例如：

- `visibleIf: { shown: [ true ] }`：当 `shown: true` 时才显示当前属性
- `visibleIf: { shown: [ '$ANY$' ] }`：当 `shown` 包括任意值时
- `visibleIf: { shown: (value: any) => value > 0 }`：复杂表达式

### 校验类

| 参数            | 说明                             | 类型       | 默认值  |
|-----------------|----------------------------------|------------|---------|
| `[liveValidate]`   | 是否实时校验                     | `boolean`  | `true`  |
| `[firstVisual]`    | 是否立即呈现错误视觉             | `boolean`  | `false` |
| `[onlyVisual]`     | 是否只展示错误视觉不显示错误文本 | `boolean`  | `false` |
| `[ingoreKeywords]` | 忽略某些数据类型校验             | `string[]` |         |
| `[errors]`          | 自定义错误信息文本   | `{ [ key: string ]: string | ((obj: ErrorData) => string) }` | -  |
| `[validator]`       | 自定义校验           | `(value: any, formProperty: FormProperty, form: PropertyGroup) => ErrorData[]` | -  |

### 数组类

| 参数         | 说明                               | 类型         | 默认值   |
|--------------|------------------------------------|--------------|----------|
| `[items]`        | 指定子元素的UI                     | `SFUISchema` | -        |
| `[addTitle]`    | 指定添加按钮文本                   | `string`     | `添加`   |
| `[addType]`     | 指定添加按钮风格，等同按钮 `nzType` | `string`     | `dashed` |
| `[removable]`    | 指定是否显示移除按钮               | `boolean`    | -        |
| `[removeTitle]` | 指定移除按钮文本                   | `string`     | `移除`   |

### 表单元素类

| 参数         | 说明                               | 类型         | 默认值   |
|--------------|------------------------------------|--------------|----------|
| `[type]`        | 指定 `input` 的 `type` 值                     | `string` | `text`        |
| `[placeholder]`    | 文字框中显示提示信息                   | `string`     |- |
| `[autofocus]`     | 加载时是否获得焦点 | `boolean`     | - |

### 渲染类

| 参数             | 说明                         | 类型                  | 默认值 |
|------------------|------------------------------|-----------------------|--------|
| `[widget]`       | 指定采用什么小部件渲染       | `string`              | -      |
| `[class]`        | 自定义类，等同 `[ngClass]` 值 | `string,string[]`  | -      |
| `[width]`        | 指定宽度，单位：`px`           | `number`              | -      |
| `[size]`         | 元素组件大小                 | `default,large,small` | -      |
| `[grid]`         | 响应式属性                   | `SFGridSchema`        | -      |
| `[optional]`     | 标签可选信息                 | `string`              | -      |
| `[optionalHelp]` | 标签可选帮助                 | `string`              | -      |

### 响应式属性 SFGridSchema

`grid` 属性等同完整的 [Grid栅格系统](https://ng.ant.design/#/components/grid)，透过 `grid` 可以决定表单如何渲染。

| 参数   | 说明                                                     | 类型             | 默认值 |
|--------|----------------------------------------------------------|------------------|--------|
| `[gutter]` | 栅格间隔                                                 | `number`         | -      |
| `[span]`   | 每个表单元素栅格占位格数，为 `0` 时相当于 `display: none` | `number`         | -      |
| `[xs]`     | `<768px` 响应式栅格，可为栅格数或一个包含其他属性的对象   | `number, SFGridSizeSchema` | -      |
| `[sm]`     | `≥768px` 响应式栅格，可为栅格数或一个包含其他属性的对象   | `number, SFGridSizeSchema` | -      |
| `[md]`     | `≥992px` 响应式栅格，可为栅格数或一个包含其他属性的对象   | `number, SFGridSizeSchema` | -      |
| `[lg]`     | `≥1200px` 响应式栅格，可为栅格数或一个包含其他属性的对象  | `number, SFGridSizeSchema` | -      |
| `[xl]`     | `≥1600px` 响应式栅格，可为栅格数或一个包含其他属性的对象  | `number, SFGridSizeSchema` | -      |
| `[xxl]`    | 保留字段，`0.7.0` 后支持                                  | `number, SFGridSizeSchema` | -      |

### 水平布局类 Schema

> **务必**二者总和为 `24`

| 参数             | 说明                                            | 类型     | 默认值 |
|------------------|-------------------------------------------------|----------|--------|
| `[spanLabel]`       | `label` 所占栅格数                              | `number` | 5      |
| `[spanControl]`     | 表单控件所占栅格数                              | `number` | 19     |
| `[offsetControl]`   | `control` 栅格左侧的间隔格数，间隔内不可以有栅格 | `number` | -      |
| `[spanLabelFixed]` | `label` 固定宽度                                | `number` | -      |
