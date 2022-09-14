import { NgModule } from '@angular/core';

import { CellService } from '@delon/abc/cell';

import { SharedModule } from '../shared.module';
import { CellTestWidget } from './test';

export const CELL_WIDGET_COMPONENTS = [CellTestWidget];

@NgModule({
  declarations: CELL_WIDGET_COMPONENTS,
  imports: [SharedModule],
  exports: CELL_WIDGET_COMPONENTS
})
export class CellWidgetModule {
  constructor(srv: CellService) {
    srv.registerWidget(CellTestWidget.KEY, CellTestWidget);
  }
}
