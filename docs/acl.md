---
order: 50
title: ACL
type: Advance
---

ACL 全称叫访问控制列表（Access Control List），是一种非常简单的基于角色权限控制方式。一个完全独立 `@delon/acl` 模块（[DEMO](//cipchk.github.io/ng-alain/#/logics/acl)）。

## 如何运行？

内部实际是一个 `ACLService` 它提供一套基于角色权限服务类。为了更好的编码体验 ng-alain 有多处组件或模块也依赖于它，例如：`simple-table`、`MenuService` 等，并且这些会以 `acl` 属性的形式表现。因此，若某部分组件带有 `acl` 实际都是调用本模块。

## 需求实例

### 粒度

ACL 提供一个用于改变按钮级别粒度的控制能力，例如：无权限者不允许显示列表页中的增加按钮。

```html
使用角色名
<button [acl]="'user'"></button>
<button [acl]="['user', 'manage']"></button>
使用权限点
<button [acl]="10"></button>
<button acl [acl-ability]="10"></button>
```

### 通用路由守卫

大部分文章都会告诉你路由守卫需要针对每种角色定义一个类，其实未必如此。`ACLGuard` 是一个通用路由守卫类，可以在路由注册时透过简单的配置完成一些复杂的操作，甚至支持 Observable 参数：

```ts
import { of } from 'rxjs/observable/of';
import { ACLGuard } from '@delon/acl';
const routes: Routes = [
    {
        path: 'guard',
        component: GuardComponent,
        children: [
            // 角色限定
            { path: 'auth', component: GuardAuthComponent, canActivate: [ ACLGuard ], data: { guard: 'user1' } },
            { path: 'admin', component: GuardAdminComponent, canActivate: [ ACLGuard ], data: { guard: 'admin' } }
        ],
        // 所有子路由有效
        canActivateChild: [ ACLGuard ],
        data: { guard: 'user1' }
    },
    // 权限点限定
    { path: 'pro', loadChildren: './pro/pro.module#ProModule', canLoad: [ ACLGuard ], data: { guard: 1 } },
    // 或使用Observable实现更复杂的行为
    { path: 'pro', loadChildren: './pro/pro.module#ProModule', canLoad: [ ACLGuard ], data: { guard: of(false).pipe(map(v => 'admin')) } }
];
```

## API

**ACLType**

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `role` | `string[]` | 角色 |
| `ability` | `(number[] | string[])` | 权限点 |

**ACLService**

| 方法 | 说明 |
| --- | --- |
| `change` | 监听ACL变更通知 |
| `data` | 获取所有ACL数据 |
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

**为什么can方法默认情况下角色是字符串，而权限点是数字类型？**

我们无法区分在同一个字符串类型的情况下如何自动区分角色还是权限点，源于此作了这样的设计。因此对于角色使用字符串、权限点使用数字型的后端设计编码体验会更好，你无须再使用 `canAbility` 来表达权限点或使用 `ACLType` 复杂类型表述。

## 如何删除？

见 [独立使用 ABC 组件](/docs/use-components-alone)。
