---
order: 20
title: 发送Token
type: Documents
---

## 认证风格

通过HTTP拦截器在每一个请求中加入相应的认证信息，这是再好不过。`@delonn/auth` 根据两种不同认证风格，实现两种各自的HTTP拦截器。

### SimpleInterceptor

透过 `DelonAuthConfig` 可以指定参数名以及其发送位置，例如：

```ts
token_send_key = 'token';
token_send_template = 'Bearer ${token}';
token_send_place = 'header';
```

表示在每一个请求的 `header` 加上 `{ token: 'Bearer token_string' }` 数据。

### JWTInterceptor

它是一个标准JWT的发送规则，即在 `header` 自动加上 `{ Authorization: 'Bearer token_string' }`。

### 如何选择？

`SimpleInterceptor` 是一种自由度非常高的风格，你可以将 `token` 放在请求体、请求头等当中。

`JWTInterceptor` 是一个 JWT 标准，这需要确保后端也采用这类标准。

## 如何加载

默认情况下 `DelonAuthModule` 是不会加载任何HTTP拦截器，这需要你手工在你的相应的模块中加上：

```ts
{ provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true }
```

## 示例

[DEMO](//ng-alain.github.io/ng-alain/#/passport/login)，账密或其他登录方式登录，并观察浏览器 localStorage 存储数据的变化。
