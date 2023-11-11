import { EnvironmentProviders, InjectionToken, makeEnvironmentProviders } from '@angular/core';

import { MockOptions } from './interface';

export const DELON_MOCK_CONFIG = new InjectionToken<MockOptions>('alain-mock-config');

export function provideDelonMockConfig(config?: MockOptions): EnvironmentProviders {
  return makeEnvironmentProviders([{ provide: DELON_MOCK_CONFIG, useValue: config }]);
}
