---
title: browser
subtitle: 浏览器、DOM 等
type: Tools
---

## isEmpty

用于校验 `<ng-content></ng-content>` 是否为空，自定义组件时蛮有用。

## updateHostClass

更新宿主组件样式 `class`，例如：

```ts
updateHostClass(
  this.el.nativeElement,
  this.renderer,
  {
    [ 'classname' ]: true,
    [ 'classname' ]: this.type === '1',
    [ this.cls ]: true,
    [ `a-${this.cls}` ]: true
  }
)
```

## copy

复制字符串文档至剪贴板。

## ScrollService

滚动条控制，允许滚动至指定元素所处位置。

| 接口名 | 参数 | 描述 |
|-----|----|----|
| `getScrollPosition` | `element?: Element` | 获取滚动条位置 |
| `scrollToPosition` | `element: Element | Window, position: [number, number]` | 设置滚动条位置 |
| `scrollToElement` | `element?: Element, topOffset = 0` | 设置滚动条至指定元素 |
| `scrollToTop` | `topOffset = 0` | 滚动至顶部 |