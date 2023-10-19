---
order: 3
title: ModalHelper
subtitle: Modal Helper
type: Service
---

Based on the `NzModalService` package, it solves some known issues:

- More friendly handling callbacks

## Usage

```ts
this.modalHelper.create(FormEditComponent, { i }).subscribe(res => this.load());

// Ok callback, Where `nzModalRef` refers to the variable name of the target component in the constructor `NzModalRef`
// 1. considered successful
this.nzModalRef.close(true);
this.nzModalRef.close({ other: 1 });
// 2. considered error
this.nzModalRef.close();

// Close
this.nzModalRef.destroy();
```

There are includes `create` & `createStatic` methods to open the normal & static modal. Add a few parameters based on `NzModalService`.

**Custom component HTML template**

```html
<div class="modal-header">
  <div class="modal-title">Title</div>
</div>

Your body content

<div class="modal-footer">
  <button nz-button [nzType]="'default'" (click)="cancel()">
    Cancel
  </button>
  <button nz-button [nzType]="'primary'" (click)="ok()">
    OK
  </button>
</div>
```

### API

| Property | Description  | Type  | Default   |
| --- | --- | --- | --- |
| `size` | Specify modal size | `sm,md,lg,xl,number,string` | `lg` |
| `exact` | Exact match return value, default is `true`, If the return value is not null (`null` or `undefined`) is considered successful, otherwise it is considered error. | `boolean` | `true` |
| `includeTabs` | Whether to wrap the tab page | `boolean` | `false` |
| `drag` | Drag | `boolean, ModalHelperDragOptions` | - |
| `useNzData` | Whether it is mandatory to use `nzData` to pass parameters. If it is `false`, it means that the parameters will be directly mapped to the component instance, and other values ​​can only be obtained through `NZ_MODAL_DATA`. | `boolean` | `false` |
| `modalOptions` | nz-modal raw parameters [ModalOptions](https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/modal/modal-types.ts) | `ModalOptions` | - |
