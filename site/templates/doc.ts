import { Component } from '@angular/core';

@Component({
    selector: `app-{{directoryName}}-{{name}}`,
    template: `<app-docs [codes]="codes" [item]="item">{{{demos}}}</app-docs>`,
    styles: [ `:host { display: block } `]
})
export class {{componentName}} {
    item: any = {{{data}}};
    codes: any[] = {{{codes}}};
}
