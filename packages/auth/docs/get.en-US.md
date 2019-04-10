---
order: 10
title: 
  en-US: Get Token
  zh-CN: 获取Token
type: Documents
---

Token's acquisition is divided into two categories, one is its own user authentication center, and the other is social login (essentially, it needs to go to its own user authentication center).

## User authentication center

Generally speaking, the backend will provide a URL authentication address. We can send the user name and password entered by the user to the user authentication center just like a normal HTTP request. Finally, we will return a user information containing the Token. Therefore, you only need to use this [Token Information Store](/auth/set).

## Social login

A complete social login takes about two steps:

- Open a third-party authorization box
- Get the authentication information after the callback and [Token Information Store](/auth/set)


### Turn on

`SocialService` provides a `open()` method to open a login box. By default it is not registered in any module, because `@delon/auth` thinks that such a service is usually only generated during the login process, so there is no need to inject it globally; only need to use the `SocialService` component Inject it, of course you have to be willing to inject it in the root module.


```ts
@Component({
  providers: [ SocialService ]
})
export class ProUserLoginComponent {
  constructor(private socialService: SocialService) {}
}
```

Finally, use the `type` attribute to specify what form to open an authorization box:

```ts
this.socialService.login(`//github.com/login/oauth/authorize?xxxxxx`, '/', { type: 'href' });
// Or use window.open to open the authorization window and subscribe to the results
this.socialService.login(`//github.com/login/oauth/authorize?xxxxxx`, '/', {
  type: 'window'
}).subscribe(res => {

});
```

### Callback

The callback page refers to the authentication information that is carried after the authorization is successful. In the past, you may write the authentication information directly to the cookie on the backend, and it will automatically write to the browser after the request ends. For the single page such as Angular, especially the front and rear ends. This approach becomes unachievable when deployed separately.

So `@delon/auth` is to take the information from the callback page URL address as the source of the acquisition, of course it will be limited by the URL itself (eg length); but I want to be a long enough Token value, you can get Token, then get user information.

You need to create a page for the callback, and the only thing the page has to do is call the `callback()` method on `ngOnInit` (for example: [callback.component.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/routes/callback/callback.component.ts#L24)):

```ts
// 1, default based on the current URL address
this.socialService.callback();
// 2, without `{ useHash: true }` routing
this.socialService.callback(`/callback?token=40SOJV-L8oOwwUIs&name=cipchk&uid=1`);
// 3, with `{ useHash: true }` route
this.socialService.callback(`/?token=40SOJV-L8oOwwUIs&name=cipchk&uid=1#/callback`);
// 4, specify the `ITokenModel` object
this.socialService.callback(<ITokenModel>{
  token: '123456789',
  name: 'cipchk',
  id: 10000,
  time: +new Date
});
```

`callback()` will automatically convert the URL to the effect of `ITokenModel`.

> Note: The route for `{ useHash: true }` does not support callbacks in many third-party authorization boxes. If it is your own account system, you can still use the URL form in the third example.
