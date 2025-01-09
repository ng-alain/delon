import { Component } from '@angular/core';
import { CodeBoxComponent } from '@shared';
{{{imports}}}

@Component({
    selector: `{{selector}}`,
    template: `{{{demos}}}`,
    host: { '[class.d-block]': `'true'` },
    standalone: true,
    imports: [CodeBoxComponent{{standaloneImports}}]
})
export class {{componentName}} {
    item: any = {{{item}}};
}
