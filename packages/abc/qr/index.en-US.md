---
type: Basic
order: 3
title: qr
subtitle: QR
cols: 1
module: import { QRModule } from '@delon/abc/qr';
---

Generate a QR code based on [qrious](https://github.com/neocotic/qrious).


Qr libary is lazy loading by default，you can change the default CDN path via [Global Configuration](/docs/global-config). By default: `https://cdn.jsdelivr.net/npm/qrious/dist/qrious.min.js`. Or install dependence via `npm i --save qrious`, and import script path in `angular.json`.

**Use local path**

```json
// angular.json
{
  "glob": "**/qrious.min.js",
  "input": "./node_modules/qrious/dist",
  "output": "assets/qrious/"
}
```

```ts
// global-config.module.ts
const alainConfig: AlainConfig = {
  qr: {
    lib: '/assets/qrious/qrious.min.js'
  }
};
```

## API

### qr

| Property | Description | Type | Default | Global Config |
|----------|-------------|------|---------|---------------|
| `[value]` | Value encoded within the QR code | `string | () => string` | - |  |
| `[background]` | Background colour of the QR code | `string` | `white` | ✅ |
| `[backgroundAlpha]` | Background alpha of the QR code | `number` | `1` | ✅ |
| `[foreground]` | Foreground colour of the QR code | `string` | `white` | ✅ |
| `[foregroundAlpha]` | Foreground alpha of the QR code | `number` | `1` | ✅ |
| `[level]` | Error correction level of the QR code | `'L','M','Q','H'` | `'L'` | ✅ |
| `[mime]` | MIME type used to render the image for the QR code | `string` | `image/png` | ✅ |
| `[padding]` | Padding for the QR code (pixels) | `number` | `10` | ✅ |
| `[size]` | Size of the QR code (pixels) | `number` | `220` | ✅ |
| `[delay]` | Delayed rendering, unit: ms | `number` | `0` | ✅ |
| `(change)` | change event | `EventEmitter<string>` | - |  |

## FAQ

### Custom LOGO

Refer to [#100](https://github.com/neocotic/qrious/issues/100#issuecomment-308249343).
