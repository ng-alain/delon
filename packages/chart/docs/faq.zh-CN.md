---
order: 100
title: 常见问题
type: Documents
---

## 如何自适应容器宽高？

G2 当前版本并不会根据容器宽高自适应，目前只会根据浏览器窗体大小才会重新变更图表尺寸，因此需要手动监听容器大小的变化并调用 `chart.forceFit()` 重新渲染图表尺寸。

[comment]: <demo(resizable)>
