---
order: 3
title: Guard
type: Documents
---

## Foreword

Routing guard prevent unauthorized users visit the page.

`@delon/acl` implements the generic guard functions `aclCanMatch`, `aclCanActivate`, `aclCanActivateChild`, which allows for complex operations through simple configuration in route registration, and supports the `Observable` type.

Use the fixed attribute `guard` to specify the `ACLCanType` parameter value, for example:

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

> The value of `guard` must match the value of [ACLCanType](/acl/api#ACLCanType).

## DEMO

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
