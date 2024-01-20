---
title: decorator
subtitle: 装饰器
type: Tools
---

## toBoolean, @InputBoolean

> 建议使用内置的 `transform` 来替代，并且不再需要 `static ngAcceptInputType_`

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

> 建议使用内置的 `transform` 来替代，并且不再需要 `static ngAcceptInputType_`

转换 `number` 属性，其中 `@InputNumber()` 可以强化数字属性绑定的体验，例如：

```ts
@Input() @InputNumber() count = 10;
```

以下调用方法都会认为是有效：

```html
<test count="1"></test> // 1
<test [count]="1"></test> // 1
```

## @ZoneOutside

装饰方法运行在 `runOutsideAngular` 内。

```ts
class MockClass {
  constructor(public ngZone: NgZone) {}

  @ZoneOutside()
  run(): void {}
}
```

## @ZoneRun

装饰方法运行在 `run` 内。

```ts
class MockClass {
  constructor(public ngZone: NgZone) {}

  @ZoneRun()
  run(): void {}
}
```
