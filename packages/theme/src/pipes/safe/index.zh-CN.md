---
order: 1
title: safe
subtitle: 安全HTML等
type: Pipe
---

## html

简化 `bypassSecurityTrustHtml` 的使用。

```html
<div [innerHTML]="content | html"></div>
```

## url

简化 `bypassSecurityTrustUrl` 的使用。

```html
<a [href]="file_url | url" target="_blank"></a>
```
