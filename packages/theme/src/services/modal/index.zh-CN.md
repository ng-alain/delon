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

// 成功范例
// 1. 视为成功
this.subject.close(true);
this.subject.close({ other: 1 });
// 2. 视为失败
this.subject.close();

// 关闭：
this.subject.destroy();
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
| `size` | 指定对话框大小 | `sm,md,lg,xl,number` | `lg` |
| `exact` | 是否精准（默认：`true`），若返回值非空值（`null`或`undefined`）视为成功，否则视为错误 | `boolean` | `true` |
| `includeTabs` | 是否包裹标签页 | `boolean` | `false` |
| `modalOptions` | nz-modal 对话框原始参数 [ModalOptionsForService](https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/modal/nz-modal.type.ts) | `ModalOptionsForService` | - |
