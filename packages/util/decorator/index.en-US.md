---
title: decorator
subtitle: Decorator
type: Tools
---

## toBoolean, @InputBoolean

> Recommended to use the built-in `transform` and `static ngAcceptInputType_` can be removed

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

> Recommended to use the built-in `transform` and `static ngAcceptInputType_` can be removed

Convert to `number`, `@InputNumber()` can enhance the experience of binding number attributes, for example:

```ts
@Input() @InputNumber() count = 10;
```

The following calling methods will all be considered effective:

```html
<test count="1"></test> // 1
<test [count]="1"></test> // 1
```

## @ZoneOutside

The decoration method runs in `runOutsideAngular`.

```ts
class MockClass {
  constructor(public ngZone: NgZone) {}

  @ZoneOutside()
  run(): void {}
}
```

## @ZoneRun

The decoration method runs in `run`.

```ts
class MockClass {
  constructor(public ngZone: NgZone) {}

  @ZoneRun()
  run(): void {}
}
```
