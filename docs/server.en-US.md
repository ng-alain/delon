---
order: 40
title:
  en-US: Work with Server
  zh-CN: 和服务端进行交互
type: Dev
---

NG-ALAIN is a single-page application based on the Angular technology stack. We provide development models for front-end code and native analog data.
Work in the form of the Restful API with the server application of any technology stack. The basics of interacting with the server are briefly described below.
## Front-end request process

In NG-ALAIN, a complete front-end UI interaction to the server-side processing flow looks like this:

1. Start Angular for the first time to execute `APP_INITIALIZER`;
2. UI component interaction;
3. Send the request using the encapsulated [_HttpClient](/theme/http);
4. Trigger the user authentication interceptor [@delon/auth](/auth/getting-started) and add the `token` parameter uniformly;
    - If there is no `token` or an expired interrupt subsequent request, jump directly to the login page;
5. Trigger the default interceptor to process the prefix and other information;
6. Get the server back;
7. Trigger the default interceptor to handle request exceptions, business exceptions, etc.
8. Update the data and refresh the UI.

### Interceptor

By default, two interceptors are registered in the root module.[SimpleInterceptor](https://github.com/ng-alain/delon/blob/master/packages/auth/token/simple/simple.interceptor.ts) with [DefaultInterceptor](https://github.com/ng-alain/ng-alain/blob/master/src/app/core/net/default.interceptor.ts)And the execution order is executed in the registration order.

**SimpleInterceptor**

[User Authentication](/docs/auth) has built-in interceptors for automatically adding `token` parameters to requests. There is also a [JWTInterceptor](https://github.com/ng-alain/delon/blob/master/packages/auth/token/jwt/jwt.interceptor.ts) interceptor, which is a standard JWT specification. If the backend uses standard JWT, it can be directly replaced with a JWTInterceptor interceptor.

**DefaultInterceptor**

[DefaultInterceptor](https://github.com/ng-alain/ng-alain/blob/master/src/app/core/net/default.interceptor.ts) The interceptor simply provides an interceptor. By default, it contains sample code that handles server request prefixes, handles request exceptions, and business exceptions. You can make adjustments based on your own needs.

**Important point**

We can put the `next.handle(req)` as the demarcation point in the interceptor `intercept` method. The first part is the request and the `pipe` part is the post. This will make it clearer which part is to be done before the request and which part will be executed after the request. For more information on interceptors, please refer to the official website.

## Development environment

Under normal circumstances, the development environment and the production environment are not the same back-end request source. You can actually configure it under the [environment](https://github.com/ng-alain/ng-alain/tree/master/src/environments) directory. [environment.ts](https://github.com/ng-alain/ng-alain/blob/master/src/environments/environment.ts) and [environment.prod.ts](https://github.com/ng-alain/ng-alain/blob/master/src/environments/environment.prod.ts) Change the request source for different environments.

> environment is actually a JSON object, you can organize different forms to meet the problem of multiple request sources.

## Mock

Sometimes when you want to develop the front-end first, you can use @delon/mock to simulate the request data. The actual principle is to use the interceptor to directly return the data to the matching URL instead of sending an HTTP request. By default, it is only valid for the test environment. Of course, you usually need to make sure that the data of the Mock interface is consistent with the backend. You can create the corresponding Mock interface in the `_mock` directory:

```ts
export const USERS = {
    'GET /users': { users: [1, 2], total: 2 }
}
```

So for the test environment, when the `/users` request is encountered, the `{users: [1, 2], total: 2 }` data is returned directly. See [here](/docs/mock) for more Mock syntax and usage.

**Note: ** When you don't need a Mock interface for a request, be sure to comment out or remove it.

## Common problem

**Q:** The request may be rejected or returned directly to `401`?

Scaffolding uses the `SimpleInterceptor` interceptor of `@delon/auth` by default, which causes an error to be returned directly if a token cannot be obtained during the request.

[User Authentication](/docs/auth) This process is a must for the middle office.
