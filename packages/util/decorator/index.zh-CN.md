---
title: decorator
subtitle: 装饰器
type: Tools
---

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
