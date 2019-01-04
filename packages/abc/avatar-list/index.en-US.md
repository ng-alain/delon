---
type: Basic
title: avatar-list
subtitle: AvatarList
cols: 1
module: AvatarListModule
---

A list of user's avatar for project or group member list frequently. If a large or small avatar-list is desired, set the `size` property to either `large` or `small` and `mini` respectively. Omit the `size` property for a avatar-list with the default size.

## API

### avatar-list

| Property             | Description           | Type                               | Default     |
|----------------------|-----------------------|------------------------------------|-------------|
| `[size]`             | size of list          | `'large','small','mini','default'` | `'default'` |
| `[maxLength]`        | max items to show     | `number`                           | -           |
| `[excessItemsStyle]` | the excess item style | `{ [key: string]: string }`        | -           |

### avatar-list-item

| Property | Description                                  | Type     | Default |
| -------- | -------------------------------------------- | -------- | ------- |
| `[tips]` | title tips for avatar item                   | `string` | -       |
| `[src]`  | the address of the image for an image avatar | `string` | -       |
| `[text]` | text for avatar item                         | `string` | -       |
| `[icon]` | icon for avatar item                         | `string` | -       |
