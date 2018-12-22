---
order: 15
title: 存储Token
type: Documents
---

## 如何使用

`ITokenService` 接口（默认实现 `TokenService`），只有四个方法及 `login_url` 属性：

- `set(data: ITokenModel): boolean` 设置认证信息，同时触发 `change`
- `get(): ITokenModel` 获取认证信息
- `clear()` 清除认证信息，同时触发 `change` 参数为 `null`
- `change(): Observable<ITokenModel>` 订阅认证信息变更回调
- `login_url` 获取登录地址，等同 `forRoot()` 所配置的值

因此，当登录过程中后端返回相应的认证信息时，只要符合 `ITokenModel` 接口对象，都可以调用　`set` 方法将认证存储至 `IStore` （默认实现 `LocalStorageStore`） 当中。

```ts
constructor(@Inject(DA_SERVICE_TOKEN) service: ITokenService) {
  service.set({ token: `asdf` });

  service.get().token; // output: asdf
}
```

## 存储类型

默认是采用 `LocalStorageStore` 持久化存储，你可以在 `delon.module.ts` 或根模块里变更其他存储方式。

```ts
export class DelonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DelonModule,
      providers: [
        { provide: DA_STORE_TOKEN, useClass: MemoryStore }
      ]
    };
  }
}
```

包含三种存储类型：

### LocalStorageStore

`localStorage` 存储，关掉浏览器后**不丢失**。

### SessionStorageStore

`sessionStorage` 存储，关掉浏览器后**丢失**。

### MemoryStore

内存存储，关掉浏览器标签后**丢失**。
