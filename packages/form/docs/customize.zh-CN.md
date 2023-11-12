---
order: 4
title: 自定义小部件
type: Documents
---

## 写在前面

`@delon/form` 尽可能满足不同需求，除现有内置的十几种基础小部件(部分需要手动注册)外，可以通过以下两种方式进一步扩展需求：

## 自定义小部件

细节请参考 [自定义小部件](/form/custom)。

## 制作小部件

制作一套项目需求的小部件，可以更快速的开发工作。

### 编写小部件

**自己创建小部件**

小部件就是一个组件，你只需要继承 `ControlWidget` 就相当于构建一个小部件，例如：

```ts
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ControlWidget, DelonFormModule, SFWidgetProvideConfig } from '@delon/form';

export function withTestWidget(): SFWidgetProvideConfig {
  return { KEY: 'test', type: TestWidget };
}

@Component({
  selector: 'test',
  template: `
    <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">
      test widget, {{ data }}
    </sf-item-wrap>
  `,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [DelonFormModule]
})
class TestWidget extends ControlWidget implements OnInit {
  data?: string;
  ngOnInit(): void {
    console.warn('init test widget');
  }
}
```

**sf-item-wrap**

在模板中唯一是利用 `sf-item-wrap` 包裹自定义内容，它内部封装表单基础元素。

**变更检测**

小部件在渲染过程是手动变更检测，大部分情况下 `ControlWidget` 已经很好的管理什么时机应该执行变更检测，在自定义小部件过程中可能会遇到异步操作导致界面并未渲染，此时可以调用 `detectChanges()` 方法来触发一次小部件节点的变更检测。

### 注册小部件

建议在小部件内定义一个名为 `withXWidth` 并返回 `SFWidgetProvideConfig`，例如：

```ts
export function withTestWidget(): SFWidgetProvideConfig {
  return { KEY: 'test', type: TestWidget };
}
```

最后，通过 `provideSFConfig` 来注册：

```ts
provideSFConfig({ widgets: [ withTestWidget() ] })
```

当然为了更友好的维护，建议在Shared目录下定义项目专属的集合，有兴趣可参考 [ng-alain实现](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/)或参考[@delon/form/widgets/autocomplete](https://github.com/ng-alain/delon/tree/master/packages/form/widgets/autocomplete)。

### 使用自定义小部件

同其他小部件一样，只需要指定 `widget` 值，例如：

```json
"test": {
  "type": "string",
  "ui": {
    "widget": "test",
    "data": "widget parameters"
  }
}
```
