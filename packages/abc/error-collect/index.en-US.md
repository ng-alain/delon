---
type: Form
title: error-collect
subtitle: Error Collect
cols: 2
module: import { ErrorCollectModule } from '@delon/abc/error-collect';
---

A simple form exception messages collector that jump to element location via click icon; it must be a standard `form`.

## API

### error-collect

| Property | Description | Type | Default | Global Config |
|----------|-------------|------|---------|---------------|
| `[freq]` | Monitor frequency, unit is milliseconds | `number` | `500` | ✅ |
| `[offsetTop]` | Top offset, unit is `px` | `number` | `145` | ✅ |