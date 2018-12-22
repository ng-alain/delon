---
order: 1
title: _date
subtitle: Date
type: Pipe
---

Based on date-fns date formatting, see more details [date-fns](https://date-fns.org/v1.29.0/docs/format) (China mirror: [moment format](http://Momentjs.cn/docs/#/displaying/format/))

date-fns supports different kinds of time formats, such as:

+ 2018-08-24 18:08:20
+ 2018-08-24
+ 20180824
+ 1503571962333

```html
{{data.registered | _date: 'YYYY年MM月DD日'}}
```

Output:

```
2017年08月24日
```
