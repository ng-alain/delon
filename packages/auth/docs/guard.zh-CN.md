---
order: 25
title: 路由守卫
type: Documents
---

## 写在前面

当某个路由未发起请求时，意味着无法在拦截器里面对其进行 Token 有效性的验证，而路由守卫可以解决这一问题，例如在你的根路径里：

```ts
[
  {
    path: 'home',
    component: MockComponent,
    canActivate: [authJWTCanActivate],
  },
  {
    path: 'my',
    canActivateChild: [authJWTCanActivateChild],
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

## 如何选择？

同样，针对不同认证风格分别为：

- `authSimpleCanActivate`, `authSimpleCanActivateChild`, `authSimpleCanMatch` 基于 Simple Web Token 认证风格
- `authJWTCanActivate`, `authJWTCanActivateChild`, `authJWTCanMatch` 基于 Json Web Token 认证风格
