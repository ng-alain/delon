---
type: G2
title: trend
subtitle: Trend
cols: 1
module: import { TrendModule } from '@delon/chart/trend';
---

Trend symbols mark rising and falling trends. Green usually means "good" and red means "bad", except in stock market scenarios.

## API

### trend

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[colorful]` | Whether to use colorful marks | `boolean` | `true` |
| `[flag]` | Rising or falling flag | `'up','down'` | - |
| `[reverseColor]` | Whether to reverse the color | `boolean` | `false` |
