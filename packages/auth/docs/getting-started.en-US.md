---
order: 1
title: Getting Started
type: Documents
module: DelonAuthModule
config: DelonAuthConfig
---

## Foreword

@delon/auth is further processing of the authentication process, with a focus on three issues:

+ How to get the behavior of authentication information, such as: account, social login (Github, Facebook, etc.)
+ How to access authentication information and monitor changes in authentication information
+ When to use authentication information, for example: JWT

@delon/auth does not care about the user interface, it only needs to convert the Token information to the `ITokenService` type when the login is successful. It will be stored in `localStorage` (by default). When you manipulate an HTTP request, it automatically adds Token information to `header` (or elsewhere).

So, @delon/auth is not limited to ng-alain scaffolding, can be used with any Angular project.

> @delon/auth just solution authentication process. You can use [@delon/acl](/acl) for permission control.

### Process

- Get Token
- Store Token
- Send Token to the backend using the HTTP interceptor

## Definition

### Token

@delon/auth thinks that the encrypted string that needs to be sent when requesting is called the Token value, whether it is JWT `Authorization` parameter or OAuth2 `access_token` value, which is also the value carried by each HTTP request. Therefore, the `ITokenModel` interface is used to represent authentication information and has only one `token` attribute.

### Authentication Style

There are currently two styles: Simple Web Token (using `SimpleTokenModel`) and Json Web Token (using `JWTTokenModel`) with parsing `payload` capabilities. The `ITokenModel` interface can be customized if you have special requirements.

## Usage

Install `@delon/auth`:

```bash
yarn add @delon/auth
```

Import `DelonAuthModule` to your AppModule.

```typescript
import { DelonAuthModule, SimpleInterceptor } from '@delon/auth';

@NgModule({
  imports: [
    DelonAuthModule
  ],
  providers: [
    // Specify the HTTP interceptor corresponding to the authentication style
    { provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true}
  ]
})
export class AppModule { }
```

## DelonAuthConfig

| Name | Type | Default | Description |
| ----- | --- | --- | --- |
| `[store_key]` | `string` | `_token` | `localStorage` storage KEY value |
| `[token_invalid_redirect]` | `boolean` | `true` | Jump to login page if invalid, includs: invalid token, token expired (Only: JWT) |
| `[token_exp_offset]` | `number` | `10` | JWT token expiration time offset value (unit: second) |
| `[token_send_key]` | `string` | Token | Send token parameter name |
| `[token_send_template]` | `string` | `${token}` | Send a token template with a `${property name}` placeholder |
| `[token_send_place]` | `header,body,url` | `header` | Send token parameter position |
| `[login_url]` | `string` | `/login` | Login page routing address |
| `[ignores]` | `RegExp[]` | `[ /\/login/, /assets\// ]` | Ignore the list of URL addresses |
| `[allow_anonymous_key]` | `string` | `_allow_anonymous` | Anonymous login KEY identification, if the request parameter with the KEY is to ignore token |
| `[executeOtherInterceptors]` | `boolean` | `true` | Whether continue to call other interceptor `intercept` method after token missing |

You can override them, for example:

```ts
// delon.module.ts
import { DelonAuthConfig } from '@delon/auth';
export function delonAuthConfig(): DelonAuthConfig {
  return Object.assign(new DelonAuthConfig(), <DelonAuthConfig>{
    login_url: '/passport/login'
  });
}

@NgModule({})
export class DelonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DelonModule,
      providers: [
        { provide: DelonAuthConfig, useFactory: delonAuthConfig}
      ]
    };
  }
}
```
