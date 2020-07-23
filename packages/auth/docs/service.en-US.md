---
order: 2
title: TokenService
type: Documents
---

`ITokenService` contains some service class for Token operations, such as get current Token information:

```ts
constructor(@Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService) {
  console.log(tokenService.get().token);
  // When JWT
  console.log(tokenService.get<JWTTokenModel>(JWTTokenModel).token);
}
```

## Expired refresh

After subscribing to `refresh`, the token will be automatically triggered when it expires. When the backend supports Token refresh, the token can be refreshed before expiration to extend the user authorization period.

> **Recommendation** `refresh` only subscribe once in the application.

## API

### Property

| Name | Type | Description |
|------|------|-------------|
| `[login_url]` | `string` | Get the login address of `DelonAuthConfig` configuration |
| `[referrer]` | `AuthReferrer` | Get routing before authorization failure |
| `[refresh]` | `Observable<ITokenModel>` | Subscription refresh, automatically triggered when expired; **Note** It will be triggered multiple times, please make business process |

### Method

| Name | Return Type | Description |
|------|-------------|-------------|
| `change()` | `Observable<ITokenModel>` | Token changed callback |
| `set(data: ITokenModel)` | `boolean` | Set Token |
| `get(type?: any)` | `ITokenModel` | Get Token |
| `clear(options?: { onlyToken: boolean })` | `void` | Clear Token |
