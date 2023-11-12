import { Component } from '@angular/core';
import { DocsComponent, CodeBoxComponent } from '@shared';
{{{imports}}}

@Component({
  selector: `{{selector}}`,
  template: `<app-docs [codes]="codes" [item]="item">{{{demos}}}</app-docs>`,
  host: { '[class.d-block]': `'true'` },
  standalone: true,
  imports: [DocsComponent,CodeBoxComponent{{standaloneImports}}]
})
export class {{componentName}} {
  item: any = {{{item}}};
  codes: any[] = {{{codes}}};
}
