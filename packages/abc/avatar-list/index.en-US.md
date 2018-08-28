---
type: Other
title: avatar-list
subtitle: AvatarList
cols: 1
module: NaAvatarListModule
---

A list of user's avatar for project or group member list frequently. If a large or small AvatarList is desired, set the size property to either large or small and mini respectively. Omit the size property for a AvatarList with the default size.

## API

### na-avatar-list

| Property | Description  | Type                                | Default   |
| -------- | ------------ | ----------------------------------- | --------- |
| `[size]` | size of list | `large`、`small`、`mini`、`default` | `default` |

### na-avatar-list-item

| Property | Description                                  | Type     | Default |
| -------- | -------------------------------------------- | -------- | ------- |
| `[tips]` | title tips for avatar item                   | `string` | -       |
| `[src]`  | the address of the image for an image avatar | `string` | -       |
| `[text]` | text for avatar item                         | `string` | -       |
| `[icon]` | icon for avatar item                         | `string` | -       |
