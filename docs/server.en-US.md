---
order: 40
title: Work with Server
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

[User Authentication](/auth) has built-in interceptors for automatically adding `token` parameters to requests. There is also a [JWTInterceptor](https://github.com/ng-alain/delon/blob/master/packages/auth/token/jwt/jwt.interceptor.ts) interceptor, which is a standard JWT specification. If the backend uses standard JWT, it can be directly replaced with a JWTInterceptor interceptor.

**DefaultInterceptor**

[DefaultInterceptor](https://github.com/ng-alain/ng-alain/blob/master/src/app/core/net/default.interceptor.ts) The interceptor simply provides an interceptor. By default, it contains sample code that handles server request prefixes, handles request exceptions, and business exceptions. You can make adjustments based on your own needs.

**Important point**

We can put the `next.handle(req)` as the demarcation point in the interceptor `intercept` method. The first part is the request and the `pipe` part is the post. This will make it clearer which part is to be done before the request and which part will be executed after the request. For more information on interceptors, please refer to the official website.

## Development environment

Under normal circumstances, the development environment and the production environment are not the same back-end request source. You can actually configure it under the [environment](https://github.com/ng-alain/ng-alain/tree/master/src/environments) directory. [environment.ts](https://github.com/ng-alain/ng-alain/blob/master/src/environments/environment.ts) and [environment.prod.ts](https://github.com/ng-alain/ng-alain/blob/master/src/environments/environment.prod.ts) Change the request source for different environments.

> environment is actually a JSON object, you can organize different forms to meet the problem of multiple request sources.

## Mock

Sometimes when you want to develop the front-end first, you can use [@delon/mock](/mock) to simulate the request data. The actual principle is to use the interceptor to directly return the data to the matching URL instead of sending an HTTP request. By default, it is only valid for the test environment. Of course, you usually need to make sure that the data of the Mock interface is consistent with the backend. You can create the corresponding Mock interface in the `_mock` directory:

```ts
export const USERS = {
  'GET /users': { users: [1, 2], total: 2 }
}
```

So for the test environment, when the `/users` request is encountered, the `{users: [1, 2], total: 2 }` data is returned directly. See [here](/mock) for more Mock syntax and usage.

**Note:** When you don't need a Mock interface for a request, be sure to comment out or remove it.

## Cors

Most applications will be front-end is separate from the back-end, which leads to CORS factors when a request is made to the back end, such as:

```ts
http.get(`http://192.168.1.100/api/app`).subscribe();
```

> Note: If the request does not start with `http`, each request will add `environment.SERVER_URL` as the leading edge of the request URL.

The following error is returned directly:

```
Access to XMLHttpRequest at 'http://192.168.1.100/api/app' from origin 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

There are usually two ways to solve cross-domain problems. One is to allow the back-end development environment to directly support CORS requests (not recommended, but simplest), the second is to use Angular Cli to provide [Proxy Support](https://webpack.js.org/configuration/dev-server/#devserver-proxy), the development proxy server will forward the domain and port of the request sent by Angular to the backend Server, CORS is a security restriction of the browser. There is no problem with CORS before the proxy server and the backend server. This is why many people try to make it clear that they can be requested in Postman but not in Angular.

Assuming that all backend requests are prefixed with `/api`, you can configure all this prefix in `proxy.conf.js` to forward to the new backend, for example:

```js
module.exports = {
  '/api': {
    target: 'http://192.168.1.100/api',
    secure: false
  }
}
```

- `/api` Proxy path, domain is not supported
- `target` Proxy target address
- `secure` If the proxy target address is `https`, it should be set to `true`, otherwise it is `false`
- `pathRewrite` Rewrite the address, such as `pathRewrite: {'^/api':'/'}` to change the prefix `/api` to `/`
- `changeOrigin` Change the `host` of the host header to the target URL. Some backends will judge whether it is valid according to its value. You may need to set `true`
- `logLevel` Set to `debug` to display the message forwarded by the agent on the terminal

Abort more detail please refer to [Proxying to a backend server](https://angular.io/guide/build#proxying-to-a-backend-server), and for configuration description please refer to [http-proxy-middleware options](https://github.com/chimurai/http-proxy-middleware#options).

## Common problem

**Q:** The request may be rejected or returned directly to `401`?

Scaffolding uses the `SimpleInterceptor` interceptor of `@delon/auth` by default, which causes an error to be returned directly if a token cannot be obtained during the request.

[User Authentication](/auth) This process is a must for the middle office.
