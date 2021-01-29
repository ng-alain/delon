---
title: decorator
subtitle: Decorator
type: Type
---

## toBoolean, @InputBoolean

Convert to `boolean`, `@InputBoolean()` can enhance the experience of binding number attributes, for example:

```ts
@Input() @InputBoolean() disabled = false;
```

The following calling methods will all be considered effective:

```html
<test disabled></test> // true
<test disabled="true"></test> // true
<test [disabled]="true"></test> // true
<test disabled="false"></test> // false
<test [disabled]="false"></test> // false
```

## toNumber, @InputNumber

Convert to `number`, `@InputNumber()` can enhance the experience of binding number attributes, for example:

```ts
@Input() @InputNumber() count = 10;
```

The following calling methods will all be considered effective:

```html
<test count="1"></test> // 1
<test [count]="1"></test> // 1
```
