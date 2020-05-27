---
order: 5
title: Layout
type: Documents
---

@delon/form layout is based on Ant Design [Grid](https://ng.ant.design/components/grid/en) system, and layout parameters are determined by SFSchema [Reder Type](/form/schema/en#Render-Type).

There are three types of form layout: inline, vertical and horizontal(default), it is determined by [layout](/form/getting-started/en#API).

## Type

### Inline

Form elements are arranged inline horizontally, usually, it is used for simple search box.

The width of form element is determined by the width of component itself, you can adjust width by setting `width` parameter, for example, width of widget `select` would be very small if no `width` has been set.

> You can also set [mode](/form/getting-started/en#What-is-mode) to `search`, which is a fast way to set widget to search mode.

### Vertical

Label and form elements are arranged vertically.

### Horizontal

Label and form elements are arranged horizontally, usually, it is used on edit page.

Horizontal is more complicated than vertical, because responsive would be involved, the number of grid of each form element is determined by [grid](/form/schema/en#Responsive-Property-SFGridSchema).

> You can also set [mode](/form/getting-started/en#What-is-mode) to `edit`, which is a fast way to set widget to edit mode.

**Non-responsive**

You only need to maintain `span` attribute when it is non-responsive.

**Responsive**

Responsive is based on `xs`、`sm`、`md`、`lg`、`xl`、`xxl` to determine how many grids for different size of screens, notes:

- There are `24` grids each row
- Set value to `12` if there are two form elements on the same row
- `{ sm: 24, md: 12 }` will put two form elements on the same row when screen size is `≥992px`, and each form element on one row when screen size is `<992px`

## Irregular Layout

Of course, it is impossible to always have fixed number of form elements, it is possible that one form element occupies a whole row, because of grid system, it will cause another issue: **labels cannot be aligned**, sf provides a solution, fix the width of all labels by `spanLabelFixed` attribute, for example:

```json
{
  "properties": {
    "email": {
      "type": "string",
      "title": "Email",
      "format": "email"
    },
    "name": {
      "type": "string",
      "title": "Name",
      "minLength": 5
    },
    "remark": {
      "type": "string",
      "title": "Description",
      "ui": {
        "widget": "textarea",
        "autosize": true,
        "grid": {
            "span": 24
        }
      }
    }
  },
  "ui": {
    "spanLabelFixed": 100,
    "grid": {
      "span": 12
    }
  }
}
```

## Button

Button rendering has same layout and parameters with form element, you can adjust rendering style by setting [SFButton](/form/getting-started/en#SFButton) attributes.

**Notes**

- It means adding button manually but reserve container when the value is `null` or `undefined`
- It means adding button manually but do not reserve container when the value is `none`
- When using `spanLabelFixed` to set fixed width of label, the position is centered by default if no `render.class` is set

**Customization**

You must set value of `button` to `null` when you want to customize buttons.

```html
<sf #sf [button]="null">
  <button type="submit" nz-button [disabled]="!sf.valid">Save</button>
  <button (click)="sf.reset()" type="button" nz-button>Reset</button>
</sf>
```
