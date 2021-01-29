---
title: decorator
subtitle: 装饰器
type: Type
---

## toBoolean, @InputBoolean

转换 `boolean` 属性，其中 `@InputBoolean()` 可以强化布尔属性绑定的体验，例如：

```ts
@Input() @InputBoolean() disabled = false;
```

以下调用方法都会认为是有效：

```html
<test disabled></test> // true
<test disabled="true"></test> // true
<test [disabled]="true"></test> // true
<test disabled="false"></test> // false
<test [disabled]="false"></test> // false
```

## toNumber, @InputNumber

转换 `number` 属性，其中 `@InputNumber()` 可以强化数字属性绑定的体验，例如：

```ts
@Input() @InputNumber() count = 10;
```

以下调用方法都会认为是有效：

```html
<test count="1"></test> // 1
<test [count]="1"></test> // 1
```
