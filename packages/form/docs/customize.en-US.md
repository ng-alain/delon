---
order: 4
title: Customize Widgets
type: Documents
---

## Foreword

`@delon/form` try our best to meet the needs of different environments, in addition to the built-in basic widgets (Some require manual registration), you can further expand the requirements in two ways:

## Custom widget in sf

Please refer to [Custom Widget](/form/custom).

## Making widgets

Making a set of widgets for project can lead to faster development work.

### How to making widget

**Create widgets**

A widget is a component. You only need to inherit `ControlWidget` to create a widget. For example:

```ts
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ControlWidget, DelonFormModule, SFWidgetProvideConfig } from '@delon/form';

export function withTestWidget(): SFWidgetProvideConfig {
  return { KEY: 'test', type: TestWidget };
}

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
  </sf-item-wrap>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DelonFormModule]
})
class TestWidget extends ControlWidget implements OnInit {
  /* KEY value for registering widgets */
  static readonly KEY = 'test';

  // It is recommended to use `ngOnInit` to obtain the parameters required by the component.
  config: any;
  loadingTip: string;

  ngOnInit(): void {
    this.loadingTip = this.ui.loadingTip ?? 'Loading……';
    this.config = this.ui.config ?? {};
  }

  // reset can better solve the problem of new data required during the form reset process
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

Recommended to define a widget called `withXWidth` and return `SFWidgetProvideConfig` type, for example:

```ts
export function withTestWidget(): SFWidgetProvideConfig {
  return { KEY: 'test', type: TestWidget };
}
```

Finally, register via `provideSFConfig`:

```ts
provideSFConfig({ widgets: [ withTestWidget() ] })
```

For more friendly maintenance, recommended to define a project-specific collection in the `shared` directory. If you are interested, please refer to [NG-ALAIN implementation](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/) or refer to [@delon/form/widgets/autocomplete](https://github.com/ng-alain/delon/tree/master/packages/form/widgets/autocomplete).

### Usage

Just like other widgets, just specify the `widget` value, for example:

```json
"test": {
  "type": "string",
  "ui": {
    "widget": "test",
    "data": "widget parameters"
  }
}
```
