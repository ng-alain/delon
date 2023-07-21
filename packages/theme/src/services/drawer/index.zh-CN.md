---
order: 3
title: DrawerHelper
subtitle: 抽屉辅助类
type: Service
---

基于 `NzDrawerService` 封装，它解决一些已知问题：

- 更友好的处理回调
- 响应式处理

## create

```ts
this.drawerHelper.create('Edit', FormEditComponent, { i }).subscribe(res => this.load());
// 对于组件的成功&关闭的处理说明
// 成功
this.NzDrawerRef.close(data);
this.NzDrawerRef.close(true);
// 关闭
this.NzDrawerRef.close();
this.NzDrawerRef.close(false);

// 关闭所有已打开的抽屉
this.DrawerHelper.closeAll();
```

包括 `create` & `static` 分别用于打开普通或静态抽屉。

**自定义组件HTML模板**

```html
内容
<div class="drawer-footer">
  // 底部工具条由 `drawer-footer` 包裹
  <button nz-button [nzType]="'default'" (click)="cancel()">
    Cancel
  </button>
  <button nz-button [nzType]="'primary'" (click)="ok()">
    OK
  </button>
</div>
```

若无需要底部工具条，需要指定参数 `footer: false`。

## API

| 名称 | 类型 | 默认值 | 功能 |
| --- | --- | --- | --- |
| `size` | 指定抽屉大小，响应式只支持非数字值，若值为数值类型，则根据 `nzPlacement` 自动转化为 `nzHeight` 或 `nzWidth` | `sm,md,lg,xl,number` | `md` |
| `footer` | 是否需要工具条 | `boolean` | `true` |
| `footerHeight` | 工具条高度 | `number` | `55` |
| `exact` | 是否精准（默认：`true`），若返回值非空值（`null`或`undefined`）视为成功，否则视为错误 | `boolean` | `true` |
| `drawerOptions` | 抽屉 [NzDrawerOptions](https://ng.ant.design/components/drawer/zh#nzdraweroptions) 参数 | `NzDrawerOptions` | - |

### Method

- `closeAll` 关闭所有已打开的抽屉
