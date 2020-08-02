---
order: 11
type: Basic
title: 升级到 10.0 版本
hot: true
---

## 升级

本文描述是指从 `9.5.x` 升级至 `10` 的描述说明；NG-ALAIN 只需一行命令即可：

```bash
ng update @angular/core @angular/cli ng-alain@next
```

**注意：** 当前 `ng-zorro-antd` 还是 Beta 版本，我们无法保证完整可用性。

## 移除过期

移除所有已经在 `9.x` 声明的过期项，包含以下：

| 包 | 组件 | 过期 |
|---|----|-----|
| `@delon/chart` | `tag-cloud` | 数据项 `x`、`category` |
| `@delon/chart` | `timeline` | 数据项 `x` |
| `@delon/util` | `lazy` | `LazyResult.loaded` |