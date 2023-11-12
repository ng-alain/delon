import { ENVIRONMENT_INITIALIZER, EnvironmentProviders, inject, makeEnvironmentProviders } from '@angular/core';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { STWidgetRegistry } from './st-widget';

/**
 * Just only using Standalone widgets
 */
export function provideSTWidgets(...widgets: Array<{ KEY: string; type: NzSafeAny }>): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useValue: () => {
        const srv = inject(STWidgetRegistry);
        widgets.forEach(widget => srv.register(widget.KEY, widget.type));
      }
    }
  ]);
}
