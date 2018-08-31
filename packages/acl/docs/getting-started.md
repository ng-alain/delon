---
order: 1
title: 开始使用
type: Documents
---

ACL 全称叫访问控制列表（Access Control List），是一种非常简单的基于角色权限控制方式。一个完全独立 `@delon/acl` 模块（[DEMO](//cipchk.github.io/ng-alain/#/logics/acl)）。

## 如何运行？

内部实际是一个 `ACLService` 它提供一套基于角色权限服务类。为了更好的编码体验 ng-alain 有多处组件或模块也依赖于它，例如：`na-table`、`MenuService` 等，并且这些会以 `acl` 属性的形式表现。因此，若某部分组件带有 `acl` 实际都是调用本模块。

## 如何使用？

安装 `@delon/acl` 依赖包：

```bash
yarn add @delon/acl
```

导入 `DelonACLModule` 模块：

```typescript
import { DelonACLModule } from '@delon/acl';

@NgModule({
  imports: [
    DelonACLModule.forRoot()
  ]
})
export class AppModule { }
```
