---
order: 3
title: Interceptor
type: Documents
---

# 写在前面

搭配 `httpCacheInterceptor` Http 拦截器，可以将缓存应用到 Http 请求当中。它只有几个特征：

- 支持缓存过期时间
- 支持自定义缓存 KEY
- 支持任何 Http 请求、任何数据格式
- 符合 Http 缓存响应标准 `Cache-Control`

# 如何使用

在 `withInterceptors` 中引入 `httpCacheInterceptor`：

```ts
provideHttpClient(withInterceptors([httpCacheInterceptor]))
```
