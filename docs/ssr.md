---
order: 110
title: 服务端渲染（SSR）
type: Dev
---

本文描述的是 NG-ALAIN 如何支持服务端渲染（SSR）。

> NG-ALAIN **不推荐**在中后台使用服务端渲染（SSR），这是因为中后台本身对于SSR所带来的好处远大于开发带来的麻烦，但不管怎么样在许多人的要求下，从 `9.5` 版本开始，已经对所有 `@delon/*` 类库支持服务端渲染。

## 开始之前

在开始之前请先阅读以下文章，它们能够更加快速让你了解 Angular 服务端渲染是如何工作的：

 - [Angular Universal：Angular 统一平台简介](https://angular.cn/guide/universal)
 - [Partial Server Side Rendering with Angular 9 and How to Deploy it](https://www.cnc.io/en/blog/angular-server-side-rendering)

## 教程

### 添加 `@nguniversal/express-engine`

在一个完整的 NG-ALAIN 项目下，执行以下命令：

```bash
ng add @nguniversal/express-engine
```

最后运行：

```bash
npm run dev:ssr
```

此时会以 SSR 的形式运行 NG-ALAIN。

但如果采用默认 `LocalStorageStore` 来存储 Token 的情况下，会提示找不到 `localStorage` 的错误，这是因为服务端并没有这些，它们可能还包含 `window`、`document`、`sessionStorage` 等。

因此，要想在中后台很好的支持 SSR，需要分析所依赖的第三方类库是否支持 SSR，如果没有必须手动处理在服务端下不渲染这些组件。

### 丢失Token

服务端是无状态的，因此判断请求是否有效授权，目前通用的做法是将 Token 存储在 Cookie 下，在服务端接收请求时再根据 Cookies 来获取 Token 信息。

虽然 NG-ALAIN 提供 `CookieStorageStore` 但它并不支持服务端 SSR 访问 Cookie，因此需要手动构建针对 SSR 的 Token 持久化存储。

推荐使用 [@ngx-utils/cookies](https://github.com/ngx-utils/cookies) 来处理 Cookies，它同时支持客户端与服务端。

> **注意：** 受限于 [#20](https://github.com/ngx-utils/cookies/issues/20) 的原因，由于一直未处理，有人专门解决了这个问题并发布一个新类库 [ngx-utils-cookies-port](https://www.npmjs.com/package/ngx-utils-cookies-port)，暂时只能使用它来代替 `@ngx-utils/cookies`，用法一模一样只是模块名换一下，在修复之后再换回来。

要创建一个符合 `@delon/auth` 接口持久化存储类，只需要继承 `IStore` 即可，例如：

```ts
import { Injectable } from '@angular/core';
import { IStore, ITokenModel } from '@delon/auth';
import { CookiesService } from 'ngx-utils-cookies-port';

@Injectable()
export class AuthStorageStore implements IStore {
  constructor(private cookies: CookiesService) {}

  get(key: string): ITokenModel {
    return JSON.parse(this.cookies.get(key) || '{}') || {};
  }

  set(key: string, value: ITokenModel | null): boolean {
    this.cookies.put(key, JSON.stringify(value));
    return true;
  }

  remove(key: string) {
    this.cookies.remove(key);
  }
}
```

最后，在 `global-config.module.ts` 内重新注册它：

```diff
 const alainProvides = [
   { provide: ALAIN_CONFIG, useValue: alainConfig },
+  { provide: DA_STORE_TOKEN, useClass: AuthStorageStore },
 ];
```

**注意：这里依然需要注册新增的模块，方法请参考 [@ngx-utils/cookies](https://github.com/ngx-utils/cookies#getting-started) 说明。**

`@ngx-utils/cookies` 内部会根据 `REQUEST` 来获取当前的请求头信息，因此，我们还需要修改 `server.ts`：

```diff
  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, {
      req,
+     res,
      providers: [
        { provide: APP_BASE_HREF, useValue: req.baseUrl },
+       { provide: 'REQUEST', useValue: req },
+       { provide: 'RESPONSE', useValue: res },
      ],
    });
  });
```
