---
order: 11
type: Basic
title: 升级到 10.0 版本
hot: true
---

本文描述是指从 `9.5.x` 升级至 `10` 的描述说明；NG-ALAIN 只需两行命令即可：

```bash
ng update @angular/core @angular/cli
ng update ng-alain@next
```

**注意：** 当前 `ng-zorro-antd` 还是 Beta 版本，我们无法保证完整可用性，目前已知存在的问题：

- `nz-tabset` 更换滚动方式，当前未修复，同样会影响 `reuse-tab`
