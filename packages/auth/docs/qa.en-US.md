---
order: 10
title: QA
type: Documents
---

## How to ignore a request

When calling the request, add `ALLOW_ANONYMOUS`.

```ts
this.http.post(`login`, {
  name: 'cipchk', pwd: '123456'
}, null, {
  context: new HttpContext().set(ALLOW_ANONYMOUS, true)
});
```

## How to capture intercepted information when there is no Token?

```ts
// Use subscription Error
this.http.get('/user').subscribe(
  res => console.log('success', res),
  err => console.error('error', err)
);
// Or use catchError
this.http.get('/user').pipe(
  catchError(err => {
    console.error('error', err);
    return of({});
  })
).subscribe();
```
