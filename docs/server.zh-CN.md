---
order: 40
title:
  en-US: Work with Server
  zh-CN: 和服务端进行交互
type: Dev
---

NG-ALAIN 是一套基于 Angular 技术栈的单页面应用，我们提供的是前端代码和本地模拟数据的开发模式，
通过 Restful API 的形式和任何技术栈的服务端应用一起工作。下面将简单介绍和服务端交互的基本写法。

## 前端请求流程

在 NG-ALAIN 中，一个完整的前端 UI 交互到服务端处理流程是这样的：

1. 首次启动 Angular 执行 `APP_INITIALIZER`；
2. UI 组件交互操作；
3. 使用封装的 [_HttpClient](/theme/http) 发送请求；
4. 触发用户认证拦截器 [@delon/auth](/auth/getting-started)，统一加入 `token` 参数；
    - 若未存在 `token` 或已过期中断后续请求，直接跳转至登录页；
5. 触发默认拦截器，统一处理前缀等信息；
6. 获取服务端返回；
7. 触发默认拦截器，统一处理请求异常、业务异常等；
8. 数据更新，并刷新 UI。

### 拦截器

默认情况下在根模块注册了两个拦截器 [SimpleInterceptor](https://github.com/ng-alain/delon/blob/master/packages/auth/token/simple/simple.interceptor.ts) 和 [DefaultInterceptor](https://github.com/ng-alain/ng-alain/blob/master/src/app/core/net/default.interceptor.ts)，且执行顺序按注册顺序执行。

**SimpleInterceptor**

[用户认证](/docs/auth)内置用于自动为请求添加 `token` 参数的拦截器。这里还有一个叫 [JWTInterceptor](https://github.com/ng-alain/delon/blob/master/packages/auth/token/jwt/jwt.interceptor.ts) 拦截器，是一个标准 JWT 规范，若后端采用标准JWT可以直接换成JWTInterceptor拦截器。

**DefaultInterceptor**

[DefaultInterceptor](https://github.com/ng-alain/ng-alain/blob/master/src/app/core/net/default.interceptor.ts) 拦截器只是提供一个拦截器的写法，默认包含了统一处理服务器请求前缀、处理请求异常及业务异常的示例代码，你可以根据你自己的需求做调整。

**注意点**

我们可以把拦截器 `intercept` 方法内，以 `next.handle(req)` 为分界点，前部分为请求前，`pipe` 部分为接收后。这样会更明确知道哪一部分是请求前要做，哪一部分是请求后会执行的。有关更多拦截器知识请参考官网。

## 开发环境

正常情况下开发环境和生产环境不是同一个后端请求源，实际可以通过配置 [environment](https://github.com/ng-alain/ng-alain/tree/master/src/environments) 目录下 [environment.ts](https://github.com/ng-alain/ng-alain/blob/master/src/environments/environment.ts) 和 [environment.prod.ts](https://github.com/ng-alain/ng-alain/blob/master/src/environments/environment.prod.ts) 改变不同环境的请求源。

> environment 实际是一个JSON对象，你可以组织不同形式来满足多请求源的问题。

## Mock

有时候希望优先开发前端时，可以利用 @delon/mock 来模拟请求数据，实际原理是利用拦截器，对匹配的URL直接返回数据，而不是发送一个HTTP请求，默认情况下只对测试环境有效。当然通常情况下你需要确保 Mock 接口的数据与后端保持一致，你可以在 `_mock` 目录下创建相应的 Mock 接口：

```ts
export const USERS = {
    'GET /users': { users: [1, 2], total: 2 }
}
```

因此对于测试环境下当遇到 `/users` 请求直接返回 `{ users: [1, 2], total: 2 }` 数据。有关更多 Mock 语法和使用方式参考[这里](/docs/mock)。

**注：** 当你不需要某个请求的 Mock 接口时，务必要注释掉或移除它。

## 常见问题

**Q：** 请求可能被拒绝或直接返回 `401` ?

脚手架默认情况下使用了 `@delon/auth` 的 `SimpleInterceptor` 拦截器，导致在请求过程中若发现无法获取 Token 时会直接返回错误。

[用户认证](/docs/auth)这个过程是中台必备的。
