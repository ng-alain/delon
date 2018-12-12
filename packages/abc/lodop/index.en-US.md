---
type: Basic
order: 4
title: lodop
subtitle: Lodop Print
cols: 1
module: LodopModule
config: LodopConfig
---

The basic implementation of [Lodop](http://c-lodop.com/) printing, commercial needs to buy lodop license. (Also thanks lodop for free ng-alain for genuine KEY)

> Prerequisites for running the example must be installed [Lodop](http://c-lodop.com/download.html).

## API

### LodopService

Property | Description            | Type                           | Default
---------|------------------------|--------------------------------|--------
`cog`    | Get or set config      | `LodopConfig`                  | -
`events` | process notification   | `Observable<LodopPrintResult>` | -
`lodop`  | Get the Lodop instance | `Observable<LodopResult>`      | -

**Auxiliary API after Lodop is successfully loaded**

Property       | Description                                                 | Type              | Default
---------------|-------------------------------------------------------------|-------------------|--------
`printer`      | Get a list of printers                                      | `string[]`        | -
`attachCode()` | Attach code to the `lodop` object                           | `void`            | -
`design()`     | Run the print design manually after closing the return code | `Promise<string>` | -
`print()`      | Print now, generally used for batch printing                | `void`            | -

### LodopPrintResult

Property | Description                      | Type      | Default
---------|----------------------------------|-----------|--------
`ok`     | Whether print is successful      | `boolean` | -
`error`  | Error message                    | `string`  | -
`code`   | Code of lodop                    | `string`  | -
`item`   | Dynamic parameter context object | `any`     | -
`parser` | Code parsing expression          | `RegExp`  | -

### LodopResult

Property | Description                 | Type      | Default
---------|-----------------------------|-----------|--------
`ok`     | Whether print is successful | `boolean` | -
`status` | Status of result            | `string`  | -
`lodop`  | Lodop instance              | `Lodop`   | -
`error`  | Error message               | `any`     | -

### LodopConfig

Property | Description | Type | Default
----|------|-----|------
`companyName` | Company name | `string` | ``
`license` | License | `string` | -
`licenseA` | LicenseA | `string` | -
`licenseB` | LicenseB | `string` | -
`url` | Lodop remote script URL address | `string` | `//localhost:8443/Lodopfuncs.js`
`name` | Lodop variable name | `string` | `LODOP`
`checkMaxCount` | Exceeded the number of inspections as a failure, Because of Lodop needs to connect to WebSocket | `number` | `100`
