---
type: Layout
title: result
subtitle: Result
cols: 1
module: import { ResultModule } from '@delon/abc/result';
deprecated: 20.0.0
---

# Will be removed in v20, Please use `nz-result` instead.

Used to feedback the processing results of a series of tasks performed by the user.

## API

### result

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[type]` | Types, different types come with corresponding icons | `string` | - |
| `[title]` | Title for the result | `string,TemplateRef<void>` | - |
| `[description]` | Description for the result | `string,TemplateRef<void>` | - |
| `[extra]` | Supplemental information, with default gray background | `string,TemplateRef<void>` | - |
| `ng-content` | Operation suggestions, Recommended to place jump links, button groups, etc. | `ng-content` | - |
