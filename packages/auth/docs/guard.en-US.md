---
order: 25
title: 
  en-US: Routing guard
  zh-CN: 路由守卫
type: Documents
---

## Written in front

When a route does not initiate a request, it means that the Token validity cannot be verified in the interceptor, and the routing guard can solve the problem, for example, in your root path:

```ts
[
  {
    path: 'home',
    component: MockComponent,
    canActivate: [JWTGuard],
  },
  {
    path: 'my',
    canActivateChild: [JWTGuard],
    children: [
      { path: 'profile', component: MockComponent }
    ],
  },
  {
    path: 'login',
    component: MockComponent,
  },
]
```

## How to choose?

Similarly, the different authentication styles are:

- `SimpleGuard` based on Simple Web Token authentication style
- `JWTGuard` based on Json Web Token authentication style
