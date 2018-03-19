import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DelonACLConfig } from './acl.config';
import { ACLGuard } from './services/acl-guard';

// region: import
import { ACLService } from './services/acl.service';
const SERVICES = [ ACLService, ACLGuard ];

// components

import { ACLDirective } from './directives/acl.directive';
const COMPONENTS = [ ACLDirective ];

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ...COMPONENTS
    ],
    exports: [
        ...COMPONENTS
    ]
})
export class DelonACLModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: DelonACLModule,
            providers: [
                DelonACLConfig,
                ...SERVICES
            ]
        };
    }
}
