---
type: Business
title: notice-icon
subtitle: Notification menu
cols: 1
module: import { NoticeIconModule } from '@delon/abc/notice-icon';
---

Used on the navigation toolbar as a unified notification center for the entire product.

## API

### notice-icon

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[data]` | Data | `NoticeItem[]` | - |
| `[count]` | Total number of messages on the icon | `number` | - |
| `[loading]` | Pop up card loading status | `boolean` | `false` |
| `(select)` | Click the callback of the list item | `EventEmitter<NoticeIconSelect>` | - |
| `(clear)` | Callback for clicking the clear button | `EventEmitter<string>` | - |
| `[popoverVisible]` | Manual control of Popover display | `boolean` | `false` |
| `(popoverVisibleChange)` | Popover callback | `EventEmitter<boolean>` | - |
| `[btnClass]` | Class of the button | `ngClass` | - |
| `[btnIconClass]` | Class of the icon in button | `ngClass` | - |

### NoticeItem

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[title]` | Title of the item | `string` | - |
| `[list]` | List data of the item | `NoticeIconList[]` | - |
| `[emptyText]` | Customize empty data copy for each tab | `string` | `无通知` |
| `[emptyImage]` | Customize the empty data image for each Tab | `string` | - |
| `[clearText]` | Clear button text for each Tab | `string` | `清空` |

### NoticeIconList

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[avatar]` | Avatar image link of the icon | `string` | - |
| `[title]` | Title of the icon | `string` | - |
| `[description]` | Description of the icon | `string` | - |
| `[datetime]` | Timestamp of the icon | `string` | - |
| `[extra]` | Additional information, in the upper right corner of the icon | `string` | - |
| `[read]` | Whether readed status of the item | `boolean` | - |

### NoticeIconSelect

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[title]` | Title of the select item | `string` | - |
| `[item]` | Data of the select item | `NoticeItem` | - |
