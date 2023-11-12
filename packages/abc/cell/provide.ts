import { ENVIRONMENT_INITIALIZER, EnvironmentProviders, inject, makeEnvironmentProviders } from '@angular/core';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { CellService } from './cell.service';

export function provideCellWidgets(...widgets: Array<{ KEY: string; type: NzSafeAny }>): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useValue: () => {
        const srv = inject(CellService);
        widgets.forEach(widget => srv.registerWidget(widget.KEY, widget.type));
      }
    }
  ]);
}
