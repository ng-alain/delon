---
order: 3
title: DrawerHelper
subtitle: Drawer Helper
type: Service
---

Based on the `NzDrawerService` package, it solves some known issues:

- More friendly handling callbacks
- Support responsive

## create

```ts
this.drawerHelper.create('Edit', FormEditComponent, { i }).subscribe(res => this.load());
// Ok callback
// 1. considered successful
this.NzDrawerRef.close(data);
this.NzDrawerRef.close(true);

// Close
this.NzDrawerRef.close();
this.NzDrawerRef.close(false);

// Close all open drawers
this.DrawerHelper.closeAll();
```

There are includes `create` & `static` methods to open the normal & static drawer.

**Custom component HTML template**

```html
Your body content
<div class="drawer-footer">
  // The bottom toolbar need wrapped by `drawer-footer`
  <button nz-button [nzType]="'default'" (click)="cancel()">
    Cancel
  </button>
  <button nz-button [nzType]="'primary'" (click)="ok()">
    OK
  </button>
</div>
```

If you don't bottom toolbar, you need specify `footer: false`.

## API

| Property | Description  | Type  | Default   |
| --- | --- | --- | --- |
| `size` | Specify drawer size, responsive only supports non-numeric values | `sm,md,lg,xl,number` | `md` |
| `footer` | Whether toolbar | `boolean` | `true` |
| `footerHeight` | Toolbar height | `number` | `55` |
| `exact` | Exact match return value, default is `true`, If the return value is not null (`null` or `undefined`) is considered successful, otherwise it is considered error. | `boolean` | `true` |
| `drawerOptions` | Drawer raw parameters [NzDrawerOptions](https://ng.ant.design/components/drawer/en#nzdraweroptions) 参数 | `NzDrawerOptions` | - |


### Method

- `closeAll` Close all open drawers
