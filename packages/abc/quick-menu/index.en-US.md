---
type: Business
title: quick-menu
subtitle: Quick Menu
cols: 1
module: import { QuickMenuModule } from '@delon/abc/quick-menu';
---

Quick menu for the implicit auxiliary list on the right.

## API

### quick-menu

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[icon]` | Icon for the quick menu | `string,TemplateRef<void>` | `question-circle` |
| `[top]` | Icon from top | `number` | `120` |
| `[width]` | Width after opening | `number` | `200` |
| `[bgColor]` | Background for the quick menu | `string` | - |
| `[borderColor]` | Border for the quick menu | `string` | - |
| `[expand]` | Current expand status, double binding | `boolean` | - |
| `(expandChange)` | Expand status change callback | `EventEmitter<boolean>` | - |
