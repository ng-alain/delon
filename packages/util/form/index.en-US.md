---
title: form
subtitle: Reactive Forms
type: Tools
---

## MatchControl

Match two control values, for examples:

```ts
this.form = new FormGroup({
  pwd: new FormControl(''),
  repwd: new FormControl(''),
}, {
  validators: MatchControl('pwd', 'repwd'),
});
```

## _Validators

A set of validators for reactive forms, including:

- `_Validators.num` Wheter is number
- `_Validators.int` Wheter is integer
- `_Validators.decimal` Wheter is decimal
- `_Validators.idCard` Wheter is People's Republic of China identity card
- `_Validators.mobile` Wheter is mobile (China)
- `_Validators.url` Wheter is url address
- `_Validators.ip4` Wheter is IP address (Support v4, v6)
- `_Validators.color` Wheter is color
- `_Validators.chinese` Wheter is chinese

Every method has a corresponding form validation:

```ts
this.valForm = fb.group({
  // is mobile
  mobile: [null, Validators.compose([Validators.required, _Validators.mobile])]
});
```
