---
title: decorator
subtitle: Decorator
type: Tools
deprecated: 24.0.0
---

# Will be removed in v24.0.0.

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