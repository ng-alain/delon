---
title: qr-code
subtitle: QRCode
type: Non-built-in widgets
---

Used when the link needs to be converted into a QR Code.

## Import module

Non-built-in modules, Should be import `QrCodeWidgetModule` in [json-schema.module.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11).

## API

### ui

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[color]`           | QR code Color                       | `string`                        | `#000`    |
| `[bgColor]` | QR code background color            | `string`                        | `#FFFFFF` |
| `[qrSize]`            | QR code Size                        | `number`                        | `160`     |
| `[padding]`         | QR code Padding                     | `number \| number[]`            | `0`       |
| `[icon]`            | Icon address in QR code             | `string`                        | -         |
| `[iconSize]`        | The size of the icon in the QR code | `number`                        | `40`      |
| `[bordered]`        | Whether has border style            | `boolean`                       | `true`    |
| `[status]`          | QR code status                      | `'active'｜'expired' ｜'loading'` | `active`  |
| `[level]`           | Error Code Level                    | `'L'｜'M'｜'Q'｜'H'`               | `M`       |
| `(refresh)`         | callback                            | `EventEmitter<string>`          | -         |
