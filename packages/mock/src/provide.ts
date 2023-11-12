import { ɵHTTP_ROOT_INTERCEPTOR_FNS } from '@angular/common/http';
import { EnvironmentProviders, InjectionToken, makeEnvironmentProviders } from '@angular/core';

import { MockOptions } from './interface';
import { mockInterceptor } from './mock.interceptor';
import { MockService } from './mock.service';

export const DELON_MOCK_CONFIG = new InjectionToken<MockOptions>('alain-mock-config');

export function provideMockConfig(config?: MockOptions): EnvironmentProviders {
  return makeEnvironmentProviders([
    { provide: DELON_MOCK_CONFIG, useValue: config },
    {
      provide: ɵHTTP_ROOT_INTERCEPTOR_FNS,
      useValue: mockInterceptor,
      multi: true,
      deps: [MockService]
    }
  ]);
}
