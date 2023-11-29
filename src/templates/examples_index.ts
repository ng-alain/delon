import { Component } from '@angular/core';
import { CodeBoxComponent, DocsComponent } from '@shared';
{{{imports}}}

@Component({
    selector: `{{selector}}`,
    template: `{{{demos}}}`,
    host: { '[class.d-block]': `'true'` },
    standalone: true,
    imports: [DocsComponent,CodeBoxComponent{{standaloneImports}}]
})
export class {{componentName}} {
    item: any = {{{item}}};
}
