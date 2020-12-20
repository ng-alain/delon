---
order: 1000
type: Other
title: Upgrade to version 10.0
hot: true
---

## Note: This article only describes the NG-ALAIN part. For details about the NG-ZORRO part, please refer to [#5775](https://github.com/NG-ZORRO/ng-zorro-antd/issues/5775).

## Before upgrade

1. Make sure `Node.js` >= `10.13`.
2. Create a new branch, or use other methods to back up the current project.
3. Delete the `package-lock.json` or `yarn.lock` file.

## 1. Upgrade

This description refers to the description of the upgrade from `9.x` to `10`; NG-ALAIN only needs one lines of commands:

```bash
ng update @angular/core@10 @angular/cli@10 ng-zorro-antd@10 ng-alain@10
```

## 2. Remove deprecation

Remove all deprecation items declared in `9.x`, including the following:

| Package | Component | Deprecation |
|---|----|-----|
| `@delon/chart` | `tag-cloud` | Date item `x`, `category` |
| `@delon/chart` | `timeline` | Date item `x` |
| `@delon/util` | `lazy` | `LazyResult.loaded` |
