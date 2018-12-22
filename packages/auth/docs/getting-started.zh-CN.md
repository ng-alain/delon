---
order: 1
title: 开始使用
type: Documents
module: DelonAuthModule
config: DelonAuthConfig
---

## 写在前面

@delon/auth 是对认证过程进一步处理，通常其核心在于 Access token 的获取、使用环节，因此将集中解决以下三个问题：

+ 如何获取认证信息行为方式，例如：账密、社会化登录Github等
+ 如何存取认证信息，监听认证信息变化
+ 何时使用认证信息，区分不同的认证方式的使用规则，例如：JWT

@delon/auth 并不会关心用户界面是怎么样，只需要当登录成功后将 Token 信息转化为 `ITokenService` 类型，它会存储在 `localStorage` 当中（默认情况下）。当你操作 HTTP 请求时，它会自动在 `header` （或其他地方） 里加入 Token 信息。

因此，@delon/auth 不限于 ng-alain 脚手架，任何 Angular 项目都可以使用它。

> @delon/auth 只是解决认证环节，有关于权限控制可以使用 [@delon/acl](/acl)。

### 流程

- 获取 Token
- 存储 Token
- 利用HTTP拦截器，将 Token 发送给后端

## 名词解释

### Token

@delon/auth 认为请求时需要发送的加密字符串称它为 Token 值，不管是采用 JWT 的 `Authorization` 参数，还是 OAuth2 的 `access_token`，这也是每个 HTTP 请求时所携带的值。 因此，`ITokenModel` 接口用于表述认证信息，且只有一个 `token` 属性。

### 认证风格

目前衍生两种风格：Simple Web Token （使用 `SimpleTokenModel`）、Json Web Token（使用 `JWTTokenModel`）具有解析 `payload` 能力。如果有特殊需求也可以自定义实现 `ITokenModel` 接口。

## 如何使用

安装 `@delon/auth` 依赖包：

```bash
yarn add @delon/auth
```

导入 `DelonAuthModule` 模块：

```typescript
import { DelonAuthModule, SimpleInterceptor } from '@delon/auth';

@NgModule({
  imports: [
    DelonAuthModule
  ],
  providers: [
    // 指定认证风格对应的HTTP拦截器
    { provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true}
  ]
})
export class AppModule { }
```

**为什么需要HTTP_INTERCEPTORS**

默认 `DelonAuthModule` 并不会注册任何HTTP拦截器，主要是因为 @delon/auth 提供了多种不同[认证风格](/auth/getting-started#认证风格)。

## DelonAuthConfig

| 参数名 | 类型 | 默认值 | 描述 |
| ----- | --- | --- | --- |
| `[store_key]` | `string` | `_token` | `localStorage` 的存储KEY值 |
| `[token_invalid_redirect]` | `boolean` | `true` | 无效时跳转至登录页，包括：无效token值、token已过期（限JWT） |
| `[token_exp_offset]` | `number` | `10` | JWT token过期时间偏移值（单位：秒） |
| `[token_send_key]` | `string` | Token | 发送token参数名 |
| `[token_send_template]` | `string` | `${token}` | 发送token模板，以 `${属性名}` 表示占位符，属性名要确保存在否则以空字符代替 |
| `[token_send_place]` | `header,body,url` | `header` | 发送token参数位置 |
| `[login_url]` | `string` | `/login` | 登录页路由地址 |
| `[ignores]` | `RegExp[]` | `[ /\/login/, /assets\// ]` | 忽略 URL 地址清单 |
| `[allow_anonymous_key]` | `string` | `_allow_anonymous` | 允许匿名登录标识号，若请求参数中带有该KEY表示忽略TOKEN |
| `[executeOtherInterceptors]` | `boolean` | `true` | 是否校验失效时命中后继续调用后续拦截器的 `intercept` 方法 |

你可以覆盖它们，例如：

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
