import { NgModule } from '@angular/core';
import { AutoFocusDirective } from './auto-focus.directive';

const COMPONENTS = [AutoFocusDirective];

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class AutoFocusModule {}
