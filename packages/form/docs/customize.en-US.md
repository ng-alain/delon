---
order: 4
title: Customize Widgets
type: Documents
---

## Foreword

`@delon/form` try our best to meet the needs of different environments, in addition to the built-in basic component widgets, you can further expand the requirements in two ways:

## Custom widget in sf

Please refer to [Custom Widget](/form/custom).

## Making widgets

Making a set of widgets for project can lead to faster development work.

### How to making widget

**Third-party library**

By default `@delon/form` implements some common third-party library widgets, which are called third-party component widgets. This widget exists in [widgets-third](https://github.com/ng-alain /delon/tree/master/packages/form/widgets-third) directory; you can use directly.

| Name | Description | Document | Source |
| ---- | ----------- | -------- | ------ |
| `markdown` | Markdown Editor | [Document](/form/markdown) | [Source](https://github.com/ng-alain/delon/tree/master/packages/form/widgets-third/markdown) |
| `tinymce` | Tinymce Editor | [Document](/form/tinymce) | [Source](https://github.com/ng-alain/delon/tree/master/packages/form/widgets-third/tinymce) |
| `ueditor` | UEditor Editor | [Document](/form/ueditor) | [Source](https://github.com/ng-alain/delon/tree/master/packages/form/widgets-third/ueditor) |

**Create widgets**

A widget is a component. You only need to inherit `ControlWidget` to create a widget. For example:

```ts
import { Component, OnInit } from '@angular/core';
import { ControlWidget } from '@delon/form';

@Component({
  selector: 'sf-tinymce',
  template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">
    <!-- Start area -->
    <tinymce
      [ngModel]="value"
      (ngModelChange)="change($event)"
      [config]="config"
      [loading]="loading">
    </tinymce>
    <!-- End area -->
  </sf-item-wrap>`
})
export class TinymceWidget extends ControlWidget implements OnInit {
  static readonly KEY = 'tinymce';

  config: any;
  loadingTip: string;

  ngOnInit(): void {
    this.loadingTip = this.ui.loadingTip || 'Loading……';
    this.config = this.ui.config || {};
  }

  reset(value: string) {

  }

  change(value: string) {
    if (this.ui.change) this.ui.change(value);
    this.setValue(value);
  }
}
```

**sf-item-wrap**

Wrap your custom content in the template with the `sf-item-wrap` component, which encapsulates the form base elements internally.

**Change detection**

The widget is manually trigger changed detection during the rendering process. In most cases, the `ControlWidget` is well manage of changing detection. but the asynchronous operation may be encountered, you can call the `detectChanges()` method to trigger a change detection of the widget.

### Register

Define the widget component in the root module (includes: `declarations`, `entryComponents`), import `WidgetRegistry` in the module and register the custom widget.

```ts
@NgModule({
  declarations: [ TinymceWidget ],
  entryComponents: [ TinymceWidget ],
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

Of course, for more friendly maintenance, recommended to define a Json schema module in the Shared directory. Please refer to [ng-alain implementation](https://github.com/ng-alain/ng-alain/blob/master/ Src/app/shared/json-schema/json-schema.module.ts).

### Usage

Just like other widgets, just specify the `widget` value, for example:

```json
"intro": {
  "type": "string",
  "ui": {
    "widget": "tinymce",
    "loadingTip": "loading..."
  }
}
```
