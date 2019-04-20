---
order: 10
title: 
  en-US: Get Token
  zh-CN: 获取Token
type: Documents
---

Token 的获取分为两大类，一是自己的用户认证中心，二是社会化登录（本质上还是需要走自己的用户认证中心）。

## 用户认证中心

一般来说后端会提供一个URL认证地址，我们可以像平常访问一个普通 HTTP 请求一样，将用户输入的用户名和密码等信息发送给用户认证中心，最后会返回一个用户信息包含 Token。因此，对于只需要将这此[Token信息存储](/auth/set)起来即可。

## 社会化登录

一个完整的社会化登录大概需要两个步骤：

- 打开第三方授权框
- 回调后获取认证信息并对[Token信息存储](/auth/set)

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

需要创建一个用于回调的页面，而页面唯一要做的就是在 `ngOnInit` 时调用 `callback()` 方法（例如：[callback.component.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/routes/callback/callback.component.ts#L24)）：

```ts
// 1、默认根据当前URL地址
this.socialService.callback();
// 2、非 `{ useHash: true }` 路由
this.socialService.callback(`/callback?token=40SOJV-L8oOwwUIs&name=cipchk&uid=1`);
// 3、带有 `{ useHash: true }` 路由
this.socialService.callback(`/?token=40SOJV-L8oOwwUIs&name=cipchk&uid=1#/callback`);
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
