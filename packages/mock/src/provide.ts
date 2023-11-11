import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { EnvironmentProviders, InjectionToken, makeEnvironmentProviders } from '@angular/core';

import { MockOptions } from './interface';
import { MockInterceptor } from './mock.interceptor';

export const DELON_MOCK_CONFIG = new InjectionToken<MockOptions>('alain-mock-config');

export function provideDelonMockConfig(config?: MockOptions): EnvironmentProviders {
  return makeEnvironmentProviders([
    { provide: DELON_MOCK_CONFIG, useValue: config },
    { provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true }
  ]);
}
