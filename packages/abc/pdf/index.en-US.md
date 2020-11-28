---
type: Basic
order: 3
title: pdf
subtitle: Pdf
cols: 1
module: import { PdfModule } from '@delon/abc/pdf';
---

Pdf view based on [pdf.js](https://neocotic.com/qrious).

pdf.js libary is lazy loading by default，you can change the default root CDN path (or use the local path) via [Global Configuration](/docs/global-config).

> The component inspired by [ng2-pdf-viewer](https://github.com/VadimDez/ng2-pdf-viewer).

## API

### qr

| Property | Description | Type | Default | Global Config |
|----------|-------------|------|---------|---------------|
| `[src]` | Specify path of the pdf | `string, object, UInt8Array` | - | - |
| `[pi]` | Current page | `number` | `1` | - |
| `[showAll]` | Whether to show all pages | `boolean` | `true` | ✅ |
| `[renderText]` | Enable text rendering, allows to select text | `boolean` | `true` | ✅ |
| `[textLayerMode]` | Text rendering mode | `PdfTextLayerMode` | `ENABLE` | - |
| `[showBorders]` | Show page borders | `boolean` | `false` | ✅ |
| `[stickToPage]` | Sticks view to the page | `boolean` | `false` | - |
| `[originalSize]` | Control document display size, `true` size will be as same as original document, `false` size will be as same as container block | `boolean` | `true` | ✅ |
| `[fitToPage]` | Works in combination with `originalSize`. You can show your document in original size, and make sure that it's not bigger then container block. | `boolean` | `false` | ✅ |
| `[zoom]` | Zoom pdf | `number` | `1` | - |
| `[zoomScale]` | Defines how the Zoom scale is computed | `PdfZoomScale` | `page-width` | - |
| `[rotation]` | Rotate PDF, Allowed step is 90 degree, ex. 0, 90, 180 | `number` | `0` | - |
| `[autoReSize]` | Turn on or off auto resize | `boolean` | `true` | ✅ |
| `[externalLinkTarget]` | Link target of the external | `PdfExternalLinkTarget` | `BLANK` | - |
| `[delay]` | Delayed rendering, unit: ms | `number` | `0` | - |
| `(change)` | change event | `EventEmitter<PdfChangeEvent>` | - | - |

## FAQ

### Why need to specify the height of the pdf component

When `showAll` is enabled, if you want to make the page number control effective, you need to ensure that the height of the component is a valid value.