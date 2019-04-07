---
order: 20
title: 
  zh-CN: 发送Token
  en-US: Send Token
type: Documents
---

## Authentication style

It is better to add the corresponding authentication information to each request through the HTTP interceptor. `@delonn/auth` implements two separate HTTP interceptors based on two different authentication styles.

### SimpleInterceptor

The parameter name and its sending location can be specified via `DelonAuthConfig`, for example:

```ts
token_send_key = 'token';
token_send_template = 'Bearer ${token}';
token_send_place = 'header';
```

Indicates the `{ token: 'Bearer token_string' }` data in the `header` of each request.

### JWTInterceptor

It is a standard JWT sending rule that automatically adds `{ Authorization: 'Bearer token_string' }` to `header`.

### How to choose?

`SimpleInterceptor` is a very liberal style, you can put `token` in the request body, request header, etc.

`JWTInterceptor` is a JWT standard, which needs to ensure that the backend also uses such standards.

## How to load

By default `DelonAuthModule` does not load any HTTP interceptors, which requires you to manually add in your corresponding module:

```ts
{ provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true }
```

## Example

[DEMO](//ng-alain.github.io/ng-alain/#/passport/login), login or other login method, and observe the changes in the browser localStorage storage data.
