import { ENVIRONMENT_INITIALIZER, EnvironmentProviders, inject, makeEnvironmentProviders } from '@angular/core';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { CellService } from './cell.service';

export interface CellWidgetProvideConfig {
  KEY: string;
  type: NzSafeAny;
}

/**
 * Just only using Standalone widgets
 */
export function provideCellWidgets(...widgets: CellWidgetProvideConfig[]): EnvironmentProviders {
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
