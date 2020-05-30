---
order: 1000
title: FAQ
type: Documents
---

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
