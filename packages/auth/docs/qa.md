---
order: 10
title: 常见问题
type: Documents
---

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
