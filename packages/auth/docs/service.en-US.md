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

## API

### Property

| Name          | Type           | Description                                              |
|---------------|----------------|----------------------------------------------------------|
| `[login_url]` | `string`       | Get the login address of `DelonAuthConfig` configuration |
| `[referrer]`  | `AuthReferrer` | Get routing before authorization failure                 |

### Method

| Name | Return Type | Description |
| ----- | --- | --- |
| `change()` | `Observable<ITokenModel>` | Token changed callback |
| `set(data: ITokenModel)` | `boolean` | Set Token |
| `get(type?: any)` | `ITokenModel` | Get Token |
| `clear()` | `void` | Clear Token |
