---
order: 2
title: ACL
type: Advance
---

ACL 全称叫访问控制列表（Access Control List），是一种非常简单的基于角色权限控制方式，所以如果你需要它，则需要导入 `@delon/acl` 模块；另外你也可以在 [DEMO](https://cipchk.github.io/ng-alain/#/logics/acl) 中体验它。

```ts
import { AlainACLModule } from '@delon/acl';

@NgModule({
    imports: [ AlainACLModule.forRoot() ],
    exports: [ AlainACLModule ]
})
export class SharedModule {}
```

## 如何运行？

内部实际是一个 `ACLService` 它提供一套基于角色权限服务类。但不包括路由守卫，这是因为路由守卫需要根据不同应用而定制，如果配合 `ACLService` 路由守卫也是非常简单。

## API

**ACLType**

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `role` | `string[]` | 角色 |
| `ability` | `(number[] | string[])` | 权限点 |

**ACLService**

| 方法 | 说明 |
| --- | --- |
| `setFull(val: boolean)` | 标识当前用户为全量，即不受限 |
| `set(value: ACLType)` | 设置当前用户角色或权限能力（会先清除所有） |
| `setRole(roles: string[])` | 设置当前用户角色（会先清除所有） |
| `setAbility(abilities: (number | string)[])` | 设置当前用户权限能力（会先清除所有） |
| `add(value: ACLType)` | 为当前用户增加角色或权限能力 |
| `attachRole(roles: string[])` | 为当前用户附加角色 |
| `attachAbility(abilities: (number | string)[])` | 为当前用户附加权限 |
| `removeRole(roles: string[])` | 为当前用户移除角色 |
| `removeAbility(abilities: (number | string)[])` | 为当前用户移除权限 |
| `can(roleOrAbility: string | string[] | ACLType)` | 当前用户是否有对应角色 |
| `canAbility(ability: number | string)` | 当前用户是否有对应权限点 |

## Directive 指令

ACL 提供一个用于改变按钮级别粒度的控制能力，例如：无权限者不允许显示列表页中的增加按钮。

```html
<button [acl]="'user'"></button>
or
<button [acl-ability]="10"></button>
```

## 如何删除？

移除内容包括：

+ `shared.module.ts` 对 `AlainACLModule` 相关声明
