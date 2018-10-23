---
order: 1
title: 开始使用
type: Documents
---

## 写在前面

`@delon/auth` 是对认证过程进一步处理，通常其核心在于 Access token 的获取、使用环节，因此将集中解决以下三个问题：

+ 如何获取认证信息行为方式，例如：账密、社会化登录Github等
+ 如何存取认证信息，监听认证信息变化
+ 何时使用认证信息，区分不同的认证方式的使用规则，例如：JWT

`@delon/auth` 并不会关心用户界面是怎么样，只需要当登录成功后将后端返回的数据交给 `ITokenService`，它会帮你存储在 `localStorage` 当中（默认情况下）；当发起一个 http 请求时，它会在自动在 `header` 当中加入相应的 token 信息。

因此，`@delon/auth` 不限于 ng-alain 脚手架，任何 Angular 项目都可以使用它。

> `@delon/auth` 只是解决认证环节，有关于权限控制可以使用 `@delon/acl`。

### 流程

- 获取 `token`
- 存储 `token`
- 利用HTTP拦截器，将 `token` 发送给后端

## 名词解释

### Token

`@delon/auth` 认为请求过程中所需要的一个用于校验有效信息称它为 `Token` 值，不管是采用 JWT 的 `Authorization` 参数，OAuth2 的 `access_token` 等其本质是一串加密字符串。这也是每一次发送请求时所携带的值，因此在 `@delonn/auth` 中看到只有一个叫 `ITokenModel` 接口用于表述认证信息，且只有一个 `token` 的字符串属性。

### 认证风格

目前它衍生两种不同校验风格：Simple Web Token、Json Web Token，相对应为 `SimpleTokenModel`、`JWTTokenModel`，后者具有解析 `payload` 能力，当然有任何特殊需求都可以自行实现 `ITokenModel` 接口。

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
    DelonAuthModule.forRoot()
  ],
  providers: [
    // 相应的HTTP拦截器
    { provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true}
  ]
})
export class AppModule { }
```

**为什么需要HTTP_INTERCEPTORS**

默认 `DelonAuthModule` 并不会注册任何HTTP拦截器，主要是因为 `@delon/auth` 提供了多种不同[认证风格](/auth/getting-started#认证风格)。

## 配置信息

### DelonAuthConfig

| 参数名 | 类型 | 默认值 | 描述 |
| ----- | --- | --- | --- |
| `[store_key]` | `string` | `_token` | localStorage 的存储KEY值 |
| `[token_invalid_redirect]` | `boolean` | `true` | 无效时跳转至登录页，包括：无效token值、token已过期（限JWT） |
| `[token_exp_offset]` | `number` | `10` | JWT token过期时间偏移值（单位：秒） |
| `[token_send_key]` | `string` | `token` | 发送token参数名 |
| `[token_send_template]` | `string` | `${token}` | 发送token模板，以 `${属性名}` 表示占位符，属性名要确保存在否则以空字符代替 |
| `[token_send_place]` | `header,body,url` | `header` | 发送token参数位置 |
| `[login_url]` | `string` | `/login` | 登录页路由地址 |
| `[ignores]` | `RegExp[]` | `[ /\/login/, /assets\// ]` | 忽略TOKEN的URL地址列表 |
| `[allow_anonymous_key]` | `string` | `_allow_anonymous` | 允许匿名登录KEY，若请求参数中带有该KEY表示忽略TOKEN |

你可以随时覆盖它们，例如：

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
