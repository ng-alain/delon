---
order: 100
title: 常见问题
type: Documents
---

## 如何自适应容器宽高？

G2 当前版本并不会根据容器宽高自适应，目前只会根据浏览器窗体大小才会重新变更图表尺寸，因此需要手动监听容器大小的变化并调用 `chart.forceFit()` 重新渲染图表尺寸。

> **v5 起 `forceFit()` 返回 `Promise`**（v4 是同步）：需要等待尺寸变更完成时请 `await chart.forceFit()` 或 `void chart.forceFit()`；组件内部的自适应（`autoFit`）已在首帧与窗口 resize 时自动处理，通常无需手动调用。

[comment]: <demo(resizable)>