---
order: 100
title: FAQ
type: Documents
---

## How to auto-resize of the container?

The G2 uses `window.addEventListener('resize', this.onResize)` to detect a change in parent dom element's size. So you need to manually monitor the change in the size of the container and call `chart.forceFit()` to force resize.

> **Since v5, `forceFit()` returns a `Promise`** (it was synchronous in v4): use `await chart.forceFit()` or `void chart.forceFit()`. Components already handle `autoFit` on the first frame and on window resize, so manual calls are rarely needed.

[comment]: <demo(resizable)>
