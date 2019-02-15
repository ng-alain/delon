---
title: object
subtitle: Object
type: Widgets
---

Create an object widget, valid only for `schema.type="object"`.

## API


### schema

Property     | Description                  | Type      | Default
-------------|------------------------------|-----------|--------
`[properties]`    | Defining the properties of an object schema | `{ [key: string]: SFSchema }` | -
`[required]`      | The data object to be valid should contain all properties with names equal to the elements in the keyword value | `string[]`                    | -
`[maxProperties]` | The data object to be valid should have not more (less) properties than the keyword value | `number`                      | -
`[minProperties]` | The data object to be valid should have not more (less) properties than the keyword value | `number`                      | -

### ui

Property     | Description                  | Type      | Default
-------------|------------------------------|-----------|--------
`[showTitle]`   | Whether to display the title | `boolean` | `false`
