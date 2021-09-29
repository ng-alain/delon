---
type: Basic
order: 1
title: let
subtitle: Let
cols: 1
module: import { LetModule } from '@delon/abc/lett';
---

Allows to reuse computed value in several places in template to avoid recalculations of getters or many `async` pipes.

```html
<div *let="value1 as v">
  <p>{{ v }}</p>
</div>
<div *let="time$ | async as time">
  <p>{{ time }}</p>
</div>
```

## API

### [let]

| Property | Description | Type | Default | Global Config |
|----------|-------------|------|---------|---------------|
| `[let]` | Expression | `T` | - | - |
