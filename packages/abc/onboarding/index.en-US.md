---
type: Basic
title: onboarding
subtitle: Onboarding
order: 7
module: import { OnboardingModule } from '@delon/abc/onboarding';
---

The user guidance is to help users better understand and use the product.

## API

### OnboardingService

The components only support the use of `OnboardingService` service to build.

| Name | Description |
|------|-------------|
| `start(data: OnboardingData)` | Start a new user guidance |
| `next()` | Next |
| `prev()` | Prev |
| `done()` | Done |

### OnboardingData

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[items]` | Onboarding items | `OnboardingItem[]` | `[]` |
| `[mask]` | Whether to show mask or not | `boolean` | `true` |
| `[maskClosable]` | Clicking on the mask (area outside the onboarding) to close the onboarding or not | `boolean` | `true` |
| `[showTotal]` | Whether to show total | `boolean` | `false` |

### OnboardingItem

| Property | Description | Type | Default | 
|----------|-------------|------|---------|
| `[selectors]` | The CSS selector, which identifies the html element you want to describe | `string` | - |
| `[position]` | Positioning of the selector element, relative to the contents of the children | `top, left, right, bottom, topLeft, topRight, bottomLeft, bottomRight, leftTop, leftBottom, rightTop, rightBottom` | `bottomLeft` |
| `[className]` | Class name of the panel | `string` | - |
| `[width]` | Width of the panel | `number` | - |
| `[title]` | Headline text of the panel | `string, TemplateRef<void>` | - |
| `[content]` | Detail text of the panel | `string, SafeHtml, TemplateRef<void>` | - | 
| `[skip]` | Skip button of the panel, `null` Don't show | `string, TemplateRef<void>, null` | `Skip` |
| `[prev]` | Prev button of the panel, `null` Don't show | `string, TemplateRef<void>, null` | `Prev` |
| `[next]` | Next button of the panel, `null` Don't show | `string, TemplateRef<void>, null` | `Next` |
| `[done]` | Done button of the panel, `null` Don't show | `string, TemplateRef<void>, null` | `Done` |
| `[url]` | Target router url | `string` | - |
| `[before]` | Callback before entering, triggered when call `next` operates, `number` indicate delay | `Observable<any>, number` | - |
| `[after]` | Callback after entering, triggered when call `prev` operates, `number` indicate delay | `Observable<any>, number` | - |
