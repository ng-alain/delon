---
order: 3
title: 路由守卫
type: Documents
---

## 写在前面

路由守卫可以防止未授权用户访问页面。

路由守卫需要单独对每一个路由进行设置，很多时候这看起来很繁琐，`@delon/acl` 实现了通用守卫函数 `aclCanMatch`, `aclCanActivate`, `aclCanActivateChild`，可以在路由注册时透过简单的配置完成一些复杂的操作，甚至支持 `Observable` 类型。

使用固定属性 `guard` 来指定 `ACLCanType` 参数，例如：

```ts
const routes: Routes = [
  {
    path: 'auth',
    canActivate: [ aclCanActivate ],
    data: { guard: 'user1' as ACLGuardType }
  },
  {
    path: 'auth',
    canActivate: [ aclCanActivate ],
    data: {
      guard: {
        role: [ 'user1' ],
        ability: [ 10, 'USER-EDIT' ],
        mode: 'allOf'
      } as ACLGuardType,
      guard_url: '/no-permisseion'
    }
  },
  {
    path: 'obs',
    canActivate: [ aclCanActivate ],
    data: {
      guard: ((_srv, _injector) => {
        return of('user');
      }) as ACLGuardFunctionType,
      guard_url: '/no-permisseion'
    }
  }
]
```

> `guard` 的值必须符合 [ACLCanType](/acl/getting-started#ACLCanType) 类型值。

## 示例

```ts
import { of } from 'rxjs';
import { aclCanActivate, aclCanActivateChild, aclCanMatch } from '@delon/acl';
const routes: Routes = [
  {
    path: 'guard',
    component: GuardComponent,
    children: [
      { path: 'auth', component: GuardAuthComponent, canActivate: [ aclCanActivate ], data: { guard: 'user1' } },
      { path: 'admin', component: GuardAdminComponent, canActivate: [ aclCanActivate ], data: { guard: 'admin' } }
    ],
    canActivateChild: [ aclCanActivateChild ],
    data: { guard: <ACLType>{ role: [ 'user1' ], ability: [ 10, 'USER-EDIT' ], mode: 'allOf' } }
  },
  { path: 'pro', loadChildren: './pro/pro.module#ProModule', canMatch: [ aclCanMatch ], data: { guard: 1 } },
  { path: 'pro', loadChildren: './pro/pro.module#ProModule', canMatch: [ aclCanMatch ], data: { guard: of(false).pipe(map(v => 'admin')) } }
];
```
