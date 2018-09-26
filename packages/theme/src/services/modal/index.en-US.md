---
order: 3
title: Modal Helper
type: Service
---

Based on the `NzModalService` package, it solves some known issues:

- More friendly handling callbacks
- Automatic management of `z-index` values

## Usage

```ts
this.modalHelper.create(FormEditComponent, { i }).subscribe(res => this.load());

// Ok callback
// 1. considered successful
this.subject.close(true);
this.subject.close({ other: 1 });
// 2. considered error
this.subject.close();

// Close
this.subject.destroy();
```

There are includes `create` & `createStatic` methods to open the normal & static modal. Add a few parameters based on `NzModalService`.

### API

| Property | Description  | Type  | Default   |
| --- | --- | --- | --- |
| `size` | `sm,md,lg,xl,number` | `lg` | Specify dialog size |
| `exact` | `boolean` | `true` | exact match return value, default is `true`, If the return value is not null (`null` or `undefined`) is considered successful, otherwise it is considered error. |
| `includeTabs` | `boolean` | `false` | Whether to wrap the tab page |
| `modalOptions` | `ModalOptionsForService` | - | nz-modal dialog raw parameters |
