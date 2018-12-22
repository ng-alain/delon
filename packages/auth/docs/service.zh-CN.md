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

## API

### 属性

| 参数名        | 类型               | 描述                                  |
|---------------|--------------------|-------------------------------------|
| `[login_url]` | `string`           | 获取 `DelonAuthConfig` 配置的登录地址 |
| `[referrer]`  | `AuthReferrer` | 获取授权失败前路由信息                |

### 方法

| 方法名                   | 返回类型                  | 描述                |
|--------------------------|---------------------------|-------------------|
| `change()`               | `Observable<ITokenModel>` | 监听 Token 变化回调 |
| `set(data: ITokenModel)` | `boolean`                 | 设置 Token          |
| `get(type?: any)`        | `ITokenModel`             | 获取 Token          |
| `clear()`                | `void`                    | 清空 Token          |
