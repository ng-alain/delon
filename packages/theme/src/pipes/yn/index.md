---
order: 1
title:
  en-US: yn-Badge
  zh-CN: yn-徽章
type: Pipe
---

`yn` 将boolean类型徽章化

```html
<td [innerHTML]="enabled | yn"></td>
Output:
<td><span class="badge badge-success">是</span></td>
```
