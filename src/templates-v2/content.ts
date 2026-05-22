import { Component } from '@angular/core';
import { DocsComponent } from '@shared';
import type { ModuleResDoc, ModuleDocDemoItem } from '@script-type';

{{imports}}

@Component({
  selector: `{{selector}}`,
  template: `<app-docs [codes]="codes" [item]="item">{{ngContent}}</app-docs>`,
  host: { class: `d-block` },
  imports: [DocsComponent{{standaloneImports}}]
})
export class {{componentName}} {
  item: ModuleResDoc = {{item}};
  codes: ModuleDocDemoItem[] = {{codes}};
}
