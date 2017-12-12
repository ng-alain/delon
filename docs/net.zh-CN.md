---
order: 4
title:
  en-US: Network
  zh-CN: 网络请求
type: Basic
---

ng-alain 默认下有两处对任何网络请求进行一些处理。

## 一、扩展 HttpClient

`@delon/theme` 包含了一个叫 [_HttpClient](//github.com/cipchk/delon/blob/master/src/core/theme/services/http/http.client.ts) 类，其本质还是调用 Angular 的 `HttpClient`，只是包裹了一个 `loading`。

我们知道 ng-zorro-antd 充斥着大量 `nzLoading` 属性，它可以让网络请求的加载有更友好的体验，这样我们无须在每一个业务页面维护一个 `loadind` 变量。

当然，不光如此，`_HttpClient` 还统一处理了所有时间数据格式为时间戳，这对于前端后离的状态下保证数据的一致性有很好的作用。

## 二、默认拦截器

拦截器的好处不言而喻；统一处理服务器请求前缀，统一对每一请求加上 `token` 等。

在 `src/app/core/net/default.interceptor.ts` 文件只是提供一种编码拦截器一个方式，你可以根据你自己的需求做调整。
