---
type: CURD
title: se
subtitle: Edit
cols: 1
order: 3
module: SEModule
config: SEConfig
---

A higher-order components of the form HTML template. And optimized some details:

- More friendly form validation status
- Automated responsive layout
- Automatic maintenance `id`

The form HTML template consists of `se-container` container (directive) and `se` component, like this:

```html
<form nz-form #f="ngForm" se-container="2">
  <se label="App Key">
    <input type="text" nz-input [(ngModel)]="i.ak" name="ak" required>
  </se>
  <se label="App Secret">
    <input type="text" nz-input [(ngModel)]="i.sk" name="sk" required maxlength="32">
  </se>
  <se>
    <button nz-button nzType="primary" [disabled]="f.invalid">Save</button>
  </se>
</form>
```

Also, automatically processed all Angular built-in validation, such as `required`, `maxlength`, `min`, `pattern`, etc., with a red border to indicate invalid value status.

## API

### se-container

Property | Description | Type | Default
----|------|-----|------
`[gutter]` | specify the distance between two items, unit is `px`, only `nzLayout:horizontal` | `number` | `32`
`[se-container]` | specify the maximum number of columns to display, the final columns number is determined by col setting combined with [Responsive Rules](/theme/responsive) | `'1','2','3','4','5','6'` | -
`[col]` | specify the maximum number of columns to display, the final columns number is determined by col setting combined with [Responsive Rules](/theme/responsive) | `'1','2','3','4','5','6'` | -
`[labelWidth]` | label text of width, unit is `px` | `number` | `150`
`[nzLayout]` | type of layout when `inline` forced size is `compact` | `'horizontal','vertical','inline'` | `'horizontal'`
`[size]` | size of edit, forced ingores `error`, `extra` | `'default','compact'` | `'default'`
`[firstVisual]` | Immediately show validation error message | `boolean` | `false`
`[line]` | whether separation line style | `boolean` | `false`
`[title]` | Display title | `string,TemplateRef<void>` | -

### se

Property | Description | Type | Default
----|------|-----|------
`[col]` | specify the maximum number of columns to display, the final columns number is determined by col setting combined with [Responsive Rules](/theme/responsive) (Inherited from `se-container`) | `'1','2','3','4','5','6'` | -
`[label]` | Label | `string,TemplateRef<void>` | -
`[labelWidth]` | label text of width, unit is `px` (Inherited from `se-container`) | `number` | -
`[optional]` | Label optional information | `string` | -
`[optionalHelp]` | Label optional help | `string` | -
`[error]` | validation error message | `string` | -
`[extra]` | The extra prompt message. It is similar to help. | `string` | -
`[required]` | whether required identifier | `string` | -
`[controlClass]` | Control area classes | `string` | -
`[id]` | Custom `id` value of component | `string` | -
`[line]` | whether separation line style (Inherited from `se-container`) | `boolean` | -

### se-title

Display title.

## QA

### When customize the component id?

Matching for and `id` values associate the label with the appropriate form control. Because `id` must be unique, and `ng-alain` automatic maintenance `id`. In most cases, you don't need to care about the binding state of `id`. When you manually specify the `id` value, the priority is higher, but you also need to maintain the corresponding `id` value of the component.
