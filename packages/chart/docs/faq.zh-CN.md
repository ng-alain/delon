---
order: 2
title: 常见问题
type: Documents
---

## 找不到 G2

G2 虽然内置 TypeScript 定义文件，事实上 G2 并无法单独使用，它需要依赖像 `@antv/data-set` 或其他插件，而这些并没有对应的定义文件。换句话说，对于使用 TypeScript 导入模块的方式并不是最友好的方式（[#679](https://github.com/ng-alain/ng-alain/issues/679)）。故而整个 `@delon/chart` 采用最原始的办法，但仍然有一些细节值得注意：

- 在 `angular.json` 的 `scripts` 节点导入所有 G2 相关依赖包
- 在 `src/typings.d.ts` 定义 G2 相关的类型定义

当然，以上使用 [g2 插件](/cli/plugin#g2) 可以一步到位。
