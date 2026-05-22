import { Component } from '@angular/core';
import { CodeBoxComponent } from '@shared';
import type { ModuleDocDemoItem } from '@script-type';

{{imports}}

@Component({
  selector: `{{selector}}`,
  template: `{{ngContent}}`,
  host: { class: `d-block` },
  imports: [CodeBoxComponent{{standaloneImports}}]
})
export class {{componentName}} {
  item: ModuleDocDemoItem = {{item}};
}
