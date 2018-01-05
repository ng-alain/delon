import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ACLOptions, DACL_OPTIONS_TOKEN, DACL_USER_OPTIONS_TOKEN, DEFAULT } from './acl.options';
import { ACLGuard } from './services/acl-guard';

// region: import
import { ACLService } from './services/acl.service';
const SERVICES = [ ACLService, ACLGuard ];

// components

import { ACLDirective } from './directives/acl.directive';
const COMPONENTS = [ ACLDirective ];

// pipes
const PIPES = [  ];

// endregion

// region: export

export { ACLService } from './services/acl.service';
export { ACLDirective } from './directives/acl.directive';
export * from './acl.options';
export * from './services/acl.type';
export * from './services/acl-guard';

// components

// endregion

export function optionsFactory(options: ACLOptions) {
    return Object.assign(DEFAULT, options);
}

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
    static forRoot(options?: ACLOptions): ModuleWithProviders {
        return {
            ngModule: AlainACLModule,
            providers: [
                { provide: DACL_USER_OPTIONS_TOKEN, useValue: options },
                { provide: DACL_OPTIONS_TOKEN, useFactory: optionsFactory, deps: [DACL_USER_OPTIONS_TOKEN] },
                ...SERVICES
            ]
        };
    }
}
