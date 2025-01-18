import { NgModule } from '@angular/core';

import { STRowDirective } from './st-row.directive';
import { STWidgetHostDirective } from './st-widget-host.directive';
import { STComponent } from './st.component';

const COMPONENTS = [STComponent, STRowDirective, STWidgetHostDirective];

@NgModule({
  imports: COMPONENTS,
  exports: COMPONENTS
})
export class STModule {}
