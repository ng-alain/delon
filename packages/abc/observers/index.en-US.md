---
type: Basic
title: Observers
order: 7
module: import { ObserversModule } from '@delon/abc/observers';
---

The `ObserversModule` package provides convenience directives built on top of native web platform observers, such as `MutationObserver`.

## API

### [observeSize]:standalone

Watch the DOM size change.

| Property | Description | Type | Default | Global Config |
|----------|-------------|------|---------|---------------|
| `(observeSize)` | Event | `MutationRecord[]` | - |  |
