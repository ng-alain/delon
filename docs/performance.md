---
order: 80
title:
  en-US: Performance
  zh-CN: 优化
type: Advance
---

## Web 图标

默认除了 ng-zorro-antd 自带 Web 图标，额外增加了 [font-awesome](//fontawesome.io/)、[simple-line-icons](//simplelineicons.com/)、[weather-icons](//erikflowers.github.io/weather-icons/) 三个图标库，如果你明确不需要，可以删除：

+ 移除 `src/styles.less` 引用样式文件
+ 移除相应包体

## IE 优化

ng-alain 默认开启了对 IE 的支持，这给包体及样式增加了一定大小，倘若你很在意并且不需要 `IE10` 及以下的版本支持的话，可以调整两项配置：

一：在 `package.json` 加上 `browserslist` 节点减少 `flexbox` 前缀样式从而减少包体大小：

```json
"browserslist": [
    "last 2 versions",
    "not ie <= 10",
    "not ie_mob <= 10"
]
```

二：关闭 `src/polyfills.ts` 下 ` IE9, IE10 and IE11 requires all of the following polyfills. ` 节点的内容，可以减少 `polyfills.js` 的包体大小。
