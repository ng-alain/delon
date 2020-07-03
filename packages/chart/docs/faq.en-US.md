---
order: 100
title: FAQ
type: Documents
---

## How to auto-resize of the container?

The G2 uses `window.addEventListener('resize', this.onResize)` to detect a change in parent dom element's size. So you need to manually monitor the change in the size of the container and call `chart.forceFit()` to force resize.

[comment]: <demo(resizable)>
