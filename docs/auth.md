---
order: 40
title:
  en-US: Auth
  zh-CN: 用户认证
type: Advance
---

## 写在前面

`@delonn/auth` 是对认证过程进一步处理，通常其核心在于 Access token 的获取、使用环节，因此将集中解决以下三个问题：

+ 如何获取认证信息行为方式，例如：账密、社会化登录Github等
+ 如何存取认证信息，监听认证信息变化
+ 何时使用认证信息，区分不同的认证方式的使用规则，例如：JWT

`@delonn/auth` 并不会关心用户界面是怎么样，只需要当登录成功后将后端返回的数据交给 `ITokenService`，它会帮你存储在 `localStorage` 当中（默认情况下）；当发起一个 http 请求时，它会在自动在 `header` 当中加入相应的 token 信息。

因此，`@delon/auth` 不限于 ng-alain 脚手架，任何 Angular 项目都可以使用它。

> `@delon/auth` 只是解决认证环节，有关于权限控制可以使用 `@delon/acl`。

**Token**

`@delonn/auth` 认为请求过程中所需要的一个用于校验有效信息称它为 `Token` 值，不管是采用 JWT 的 `Authorization` 参数，OAuth2 的 `access_token` 等其本质是一串加密字符串。这也是每一次发送请求时所携带的值，因此在 `@delonn/auth` 中看到只有一个叫 `ITokenModel` 接口用于表述认证信息，且只有一个 `token` 的字符串属性。

目前它衍生两种不同校验规则：SWT、JWT，相对应为 `SimpleTokenModel`、`JWTTokenModel`，后者具有解析 `payload` 能力，当然有任何特殊都可以自行实现 `ITokenModel` 接口。

**模块**

`@delon/auth` 只有一些接口、服务，因此建议在根模块注入即可：

```ts
import { DelonAuthModule, SimpleInterceptor } from '@delon/auth';

imports: [
    // 注入模块
    DelonAuthModule.forRoot({
        login_url: `/pro/user/login`
    })
],
providers: [
    // 相应的HTTP拦截器
    { provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true}
]
```

## 如何获取

获取认证信息取决于后端返回的具体值，只需要在返回后参照**如何存取**小节将认证信息交给 `ITokenService` 即可。

一般来说第三方授权登录属于账密体系额外的一种用于快速登录的方式，因此从页面点击至第三方授权再返回这一连贯动作多多少少会涉及到自身后端的处理，我想很少有人会完全依赖第三方授权的 Access token 作为后端校验的对象。

基于上述，`@delon/auth` 针对这一部分只做了两件事：

- 如何打开第三方授权框
    - 页跳转
    - 使用 `window.open()`
- 简化回调后获取认证信息

### 打开

`SocialService` 提供了 `open()` 方法，用于打开一个登录框。默认情况下它本身并不在注册到任何模块当中，因为 `@delon/auth` 认为需要这类服务通常只会在登录过程中产生，因此没有必要在全局注入；只需要在使用 `SocialService` 对应组件中注入即可，当然你要愿意也可以在根模块中注入。

```ts
@Component({
    providers: [ SocialService ]
})
export class ProUserLoginComponent {
    constructor(private socialService: SocialService) {}
}
```

最后，利用 `type` 属性指定以采用什么形式打开一个授权框：

