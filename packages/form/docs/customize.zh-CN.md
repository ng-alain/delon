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

小部件就是一个组件，你只需要继承 `ControlWidget` 就相当于构建一个小部件，其结构如下：

```ts
import { Component, OnInit } from '@angular/core';
import { ControlWidget } from '@delon/form';

@Component({
  selector: 'sf-tinymce',
  template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">
    <!-- 开始自定义控件区域 -->
    <tinymce
      [ngModel]="value"
      (ngModelChange)="change($event)"
      [config]="config"
      [loading]="loading">
    </tinymce>
    <!-- 结束自定义控件区域 -->
  </sf-item-wrap>`
})
export class TinymceWidget extends ControlWidget implements OnInit {
  /* 用于注册小部件 KEY 值 */
  static readonly KEY = 'tinymce';

  // 组件所需要的参数，建议使用 `ngOnInit` 获取
  config: any;
  loadingTip: string;

  ngOnInit(): void {
    this.loadingTip = this.ui.loadingTip || '加载中……';
    this.config = this.ui.config || {};
  }

  // reset 可以更好的解决表单重置过程中所需要的新数据问题
  reset(value: string) {

  }

  change(value: string) {
    if (this.ui.change) this.ui.change(value);
    this.setValue(value);
  }
}
```

**sf-item-wrap**

在模板中唯一是利用 `sf-item-wrap` 包裹自定义内容，它内部封装表单基础元素。

**变更检测**

小部件在渲染过程是手动变更检测，大部分情况下 `ControlWidget` 已经很好的管理什么时机应该执行变更检测，在自定义小部件过程中可能会遇到异步操作导致界面并未渲染，此时可以调用 `detectChanges()` 方法来触发一次小部件节点的变更检测。

### 注册小部件

在根模块中定义（`declarations`）注册小部件组件，同时在模块中导入 `WidgetRegistry` 并注册自定义小部件。

```ts
@NgModule({
  declarations: [ TinymceWidget ],
  imports: [
    DelonFormModule.forRoot()
  ]
})
export class AppModule {
  constructor(widgetRegistry: WidgetRegistry) {
    widgetRegistry.register(TinymceWidget.KEY, TinymceWidget);
  }
}
```

当然为了更友好的维护，建议在Shared目录下定义一个专属 Json schema 模块，有兴趣可参考 [ng-alain实现](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts)。

### 使用自定义小部件

同其他小部件一样，只需要指定 `widget` 值，例如：

```json
"intro": {
  "type": "string",
  "ui": {
    "widget": "tinymce",
    "loadingTip": "loading..."
  }
}
```
