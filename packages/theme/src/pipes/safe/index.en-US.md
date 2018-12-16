---
order: 1
title: safe
subtitle: XSS
type: Pipe
---

## html

Simplify the use of `bypassSecurityTrustHtml`.

```html
<div [innerHTML]="content | html"></div>
```

## url

Simplify the use of `bypassSecurityTrustUrl`.

```html
<a [href]="file_url | url" target="_blank"></a>
```
