---
type: Basic
order: 3
title: qr
subtitle: QR
cols: 1
module: import { QRModule } from '@delon/abc/qr';
---

Generate a QR code based on [qrious](https://neocotic.com/qrious).

## Notice

The default `QRModule` don't mandatory dependence `qrious`, so you need to additionally reference it in the `scripts` of `angular.json`, like this:

```bash
npm i --save qrious
```

```ts
"scripts": [
  "node_modules/qrious/dist/qrious.min.js"
]
```

## API

### qr

| Property | Description | Type | Default | Global Config |
|----------|-------------|------|---------|---------------|
| `[value]` | Value encoded within the QR code | `string` | - |  |
| `[background]` | Background colour of the QR code | `string` | `white` | ✅ |
| `[backgroundAlpha]` | Background alpha of the QR code | `number` | `1` | ✅ |
| `[foreground]` | Foreground colour of the QR code | `string` | `white` | ✅ |
| `[foregroundAlpha]` | Foreground alpha of the QR code | `number` | `1` | ✅ |
| `[level]` | Error correction level of the QR code | `'L','M','Q','H'` | `'L'` | ✅ |
| `[mime]` | MIME type used to render the image for the QR code | `string` | `image/png` | ✅ |
| `[padding]` | Padding for the QR code (pixels) | `number` | `10` | ✅ |
| `[size]` | Size of the QR code (pixels) | `number` | `220` | ✅ |
| `(change)` | change event | `EventEmitter<string>` | - |  |

## FAQ

### Custom LOGO

Refer to [#100](https://github.com/neocotic/qrious/issues/100#issuecomment-308249343).
