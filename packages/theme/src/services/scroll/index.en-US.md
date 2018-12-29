---
order: 5
title: ScrollService
subtitle: Scroll Service
type: Service
---

Scrollbar control allows scrolling to where the specified element.

## API

| Method              | Property                                                | Description                           |
|---------------------|---------------------------------------------------------|---------------------------------------|
| `getScrollPosition` | `element?: Element`                                     | Retrieves the current scroll position |
| `scrollToPosition`  | `element: Element | Window, position: [number, number]` | Sets the scroll position              |
| `scrollToElement`   | `element?: Element, topOffset = 0`                      | Scroll to element                     |
| `scrollToTop`       | `topOffset = 0`                                         | Scroll to top                         |
