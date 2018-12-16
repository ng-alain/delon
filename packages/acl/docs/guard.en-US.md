---
order: 3
title: Guard
type: Documents
---

## Foreword

Routing guard prevent unauthorized users visit the page.

`@delon/acl` implements the generic guard class `ACLGuard`, which allows for complex operations through simple configuration in route registration, and supports the `Observable` type.

Use the fixed attribute `guard` to specify the `ACLCanType` parameter value, for example:

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

> The value of `guard` must match the value of [ACLCanType](/acl/api#ACLCanType).

## DEMO

```ts
import { of } from 'rxjs';
import { ACLGuard } from '@delon/acl';
const routes: Routes = [
  {
    path: 'guard',
    component: GuardComponent,
    children: [
      { path: 'auth', component: GuardAuthComponent, canActivate: [ ACLGuard ], data: { guard: 'user1' } },
      { path: 'admin', component: GuardAdminComponent, canActivate: [ ACLGuard ], data: { guard: 'admin' } }
    ],
    canActivateChild: [ ACLGuard ],
    data: { guard: <ACLType>{ role: [ 'user1' ], ability: [ 10, 'USER-EDIT' ], mode: 'allOf' } }
  },
  { path: 'pro', loadChildren: './pro/pro.module#ProModule', canLoad: [ ACLGuard ], data: { guard: 1 } },
  { path: 'pro', loadChildren: './pro/pro.module#ProModule', canLoad: [ ACLGuard ], data: { guard: of(false).pipe(map(v => 'admin')) } }
];
```
