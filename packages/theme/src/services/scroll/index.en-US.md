---
order: 5
title: ScrollService
subtitle: Scroll Service
type: Service
deprecated: 12.0.0
---

**NOTE:** Will be removed in 12.0.0, Pls used `import { ScrollService } from '@delon/util/browser';` instead

Scrollbar control allows scrolling to where the specified element.

## API

| Method | Property | Description |
|--------|----------|-------------|
| `getScrollPosition` | `element?: Element` | Retrieves the current scroll position |
| `scrollToPosition` | `element: Element | Window, position: [number, number]` | Sets the scroll position |
| `scrollToElement` | `element?: Element, topOffset = 0` | Scroll to element |
| `scrollToTop` | `topOffset = 0` | Scroll to top |
