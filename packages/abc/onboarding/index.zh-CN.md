---
type: Basic
title: onboarding
subtitle: 用户引导流程
order: 7
module: import { OnboardingModule } from '@delon/abc/onboarding';
---

用户引导流程，是帮助用户更好的理解和使用产品。

## API

### OnboardingService

组件只支持使用 `OnboardingService` 服务来构建。

| 成员 | 说明 |
|----|----|
| `start(data: OnboardingData)` | 开启新的用户引导流程 |
| `next()` | 下一项 |
| `prev()` | 上一项 |
| `done()` | 完成 |

### OnboardingData

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[items]` | 引导项列表 | `OnboardingItem[]` | `[]` |
| `[mask]` | 是否展示遮罩 | `boolean` | `true` |
| `[maskClosable]` | 点击蒙层是否允许关闭 | `boolean` | `true` |
| `[showTotal]` | 是否显示总量 | `boolean` | `false` |

### OnboardingItem

| 成员 | 说明 | 类型 | 默认值 | 
|----|----|----|-----|
| `[selectors]` | CSS选项项，用于查找目标元素 | `string` | - |
| `[position]` | 引导面板显示位置 | `top, left, right, bottom, topLeft, topRight, bottomLeft, bottomRight, leftTop, leftBottom, rightTop, rightBottom` | `bottomLeft` |
| `[className]` | 引导面板类名 | `string` | - |
| `[width]` | 引导面板宽度 | `number` | - |
| `[title]` | 引导面板标题 | `string, TemplateRef<void>` | - |
| `[content]` | 引导面板内容 | `string, SafeHtml, TemplateRef<void>` | - |
| `[skip]` | 跳过按钮文本，`null` 表示强击不显示 | `string, TemplateRef<void>, null` | `跳过` |
| `[prev]` | 跳过按钮文本，`null` 表示强击不显示 | `string, TemplateRef<void>, null` | `上一项` |
| `[next]` | 跳过按钮文本，`null` 表示强击不显示 | `string, TemplateRef<void>, null` | `下一项` |
| `[done]` | 跳过按钮文本，`null` 表示强击不显示 | `string, TemplateRef<void>, null` | `完成` |
| `[url]` | 目标路由页 | `string` | - |
| `[before]` | 当触发 `next` 时表示进入前回调，`number` 表示延迟 | `Observable<any>, number` | - |
| `[after]` | 当触发 `prev` 时表示进入前回调，`number` 表示延迟 | `Observable<any>, number` | - |