```ts
this.socialService.login(`//github.com/login/oauth/authorize?xxxxxx`, '/', { type: 'href' });
// 或使用 window.open 打开授权框并订阅结果
this.socialService.login(`//github.com/login/oauth/authorize?xxxxxx`, '/', {
    type: 'window'
}).subscribe(res => {

});
```

### 回调

回调页面是指授权成功后携带的认证信息；以往你可能直接在后端将认证信息写入 Cookie 会自动在请求结束后写入浏览器，而对于 Angular 这类单页而言，特别是前后端分离部署时，这种方式变成无法实现。

因此 `@delon/auth` 是从回调页 URL 地址上携带信息作为获取源，当然它会受 URL 本身受限（例如：长度）；但我想对一个 Token 值是足够长的，你可以获取到 Token，再获取用户信息。

需要创建一个用于回调的页面，而页面唯一要做的就是在 `ngOnInit` 时调用 `callback()` 方法（例如：[callback.component.ts](https://github.com/cipchk/ng-alain/blob/master/src/app/routes/callback/callback.component.ts#L24)）：

```ts
// 1、默认根据当前URL地址
this.socialService.callback();
// 2、非 `{ useHash: true }` 路由
this.socialService.callback(`http://ng-alain.com/callback?token=40SOJV-L8oOwwUIs&name=cipchk&uid=1`);
// 3、带有 `{ useHash: true }` 路由
this.socialService.callback(`http://ng-alain.com/?token=40SOJV-L8oOwwUIs&name=cipchk&uid=1#/callback`);
// 4、指定 `ITokenModel` 对象
this.socialService.callback(<ITokenModel>{
    token: '123456789',
    name: 'cipchk',
    id: 10000,
    time: +new Date
});
```

`callback()` 会把URL自动转换成效的 `ITokenModel`。

> 注：对于 `{ useHash: true }` 的路由在很多第三方授权框是不支持回调，若是自己的账号体系，你依然可以使用第3种示例中的URL形式。

## 如何存取

`ITokenService` 接口（默认实现 `TokenService`），只有四个方法及 `login_url` 属性：

- `set(data: ITokenModel): boolean` 设置认证信息，同时触发 `change`
- `get(): ITokenModel` 获取认证信息
- `clear()` 清除认证信息，同时触发 `change` 参数为 `null`
- `change(): Observable<ITokenModel>` 订阅认证信息变更回调
- `login_url` 获取登录地址，等同 `forRoot()` 所配置的值

因此，当登录过程中后端返回相应的认证信息时，只要符合 `ITokenModel` 接口对象，都可以调用　`set` 方法将认证存储至 `IStore` （默认实现 `LocalStorageStore`） 当中。

```ts
constructor(@Inject(DELON_AUTH_TOKEN_SERVICE_TOKEN) service: ITokenService) {
    service.set({ token: `asdf` });

    service.get().token; // output: asdf
}
```

### 存储类型

默认是采用 `LocalStorageStore` 持久化存储，你可以在 `delon.module.ts` 或根模块里变更其他存储方式。

```ts
export class DelonModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: DelonModule,
            providers: [
                { provide: DA_STORE_TOKEN, useClass: MemoryStore }
            ]
        };
    }
}
```

包含三种存储类型：

**LocalStorageStore**

`localStorage` 存储，关掉浏览器后**不丢失**。

**SessionStorageStore**

`sessionStorage` 存储，关掉浏览器后**丢失**。

**MemoryStore**

内存存储，关掉浏览器标签后**丢失**。

## 如何使用

通过HTTP拦截器在每一个请求中加入相应的认证信息，这是再好不过。`@delonn/auth` 实现两种不同风格拦截器。

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

### 如何加载

默认情况下 `DelonAuthModule.forRoot()` 是不会加载任何HTTP拦截器，这需要你手工在你的相应的模块中加上：

```ts
{ provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true }
```

## 示例

[DEMO](https://cipchk.github.io/ng-alain/passport/login)，账密或其他登录方式登录，并观察浏览器 localStorage 存储数据的变化。

## API

### DelonAuthConfig

| 参数名 | 类型 | 默认值 | 描述 |
| ----- | --- | --- | --- |
| `store_key` | `string` | `_token` | localStorage 的存储KEY值 |
| `token_invalid_redirect` | `boolean` | `true` | 无效时跳转至登录页，包括：无效token值、token已过期（限JWT） |
| `token_exp_offset` | `number` | `10` | JWT token过期时间偏移值（单位：秒） |
| `token_send_key` | `string` | `token` | 发送token参数名 |
| `token_send_template` | `string` | `${token}` | 发送token模板，以 `${属性名}` 表示占位符，属性名要确保存在否则以空字符代替 |
| `token_send_place` | `header,body,url` | `header` | 发送token参数位置 |
| `login_url` | `string` | `/login` | 登录页路由地址 |
| `ignores` | `RegExp[]` | `[ /\/login/, /assets\// ]` | 忽略TOKEN的URL地址列表 |
| `allow_anonymous_key` | `string` | `_allow_anonymous` | 允许匿名登录KEY，若请求参数中带有该KEY表示忽略TOKEN |

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

## 如何删除

ng-alain 脚手手默认在根模块（`AppModule1`）导入 `@delon/auth` 模块，并使用了 `SimpleInterceptor` 拦截器；移除包含：

- `app.module.ts` 的 `@delon/auth` 模块导入语句
- 删除 `@delon/auth` 包体

## 常见问题

### 如何捕获无Token时被拦截信息？

```ts
// 利用订阅 Error
this.http.get('/user').subscribe(
    res => console.log('success', res),
    err => console.error('error', err)
);
// 或使用 catchError
this.http.get('/user').pipe(
    catchError(err => {
        console.error('error', err);
        return of({});
    })
).subscribe();
```
