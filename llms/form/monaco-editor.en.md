---
title: monaco-editor
subtitle: Monaco Editor
type: Third Widgets
---

Markdown Editor

## How to Use

**Installation dependencies**  

`yarn add @ng-util/monaco-editor`

- 1. Register `provideNuMonacoEditorConfig()` in `app.config.ts`
- 2. Register `withMonacoEditorWidget` in [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9).

> For more Monaco Editor configuration, please refer to [@ng-util/monaco-editor](https://github.com/ng-util/ng-util/blob/master/packages/monaco-editor/README.md#usage).

## API

### ui

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[options]` | Configuration options, [official website](https://microsoft.github.io/monaco-editor/docs.html) | `monaco.editor.IStandaloneEditorConstructionOptions` | - |
| `[delay]` | Time of lazy loading | `number` | - |
| `[change]` | Callback function when content in editor is changed | `(value: string) => void` | - |
| `[height]` | Height of monaco editor | `string` | `200px` |
| `[model]` | Model of monaco editor | `NuMonacoEditorModel` | - |
| `(event)` | Event callback | `EventEmitter<NuMonacoEditorEvent>` | - |

---

## Examples

### Basic Usage

Simplest of usage.

```typescript
import { Component, inject } from '@angular/core';

import { DelonFormModule, SFSchema } from '@delon/form';
import type { MonacoEditorWidgetSchema } from '@delon/form/widgets-third/monaco-editor';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-monaco-editor-simple',
  template: `<sf [schema]="schema" (formSubmit)="submit($event)" />`,
  imports: [DelonFormModule]
})
export class FormMonacoEditorSimple {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      json: {
        type: 'string',
        title: 'JSON',
        default: `{"string": "abc","number": 1 }`,
        ui: {
          widget: 'monaco-editor',
          options: { language: 'json' }
        } as MonacoEditorWidgetSchema
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```
