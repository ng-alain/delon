---
type: Basic
order: 2
title: loading
subtitle: Loading indicator
cols: 2
module: LoadingModule
config: LoadingConfig
---

Global load indicator is generally used when an operation needs to interrupt the user operation.

## API

### LoadingService

Name | Description
--- | -----
`open(options?: LoadingShowOptions)`  | Open
`close()` | Close

### LoadingShowOptions

Property | Description | Type | Default
----|------|-----|------
`type` | Show type of loading | `LoadingType` | `spin`
`text` | 描述文案 | `string` | `加载中...`
`icon` | Configuration item of type `icon` | `LoadingIcon` | -
`custom` | Configuration item of type `custom` | `LoadingCustom` | -
`delay` | Specifies a delay in milliseconds for loading state (prevent flush), unit: milliseconds | `number` | -
