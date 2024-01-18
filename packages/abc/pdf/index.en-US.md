---
type: Basic
order: 3
title: pdf
subtitle: Pdf
cols: 1
module: import { PdfModule } from '@delon/abc/pdf';
---

Pdf view based on [pdf.js](https://mozilla.github.io/pdf.js/).

pdf.js libary is lazy loading by default，you can change the default root CDN path via [Global Configuration](/docs/global-config).

> The component inspired by [ng2-pdf-viewer](https://github.com/VadimDez/ng2-pdf-viewer).

**Use local path**

```bash
npm i -S pdfjs-dist
```

```json
// angular.json
{
  "glob": "{build,web}/**",
  "input": "./node_modules/pdfjs-dist/",
  "ignore": ["*.js.map", "*.d.ts"],
  "output": "assets/pdfjs/"
}
```

```ts
// global-config.module.ts
const alainConfig: AlainConfig = {
  pdf: {
    lib: '/assets/pdfjs/'
  }
};
```

## API

### pdf:standalone

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

### Component properties

Used API interfaces.

| Name | Description |
| --- | ---- |
| `pdf` | Current PDF instance |
| `eventBus` | Event bus for PDF files, eg: find document, etc. |
| `findController` | Find controller, now instead by `eventBus` |
| `pageViewer` | View Controls |
| `linkService` | Navigation Service |

## FAQ

### Why need to specify the height of the pdf component

When `showAll` is enabled, if you want to make the page number control effective, you need to ensure that the height of the component is a valid value.
