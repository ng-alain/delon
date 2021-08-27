---
title: custom
subtitle: Custom
type: Widgets
---

Custom the current dynamic form widget. For more complexity, please refer to [customize](/form/customize) widget.

## Usage

Make sure to specify **sf-template** a valid path value, for example:

```html
<sf>
  <ng-template sf-template="formFieldName" let-i let-ui="ui" let-schema="schema">
  </ng-tempalte>
</sf>
```

## API

| Name          | Description                       | Type             |
| ------------- | --------------------------------- | ---------------- |
| `[$implicit]` | Current widget component instance | `ControlWidget`  |
| `[schema]`    | Schema data of the widget         | `SFSchema`       |
| `[ui]`        | UI data of the widget             | `SFUISchemaItem` |

The widget component instance include `formProperty` property, whose `value` attribute is the only way to communicate with the widget.

The widget component instance contains some shortcut properties and methods, please read for more details [ControlWidget](https://github.com/ng-alain/delon/blob/master/packages/form/src/widget.ts).
