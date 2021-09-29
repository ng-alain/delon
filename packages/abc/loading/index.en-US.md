---
type: Basic
order: 2
title: loading
subtitle: Loading indicator
cols: 2
module: import { LoadingModule } from '@delon/abc/loading';
---

Global load indicator is generally used when an operation needs to interrupt the user operation.

## API

### LoadingService

| Name | Description |
|------|-------------|
| `open(options?: LoadingShowOptions)` | Open a new loading indicator |
| `close()` | Turn off a loading indicator |

### LoadingShowOptions

| Property | Description | Type | Default | Global Config |
|----------|-------------|------|---------|---------------|
| `type` | Show type of loading | `LoadingType` | `spin` | ✅ |
| `text` | Text of loading | `string` | `加载中...` | ✅ |
| `icon` | Configuration item of type `icon` | `LoadingIcon` | - | ✅ |
| `custom` | Configuration item of type `custom` | `LoadingCustom` | - | ✅ |
| `delay` | Specifies a delay in milliseconds for loading state (prevent flush), unit: milliseconds | `number` | - | ✅ |
