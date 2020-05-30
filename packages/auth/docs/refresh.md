---
order: 30
title: 刷新Token
type: Documents
---

每个 Token 都会有一个过期时间，对于一些过期时间较短而言会导致跳转至登录页，NG-ALAIN 提供两种刷新 Token 的解决方案：

- 监听 Http 请求，若返回 `401` 重新发起刷新 Token 请求之后再重新发送 Http 请求
- 监听 Token 过期时间，并在过期之前发起一次刷新 Token 请求

## 监听 Http 请求



## 监听 Token 过期时间

