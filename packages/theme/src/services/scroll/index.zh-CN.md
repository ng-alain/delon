---
order: 5
title: ScrollService
subtitle: 滚动条服务
type: Service
---

滚动条控制，允许滚动至指定元素所处位置。

## API

| 接口名              | 参数                                                    | 描述                 |
|---------------------|---------------------------------------------------------|--------------------|
| `getScrollPosition` | `element?: Element`                                     | 获取滚动条位置       |
| `scrollToPosition`  | `element: Element | Window, position: [number, number]` | 设置滚动条位置       |
| `scrollToElement`   | `element?: Element, topOffset = 0`                      | 设置滚动条至指定元素 |
| `scrollToTop`       | `topOffset = 0`                                         | 滚动至顶部           |