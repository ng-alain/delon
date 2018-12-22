---
order: 3
title: 路由守卫
type: Documents
---

## 写在前面

路由守卫可以防止未授权用户访问页面。

路由守卫需要单独对每一个路由进行设置，很多时候这看起来很繁琐，`@delon/acl` 实现了通用守卫类 `ACLGuard`，可以在路由注册时透过简单的配置完成一些复杂的操作，甚至支持 `Observable` 类型。

使用固定属性 `guard` 来指定 `ACLCanType` 参数，例如：

```ts
const routes: Routes = [
  {
    path: 'auth',
    canActivate: [ ACLGuard ],
    data: { guard: 'user1' }
  },
  {
    path: 'auth',
    canActivate: [ ACLGuard ],
    data: {
      guard: <ACLType>{
        role: [ 'user1' ],
        ability: [ 10, 'USER-EDIT' ],
        mode: 'allOf'
      }
    }
  },
]
```

> `guard` 的值必须符合 [ACLCanType](/acl/getting-started#ACLCanType) 类型值。

## 示例

```ts
import { of } from 'rxjs';
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
    data: { guard: <ACLType>{ role: [ 'user1' ], ability: [ 10, 'USER-EDIT' ], mode: 'allOf' } }
  },
  // 权限点限定
  { path: 'pro', loadChildren: './pro/pro.module#ProModule', canLoad: [ ACLGuard ], data: { guard: 1 } },
  // 或使用Observable实现更复杂的行为
  { path: 'pro', loadChildren: './pro/pro.module#ProModule', canLoad: [ ACLGuard ], data: { guard: of(false).pipe(map(v => 'admin')) } }
];
```
