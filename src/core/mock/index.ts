import { NgModule, ModuleWithProviders } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { MockOptions, DM_OPTIONS_TOKEN, DM_USER_OPTIONS_TOKEN, DEFAULT } from './mock.options';
import { MockService } from './src/mock.service';
import { MockInterceptor } from './src/mock.interceptor';

// region: export

export * from './mock.options';
export * from './src/interface';
export * from './src/status.error';
export * from './src/mock.service';
export * from './src/mock.interceptor';

// endregion

export function optionsFactory(options: MockOptions) {
    return Object.assign(DEFAULT, options);
}

@NgModule({ })
export class DelonMockModule {
    static forRoot(options: MockOptions): ModuleWithProviders {
        return {
            ngModule: DelonMockModule,
            providers: [
                MockService,
                { provide: DM_USER_OPTIONS_TOKEN, useValue: options },
                { provide: DM_OPTIONS_TOKEN, useFactory: optionsFactory, deps: [DM_USER_OPTIONS_TOKEN] },
                { provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true }
            ]
        };
    }
}
