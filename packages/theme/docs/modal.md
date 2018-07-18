---
order: 3
title:
  en-US: Modal Helper
  zh-CN: 对话框辅助类
type: Service
---

这是对 `NzModalService` 进一步封装，它解决一些已知问题：

- 更友好的处理回调
- 自动管理 `z-index` 值

打开一个对话框，默认会过滤一些事件的回调，因此更容易处理回调：

## create精准

```ts
this.modalHelper.create(FormEditComponent, { i }).subscribe(res => this.load());

// 成功范例
// 1. 精准必须指定 `close(result)` 参数
this.subject.close(true);
// 2. 精准无指定时视为错误
this.subject.close();

// 关闭：
this.subject.destroy();
```

包括两个方法体 `create` & `createStatic` 分别打开普通&静态对话框。在 `NzModalService` 基础上新增若干参数。

### API

| 名称 | 类型 | 默认值 | 功能 |
| --- | --- | --- | --- |
| `size` | `sm,md,lg,xl,数字` | `lg` | 指定对话框大小 |
| `exact` | `boolean` | `true` | 是否精准（默认：`true`），若返回值非空值（`null`或`undefined`）视为成功，否则视为错误 |
| `includeTabs` | `boolean` | `false` | 是否包裹标签页 |
| `modalOptions` | `ModalOptionsForService` | - | nz-modal 对话框原始参数 |

## open非精准

```ts
this.modalHelper.open(FormEditComponent, { i }).subscribe(res => this.load());

// 成功范例：以下都视为成功
this.subject.close(true);
this.subject.close();

// 关闭：
this.subject.destroy();
```

包括两个方法体 `open` & `static` 分别打开普通&静态对话框。在 `NzModalService` 基础上新增若干参数，在 `NzModalService` 基础上新增了 `size` 参数，其值包括：`sm`、`lg`、`空字符串` 表示三种不同尺寸的对话框。

> 建议：尽可能采用 `create` 精准模式，非精准未来可能会逐步被替代。
