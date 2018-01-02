---
title: count-down
subtitle: 倒计时
order: 70
cols: 3
module: AdCountDownModule
---

倒计时组件，依赖 [ngx-countdown](https://github.com/cipchk/ngx-countdown)。

## 依赖

```
npm install --save ngx-countdown
```

## API

| 参数      | 说明          | 类型         | 默认值 |
|----------|---------------|-------------|-------|
| target | 目标时间，`number` 表示秒 | `number | Date` | - |
| config | 完整参数 | `Object` |  |
| (begin) |  开始时触发 | `EventEmitter` | -|
| (notify) |  通知时触发，需要在 `config` 中配置 notify | `EventEmitter` | -|
| (end) |  结束时触发 | `EventEmitter` | -|

### config

| Name    | Type           | Default  | Summary |
| ------- | ------------- | ----- | ----- |
| template | string | $!h!时$!m!分$!s!秒 | 自定义模板，如果为空以组件 innerHTML 为准，再不然使用默认值。`$!s!` 有另一种表示法 `$!s-ext!` 表示0.1s精度。  |
| size | string | lite | lite、medium、large 三种不同风格，见DEMO |
| leftTime | number | 0 | 剩余时间：指的是根据服务端计算剩余时间值进行倒计时，支持0.1s精度，但有可能会出现丢帧的情况。（单位：秒） |
| stopTime | number | 0 | 结束时间：指的是根据本地时间至结束时间进行倒计时。（单位：UNIX时间戳 ms） |
| varRegular | RegExp | `/\$\{([\-\w]+)\}/g` | 模板解析正则表达式，有时候由于模板结构比较特殊，无法根据默认的表达式进行解析，那就需要修改它。 |
| clock | Array |  | 时钟控制数组，特殊需求时可以修改，里面是三元组：指针名、进制、位数，可参考大于99小时demo |
| notify | number[] |  | 第xx秒时调用 notify 函数，值必须是**正整数** |
| className | string |  | 自定义类名 |
| repaint | Function |  | 自定义重绘 |

## 关于重绘

重绘是指当Timer一次跳动时会执行一次（如果是0.1s精度的，会更频繁）；因此，可以制定一些不一样的效果。有关细节可以参考 [Flip](https://cipchk.github.io/ngx-countdown/#/tpl/flip)。
