---
type: CURD
title: edit
subtitle: Edit
cols: 1
order: 3
module: NaEditModule
config: NaEditConfig
---

A higher-order components of the form HTML template. And optimized some details:

- More friendly form validation status
- Automated responsive layout
- Automatic maintenance `id`

The form HTML template consists of `na-edit-wrap` container (directive) and `na-edit-item` component, like this:

```html
<form nz-form #f="ngForm" na-edit-wrap>
  <na-edit label="App Key">
    <input type="text" nz-input [(ngModel)]="i.ak" name="ak" required>
  </na-edit>
  <na-edit label="App Secret">
    <input type="text" nz-input [(ngModel)]="i.sk" name="sk" required maxlength="32">
  </na-edit>
  <na-edit>
    <button nz-button nzType="primary" [disabled]="f.invalid">Save</button>
  </na-edit>
</form>
```

Also, automatically processed all Angular built-in validation, such as `required`, `maxlength`, `min`, `pattern`, etc., with a red border to indicate invalid value status.

## API

### na-edit-wrap

Property | Description | Type | Default
----|------|-----|------
`[gutter]` | specify the distance between two items, unit is `px`, only `nzLayout:horizontal` | `number` | `32`
`[na-edit-wrap]` | specify the maximum number of columns to display, the final columns number is determined by col setting combined with [Responsive Rules](#Responsive Rules) | `number(0 < col <= 6)` | -
`[labelWidth]` | label text of width, unit is `px` | `number` | `150`
`[nzLayout]` | type of layout when `inline` forced size is `compact` | `horizontal,vertical,inline` | `horizontal`
`[size]` | size of edit, forced ingores `error`, `extra` | `default | compact` | `default`
`[firstVisual]` | Immediately show validation error message | `boolean` | `false`
`[line]` | whether separation line style | `boolean` | `false`

### na-edit

Property | Description | Type | Default
----|------|-----
`[col]` | specify the maximum number of columns to display, the final columns number is determined by col setting combined with [Responsive Rules](#Responsive Rules) | `number(0 < col <= 6)` | -
`[label]` | Label | `string | TemplateRef<any>` | -
`[optional]` | Label optional information | `string` | -
`[optionalHelp]` | Label optional help | `string` | -
`[error]` | validation error message | `string` | -
`[extra]` | The extra prompt message. It is similar to help. | `string` | -
`[required]` | whether required identifier | `string` | -
`[line]` | whether separation line style | `boolean` | -
`[controlClass]` | Control area classes | `string` | -
`[id]` | Custom `id` value of component | `string` | -

### na-edit-title

Display title.

## QA

### When customize the component id?

Matching for and `id` values associate the label with the appropriate form control. Because `id` must be unique, and `ng-alain` automatic maintenance `id`. In most cases, you don't need to care about the binding state of `id`. When you manually specify the `id` value, the priority is higher, but you also need to maintain the corresponding `id` value of the component.

### Responsive Rules

If `col: 6` the number of columns is displayed as follows:

| Window Width  | Columns Number |
| --------- | -------- |
| `≥1600px` | `12`     |
| `≥1200px` | `6`      |
| `≥992px`  | `4`      |
| `≥768px`  | `3`      |
| `≥576px`  | `2`      |
| `<576px`  | `1`      |
