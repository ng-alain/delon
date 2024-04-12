---
order: 10
title: 常见问题
type: Documents
---

## 如何忽略某个请求

在调用请求时，加上 `ALLOW_ANONYMOUS`。

```ts
this.http.post(`login`, {
 name: 'cipchk', pwd: '123456'
}, null, {
 context: new HttpContext().set(ALLOW_ANONYMOUS, true)
});
```

## 如何捕获无Token时被拦截信息？

```ts
// 利用订阅 Error
this.http.get('/user').subscribe(
  res => console.log('success', res),
  err => console.error('error', err)
);
// 或使用 catchError
this.http.get('/user').pipe(
  catchError(err => {
    console.error('error', err);
    return of({});
  })
).subscribe();
```
