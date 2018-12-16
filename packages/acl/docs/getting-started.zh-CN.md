---
order: 1
title: 开始使用
type: Documents
module: DelonACLModule
config: DelonACLConfig
---

ACL 全称叫访问控制列表（Access Control List），是一种非常简单的基于角色权限控制方式。一个完全独立 `@delon/acl` 模块（[DEMO](//ng-alain.github.io/ng-alain/#/logics/acl)）。

## 如何运行

内部实际是一个 `ACLService` 它提供一套基于角色权限服务类。为了更好的编码体验 ng-alain 有多处组件或模块也依赖于它，例如：`st`、`MenuService` 等，并且这些会以 `acl` 属性的形式表现。因此，当遇到 `acl` 属性都表示 [can](#ACLCanType) 方法的**参数值**。

## 如何使用

安装 `@delon/acl` 依赖包：

```bash
yarn add @delon/acl
```

导入 `DelonACLModule` 模块：

```typescript
import { DelonACLModule } from '@delon/acl';

@NgModule({
  imports: [
    DelonACLModule
  ]
})
export class AppModule { }
```

## API

### ACLService

| 方法 | 说明 |
| --- | --- |
| `[change]` | 监听ACL变更通知 |
| `[data]` | 获取所有ACL数据 |
| `setFull(val: boolean)` | 标识当前用户为全量，即不受限 |
| `set(value: ACLType)` | 设置当前用户角色或权限能力（会先清除所有） |
| `setRole(roles: string[])` | 设置当前用户角色（会先清除所有） |
| `setAbility(abilities: (number | string)[])` | 设置当前用户权限能力（会先清除所有） |
| `add(value: ACLType)` | 为当前用户增加角色或权限能力 |
| `attachRole(roles: string[])` | 为当前用户附加角色 |
| `attachAbility(abilities: (number | string)[])` | 为当前用户附加权限 |
| `removeRole(roles: string[])` | 为当前用户移除角色 |
| `removeAbility(abilities: (number | string)[])` | 为当前用户移除权限 |
| `can(roleOrAbility: ACLCanType)` | 当前用户是否有对应角色 |
| `canAbility(ability: ACLCanType)` | 当前用户是否有对应权限点 |

### ACLCanType

```ts
type ACLCanType = number | number[] | string | string[] | ACLType
```

### ACLType

| 属性 | 类型 | 说明 | 默认 |
| --- | --- | --- | --- |
| `[role]` | `string[]` | 角色 | - |
| `[ability]` | `number[], string[]` | 权限点 | - |
| `[mode]` | `allOf, oneOf` | `allOf` 表示必须满足所有角色或权限点数组算有效<br>`oneOf` 表示只须满足角色或权限点数组中的一项算有效 | `oneOf` |
