---
order: 3
title: ModalHelper
subtitle: 对话框辅助类
type: Service
---

基于 `NzModalService` 封装，它解决一些已知问题：

- 更友好的处理回调

## 用法

```ts
this.modalHelper.create(FormEditComponent, { i }).subscribe(res => this.load());

// 成功范例，其中 `nzModalRef` 指目标组件在构造函数 `NzModalRef` 变量名
// 1. 视为成功
this.nzModalRef.close(true);
this.nzModalRef.close({ other: 1 });
// 2. 视为失败
this.nzModalRef.close();

// 关闭：
this.nzModalRef.destroy();
```

包括两个方法体 `create` & `createStatic` 分别打开普通&静态对话框。在 `NzModalService` 基础上新增若干参数。

**自定义组件HTML模板**

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

| 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `size` | 指定对话框大小 | `sm,md,lg,xl,number,string` | `lg` |
| `exact` | 是否精准（默认：`true`），若返回值非空值（`null`或`undefined`）视为成功，否则视为错误 | `boolean` | `true` |
| `includeTabs` | 是否包裹标签页 | `boolean` | `false` |
| `drag` | 支持拖动 | `boolean, ModalHelperDragOptions` | - |
| `useNzData` | 是否强制使用 `nzData` 传递参数，若为 `false` 表示参数会直接映射到组件实例中，其他值只能通过 `NZ_MODAL_DATA` 的方式来获取参数 | `boolean` | `false` |
| `modalOptions` | 对话框 [ModalOptions](https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/modal/modal-types.ts) 参数 | `ModalOptions` | - |
