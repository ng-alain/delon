---
title: segmented
subtitle: Segmented
type: Non-built-in widgets
---

- When displaying multiple options and user can select a single option;
- When switching the selected option, the content of the associated area changes.

## How to use

Non-built-in modules need to additionally register `withSegmentedWidget` in [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9).

## API

### ui

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[block]` | Option to fit width to its parent\'s width | `boolean` | false |  |
| `[asyncData]` |  Set children optional | `() => Observable<NzSegmentedOptions>` | - |  |
| `(valueChange)` | Emits when index of the currently selected option changes | `(data: { index: number; item: SFValue }) => void` | - |  |
