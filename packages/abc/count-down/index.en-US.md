---
type: Basic
title: count-down
subtitle: Count down
cols: 3
module: import { CountDownModule } from '@delon/abc/count-down';
---

The countdown component depends on [ngx-countdown](https://github.com/cipchk/ngx-countdown).

## Dependencies

```
yarn add ngx-countdown
```

## API

### count-down

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[target]` | Target time, `number` means seconds | `number | Date` | - |
| `[config]` | [Config](https://github.com/cipchk/ngx-countdown#countdownconfig) paraments | `CountdownConfig` | - |
| `(event)` | Event notification | `EventEmitter<CountdownEvent>` | - |
