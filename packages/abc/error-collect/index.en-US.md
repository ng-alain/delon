---
type: Form
title: error-collect
subtitle: Error Collect
cols: 2
module: ErrorCollectModule
config: ErrorCollectConfig
---

A simple form exception messages collector that jump to element location via click icon; it must be a standard `form`.

## API

### error-collect

Property      | Description                             | Type     | Default
--------------|-----------------------------------------|----------|--------
`[freq]`      | Monitor frequency, unit is milliseconds | `number` | `500`
`[offsetTop]` | Top offset, unit is `px`                | `number` | `145`