import { Component } from '@angular/core';

@Component({
    selector: `app-{{directoryName}}-{{name}}`,
    template: `<app-docs [item]="item">{{{demos}}}</app-docs>`,
    styles: [ `:host { display: block } `]
})
export class {{componentName}} {
    item: any = {{{data}}};
    codes: any[] = {{{codes}}};
}
