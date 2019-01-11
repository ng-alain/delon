---
type: Layout
title: ellipsis
subtitle: Ellipsis
cols: 1
module: EllipsisModule
---

When the text is too long, the Ellipsis automatically shortens it according to its length or the maximum number of lines.

## API

Property | Description | Type | Default
----|------|-----|------
`[tooltip]` | tooltip for showing the full text content when hovering over | `boolean` | `false`
`[length]` | maximum number of characters in the text before being truncated | `number` | -
`[lines]` | maximum number of rows in the text before being truncated | `number` | -
`[fullWidthRecognition]` | whether consider full-width character length as 2 when calculate string length | `boolean` | `false`
`[tail]` | specify overflow tail | `string` | `'...'`
