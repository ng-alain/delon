import { Component } from '@angular/core';

@Component({
    selector: `{{selector}}`,
    template: `{{{demos}}}`,
    styles: [ `:host { display: block } `]
})
export class {{componentName}} {
    item: any = {{{item}}};
}
