import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { MockOptions } from './interface';
import { MockInterceptor } from './mock.interceptor';

@NgModule({})
export class DelonMockModule {
  static forRoot(options?: MockOptions): ModuleWithProviders<DelonMockModule> {
    return {
      ngModule: DelonMockModule,
      providers: [
        { provide: MockOptions, useValue: options },
        { provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true },
      ],
    };
  }

  static forChild(): ModuleWithProviders<DelonMockModule> {
    return {
      ngModule: DelonMockModule,
      providers: [{ provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true }],
    };
  }
}
