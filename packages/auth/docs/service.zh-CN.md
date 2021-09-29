---
order: 2
title: TokenService
type: Documents
---

`ITokenService` 接口包含了一些对 Token 操作的服务类，例如获取当前 Token 信息：

```ts
constructor(@Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService) {
  console.log(tokenService.get().token);
  // 如果是 JWT
  console.log(tokenService.get<JWTTokenModel>(JWTTokenModel).token);
}
```

## 过期刷新

订阅 `refresh` 后 Token 过期时会自动触发，当后端支持 Token 刷新可以，可以在过期前刷新 Token 来延长用户授权时长。

> **建议** `refresh` 在整个应用中只订阅一次。

## API

### 属性

| 参数名 | 类型 | 描述 |
|-----|----|----|
| `[login_url]` | `string` | 获取 `DelonAuthConfig` 配置的登录地址 |
| `[referrer]` | `AuthReferrer` | 获取授权失败前路由信息 |
| `[refresh]` | `Observable<ITokenModel>` | 订阅刷新，订阅时会自动产生一个定时器，每隔一段时间进行一些校验；**注意** 会多次触发，请务必做好业务判断 |

### 方法

| 方法名 | 返回类型 | 描述 |
|-----|------|----|
| `change()` | `Observable<ITokenModel>` | 监听 Token 变化回调 |
| `set(data: ITokenModel)` | `boolean` | 设置 Token |
| `get(type?: any)` | `ITokenModel` | 获取 Token |
| `clear(options?: { onlyToken: boolean })` | `void` | 清空 Token |
