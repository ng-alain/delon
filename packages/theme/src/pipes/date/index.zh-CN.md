---
order: 1
title: _date
subtitle: 日期
type: Pipe
---

基于 date-fns 日期格式化，显示更多细节参考 [date-fns](https://date-fns.org/v1.29.0/docs/format)（国内镜像：[moment format](http://momentjs.cn/docs/#/displaying/format/)）

最大好处是 date-fns 支持不同种类的时间格式，例如：

+ 2018-08-24 18:08:20
+ 2018-08-24
+ 20180824
+ 1503571962333

等等。

```html
{{data.registered | _date: 'YYYY年MM月DD日'}}
```

输出：

```
2017年08月24日
```
