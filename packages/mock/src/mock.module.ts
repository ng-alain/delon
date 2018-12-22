import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { DelonMockConfig } from './mock.config';
import { MockInterceptor } from './mock.interceptor';
import { MockService } from './mock.service';

@NgModule({})
export class DelonMockModule {
  static forRoot(config: DelonMockConfig): ModuleWithProviders {
    return {
      ngModule: DelonMockModule,
      providers: [
        MockService,
        { provide: DelonMockConfig, useValue: config },
        { provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true },
      ],
    };
  }

  static forChild(): ModuleWithProviders {
    return {
      ngModule: DelonMockModule,
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true },
      ],
    };
  }
}
