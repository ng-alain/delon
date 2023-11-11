import { Component } from '@angular/core';

@Component({
    selector: `{{selector}}`,
    template: `<app-docs [codes]="codes" [item]="item">{{{demos}}}</app-docs>`,
    host: { '[class.d-block]': `'true'` }
})
export class {{componentName}} {
    item: any = {{{item}}};
    codes: any[] = {{{codes}}};
}
