---
order: 11
type: Basic
title: 升级到 10.0 版本
hot: true
---

## 注意：本文只描述 NG-ALAIN 部分，关于 NG-ZORRO 部分细节请参考 [#5775](https://github.com/NG-ZORRO/ng-zorro-antd/issues/5775)。

## 开始之前

1. 首先确保你 `Node.js` >= `10.13`
2. 创建新的分支，或者使用其他方式备份当前项目
3. 删除项目下 `package-lock.json` 或 `yarn.lock` 文件

## 一、升级步骤

本文描述是指从 `9.x` 升级至 `10` 的描述说明；NG-ALAIN 只需一行命令即可：

```bash
ng update @angular/core @angular/cli ng-zorro-antd ng-alain
```

## 二、移除过期

移除所有已经在 `9.x` 声明的过期项，包含以下：

| 包 | 组件 | 过期 |
|---|----|-----|
| `@delon/chart` | `tag-cloud` | 数据项 `x`、`category` |
| `@delon/chart` | `timeline` | 数据项 `x` |
| `@delon/util` | `lazy` | `LazyResult.loaded` |