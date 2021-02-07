---
type: Form
title: range-picker
subtitle: 日期范围
cols: 1
module: import { DateRangeModule } from '@delon/abc/date-picker';
---

基于 `nz-range-picker` 进一步优化，更好的服务于开始与结束日期。

## API

### [extend]

需要配合 [nz-range-picker](https://ng.ant.design/components/date-picker/zh#nz-range-picker) 一起使用，例如：

```html
<nz-range-picker [(ngModel)]="i.start" extend [(ngModelEnd)]="i.end"></nz-range-picker>
```

| 成员 | 说明 | 类型 | 默认值 | 全局配置 |
|----|----|----|-----|------|
| `[(ngModelEnd)]` | 结束日期，开始与结束同时有值才会生效 | `Date` | - |  |
| `[shortcut]` | 设置快捷键 | `boolean, DateRangePickerShortcut` | `false` | ✅ |

#### DateRangePickerShortcut

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[enabled]` | 是否启用 | `boolean` | `false` |
| `[closed]` | 是否点击后立即关闭面板 | `boolean` | `true` |
| `[enabled]` | 快捷列表 | `DateRangePickerShortcutItem[]` | `今天,昨天,近3天,近7天,本周,本月,全年` |

### range-picker

**已过期**使用 `nz-range-picker` 与 `extend` 指令配合来替代 `range-picker`，NG-ALAIN 将在 `12.0.0` 时移除 `range-picker`。

```html
<range-picker [(ngModel)]="i.start" [(ngModelEnd)]="i.end"></range-picker>
```

变更为：

```html
<nz-range-picker [(ngModel)]="i.start" extend [(ngModelEnd)]="i.end"></nz-range-picker>
```
