---
order: 11
type: Basic
title: Upgrade to version 10.0
hot: true
---

## Upgrade

This description refers to the description of the upgrade from `9.5.x` to `10`; NG-ALAIN only needs one lines of commands:

```bash
ng update @angular/core @angular/cli ng-alain@next
```

**Note:** Currently `ng-zorro-antd` is still in Beta version, we cannot guarantee full availability, currently known issues:

- `nz-tabset` replaces the scrolling method, which is not currently fixed, it will also affect `reuse-tab`

## Remove deprecation

Remove all deprecation items declared in `9.x`, including the following:

| Package | Component | Deprecation |
|---|----|-----|
| `@delon/chart` | `tag-cloud` | Date item `x`, `category` |
| `@delon/chart` | `timeline` | Date item `x` |
| `@delon/util` | `lazy` | `LazyResult.loaded` |
