import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

// region: import
import { ACLService } from './services/acl.service';
const SERVICES = [ ACLService ];

// components

import { ACLDirective } from './directives/acl.directive';
const COMPONENTS = [ ACLDirective ];

// pipes
const PIPES = [  ];

// endregion

// region: export

export { ACLService } from './services/acl.service';
export { ACLDirective } from './directives/acl.directive';
export { ACLType } from './services/acl.type';

// components

// endregion

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ...COMPONENTS,
        ...PIPES
    ],
    exports: [
        ...COMPONENTS,
        ...PIPES
    ]
})
export class AlainACLModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AlainACLModule,
            providers: [
                ...SERVICES
            ]
        };
    }
}
