---
order: 4
title:
  en-US: Network
  zh-CN: 网络请求
type: Basic
---

`ng-alain` There are two default processings for any network request.

## 1、Expand HttpClient

`@delon/theme` Contains a class called [_HttpClient](//github.com/cipchk/delon/blob/master/src/core/theme/services/http/http.client.ts), The essence is calling Angular's  `HttpClient`, just wrapping add `loading`.

We know that ng-zorro-antd is flooded with a large number of `nzLoading` attributes, which allows for a more user-friendly loading of web requests so that we do not have to maintain a` loadind` variable on every business page.

Of course, not only that, `_HttpClient` Also unified processing of all time data format for the timestamp, Which for the front-end state to ensure the consistency of the data has a good effect.

## 2、Interceptor

The benefits of interceptors are self-evident;Uniform handling server request prefix, Uniform add `token` for each request, And so on.

The `src/app/core/net/default.interceptor.ts` file provides an implementation of the interceptor, You can tailor to your own needs.
