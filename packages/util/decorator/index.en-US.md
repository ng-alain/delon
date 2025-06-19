---
title: decorator
subtitle: Decorator
type: Tools
---

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
