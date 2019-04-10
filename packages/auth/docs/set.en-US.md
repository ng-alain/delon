---
order: 15
title: 
  zh-CN: 存储Token
  en-Us: Store Token
type: Documents
---

## How to use

The `ITokenService` interface (the default implementation of `TokenService`) has only four methods and the `login_url` attribute:

- `set(data: ITokenModel): boolean` Set authentication information and trigger `change`
- `get(): ITokenModel` Get authentication information
- `clear()` clears the authentication information and triggers the `change` parameter to be `null`
- `change(): Observable<ITokenModel>` Subscribe to authentication information change callback
- `login_url` Get the login address, equivalent to the value configured by `forRoot()`

Therefore, when the backend returns the corresponding authentication information during the login process, as long as the `ITokenModel` interface object is met, the `set` method can be called to store the authentication to `IStore` (the default implementation `LocalStorageStore`).

```ts
constructor(@Inject(DA_SERVICE_TOKEN) service: ITokenService) {
  service.set({ token: `asdf` });

  service.get().token; // output: asdf
}
```

## Storage type

The default is to use `LocalStorageStore` persistent storage, you can change other storage methods in `delon.module.ts` or root module.

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

Contains three storage types:

### LocalStorageStore

`localStorage` storage, **not lost after closing the browser**.

### SessionStorageStore

`sessionStorage` storage, **lost after closing the browser.

### MemoryStore

Memory storage, **lost after closing the browser tab.
