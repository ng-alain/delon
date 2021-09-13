---
title: format
subtitle: 字符,校验,货币,掩码
type: Tools
---

## CurrencyService

> 可以通过[全局配置](/docs/global-config)覆盖 `startingUnit`、`megaUnit`、`precision`、`ingoreZeroPrecision` 等参数。

### format

格式化货币，用逗号将数字格式化为千位分隔符。

```ts
10000 => `10,000`
10000.567 => `10,000.57`
```

> 若指定则表示使用 Angular 自带的 `currency` 管道来解析，见[文档](https://angular.cn/api/common/CurrencyPipe)。

### formatMask

格式化掩码。

| 字符 | 描述 |
| --- | --- |
| `0` | 任意数字，若该位置字符不符合，则默认为 `0` 填充 |
| `9` | 任意数字 |
| `#` | 任意字符 |
| `U` | 转换大写 |
| `L` | 转换小写 |
| `*` | 转换为 `*` 字符 |

```ts
formatMask('123', '(###)') => (123)
formatMask('15900000000', '999****9999') => 159****0000
formatMask('aBc', 'UUU') => ABC
formatMask('ABc', 'LLL') => abc
```

或自定义Token：

```ts
const option: FormatMaskOption = {
  mask: 'CC999',
  tokens: { C: { pattern: /.*/, transform: char => (char === '你' ? 'N' : 'H') } }
}
formatMask('你好123', option) => NH123
```

### mega

大数据格式化。

```ts
1000 => { value: '1', unit: 'K', unitI18n: '千' }
12456 => { value: '12.46', unit: 'K', unitI18n: '千' }
```

### cny

转化成人民币表示法。

```ts
1 => 壹元整
1.34 => 壹元叁角肆分
```

## format

字符串格式化。

```ts
format('this is ${name}', { name: 'asdf' })
// output: this is asdf
format('this is ${user.name}', { user: { name: 'asdf' } }, true)
// output: this is asdf
```

## REGEX

一组常见的正则表达式。也可以通过 `REGEX_STR` 来获取它们的正则字符串格式，配合 `new RegExp` 完成一些额外的处理。

## num

是否为数字。

## int

是否为整数。

## decimal

是否为小数点数值。

## idCard

是否为中华人民共和国居民身份证。

## isMobile

是否为手机号（中国）。

## isUrl

是否URL地址。

## isIp

是否IP地址（支持v4、v6）。

## isColor

是否颜色代码值。

## isChinese

是否中文。
