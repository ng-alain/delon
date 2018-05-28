---
order: 20
title: 业务页
type: Documents
---

## 写在前面

`ng generate`（简写：`ng g`）用于生成业务组件页，默认 Angular 所提供的模板跟 ng-alain 所需要的会有一些不同，例如我们希望生成一个模块时应该包括导入 `SharedModule`。

ng-alain 在此基础上增加了很多很酷的骚操作。

## 命令格式

```bash
ng g ng-alain:<command name> <name> [options]
```

ng-alain 有自己的一套文件组织结构，当你破坏这些结构时，可能会导致下列指令产生异常。

## Module 模块

生成一个 `trade` 模块：

```bash
ng g ng-alain:module trade
```

会在 `routes/trade` 生成两个文件 `trade.module.ts`、`trade-routing.module.ts`，你无法指定不生成 `*-routing.module.ts` 因为这是 ng-alain 的任性。

模块内容包括了导入 `SharedModule` 以及一些统一性导入与导出的方式，并且你不可能破坏这些变量名（例如：`COMPONENTS`、`COMPONENTS_NOROUNT`、`routes`）。

## 业务页

目前包含的业务组件页，包括：

- `list` 列表页
- `edit` 编辑页
- `view` 查看页
- `curd` 列表、编辑、查看

在 `trade` 下生成 `list` 列表页：

```bash
ng g ng-alain:list list -m=trade
```

**注意：** `-m` 是必须指定的，因为 ng-alain 认为页面应该在某个具体的模块里，而不是幽灵。

### 骚操作

一般而言，一个模块可能会包含相同类型的业务页，而我们产生的文件结构可能希望是：

```
sys
  log
    view
      view.component.ts
    log.component.ts
  sys.module.ts
```

因此，当你希望生成的查看应该是在 `log` 组件下面时，你可以这样子：

```bash
ng g ng-alain:view view -m=sys -t=log
```

### edit & view 页

对于 `edit`、`view` 默认是以模态框展示来生成，你可以改用页面展示则：

```bash
ng g ng-alain:edit <page name> --modal=false
```

